let geogAnswers = ['b', 'a', 'a', 'd'];
let histAnswers = ['b', 'a', 'c', 'b'];
let sportAnswers = ['c', 'a', 'a', 'c'];
let filmAnswers = ['b', 'a', 'd', 'a'];

let result = document.querySelector('.results-area');
let displayPercentage = document.querySelector('.displayPercentage');
let btn = document.querySelector('.blue-button')

let geogQuiz = document.querySelector('.geog');
let historyQuiz = document.querySelector('.hist');
let sportQuiz = document.querySelector('.sport');
let filmQuiz = dicument.querySelector('.film')

let geogQuizForm = document.getElementById('geog-quiz');
let histQuizForm = document.getElementById('hist-quiz');
let sportQuizForm = document.getElementById('sport-quiz');
let filmQuizForm = document.getElementById('film-quiz');



historyQuiz.addEventListener('click', event => {
    geogQuiz.classList.remove("underline");
    sportQuiz.classList.remove("underline");
    filmQuiz.classList.remove("underline");
    historyQuiz.classList.add("underline");
    geogQuizForm.style.display = "none";
    sportQuizForm.style.display = "none";
    filmQuizForm.style.display = "none";
    histQuizForm.style.display = "block";
})

sportQuiz.addEventListener('click', event => {
    geogQuiz.classList.remove("underline");
    historyQuiz.classList.remove("underline");
    filmQuiz.class.remove("underline");
    sportQuiz.classList.add("underline");
    geogQuizForm.style.display = "none";
    histQuizForm.style.display = "none";
    filmQuizForm.style.display = "none";
    sportQuizForm.style.display = "block";
})

geogQuiz.addEventListener('click', event => {
    sportQuiz.classList.remove("underline");
    historyQuiz.classList.remove("underline");
    filmQuiz.classList.remove("underline");
    geogQuiz.classList.add("underline");
    histQuizForm.style.display = "none";
    sportQuizForm.style.display = "none";
    filmQuizForm.style.display = "none";
    geogQuizForm.style.display = "block";
})

filmQuiz.addEventListener('click', event => {
    geogQuiz.classList.remove("underline");
    sportQuiz.classList.remove("underline");
    filmQuiz.classList.remove("underline");
    historyQuiz.classList.add("underline");
    geogQuizForm.style.display = "none";
    sportQuizForm.style.display = "none";
    filmQuizForm.style.display = "none";
    histQuizForm.style.display = "block";
})



btn.addEventListener('click', (e) => {
    e.preventDefault();

    let percentage = 0;
    let gans = 0;
    let hans = 0;
    let sans = 0;
    let fans = 0;
    let total = 0;
    let selectedGAnswers = [geogQuizForm.q1.value, geogQuizForm.q2.value, geogQuizForm.q3.value, geogQuizForm.q4.value]

    selectedGAnswers.forEach((answer, index) => {
        if (answer === geogAnswers[index])
            gans += 1;
    })

    let selectedHAnswers = [histQuizForm.q1.value, histQuizForm.q2.value, histQuizForm.q3.value, histQuizForm.q4.value]

    selectedHAnswers.forEach((answer, index) => {
        if (answer === histAnswers[index])
            hans += 1;
    })

    let selectedSAnswers = [sportQuizForm.q1.value, sportQuizForm.q2.value, sportQuizForm.q3.value, sportQuizForm.q4.value]

    selectedSAnswers.forEach((answer, index) => {
        if (answer === sportAnswers[index])
            sans += 1;
    })

    let selectedFAnswers = [filmQuizForm.q1.value, filmQuizForm.q2.value, filmQuizForm.q3.value, filmQuizForm.q4.value]

    selectedFAnswers.forEach((answer, index) => {
        if (answer === filmAnswers[index])
            fans += 1;

    })

    total = gans + hans + sans + fans;
    percentage = (total / 20) * 100;

    alert("total score is " + total);


    displayPercentage.textContent = percentage;

})





