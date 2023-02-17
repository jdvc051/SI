/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";let handler=async(a,{conn:t,command:i})=>{let n=a.mentionedJid&&a.mentionedJid[0]?a.mentionedJid[0]:a.fromMe?t.user.jid:a.sender,r=await t.getName(a.sender),s=a.reply(MultiNK.Proces(r));await s;try{var m=await fetchJson(`https://latam-api.vercel.app/api/nekonime1?apikey=${MyApiKey}`);t.sendMessage(a.chat,{image:{url:m.imagen},caption:`┏━⊱ Imagen : ${i}
┗⊱ Solicitada por : @${n.replace(/@.+/,"")}`,mentions:[n]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:e.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${r} [_>] ${i}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(d){a.reply(MultiNK.Error0())}};handler.help=["neko"],handler.tags=["animeuwu"],handler.command=/^(neko)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/