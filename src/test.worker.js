import * as Babel from '@babel/standalone'
import {JSDOM} from './jsdom'
import chai, { expect } from 'chai'
import { createProject, ts } from "@ts-morph/bootstrap";
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

onmessage = async ({ data: testSpec }) => {
    const { language, scripts } = testSpec
    let results = await tests[language](scripts)
    postMessage(results)
}

let tests = {

    javascript: (scripts, babelConfig = { filename: 'test.js', presets: ['env'] }) => {
        const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
        const { document } = window;
        const { setupScript, submissionScript, testScript } = scripts
        let log = []
        let mockConsole = {
            log: (...vars) => {
                log.push(...vars)
            }
        }
        try {
            let completeScript = `${setupScript};\n${submissionScript};\n${testScript}`

            completeScript = Babel.transform(completeScript, babelConfig).code
            let test = new Function('expect', 'console', 'code', 'window', 'document', completeScript)

            test(expect, mockConsole, submissionScript, window, document)
            return {
                log,
                color: 'green',
                message: "Great Job!"
            }
        } catch (err) {
            return {
                log,
                color: 'red',
                message: err.message
            }
        }
    },

    python: () => {
        return {
            message: '(Testing is not yet implemented for Python)'
        }
    },

    jsx: (scripts) => {
        let { setupScript, submissionScript, testScript } = scripts
        setupScript = `${reactScript};\n${setupScript}`
        return tests.javascript({ setupScript, submissionScript, testScript}, {
            filename: 'test.jsx',
            plugins: [
                'proposal-class-properties',
                'transform-modules-commonjs'
            ],
            presets: [['react', {
                "pragma": "createElement", // default pragma is React.createElement
                "pragmaFrag": "span", // default is React.Fragment
                "throwIfNamespace": false // defaults to true
            }]]
        })
    },

    typescript: async (scripts) => {
        let { setupScript, submissionScript, testScript } = scripts
        const project = await createProject({ useInMemoryFileSystem: true });
        project.createSourceFile("test.ts", submissionScript);

        const diagnostics = ts.getPreEmitDiagnostics(project.createProgram());

        const output = project.formatDiagnosticsWithColorAndContext(diagnostics)

        if(output.trim().length){
            return {
                message: output.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''),
                color: 'red'
            } 
        } else { 
            setupScript = ts.transpile(setupScript)
            submissionScript = ts.transpile(submissionScript)
            testScript = ts.transpile(testScript)
            return tests.javascript({ setupScript, submissionScript, testScript })
        }
    }
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
        element.instance = instance
    } else {
        element = component(props)
    }
    element.className = component.name
    return element
}

const createDOMElement = (tagName, props, children) => {
    const element = document.createElement(tagName)
    for(let propName in props) element[propName] = props[propName]
    element.append(...children)
    return element
}

const createElement = (tagName, props, ...children) =>{
    children = flatten(children)
    return typeof tagName == 'string' 
        ? createDOMElement(tagName, props, children)
        : createComponent(tagName, props, children)
}
`