/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{mediafiredl as e}from"@bochilteam/scraper";let handler=async(r,{conn:i,args:a,command:l})=>{if(!a[0])return r.reply("*[ ! ] Y el Link?*");if(!isUrl(a[0])&&!a[0].includes("https://www.mediafire.com/"))return r.reply("*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_");try{let n=await e(a[0]),{url:t,url2:d,filename:m,ext:o,aploud:p,filesize:c,filesizeH:h}=n,s=`
*Nombre:* ${m}
*Tama\xf1o:* ${h}
*Extensi\xf3n:* ${o}
*Fecha de subida:* ${p}
${"*Tipo de archivo :* "+n.filetype}
${"*Url :* "+d}
`.trim();if(r.reply(s),c>5e4)return r.reply(MultiNK.Error1());await i.sendFile(r.chat,t,m,"",r,null,{mimetype:o,asDocument:!0})}catch($){r.reply(MultiNK.Error0())}};handler.help=["mediafire"].map(e=>e+" <link>"),handler.tags=["servicio"],handler.command=/^(mediafire)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/