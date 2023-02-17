/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";import{promises as t}from"fs";import{join as i}from"path";import{xpRange as o}from"../lib/levelling.js";let handler=async(a,{conn:n,__dirname:r,command:l,isPrems:s})=>{let m=JSON.parse(await t.readFile(i(r,"../package.json")).catch(e=>({})))||{},d=Object.keys(e.data.users).length,u=Object.values(e.data.users).filter(e=>!0==e.registered).length,{exp:c,level:p,role:w}=e.data.users[a.sender],{min:h,xp:b,max:f}=o(p,global.multiplier),g=await n.getName(a.sender),I=s?"Si":"No",M;await n.sendMessage(a.chat,{text:`║❂ Cliente: ${g}
║❂ Premium: ${I}
║❂ Limite restante: ${s?"∞":e.data.users[a.sender].limit}
║❂ Nivel: ${p} (${c} / ${b})
║❂ Rol: ${w}
║❂ XP: ${c}
╚══════════`,footer:`┏⊱ ${NombreDelBot}
┗━⊱ ${MultiNK.Habla()} ✓`,title:`╔I [ \`\`\`${m.name}\`\`\` ]
║❂ Base de datos: ${u} a ${d}
║❂ Tiempo activo: ${timeString(process.uptime())}
║❂ Version del bot: ${m.version}
║❂ Due\xf1o del bot: ${m.author.name}
║❂ Prefijo \xfanico: 「 ${Prefijo} 」
`,buttonText:"Seleccione un menu ✓ ",sections:[{title:"Menu-Simple \uD83C\uDF0C",rows:[{title:"Funciones-b\xe1sicas",description:"~ᴸᶦˢᵗᵃ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ˢᶦᵐᵖˡᵉˢ~",rowId:`${Prefijo}menusimple`}]},{title:"Menu-Internet \uD83C\uDF10",rows:[{title:"Random-Menu",description:"~ᴸᶦˢᵗᵃ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ᵛᵃʳᶦᵃᵈᵒˢ~",rowId:`${Prefijo}randmenu`}]},{title:"Menu-Art\xedstico \uD83C\uDFA8",rows:[{title:"Crear-Logos",description:"~ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᶜʳᵉᵃʳ ˡᵒᵍᵒˢ ʸ ᵐᵃˢ~",rowId:`${Prefijo}logofabrica`},]},{title:"Menu-Otaku/Anime \uD83C\uDC04",rows:[{title:"Random-Anime",description:"~ᶜᵒᵐᵃⁿᵈᵒˢ ᵒᵗᵃᵏᵘ⁻ᵃⁿᶦᵐᵉ ᵛᵃʳᶦᵃᵈᵒ~",rowId:`${Prefijo}mianime`},]},{title:"Menu-Hentai/Anime \uD83E\uDD75",rows:[{title:"La-Biblia",description:"~ᶜᵒᵐᵃⁿᵈᵒˢ ʰᵉⁿᵗᵃᶦ⁻ᶜᵃʳᵗᵒᵒⁿ ⁺\xb9⁸~",rowId:`${Prefijo}labiblia`},]},{title:"Menu-Completo ♻️",rows:[{title:"Principal",description:"~ᴸᶦˢᵗᵃ ᶜᵒᵐᵖˡᵉᵗᵃ ᵈᵉ ᵗᵒᵈᵒˢ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ~",rowId:`${Prefijo}menucompleto`}]}]},{quoted:a}),reacMoji(a.chat,n,"\uD83D\uDCC3",a)};handler.help=["menu"],handler.command=/^(menu|comandos|menú|help)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/