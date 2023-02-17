/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";let handler=async(a,{conn:t})=>{let n=await t.getName(a.sender),r=["https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1","https://vm.tiktok.com/ZMLjP4RBS/","https://fb.watch/b7LOc9_LU2/","https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA"],l=a.reply(MultiNK.Proces(n));await l;try{let o=await fetchJson(`https://latam-api.vercel.app/api/rand_img?apikey=${MyApiKey}`);t.sendMessage(a.chat,{image:{url:o.randimg},jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg"),caption:`💾`,contextInfo:{externalAdReply:{body:`${NombreDelBot} 🔥`,thumbnail:e.readFileSync("./multimedia/imagenes/mylogo.jpg"),sourceUrl:r[Math.floor(Math.random()*r.length)]}}},{quoted:a})}catch(i){a.reply(MultiNK.Error0())}};handler.help=["randimg"],handler.tags=["random"],handler.command=/^(randimg)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/