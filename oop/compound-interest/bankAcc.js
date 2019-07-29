class BankAccount {
    constructor(accOwner, type, accNumber, balance, fee, interest) {
        this.accOwner = accOwner;
        this.type = type;
        this.accNumber = accNumber;
        this.balance = balance;
        this.fee = fee;
        this.interest = interest;
    }
    account(deposit, withdrawal, bankFee ){
        
        let accBalance = this.interest * this.balance + deposit - withdrawal - bankFee;
        return accBalance;
    }
    accountInfo() {
         let netBalance = this.account()
        console.log(`Account holder: ${this.accOwner} 
        Account type: ${this.type}
         Account number: ${this.accNumber},
         interest rate: ${this.interest} percent 
        Current balance: R` + netBalance);
    }
}

let bankAccount = new BankAccount("Lisa", "savings", 2506, 12750, 56, 12);
bankAccount.accountInfo();




