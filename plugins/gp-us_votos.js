/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(t,{conn:o,command:a})=>{let e=t.chat;if(o.vote=o.vote?o.vote:{},!(e in o.vote))return t.reply(`*[ ! ] Aun no hay una votaci\xf3n activa en este grupo*
_Para crear una nueva votacion use el comando_ ${Prefijo}votacion`);let n=o.vote[e][1].concat(o.vote[e][2]),r=n.includes(t.sender);if(r)return t.reply("*[ ! ] No puedes volver a votar*");if(/sivotar/i.test(a)){o.vote[e][1].push(t.sender);var i="\uD83D\uDC4D"}else if(/novotar/i.test(a)){o.vote[e][2].push(t.sender);var i="\uD83D\uDC4E"}let[s,v,l]=o.vote[e],p=`\`\`\`[ VOTACI\xd3N ]\`\`\`

📋 *Razon:* ${s}
✍️ *Votante:* ${"@"+t.sender.split("@")[0]}

📝
┣🫂
┣━⊱ Votos a favor [✓]
${v.map((t,o)=>`┣ ${o+1}. @${t.split`@`[0]}`).join("\n")?v.map((t,o)=>`┣ ${o+1}. @${t.split`@`[0]}`).join("\n"):"┣ Aun no hay :v"}
┗━━⊱ Total: ${v.length}

📝
┣👥
┣━⊱ Votos en contra [X]
${l.map((t,o)=>`┣ ${o+1}. @${t.split`@`[0]}`).join("\n")?l.map((t,o)=>`┣ ${o+1}. @${t.split`@`[0]}`).join("\n"):"┣ Aun no hay :v"}
┗━━⊱ Total: ${l.length}`.trim();await o.sendButton(t.chat,p,NombreDelBot+` 🔥`,null,[["Si Votar ✔️",`${Prefijo}sivotar`],["No Votar ❌",`${Prefijo}novotar`]],t,{mentions:o.parseMention(p)}),reacMoji(t.chat,o,i,t)};handler.help=["sivotar","novotar"],handler.tags=["grupos"],handler.command=/^(sivotar|novotar)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/