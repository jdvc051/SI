/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";import{FormData,Blob}from"formdata-node";import{fileTypeFromBuffer}from"file-type";export default async e=>{const{ext:t,mime:r}=await fileTypeFromBuffer(e);let o=new FormData;const a=new Blob([e.toArrayBuffer()],{type:r});o.append("file",a,"tmp."+t);let f=await fetch("https://telegra.ph/upload",{method:"POST",body:o}),p=await f.json();if(p.error)throw p.error;return"https://telegra.ph"+p[0].src};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/