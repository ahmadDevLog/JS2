const { MessageEmbed } = require("discord.js")
const Memer = require("random-jokes-api");
const helpList = require('./json/help.json')


module.exports = {
    name: 'joke',
    description: helpList.joke.value,
    execute(message, ...args) {
      const jokeEmbed = new MessageEmbed()
      .setTitle('Random joke')
      .setDescription(Memer.joke())
      .setColor('GREEN')

      message.reply({embeds: [jokeEmbed]})
    }
}

