const questions = document.querySelectorAll('.ques');

questions.forEach(function(question){

    question.addEventListener('click', () => {
        question.classList.toggle('show-text')

        questions.forEach(function(item){
            if(item !== question/* passed as arg in 1st forEach */){
                item.classList.remove('show-text')
            }
          });
    })


})