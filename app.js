const dLib = require("discord.js");
const bConfig = require("./config.json");

const bot = new dLib.Client({disableEveryone: true});

bot.on("ready", async function(){
  console.log(bot.user.username+" is online!")
});

bot.on("message", async function(message){
  console.log(message.author.username+": "+message.content)
});

bot.login(bConfig.token)
