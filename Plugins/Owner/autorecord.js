
module.exports = {
  command: ['autorecord', 'autorecording'],
  operate: async ({ Cypher, m, reply, args, prefix, command, isCreator, mess, db, botNumber }) => {
    if (!isCreator) return reply(mess.owner);
    if (args.length < 1) return reply(`Example: ${prefix + command} on/off`);

    const validOptions = ["on", "off"];
    const option = args[0].toLowerCase();

    if (!validOptions.includes(option)) return reply("Invalid option");
    
    db.data.settings[botNumber].autorecord = option === "on";
    reply(`Auto-record ${option === "on" ? "enabled" : "disabled"} successfully`);
  }
};