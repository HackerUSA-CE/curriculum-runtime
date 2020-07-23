import CodeMirror from 'codemirror/lib/codemirror.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/jsx/jsx.js'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'
import { createProject, ts } from "@ts-morph/bootstrap";



let chaiScript = document.createElement('script')
chaiScript.src= "https://unpkg.com/chai/chai.js"
document.head.append(chaiScript)

let babelScript = document.createElement('script')
babelScript.src= "https://unpkg.com/@babel/standalone/babel.min.js"
document.head.append(babelScript)

let tsScript = document.createElement('script')
tsScript.src= "https://unpkg.com/typescript@3.9.7/lib/typescript.js"
document.head.append(tsScript)

const components = {
    'multiple-choice': (questionDiv) => {
        let { questionId } = questionDiv.dataset
        let answerButtons = questionDiv.querySelectorAll(`[data-answer-for="${questionId}"]`)
        let feedbackDiv = questionDiv.querySelector(`[data-feedback-for="${questionId}"]`)
        for(let answerButton of answerButtons){
            let radio = answerButton.querySelector('input')
            let { correct, feedback } = getMetadata(answerButton)
            answerButton.addEventListener('click', () => {
                for(let answerButton of answerButtons) answerButton.querySelector('input').checked = false
                radio.checked = true;
                feedbackDiv.style.color = correct ? 'green' : 'red'
                feedbackDiv.innerText = `${correct ? "Correct!" : "Incorrect"}
                ${feedback || ''}`
            })
        }
    },
    'code-exercise': (codeExerciseDiv) => {
        let modes = {
            'javascript': 'javascript',
            'python': 'python',
            'jsx': 'jsx',
            'typescript': 'text/typescript'
        }
        let tests = {
            javascript: (code, babelConfig = { filename: 'test.js', presets: [ 'env' ] }) => {
                let log = []
                let mockConsole = {
                    log: (vars) => {
                        log.push(...vars)
                    }
                }
                try {
                    let completeScript = `${setupScript}\n${code}\n${testScript}`
                    
                    completeScript = Babel.transform(completeScript, babelConfig).code
console.log(completeScript)
                    let test = new Function('expect', 'console', 'code', completeScript)
                    test(chai.expect, mockConsole, code)
                    codeExerciseTestOutput.style.color = 'green'
                    codeExerciseTestOutput.innerText = "Great Job!"
                } catch(err){
                    codeExerciseTestOutput.style.color = 'red'
                    codeExerciseTestOutput.innerText = err.message
                }
            },
            python: () => {
                codeExerciseTestOutput.innerText = '(Testing is not yet implemented for Python)'
            },
            jsx: (code) => {
                tests.javascript(code, {
                    filename: 'test.jsx',
                    plugins: [
                        'proposal-class-properties',
                        'transform-modules-commonjs'
                        // ["module-resolver", {
                        //     "root": ["./"]
                        // }]
                    ],
                    presets: [['react', {
                        "pragma": "createElement", // default pragma is React.createElement
                        "pragmaFrag": "span", // default is React.Fragment
                        "throwIfNamespace": false // defaults to true
                    }]]
                })
            },
            typescript: async (code) => {
                const project = await createProject({ useInMemoryFileSystem: true });
                project.createSourceFile("test.ts", code);

                // const program = project.createProgram();
                const diagnostics = ts.getPreEmitDiagnostics(project.createProgram());

                console.log(project.formatDiagnosticsWithColorAndContext(diagnostics));
                tests.javascript(ts.transpile(code))
            }
        }

        let { setupScript, testScript, language } = getMetadata(codeExerciseDiv)

        if(language === 'jsx') setupScript = `${reactScript}\n${setupScript}`

        let codeExerciseTextArea = codeExerciseDiv.querySelector('[data-textarea]')
        let codeExerciseTestOutput = codeExerciseDiv.querySelector('[data-test-output]') 

        let editor = CodeMirror.fromTextArea(codeExerciseTextArea, {
            lineNumbers: true,
            mode: modes[language],
            theme: 'base16-light'
        })

        editor.on('change', () => {
            chai.should()
            let code = editor.getValue()
            testCode(code)
        })

        let testCode = (code) =>  tests[language](code)

        setTimeout(testCode, 500)
    }
}

const getMetadata = (element) => {
    const { metadataIndex } = element.dataset
    if(metadataIndex === undefined) return {}
    else return metadata[metadataIndex]
}

const register = () => {
    for(let componentName in components){
        let component = components[componentName]
        let elements = document.querySelectorAll(`[data-component="${componentName}"]`)
        for(let element of elements){
            component(element)
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
register()