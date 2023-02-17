/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{unlinkSync as e,readFileSync as t}from"fs";import{join as a}from"path";import{exec as o}from"child_process";import*as r from"fs";let handler=async(i,{conn:l,args:m,__dirname:s,command:n})=>{let d=["https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1","https://vm.tiktok.com/ZMLjP4RBS/","https://fb.watch/b7LOc9_LU2/","https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA"];try{let p=i.quoted?i.quoted:i,f=(i.quoted?i.quoted:i.msg).mimetype||"",u;if(/robot/.test(n)&&(u=["-filter_complex \"afftfilt=real=\\'hypot(re,im)*sin(0)\\':imag=\\'hypot(re,im)*cos(0)\\':win_size=512:overlap=0.75\""]),/aumentarbajo/.test(n)&&(u=["-af equalizer=f=34:width_type=o:width=2:g=25"]),/memedist/.test(n)&&(u=["-filter_complex vibrato=f=5"]),/inframundo/.test(n)&&(u=["-filter:a atempo=1.7,asetrate=3486"]),/nightcore/.test(n)&&(u=["-filter:a atempo=1.06,asetrate=44100*1.25"]),/ardilla/.test(n)&&(u=["-filter:a atempo=0.8,asetrate=68100"]),/superveloz/.test(n)&&(u=["-filter:a atempo=2.0,asetrate=55100"]),/demonio/.test(n)&&(u=["-filter:a atempo=1.6,asetrate=22100"]),/lento/.test(n)&&(u=["-filter:a atempo=0.6,asetrate=44100"]),/cursed/.test(n)&&(u=["-filter_complex acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"]),/reversa/.test(n)&&(u=["-filter_complex areverse"]),/ventilador/.test(n)&&(u=["-filter_complex apulsator=mode=sine:hz=3:width=0.1:offset_r=0"]),!/audio/.test(f))return i.reply(`Envie \xf3 Responda un audio/nota de voz, con el comando 

${Prefijo+n}
`);{let c=getRandom(".mp3"),h=a(s,"../tmp/"+c),$=await p.download(!0);o(`ffmpeg -i ${$} ${u[0]} ${h}`,async(a,o,s)=>{if(await e($),a)return i.reply(MultiNK.Error1());await l.sendMessage(i.chat,{audio:await t(h),contextInfo:{externalAdReply:{title:`🎧 ${NombreDelBot} 🎛️`,body:`${n}`,previewType:"PHOTO",thumbnail:r.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:d[Math.floor(Math.random()*d.length)]}},mimetype:"audio/mp4",fileName:`${m[0]?m[0]:n}.mp3`,ptt:!0},{quoted:i})}),reacMoji(i.chat,l,"⚙️",i)}}catch(v){throw v}};handler.help=["robot","aumentarbajo","memedist","inframundo","nightcore","ardilla","superveloz","demonio","lento","cursed","reversa","ventilador"],handler.tags=["conversor"],handler.command=/^(robot|aumentarbajo|memedist|inframundo|nightcore|ardilla|superveloz|demonio|lento|cursed|reversa|ventilador)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/