/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let rewards={exp:5e4,nkoins:49999,elixir:10,mitico:3,legendario:1},cooldown=2592e6,handler=async a=>{let l=e.data.users[a.sender];if(new Date-l.lastmonthly<2592e6)return a.reply(`Ya has reclamado tu regalo mensual, siguiente reclamo en *${clockString(l.lastmonthly+2592e6-new Date)}.*`);let n="";for(let r of Object.keys(rewards))r in l&&(l[r]+=rewards[r],n+=`*+${rewards[r]}* ${rpg.emoticon(r)}${r}
`);a.reply(n),l.lastmonthly=new Date*1};handler.help=["mensual"],handler.tags=["games"],handler.command=/^(mensual)$/i,handler.cooldown=2592e6;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/