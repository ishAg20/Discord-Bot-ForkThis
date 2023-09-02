require("dotenv").config();

const {
  IntentsBitField,
  Client,
  GatewayIntentBits,
  MessageActionRow,
  MessageButton,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ComponentType,
  EmbedBuilder,
  SlashCommandBuilder,
} = require("discord.js");
// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration();
// const api = new OpenAIApi(configuration);
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
// const openai = new OpenAIApi(
//   new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   })
// );
client.on("ready", (c) => {
  console.log(`✅ ${c.user.username} is online.`);
});
// client.on("messageCreate", async function (message) {
//   if (message.author.bot) return;

//   try {
//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant who responds succinctly",
//         },
//         { role: "user", content: message.content },
//       ],
//     });

//     const content = response.data.choices[0].message;
//     return message.reply(content);
//   } catch (err) {
//     return message.reply("As an AI robot, I errored out.");
//   }
// });
const resource = new EmbedBuilder()
  .setTitle("Resources")
  .setDescription(
    "Feeling stuck? We've got you covered with our array of resources."
  )
  .setColor("Random")
  .addFields(
    {
      name: "MDN Web Docs",
      value: "https://developer.mozilla.org/en-US",
      inline: false,
    },
    {
      name: "Tailwind CSS",
      value: "https://v2.tailwindcss.com/docs",
      inline: false,
    },
    {
      name: "Git and GitHub Crash Course",
      value: "https://youtu.be/RGOj5yH7evk?si=bNC263j5bYxQXc9t",
      inline: false,
    },
    {
      name: "TypeScript",
      value: "https://www.typescriptlang.org/docs",
      inline: false,
    },
    {
      name: "How to Code a 2D Game",
      value:
        "https://www.freecodecamp.org/news/how-to-code-a-2d-game-using-javascript-html-and-css",
      inline: false,
    },
    {
      name: "API for Beginners",
      value: "https://youtu.be/GZvSYJDk-us?si=UnS89D_k3A2joIA4",
      inline: false,
    }
  );
const help_commands = new EmbedBuilder()
  .setTitle("List of All Slash Commands")
  .setColor("Random")
  .addFields(
    {
      name: "/repo-1",
      value: "To view github link to repository 1",
      inline: false,
    },
    {
      name: "/repo-2",
      value: "To view github link to repository 2",
      inline: false,
    },
    {
      name: "/repo-3",
      value: "To view github link to repository 3",
      inline: false,
    },
    {
      name: "/repo-4",
      value: "To view github link to repository 4",
      inline: false,
    },
    {
      name: "/repo-5",
      value: "To view github link to repository 5",
      inline: false,
    },
    {
      name: "/repos",
      value: "To view list of all repositories",
      inline: false,
    },
    {
      name: "/prize",
      value: "View the prize pool",
      inline: false,
    },
    {
      name: "/timeline",
      value: "View the timeline and plan your day accordingly",
      inline: false,
    }
  );
const help_messages = new EmbedBuilder()
  .setTitle("List of all Messages the Bot replies to")
  .setColor("Random")
  .addFields(
    {
      name: "hello",
      value: "To view a short message from CSI",
      inline: false,
    },
    {
      name: "react",
      value: "Buttons to tell us about your experience",
      inline: false,
    },
    {
      name: "socials",
      value: "To view links to CSI socials",
      inline: false,
    },
    {
      name: "resources",
      value: "To view an array of resources for your reference",
      inline: false,
    },
    {
      name: "joke",
      value: "To tickle the funny bone",
      inline: false,
    }
  );
const embed1 = new EmbedBuilder()
  .setTitle("Prize Pool")
  .setDescription("Take a look at the exciting prizes")
  .setColor("Random")
  .addFields(
    {
      name: "1st prize",
      value: "Rs 5000",
      inline: true,
    },
    {
      name: "2nd prize",
      value: "Rs 3000",
      inline: true,
    },
    {
      name: "3rd prize",
      value: "Rs 2000",
      inline: true,
    }
  );
//.setImage("") insert IG post for prize pool
//.setFooter("Bot by ForkThis");

const embed2 = new EmbedBuilder()
  .setTitle("ForkThis Timeline")
  .setDescription("23rd September 9am to 5:15pm : Offline")
  .setColor("Random")
  .addFields(
    {
      name: "Participants Entry : ",
      value: "9:00 AM",
      inline: false,
    },
    {
      name: "Opening Ceremony :",
      value: " 9:30 AM",
      inline: false,
    },
    {
      name: "Participants Entry : ",
      value: "10:00 AM",
      inline: false,
    }
  );
const embed3 = new EmbedBuilder()
  .setTitle("Repos List")
  .setColor("Random")
  .addFields(
    {
      name: "MiniGames : ",
      value: "...",
      inline: false,
    },
    {
      name: "FFCS Planner :",
      value: " ...",
      inline: false,
    },
    {
      name: "Discord Bot : ",
      value: "...",
      inline: false,
    }
  );
//   //.setImage("") insert IG post for prize pool
//   //.setFooter("Bot by ForkThis");
client.on("messageCreate", async (message) => {
  //console.log("message received", message.content);
  if (message.content === "hello") {
    message.reply("Hola! We hope you have an enriching experience.");
  }
  if (message.content === "help") {
    message.reply({ embeds: [help_commands, help_messages] });
  }
  if (message.content === "resources") {
    message.reply({ embeds: [resource] });
  }
  if (message.content === "joke") {
    try {
      let newJoke = async () => {
        let reply = await fetch(
          "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=single"
        );
        let json = await reply.json();
        return json;
      };
      let joke = await newJoke();
      message.reply(`${joke.joke}`);
    } catch (error) {
      console.log("Error");
    }
  }
  if (message.content === "socials") {
    const firstButton = new ButtonBuilder()
      .setLabel("CSI GitHub")
      .setStyle(ButtonStyle.Link)
      .setURL("https://github.com/csivitu");
    const secondButton = new ButtonBuilder()
      .setLabel("CSI Instagram")
      .setStyle(ButtonStyle.Link)
      .setURL("https://www.instagram.com/csivitu");
    const thirdButton = new ButtonBuilder()
      .setLabel("CSI LinkedIn")
      .setStyle(ButtonStyle.Link)
      .setURL("https://www.linkedin.com/company/csivitu");

    const socialRow = new ActionRowBuilder().addComponents(
      firstButton,
      secondButton,
      thirdButton
    );
    message.reply({
      content: "Follow all our socials for the latest updates!",
      components: [socialRow],
    });
  }
  if (message.content === "react") {
    const like = new ButtonBuilder()
      .setCustomId("like")
      .setLabel("Like")
      .setStyle(ButtonStyle.Primary)
      .setEmoji({ name: "👍" });
    const love = new ButtonBuilder()
      .setCustomId("love")
      .setLabel("Love")
      .setStyle(ButtonStyle.Primary)
      .setEmoji({ name: "❤" });
    const fun = new ButtonBuilder()
      .setCustomId("fun")
      .setLabel("Having Fun")
      .setStyle(ButtonStyle.Primary)
      .setEmoji({ name: "🥳" });
    const learn = new ButtonBuilder()
      .setCustomId("learn")
      .setLabel("Exploring")
      .setStyle(ButtonStyle.Primary)
      .setEmoji({ name: "🤓" });
    const reactRow = new ActionRowBuilder().addComponents(
      like,
      love,
      fun,
      learn
    );
    message.reply({
      content: "Are you having a good time?",
      components: [reactRow],
    });
  }
});
// client.on("buttonClick", async (interaction) => {
//   if (interaction.customId === "like") {
//     interaction.message.react("👍");
//     await interaction.user.send("enter custom message");
//   } else if (interaction.customId === "love") {
//     interaction.message.react("❤");
//     await interaction.user.send("enter custom message");
//   } else if (interaction.customId === "fun") {
//     interaction.message.react("🥳");
//     await interaction.user.send("enter custom message");
//   } else if (interaction.customId === "learn") {
//     interaction.message.react("🤓");
//     await interaction.user.send("enter custom message");
//   }
// });

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  if (interaction.commandName === "repo-1") {
    const url1 = "https://github.com/";
    interaction.reply(`Click here to redirect to Github link: ${url1}`);
  }
  if (interaction.commandName === "repo-2") {
    const url2 = "https://github.com/";
    interaction.reply(`Click here to redirect to Github link: ${url2}`);
  }
  if (interaction.commandName === "repo-3") {
    const url3 = "https://github.com/";
    interaction.reply(`Click here to redirect to Github link: ${url3}`);
  }
  if (interaction.commandName === "repo-4") {
    const url4 = "https://github.com/";
    interaction.reply(`Click here to redirect to Github link: ${url4}`);
  }
  if (interaction.commandName === "repo-5") {
    const url5 = "https://github.com/";
    interaction.reply(`Click here to redirect to Github link: ${url5}`);
  }
  if (interaction.commandName === "prize") {
    interaction.reply({ embeds: [embed1] });
  }
  if (interaction.commandName === "timeline") {
    interaction.reply({ embeds: [embed2] });
  }
  if (interaction.commandName === "repos") {
    interaction.reply({ embeds: [embed3] });
  }
});
client.login(process.env.BOT_TOKEN);
