/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{generateWAMessageFromContent as e,generateWAMessage as a}from"@adiwajshing/baileys";import*as s from"fs";let handler=async(e,{conn:a})=>{await a.relayMessage(e.chat,{requestPaymentMessage:{noteMessage:{extendedTextMessage:{text:`💻 *Redes sociales* 📲

${"‎".repeat(850)+TusRedesSociales}`,currencyCodeIso4217:"PEN",requestFrom:"0@s.whatsapp.net",expiryTimestamp:8600,amount:1e4,background:s.readFileSync("./multimedia/imagenes/thx.jpg")}}}},{}),reacMoji(e.chat,a,"❤️",e)};handler.help=["apoyo"],handler.tags=["casual"],handler.command=/^(apoyo|apoyar|donar|donasi|dono)$/i,handler.exp=100;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/