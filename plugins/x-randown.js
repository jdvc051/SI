/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:e,command:t,args:i})=>{try{if("comediante"==t){const t=await fetchJson(`https://latam-api.vercel.app/api/comedia?apikey=${MyApiKey}`);e.sendMessage(a.chat,{text:t.risa_not_1,mentions:[a.sender]},{quoted:{key:{participant:"0@s.whatsapp.net",...a.chat?{remoteJid:"51995386439-1613049930@g.us"}:{}},message:{videoMessage:{title:null,h:"UwU",seconds:"359996400",gifPlayback:"true",caption:"Sinsentido :v",jpegThumbnail:null}}}}),setTimeout((()=>{a.reply(t.risa_not_2||"Mucha comedia 🤡")}),4e3)}else if("notif"==t){const e=await fetchJson(`https://latam-api.vercel.app/api/noti_rand?apikey=${MyApiKey}`);a.reply(e.notificacion)}else if("tumama"==t){const e=await fetchJson(`https://latam-api.vercel.app/api/tumama?apikey=${MyApiKey}`);a.reply(e.respuesta)}else if("consejo"==t){const e=await fetchJson(`https://latam-api.vercel.app/api/rand_aviso?apikey=${MyApiKey}`);a.reply(e.aviso)}else if("minidatos"==t){const e=await fetchJson("https://docs-jojo.herokuapp.com/api/fakta-unik",{method:"get"});a.reply(await traducIr(e.result))}else if("fraseamor"==t){const e=await fetchJson("https://docs-jojo.herokuapp.com/api/katacinta",{method:"get"});a.reply(await traducIr(e.result))}else if("minombre"==t){if(!i[0])return a.reply("Y el nombre?");const e=await fetchJson(`https://docs-jojo.herokuapp.com/api/artinama?nama=${i[0]}`,{method:"get"});a.reply(await traducIr(e.result))}}catch(e){a.reply(MultiNK.Error0())}};handler.help=["comediante","notif","tumama","consejo","minidatos","fraseamor","minombre"],handler.tags=["random"],handler.command=/^(comediante|notif|tumama|consejo|minidatos|fraseamor|minombre)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/