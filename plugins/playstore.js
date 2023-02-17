/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,text:r,args:i})=>{if(!i[0])return e.reply("Que desea buscar en playstore?");let t=await a.getName(e.sender),l=encodeURIComponent(r),o=e.reply(MultiNK.Bsqd(t));await o;try{let n=await fetchJson(`https://latam-api.vercel.app/api/playstore?apikey=${MyApiKey}&q=${l}`);if(!n.titulo)return e.reply("[ ! ] Sin resultados");let d=await traducIr(encodeURI(n.descripcion));a.sendMessage(e.chat,{image:{url:n.imagen?n.imagen:"https://drive.google.com/uc?export=download&id=1YMbAkiUfZUQQ4wDkarsNOA7izzSiylkB"},caption:`🔍 Resultado: ${n.titulo}
🧬 Identificador: ${n.id}
⛓️ Link: ${n.link}
🖼️ Imagen: ${n.imagen}
✍️ Desarrollador: ${n.desarrollador}
📜 Descripcion: ${d||n.descripcion}
💲 Moneda: ${n.moneda}
🎭 Gratis: ${n.gratis}
💸 Precio: ${n.precio}
📈 Puntuacion: ${n.puntuacion}`},{quoted:e})}catch(s){e.reply(MultiNK.Error0())}};handler.help=["playstore"].map(e=>e+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(playstore)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/