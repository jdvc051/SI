/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:r,isAdmin:a,isOwner:t})=>{if(e.isGroup&&!(a||t))return dfail("admin",e,r);let n=e.chat;if(r.vote=r.vote?r.vote:{},!(n in r.vote))return e.reply(":v");delete r.vote[n],e.reply("Votacion reiniciada correctamente ✓")};handler.help=["reiniciarvotos"],handler.tags=["admins","grupos"],handler.command=/^reiniciarvotos$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/