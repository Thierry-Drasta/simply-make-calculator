let display = document.getElementById('display');

// array.from function takes html collection and make an array from it.

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        
        switch(e.target.innerText){

            case 'C':
                display.innerText = '';
                break;

            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                } 
                break;

            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = 'Wrong Type!'
                } 
                break;

            default:
                display.innerText += e.target.innerText;
        }
    });
});

