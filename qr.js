const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./felix/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Felix Userbot')}${chalk.blue.bold('By TOXIC-DEVIL')}
${chalk.white.italic('AsenaString Kodu Alıcı')}

${chalk.blue.italic('⏱️ Connecting to Felix-Userbot... Please Wait...')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Felix String: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `FELIX_SESSION="${st}"`);
        }

        console.log(
            chalk.green.bold('Here is Your Felix Session..👆.')
        );
        process.exit(0);
    });

    await conn.connect();
}

whatsAsena()
