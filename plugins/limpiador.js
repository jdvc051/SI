/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{tmpdir as r}from"os";import e,{join as a}from"path";import{readdirSync as t,statSync as o,unlinkSync as p,existsSync as l,readFileSync as m,watch as h}from"fs";let handler=async(e,{conn:l,usedPrefix:m,__dirname:h,args:d})=>{l.reply(e.chat,"Carpeta de archivos temporales fue limpiado correctamente ✓",e);let n=[r(),a(h,"../tmp")],c=[];return n.forEach(r=>t(r).forEach(e=>c.push(a(r,e)))),c.map(r=>{o(r),p(r)})};handler.help=["cleartmp"],handler.tags=["propietario"],handler.command=/^(cleartmp)$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/