/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(r,{text:t})=>{let a=t;if(r.quoted&&r.quoted.fileSha256&&(a=r.quoted.fileSha256.toString("hex")),!a)return r.reply("No se encontraron hashes!");let l=e.data.sticker;if(l[a]&&l[a].locked)return r.reply("[ ! ] No tienes permiso para eliminar este sticker-cmd");delete l[a],r.reply(`Eliminado correctamente ✓`)};handler.help=["delcmd <texto>"],handler.tags=["herramienta"],handler.command=/^delcmd$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/