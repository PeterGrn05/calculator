import readlineSync from 'readline-sync';
const calculator = {
    sum() {
        return this.a+this.b
    },
    mul() {
        return this.a*this.b
    },

    read() {
        this.a = Number(readlineSync.question("Enter your First Number: "));
        this.b = Number(readlineSync.question("Enter your Second Number: "));
    },
};
 calculator.read();
 console.log(calculator.sum());
 console.log(calculator.mul());