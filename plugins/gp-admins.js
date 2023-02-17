/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(n,{conn:a,participants:e,groupMetadata:l})=>{let d=e.filter(n=>n.admin),r=d.map((n,a)=>`🛡 [${a+1}] wa.me/${n.id.split("@")[0]}`).join("\n\n");n.reply(`*Administradores del grupo* : ${l.subject}

*Total* : 

${r}
`)};handler.help=["admins"],handler.tags=["casual"],handler.command=/^(admins)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/