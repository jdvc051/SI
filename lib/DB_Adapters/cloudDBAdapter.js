/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import t from"got";let stringify=t=>JSON.stringify(t,null,2),parse=t=>JSON.parse(t,(t,e)=>null!==e&&"object"==typeof e&&"type"in e&&"Buffer"===e.type&&"data"in e&&Array.isArray(e.data)?Buffer.from(e.data):e);class CloudDBAdapter{constructor(t,{serialize:e=stringify,deserialize:s=parse,fetchOptions:i={}}={}){this.url=t,this.serialize=e,this.deserialize=s,this.fetchOptions=i}async read(){try{let e=await t(this.url,{method:"GET",headers:{Accept:"application/json;q=0.9,text/plain"},...this.fetchOptions});if(200!==e.statusCode)throw e.statusMessage;return this.deserialize(e.body)}catch(s){return null}}async write(e){let s=await t(this.url,{method:"POST",headers:{"Content-Type":"application/json"},...this.fetchOptions,body:this.serialize(e)});if(200!==s.statusCode)throw s.statusMessage;return s.body}}export default CloudDBAdapter;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/