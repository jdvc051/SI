/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"node-fetch";let handler=async(t,{conn:a,args:r,command:i})=>{let o=/(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!r[0])return t.reply(`Por favor use una URL de github, ejemplo:
${Prefijo+i} https://github.com/NeKosmic/NK-BOT-MD`);if(r[0].includes("github.com/NeKosmic"))return t.reply("Cuenta de github baneada, por favor use otra URL");if(!o.test(r[0]))return t.reply("[ ! ] URL inv\xe1lido");let n=await a.getName(t.sender),l=t.reply(MultiNK.Proces(n));await l;let[,h,c]=r[0].match(o)||[],s=`https://api.github.com/repos/${h}/${c=c.replace(/.git$/,"")}/zipball`,d=await e(s,{method:"head"});if(200!==d.status)return t.reply(MultiNK.Error1());let m;await a.sendMessage(t.chat,{document:{url:s},fileName:d.headers.get("content-disposition").match(/attachment; filename=(.*)/)[1],mimetype:d.headers.get("content-type")},{quoted:t}).catch(e=>{t.reply(MultiNK.Error0())})};handler.help=["gitclone <Link>"],handler.tags=["servicio"],handler.command=/^(gitclone)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/