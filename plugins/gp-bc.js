/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/connection.js";let handler=async(a,{conn:n,command:t,text:r})=>{if(!r)return a.reply("[ ! ] Y el mensaje?");let s=Object.entries(e.store.chats).filter(([e,a])=>e.endsWith("@g.us")&&a.isChats&&!a.metadata?.read_only&&!a.metadata?.announce).map(e=>e[0]),o=a.quoted?a.quoted:a,i=(o.msg||o).mimetype||"",l=/image|video|sticker|audio/.test(i);if(a.reply(`Enviando transmisi\xf3n a ${s.length} grupo(s), en aproximadamente ${1.5*s.length} segundo(s)`),l){var d=await o.download?.();for(let m of s)n.sendMessage(m,{image:d,caption:r});a.reply(`Finalizando transmisi\xf3n a ${s.length} grupo(s) ✓`)}else{for(let g of s)n.sendMessage(g,{text:r});a.reply(`Finalizando transmisi\xf3n a ${s.length} grupo(s) ✓`)}};handler.help=["bcgc"].map(e=>e+" <mensaje>"),handler.tags=["propietario"],handler.command=/^(broadcastgroup|bcgc)$/i,handler.owner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/