/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";let handler=async(a,{conn:t,text:n,participants:r,command:s})=>{if(!n)return a.reply(`*[ ! ] Agrege una razon para la ejecuci\xf3n*
Ejemplo: 

${Prefijo+s} Hoy muere un random :v
`);if(n.length<9)return a.reply("*[ ! ] La razon es muy corta*");let i=await t.profilePictureUrl(a.sender,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");try{let p=r;var o=[];p.map(async e=>{o.push(e.id.replace("c.us","s.whatsapp.net"))});let l=1e4,d=o[Math.floor(Math.random()*o.length)];if(d.startsWith(t.user.id.split(":")[0]))return a.reply("Hoy no muere nadie :D");t.sendMessage(a.chat,{text:`*[ Death Note ]* 📓

┏━⊱ *Seleccinado:* @${d.split("@")[0]}
┗⊱ *Raz\xf3n de su ejecucion:* 
${n}

_Tiene ${l%6e4/1e3} segundos para decir sus \xfaltimas palabras_
`,mentions:[d]},{ephemeralExpiration:86400,quoted:{key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51995386439-1616169743@g.us",inviteCode:"m",groupName:"P",caption:`⚰️@${d.split("@")[0]} 💀`,jpegThumbnail:await miniThumb(await getBuffer(i))}}}}),setTimeout(()=>{setTimeout(()=>{t.groupParticipantsUpdate(a.chat,[d],"remove").catch(e=>{a.reply(MultiNK.Error1())})},1e3),t.sendMessage(a.chat,{text:"Press [F]",mentions:[d]},{ephemeralExpiration:86400,quoted:{key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51995386439-1616169743@g.us",inviteCode:"m",groupName:"P",caption:`C come una manzana* :v🍎`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/press-f.jpg")}}}})},l)}catch{a.reply("No se pudo usar el DeathNote...")}};handler.help=["deathnote"],handler.tags=["games"],handler.command=/^(deathnote)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/