/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

export const growth=Math.pow(Math.PI/Math.E,1.618)*Math.E*.75;export function xpRange(t,e=global.multiplier||1){if(t<0)throw new TypeError("\n[!] El nivel no puede ser un valor negativo -.-\n");let r=0===(t=Math.floor(t))?0:Math.round(Math.pow(t,growth)*e)+1,n=Math.round(Math.pow(++t,growth)*e);return{min:r,max:n,xp:n-r}}export function findLevel(t,e=global.multiplier||1){if(t===1/0)return 1/0;if(isNaN(t))return NaN;if(t<=0)return-1;let r=0;do{r++}while(xpRange(r,e).min<=t);return--r}export function canLevelUp(t,e,r=global.multiplier||1){return!(t<0)&&(e===1/0||!isNaN(e)&&(!(e<=0)&&t<findLevel(e,r)))}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/