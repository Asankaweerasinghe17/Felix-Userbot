const TOXIC_DEVIL = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

// List
const QUOTE_DESC = "It Sends Random Quote"
const NEED_LOCATIONA = "*My Owner is TOXIC-DEVIL 😘*"
const QUOTE = "Quote :"
const AUTHOR = "Author :"
const NOT_FOUNDA = "```Sorry,I could not find a quote. 😖```"

TOXIC_DEVIL.addCommand({pattern: 'quote ?(.*)', fromMe: true, desc: QUOTE_DESC}, async (message, match) => {
	if (match[1] === 'Who is your owner') return await message.reply(NEED_LOCATIONA);
	const url = `https://api.quotable.io/random`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📌 ' + QUOTE +'* ```' + json.content + '```\n\n' +
		'*✒️' + AUTHOR +'* ```' + json.author+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDA, MessageType.text);
	}
});
