/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";import{createHash as r}from"crypto";let handler=async function(d,{args:t}){if(!t[0])return d.reply("Por favor introduzca su c\xf3digo de registro");let o=e.data.users[d.sender],a=r("md5").update(d.sender).digest("hex");if(t[0]!==a)return d.reply("[ ! ] Codigo de registro incorrecto");o.registered=!1,d.reply("[✓] Registro eliminado correctamente \uD83D\uDDD1️")};handler.help=["desreg <c\xf3digo de registro>"],handler.tags=["casual"],handler.command=/^(desreg|unreg)$/i,handler.register=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/