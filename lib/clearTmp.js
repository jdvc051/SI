/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import t from"./helper.js";import{promises as a}from"fs";import{tmpdir as e,platform as i}from"os";import{join as r}from"path";let TIME=18e4,__dirname=t.__dirname(import.meta);export default async function l(){let t=[e(),r(__dirname,"../tmp")],l=[];return await Promise.allSettled(t.map(async t=>{let e=await a.readdir(t);for(let i of e)l.push(r(t,i))})),await Promise.allSettled(l.map(async t=>{let e=await a.stat(t);if(e.isFile()&&Date.now()-e.mtimeMs>=18e4){if("win32"===i()){let r;try{r=await a.open(t,"r+")}catch(l){return console.error("[clearTmp]",l,"Skipping",t),l}finally{await r?.close()}}await a.unlink(t)}}))};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/