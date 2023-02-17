/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(n,{conn:e,participants:r,text:l})=>{if(!l)return n.reply("*[ ! ] Que top desea generar?*");if(l.length<3)return n.reply("*[ ! ] El texto es muy corto*");let t=r[Math.floor(Math.random()*r.length)].id.split("@")[0],o=r[Math.floor(Math.random()*r.length)].id.split("@")[0],a=r[Math.floor(Math.random()*r.length)].id.split("@")[0],d,i=`*[ TOP 5 ${l} ]*
_Generador_ : ${await e.getName(n.sender)}

✵:･ﾟ✧ :･✵ :･✧:･ﾟ✵

▪︎ @${t} 

▪︎ @${o} 

▪︎ @${a} 

▪︎ @${r[Math.floor(Math.random()*r.length)].id.split("@")[0]} 

▪︎ @${r[Math.floor(Math.random()*r.length)].id.split("@")[0]} 

✵:･ﾟ✧ :･✵ :･✧:･ﾟ✵
`;n.reply(i,n.chat,{mentions:e.parseMention(i)})};handler.help=["top5"],handler.tags=["games"],handler.command=/^(top5)$/i,handler.group=!0,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/