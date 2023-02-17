/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let linkRegex=/chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;export async function before(t,{conn:a,isAdmin:i,isBotAdmin:n,usedPrefix:s}){if(t.isBaileys&&t.fromMe)return!0;if(!t.isGroup)return!1;let r=e.data.chats[t.chat];e.data.settings[this.user.jid];let o=t.key.participant,c=t.key.id,d=linkRegex.exec(t.text);if(r.antiLink&&d&&!i){if(n){let p=`https://chat.whatsapp.com/${await this.groupInviteCode(t.chat)}`;if(t.text.includes(p))return t.reply("[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo")}if(!n)return a.sendButton(t.chat,`*[ ! ] Enlace detectado [ ! ]*
`,"Por suerte no soy acmin, asi que no puedo hacer nada :v",NombreDelBot,["[ DESACTIVAR ANTILINK ]",s+"apagar antilink"],t);await a.sendMessage(t.chat,{text:`*[ ! ] Enlace detectado [ ! ]*
_Ahora si k_gaste @${t.sender.split("@")[0]} Adios..._
`,mentions:[t.sender]}),a.sendMessage(t.chat,{delete:{remoteJid:t.chat,fromMe:!1,id:c,participant:o}}),setTimeout(()=>{a.groupParticipantsUpdate(t.chat,[t.sender],"remove")},1e3)}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/