const rated = document.querySelectorAll('[role="button"]');
//we use [role="button"] for do a union with us ARIA method
const submit = document.getElementById('submit');
const span = document.getElementById('devolution');


const container = document.getElementById('conteiner');
const container_2 = document.getElementById('conteiner-2');
/* we separate the interface in 2 containers
/1. In first container, we have a question
/2. In second conteiner, we have us answer
*/

rated.forEach((btn)=>{
//we call each button rate
    btn.addEventListener('click', (e)=>{
        //add an eventList for each button click
        let selectBtn = e.currentTarget;
        //identify targen --> currentTarget, for each btn in the EventListenner
        for (let i = 0; i < rated.length; i++){
            //we used getAtribute to change aria selected status when we click
            if (rated[i].getAttribute('aria-selected')=='true') {
                
                rated[i].setAttribute('aria-selected',false);
                selectBtn.setAttribute('aria-selected',true);
                span.textContent=selectBtn.id;
            }
            else{
                selectBtn.setAttribute('aria-selected',true);
                span.textContent = selectBtn.id;
            }
        }
    })

    submit.addEventListener('click', () => {
        container.style.display = 'none';
        container_2.style.display = 'flex';
    })

})



