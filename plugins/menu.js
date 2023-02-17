/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";import{promises as t}from"fs";import{join as a}from"path";import{xpRange as r}from"../lib/levelling.js";import{plugins as i}from"../lib/plugins.js";import o from"node-fetch";import*as n from"fs";let tags={conversor:"_CONVERSORES :_",animeuwu:"_ANIME :_",casual:"_CMDS-CASUAL :_",propietario:"_CMDS DUE\xd1O :_",herramienta:"_HERRAMIENTAS :_",premium:"_PREMIUM :_",avanzado:"_AVANZADO :_",admins:"_CMDS ADMINS :_",grupos:"_CMDS GRUPOS :_",fabricar:"_ARTE Y DISE\xd1O :_",busqueda:"_BUSQUEDA :_",servicio:"_SERVICIOS :_",xp:"_XP & LIMITE :_",games:"_RPG, JUEGOS :_",random:"_PASATIEMPO :_",esclabot:"_SER SUB-BOT :_","":"_OTROS :_"},handler=async(m,{conn:l,usedPrefix:p,__dirname:s,command:u,isPrems:d})=>{try{let c=await o("https://pastebin.com/raw/GZ8d1qcT"),g=await l.profilePictureUrl(m.sender,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");var f=await c.json(),h=f.nk_media||g,b=f.nk_txt}catch(y){var h=await l.profilePictureUrl(l.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png"),b=""}let x=m.reply(`_Cargando menu..._ ${b}`);await x;try{let M=JSON.parse(await t.readFile(a(s,"../package.json")).catch(e=>({})))||{},{exp:S,level:O,role:A}=e.data.users[m.sender],P=d?"Si":"No",j=d?"∞":e.data.users[m.sender].limit,{min:v,xp:I,max:R}=r(O,global.multiplier),E=await l.getName(m.sender),T=timeString(process.uptime()),N=Object.keys(e.data.users).length,D=Object.values(e.data.users).filter(e=>!0==e.registered).length,w=Object.values(i).filter(e=>!e.disabled).map(e=>({help:Array.isArray(e.tags)?e.help:[e.help],tags:Array.isArray(e.tags)?e.tags:[e.tags],prefix:"customPrefix"in e,limit:e.limit,premium:e.premium,enabled:!e.disabled}));for(let C of w)if(C&&"tags"in C)for(let U of C.tags)U in tags||!U||(tags[U]=U);l.menu=l.menu?l.menu:{};let k=l.menu.before||defaultMenu.before,B=l.menu.header||defaultMenu.header,L=l.menu.body||defaultMenu.body,_=l.menu.footer||defaultMenu.footer,G=l.menu.after||(l.user.jid==l.user.jid?"":`By https://wa.me/${l.user.jid.split`@`[0]}`)+defaultMenu.after,V=[k,...Object.keys(tags).map(e=>B.replace(/%category/g,tags[e])+"\n"+[...w.filter(t=>t.tags&&t.tags.includes(e)&&t.help).map(e=>e.help.map(t=>L.replace(/%cmd/g,e.prefix?t:"%p"+t).replace(/%islimit/g,e.limit?"(Limitado)":"").replace(/%isPremium/g,e.premium?"(Premium)":"").trim()).join("\n")),_].join("\n")),G].join("\n"),$="string"==typeof l.menu?l.menu:"object"==typeof l.menu?V:"",q={"%":"%",p:p,uptime:T,me:l.getName(l.user.jid),npmname:M.name,npmdesc:M.description,version:M.version,exp:S-v,maxexp:I,totalexp:S,xp4levelup:R-S,prop:global.Propietario,pref:" "+global.Prefijo+" ",github:M.homepage?M.homepage.url||M.homepage:"[ URL de github inv\xe1lido ]",level:O,name:E,totalreg:N,rtotalreg:D,role:A,prem:P,limit:j,readmore:readMore};await l.sendMessage(m.chat,{image:{url:h},caption:($=$.replace(RegExp(`%(${Object.keys(q).sort((e,t)=>t.length-e.length).join`|`})`,"g"),(e,t)=>""+q[t])).trim(),footer:`
┏⊱ ${NombreDelBot}
┗━⊱ ${MultiNK.Habla()} ✓`,buttons:[{buttonId:Prefijo+"apoyo",buttonText:{displayText:"[ APOYO ]"},type:1},{buttonId:Prefijo+"creador",buttonText:{displayText:"[ CREADOR ]"},type:1},{buttonId:Prefijo+"informacion",buttonText:{displayText:"[ INFORMACION ]"},type:1}],headerType:4,contextInfo:{mentionedJid:[m.sender],externalAdReply:{thumbnail:n.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:"https://github.com/NeKosmic/NK-BOT-MD/fork?rgh-fork=true"}}},{quoted:m})}catch(F){throw l.reply(m.chat,"[ ! ] Ocurrio un error en el men\xfa :/ ",m),F}},defaultMenu={before:`

╔I [ \`\`\`%npmname\`\`\` ]
║❂ Base de datos: %rtotalreg a %totalreg
║❂ Tiempo activo: %uptime
║❂ Version del bot: %version
║❂ Due\xf1o del bot: %prop
║❂ Prefijo \xfanico: 「 %pref 」
║❂ Cliente: %name
║❂ Premium: %prem
║❂ Limite restante: %limit
║❂ Nivel: %level (%exp / %maxexp)
║❂ Rol: %role
║❂ XP: %totalexp
╚══════════
%readmore
~|-------------------------|~
*[_>] _COMANDOS_  ☷*
~|-------------------------|~
`.trimStart(),header:`╔「 %category 」
║╭—————————`,body:`║├  %cmd %islimit %isPremium`,footer:`║╰—————————
╚══════════
`,after:""};handler.help=["menucompleto","menuprincipal"],handler.command=/^(menucompleto|menuprincipal)$/i,handler.exp=10;export default handler;let more="‎",readMore="‎".repeat(850);

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/