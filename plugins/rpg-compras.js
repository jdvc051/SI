/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let items={comprar:{limit:{exp:999},elixir:{nkoins:1250},basura:{nkoins:4}},vender:{elixir:{nkoins:125},basura:{nkoins:2}}},handler=async(r,{command:i,args:o})=>{let t=e.data.users[r.sender],n=Object.fromEntries(Object.entries(items[i.toLowerCase()]).filter(([e])=>e&&e in t)),a=`
Usar formato *${Prefijo}${i} [art\xedculo] [cantidad]*
Ejemplo de uso: 

${Prefijo}${i} elixir 10
    
📍Lista de art\xedculos: 
${Object.keys(n).map(e=>{let r=Object.keys(n[e]).find(e=>e in t);return`*-${global.rpg.emoticon(e)}${e}* ${"comprar"==i?"Costo":"Valor"} ${n[e][r]} ${global.rpg.emoticon(r)}${r}`.trim()}).join("\n")}
`.trim(),s=(o[0]||"").toLowerCase(),m=1*Math.floor(isNumber(o[1])?Math.min(Math.max(parseInt(o[1]),1),Number.MAX_SAFE_INTEGER):1);if(!n[s])return r.reply(a);if("comprar"==i.toLowerCase()){if("limit"==o[0]?o[1]>global.UsLimitesCmd:"")return r.reply(`No puedes comprar mas de ${global.UsLimitesCmd} limit, tu l\xedmite actual es: ${t.limit}`);let l=Object.keys(n[s]).find(e=>e in t);return t[l]<n[s][l]*m?r.reply(`No tienes suficiente ${global.rpg.emoticon(l)}${l} para comprar *${m}* ${global.rpg.emoticon(s)}${s}. Necesitas *${n[s][l]*m-t[l]}* ${l} para poder comprar`):(t[l]-=n[s][l]*m,t[s]+=m,r.reply(`T\xfa compraste *${m}* ${global.rpg.emoticon(s)}${s} ✓`))}return t[s]<m?r.reply(`No tienes suficiente *${global.rpg.emoticon(s)}${s}* para vender, tu solo tienes ${t[s]} art\xedculos`):(t[s]-=m,t.nkoins+=n[s].nkoins*m,r.reply(`Vendiste *${m}* ${global.rpg.emoticon(s)}${s} ✓`))};handler.help=["comprar","vender"].map(e=>e+" [art\xedculo] [cantidad]"),handler.tags=["games"],handler.command=/^(comprar|vender)$/i;export default handler;function isNumber(e){return e?"number"==typeof(e=parseInt(e))&&!isNaN(e):e}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/