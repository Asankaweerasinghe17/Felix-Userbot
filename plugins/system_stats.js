/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

            await message.client.sendMessage(message.jid,'😁 𝐇𝐞𝐲 𝐁𝐫𝐨!! 𝐈 𝐚𝐦 𝐒𝐭𝐢𝐥𝐥 𝐀𝐥𝐢𝐯𝐞 & 𝐊𝐢𝐜𝐤𝐢𝐧𝐠!! 😉\n\n𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 : 𝚃𝙾𝚇𝙸𝙲 𝙳𝙴𝚅𝙸𝙻\n𝘚𝘶𝘱𝘱𝘰𝘳𝘵 : [-Unavailable-]\n\n𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : 1.1.0\n𝘉𝘳𝘢𝘯𝘤𝘩 : 𝚖𝚊𝚜𝚝𝚎𝚛\n\n𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘎𝘳𝘰𝘶𝘱 1 : https://chat.whatsapp.com/FdxBLbt1BcT3NKbVKvNGcD\n\n𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘎𝘳𝘰𝘶𝘱 2 : https://chat.whatsapp.com/KMHpUACludA5XIcPncFkl1\n\n𝐓𝐡𝐚𝐧𝐤 𝐘𝐨𝐮 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠 𝐅𝐞𝐥𝐢𝐱 💌💕', MessageType.text);
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
