operation = '';

buttons = document.getElementsByClassName('mathOperation');

screen = document.getElementById('screen');
screen.innerHTML = operation;

buttonResult = document.getElementById('result');
buttonResult.addEventListener('mousedown',result);

buttonReset = document.getElementById('reset');
buttonReset.addEventListener('mousedown',reset);

for(i = 0; i < buttons.length ; i++){
    value = buttons[i].innerHTML;

    buttons[i].addEventListener('mousedown', addValue.bind(this,value))
}

function updateScreen(){
    screen.innerHTML = operation;
}

function reset(){
    console.log('ok')
    operation = '';
    updateScreen();
}

function addValue(value){
    operation += value;
    updateScreen();
}

function result(){
    try{
        operation = eval(operation);
        updateScreen();
    }catch(erro){
        screen.innerHTML = "<div style = 'color:red'> Error </div>";
    }
}