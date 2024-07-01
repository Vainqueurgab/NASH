module.exports = {
    name: "help",
    description: "Beginner's Guide To All Bot Commands",
    nashPrefix: false,
    version: "1.0.2",
    role: 0,
    cooldowns: 7,
    aliases: ["help"],
    execute(api, event, args, prefix) {
        const commands = global.NashBoT.commands;
        const { threadID, messageID } = event;
        
        let message = "== 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧 ==\n\n";
        
        let i = 0;
        commands.forEach((cmd, name) => {
            message += `➪ ${++i} ${prefix}${name}\n`;
        });

        const pageCount = 1; // Adjust this if you have pagination

        const pageText = `\n\n𝗣𝗔𝗚𝗘 :[${page}/${Math.ceil(commands.length / pages)}] ...\n━━━━━━━━━━━\n[🆔]𝗔𝗨𝗧𝗢𝗕𝗢𝗧 𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 : 𝗢𝗟𝗜𝗩𝗘𝗥|𝗚𝗔𝗕𝗥𝗜𝗘𝗟🏅\n[🗝️]▪𝗟𝗜𝗡𝗞-𝗙𝗕 :https://www.facebook.com/\n[⚙️]𝗟𝗜𝗡𝗞 𝗔𝗨𝗧𝗢𝗕𝗢𝗧 :https://Autobot-gabriel.onrender.com/ `;

        message += pageText;

        api.sendMessage(message, threadID, messageID);
    }
};
