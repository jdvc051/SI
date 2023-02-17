/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:o,args:a})=>{try{let s=await fetchJson(`https://latam-api.vercel.app/api/covid19?apikey=${MyApiKey}&q=${a[0]?a[0]:"world"}`);if(!s.casos)return e.reply("[ ! ] Sin resultados");o.sendMessage(e.chat,{text:`[ COVID-19 ]

🌁 Lugar: ${a[0]?a[0]:"Mundo"}
🫁 Casos positivos: ${s.casos}
🤧 Casos de hoy: ${s.casosDehoy}
💀 Fallecidos: ${s.muertes}
⚰️ Fallecidos de hoy: ${s.muertesDehoy}
🤒 Recuperados: ${s.recuperados}
😷 En recuperacion: ${s.activo}
😵 Casos criticos: ${s.critico}
🫂 Casos por millon: ${s.casosPorMillon}
☠️ Fallecidos por millon: ${s.muertesPorMillon}
💉 Total de pruebas: ${s.pruebas}
🔬 Pruebas por millon: ${s.pruebasPorMillon}`},{quoted:e})}catch(r){e.reply(MultiNK.Error0())}};handler.help=["covid"].map(e=>e+" <pais>"),handler.tags=["busqueda"],handler.command=/^(covid|covid19)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/