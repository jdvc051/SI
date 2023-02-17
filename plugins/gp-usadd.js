/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"node-fetch";let{getBinaryNodeChild:t,getBinaryNodeChildren:e}=(await import("@adiwajshing/baileys")).default,handler=async(r,{conn:n,text:l,participants:i})=>{let p=i.map(a=>a.id),d=(await Promise.all(l.split(",").map(a=>a.replace(/[^0-9]/g,"")).filter(a=>a.length>4&&a.length<20&&!p.includes(a+"@s.whatsapp.net")).map(async a=>[a,await n.onWhatsApp(a+"@s.whatsapp.net")]))).filter(a=>a[1][0]?.exists).map(a=>a[0]+"@c.us"),o=await n.query({tag:"iq",attrs:{type:"set",xmlns:"w:g2",to:r.chat},content:d.map(a=>({tag:"add",attrs:{},content:[{tag:"participant",attrs:{jid:a}}]}))}),s=await n.profilePictureUrl(r.chat).catch(a=>null);s?await (await a(s)).buffer():Buffer.alloc(0);let c=t(o,"add"),h=e(c,"participant");for(let m of h.filter(a=>403==a.attrs.error)){let u=m.attrs.jid,f=t(m,"add_request");f.attrs.code,f.attrs.expiration;let w=`*[ ! ] Error, no se pudo a\xf1adir a @${u.split("@")[0]} al grupo*

_Por favor enviale un enlace de invitaci\xf3n manualmente wa.me/${u.split("@")[0]}_
`;r.reply(w,null,{mentions:n.parseMention(w)})}};handler.help=["add @numero"],handler.tags=["propietario"],handler.command=/^(add)$/i,handler.owner=!0,handler.group=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/