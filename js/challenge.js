const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit');
const likes = document.getElementById('likes');
const commentList = document.getElementById('list');
const form = document.getElementById('comment-form');

document.addEventListener('DOMContentLoaded', () => {
    let timer = setInterval(incrementCounter, 1000);
    let count = parseInt(counter.innerText);
    
    function incrementCounter() {
        count++;
        counter.innerHTML = count;    
    }
    plus.addEventListener('click', incrementCounter);

    function decrementCounter() {
        count--;
        counter.innerHTML = count;
    }
    minus.addEventListener('click', decrementCounter);

    function pauseCounter() {
        if (pause.innerText == 'pause') {
            clearInterval(timer);
            pause.innerText = 'resume';
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        } 
        else {
            timer = setInterval(incrementCounter, 1000);
            pause.innerText = 'pause';
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        }
    }
    pause.addEventListener('click', pauseCounter);

    function countHearts(event){
        //let textNode = document.createTextNode('has been liked');
        //like.appendChild(textNode);'
        event.preventDefault()
        newLike = likes.appendChild(document.createElement('li'));
        newLike.innerHTML = 'new like';
    }
    heart.addEventListener('click', countHearts);

    function addComment(event) {
        event.preventDefault()
        newComment = commentList.appendChild(document.createElement('li'));
        newComment.innerText = form[0].value;
        event.target.reset();
    }
    form.addEventListener('submit', addComment);

});
  
