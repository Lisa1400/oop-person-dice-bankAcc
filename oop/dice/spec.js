describe("Dice Factory", function(){
    
        let diceFact
        beforeEach(function(){
            diceFact = new DiceFactory(6);
        })  
    
      it("should make a dice that has 6 sides", function() {          
          expect(diceFact.makeDie()).toBeLessThanOrEqual(6);
        }); 
})

describe("Dice Tester", function(){
    
    let diceTest
    beforeEach(function(){
        diceTest = new DiceTester();
    })  

  it("should return true if dice is less than or equal to 6", function() {          
      expect(diceTest.testDie()).toEqual(true);
    });
    
})