const body = document.querySelector("body");
const buttons = document.querySelectorAll('.button')
buttons.forEach(function(button) {
    button.addEventListener('click' , function(e) {
        if(e.target.id === 'Red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Pink') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
    
})

