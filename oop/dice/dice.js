let rollDie;
class DiceFactory{
    constructor(){
        this.sides = 6;
    }

    makeDie(){    
         rollDie = Math.floor(Math.random() * this.sides) + 1;
         return rollDie;     
    }
      
}
let diceFactory = new DiceFactory();
diceFactory.makeDie();



class DiceTester{
    testDie(){

        if(rollDie <= this.sides){
            console.log(true);
            return true;
        }

        else if(rollDie > 0){
            console.log(true);
            return true;
        }

        else{
            console.log(false);
            return false;
        }
        
    }
        
}

let diceTester = new DiceTester();
diceTester.testDie();

