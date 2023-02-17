/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

console.log("Ejecutando el Bot mas shidori tercer mundista.\nComenzando ejecucion del script...");import{join as e,dirname as r}from"path";import{createRequire as i}from"module";import{fileURLToPath as t}from"url";import{setupMaster as n,fork as o}from"cluster";import{watchFile as s,unwatchFile as a}from"fs";import l from"cfonts";import{createInterface as m}from"readline";import c from"./lib/helper.js";import p from"chalk";let __dirname=r(t(import.meta.url)),require=i(__dirname),{name:d,author:g}=require(e(__dirname,"./package.json")),{say:u}=l,rl=m(process.stdin,process.stdout);u(`${d}|MD`,{font:"pallet",color:"candy",align:"center",gradient:["red","blue"]}),u("UwU",{font:"simple3d",color:"candy",align:"center",gradient:["red","magenta"],lineHeight:3});var isRunning=!1;function start(r){if(isRunning)return;isRunning=!0;let i=[e(__dirname,r),...process.argv.slice(2)];n({exec:i[0],args:i.slice(1)});let t=o();t.on("message",e=>{switch(console.log("\n[_>] ",e+"\n"),e){case"reset":t.process.kill(),isRunning=!1,start.apply(this,arguments);break;case"uptime":t.send(process.uptime())}}),t.on("exit",(e,n)=>{isRunning=!1,console.error(p.bgRed("\n\n[!] Sali\xf3 del c\xf3digo : "),p.bgWhite(n+"\n")),t.process.kill(),isRunning=!1,start.apply(this,arguments),0!==n&&s(i[0],()=>{a(i[0]),start(r)})}),c.opts.test||rl.listenerCount()||rl.on("line",e=>{t.emit("message",e.trim())})}start("main.js");

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/