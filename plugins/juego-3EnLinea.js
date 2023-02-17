/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/tictactoe.js";let handler=async(a,{conn:n,command:t,text:r})=>{if(n.game=n.game?n.game:{},Object.values(n.game).find(e=>e.id.startsWith("tictactoe")&&[e.game.playerX,e.game.playerO].includes(a.sender)))return a.reply("Ya estas en una sala activa -.-");if(!r)return a.reply(`*[ ! ] Ingrese un nombre para crear una nueva sala*
Ejemplo de uso:

${Prefijo+t} el nether
`);let s=Object.values(n.game).find(e=>"WAITING"===e.state&&(!r||e.name===r));if(s){await a.reply("Rival encontrado!\nᴱˡ ᶦⁿᶦᶜᶦᵃᵈᵒʳ ᵗᶦᵉⁿᵉ ᑫᵘᵉ ᶜᵒᵐᵉⁿᶻᵃʳ ᵉˡ ʲᵘᵉᵍᵒ ᵉˢᶜʳᶦᵇᶦᵉⁿᵈᵒ ᵘⁿ ⁿᵘ́ᵐᵉʳᵒ ᵈᵉ \xb9 ᵃˡ ⁹ ᵖᵃʳᵃ ᶜᵒᵐᵉⁿᶻᵃʳ"),s.o=a.chat,s.game.playerO=a.sender,s.state="PLAYING";let l=s.game.render().map(e=>({X:"❌",O:"⭕",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣"})[e]),i=`
ID de sala: ${s.id}

${l.slice(0,3).join("")}
${l.slice(3,6).join("")}
${l.slice(6).join("")}

❌ = @${s.game.playerX.split("@")[0]}
⭕ = @${s.game.playerO.split("@")[0]}

@${s.game.currentTurn.split("@")[0]} tiene que comenzar el juego

~Escriba :~

rendirse

~para darse por vencido~
`.trim();s.x!==s.o&&await n.sendMessage(s.x,{text:i,mentions:n.parseMention(i)},{quoted:a}),await n.sendMessage(s.o,{text:i,mentions:n.parseMention(i)},{quoted:a})}else s={id:"tictactoe-"+ +new Date,x:a.chat,o:"",game:new e(a.sender,"o"),state:"WAITING"},r&&(s.name=r),n.sendButton(a.chat,"*[ ! ] Esperando rival*\n\n_Recompensa para el ganador +4000 de XP_\n",NombreDelBot,null,[["[ ACEPTAR DESAF\xcdO ]",`${Prefijo+t} ${r}`]],a),n.game[s.id]=s};handler.help=["ttt"],handler.tags=["games"],handler.command=/^(ttt)$/,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/