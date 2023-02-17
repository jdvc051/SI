/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";let handler=async(e,{conn:n,args:a,text:r,usedPrefix:t,command:d})=>{let o=e.mentionedJid&&e.mentionedJid[0]?e.mentionedJid[0]:e.fromMe?n.user.jid:e.sender;if("cgpen"==d){if("segundos"==a[1])var s=a[0]+"000";else if("minutos"==a[1])var s=a[0]+"0000";else if("horas"!=a[1])return e.reply(`*En que tiempo desea cerrar el grupo?*

_Ejemplo de uso_ : 
${t+d} 10 segundos`);else var s=a[0]+"00000";n.sendMessage(e.chat,{text:`*El grupo se cerrar\xe1 en ${r}*
_Accion ejecutada por : @${o.replace(/@.+/,"")}_`,mentions:[o]}),setTimeout(()=>{n.groupSettingUpdate(e.chat,"announcement")},s)}else"agp"==d&&n.groupSettingUpdate(e.chat,"not_announcement")};handler.help=["cgpen <tiempo>","agp"],handler.tags=["grupos","admins"],handler.command=/^(cgpen|agp)$/i,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/