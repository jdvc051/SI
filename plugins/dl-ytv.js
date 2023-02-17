/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";let handler=async(a,{conn:t,command:r,text:l,args:i})=>{if(!l)return a.reply(`Que desea descargar de Youtube?, Ejemplo de uso: 

${Prefijo+r} https://youtu.be/cNgyuHtBBW8`);if(!isUrl(i[0])&&!i[0].includes("youtu"))return reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");let n;await a.reply(MultiNK.Proces(await t.getName(a.sender)));let d=encodeURIComponent(l);try{let o=await fetchJson(`https://latam-api.vercel.app/api/ytmp4?apikey=${MyApiKey}&q=${d}`);await t.sendMessage(a.chat,{document:{url:o.descarga},mimetype:"video/mp4",fileName:`${o.titulo}.mp4`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")},{quoted:a}).catch(e=>{a.reply(MultiNK.Error1())})}catch(u){a.reply(MultiNK.Error0())}};handler.help=["ytv <link>"],handler.tags=["servicio"],handler.command=/^(ytv)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/