/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let defaultLang=MultiNK.Lengua(),handler=async(e,{args:a,command:t})=>{if(!a||!a[0])return e.reply(`Envie o responda un texto con el comando ${Prefijo+t} <idioma> [texto], ejemplo:

${Prefijo+t} es Hello World
`);let r=a[0],l=a.slice(1).join(" ");2!==(a[0]||"").length&&(r=defaultLang,l=a.join(" ")),!l&&e.quoted&&e.quoted.text&&(l=e.quoted.text);try{var n=await fetchJson(`https://latam-api.vercel.app/api/traductor?apikey=${MyApiKey}&idioma1=${r||defaultLang}&texto1=${l||"-"}`);e.reply(n.traducido)}catch(o){e.reply(MultiNK.Error0())}};handler.help=["traducir"].map(e=>e+" <idioma> [texto]"),handler.tags=["herramienta"],handler.command=/^(traducir|tr|translate)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/