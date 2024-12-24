const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'orange':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }
    })
})