class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = name
      
      if (!name) {
         throw Error("No name given.");
      }

     this.commands = commands
   }
}

module.exports = Message;