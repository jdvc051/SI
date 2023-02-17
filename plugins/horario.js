/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"moment-timezone";let handler=async(m,{conn:t})=>{let r=a().tz("America/Lima").format("DD/MM HH:mm"),e=a().tz("America/Mexico_City").format("DD/MM HH:mm"),o=a().tz("America/La_Paz").format("DD/MM HH:mm"),i=a().tz("America/Santiago").format("DD/MM HH:mm"),M=a().tz("America/Argentina/Buenos_Aires").format("DD/MM HH:mm"),H=a().tz("America/Bogota").format("DD/MM HH:mm"),D=a().tz("America/Guayaquil").format("DD/MM HH:mm"),c=a().tz("America/Costa_Rica").format("DD/MM HH:mm"),n=a().tz("America/Havana").format("DD/MM HH:mm"),A=a().tz("America/Guatemala").format("DD/MM HH:mm"),l=a().tz("America/Tegucigalpa").format("DD/MM HH:mm"),f=a().tz("America/Managua").format("DD/MM HH:mm"),z=a().tz("America/Panama").format("DD/MM HH:mm"),s=a().tz("America/Montevideo").format("DD/MM HH:mm"),u=a().tz("America/Caracas").format("DD/MM HH:mm"),d=a().tz("America/Asuncion").format("DD/MM HH:mm"),g=a().tz("America/New_York").format("DD/MM HH:mm"),h=a().tz("Asia/Jakarta").format("DD/MM HH:mm"),p=a().tz("America/Sao_Paulo").format("DD/MM HH:mm"),C=a().tz("Africa/Malabo").format("DD/MM HH:mm");await t.sendMessage(m.chat,{text:`\`\`\`
「 ZONA-HORARIA 🌎 」

⌚Peru       : ${r}
⌚Mexico     : ${e}
⌚Bolivia    : ${o}
⌚Chile      : ${i}
⌚Argentina  : ${M}
⌚Colombia   : ${H}
⌚Ecuador    : ${D}
⌚Costa_Rica : ${c}
⌚Cuba       : ${n}
⌚Guatemala  : ${A}
⌚Honduras   : ${l}
⌚Nicaragua  : ${f}
⌚Panama     : ${z}
⌚Uruguay    : ${s}
⌚Venezuela  : ${u}
⌚Paraguay   : ${d}
⌚New York   : ${g}
⌚Asia       : ${h}
⌚Brasil     : ${p}
⌚G.N.Q      : ${C}
\`\`\`
${"‎".repeat(850)}
Zona horaria del servidor actual:
[ ${Intl.DateTimeFormat().resolvedOptions().timeZone} ]
${a().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("DD/MM/YY HH:mm:ss")}`},{quoted:m}),reacMoji(m.chat,t,"\uD83D\uDCC6",m)};handler.help=["horario"],handler.tags=["casual"],handler.command=/^(horario)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/