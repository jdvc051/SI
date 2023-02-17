/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(r,{command:a,text:n})=>{let d;d=r.isGroup?r.mentionedJid[0]?r.mentionedJid[0]:r.quoted?r.quoted.sender:!!n&&n.replace(/[^0-9]/g,"")+"@s.whatsapp.net":n?n.replace(/[^0-9]/g,"")+"@s.whatsapp.net":r.chat;let t=e.data.users[d];if(!d)return r.reply(`Por favor etiquete o mencion\xe9 a alguien!

Ejemplo de uso:
${Prefijo+a} @${r.sender.split`@`[0]}`);t.premium=!1,t.premiumTime=0,r.reply(`*${t.name}* dej\xf3 de ser premium`)};handler.help=["delprem [@usuario]"],handler.tags=["propietario"],handler.command=/^(delprem)$/i,handler.group=!0,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/