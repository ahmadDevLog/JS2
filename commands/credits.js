const { MessageEmbed } = require("discord.js")
const helpList = require('./json/help.json')

module.exports = {
    name: 'credits',
    description: helpList.credits.value,
    execute(message, ...args) {
        const embed = new MessageEmbed()
            .setAuthor({ name: 'Bluefire, Beluga' })
            .setTitle("Credits")
            .setDescription('This bot is made by **BluefireCrystal#0852** & **Beluga#0099**')
            .setColor('BLUE')
        message.channel.send({embeds: [embed]})
    }
}

