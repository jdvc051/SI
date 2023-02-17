/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(m,{conn:t,args:a,isOwner:i})=>{let r=Object.entries(e.data.users).filter(e=>e[1].premiumTime).map(([e,m])=>({...m,jid:e})),n=e.data.users[m.sender].premiumTime,s=e.data.users[m.sender].premium,d=r.map(toNumber("premiumTime")).sort(sort("premiumTime")),u=a[0]&&a[0].length>0?Math.min(100,Math.max(parseInt(a[0]),10)):Math.min(10,d.length);t.sendMessage(m.chat,{text:`
*[ LISTA - PREMIUM ]*

*🌟 Cliente* : @${m.sender.split`@`[0]}
${i?"*⏳ Tiempo premium* : ∞":s?`*⏳ Tiempo premium* : _${clockString(n-new Date*1)}._`:"*\uD83D\uDEAB Ya no es un usuario premium!"}
${"\n——————————\n\n"+d.slice(0,u).map(({jid:e,name:m,premiumTime:a,registered:i},r)=>`*⭐ Usuario* : ${i?m:t.getName(e)}
*⏳ Tiempo premium* : ${a>0?`_${clockString(a-new Date*1)}._`:"\uD83D\uDEAB Expirado ---"}`).join`\n\n`}
`.trim(),mentions:[m.sender]},{quoted:m}),setTimeout(()=>{e.data.chats[m.chat].deletemedia&&t.deleteMessage(m.chat,key)},e.data.chats[m.chat].deletemediaTime)};handler.help=["listprem"],handler.tags=["casual"],handler.command=/^(listprem|premlist)$/i;export default handler;function sort(e,m=!0){return e?(...t)=>t[1&m][e]-t[1&!m][e]:(...e)=>e[1&m]-e[1&!m]}function toNumber(e,m=0){return e?(t,a,i)=>({...i[a],[e]:void 0===t[e]?m:t[e]}):e=>void 0===e?m:e}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/