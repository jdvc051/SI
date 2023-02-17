/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"../lib/database.js";let handler=async(e,{text:t,conn:o})=>{let r=a.data.users[e.sender];return t?t.length<10?e.reply("[ ! ] El motivo es muy corto"):void(r.afk=+new Date,r.afkReason=t,await o.sendMessage(e.chat,{text:`*Se activo la funci\xf3n AFK exitosamente*

➸ *Usuario*: ${o.getName(e.sender)}
➸ *Razon*: ${t}`},{quoted:e}),reacMoji(e.chat,o,"\uD83D\uDCA4",e)):e.reply(`Por favor diga su motivo para irse AFK
Ejemplo de uso : 
${Prefijo}afk ir\xe9 al ba\xf1o :v`)};handler.help=["afk [razon]"],handler.tags=["casual"],handler.command=/^afk$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/