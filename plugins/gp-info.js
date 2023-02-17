/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:e,participants:i,groupMetadata:n})=>{let t=await e.profilePictureUrl(a.chat,"image").catch(a=>null)||"./multimedia/imagenes/avatar_contact.png",r=i.filter(a=>a.admin),l=r.map((a,e)=>`${e+1}. _@${a.id.split("@")[0]}_`).join("\n"),d=n.owner||r.find(a=>"superadmin"===a.admin)?.id||a.chat.split`-`[0]+"@s.whatsapp.net",p,o=`
*Nombre del grupo* : ${n.subject}
*Creado por* : _${d.split("@")[0],"@"+d.split("@")[0]}_
*Fecha de creaci\xf3n* : _${formatDate(1e3*n.creation)}_
*Total de participantes* : _${i.length}_
*Total de administradores* : _${i.filter(a=>"admin"===a.admin).length+i.filter(a=>"superadmin"===a.admin).length}_
${l}
*No administradores* : _${i.filter(a=>null===a.admin).length}_
*ID del grupo* : _${n.id}_
*Descripci\xf3n* : 
${"‎".repeat(850)}
${n.desc?.toString()}
`.trim();e.sendFile(a.chat,t,"pp.jpg",o,a,!1,{mentions:[...r.map(a=>a.id),d]})};handler.help=["gpinfo"],handler.tags=["casual"],handler.command=/^(gpinfo|infogp|groupinfo)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/