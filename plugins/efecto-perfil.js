/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:t,command:a,text:i,args:r})=>{let o=e.mentionedJid&&e.mentionedJid[0]?e.mentionedJid[0]:e.fromMe?t.user.jid:e.sender,d=await t.getName(e.sender);if(await e.reply(MultiNK.Proces(d)),"its-so-stupid"==a)var l=`&dog=${i||"I%20am%20stupid%20%3Av"}`;else if("youtube-comment"==a)var l=`&comment=${i||"Sexy%20Who%20Reads%20It%207w7r"}&username=${d}`;else var l="";try{let n=encodeURIComponent(await t.profilePictureUrl(o,"image").catch(e=>"https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg")),s="https://some-random-api.ml/canvas/"+a+"?avatar="+n+l;t.sendMessage(e.chat,{image:{url:s},caption:`*┏━> Efecto de perfil* : _${a}_
*┗> Solicitado por* : _@${o.replace(/@.+/,"")}_`,mentions:[o]},{quoted:e})}catch(m){e.reply(MultiNK.Error0())}};handler.help=["lolice","horny","blur","gay","triggered","simpcard","pixelate","its-so-stupid","youtube-comment"],handler.tags=["fabricar"],handler.command=/^(lolice|horny|blur|gay|triggered|simpcard|pixelate|its-so-stupid|youtube-comment)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/