/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:s,args:a})=>{if(!e.quoted)return e.reply("[ ! ] Responda un sticker!");/sticker/.test(e.quoted.mtype)&&(await s.relayMessage(e.chat,{requestPaymentMessage:{currencyCodeIso4217:"USD",amount1000:priceRand(10,1e4),noteMessage:{stickerMessage:Object.assign({},e.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage)}}},{}),reacMoji(e.chat,s,"⚙️",e))};handler.help=["spago"],handler.tags=["conversor"],handler.command=/^(spago|sprecio|scosto)$/i;export default handler;function priceRand(e,s){return Math.floor(Math.random()*(s-e+1)+e)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/