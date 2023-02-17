/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:e,text:r,command:d})=>r?r.match(/@/g)?void(await e.groupParticipantsUpdate(a.chat,[r.replace(/[^0-9]/g,"")+"@s.whatsapp.net"],"demote").catch(a=>{console.log(a)}),reacMoji(a.chat,e,"⚔️",a)):a.reply(`Ejemplo de uso:

${Prefijo+d} @+51995xxx
`):a.reply("*A que administrador desea quitarle su puesto?*");handler.help=["quitarpoder @usuario"],handler.tags=["grupos","admins"],handler.command=/^(quitarpoder|degradar|demote|quitaradmin)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/