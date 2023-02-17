/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

export default handler;let handler=async(a,{conn:e,text:n,command:t})=>{if(!n)return a.reply(`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo+t} cuanto es 1 + 1`);const r=await e.getName(a.sender),o=a.reply(MultiNK.Bsqd(r));await o;const s=encodeURIComponent(n);try{const e=await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${s}`);let t="*[ > ] Resultados en Youtube para:* _"+n+"_\n\n";for(let a of e.resultados)t+=`🔖 Titulo: ${a.titulo}\n🧬 ID: ${a.id}\n⛓️ URL: ${a.url}\n🗜️ Tipo: ${a.tipo}\n🖼️ Miniatura: ${a.imagen}\n⌚ Duracion: ${a.duracion}\n📜 Descripción: ${a.descripcion}\n📆 Fecha de subida: ${a.f_carga}\n👀 Vistas: ${a.vistas}\n||\n⚡Autor: ${a.autor}\n📺 Canal: ${a.canal}\n\n*——————————*\n\n`;a.reply(t)}catch(e){a.reply(MultiNK.Error0())}};handler.help=["ytbuscar <texto>"],handler.tags=["busqueda"],handler.command=/^(ytbuscar|ytsearch|yts)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/