/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

function handler(e,{text:n,args:r}){if(!r[0])return e.reply("Use un nombre o apodo");e.reply(`
☯️ Nombre ninja para _${n}_ es: *`+n.replace(/[a-z]/gi,e=>({a:"ka",b:"tu",c:"mi",d:"te",e:"ku",f:"lu",g:"ji",h:"ri",i:"ki",j:"zu",k:"me",l:"ta",m:"rin",n:"to",o:"mo",p:"no",q:"ke",r:"shi",s:"ari",t:"ci",u:"do",v:"ru",w:"mei",x:"na",y:"fu",z:"zi"})[e.toLowerCase()]||e)+"*\n")}handler.help=["nombreninja <nombre>"],handler.tags=["games"],handler.command=/^(nombreninja)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/