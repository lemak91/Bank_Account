class BankAccount {
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }

        balance(){
            let sum = 0;
            for(let i = 0; i<this.transactions.length; i++){
                sum += this.transactions[i].amount;
            }
            return sum;
        }

        charge(payee,amt){
            let currentBalance = this.balance();
            if(amt <= currentBalance){
                let chargeTransaction = new Transaction(-amt, payee);
                this.transactions.push(chargeTransaction);
            }
        }

        deposit(amt){
            if(amt > 0){
                let depositTransaction = new Transaction(amt, 'Deposit');
                this.transactions.push(depositTransaction);
            }
        }
}

class Transaction {
    constructor(amount, payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, owner, interestRate){
        super(accountNumber, owner);
        this.interestRate = interestRate;
    }

    accrueInterest(){
        let currentBalance = this.balance();
        let interestAmt = currentBalance * this.interestRate;
        let intrestTransaction = new Transaction(interestAmt, "Intrest");
        this.transactions.push(intrestTransaction);
    }
}





if(typeof describe === "function"){
    const assert = require("assert");
    describe("bank account", function(){
        it("should create a bank account", function(){
            const acct1 = new BankAccount("123456", "John Doe")
            assert.equal(acct1.accountNumber,"123456")
            assert.equal(acct1.owner,"John Doe")
            assert.equal(acct1.transactions.length,0)
        })
    })
}