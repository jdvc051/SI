/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";import n from"performance-now";import*as o from"fs";let handler=async(a,{conn:d,command:i})=>{let{limit:t,banned:g}=e.data.users[a.sender];if(g||t<1)return;let l=n(),r=n()-l;"wlcrebotepin"==i?(d.sendMessage(a.chat,{text:pickRandom(["Pierde la partida*\nFong \uD83C\uDFD3","\uD83C\uDFD3 Pong!!! \uD83C\uDFD3","\uD83C\uDFD3 Pong!!! \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Responde con un golpe a 160 kmh*\nPong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Le da un golpe en la cabeza*\nPong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Le rompe el craneo*\nPong!!!\uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Le gana la partida*\n\uD83C\uDFD3 Pong!!! \uD83C\uDFD3","Lo mata*\nPong!!! \uD83C\uDFD3\uD83C\uDFD3\uD83C\uDFD3"])+`

Velocidad de respuesta : ${r.toFixed(4)}MS Milisegundos
`},{quoted:a}),a.limit=10):"wlcadiosdsp"==i&&(d.sendMessage(a.chat,{audio:o.readFileSync("./multimedia/sonidos/adiu.m4a"),fileName:"c_va_alv.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:a}),a.limit=5)};handler.command=/^(wlcrebotepin|wlcadiosdsp)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/