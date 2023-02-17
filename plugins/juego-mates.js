/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:n,args:o,command:t})=>{n.math=n.math?n.math:{};let a=Object.keys(modes).map(e=>[e,`${Prefijo}${t} ${e}`]);if(o.length<1)return e.reply(`*Modos disponibles* : 
_${Object.keys(modes).join("_\n_")}_
*Ejemplo de uso* : 

${Prefijo+t} kinder
  `);let $=o[0].toLowerCase();if(!($ in modes))return e.reply(`*[ ! ] Por favor use un modo valido*
*Modos disponibles* : 
_${Object.keys(modes).join("_\n_")}_
*Ejemplo de uso* : 

${Prefijo+t} kinder
  `);let r=e.chat;if(r in n.math)return n.reply(e.chat,"[ ! ] Todav\xeda hay preguntas sin respuesta en este chat.",n.math[r][0]);let s=genMath($);n.math[r]=[await n.reply(e.chat,`\xbfCu\xe1l es el resultado de *${s.str}*?

Tiempo disponible: ${(s.time/1e3).toFixed(2)} segundos
Recompensa por respuesta correcta: ${s.bonus} XP`,e),s,4,setTimeout(()=>{n.math[r]&&n.sendButton(e.chat,`\xa1Se acab\xf3 el tiempo!
La respuesta es ${s.result}`,NombreDelBot,null,[["SIGUIENTE",`${Prefijo+t} ${s.mode}`],...a],n.math[r][0]),delete n.math[r]},s.time)]};handler.help=["mates <modo>"],handler.tags=["games"],handler.command=/^mates/i,handler.group=!0,handler.limit=!0;let modes={kinder:[-3,3,-3,3,"+-",1e4,10],escuela:[-10,10,-10,10,"*/+-",15e4,40],colegio:[-40,40,-20,20,"*/+-",25e3,150],universidad:[-100,100,-70,70,"*/+-",4e4,350],maestro:[-999999,999999,-999999,999999,"*/",6e4,9999],imposible:[-99999999999,99999999999,-99999999999,999999999999,"*/",3e4,35e3],wtf:[-999999999999999,999999999999999,-999,999,"/",25e3,5e4]},operators={"+":"+","-":"-","*":"\xd7","/":"\xf7"};function genMath(e){let[n,o,t,a,$,r,s]=modes[e],d=randomInt(n,o),l=randomInt(t,a),m=pickRandom([...$]),i=Function(`return ${d} ${m.replace("/","*")} ${l<0?`(${l})`:l}`)();return"/"==m&&([d,i]=[i,d]),{str:`${d} ${operators[m]} ${l}`,mode:e,time:r,bonus:s,result:i}}function randomInt(e,n){return e>n&&([e,n]=[n,e]),e=Math.floor(e),Math.floor(((n=Math.floor(n))-e)*Math.random()+e)}handler.modes=modes;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/