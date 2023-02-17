/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let items=["nkoins","elixir","basura","madera","roca","cuerda","miMascot","esmeralda","diamante","oro","hierro","ordinario","singular","mitico","legendario","mascota",],confirmation={};async function handler(r,{conn:n,args:a,command:t}){if(confirmation[r.sender])return r.reply("Ya estas realizando una transferencia!");let i=e.data.users[r.sender],s=items.filter(e=>e in i&&"number"==typeof i[e]),o=`Usar formato ${Prefijo}${t} [tipo] [cantidad] [n\xfamero]
ejemplo de uso:

${Prefijo}${t} nkoins 9999 @51995386439

📍 Art\xedculos transferibles
${s.map(e=>`${rpg.emoticon(e)}${e}`.trim()).join("\n")}
`.trim(),l=(a[0]||"").toLowerCase();if(!s.includes(l))return r.reply(o);let d=1*Math.min(Number.MAX_SAFE_INTEGER,Math.max(1,isNumber(a[1])?parseInt(a[1]):1)),m=r.mentionedJid&&r.mentionedJid[0]?r.mentionedJid[0]:a[2]?a[2].replace(/[@ .+-]/g,"")+"@s.whatsapp.net":"";if(!m)return r.reply("Etiqueta a un usuario \xf3 escribe el n\xfamero!!");if(!(m in e.data.users))return r.reply(`Usuario *${m}* no se encuentra en la base de datos -.-`);if(1*i[l]<d)return r.reply(`Su *${rpg.emoticon(l)}${l}${special(l)}* es menos que *${d-i[l]}*`);let c=`
\xbfEst\xe1 seguro de que desea transferir *${d}* ${rpg.emoticon(l)}${l}${special(l)} a *@${(m||"").replace(/@s\.whatsapp\.net/g,"")}*

Tienes 60 segundos
`.trim(),u=NombreDelBot;n.sendButton(r.chat,c,u,null,[["sip"],["nop"]],r,{mentions:[m]}),confirmation[r.sender]={sender:r.sender,to:m,message:r,type:l,count:d,timeout:setTimeout(()=>(r.reply("Se acab\xf3 el tiempo..."),delete confirmation[r.sender]),6e4)}}handler.before=async r=>{if(r.isBaileys||!(r.sender in confirmation)||!r.text)return;let{timeout:n,sender:a,message:t,to:i,type:s,count:o}=confirmation[r.sender];if(r.id===t.id)return;let l=e.data.users[a],d=e.data.users[i];if(/nop/g.test(r.text.toLowerCase()))return clearTimeout(n),delete confirmation[a],r.reply("Rechazado");if(/sip/g.test(r.text.toLowerCase())){let m=1*l[s],c=1*d[s];l[s]-=1*o,d[s]+=1*o,m>1*l[s]&&c<1*d[s]?r.reply(`Transferencia exitosa *${o}* ${rpg.emoticon(s)}${s}${special(s)} a *@${(i||"").replace(/@s\.whatsapp\.net/g,"")}*`,null,{mentions:[i]}):(l[s]=m,d[s]=c,r.reply(`Error al transferir *${o}* ${rpg.emoticon(s)}${s}${special(s)} a *@${(i||"").replace(/@s\.whatsapp\.net/g,"")}*`,null,{mentions:[i]})),clearTimeout(n),delete confirmation[a]}},handler.help=["transferir"],handler.tags=["games"],handler.command=/^(transferir)$/i,handler.disabled=!1;export default handler;function special(e){return["ordinario","singular","mitico","legendario","mascota"].includes(e.toLowerCase())?" Caja":""}function isNumber(e){return!isNaN(e)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/