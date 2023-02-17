/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as a from"fs";let handler=async(e,{conn:i})=>{await i.sendMessage(e.chat,{image:{url:await i.profilePictureUrl(e.chat,"image").catch(a=>"./multimedia/imagenes/myunivers.jpg")},jpegThumbnail:a.readFileSync("./multimedia/imagenes/mylogo.jpg"),caption:`
╔═══════════
╟{ ANIME }
║
║圆 ${Prefijo}anifrase
║圆 ${Prefijo}waifu_hd
║圆 ${Prefijo}rostro_4k
║圆 ${Prefijo}infoanime
║圆 ${Prefijo}neko
║圆 ${Prefijo}snime
║圆 ${Prefijo}waifu
╚═══════════
`.trim()},{quoted:e})};handler.help=["mianime"],handler.command=/^(mianime)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/