//Discord Bot
const Discord = require('discord.js');
const client = new Discord.Client();


//Logs when ready
client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
    if (message.content === "!testCommand" || message.content === "!testCommand") {

        //Do wathever you need to do here, call api's etc.

        message.channel.send("Data you wanna send back into discord chat");
    }
    if (message.content === "*help" || message.content === "*Help") {

        message.channel.send("This command does that");
        message.channel.send("that command does this");
 
}
});

const {prefix, token} = require('./config.json');
client.login(token);
