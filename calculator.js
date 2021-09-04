class Calculator {
    constructor(){

    }
    isNumber(a,b){
        if(isNaN(a) && isNaN(b)) {
            throw new Error('both input are not numbers'); 
        }
        else if(isNaN(a)){
            throw new Error('first input is not a number'); 
        }
        else if(isNaN(b)){
            throw new Error('second input is not a number'); 
        }
        else{
            return true;
        }
    }
    add = (a, b) =>{
        if(this.isNumber(a,b)){
        return a+b;
    }
    }
    subtract = (a, b) =>{
        if(this.isNumber(a,b)){
        return a-b;}
    }
    multiply = (a, b) =>{
        if(this.isNumber(a,b)){
        return a*b;}
    }
    divide = (a, b) =>{
        if(this.isNumber(a,b)){
            if(a===0 && b===0){
                throw new Error('Undefined, cant divide zero by zero');
            }
            else if(b==0){
                throw new Error('Undefined, cant divide by zero');
            }
            return a/b;
        }
    }
}
module.exports = Calculator;