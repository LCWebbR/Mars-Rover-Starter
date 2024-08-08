const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);
let commands2 = new Command("MOVE", 45612)
describe("Rover class", function() {

  // 7 tests here!
  //7
it("constructor sets position and default values for mode and generatorWatts",function(){
  expect(rover).toHaveProperty("mode","NORMAL")
  expect(rover).toHaveProperty("generatorWatts",110)
});
// //8
// it("response returned by receiveMessage contains the name of the message",function(){
// expect(response.messageName).toEqual('Test message with two commands')
// });
// //9
// it("response returned by receiveMessage includes two results if two commands are sent in the message",function(){
//   expect(response.results).toHaveLength(2)
//   });
//   //10
//   it("responds correctly to the status check command",function(){
//     expect(response.results).toHaveProperty("roverStatus")
//   });
  // //11
  // it("responds correctly to the mode change command",function(){
  //   expect(rover)
  // });
  // //12
  // it("responds with a false completed value when attempting to move in LOW_POWER mode",function(){
  //   expect(rover)
  // });
  // //13
  // it("responds with the position for the move command",function(){
  //   expect(rover)
  // });
});


console.log(response);
