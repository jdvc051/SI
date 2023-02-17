/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let usedCommandRecently=new Set,isFiltered=e=>!!usedCommandRecently.has(e),addFilter=e=>{usedCommandRecently.add(e),setTimeout(()=>usedCommandRecently.delete(e),5e3)};export default{isFiltered,addFilter};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/