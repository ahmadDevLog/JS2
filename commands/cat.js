const { MessageEmbed } = require("discord.js")
const Memer = require("random-jokes-api");
const helpList = require('./json/help.json')


module.exports = {
    name: 'cat',
    description: helpList.cat.value,
    execute(message, ...args) {
        let meme = Memer.cat()
      const memeEmbed = new MessageEmbed()
      .setTitle("Cute Cat")
      .setImage(meme)
      .setColor('GREEN')
      message.reply({embeds: [memeEmbed]})
      chance = 40
        i = Math.floor(Math.random() * 10)
        if (i < chance) {
            aww = "AWW!"; return memeEmbed.setDescription(aww)
    }
  }
}