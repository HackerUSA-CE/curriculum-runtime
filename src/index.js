import CodeMirror from 'codemirror/lib/codemirror.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/jsx/jsx.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

const WEB_WORKER_URL = 'http://localhost:8080/test.worker.js'

let chaiScript = document.createElement('script')
chaiScript.src= "https://unpkg.com/chai/chai.js"
document.head.append(chaiScript)

let babelScript = document.createElement('script')
babelScript.src= "https://unpkg.com/@babel/standalone/babel.min.js"
document.head.append(babelScript)


fetch(WEB_WORKER_URL)
    .then( res => res.text())
    .then( result => {
        let workerSrcBlob = new Blob([result], { type: 'text/javascript' });
        let  workerBlobURL = URL.createObjectURL(workerSrcBlob);
        
        var testWorker = new Worker(workerBlobURL)
        testWorker.onmessage = function(e){
            console.log(e)
        }
    })



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
            let completeScript = `${setupScript}\n${code}\n${testScript}`
            // send completeScript and language to the worker
        })

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