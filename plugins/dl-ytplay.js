/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{generateWAMessageFromContent as e}from"@adiwajshing/baileys";import a from"../lib/database.js";let handler=async(t,{conn:r,command:o,text:l})=>{try{let i=await fetchJson(`https://latam-api.vercel.app/api/ytplay2?apikey=${MyApiKey}&q=${encodeURIComponent(l)}`),n=1e3*i.duracion_s,s=a.data.users[t.sender];if(new Date-s.lagnet<n)return t.reply(`_Por favor espere ${clockString(s.lagnet+n-new Date)}antes de realizar otra solicitud_ 
~ᴱˡ ᵗᶦᵉᵐᵖᵒ ᵈᵉ ᵉˢᵖᵉʳᵃ ᵈᵉᵖᵉⁿᵈᵉ ᵈᵉ ˡᵃ ᵈᵘʳᵃᶜᶦᵒ́ⁿ ᵈᵉˡ ᵃᵘᵈᶦᵒ ᵃⁿᵗᵉʳᶦᵒʳᵐᵉⁿᵗᵉ ˢᵒˡᶦᶜᶦᵗᵃᵈᵒ~`);if(!l)return t.reply(`Que desea buscar en Youtube?, Ejemplo de uso: 

${Prefijo+o} mtc s3rl`);let d;await t.reply(MultiNK.Proces(await r.getName(t.sender)));let u=await getBuffer(i.logo),p=e(t.chat,{extendedTextMessage:{text:`
*✍️ T\xedtulo:* ${i.titulo}
*🎹 Autor:* ${i.autor}
*🗜️ Tama\xf1o:* ${i.peso+" Aprox."}
*⏳ Duraci\xf3n:* ${i.duracion}



 _Enviando audio, espere..._
`.trim(),contextInfo:{externalAdReply:{title:i.titulo,body:"⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻",thumbnail:u,sourceUrl:"https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1"}}}},{quoted:t});await r.relayMessage(t.chat,p.message,{messageId:p.key.id}),s.lagnet=new Date*1,r.sendMessage(t.chat,{audio:{url:decodeURIComponent(i.descarga1)||i.descarga2},mimetype:"audio/mp4",fileName:`${i.titulo}.mp3`},{quoted:t}).catch(e=>{t.reply(`Ocurrio un error, por favor use el comando:

${Prefijo}audio ${l}
`)})}catch(c){t.reply(MultiNK.Error0())}};handler.help=["play <texto>"],handler.tags=["servicio"],handler.command=/^play$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/