/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a})=>{let t=await a.profilePictureUrl(e.sender,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");try{var n=await fetchJson(`https://latam-api.vercel.app/api/ani_frases?apikey=${MyApiKey}`);a.relayMessage(e.chat,{extendedTextMessage:{text:`
🎴 Anime : ${n.anime}
🀄 Personaje : ${n.personaje}
🔖 Frase : ${n.frase}
`,contextInfo:{mentionedJid:[e.sender],externalAdReply:{thumbnailUrl:t,sourceUrl:"https://vm.tiktok.com/ZMF1heqbV/"}}}},{})}catch(r){e.reply(MultiNK.Error0())}};handler.help=["anifrase"],handler.tags=["animeuwu"],handler.command=/^(anifrase)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/