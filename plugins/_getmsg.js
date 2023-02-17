/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import t from"../lib/database.js";export async function all(a){if(!a.chat.endsWith(".net")||a.fromMe||a.key.remoteJid.endsWith("status@broadcast")||t.data.chats[a.chat].isBanned||t.data.users[a.sender].banned||a.isBaileys)return;let e=t.data.msgs;if(a.text in e)await this.serializeM(JSON.parse(JSON.stringify(e[a.text]),(t,a)=>null!==a&&"object"==typeof a&&"type"in a&&"Buffer"===a.type&&"data"in a&&Array.isArray(a.data)?Buffer.from(a.data):a)).copyNForward(a.chat,!0)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/