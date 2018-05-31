const dLib = require("discord.js");
const bConfig = require("./config.json");

const bot = new dLib.Client({disableEveryone: true});

bot.on("ready", async function(){
  console.log(bot.user.username+" is online!")
});

bot.on("message", async function(message){
  console.log(message.author.username+": "+message.content);
  if (message.content.charAt(0) === bConfig.prefix){
    let cmdArray = message.content.split(" ");
    let cmd = cmdArray[0].slice(1)

    switch(cmd){
      case "roll":
        let i = cmdArray[1] || 6;
        message.channel.send("You rolled a "+Math.ceil(Math.random()*i)+"!");
        break;
      case "kick":
        console.log(message.mentions.members.first().kick());
        message.channel.send(message.mentions.members.first()+" has been kicked :(");
        break;
      case "embed":
        let tEmbed = new dLib.RichEmbed();
        tEmbed.setTitle(cmdArray[1]);
        message.channel.send("",tEmbed);
      case "attach":
        let tAttach = new dLib.Attachment();
        tAttach.setAttachment(cmdArray[1],cmdArray[1].split("/")[-1]);
        message.channel.send("",tAttach);
    }
  }
});

bot.login(bConfig.token)
