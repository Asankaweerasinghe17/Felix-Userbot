FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-DEVIL/Felix-Userbot /root/Felix-Userbot
WORKDIR /root/Felix-Userbot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
