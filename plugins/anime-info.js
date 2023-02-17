/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:e,text:i,command:r})=>{if(!i)return a.reply(`Que anime desea buscar?, ejemplo de uso:

${Prefijo+r} nichijou
`);let t;await a.reply(MultiNK.Bsqd(await e.getName(a.sender)));let o=encodeURIComponent(i);try{let n=(await fetchJson(`https://api.jikan.moe/v4/anime?q=${o}`)).data[0],s=n.images.jpg.image_url?n.images.webp.image_url:n.images.jpg.large_image_url?n.images.webp.large_image_url:"https://drive.google.com/uc?export=download&id=1XUu0nNH12JI-iyGOQdPRkHsgtp3DO0eu",l=`[ ${n.title} - Comun ], [ ${n.title_english} - Ingles ], [ ${n.title_japanese} - Japon\xe9s ]`;try{var d=`*🔥 Productora:* ${n.producers[0].name||"-"}
*🪀 Licenciado por:* ${n.licensors[0].name||"-"}
*🌟 Estudio:* ${n.studios[0].name||"-"}`}catch{var d=""}try{var u=`*📺 Trailer:* ${n.trailer.url||"Url no encontrado!"}`}catch{var u=""}await e.sendMessage(a.chat,{image:{url:s},caption:`
${"*\uD83E\uDDEC ID:* "+n.mal_id}
${"*✍️ T\xedtulos:* "+l}
${"*\uD83E\uDE84 Tipo:* "+n.type}
${"*\uD83E\uDDE9 Genero:* "+n.source}
${"*\uD83D\uDDC3️ Episodio:* "+n.episodes}
${"*\uD83C\uDFAD Estado:* "+await traducIr(encodeURI(n.status))}
${"*⌚ Duraci\xf3n:* "+await traducIr(encodeURI(n.duration))}
${"*♻️ Clasificaci\xf3n:* "+await traducIr(encodeURI(n.rating))}
${"*\uD83D\uDCC8 Puntaje:* "+n.score}
${"*\uD83D\uDC4D Calificado por:* "+n.scored_by}
${"*\uD83D\uDD16 Rango:* "+n.rank}
${"*⚡ Popularidad:* "+n.popularity}
${"*\uD83D\uDC65 Miembros:* "+n.members}
${"*❤️ Favoritos:* "+n.favorites}
${"*\uD83D\uDCDC Sinopsis:* "+await traducIr(encodeURI(n.synopsis))}
${d}
${u}
`.trim()},{quoted:a})}catch(p){a.reply(MultiNK.Error0())}};handler.help=["infoanime"],handler.tags=["animeuwu"],handler.command=/^(infoanime)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/