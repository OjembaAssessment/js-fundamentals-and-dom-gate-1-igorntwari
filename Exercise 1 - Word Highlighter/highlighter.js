let  counterwords = ()=>{ 
 let paragraph = document.getElementById("myParagraph").innerHTML;
  const words = paragraph.split(" ");
  const repeatedWords = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (repeatedWords[word]) {
      repeatedWords[word]++;
    } else {
      repeatedWords[word] = 1;
    }
  }
  const sortedWords = Object.keys(repeatedWords).sort((a, b) => repeatedWords[b] - repeatedWords[a]);
  for (let i = 0; i < sortedWords.length && i < 5; i++) {
    const word = sortedWords[i];
    const myownRegex = new RegExp(`\\b${word}\\b`, "gi");
    paragraph = paragraph.replace(myownRegex, `<span class="highlight">${word}</span>`);
  }

  document.getElementById("myParagraph").innerHTML = paragraph;
}
counterwords();
console.log("Exercise 1 - Word Highlighter");
