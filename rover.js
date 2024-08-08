const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   // Write code here!

   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
 
   };

   receiveMessage(message) {
     
      let response ={
       messageName: message.name,
       results: []
     };
   

      for (let i = 0; i > message.commands.length; i++) {
         if (message.commands[i].commandType == "MODE_CHANGE") {
            if (message.commands[i].value != this.mode)
            {
               response.results.push({ completed: true })
            }
         }
        else if  (message.commands[i].commandType == "STATUS_CHECK") {


          // let roverStatus = { completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, postion: this.postion}}
             response.results.push({ completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, postion: this.postion}});
             console.log(response.results);
         }
      else   if (this.mode !== "LOW_POWER") {
            if (message.commands[i].commandType == "MOVE")
               this.position = message[i].value
               results.push({ completed: true })
            

         }
      
    else  if (this.mode == "LOW_POWER") {
         if (message.commands[i].commandType.includes("MOVE")) {
            results.push({ completed: false });
         }
      }
      
   }
return response
}
}
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);
let commands2 = new Command("MOVE", 45612)
console.log(response.results);


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