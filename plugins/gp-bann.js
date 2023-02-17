/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"../lib/database.js";let handler=async e=>{a.data.chats[e.chat].isBanned=!0,e.reply("Chat baneado correctamente ✓")};handler.help=["banchat"],handler.tags=["propietario"],handler.command=/^(banchat|chatban)$/i,handler.owner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/