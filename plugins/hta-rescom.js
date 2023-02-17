/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,command:t})=>{e.quoted&&e.quoted;let r=(e.quoted?e.quoted:e.msg).mimetype||"";if(!/image|video/.test(r))return e.reply(`Envie \xf3 Responda un video \xf3 imagen con el comando 

${Prefijo+t}
`);try{var n;await a.sendMessage(e.chat,{text:e.quoted.caption||"[ ! ] No se pudo recuperar un comentario."},{ephemeralExpiration:86400,quoted:e}),reacMoji(e.chat,a,"\uD83D\uDDA8️",e)}catch{e.reply(MultiNK.Error1())}};handler.help=["rescom"],handler.tags=["herramienta"],handler.command=/^(rescom)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/