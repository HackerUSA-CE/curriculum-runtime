import CodeMirror from 'codemirror/lib/codemirror.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/cobalt.css'

let chaiScript = document.createElement('script')
chaiScript.src= "https://unpkg.com/chai/chai.js"
document.head.append(chaiScript)

const components = {
    'multiple-choice': (questionDiv) => {
        let { questionId } = questionDiv.dataset
        let answerButtons = questionDiv.querySelectorAll(`[data-answer-for="${questionId}"]`)
        let feedbackDiv = questionDiv.querySelector(`[data-feedback-for="${questionId}"]`)
        for(let answerButton of answerButtons){
            let { correct, feedback } = getMetadata(answerButton)
            answerButton.addEventListener('click', () => {
                for(let answerButton of answerButtons) answerButton.disabled = true
                feedbackDiv.innerText = `${correct ? "Correct!" : "Incorrect"}
                ${feedback || ''}`
            })
        }
    },
    'code-exercise': (codeExerciseDiv) => {
        let codeExerciseTextArea = codeExerciseDiv.querySelector('[data-textarea]')
        let codeExerciseTestOutput = codeExerciseDiv.querySelector('[data-test-output]') 
        let {testScript} = getMetadata(codeExerciseDiv)
        let editor = CodeMirror.fromTextArea(codeExerciseTextArea, {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'cobalt'
        })
        editor.on('change', () => {
            chai.should()
            let code = editor.getValue()
            let test = new Function('expect', 'console', `${code}\n${testScript}`)
            let log = []
            let console = {
                log: (vars) => {
                    log.push(...vars)
                }
            }
            try {
                test(chai.expect, console)
                codeExerciseTestOutput.innerText = "Great Job!"
            } catch(err){
                codeExerciseTestOutput.innerText = err.message
            }
        })
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
register()