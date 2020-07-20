
const components = {
    'multiple-choice': (question) => {
        let { questionId } = question.dataset
        let answerButtons = question.querySelectorAll(`[data-answer-for="${questionId}"]`)
        let feedbackDiv = question.querySelector(`[data-feedback-for="${questionId}"]`)
        for(let answerButton of answerButtons){
            let { correct, feedback } = getMetadata(answerButton)
            answerButton.addEventListener('click', () => {
                for(let answerButton of answerButtons) answerButton.disabled = true
                feedbackDiv.innerText = `${correct ? "Correct!" : "Incorrect"}
                ${feedback}`
            })
        }
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