/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"fs";import r,{dirname as o}from"path";import i from"assert";import{spawn as l}from"child_process";import f from"syntax-error";import{fileURLToPath as t}from"url";import{createRequire as n}from"module";import m from"chalk";let __filename=t(import.meta.url),__dirname=o(__filename),require=n(__dirname),folders=[".",...Object.keys(require(r.join(__dirname,"./package.json")).directories)],files=[];for(let folder of folders)for(let file of e.readdirSync(folder).filter(e=>e.endsWith(".js")))files.push(r.resolve(r.join(folder,file)));for(let file of files){if(file==__filename)continue;console.error(m.red("[!] Analizando",file));let s=f(e.readFileSync(file,"utf8"),file,{sourceType:"module",allowReturnOutsideFunction:!0,allowAwaitOutsideFunction:!0});s&&i.ok(s.length<1,file+"\n\n"+s),i.ok(file),console.log(m.green("[✓] Hecho",file,"\n"))}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/