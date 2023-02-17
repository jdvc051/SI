/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";export async function all(a){if(!a.isGroup)return;let t=e.data.chats[a.chat];if(!t.expired)return!0;+new Date>t.expired&&(await this.reply(a.chat,"Expiro el tiempo para quedarme en el grupo\n\nC va epicamente*"),await this.groupLeave(a.chat),t.expired=null)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/