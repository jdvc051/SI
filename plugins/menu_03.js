/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";let handler=async(a,{conn:i})=>{await i.sendMessage(a.chat,{image:{url:await i.profilePictureUrl(a.chat,"image").catch(e=>"./multimedia/imagenes/myunivers.jpg")},jpegThumbnail:e.readFileSync("./multimedia/imagenes/mylogo.jpg"),caption:`
╔═══════════
╟{ CREA-LOGOS }
║
║☞ ${Prefijo}logo
║☞ ${Prefijo}lolice
║☞ ${Prefijo}horny
║☞ ${Prefijo}blur
║☞ ${Prefijo}gay
║☞ ${Prefijo}triggered
║☞ ${Prefijo}simpcard
║☞ ${Prefijo}pixelate
║☞ ${Prefijo}its-so-stupid
║☞ ${Prefijo}youtube-comment
║☞ ${Prefijo}escribir
║☞ ${Prefijo}imgtxt
╚═══════════
`.trim()},{quoted:a})};handler.help=["logofabrica"],handler.command=/^(logofabrica)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/