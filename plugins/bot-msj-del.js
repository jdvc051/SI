/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=function(e,{conn:t,isAdmin:a,isBotAdmin:d}){if(!e.quoted)throw!1;let{isBaileys:s}=e.quoted,n=e.message.extendedTextMessage.contextInfo.participant,i=e.message.extendedTextMessage.contextInfo.stanzaId;if(d&&a)t.sendMessage(e.chat,{delete:{remoteJid:e.chat,fromMe:!1,id:i,participant:n}});else if(a){if(!s)throw!1;t.sendMessage(e.chat,{delete:e.quoted.vM.key})}else{if(!s)throw!1;t.sendMessage(e.chat,{delete:e.quoted.vM.key}),e.limit=1}};handler.help=["suprimir"],handler.tags=["grupos","admins"],handler.command=/^(suprimir|del)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/