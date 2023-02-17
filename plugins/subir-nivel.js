/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{canLevelUp as e,xpRange as l}from"../lib/levelling.js";import{levelup as a}from"../lib/canvas.js";import r from"../lib/database.js";let handler=async(i,{conn:t})=>{let v=r.data.users[i.sender];var n="";if(v.level<=2?n="[ - - - - - - - - - - ]":v.level<=9?n="[# - - - - - - - - - ]":v.level<=19?n="[## - - - - - - - - ]":v.level<=29?n="[### - - - - - - - ]":v.level<=39?n="[#### - - - - - - ]":v.level<=49?n="[##### - - - - - ]":v.level<=59?n="[###### - - - - ]":v.level<=69?n="[####### - - - ]":v.level<=79?n="[######## - - ]":v.level<=89?n="[######### - ]":v.level<=99&&(n="[##########]"),!e(v.level,v.exp,global.multiplier)){let{min:s,xp:d,max:o}=l(v.level,global.multiplier),u=v.exp-s,p=u<0?`[ ! ] Su XP actual es menor de 0, usted debe ${0-u} XP para continuar subiendo de nivel...`:`
🪀 Nivel actual *${v.level} (${v.exp-s}/${d})*
🔥 Te faltan *${o-v.exp}* de XP para que puedas subir al siguiente nivel
`;return i.reply(p)}let m=1*v.level;for(;e(v.level,v.exp,global.multiplier);)v.level++;if(m!==v.level){v.role=global.rpg.role(v.level).name;let c=`Felicidades! ${t.getName(i.sender)}
Acabas de subir de nivel`,b=`\`\`\`${n}\`\`\`

♻️ *Nivel anterior* : ${m}
🪀 *Nuevo nivel* : ${v.level}
⚔️ *Rol del cliente* : ${v.role}
📆 *Fecha* : ${new Date().toLocaleString("es-ES")}

_Cuanto mas interact\xfaes con el bot, mayor ser\xe1\xa1 tu nivel_
`.trim();try{let h=await a(c,v.level);t.sendFile(i.chat,h,"levelup.jpg",b,i)}catch(f){i.reply(b)}}};handler.help=["subirnivel"],handler.tags=["xp"],handler.command=/^(subirnivel|levelup)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/