class BankAccount {
    constructor(score) {
        this.score = score;
    }

    getBalance(){
        return this.score;
    }

    deposit(receivedMoney){
        this.score += receivedMoney;
    }

    withdraw(moneyWithdrawn){
        if(moneyWithdrawn > this.score){
            console.log('Error');
        } else {
            this.score -= moneyWithdrawn;
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());
account1.deposit(600);
console.log(account1.getBalance());
account1.withdraw(1600);
console.log(account1.getBalance());