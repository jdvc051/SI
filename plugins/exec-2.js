/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e,{exec as r}from"child_process";import{promisify as a}from"util";let exec=a(r).bind(e),handler=async(e,{conn:r,isOwner:a,command:t,text:l})=>{if(r.user.jid!=r.user.jid)return;e.reply("_Ejecutando..._");let d;try{d=await exec(t.trimStart()+" "+l.trimEnd())}catch(n){d=n}finally{let{stdout:i,stderr:c}=d;i.trim()&&e.reply(i),c.trim()&&e.reply(c)}};handler.help=["$ "],handler.tags=["avanzado"],handler.customPrefix=/^[$] /,handler.command=RegExp(),handler.owner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/