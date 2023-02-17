/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import t from"node-fetch";import e from"../lib/database.js";export async function before(a){let i=e.data.chats[a.chat];if(i.simi&&!i.isBanned&&!a.fromMe){if(a.text.startsWith(Prefijo)||!a.text)return;let s=await t(`https://api.simsimi.net/v2/?text=${encodeURIComponent(a.text)}&lc=es`);if(!s.ok)throw"Simi muri\xf3 :v";let r=await s.json();return"No s\xe9 lo qu\xe9 est\xe1s diciendo. Por favor ense\xf1ame."==r.success&&await a.reply("No habla taka taka x'd"),await a.reply(r.success),!0}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/