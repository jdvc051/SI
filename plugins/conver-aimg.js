/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{spawn as e}from"child_process";import{format as t}from"util";let handler=async(n,{conn:r,usedPrefix:o,command:a})=>{if(!global.support.convert&&!global.support.magick&&!global.support.gm)return handler.disabled=!1;if(!n.quoted)return n.reply(`*Respomda una imagen usando el comando* :

${o+a}
`);let i=n.quoted;if(!/sticker/.test(i.mediaType))return n.reply(`*Respomda una imagen usando el comando* :

${o+a}
`);{let d=await i.download();if(!d)throw d;if(!1==!i.isAnimated)return n.reply(`[ ! ] Solo stickers est\xe1ticos`);let s=[],[p,...l]=[...global.support.gm?["gm"]:global.support.magick?["magick"]:[],"convert","webp:-","png:-"],m=e(p,l);m.on("error",e=>n.reply(t(e))),m.stdout.on("data",e=>s.push(e)),m.stdin.write(d),m.stdin.end(),m.on("exit",()=>{r.sendFile(n.chat,Buffer.concat(s),"image.png",NombreDelBot,n),reacMoji(n.chat,r,"⚙️",n)})}};handler.help=["aimg"],handler.tags=["conversor"],handler.command=/^(aimg|toimg)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/