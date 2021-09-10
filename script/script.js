document.addEventListener('DOMContentLoaded', function () {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');

     const questions = {
         question: 'Какого цвета бургер вы хотите ?' ,
         answers:[
             {
                title: 'Стандарт',
                url: './image/burger.png'
             },
             {
                title: 'Черный',
                url: './image/burgerBlack.png'
             }
         ]
     }

    btnOpenModal.addEventListener('click', () =>{
        modalBlock.classList.add('d-block');
        playTest();
    })
    closeModal.addEventListener('click', () =>{
        modalBlock.classList.remove('d-block');
    })

    const playTest = () => {

        const renderAnsvers = () => {
            for (i = 0 ; i < 2 ; i++){
              const ansverItem = document.createElement('div');

              ansverItem.classList.add('answers-item, d-flex, flex-column');


                ansverItem.innerHTML = `
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src="${questions.answers[1].url}" alt="burger">
                <span> ${questions.answers[1].title}</span>
                </label>
                `
                formAnswers.appendChild(ansverItem);
              console.log(ansverItem);
            }
        }

        const renderQuestions = () => {
            questionTitle.textContent = `${questions.question}`;
            renderAnsvers();
        }
        renderQuestions();



    }
})