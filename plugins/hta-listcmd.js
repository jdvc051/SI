/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(a,{conn:n})=>{n.reply(a.chat,`
*LISTA HASH*

${Object.entries(e.data.sticker).map(([e,a],n)=>`[ ${n+1} ]
*Identificador*: ${a.locked?`${e} ~(Bloqueado)~`:e}
*Funcion ejecutable* : ${a.text}`).join("\n\n")}
`.trim(),null,{mentions:Object.values(e.data.sticker).map(e=>e.mentionedJid).reduce((e,a)=>[...e,...a],[])})};handler.help=["listcmd"],handler.tags=["herramienta"],handler.command=/^listcmd$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/