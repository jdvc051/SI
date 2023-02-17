/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{join}from"path";import{promises as fs}from"fs";import{promisify}from"util";import{google}from"googleapis";const SCOPES=["https://www.googleapis.com/auth/drive.metadata.readonly"],TOKEN_PATH=join(__dirname,"..","token.json");class GoogleAuth extends EventEmitter{constructor(){super()}async authorize(t){let e;const{client_secret:o,client_id:i}=t,s=new google.auth.OAuth2(i,o,`http://localhost:${port}`);try{e=JSON.parse(await fs.readFile(TOKEN_PATH))}catch(t){const o=s.generateAuthUrl({access_type:"offline",scope:SCOPES});this.emit("auth",o);let i=await promisify(this.once).bind(this)("token");e=await s.getToken(i),await fs.writeFile(TOKEN_PATH,JSON.stringify(e))}finally{await s.setCredentials(e)}}token(t){this.emit("token",t)}}class GoogleDrive extends GoogleAuth{constructor(){super(),this.path="/drive/api"}async getFolderID(t){}async infoFile(t){}async folderList(t){}async downloadFile(t){}async uploadFile(t){}}export{GoogleAuth,GoogleDrive};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/