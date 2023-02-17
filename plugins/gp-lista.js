/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/connection.js";let handler=async(t,{conn:r})=>{let a="";try{for(let[l,n]of Object.entries(e.store.chats).filter(([e,t])=>e.endsWith("@g.us")&&t.isChats))a+=`♻️ ${await r.getName(l)} :
🔖 _${l} [${n?.metadata?.read_only?"Fuera del grupo":"Dentro del grupo"}]_

`;t.reply(`*Grupos con mayor actividad de ${NombreDelBot} actualmente:*

${a}
`.trim())}catch(o){t.reply(MultiNK.Error1())}};handler.help=["gplist"],handler.tags=["casual"],handler.command=/^(gplist|listgp|grouplist|listgroups)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/