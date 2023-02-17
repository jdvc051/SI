/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";import a from"../lib/database.js";export async function before(t,{conn:i,isAdmin:n,isBotAdmin:r,usedPrefix:s}){if(t.isBaileys&&t.fromMe)return!0;if(!t.isGroup)return!1;let o=a.data.chats[t.chat],d=a.data.settings[this.user.jid]||{},c=t.key.participant,m=t.key.id,u=await i.getName(t.sender),p={key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51995386439-1616969743@g.us",inviteCode:"m",groupName:"P",caption:NombreDelBot,jpegThumbnail:e.readFileSync("./multimedia/imagenes/mylogo.jpg")}}};if(o.antiTraba&&t.text.length>1200){if(n)return i.sendMessage(t.chat,{text:`El administrador @${t.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`,mentions:[t.sender]},{quoted:p});if(await i.sendButton(t.chat,`*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*
`,`${r?"":"No soy administrador, no puedo hacer nada :/"}`,NombreDelBot,["[ DESACTIVAR ANTI TRABAS ]",s+"apagar antitraba"],p),r&&d.restrict)i.sendMessage(t.chat,{delete:{remoteJid:t.chat,fromMe:!1,id:m,participant:c}}),setTimeout(()=>{i.groupParticipantsUpdate(t.chat,[t.sender],"remove")},500),setTimeout(()=>{i.sendMessage(t.chat,{text:`Marcar el chat como leido ✓
${"\n".repeat(400)}
=> El n\xfamero : wa.me/${t.sender.split("@")[0]}
=> Alias : ${u}
[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`,mentions:[t.sender]},{quoted:p})},1e3);else if(!d.restrict)return t.reply("[ ! ] Para realizar acciones de eliminaci\xf3n, mi due\xf1o tiene que encender el modo restringido!")}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/