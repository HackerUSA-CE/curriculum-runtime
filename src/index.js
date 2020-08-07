import CodeMirror from 'codemirror/lib/codemirror.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/jsx/jsx.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

const WEB_WORKER_URL = 'https://hackerusa-ce.github.io/curriculum-runtime/test.worker.js'

let runTest;

fetch(WEB_WORKER_URL)
    .then(res => res.text())
    .then(result => {
        let workerSrcBlob = new Blob([result], { type: 'text/javascript' });
        let workerBlobURL = URL.createObjectURL(workerSrcBlob);
        let testWorker = new Worker(workerBlobURL)
        let testQueue = []

        runTest = (language, scripts) => {
            const testSpec =  { language, scripts }
            return new Promise(resolve => {
                testQueue.push({ testSpec, resolve })
                if(!managerRunning) runQueueManager()
            })
        }

        let managerRunning = false
        let runQueueManager = () => {
            managerRunning = true
            return new Promise(async resolve => {
                while (testQueue.length > 0) {
                    let { testSpec, resolve } = testQueue.shift()
                    let results = await sendTest(testSpec)
                    resolve(results)
                }
                resolve()
                managerRunning = false
            })
        }

        let sendTest = (testSpec) => {
            return new Promise(resolve => {
                testWorker.postMessage(testSpec)
                testWorker.onmessage = function ({ data: result }) {
                    resolve(result)
                }
            })
        }
    })



const components = {
    'multiple-choice': (questionDiv) => {
        let { questionId } = questionDiv.dataset
        let answerButtons = questionDiv.querySelectorAll(`[data-answer-for="${questionId}"]`)
        for (let answerButton of answerButtons) {
            let feedbackDiv = answerButton.querySelector(`[data-feedback-for="${questionId}"]`)
            let radio = answerButton.querySelector('input')
            let { correct, feedback } = getMetadata(answerButton)
            answerButton.addEventListener('click', () => {
                for (let answerButton of answerButtons) {
                    answerButton.querySelector('input').checked = false
                    answerButton.querySelector(`[data-feedback-for="${questionId}"]`).innerText = ''
                }
                radio.checked = true;
                feedbackDiv.style.color = correct ? 'green' : 'red'
                feedbackDiv.innerText = `${correct ? "Correct!" : "Incorrect"} ${feedback ? `- ${feedback}` : ''}`
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
        let codeExerciseTextArea = codeExerciseDiv.querySelector('[data-code-editor]')
        let codeExerciseTestOutput = codeExerciseDiv.querySelector('[data-test-output]')
        let codeExerciseConsoleOutput = codeExerciseDiv.querySelector('[data-console-output]')

        let editor = CodeMirror.fromTextArea(codeExerciseTextArea, {
            lineNumbers: true,
            mode: modes[language],
            theme: 'base16-light'
        })

        editor.on('change', async () => {
            debounce(displayTestResults, 1500)
        })

        let displayTestResults = async () => {
            let submissionScript = editor.getValue()
            codeExerciseTestOutput.style.color = 'inherit'
            codeExerciseTestOutput.innerText = 'Testing...'
            codeExerciseConsoleOutput.innerText = ''
            let { color, message, log } = await runTest(language, { setupScript, submissionScript, testScript})
            codeExerciseTestOutput.style.color = color
            codeExerciseTestOutput.innerText = message
            codeExerciseConsoleOutput.innerText = log.join('\n')
        }


        let debounce = (func, delay) => {
            clearTimeout(func.timeout)
            func.timeout = setTimeout(func, delay)
        }

        setTimeout(displayTestResults, 1000)
    }
}

const getMetadata = (element) => {
    const { metadataIndex } = element.dataset
    if (metadataIndex === undefined) return {}
    else return metadata[metadataIndex]
}

const register = () => {
    for (let componentName in components) {
        let component = components[componentName]
        let elements = document.querySelectorAll(`[data-component="${componentName}"]`)
        for (let element of elements) {
            component(element)
        }
    }
}

register()