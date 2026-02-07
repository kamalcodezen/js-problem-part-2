
function analyzeText(str) {

    if (typeof str !== "string" || str.trim().length === 0) {
        return "Invalid";
    }

    let strArray = str.split(" ");
 
    let bigWord = strArray[0];
    for (let i of strArray) {
        if (i.length > bigWord.length) {
            bigWord = i;
        }
    }

    let wordCount = strArray.join("").length;

    return {
        longwords: bigWord,
        token: wordCount
    }

}

console.log(analyzeText("I am a little honest person"))
