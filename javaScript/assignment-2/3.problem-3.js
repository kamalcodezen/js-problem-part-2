
function finalScore(omr) {
    if (omr.right + omr.wrong + omr.skip !== 100 || typeof omr !== "object" || Array.isArray(omr)) {
        return "Invalid";
    }
    let score = (omr.right * +1) + (omr.wrong * -0.5) + (omr.skip * 0);
    return Math.round(score);
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));