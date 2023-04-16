import Discord from 'discord.js';

class DiscordBot {
  private client: Discord.Client;
  constructor(token: string) {
    this.client = new Discord.Client();
    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user?.tag}!`);
    });
    this.client.on('message', message => {
      if (message.author.bot) return;
      if (message.content === '!ping') {
        message.channel.send('Pong.');
      }
    });
    this.client.login(token);
  }
}

export default DiscordBot;