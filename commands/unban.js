const { MessageEmbed } = require("discord.js");
const helpList = require('./json/help.json')

module.exports = {
    name: 'unban',
    description: helpList.unban.value,
    execute(message, args){

            const member = args[0];
            const id = args[0].replace('<@!', '').replace('>', '')
        if(message.member.permissions.has('BAN_MEMBERS')){
            if(member){
                const memberTarget = message.guild.members.cache.get(member.displayName)
                const bannedEmbed = new MessageEmbed()
                .setTitle('Unban')
                .setDescription(`Successfully Unbanned`)
                .setColor("#FFA626")
                message.channel.send({embeds: [bannedEmbed]})
                message.guild.members.unban(id)
                
            }else{
                message.channel.send("Something went wrong (You didnt specify a member)");
            }

        }else{
            return message.reply('You do not have enough permissions')
        }
    }
}