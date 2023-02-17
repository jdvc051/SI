/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:e,text:i,args:t})=>{if(!t[0])return a.reply("Cual es su búsqueda en Wikipedia?");const n=await e.getName(a.sender),r=encodeURIComponent(i),d=a.reply(MultiNK.Bsqd(n));await d;try{const t=await fetchJson(`https://latam-api.vercel.app/api/wikipedia?apikey=${MyApiKey}&q=${r}`);if(!t.datos.wikinfo)return a.reply("[ ! ] Sin resultados");e.sendMessage(a.chat,{image:{url:t.datos.miniatura},caption:`${"|| *WIKIPEDIA* ||\n_~> Resultados para : "+i+"_"}${"\n"+String.fromCharCode(8206).repeat(850)}${"\n"+t.datos.wikinfo}`},{quoted:a})}catch(e){a.reply(MultiNK.Error0())}};handler.help=["wikipedia <busqueda>"],handler.tags=["busqueda"],handler.command=/^wikipedia$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/