/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"node-gtts";import{readFileSync as a,unlinkSync as n}from"fs";import{join as o}from"path";let defaultLang=MultiNK.Lengua(),handler=async(e,{conn:a,args:n,command:o,text:t})=>{if(t.length>600)return e.reply("Maximo de caracteres 600");let i=n[0],s=n.slice(1).join(" ");if(2!==(n[0]||"").length&&(i=defaultLang,s=n.join(" ")),!s&&e.quoted?.text&&(s=e.quoted.text),!s)return a.sendButton(e.chat,`*[ ! ] Por favor, despues de usar el comando ${o}, tiene que agregarle el prefijo del idioma en el cual desea escuchar el audio* 
`,`Ejemplo de uso:

${Prefijo+o} es hola

-> "es" = prefijo espa\xf1ol
--> "hola" = texto
`,NombreDelBot,[`*[ idiomas disponibles ]* :${"‎".repeat(850)}
\`\`\`
  'af': 'Africano',
  'sq': 'Albanes',
  'ar': 'Arabico',
  'hy': 'Armenio',
  'ca': 'Catalan',
  'zh': 'Chino',
  'zh-cn': 'Chino (Mandarin/China)',
  'zh-tw': 'Chino (Mandarin/Taiwanes)',
  'zh-yue': 'Chino (Cantones)',
  'hr': 'Croata',
  'cs': 'Checo',
  'da': 'Danes',
  'nl': 'Holandes',
  'en': 'Ingles',
  'en-au': 'Ingles (Australia)',
  'en-uk': 'Ingles (Reino unido)',
  'en-us': 'Ingles (Estados unidos)',
  'eo': 'Esperanto',
  'fi': 'Finlandes',
  'fr': 'Frances',
  'de': 'Aleman',
  'el': 'Griego',
  'ht': 'Criollo haitiano',
  'hi': 'Hindio',
  'hu': 'Hungaro',
  'is': 'islandes',
  'id': 'Indonesio',
  'it': 'Italiano',
  'ja': 'Japones',
  'ko': 'Koreano',
  'la': 'Latino',
  'lv': 'Leton',
  'mk': 'Macedonio',
  'no': 'Noruego',
  'pl': 'Polaco',
  'pt': 'Portugues',
  'pt-br': 'Portugues (Brazil)',
  'ro': 'Rumano',
  'ru': 'Ruso',
  'sr': 'Serbio',
  'sk': 'Slovaco',
  'es': 'Espa\xf1ol',
  'es-es': 'Espa\xf1ol (Espa\xf1a)',
  'es-us': 'Espa\xf1ol (Estados Unidos)',
  'sw': 'Swahili',
  'sv': 'Sueco',
  'ta': 'Tamil',
  'th': 'Tailandes',
  'tr': 'Turco',
  'vi': 'Vietnamita',
  'cy': 'Gales'
\`\`\``,"</bromita>"],e);let l;try{l=await tts(s,i)}catch(r){e.reply(MultiNK.Error0()),l=await tts(s=n.join(" "),defaultLang)}finally{l&&a.sendFile(e.chat,l,"audiotxt.opus",null,e,!0)}};handler.help=["voz <lenguaje> <texto>"],handler.tags=["herramienta"],handler.command=/^(voz|gtts|tts|vos)$/i,handler.limit=!0;export default handler;function tts(t,i=defaultLang){return new Promise((s,l)=>{try{let r=e(i),d=o(global.__dirname(import.meta.url),"../tmp",1*new Date+".wav");r.save(d,t,()=>{s(a(d)),n(d)})}catch(u){l(u)}})}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/