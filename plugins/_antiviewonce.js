/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let{downloadContentFromMessage:a}=await import("@adiwajshing/baileys");export async function before(t,{isAdmin:i,isBotAdmin:s}){let n=e.data.chats[t.chat];if(!/^[.~#/\$,](read)?viewonce/.test(t.text)&&n.antiviewonce&&!n.isBanned&&"viewOnceMessage"==t.mtype){let r=t.message.viewOnceMessage.message,o=Object.keys(r)[0],c=await a(r[o],"imageMessage"==o?"image":"video"),m=Buffer.from([]);for await(let d of c)m=Buffer.concat([m,d]);if(/video/.test(o))return this.sendFile(t.chat,m,"error.mp4",`${r[o].caption}

*Mensaje multimedia para verse una sola vez, recuperado ✓*
`,t);if(/image/.test(o))return this.sendFile(t.chat,m,"error.jpg",`${r[o].caption}

*Mensaje multimedia para verse una sola vez, recuperado ✓*
`,t)}}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/