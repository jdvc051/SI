/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";import a from"../lib/database.js";export async function before(t,{conn:s,isAdmin:i,isBotAdmin:o,isOwner:n,isROwner:r}){return!!t.isBaileys&&!!t.fromMe||!t.isGroup&&(!t.message||(a.data.chats[t.chat],!(a.data.settings[this.user.jid]||{}).antiPrivado||n||r||(await s.sendMessage(t.chat,{text:`*[ ! ] El chat por privado esta prohibido [ ! ]*
Mi due\xf1o por si necesita informaci\xf3n : wa.me/${OwnerNum}

_Adios..._`,mentions:[t.sender]},{quoted:{key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51995386439-1616169743@g.us",inviteCode:"m",groupName:"P",caption:NombreDelBot,jpegThumbnail:e.readFileSync("./multimedia/imagenes/press-f.jpg")}}}}),setTimeout(()=>{this.updateBlockStatus(t.chat,"block")},3e3)),!1))}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/