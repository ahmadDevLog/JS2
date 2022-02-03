const { MessageEmbed } = require("discord.js")
const Memer = require("random-jokes-api");
const helpList = require('./json/help.json')


module.exports = {
    name: 'meme',
    description: helpList.meme.value,
    execute(message, ...args) {
        let meme = Memer.meme()
      const memeEmbed = new MessageEmbed()
      .setTitle(meme.title)
      .setImage(meme.url)
      .setColor('RED')
      message.reply({embeds: [memeEmbed]})
    }
}