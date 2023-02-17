/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(a,{command:r})=>{if(!a.quoted)return a.reply("Responda un mensaje!");if(!a.quoted.fileSha256)return a.reply("Falta hash SHA256");let n=e.data.sticker,t=a.quoted.fileSha256.toString("hex");if(!(t in n))return a.reply("[ ! ] Hash no encontrado en la base de datos");n[t].locked=!/^un/i.test(r),a.reply("Hecho ✓")};handler.help=["un",""].map(e=>e+"lockcmd"),handler.tags=["herramienta"],handler.command=/^(un)?lockcmd$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/