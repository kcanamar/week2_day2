class BankAccount {
//     constructor(ownerName, balance, acctNum) {
//         this.ownerName = ownerName
//         this.balance = balance
//         this.acctNum = acctNum
//    }
    constructor() {
        this.onerName = "Me"
        this.balance = 1000.00
        this.acctNum = 11112222
    }
    deposit(amount) {
        this.balance += amount
        // console.log("thank you for you deposit")
        return this.balance
        
    }
    withdraw(amount) {
        if((this.balance - amount) >= 0) {
            this.balance -= amount
            // console.log("here is your money")
            return this.balance
        } else {
            return "insufficent funds"
        }
        
    }

}


// console.log(myMoney)

// myMoney.deposit(10)

// myMoney.withdraw(20)

// console.log(myMoney)


////////////
class CheckingAccount extends BankAccount {
    constructor() {
        super()
        this.overdraftEnabled = true;
    }
    withdraw(amount) {
        this.balance -= amount
        // console.log("oops, you took to much!")
        return this.balance
    }
}

// const theirMoney = new CheckingAccount("Them", 2345.00, 2222,)

// console.log(theirMoney)

// theirMoney.withdraw(1245)

// console.log(theirMoney)

///////////
class SavingsAccount extends BankAccount {
    // constructor(ownerName, balance, acctNum) {
    //     super(ownerName, balance, acctNum)
    // }
    // withdraw(amount) {
    //     this.balance = this.balance - amount
    //     console.log("sorry you dont have enough.")
    // }
    withdraw() {
        return "This is a savings account, no withdraws sorry."
    }
}

// const ourMoney = new SavingsAccount("Ours", 3456.00, 3333)

// console.log(ourMoney)

// ourMoney.withdraw(3550)

// console.log(ourMoney)

let newAcct = new BankAccount()
let newCheck = new CheckingAccount()
let newSavings = new SavingsAccount()

//test
console.log(newAcct)
console.log(newCheck)
console.log(newSavings)