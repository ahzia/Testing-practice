const stringLength = (string) =>{
    const length = string.length;
    if(length <1 || length>10){
        throw new Error('The string must be at least 1 character long and not longer than 10 characters');
    }
    else{
    return length;
}
}
module.exports = stringLength