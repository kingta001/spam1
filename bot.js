const Discord = require('discord.js');
const client = new Discord.Client();
const myid = ['596778797551058964'];
const prefix = ['-'];
console.log("Scrpit By DesTroyeR");

client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'ارسال'){
        message.channel.send("#credits"+"<@"+ mymid +">"+"2000")
    }
});

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on("ready", () => {
let channel =     client.channels.get("597531258922467389")
setInterval(function() {
channel.send(`@here @here  https://discord.gg/aecGfZF`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
