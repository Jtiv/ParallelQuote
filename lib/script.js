let sent = document.querySelector(".board");

console.log(sent);

let dummysentance = "I have a dream, that one day children of all races can sit side by side; 

let parallel = (ogQuote) => {
    let wordArr = ogQuote.split(" ");
    return wordArr;
}

let synonymer = (word) =>{
    for(let i=0; i < thesaurus.length; i++){
        if(word === thesaurus[i].word){
            console.log(thesaurus[i].synonyms[0]);
            return thesaurus[i].synonyms[0];
        }
    }
}

let newArr = parallel(dummysentance);

for(let i = 0; i < newArr.length; i++){
    newArr[i] = ((typeof synonymer(newArr[i]) === 'undefined') ? newArr[i] : synonymer(newArr[i]))
}

console.log(newArr);

// crazy entry 57482
//fetch(url)
//    .then(response => { return response.json();})
//    .then(data => { console.log(data) })

