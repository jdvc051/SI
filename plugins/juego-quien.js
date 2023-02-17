/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:n,text:a,participants:t,command:l})=>{if(!a)return e.reply(`*[ ! ] Invente un asunto*
_Ejemplo:_

${Prefijo+l} es gey?
`);if(a.length<5)return e.reply("*[ ! ] El asunto es muy corto*");var r=[];t.map(async e=>{r.push(e.id.replace("c.us","s.whatsapp.net"))});let s=r[Math.floor(Math.random()*r.length)];await n.sendMessage(e.chat,{text:`
👉 @${s.split("@")[0]}
`,mentions:[s]},{ephemeralExpiration:86400,quoted:e}),reacMoji(e.chat,n,"\uD83E\uDD39‍♂️",e)};handler.help=["quien"],handler.tags=["games"],handler.command=/^(quien)$/i,handler.limit=!0,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/