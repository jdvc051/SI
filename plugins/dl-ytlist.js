/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(t,{conn:e,args:i})=>{if(!i[0]||!isUrl(i[0])&&!i[0].includes("youtube.com"))return;await e.getName(t.sender);let r=[{title:"⏺️ - ⏮️ ⏸️ ⏭️ - \uD83D\uDD00",rows:[{title:"*[ > ] Descargar Audio*",description:"_Opci\xf3n 1_",rowId:`${Prefijo}ytmp3 ${i[0]}`},{title:"*[ > ] Descargar Audio*",description:"_Opci\xf3n 2_",rowId:`${Prefijo}yta ${i[0]}`},{title:"*[ > ] Descargar Audio*",description:"_Opci\xf3n 3_",rowId:`${Prefijo}ytabochi ${i[0]}`}]},{title:"\uD83C\uDFA6 - ⏮️ ⏸️ ⏭️ - \uD83D\uDD00",rows:[{title:"*[ > ] Descargar Video*",description:"_Opci\xf3n 1_",rowId:`${Prefijo}ytmp4 ${i[0]}`},{title:"*[ > ] Descargar Video*",description:"_Opci\xf3n 2_",rowId:`${Prefijo}ytv ${i[0]}`},{title:"*[ > ] Descargar Video*",description:"_Opci\xf3n 3_",rowId:`${Prefijo}ytvbochi ${i[0]}`}]}];try{await e.sendMessage(t.chat,{text:`┗━━━━━━━━━━━━━━━━━━`,footer:"\n"+NombreDelBot,title:`┏━━━━━━━━━━━━━━━━━━
${i[0]}`,buttonText:" Seleccione una opci\xf3n ",sections:r},{quoted:t})}catch(o){t.reply(MultiNK.Error0())}};handler.tags=["servicio"],handler.command=/^(listytdl)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/