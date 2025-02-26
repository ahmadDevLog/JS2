const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const chnlId = '936988777329610762';
const helpList = require('./json/help.json')

module.exports = {
    name: 'thread',
    description: helpList.thread.value,
    async execute(message, ...args){
        if(message.channel.id === chnlId){
        message.reply(`Creating....`).then(async rslt =>{
            const ping = rslt.createdTimestamp - message.createdTimestamp

            await rslt.edit(`Creating...`)
            await rslt.edit(`Creating..`)
            await rslt.edit(`Creating.`)
            
            
            const thread = await message.channel.threads.create({
                
                name: message.content.replace("?thread", '').replace("?Thread", '').replace("?THREAD", ''),
                autoArchiveDuration: 1440,
                reason: '-',
            });
            
            console.log(`Created thread: ${thread.name}`);
            await rslt.edit(`Done!`)
            await rslt.delete()
        })

        }else {
            return
        }
    }
}
