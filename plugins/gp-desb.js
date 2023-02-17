/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"../lib/database.js";let handler=async e=>{a.data.chats[e.chat].isBanned=!1,e.reply("Chat desbaneado correctamente ✓")};handler.help=["unbanchat"],handler.tags=["propietario"],handler.command=/^unbanchat$/i,handler.owner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/