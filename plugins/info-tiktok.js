/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";let handler=async(e,{conn:t,args:o})=>{if(!o[0])return e.reply("*[ ! ] Introduzca el nombre de usuario valido...*");if(o[0].includes("https://"))return e.reply("Por favor, solo use un nombre o nickname!");try{let n=(await fetchJson(`https://latam-api.vercel.app/api/ustiktok?apikey=${MyApiKey}&q=${o[0]}`)).apirres;t.sendMessage(e.chat,{document:{url:"https://github.com/NeKosmic/NK-BOT-MD"},mimetype:"application/vnd.openxmlformats-officedocument.presentationml.presentation",fileName:"@NeKosmic",fileLength:69e9,pageCount:999,contextInfo:{forwardingScore:100,isForwarded:!0,externalAdReply:{mediaUrl:"https://youtu.be/Tk9Pitk1_oM",mediaType:2,previewType:"pdf",thumbnail:await getBuffer(n.logo)}},caption:"{ info de usuario en tiktok }",buttons:[{buttonId:"<\\>",buttonText:{displayText:`⚡ Usuario: ${n.nombre}

🔥 Nickname: ${n.apodo}

🌎 Seguidores: ${n.seguidores}

🤝 Siguiendo: ${n.siguiendo}

📜 Descripcion: ${n.descripcion}

⛓️ Link: https://www.tiktok.com/${n.nombre}
`},type:1}],headerType:6},{quoted:e})}catch(i){e.reply(MultiNK.Error0())}};handler.help=["tiktok"].map(e=>e+" <usuario>"),handler.tags=["busqueda"],handler.command=/^(tiktok|tiktokstalk)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/