/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"../lib/database.js";let handler=async(e,{text:t,command:r,conn:l})=>{let s=await l.getName(e.sender),i="sk-XRL8VTi1CYcuuVbabZsofT3BlbkFJ9YSDTGK0VMnssFw5xFtx",c="No hay sistema!";if(a.data.chats[e.chat].soloAdmins){if(t.length<15)return e.reply(`Por favor, sea mas espec\xedfico en su mensaje`);try{e.reply(MultiNK.Proces(s));await e.reply(await chatBotAI(e.chat,t,i))}catch(h){e.reply(c)}}else{if(!t)return e.reply("Y el texto ...?");try{let n=await chatBotAI(e.chat,t,i);e.reply(n)}catch(o){e.reply(c)}}};handler.help=["simi"].map(a=>a+" <texto>"),handler.tags=[""],handler.command=/^(simi|bot|aichat)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/