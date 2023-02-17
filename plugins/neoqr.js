/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{exec as e}from"child_process";let handler=async(n,{conn:r,args:a,command:o})=>{"continuar"===a[0]?(e("bash neoqr.sh",(e,r)=>{if(e)return n.reply(String(e));r&&n.reply("_Archivo eliminado..._"),n.reply(`
_La sesi\xf3n actual del bot fue eliminada correctamente, ahora podras generar un nuevo c\xf3digo QR desde la consola para escanear._
`)}),reacMoji(n.chat,r,"♻️",n)):a[0]||n.reply(`
_Desea generar un nuevo c\xf3digo QR?, para generar un nuevo c\xf3digo QR use el comando_

${Prefijo+o} continuar
`)};handler.help=["neoqr"],handler.tags=["propietario"],handler.command=/^(neoqr|newqr|nuevoqr)$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/