/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";import a from"node-fetch";let cooldown=6e5,handler=async(o,{conn:r})=>{try{let t=await (await a("https://random-data-api.com/api/v2/addresses")).json(),n=e.data.users[o.sender],$=6e5-(new Date-n.lastadventure);if(n.salud<80)return o.reply(`
Requiere al menos 80 de ❤️Salud para la aventura!!
por favor compre ❤️Salud primero, use el comando:

${Prefijo}comprar elixir <cantidad>

y luego:

${Prefijo}sanar <cantidad>
`.trim());if(new Date-n.lastadventure<=6e5)return o.reply(`
*[ ! ] Ya estuviste en una aventura, por favor espera*
🕐${$.toTimeString()}...*
`.trim());let i=reward(n),d=`


Fin de tu aventura 🎭
`;for(let s in i.lost)if(n[s]){let u=i.lost[s].getRandom();n[s]-=1*u,u&&(d+=`
${global.rpg.emoticon(s)}${s}: -${u}`)}for(let l in d+=`

🔖 Estuviste en ${t.city}, ${pickRandom(["te quedaste dormido por un dia completo","sufriste una intoxicaci\xf3n por comer en un restaurante de mala calidad","fuiste asaltado","tuviste que pelear contra un dragon","perdiste tus pertenencias","fuiste atacado por una pandilla","trabajaste como agricultor todo el dia","sufriste un accidente en tu caballo","fuiste a la c\xe1rcel por una calumnia","pagaste tus impuestos","te atac\xf3 un enjambre de abejas","paso un terremoto de magnitud 10","te perdiste en un bosque cercano por 24 horas","te estafaron en una feria","un dia completo de libertinaje","perdiste en apuestas","luchaste en una batalla peligrosa","fuiste esclavizado"])}, pero tienes :`,i.reward)if(l in n){let c=i.reward[l].getRandom();n[l]+=1*c,c&&(d+=`
${global.rpg.emoticon(l)}${l}: ${c}`)}r.sendMessage(o.chat,{caption:`*[ AVENTURA 🌎 ]*

> *Pa\xeds:* ${t.country}
> *C\xf3digo de pais:* ${t.country_code}
> *N\xfamero de edificio:* ${t.building_number} ${t.secondary_address}
> *Prefijo de ciudad:* ${t.city_prefix}
> *Sufijo de ciudad:* ${t.city_suffix}
> *Comunidad:* ${t.community}
> *Ubicaci\xf3n:* ${t.full_address}
> *Id:* ${t.id}
> *Estado:* ${t.state}
> *Direcci\xf3n:* ${t.street_address}
> *Calle:* ${t.street_name}
> *Sufijo de calle:* ${t.street_suffix}
> *Zona horaria:* ${t.time_zone}
> *C\xf3digo zip:* ${t.zip_code}`,footer:d.trim()||"",location:{degreesLatitude:t.latitude||43.9783056,degreesLongitude:t.longitude||15.3835139},buttons:[{buttonId:`${Prefijo}inventario`,buttonText:{displayText:"[ INVENTARIO ]"},type:1}],headerType:"LOCATION",mentions:[o.sender]}).catch(e=>{o.reply("[ ! ] No se pudo realizar una aventura")}),n.lastadventure=new Date*1}catch{o.reply("[ ! ] Fin de la aventura...")}};handler.help=["aventura"],handler.tags=["games"],handler.command=/^(aventura)$/i,handler.cooldown=6e5;export default handler;function reward(e={}){return{reward:{nkoins:201,exp:301,basura:101,potion:2,roca:2,madera:2,cuerda:2,ordinario:2*(e.doge&&(e.doge>2?2:e.doge)*1.2||1),singular:[0,0,0,1,0].concat(Array(5-(e.doge>2&&e.doge<6&&e.doge||e.doge>5&&5||2)).fill(0)),mitico:[0,0,0,0,0,1,0,0,0].concat(Array(8-(e.doge>5&&e.doge<8&&e.doge||e.doge>7&&8||3)).fill(0)),legendario:[0,0,0,0,0,0,0,1,0,0].concat(Array(10-(e.doge>8&&e.doge||4)).fill(0)),neko:[0,1,0,0,0],centaur:[0,1,0,0,0],doge:[0,1,0,0,0],dragon:[0,1,0,0,0],esmeralda:[0,1,0,0,0],zorro:[0,1,0,0,0],griffin:[0,1,0,0,0],caballo:[0,1,0,0,0],kyubi:[0,1,0,0,0],lion:[0,1,0,0,0],mascota:[0,1,0,0,0],phonix:[0,1,0,0,0],rhinoceros:[0,1,0,0,0],robo:[0,1,0,0,0],wolf:[0,1,0,0,0],hierro:[0,0,0,1,0,0],oro:[0,0,0,0,0,1,0],diamante:[0,0,0,0,0,0,1,0].concat(Array(5-(e.zorro<6&&e.zorro||e.zorro>5&&5||0)).fill(0))},lost:{salud:101-4*e.neko,armordurability:(15-e.armadura)*7}}}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/