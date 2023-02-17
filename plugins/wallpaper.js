/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,text:p,command:t,args:r})=>{if(!r[0])return e.reply("Cual es su búsqueda?");const s=await a.getName(e.sender),l=encodeURIComponent(p),i=e.reply(MultiNK.Bsqd(s));await i;try{const t=await fetchJson(`https://latam-api.vercel.app/api/wpp?apikey=${MyApiKey}&q=${l}`),r=await fetchJson(`https://latam-api.vercel.app/api/wpp2?apikey=${MyApiKey}&q=${l}`),i=await fetchJson(`https://latam-api.vercel.app/api/wpp3?apikey=${MyApiKey}&q=${l}`);a.sendMessage(e.chat,{image:{url:t.wallpaper||r.wallpaper||i.imagen},caption:`${"┏━⊱ Wallpaper : "+p}${"\n┗⊱  Solicitada por : @"+e.sender.replace(/@.+/,"")}`,mentions:[e.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${s} => ${p}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["wallpaper <busqueda>"],handler.tags=["busqueda"],handler.command=/^(wallpaper|wpp|fondo)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/