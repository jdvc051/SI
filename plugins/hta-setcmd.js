/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(r,{text:t,command:a})=>{if(e.data.sticker=e.data.sticker||{},!r.quoted)return r.reply(`Responda un sticker *${Prefijo+a}*`);if(!r.quoted.fileSha256)return r.reply("Falta hash SHA256(sticker)");if(!t)return r.reply(`Ejemplo de uso:

${Prefijo+a} ${Prefijo}menu
`);let d=e.data.sticker,n=r.quoted.fileSha256.toString("base64");if(d[n]&&d[n].locked)return r.reply("No tienes permiso para realizar esta solicitud.");d[n]={text:t,mentionedJid:r.mentionedJid,creator:r.sender,at:+new Date,locked:!1},r.reply(`Completado correctamente ✓`)};handler.help=["cmd"].map(e=>"set"+e+" <texto>"),handler.tags=["herramienta"],handler.command=/^setcmd$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/