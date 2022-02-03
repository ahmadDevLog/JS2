const { MessageEmbed } = require("discord.js")
const Memer = require("random-jokes-api");
const helpList = require('./json/help.json')


module.exports = {
    name: 'roast',
    description: helpList.roast.value,
    execute(message, ...args) {
      const roastEmbed = new MessageEmbed()
      .setTitle('Roast')
      .setDescription(Memer.roast())
      .setColor('GREEN')

      message.reply({embeds: [roastEmbed]})
    }
}
