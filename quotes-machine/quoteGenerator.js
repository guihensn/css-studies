let quoteElement = document.getElementById('quote');
let authorElement = document.getElementById('author');
let newQuoteElement = document.getElementById('newQuote');
newQuoteElement.addEventListener('mousedown',genarateQuote);

genarateQuote();


function genarateQuote(){
    hideElement(newQuoteElement);

    fetch("https://api.quotable.io/random")
    .then((result) => result.json())
    .then((data) => {
        showQuote(data.content,data.author)
    })

}

function hideElement(element){
    element.style = 'display: none'
}


function showQuote(quote, author){
    resetText()
    typeTexte(quote, quoteElement,0);
    authorElement.innerText = author;

}

function resetText(){
    quoteElement.innerHTML = '';
    authorElement.innerHTML = '';
}


function typeTexte(textArray, element, i){
    
        if(i < textArray.length){
            element.innerHTML += textArray.charAt(i);
            i++;
            setTimeout(()=>{typeTexte(textArray, element,i)},100);
        } else{
            newQuoteElement.style = '';
        }
    
}

