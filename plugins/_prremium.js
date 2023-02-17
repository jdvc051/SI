/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=e=>e;export async function all(a){let m=e.data.users[a.sender];!a.chat.endsWith("broadcast")&&0!=m.premiumTime&&m.premium&&new Date*1>=m.premiumTime&&(await a.reply(`[ ! ] Se acab\xf3 tu tiempo premium!
_ Espero que lo hayas disfrutado :3_
`),m.premiumTime=0,m.premium=!1)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/