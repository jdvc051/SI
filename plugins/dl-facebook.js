/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,command:r,args:l})=>{if(!l[0])return e.reply("Link?");if(!isUrl(l[0]))return e.reply("*[ ! ] Por favor use un Link*");if(!l[0].match(/www.facebook.com|fb.watch/g))return e.reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de Facebook_\n");let i;await e.reply(MultiNK.Proces(await a.getName(e.sender)));try{let t=await fetchJson(`https://latam-api.vercel.app/api/facebookdl?apikey=${MyApiKey}&q=${l[0]}`);a.sendMessage(e.chat,{video:{url:t.video},fileName:"fbsd.mp4",mimetype:"video/mp4"},{quoted:e}).catch(a=>{e.reply(MultiNK.Error1())})}catch(n){e.reply(MultiNK.Error0())}};handler.help=["fbdl <link>"],handler.tags=["servicio"],handler.command=/^(fbdl)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/