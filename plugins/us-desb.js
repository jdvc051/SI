/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(a,{conn:r,text:d})=>{if(!d)return a.reply("A quien desea desbanear?");let n;if(!(n=a.isGroup?a.mentionedJid[0]:a.chat))return a.reply("[ ! ] Por favor etiquete al usuario que desea desbanear");e.data.users[n].banned=!1,r.reply(a.chat,`Usuario desbaneado, ${n} puede volver a usar al bot [✓]`,a)};handler.help=["desbanear @usuario"],handler.tags=["propietario"],handler.command=/^desbanear$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/