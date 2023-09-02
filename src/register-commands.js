require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "repo-1",
    description: "To open Repository 1",
  },
  {
    name: "repo-2",
    description: "To open Repository 2",
  },
  {
    name: "repo-3",
    description: "To open Repository 3",
  },
  {
    name: "repo-4",
    description: "To open Repository 4",
  },
  {
    name: "repo-5",
    description: "To open Repository 5",
  },
  {
    name: "repos",
    description: "To view the list of repositories",
  },
  {
    name: "prize",
    description: "View the prize pool",
  },
  {
    name: "timeline",
    description: "View the timeline and plan your day accordingly",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Slash commands were registered successfully!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
