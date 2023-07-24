function longest (search, str) {
 
    search = document.getElementById("myParagraph").innerHTML;
    let str = words.split(/\b/);
    for (let i = 0; i < str.length; i++) {
        let count = 0;
     for (let j = 0; j < str.length; j++) {
         if (str[j] == str[i]) {
             count++;
         }
     }
     if(count>=freq){
        most = str[i];
        freq = count;
    }

}
}



console.log("Exercise 1 - Word Highlighter");