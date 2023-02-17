/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{plugins as e}from"../lib/plugins.js";let{proto:s,generateWAMessage:t,areJidsSameUser:a}=(await import("@adiwajshing/baileys")).default;export async function all(i,n){if(i.isBaileys||!i.message||!(i.message.buttonsResponseMessage||i.message.templateButtonReplyMessage||i.message.listResponseMessage))return;let o=i.message.buttonsResponseMessage?.selectedButtonId||i.message.templateButtonReplyMessage?.selectedId||i.message.listResponseMessage?.singleSelectReply?.selectedRowId,m=i.message.buttonsResponseMessage?.selectedDisplayText||i.message.templateButtonReplyMessage?.selectedDisplayText||i.message.listResponseMessage?.title,l=!1,p;for(let r in e){let c=e[r];if(!c||c.disabled||!opts.restrict&&c.tags&&c.tags.includes("admin")||"function"!=typeof c||!c.command)continue;let d=e=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"),g=c.customPrefix?c.customPrefix:this.prefix?this.prefix:global.prefix;if(p=((g instanceof RegExp?[[g.exec(o),g]]:Array.isArray(g)?g.map(e=>{let s=e instanceof RegExp?e:RegExp(d(e));return[s.exec(o),s]}):"string"==typeof g?[[RegExp(d(g)).exec(o),RegExp(d(g))]]:[[[],RegExp()]]).find(e=>e[1])[0]||"")[0]){let[f]=o.replace(p,"").trim().split` `.filter(e=>e);f=(f||"").toLowerCase();if(!(c.command instanceof RegExp?c.command.test(f):Array.isArray(c.command)?c.command.some(e=>e instanceof RegExp?e.test(f):e===f):"string"==typeof c.command&&c.command===f))continue;l=!0}}let u=await t(i.chat,{text:l?o:m,mentions:i.mentionedJid},{userJid:this.user.id,quoted:i.quoted&&i.quoted.fakeObj});u.key.fromMe=a(i.sender,this.user.id),u.key.id=i.key.id,u.pushName=i.name,i.isGroup&&(u.key.participant=u.participant=i.sender);let y={...n,messages:[s.WebMessageInfo.fromObject(u)].map(this.serializeM),type:"append"};this.ev.emit("messages.upsert",y)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/