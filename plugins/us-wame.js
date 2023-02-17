/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,args:t})=>{const n=await a.profilePictureUrl(e.sender,"image").catch((e=>{})),r=await a.getName(e.sender);a.relayMessage(e.chat,{extendedTextMessage:{text:`⚡ *LINKS DE TU NUMERO* ⚡\n\n*Solicitado por* : ${r} \n\n▪︎ *Su link directo de whatsapp es* :\n\n▪︎ https://wa.me/${e.sender.split("@")[0]}\n\n*O puede usar este otro*\n\n▪︎ https://api.whatsapp.com/send?phone=${e.sender.split("@")[0]} `,contextInfo:{externalAdReply:{title:"Toque aqui para ver una prueba del link",body:NombreDelBot,previewType:"PHOTO",thumbnailUrl:n,thumbnail:fs.readFileSync("./multimedia/imagenes/avatar_contact.png"),sourceUrl:`https://wa.me/${e.sender.split("@")[0]}?text=Hola+${r}%0D%0A%E1%B4%AE%CA%B8+%E1%B4%BA%E1%B4%B7`}}}},{})};handler.help=["wame"],handler.tags=["casual"],handler.command=/^(wame|wa.me)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/