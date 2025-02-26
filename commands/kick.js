const { MessageEmbed } = require("discord.js");
const helpList = require('./json/help.json')

module.exports = {
    name: 'kick',
    description: helpList.kick.value,
    execute(message, args){

            const member = message.mentions.users.first();
        if(message.member.permissions.has('KICK_MEMBERS')){
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id)
                const kickedEmbed = new MessageEmbed()
                .setTitle('Successfully kicked')
                .setDescription(`Successfully kicked ${memberTarget.displayName}`)
                .setColor("#FFA626")
                message.channel.send({embeds: [kickedEmbed]})
                memberTarget.kick();
            }else{
                message.channel.send("Something went wrong (You didnt specify a member)");
            }
        }else{
            return message.reply('You do not have enough permissions')
        }
    }
}