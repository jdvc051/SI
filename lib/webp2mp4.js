/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";import{FormData,Blob}from"formdata-node";import{JSDOM}from"jsdom";async function webp2mp4(e){let t=new FormData,o="string"==typeof e&&/https?:\/\//.test(e);const n=!o&&new Blob([e.toArrayBuffer()]);t.append("new-image-url",o?n:""),t.append("new-image",o?"":n,"image.webp");let a=await fetch("https://s6.ezgif.com/webp-to-mp4",{method:"POST",body:t}),p=await a.text(),{document:r}=new JSDOM(p).window,m=new FormData,w={};for(let e of r.querySelectorAll("form input[name]"))w[e.name]=e.value,m.append(e.name,e.value);let i=await fetch("https://ezgif.com/webp-to-mp4/"+w.file,{method:"POST",body:m}),f=await i.text(),{document:l}=new JSDOM(f).window;return new URL(l.querySelector("div#output > p.outfile > video > source").src,i.url).toString()}async function webp2png(e){let t=new FormData,o="string"==typeof e&&/https?:\/\//.test(e);const n=!o&&new Blob([e.toArrayBuffer()]);t.append("new-image-url",o?n:""),t.append("new-image",o?"":n,"image.webp");let a=await fetch("https://s6.ezgif.com/webp-to-png",{method:"POST",body:t}),p=await a.text(),{document:r}=new JSDOM(p).window,m=new FormData,w={};for(let e of r.querySelectorAll("form input[name]"))w[e.name]=e.value,m.append(e.name,e.value);let i=await fetch("https://ezgif.com/webp-to-png/"+w.file,{method:"POST",body:m}),f=await i.text(),{document:l}=new JSDOM(f).window;return new URL(l.querySelector("div#output > p.outfile > img").src,i.url).toString()}export{webp2mp4,webp2png};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/