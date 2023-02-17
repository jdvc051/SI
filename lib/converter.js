/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{createReadStream as e,promises as r,ReadStream as t}from"fs";import{join as o}from"path";import{spawn as a}from"child_process";import{Readable as i}from"stream";import n from"./helper.js";let __dirname=n.__dirname(import.meta.url);function ffmpeg(t,i=[],f="",m=""){return new Promise(async(c,p)=>{try{let l=o(__dirname,`../tmp/${Date.now()}.${f}`),s=`${l}.${m}`,u=n.isReadableStream(t);u?await n.saveStreamToFile(t,l):await r.writeFile(l,t),a("ffmpeg",["-y","-i",l,...i,s]).once("error",p).once("close",async t=>{try{if(await r.unlink(l),0!==t)return p(t);let o=e(s);c({data:o,filename:s,async toBuffer(){let e=[];for await(let r of o)e.push(r);return Buffer.concat(e)},async clear(){o.destroy(),await r.unlink(s)}})}catch(a){p(a)}})}catch(d){p(d)}})}function toPTT(e,r){return ffmpeg(e,["-vn","-c:a","libopus","-b:a","128k","-vbr","on",],r,"ogg")}function toAudio(e,r){return ffmpeg(e,["-vn","-c:a","libopus","-b:a","128k","-vbr","on","-compression_level","10"],r,"opus")}function toVideo(e,r){return ffmpeg(e,["-c:v","libx264","-c:a","aac","-ab","128k","-ar","44100","-crf","32","-preset","slow"],r,"mp4")}export{toAudio,toPTT,toVideo,ffmpeg};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/