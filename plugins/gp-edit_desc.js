/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,args:d,text:r})=>r?r.length>=513?reply(`*[ ! ] M\xe1ximo de car\xe1cteres 512*`):void(await a.groupUpdateDescription(e.chat,r),reacMoji(e.chat,a,"✍️",e)):e.reply(`*[ ! ] Ingrese un texto con el cual se actualizar\xe1 la descripci\xf3n del grupo actual*`);handler.help=["gpdesc <texto>"],handler.tags=["grupos","admins"],handler.command=/^(gpdesc|descgp|setdesk|setdesc)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/