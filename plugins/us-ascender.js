/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:e,text:r,command:d})=>r?r.match(/@/g)?void(await e.groupParticipantsUpdate(a.chat,[r.replace(/[^0-9]/g,"")+"@s.whatsapp.net"],"promote").catch(a=>{console.log(a)}),reacMoji(a.chat,e,"⚔️",a)):a.reply(`Ejemplo de uso:

${Prefijo+d} @+51995...
`):a.reply("*A que participante desea convertirlo en administrador?*");handler.help=["darpoder @usuario"],handler.tags=["grupos","admins"],handler.command=/^(darpoder|ascender|promote|daradmin)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/