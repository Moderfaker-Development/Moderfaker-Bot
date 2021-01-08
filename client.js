const path = require("path");

const { Intents } = require("discord.js");
const { CommandoClient, SQLiteProvider } = require("discord.js-commando");
const sqlite = require("sqlite");
const { Database } = require("sqlite3").verbose();

const client = new CommandoClient({
  owner: [
    "577621487851143171",
    "474016258019557377",
    "696913579542315049"
  ],
  presence: {
    activity: {
      type: "WATCHING",
      name: "dem moderfakers"
    }
  },
  ws: {
    intents: Intents.NON_PRIVILEGED
  }
});

client.registry.registerDefaults();

client.setProvider(sqlite.open({
  filename: path.join(__dirname, "bot.db"),
  driver: Database
}).then(db => new SQLiteProvider(db))).catch(console.error);

client.on("debug", console.debug);
client.login();