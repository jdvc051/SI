/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,text:t,args:r})=>{if(!r[0])return e.reply("Que desea buscar en Google?");let l=await a.getName(e.sender),u=encodeURIComponent(t),n=e.reply(MultiNK.Bsqd(l));await n;try{let i=await fetchJson(`https://latam-api.vercel.app/api/google?apikey=${MyApiKey}&q=${u}`);if(!i.busqueda.titulo)return e.reply("[ ! ] Sin resultados");let s=JSON.stringify(i.mas_info),d=i.otras_preguntas.join(", \n- "),o=null==i.mas_info.type;a.sendMessage(e.chat,{image:{url:o?i.busqueda.miniatura:"https://drive.google.com/uc?export=download&id=1YRjJNNItcpPCodIIXrYbVX0hdgufMBLZ"},caption:`〘  *GOOGLE* 〙
_~> Resultados para : ${t}_

🔖 Titulo: ${i.busqueda.titulo}
📜 Descripcion: ${i.busqueda.descripcion}
⛓️ Url: ${i.busqueda.link}
🖼️ Imagen: ${i.busqueda.imagen}${"\n\uD83D\uDD0D Busquedas relacionadas: "+d}
${o?"":`
🌐 `+"‎".repeat(850)+s}
`},{quoted:e})}catch(p){e.reply(MultiNK.Error0())}};handler.help=["google"].map(e=>e+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(google)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/