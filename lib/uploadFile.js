/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";import{FormData,Blob}from"formdata-node";import{fileTypeFromBuffer}from"file-type";const fileIO=async t=>{const{ext:e,mime:r}=await fileTypeFromBuffer(t)||{};let o=new FormData;const a=new Blob([t.toArrayBuffer()],{type:r});o.append("file",a,"tmp."+e);let f=await fetch("https://file.io/?expires=1d",{method:"POST",body:o}),i=await f.json();if(!i.success)throw i;return i.link},RESTfulAPI=async t=>{let e=new FormData,r=t;Array.isArray(t)||(r=[t]);for(let t of r){const r=new Blob([t.toArrayBuffer()]);e.append("file",r)}let o=await fetch("https://storage.restfulapi.my.id/upload",{method:"POST",body:e}),a=await o.text();try{return a=JSON.parse(a),Array.isArray(t)?a.files.map((t=>t.url)):a.files[0].url}catch(t){throw a}};export default async function(t){let e=!1;for(let r of[RESTfulAPI,fileIO])try{return await r(t)}catch(t){e=t}if(e)throw e}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/