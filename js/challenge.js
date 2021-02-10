const counter = () => document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit');
const likes = document.getElementsByClassName('likes');
const commentList = document.getElementById('list');
const form = document.getElementById('comment-form');
const likeCount = {};

document.addEventListener('DOMContentLoaded', () => {
    let timer = setInterval(incrementCounter, 1000);
    let count = parseInt(counter().innerText);
    
    function incrementCounter() {
        count++;
        counter().innerHTML = count;    
    }
    plus.addEventListener('click', incrementCounter);

    function decrementCounter() {
        count--;
        counter().innerHTML = count;
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

    function countHearts(){
        if (!!likeCount[count]) {
            let like = document.getElementById(`li ${count}`);
            like.innerHTML = `${count} has been liked ${likeCount[count]++} times`;
        }
        else {
            likeCount[count] = 1;
            let like = document.createElement('li');
            like.id = `li ${count}`;
            like.innerHTML = `${count} has been liked ${likeCount[count]} time`;
            like = likes[0].appendChild(like);
        }
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
  
