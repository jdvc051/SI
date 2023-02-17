/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,args:i})=>{try{let o=await fetchJson(`https://latam-api.vercel.app/api/github?apikey=${MyApiKey}&q=${i[0]?i[0]:"NeKosmic"}`);o.nick;let t=i[0].includes("nekosmic")?"[ ! ] Actualmente la cuenta de mi creador principal esta suspendido, puede realizar otra b\xfasqueda en github :D":`[ USUARIO-GITHUB-🐱 ]

🧿 ID: ${o.id}
⚡ Usuario: < ${o.nick} />
🔥 Nombre: ${o.nombre}
🫂 Seguidores: ${o.seguidores}
🤝 Siguiendo: ${o.siguiendo}
🧰 Repositorios: ${o.repositorios}
🏗️ Compa\xf1\xeda: ${o.empresa}
🧑‍💻 Blog: ${o.blog}
🌎 Ubicaci\xf3n: ${o.ubicacion}
📈 Fecha de creacion: ${o.fechaDeCreacion}
📉 Ultima actualizacion: ${o.ultimaActualizacion}
📜 Biografia: ${o.biografia}`;if(!i[0].includes("nekosmic"))return await a.sendMessage(e.chat,{image:{url:o.imagen},caption:t},{quoted:e});a.sendMessage(e.chat,{image:{url:o.imagen||"./multimedia/imagenes/logo.jpg"},caption:t},{quoted:e}),await a.sendMessage(e.chat,{audio:{url:"https://drive.google.com/uc?export=download&id=1TpopczuzJ4ok0DVP2AvlPoOoAlQ4Byhw"},fileName:"Wowner.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:e})}catch(r){e.reply(MultiNK.Error0())}};handler.help=["github"].map(e=>e+" <usuario>"),handler.tags=["busqueda"],handler.command=/^(github|githubuser)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/