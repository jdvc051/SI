/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";import{canLevelUp as l}from"../lib/levelling.js";export function before(r){let i=e.data.users[r.sender];if(!i.autolevelup)return!0;let t=1*i.level;for(;l(i.level,i.exp,global.multiplier);)i.level++;t!==i.level&&(i.role=global.rpg.role(i.level).name,r.reply(`
Felicidades, ${this.getName(r.sender)} subiste de nivel!
♻️ Nivel anterior : ${t}
🪀 Nivel actual : ${i.level}
⚔️ Rol : ${i.role}
	`.trim()))}export const disabled=!0;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/