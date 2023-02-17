/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"node-fetch";import{format as t}from"util";let handler=async(r,{text:a,conn:n})=>{if(!/^https?:\/\//.test(a))return r.reply("El par\xe1metro *URL* debe comenzar con http:// \xf3 https:// -.-");let h;await r.reply(MultiNK.Proces(await n.getName(r.sender)));let{href:l,origin:i}=new URL(a),o=await e(l,{headers:{referer:i}});if(o.headers.get("content-length")>107374182400)throw`Content-Length: ${o.headers.get("content-length")}`;if(!/text|json/.test(o.headers.get("content-type")))return n.sendFile(r.chat,l,"file",a,r);let d=await o.buffer();try{d=t(JSON.parse(d+""))}catch(s){d+=""}finally{r.reply(d.slice(0,65536)+"")}};handler.help=["fetch"],handler.tags=["herramienta"],handler.command=/^(fetch)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/