window.addEventListener("DOMContentLoaded", () => {
    const answerButtons = document.querySelectorAll(".survey_button");
    const buttonsSuccess = document.querySelectorAll(".btn-success");
    
    let answers = [];

    answerButtons.forEach((button) => {
        button.addEventListener("click", () => {
            answers.push(button.textContent);
        })
    })
    
    buttonsSuccess.forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log(answers);
            answers = [];
        })
    })
})