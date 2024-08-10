const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
let rover = new Rover(98382); 
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
   // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

let rover2 = new Rover(32145); 
let commands2 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command("MOVE", 45612)]
let message2 = new Message('Test message with two commands', commands2);
let response2 = rover2.receiveMessage(message2);
describe("Rover class", function() {

  // 7 tests here!
  //7
it("constructor sets position and default values for mode and generatorWatts",function(){
  let rover2 = new Rover(45678)
  expect(rover2).toHaveProperty("mode","NORMAL")
  expect(rover2).toHaveProperty("generatorWatts",110)
});
// //8
 it("response returned by receiveMessage contains the name of the message",function(){
expect(response.messageName).toEqual('Test message with two commands')
});
//9
it("response returned by receiveMessage includes two results if two commands are sent in the message",function(){
  expect(response.results).toHaveLength(2)
});
  //10
it("responds correctly to the status check command",function(){
    expect(response.results[1].roverStatus).toEqual({"generatorWatts": 110, "mode": "LOW_POWER", "position": 98382})
  
  });  
  //11
  it("responds correctly to the mode change command",function(){
    expect(response.results[1].roverStatus.mode).toBe("LOW_POWER")
    expect(response.results[1].completed).toEqual(true)
  });
  //12
  it("responds with a false completed value when attempting to move in LOW_POWER mode",function(){
    expect(response2.results[1].completed).toBe(false)
  });
  //13
  it("responds with the position for the move command",function(){
    let rover3 = new Rover(31589);
    let commands3 = [new Command("MOVE",48687), new Command('STATUS_CHECK')]
    let message3 = new Message("move test", commands3)
    let response3 = rover3.receiveMessage(message3)
    expect(response3.results[1].roverStatus.position).toBe(48687)
  });
});

console.log(response2.results[1])

