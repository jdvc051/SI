/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{areJidsSameUser as e}from"@adiwajshing/baileys";import*as t from"fs";let handler=async(a,{conn:i,args:n,isAdmin:r})=>{let l=a.chat;if(/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(n[0])&&(l=n[0]),!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(l))return global.dfail("group",a,i);let d=await i.groupMetadata(l);if(!d)throw"groupMetadata no esta definido :/";if(!("participants"in d))throw"participants no esta definido :(";let o=d.participants.find(t=>e(t.id,i.user.id));if(!o)return a.reply("No estoy en ese grupo :v");if(!o.admin)return global.dfail("botAdmin",a,i);if(!r)return global.dfail("admin",a,i);let p=await i.groupInviteCode(l);i.relayMessage(a.chat,{extendedTextMessage:{text:`
🪀  https://chat.whatsapp.com/${p}
`,contextInfo:{mentionedJid:[a.sender],externalAdReply:{mediaType:"VIDEO",mediaUrl:null,title:d.subject,body:null,thumbnail:t.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:"https://chat.whatsapp.com/"+p}}}},{})};handler.help=["gplink"],handler.tags=["grupos"],handler.command=/^(gplink|linkgp|grouplink|linkgroup)$/i,handler.group=!0,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/