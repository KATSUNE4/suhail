const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sammybaby:achiwa@cluster0.pd62luw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://samuel:<F6YryNZ7yR3LGFS43V9ppQ>@sammyi-15727.8nj.gcp-europe-west1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full
"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349129427019";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349129427019";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_26_09_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRUWVkrZElKUTJXUnNuK2M2U3Z1YW1wakp0WStyUzk5am8vZGtISW1oUFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9tbVhucGhxU2hPUUhEY3FiZllaOHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjk5NmNhNzktNDVmOS00NDlhLTkyM2MtYWM3NzVmNWI3MzYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAxMDMsXG4gICAgICAxODAsXG4gICAgICAxNTUsXG4gICAgICAxMCxcbiAgICAgIDI3LFxuICAgICAgMjA0LFxuICAgICAgMTcxLFxuICAgICAgMTczLFxuICAgICAgMjIwLFxuICAgICAgMTgsXG4gICAgICA0NixcbiAgICAgIDE4NCxcbiAgICAgIDI0NixcbiAgICAgIDIwNCxcbiAgICAgIDY0LFxuICAgICAgMTM5LFxuICAgICAgMTQsXG4gICAgICAxNDMsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDE4MixcbiAgICAgIDExNixcbiAgICAgIDIwNCxcbiAgICAgIDIxNixcbiAgICAgIDEwMCxcbiAgICAgIDk1LFxuICAgICAgNzYsXG4gICAgICAxNSxcbiAgICAgIDUwLFxuICAgICAgMjQwLFxuICAgICAgMTA1LFxuICAgICAgMjcsXG4gICAgICAxMzMsXG4gICAgICA4NixcbiAgICAgIDM5LFxuICAgICAgMjUwLFxuICAgICAgMTQyLFxuICAgICAgNjgsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEOWlzb0JFUGFjM0xZR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1hyUytoNnU1WHVROVBOZ1dEV1k2MnlOMmMxSVNWdnRJTzNlcWRtR01Ydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6YkZDZm04TjU1aEpqVGVVVGY3dzRXTVJwWFYrQktmVytHZnZBSlVwSUovY2ZwTHBZVU1UeFVqREM0bWtzQ2FpaVMxTkluZHcwMDdQaGVkM0g5TFlEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsVVVaSEtWVHRxVEowMlN4cmF3Ym1OeXZkRkNERDBRbjBEcHdiV1czZzFzMUNGNEdkc29FZHZWa1dOVkpFQW9uL2duYkNGK2Q4Y3FaNmN5S0k1VkJqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjk0MjcwMTk6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg0MjAxNDk1MzYxNjoxMUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjk0MjcwMTk6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUzNjk5Nzdcbn0iCn0="  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Sammy-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
