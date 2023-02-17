/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";import{generateWAMessageFromContent as a}from"@adiwajshing/baileys";let handler=async(a,{conn:t,text:o,participants:i})=>{let n=i.map(e=>t.decodeJid(e.id)),d=a.quoted?a.quoted:a,l=(d.msg||d).mimetype||"",m=/image|video|sticker|audio/.test(l),s=["https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1","https://vm.tiktok.com/ZMLjP4RBS/","https://fb.watch/b7LOc9_LU2/","https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA"],r="‎".repeat(850),g=`${o||"ˢᵉˣʸ ᴱˡ ᑫᵘᵉ ᴸᵒ ᴸᵉᵃ ⁷ʷ⁷"}`;if(m&&"imageMessage"===d.mtype&&g){var p=await d.download?.();t.sendMessage(a.chat,{image:p,caption:g,contextInfo:{mentionedJid:n,externalAdReply:{thumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:s[Math.floor(Math.random()*s.length)]}}},{quoted:a})}else if(m&&"videoMessage"===d.mtype&&g){var p=await d.download?.();t.sendMessage(a.chat,{video:p,mentions:n,mimetype:"video/mp4",caption:g})}else if(m&&"audioMessage"===d.mtype&&g){var p=await d.download?.();t.sendMessage(a.chat,{audio:p,contextInfo:{mentionedJid:n,externalAdReply:{body:g,thumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:s[Math.floor(Math.random()*s.length)]}},mimetype:"audio/mp4",fileName:"Hidetag.mp3"})}else if(m&&"stickerMessage"===d.mtype&&g){var p=await d.download?.();t.sendMessage(a.chat,{sticker:p,contextInfo:{mentionedJid:n,externalAdReply:{body:g,thumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:s[Math.floor(Math.random()*s.length)]}}})}else await t.relayMessage(a.chat,{extendedTextMessage:{text:`${r}
${g}
`,contextInfo:{mentionedJid:n,externalAdReply:{thumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:s[Math.floor(Math.random()*s.length)]}}}},{})};handler.help=["hidetag"].map(e=>e+" [mensaje]"),handler.tags=["grupos","admins"],handler.command=/^(totag|hidetag)$/i,handler.group=!0,handler.admin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/