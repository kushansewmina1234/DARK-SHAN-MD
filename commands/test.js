const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "spotify",
        alias: ['st'],
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }
            
            let pp = 'https://telegra.ph/file/c2ebb68cfe5958ad14985.jpg'

            const shan = await fetchJson(`https://guruapi.tech/api/spotifydl?url=${text}`);

            if (!shan || !shan) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    audio: { url: `https://guruapi.tech/api/spotifydl?url=${text}` },
                    mimetype: "audio/mpeg",
                    waveform:  [100, 0, 100, 0, 100, 0, 100],


                    contextInfo: {
                            
                                title: "↺ |◁   II   ▷|   ♡",
                                body: `now playing ${text}`,
                                thumbnail: pp,
                                renderLargerThumbnail: false,
                                mediaType: 1,
                                sourceUrl: null
                            }
                        
                    
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);