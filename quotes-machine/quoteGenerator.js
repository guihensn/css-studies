let quoteElement = document.getElementById('quote');
let authorElement = document.getElementById('author');
let newQuoteElement = document.getElementById('newQuote');

let audio = new Audio('./sounds/quote.wav');

audio.volume = 0.3;
audio.loop = true;

newQuoteElement.addEventListener('mousedown',start);

function start(){
    hideElement(newQuoteElement);

    fetch("https://api.quotable.io/random")
        .then((result) => result.json())
        .then((data) => {
            audio.play();
            resetText();
            startShowingQuotes(data.content,data.author)
        })
}

function hideElement(element){
    element.style = 'display: none'
}

function startShowingQuotes(quote, author){
    authorElement.innerText = author;
    startTyping(quote, quoteElement,0);
}

function resetText(){
    quoteElement.innerHTML = '';
    authorElement.innerHTML = '';
}


function startTyping(textArray, element, i){
    if(i > textArray.length){
        resolve();
        return;
    } 

    element.innerHTML += textArray.charAt(i);

    i++;
    setTimeout(()=>{startTyping(textArray, element,i)},100);
}

function resolve(){
    newQuoteElement.style = '';
    audio.pause();
}
