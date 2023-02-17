/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import Helper from"./helper.js";const WORKER_DIR=Helper.__dirname(import.meta.url,!1);export default async function importLoader(e){e=Helper.__filename(e);const r=await import(`${e}?id=${Date.now()}`);return r&&"default"in r?r.default:r}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/