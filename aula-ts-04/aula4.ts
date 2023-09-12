function multiply2(num1: number, num2: number) {
    return num1 * num2;
}

function sum2(num1: number, num2: number) {
    return num1 * num2;
}

function isEven2(num: number): boolean {
    return num % 2 === 0;
}

function showResult2(result: number) {
    if(isEven2(result)) {
        console.log(`The result is ${result} and it's not even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1:number = Number(prompt("First Number"));
    const num2 :number = Number(prompt("Second Number"));
    if(!isNaN(num1) && !isNaN(num2)){
        let result = sum2(num1,num2);
        result += multiply2(1,2);
        showResult2(result);
    }else{
        console.log("num1 e num2 devem ser números para o funcionamento correto do código");
    }
})();
