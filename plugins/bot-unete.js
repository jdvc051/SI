/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i,handler=async(a,{conn:r,text:t,isOwner:n,args:l})=>{if(!l[0])return a.reply("Y el enlace de WhatsApp?");let[i,o,p]=t.match(linkRegex)||[];if(!o)return a.reply("[ ! ] Error, El enlace no funciona o es inv\xe1lido");let c=await r.groupGetInviteInfo(o).catch(e=>{});try{if(c.size<=MinimoDeUsuarios)return a.reply(`[ ! ] La cantidad m\xednima para unirme al grupo debe ser de *${MinimoDeUsuarios}* participantes`);let d=await r.groupAcceptInvite(o);p=Math.floor(Math.min(999,Math.max(1,n?isNumber(p)?parseInt(p):0:3))),a.reply(`${NombreDelBot} se uni\xf3 al grupo ${d} con \xe9xito 
${p?`Durante ${p} Hora(s)`:""}`);let u=e.data.chats[d];u||(u=e.data.chats[d]={}),p&&(u.expired=+new Date+36e5*p)}catch(s){console.log(s),a.reply(MultiNK.Error1())}};handler.help=["unete <Enlace de grupo>"],handler.tags=["grupos"],handler.command=/^(unete|entrabot|join)$/i,handler.limit=10,handler.group=!0;export default handler;let isNumber=e=>"number"==typeof(e=parseInt(e))&&!isNaN(e);

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/