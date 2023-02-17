/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"express";import t from"path";import{createServer as n}from"http";import{Server as i}from"socket.io";import{toBuffer as o}from"qrcode";import p from"node-fetch";import r from"./lib/helper.js";function connect(p,c){let m=global.app=e(),a=global.server=n(m),l="invalid";p.ev.on("connection.update",function e({qr:t}){t&&(l=t)}),m.use(async(e,t)=>{t.setHeader("content-type","image/png"),t.end(await o(l))}),m.use(e.static(t.join(r.__dirname(import.meta.url),"views")));new i(a).on("connection",e=>{let{unpipeEmit:t}=pipeEmit(p,e,"conn-");e.once("disconnect",t)}),a.listen(c,()=>{console.log("Aplicaci\xf3n escuchada en el puerto: ",c),opts.keepalive&&keepAlive()})}function pipeEmit(e,t,n=""){let i=e.emit;return e.emit=function(e,...o){i.emit(e,...o),t.emit(n+e,...o)},{unpipeEmit(){e.emit=i}}}function keepAlive(){let e=`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;/(\/\/|\.)undefined\./.test(e)||setInterval(()=>{p(e).catch(console.error)},3e5)}export default connect;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/