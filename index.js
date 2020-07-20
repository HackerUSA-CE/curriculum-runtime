
const components = {
    'multiple-choice': (question) => {
        let { questionId } = question.dataset
        let answerButtons = question.querySelectorAll(`[data-answer-for="${questionId}"]`)
        console.log(answerButtons)
    }
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