/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,args:n,text:l})=>l?l.length>=26?e.reply(`*[ ! ] m\xe1ximo de car\xe1cteres es 25*`):void(await a.groupUpdateSubject(e.chat,l),reacMoji(e.chat,a,"✍️",e)):e.reply(`*[ ! ] Ingrese un titulo/nombre/apodo con el cual se actualizar\xe1 el asunto del grupo actual*`);handler.help=["gpname <texto>"],handler.tags=["grupos","admins"],handler.command=/^(gpname|namegp|setname)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/