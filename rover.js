// const Message = require('./message.js');
// const Command = require('./command.js');

class Rover {
   // Write code here!

   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
 
   };

   receiveMessage(message) {
     
      
     let  messageName = message.name;
      let results = [];
     
   

      for (let i = 0; i < message.commands.length; i++) {
         if (message.commands[i].commandType === "MODE_CHANGE") {
            if (message.commands[i].value != this.mode)
            {
               this.mode = message.commands[i].value;
               //console.log("it works")
               results.push({ completed: true })
            }
         }
        else if  (message.commands[i].commandType === "STATUS_CHECK") {


          results.push({ completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}});
          //console.log("it works")
          
         }
      else if (message.commands[i].commandType === "MOVE"){
         if (this.mode === "LOW_POWER")
         {
            results.push({ completed: false })
         }
         else if (this.mode !== "LOW_POWER"){
            results.push({ completed: true })
            this.position = message.commands[i].value
         }

      }
      
      else {
         results.push({ completed: false });
       }
      
   }
   
   return {messageName, results} 

}

}
// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);
// console.log(response)
// let commands2 = new Command("MOVE", 45612)


//  constructor(postion){
//    his.postion = postion;
//    this.mode = "NORMAL";
//    this.generatorWatts = 110;
//  }  
//  constructor(Message){
//    this.message = Message.name; 
//    this.results = Message.commands

//  }

module.exports = Rover;