/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:n,args:i})=>{if(!i[0])return e.reply("*[ ! ] Introduzca una dirección IP*");if(!i[0].includes("19"))return e.reply('*[ ! ] Use una dirección IP valida de clase "C" !*');const o=await n.getName(e.sender),t=e.reply(MultiNK.Bsqd(o)),a="No encontrado u.u";await t;try{const o=await fetchJson(`https://latam-api.vercel.app/api/verip?apikey=${MyApiKey}&q=${i[0]}`);if(!o.continente.nombre)return e.reply("No pude encontrar ninguna información para esta dirección IP ;-;");n.sendMessage(e.chat,{caption:`🗺️ INFO DE DIRECCION IP\n🔖 Solicitado por : @${e.sender.replace(/@.+/,"")}`,footer:`${NombreDelBot} 🔥`,location:{degreesLatitude:o.latitud,degreesLongitude:o.longitud},buttons:[{buttonId:"</bromita>",buttonText:{displayText:`[ INFORMACIÓN ]\n\`\`\`\n➢ Dirección IP : ${o.ip}\n➢ Dispositivo mobil : ${o.mobil?"[✓]":"[X]"}\n➢ Continente : ${o.continente.nombre}\n➢ Codigo de continente : ${o.continente.codigo}\n➢ Pais : ${o.pais.nombre}\n➢ Codigo de pais : ${o.pais.codigo}\n➢ Nombre de región : ${o.region.nombre}\n➢ Código de Region : ${o.region.codigo}\n➢ Ciudad : ${o.ciudad}\n➢ Distrito : ${o.distrito||a}\n➢ Codigo postal : ${o.ZIP||a}\n➢ Latitud : ${o.latitud}\n➢ Longitud : ${o.longitud}\n➢ Zona horaria : ${o.zonaHoraria}\n➢ Offset : ${o.offset}\n➢ Moneda local : ${o.divisa}\n➢ Proveedor de internet : ${o.isp}\n➢ Organización : ${o.organizacion}\n➢ Sociedad : ${o.as||a} \n➢ DNS : ${o.reverse||a}\n➢ Servidor proxy : ${o.proxy?"[✓]":"[X]"}\n➢ Alojamiento web : ${o.hosting?"[✓]":"[X]"}\n\`\`\``},type:1}],headerType:"LOCATION",mentions:[e.sender]})}catch(n){e.reply(MultiNK.Error0())}};handler.help=["verip <IP>"],handler.tags=["busqueda"],handler.command=/^verip$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/