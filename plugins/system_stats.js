const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "😁 𝐇𝐞𝐲 𝐁𝐫𝐨!! 𝐈 𝐚𝐦 𝐒𝐭𝐢𝐥𝐥 𝐀𝐥𝐢𝐯𝐞 & 𝐊𝐢𝐜𝐤𝐢𝐧𝐠!! 😉\n\n𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 : 𝚃𝙾𝚇𝙸𝙲 𝙳𝙴𝚅𝙸𝙻\n𝘚𝘶𝘱𝘱𝘰𝘳𝘵 : [-Unavailable-]\n\n𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : 1.1.0\n𝘉𝘳𝘢𝘯𝘤𝘩 : 𝚖𝚊𝚜𝚝𝚎𝚛\n\n𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘎𝘳𝘰𝘶𝘱 1 : https://chat.whatsapp.com/FdxBLbt1BcT3NKbVKvNGcD\n\n𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘎𝘳𝘰𝘶𝘱 2 : https://chat.whatsapp.com/KMHpUACludA5XIcPncFkl1\n\n𝐓𝐡𝐚𝐧𝐤 𝐘𝐨𝐮 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠 𝐅𝐞𝐥𝐢𝐱 💌💕"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Made By TOXIC DEVIL*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
