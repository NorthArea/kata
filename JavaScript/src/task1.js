module.exports.doubling = (x) => {
    if(Number.isInteger(x)){
        return x * 2;
    } else if(Array.isArray(x)) {
        return x.map(n => {
            return n * 2;
        });
    }
}