/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"../lib/database.js";let handler=async(e,{conn:r,text:n})=>{if(!n)return e.reply("A quien desea banear?");let o;if(!(o=e.isGroup?e.mentionedJid[0]:e.chat))return e.reply("[ ! ] Por favor etiquete al usuario que desea banear");a.data.users[o].banned=!0,r.reply(e.chat,`Usuario baneado, ${o} ya no podra usar al bot [ ! ]`,e)};handler.help=["banear @usuario"],handler.tags=["propietario"],handler.command=/^banear$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/