/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as a from"fs";let handler=async(e,{conn:i})=>{await i.sendMessage(e.chat,{image:{url:await i.profilePictureUrl(e.chat,"image").catch(a=>"./multimedia/imagenes/myunivers.jpg")},jpegThumbnail:a.readFileSync("./multimedia/imagenes/mylogo.jpg"),caption:`
╔═══════════
╟{ DESCARGADOR }
║
║➣ ${Prefijo}fbdl
║➣ ${Prefijo}gitclone
║➣ ${Prefijo}mediafire
║➣ ${Prefijo}tiktokdl
║➣ ${Prefijo}yta
║➣ ${Prefijo}audio
║➣ ${Prefijo}ytabochi
║➣ ${Prefijo}ytvbochi
║➣ ${Prefijo}ytmp3
║➣ ${Prefijo}ytmp4
║➣ ${Prefijo}play
║➣ ${Prefijo}ytv
╠═══════════
╟{ BUSCADOR }
║
║➣ ${Prefijo}play2
║➣ ${Prefijo}imagen
║➣ ${Prefijo}google
║➣ ${Prefijo}clima
║➣ ${Prefijo}covid
║➣ ${Prefijo}github
║➣ ${Prefijo}tiktok
║➣ ${Prefijo}pinterest
║➣ ${Prefijo}playstore
║➣ ${Prefijo}verip
║➣ ${Prefijo}wallpaper
║➣ ${Prefijo}wikipedia
║➣ ${Prefijo}ytbuscar
╠═══════════
╟{ CONVERSOR }
║
║➣ ${Prefijo}txtestilo
║➣ ${Prefijo}emojimix
║➣ ${Prefijo}attp
║➣ ${Prefijo}telesticker
║➣ ${Prefijo}linesticker
╠═══════════
╟{ HERRAMIENTAS }
║
║➣ ${Prefijo}voz
║➣ ${Prefijo}fetch
║➣ ${Prefijo}traducir
╠═══════════
╟{ RANDOM }
║
║➣ ${Prefijo}nombreninja
║➣ ${Prefijo}randimg
║➣ ${Prefijo}djbot
║➣ ${Prefijo}xd
║➣ ${Prefijo}comediante
║➣ ${Prefijo}notif
║➣ ${Prefijo}tumama
║➣ ${Prefijo}consejo
║➣ ${Prefijo}minidatos
║➣ ${Prefijo}fraseamor
║➣ ${Prefijo}minombre
║➣ ${Prefijo}simi
║➣ ${Prefijo}aichat
║➣ ${Prefijo}wagrupos
╚═══════════
`.trim()},{quoted:e})};handler.help=["randmenu"],handler.command=/^(randmenu)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/