/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:t,command:a,text:o})=>{if(!e.quoted&&!o)return e.reply(`Envie o responda un texto, ejemplo de uso:

${Prefijo+a} lenguaje inclusivo
`);try{var r,n=a[1].toLowerCase();await t.sendMessage(e.chat,{text:(e.quoted?e.quoted.text:o).replace(/[aiueo]/g,n).replace(/[AIUEO]/g,n.toUpperCase())},{quoted:e}),reacMoji(e.chat,t,"\uD83D\uDC85",e)}catch(l){e.reply(MultiNK.Error1())}};handler.help=["taxta | texte | tixti | toxto | tuxtu"],handler.tags=["conversor"],handler.command=/^(taxta|texte|tixti|toxto|tuxtu)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/