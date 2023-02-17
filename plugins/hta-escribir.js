/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{format as t}from"util";import{spawn as e}from"child_process";let fontPath="multimedia/font/Zahraaa.ttf",handler=async(n,{conn:a,args:i})=>{if(!global.support.convert&&!global.support.magick&&!global.support.gm)return handler.disabled=!0;let o="multimedia/imagenes/hojita.jpg",r=new Date,s=r.toLocaleDateString(MultiNK.Lengua()),p=r.toLocaleDateString(MultiNK.Lengua(),{weekday:"long"}),l=i.join` `,c=[],[g,...d]=[...global.support.gm?["gm"]:global.support.magick?["magick"]:[],"convert",o,"-font",fontPath,"-size","1024x784","-pointsize","20","-interline-spacing","1","-annotate","+806+78",p,"-font",fontPath,"-size","1024x784","-pointsize","18","-interline-spacing","1","-annotate","+806+102",s,"-font",fontPath,"-size","1024x784","-pointsize","20","-interline-spacing","-7.5","-annotate","+344+142",l,"jpg:-"];e(g,d).on("error",e=>n.reply(t(e))).on("close",()=>{a.sendFile(n.chat,Buffer.concat(c),"nulis.jpg","✍️\uD83D\uDCD6",n)}).stdout.on("data",t=>c.push(t))};handler.help=["escribir <texto>"],handler.tags=["fabricar"],handler.command=/^escribir$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/