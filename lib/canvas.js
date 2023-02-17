/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{spawn as t}from"child_process";import{join as e}from"path";let __dirname=global.__dirname(import.meta.url);export function levelup(n,i){return new Promise(async(o,p)=>{if(!(global.support.convert||global.support.magick||global.support.gm))return p("\n[!] No soportado!\n");let a=e(__dirname,"../multimedia/font"),r=e(a,"./level_c.otf"),l=e(a,"./texts.otf"),$=e(a,"./futur.ttf"),s=e(__dirname,"../multimedia/imagenes/lvlup_template.jpg"),m="+1420+245";i>2&&(m="+1415+245"),i>9&&(m="+1380+245"),i>19&&(m="+1370+245"),i>99&&(m="+1335+245");let[f,..._]=[...global.support.gm?["gm"]:global.support.magick?["magick"]:[],"convert",s,"-font",l,"-fill","#000000","-size","1024x784","-pointsize","68.5","-interline-spacing","-1.5","-annotate","+110+70",n,"-font",l,"-fill","#00f3a3","-size","1024x784","-pointsize","68","-interline-spacing","-7.5","-annotate","+110+70",n,"-font",r,"-fill","#00c3ff","-size","1024x784","-pointsize","100","-interline-spacing","-1.2","-annotate",m,i,"-font",$,"-fill","#c9d0db","-size","1024x784","-pointsize","30","-interline-spacing","-2.5","-annotate","+110+380",NombreDelBot,"-append","jpg:-"],c=[];t(f,_).on("error",p).on("close",()=>o(Buffer.concat(c))).stdout.on("data",t=>c.push(t))})}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/