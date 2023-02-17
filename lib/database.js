/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import Helper from"./helper.js";import{Low,JSONFile}from"lowdb";import{cloudDBAdapter,mongoDB,mongoDBV2}from"./DB_Adapters/index.js";import lodash from"lodash";const databaseUrl=Helper.opts.db||"",databaseAdapter=/https?:\/\//.test(databaseUrl)?new cloudDBAdapter(databaseUrl):/mongodb(\+srv)?:\/\//i.test(databaseUrl)?Helper.opts.mongodbv2?new mongoDBV2(databaseUrl):new mongoDB(databaseUrl):new JSONFile((Helper.opts._[0]?Helper.opts._[0]+"_":"")+"database.json");let database=new Low(databaseAdapter);async function loadDatabase(){return database._read&&await database._read,null!==database.data||(database._read=database.read().catch(console.error),await database._read,database.data={users:{},chats:{},stats:{},msgs:{},sticker:{},settings:{},...database.data||{}},database.chain=lodash.chain(database.data)),database.data}loadDatabase();export{databaseUrl,databaseAdapter,database,loadDatabase};export default database;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/