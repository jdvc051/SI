/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let stdouts=[];export default(t=200)=>{let s=process.stdout.write.bind(process.stdout);return module.exports.disable=()=>(module.exports.isModified=!1,process.stdout.write=s),process.stdout.write=(o,e,d)=>{stdouts.push(Buffer.from(o,e)),s(o,e,d),stdouts.length>t&&stdouts.shift()},module.exports.isModified=!0,module.exports};export const isModified=!1;export function logs(){return Buffer.concat(stdouts)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/