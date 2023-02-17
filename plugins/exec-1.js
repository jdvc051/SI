/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import r from"syntax-error";import{format as e}from"util";import{fileURLToPath as t}from"url";import{dirname as o}from"path";import{createRequire as n}from"module";import a from"../lib/database.js";import l from"../lib/connection.js";let __dirname=o(t(import.meta.url)),require=n(__dirname),handler=async(t,o)=>{let{conn:n,usedPrefix:i,noPrefix:u,args:m,groupMetadata:s}=o,c,p="",d=(/^=/.test(i)?"return ":"")+u,h=1*t.exp;try{let f=15,y={exports:{}};c=await new(async()=>{}).constructor("print","m","handler","require","conn","db","store","connection","Array","process","args","groupMetadata","module","exports","argument",d).call(n,(...r)=>{if(!(--f<1))return console.log(...r),n.reply(t.chat,e(...r),t)},t,handler,require,n,a,l.store,l,CustomArray,process,m,s,y,y.exports,[n,o])}catch(x){let $=r(d,"Execution Function",{allowReturnOutsideFunction:!0,allowAwaitOutsideFunction:!0,sourceType:"module"});$&&(p="```"+$+"```\n\n"),c=x}finally{n.reply(t.chat,p+e(c),t),t.exp=h}};handler.help=["> ","=> "],handler.tags=["avanzado"],handler.customPrefix=/^=?> /,handler.command=/(?:)/i,handler.owner=!0;export default handler;class CustomArray extends Array{constructor(...r){if("number"==typeof r[0])return super(Math.min(r[0],1e4));return super(...r)}}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/