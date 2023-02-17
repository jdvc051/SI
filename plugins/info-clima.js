/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"../lib/calendario.js";let handler=async(e,{conn:i,args:r})=>{if(!r[0])return e.reply("[ ! ] Introduzca el nombre de la ciudad");try{let l=await fetchJson(`https://latam-api.vercel.app/api/clima?apikey=${MyApiKey}&q=${r[0]}`);await e.reply(`[ CLIMA ]

📆 Fecha: ${a.fechaCompleta}
🌁 Ciudad: ${l.lugar}
🗺️ Zona horaria: ${l.zonaHoraria}
📄 Descripcion: ${await traducIr(encodeURI(l.clima.descripcion))}
🌡️Temperatura: Minimo ${l.clima.temperatura.minimo}\xbaC / Maximo ${l.clima.temperatura.maximo}\xbaC
🎭 Sensacion: ${l.clima.temperatura.sensacion}
🏞️ Presion atmosferica: ${l.clima.temperatura.presion}milibares
💦 Humedad: ${l.clima.temperatura.humedad}%
👁️ Visibilidad: ${l.clima.visibilidad}msnm
🌪️ Viento: Velocidad ${l.clima.viento.velocidad}km/h
☁️ Nubes: ${l.clima.principal}%`),i.sendMessage(e.chat,{caption:`🧿`,location:{degreesLatitude:l.latitud,degreesLongitude:l.longitud},mentions:[e.sender]})}catch(t){e.reply(MultiNK.Error0())}};handler.help=["clima"].map(a=>a+" <lugar>"),handler.tags=["busqueda"],handler.command=/^(clima|weather)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/