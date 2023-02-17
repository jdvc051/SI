/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{conn:r,text:i,command:n,args:a})=>{let o;o=e.isGroup?e.mentionedJid[0]?e.mentionedJid[0]:!!e.quoted&&e.quoted.sender:e.chat;const d=db.data.users[o];if(!o)return e.reply("Por favor etiquete o mencione a alguien!");i.replace("@"+o.split`@`[0],"").trim();if(!a[1])return e.reply("Por favor indique el número de dias");if(isNaN(a[1]))return e.reply(`Solo números!\n\nEjemplo de uso:\n${Prefijo+n} @${e.sender.split`@`[0]} 1`);if(8<=a[1])return e.reply("[ ! ] Maximo 7 dias");const m=864e5*a[1],t=1*new Date;t<d.premiumTime?d.premiumTime+=m:d.premiumTime=t+m,d.premium=!0,e.reply(`*[ USUARIO PREMIUM ]*\n🔖 *Nombre:* ${d.name}\n📆 *Dias:* ${a[1]} dia(s)\n📉 *Tiempo restante:* ${d.premiumTime-t}MS`)};handler.help=["addprem [@usuario] <dias>"],handler.tags=["propietario"],handler.command=/^addprem$/i,handler.group=!0,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/