const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let includes = false;
    for (l of horizontalJoin) {
        if (l.includes(word)) includes = true
    }
    return includes;
}

module.exports = wordSearch