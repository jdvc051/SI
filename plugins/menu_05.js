/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as a from"fs";let handler=async(e,{conn:i})=>{await i.sendMessage(e.chat,{image:{url:await i.profilePictureUrl(e.chat,"image").catch(a=>"./multimedia/imagenes/myunivers.jpg")},jpegThumbnail:a.readFileSync("./multimedia/imagenes/mylogo.jpg"),caption:`
╔═══════════
╟{ MENU +18 }
║
║㋡ ${Prefijo}hentai
╚═══════════
`.trim()},{quoted:e})};handler.help=["labiblia"],handler.command=/^(labiblia)$/i,handler.group=!0,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/