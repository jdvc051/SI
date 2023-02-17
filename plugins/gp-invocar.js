/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,groupMetadata:n,text:r,participants:d,isAdmin:t,isOwner:l})=>{let o=d.map(e=>e.id).filter(e=>e!==a.user.jid);await a.sendMessage(e.chat,{text:`*[ ! ] Invocando a los integrantes del grupo* : ${n.subject}
*~> Invocador* : _@${e.sender.replace(/@.+/,"")}_
*~> Mensaje* : _${r||"No hay :v"}_
${"‎".repeat(850)}
╔═══ஜ۩۞۩ஜ═══╗
`+o.map(e=>"╠➥ @"+e.replace(/@.+/,"")).join`\n`+"\n╚═══════════\n",mentions:o},{quoted:e}),reacMoji(e.chat,a,"\uD83D\uDCE2",e)};handler.help=["invocar"],handler.tags=["grupos","admins"],handler.command=/^(invocar|todos|tagall)$/i,handler.admin=!0,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/