//grab document elements and set up base variables let sent = document.querySelector(".board");
let pTag = document.querySelector(".quote");
let input = document.querySelector(".input");
let spans = []; 
let body = document.querySelector("body");
let title = document.querySelector("#title");
//grab from APIs --> or not, do it local

let dummysentance = quotes[Math.floor(Math.random() * quotes.length)];

//define functions

const delaySeconds = (time) => {
  time *= 1000;
  return new Promise(resolve => setTimeout(resolve, time));
}

const splitter = (sentance) => {
    let wordArr = sentance.split(" ");
    return wordArr;
}

const synonymer = (word) =>{
    for(let i=0; i < thesaurus.length; i++){
        if(word.toLowerCase() === thesaurus[i].word){
          let synonym = thesaurus[i].synonyms[Math.floor(Math.random() * thesaurus[i].synonyms.length)];
          console.log(`${word} : ${synonym}`);  
          return synonym;
        }
    }
}

let clickReveal = (e) => {
    e.target.innerText = e.target.dataset.word;
    e.target.classList.remove("word");
    e.target.classList.add("correct");
}

let inputHandler = (e) => {
    let currArr = splitter(e.target.value);
    
    for(let i=0; i < currArr.length; i++){
        if(currArr[i] === spans[i].dataset.word){
            spans[i].innerText = spans[i].dataset.word;
            spans[i].classList.add("correct");
        }
    }

    if(currArr.join() === answer){
       //display win condition
        body.classList.add("wincon");
      pTag.remove();
      //win logic here.. some kind of score.. for now delay then refresh
      title.innerHTML = "Congratulations!!"
      delaySeconds(2.5).then(() => window.location.reload())


    }

}

//Start of logic

let newArr = splitter(dummysentance);
let answer = newArr.join();
input.addEventListener('input', inputHandler);
pTag.innerText = "";

for(let i=0; i< newArr.length; i++){
    
    let span =  document.createElement('span');
    span.classList.add("word");
    //set the value of the arrElement to a data class before changing
    span.setAttribute('data-word', newArr[i]);
    //now grab the synonym and replace the word
    newArr[i] = ((typeof synonymer(newArr[i]) === 'undefined')
         ? newArr[i] : synonymer(newArr[i]));
    span.innerText = newArr[i];
    span.addEventListener("click", clickReveal);
    spans.push(span);
    pTag.append(span); 
}


