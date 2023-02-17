/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{format as e}from"util";import t from"../lib/database.js";let debugMode=!1;export async function before(r){let a,i=!1,n=!1,s=!1;this.game=this.game?this.game:{};let m=Object.values(this.game).find(e=>e.id&&e.game&&e.state&&e.id.startsWith("tictactoe")&&[e.game.playerX,e.game.playerO].includes(r.sender)&&"PLAYING"==e.state);if(m){let o=/^(rendirse)$/i.test(r.text)?99:4999;if(!/^([1-9]|rendirse)$/i.test(r.text)||(s=!/^[1-9]$/.test(r.text),r.sender!==m.game.currentTurn&&!s))return!0;if(debugMode&&r.reply("[DEBUG]\n"+require("util").format({isSurrender:s,text:r.text})),!s&&1>(a=m.game.turn(r.sender===m.game.playerO,parseInt(r.text)-1)))return r.reply({"-3":"El juego ha terminado","-2":"Inv\xe1lido","-1":"Posici\xf3n inv\xe1lida",0:"Posici\xf3n inv\xe1lida"}[a]),!0;r.sender===m.game.winner?i=!0:511===m.game.board&&(n=!0);let d=m.game.render().map(e=>({X:"❌",O:"⭕",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣"})[e]);s&&(m.game._currentTurn=r.sender===m.game.playerX,i=!0);let g=s?m.game.currentTurn:m.game.winner,l=`
${i?`@${(s?m.game.currentTurn:m.game.winner).split("@")[0]} Victoria! (+${o} XP)`:n?"Juego terminado, empate (+99 XP)":`Turno de @${m.game.currentTurn.split("@")[0]}`}

${d.slice(0,3).join("")}
${d.slice(3,6).join("")}
${d.slice(6).join("")}
        
❌ = @${m.game.playerX.split("@")[0]}
⭕ = @${m.game.playerO.split("@")[0]}

~Escriba :~

rendirse

~para darse por vencido~
`.trim(),u=t.data.users;(m.game._currentTurn^s?m.x:m.o)!==r.chat&&(m[m.game._currentTurn^s?"x":"o"]=r.chat),m.x!==m.o&&await this.sendMessage(m.x,{text:l,mentions:this.parseMention(l)},{quoted:r}),await this.sendMessage(m.o,{text:l,mentions:this.parseMention(l)},{quoted:r}),(n||i)&&(u[m.game.playerX].exp+=99,u[m.game.playerO].exp+=99,i&&(u[g].exp+=o-99),debugMode&&r.reply("[DEBUG]\n"+e(m)),delete this.game[m.id])}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/