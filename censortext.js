var censoredWords = ["sad", "mad", "bad"];
var customCensoredWords =[];

function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "***");
    }
    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
   return customCensoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCencoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;