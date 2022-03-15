let sent = document.querySelector(".board");

console.log(sent);

let dummysentance = "a dummy quote to test these games"; 

let parallel = (ogQuote) => {
    let wordArr = ogQuote.split(" ");
    console.log(wordArr);
}

let synonymer = (word) =>{
    
    for(let i=0; i < thesaurus.length; i++){

        if(word === thesaurus[i].word){
            console.log(thesaurus[i].synonyms[0]);
        }
    }

}

// crazy entry 57482
//let url = "https://www.stands4.com/services/v2/syno.php?uid=10109&tokenid=cXHJ7kO0sGmVn2GR&word=" + "consistent" +  "&format=json";
//
//fetch(url)
//    .then(response => { return response.json();})
//    .then(data => { console.log(data) })
//
