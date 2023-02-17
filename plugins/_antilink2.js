/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let linkRegex=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;export async function before(t,{conn:a,isAdmin:i,isBotAdmin:r}){if(t.isBaileys&&t.fromMe)return!0;if(!t.isGroup)return!1;let n=e.data.chats[t.chat],s=e.data.settings[this.user.jid]||{},o=t.key.participant,c=t.key.id,d=linkRegex.exec(t.text);if(n.antiLink2&&d&&!i){if(r){let u=`https://chat.whatsapp.com/${await this.groupInviteCode(t.chat)}`;if(t.text.includes(u))return!0}if(await a.sendButton(t.chat,`*[ ! ] Link detectado [ ! ]*
`,`${r?"":"_Por suerte no soy acmin, asi que no puedo hacer nada unu"}`,NombreDelBot,["[ DESACTIVAR ANTILINK 2 ]",Prefijo+"apagar antilink2"],t),r&&s.restrict)await a.groupParticipantsUpdate(t.chat,[t.sender],"remove"),a.sendMessage(t.chat,{delete:{remoteJid:t.chat,fromMe:!1,id:c,participant:o}});else if(!s.restrict)return t.reply("[ ! ] Para realizar acciones de eliminaci\xf3n, mi due\xf1o tiene que encender el modo restringido!")}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/