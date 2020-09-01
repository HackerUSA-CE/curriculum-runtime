import * as Babel from '@babel/standalone'
import {JSDOM} from './jsdom'
import chai, { expect } from 'chai'
import { createProject, ts } from "@ts-morph/bootstrap";
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

onmessage = async ({ data: testSpec }) => {
    const { language, fileName, scripts } = testSpec
    let results = await tests[language](fileName, scripts)
    postMessage(results)
}

let logEncode = variable => {
    if(typeof variable === 'string') return `"${variable}"`
    if(typeof variable === 'number') return variable
    if(variable === undefined) return variable
    if([ null, undefined ].includes(variable)) return variable.toString()
    return JSON.stringify(variable, null, 2)
}

let tests = {

    javascript: (fileName, scripts, babelConfig = { filename: 'test.js', presets: ['env'] }) => {
        const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
        const { document } = window;
        const { setupScript, submissionScript, testScript, originalScript = submissionScript } = scripts
        let resultScript = `${setupScript};\n${submissionScript};`
        let log = []
        let mockConsole = {
            log: (...vars) => {
                log.push(vars.map(logEncode).join(', '))
            }
        }
        try {

            let completeScript = `${resultScript}\n${testScript}`

            completeScript = Babel.transform(completeScript, babelConfig).code
            let test = new Function('expect', 'console', 'code', 'window', 'document', 'require', 'exports', 'createModule', completeScript)

            test(expect, mockConsole, originalScript, window, document, require, createModule(fileName), createModule)

            return {
                log,
                color: 'green',
                message: "Great Job!",
                dom: document.body.innerHTML,
                resultScript
            }
        } catch (err) {
            return {
                log,
                color: 'red',
                message: err.message,
                dom: document.body.innerHTML,
                resultScript
            }
        }
    },

    python: () => {
        return {
            message: '(Testing is not yet implemented for Python)'
        }
    },

    html: (fileName, scripts) => {
        let { setupScript, submissionScript, testScript } = scripts
        let originalScript = submissionScript
        submissionScript = `
            document.write(\`${submissionScript}\`)
        `
        return tests.javascript(fileName, { setupScript, submissionScript, testScript, originalScript })
    },

    jsx: (fileName, scripts) => {
        let { setupScript, submissionScript, testScript } = scripts
        setupScript = `${reactScript};\n${setupScript}`
        return tests.javascript(fileName, { setupScript, submissionScript, testScript}, {
            filename: 'test.jsx',
            plugins: [
                'proposal-class-properties',
                ['transform-modules-commonjs', {
                    lazy: () => true
                }]
            ],
            presets: [['react', {
                "pragma": "createElement", // default pragma is React.createElement
                "pragmaFrag": "span", // default is React.Fragment
                "throwIfNamespace": false // defaults to true
            }]]
        })
    },

    typescript: async (fileName, scripts) => {
        let { setupScript, submissionScript, testScript } = scripts
        const project = await createProject({ useInMemoryFileSystem: true });
        project.createSourceFile(fileName, submissionScript);

        const diagnostics = ts.getPreEmitDiagnostics(project.createProgram());

        const output = project.formatDiagnosticsWithColorAndContext(diagnostics)

        if(output.trim().length){
            return {
                message: output.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''),
                color: 'red'
            } 
        } else { 
            let originalScript = submissionScript
            setupScript = ts.transpile(setupScript)
            submissionScript = ts.transpile(submissionScript)
            testScript = ts.transpile(testScript)
            return tests.javascript(fileName, { setupScript, submissionScript, testScript, originalScript })
        }
    }
}

const cache = {}

const require = (module) => {
    if(cache[module] === undefined && cache[`${module}.js`] === undefined) throw Error(`Could not find module '${module}'`)
    return cache[module] || cache[`${module}.js`] || {}
}

const createModule = (fileName) => {
    cache[fileName] = {__esModule: true}
    return cache[fileName]
}

const reactScript = `
class Component {
    setState(state){
        Object.assign(this.state, state)
    }
}
const React = {
    Component
}
const flatten = array => array.reduce( (array, element) => (
    Array.isArray(element)
        ? [ ...array, ...flatten(element) ]
        : [ ...array, element ]
), [])

const createComponent = (component, props, children) => {
    let element;
    props = props ? props : {}
    if(component.prototype instanceof Component ){
        let instance = new component(props);
        instance.props = { ...props, children }
        element = instance.render()
        if(element) element.instance = instance
    } else {
        element = component(props)
    }
    if(element === undefined) throw Error(\`Error: \${component.name}(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.\`)
    if(element){
        element.component = component
        element.props = props
    }
    return element
}

const createDOMElement = (tagName, props, children) => {
    const element = document.createElement(tagName)
    for(let propName in props) {
        if(typeof props[propName] === 'function') attachEventListener(element, propName, props[propName])
        else element[propName] = props[propName]
    }
    element.append(...children)
    return element
}

const attachEventListener = (element, propName, callback) => {
    if(recognizedEvents.includes(propName)){
        let eventName = propName.replace('on', '').toLowerCase()
        element.addEventListener(eventName, callback)
    }
}

const createElement = (tagName, props, ...children) =>{
    children = flatten(children)
    return typeof tagName == 'string' 
        ? createDOMElement(tagName, props, children)
        : createComponent(tagName, props, children)
}

let recognizedEvents = [
    "onCopy",
    "onCut",
    "onPaste",
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
    "onFocus",
    "onBlur",
    "onChange",
    "onInput",
    "onInvalid",
    "onReset",
    "onSubmit",
    "onError",
    "onLoad",
    "onClick",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit\nonDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave\nonMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onPointerDown",
    "onPointerMove",
    "onPointerUp",
    "onPointerCancel",
    "onGotPointerCapture\nonLostPointerCapture",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerOver",
    "onPointerOut",
    "onSelect\nonTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onScroll",
    "onWheel",
    "onAbort",
    "onCanPlay",
    "onCanPlayThrough",
    "onDurationChange",
    "onEmptied",
    "onEncrypted\nonEnded",
    "onError",
    "onLoadedData",
    "onLoadedMetadata",
    "onLoadStart",
    "onPause",
    "onPlay\nonPlaying",
    "onProgress",
    "onRateChange",
    "onSeeked",
    "onSeeking",
    "onStalled",
    "onSuspend\nonTimeUpdate",
    "onVolumeChange",
    "onWaiting",
    "onLoad",
    "onError",
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",
    "onTransitionEnd",
    "onToggle"
  ]
`