/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{sticker as a}from"../lib/sticker.js";let handler=async(e,{conn:t,groupMetadata:r})=>{let i=await t.getName(e.sender),l=e.reply(MultiNK.Proces(i));await l;try{let n=await a(!1,(await fetchJson(`https://latam-api.vercel.app/api/randgif_anime?apikey=${MyApiKey}`)).gif,r.subject,NombreDelBot);t.sendFile(e.chat,n,null,{asSticker:!0},e)}catch(s){e.reply(MultiNK.Error0())}};handler.help=["snime"],handler.tags=["animeuwu"],handler.command=/^(snime)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/