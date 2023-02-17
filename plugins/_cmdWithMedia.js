/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let{proto:s,generateWAMessage:i,areJidsSameUser:t}=(await import("@adiwajshing/baileys")).default;export async function all(a,r){if(a.isBaileys||!a.message||!a.msg||!a.msg.fileSha256||!(Buffer.from(a.msg.fileSha256).toString("base64") in e.data.sticker))return;let{text:m,mentionedJid:d}=e.data.sticker[Buffer.from(a.msg.fileSha256).toString("base64")],o=await i(a.chat,{text:m,mentions:d},{userJid:this.user.id,quoted:a.quoted&&a.quoted.fakeObj});o.key.fromMe=t(a.sender,this.user.id||this.user.jid),o.key.id=a.key.id,o.pushName=a.pushName,a.isGroup&&(o.participant=a.sender);let n={...r,messages:[s.WebMessageInfo.fromObject(o)].map(this.serializeM),type:"append"};this.ev.emit("messages.upsert",n)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/