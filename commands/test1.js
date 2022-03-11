const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('song1324')
		.setDescription('Chooses song with the id 1324.'),
	async execute(interaction) {
		interaction.reply({ content: 'Here is the song with id 1324. to guess, do /song1324 guess *song-name* https://cdn.discordapp.com/attachments/901457100981563433/951833573000900608/GuessTheSong_004.wav ' })
	}
};
