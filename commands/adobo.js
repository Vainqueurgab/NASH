const axios = require("axios");

module.exports = {
    name: "adobo",
    description: "Get information from Adobo GPT API",
    aliases: [],
    cooldown: 5,
    nashPrefix: false,
    execute: async (api, event, args) => {
        const { threadID, messageID } = event;
        const query = encodeURIComponent(args.join(" "));

        const apiUrl = `https://nas-api-end.onrender.com/adobo/gpt?query=${query}`;

        try {
            api.sendMessage("Adobo is processing your request. Please wait...", threadID, messageID);

            const response = await axios.get(apiUrl);
            const { answer } = response.data;

            if (!answer) {
                return api.sendMessage("No answer received from API.", threadID, messageID);
            }

            api.sendMessage(answer, threadID, messageID);

        } catch (error) {
            console.error(error);
            api.sendMessage("An error occurred while fetching data. Please try again later.", threadID, messageID);
        }
    }
};