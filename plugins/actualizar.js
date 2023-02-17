/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{execSync as a}from"child_process";let handler=async r=>{var t=a("git remote set-url origin https://gitlab.com/NeKosmic/nk-bot-md.git && git pull");r.reply(t.toString())};handler.help=["actualizarbot"],handler.tags=["propietario"],handler.command=/^(actualizarbot|actualizar|update)$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/