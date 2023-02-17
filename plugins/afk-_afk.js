/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";export function before(t){let n=e.data.users[t.sender];n.afk>-1&&(t.reply(`📲 *Dejaste de estar AFK despu\xe9s de ${(new Date-n.afk).toTimeString()}*
Bienvenid@ de vuelta!!! :D`.trim()),n.afk=-1,n.afkReason="");let a=[...new Set([...t.mentionedJid||[],...t.quoted?[t.quoted.sender]:[]])];for(let o of a){let r=e.data.users[o];if(!r)continue;let i=r.afk;if(!i||i<0)continue;let s=r.afkReason||"";t.reply(`📴 *El usuario mencionado actualmente esta ausente, tiempo transcurrido ${(new Date-i).toTimeString()}*

┏⊱ *Razon* 
┗━⊱ ${s}
`.trim())}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/