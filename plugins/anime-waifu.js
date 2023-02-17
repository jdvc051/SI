/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"node-fetch";import*as a from"fs";let handler=async(t,{conn:i,command:r})=>{let n=t.mentionedJid&&t.mentionedJid[0]?t.mentionedJid[0]:t.fromMe?i.user.jid:t.sender,s=await i.getName(t.sender),m=t.reply(MultiNK.Proces(s));await m;try{let d=await (await e("https://latam-api.vercel.app/api/waifu?apikey="+MyApiKey)).json();i.sendMessage(t.chat,{image:{url:d.imagen},caption:`┏━⊱ Imagen : ${r}
┗⊱ Solicitada por : @${n.replace(/@.+/,"")}`,mentions:[n]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:a.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${s} [_>] ${r}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(l){t.reply(MultiNK.Error0())}};handler.help=["waifu"],handler.tags=["animeuwu"],handler.command=/^(waifu)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/