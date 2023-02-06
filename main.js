let ratingSelected = null;

function ratingButtonHandler(btnIdentifier){
    const btnPressed = document.getElementById(btnIdentifier);
    
    removeClassActive();
    addClassActive(btnPressed);
    setRating(btnPressed.innerHTML);
}

function removeClassActive(){
    const activeRating = document.getElementsByClassName('btn-active');
    if(activeRating.length > 0){
        activeRating[0].classList.remove('btn-active');
    }
    
}

function addClassActive(element){
    element.classList.add('btn-active');
}

function setRating(element){
    ratingSelected = element;
    console.log(ratingSelected);
}

function submitRating(){
    if (ratingSelected !== null ){
        document.getElementById('rating-state').style.display = 'none';
        document.getElementById('thank-you-state').classList.remove('thank-you-state');
        document.getElementById('thank-you-state').classList.add('thank-you-layout');
        document.getElementById('thank-you-state').classList.add('fade-in');
        document.getElementById('ratingValue').innerHTML = ratingSelected;
    }
}