/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import t from"node-webpmux";import{randomBytes as e}from"crypto";import{addExif as r}from"../lib/sticker.js";let handler=async(t,{conn:e,text:a,command:l})=>{if(!a)return t.reply(`Modo de uso:

${Prefijo+l} The life is a party
`);let o=encodeURIComponent(a);try{let i=await r(await getBuffer(`https://api.xteam.xyz/attp?file&text=${o}`),"",`[_>] ${NombreDelBot}
`);e.sendMessage(t.chat,{sticker:i},{quoted:t})}catch(n){t.reply(MultiNK.Error0())}};handler.help=["attp <texto>"],handler.tags=["conversor"],handler.command=/^attp$/i,handler.limit=!0;export default handler;let randomID=t=>e(Math.ceil(.5*t)).toString("hex").slice(0,t);

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/