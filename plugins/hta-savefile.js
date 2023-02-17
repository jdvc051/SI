/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"fs";import t from"syntax-error";import o from"path";import r from"util";let _fs=e.promises,handler=async(e,{text:a,command:i,__dirname:l})=>{if(!a)throw`
*Con que nombre desea guardar el archivo?*
_Ejemplo de uso_ : 

${Prefijo+i} test-plugin.js n`.trim();if(!e.quoted)return e.reply("[_>] Responda un mensaje que contenga una sintaxis correcta...");if(/p(lugin)?/i.test(i)){let n=a.replace(/plugin(s)\//i,"")+(/\.js$/i.test(a)?"":".js"),u=t(e.quoted.text,n,{sourceType:"module",allowReturnOutsideFunction:!0,allowAwaitOutsideFunction:!0});if(u)throw u;let s=o.join(l,n);await _fs.writeFile(s,e.quoted.text),e.reply(`
El archivo *${n}* fue guardado correctamente ✓

\`\`\`
${r.format(e.quoted.text)}
\`\`\`
`.trim())}else{let d=e.quoted.text&&!e.quoted.mediaMessage&&/\.js/.test(a);if(d){let m=t(e.quoted.text,a,{sourceType:"module",allowReturnOutsideFunction:!0,allowAwaitOutsideFunction:!0});if(m)throw m;await _fs.writeFile(a,e.quoted.text),e.reply(`
El archivo *${a}* fue guardado correctamente ✓

\`\`\`
${r.format(e.quoted.text)}
\`\`\`
`.trim())}else if(e.quoted.mediaMessage){let p=await e.quoted.download();await _fs.writeFile(a,p),e.reply(`
Medios guardados con \xe9xito en *${a}*
`.trim())}else throw"Not soportado!!!"}};handler.help=["saveplugin <nombre de archivo>"],handler.tags=["propietario","herramienta"],handler.command=/^(saveplugin)$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/