const botconfig = require('./botconfig.json');
const pic = require('./pic.json');

const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(botconfig.token)
bot.on("ready",() => {
    console.log('Ready...')
    bot.user.setUsername('Boss timer')
    
    timestart() 
    bot.user.setGame('NEXT '+t+' '+boss)
})

setInterval(()=>status(), 25000);
setInterval(()=>alertz2(), 60000);

bot.on("message", (msg) => {
    if (msg.content === "บอส"){

      const embed = new Discord.RichEmbed()
    .setTitle("บอสตัวต่อไป")  //หัวข้อ
    .setAuthor("Boss Timer BDO", "https://www.picz.in.th/images/2018/06/22/48XhJt.png")  //icon หัวขอ
    
    .setColor(0x2f0200)   //ใส่สี
    .setDescription("วัน  "+days[day]+"   เวลา   "+"__"+t+"__"+"              "+"__**"+boss+"**__")   //รายละเอียด
    .setFooter("Boss Timer BDO V2.0 by ฟูโอ้", "https://cdn.pixabay.com/photo/2017/08/27/22/02/pig-2687704_960_720.png") //รูป ข้อความล่างสุด
    .setImage("https://www.picz.in.th/images/2018/06/22/489tfS.png")     //รูปใหญ่
    .setThumbnail(imgboss)   //รูปเล็กขวาบน

    .setTimestamp()  //เวลาด้านล่างสุด
     msg.channel.send({embed});
     bot.user.setGame('Next '+t+' '+boss)
    }


    if (msg.content === "เบีย"){
      const embed = new Discord.RichEmbed()
      .setColor(0xd296d4)
      .setImage(pic.beer)     
      msg.channel.send({embed});
      msg.channel.send('fujosy',{
        tts: true
       })
      bot.user.setGame('Next '+t+' '+boss)
  
    }
    if (msg.content === "เบียร์"){
      const embed = new Discord.RichEmbed()
      .setColor(0xd296d4)
      .setImage(pic.beer)     
      msg.channel.send({embed});
      msg.channel.send('fujosy',{
        tts: true
        })
      bot.user.setGame('Next '+t+' '+boss)
    }
    if (msg.content === "พี่โย"){
      const embed = new Discord.RichEmbed()
      .setColor(0x033e01)
      .setImage(pic.yo)     
      msg.channel.send({embed});
      msg.channel.send('yoyo',{
        tts: true
       })
      bot.user.setGame('Next '+t+' '+boss)
    }
    if (msg.content === "เนส"){
      const embed = new Discord.RichEmbed()
      .setColor(0x030663)
      .setImage(pic.nest)     
      msg.channel.send({embed});
      msg.channel.send('nestty',{
        tts: true
        })
      bot.user.setGame('Next '+t+' '+boss)
    }

})




/*ใส่สเตัสที่bot เช็คเวลาแจ้งเตือน ดีเลจาก setInterval(()=>status(), 30000);*/
function status(){     
  timestart() 
  alertz()
  bot.user.setGame('NEXT '+t+' '+boss)
 
}


/*เช็คเวลาเพื่อแจ้งเตือนก่อน 15 นาที*/
function alertz() {
  if (day == 2 || day == 3 || day == 6) {
      if (h == 23 && m == 45){
          var channel = bot.channels.find("name", botconfig.channelName)
          channel.sendMessage('@everyone '+boss+' อีก 15 นาที')
  }}
 if (day == 0 || day == 1 || day == 4 || day == 5){
      if (h == 9 && m == 45){
          var channel = bot.channels.find("name", botconfig.channelName)
          channel.sendMessage('@everyone '+boss+' อีก 15 นาที')
  }}
 if (h == 13 && m == 45){
      var channel = bot.channels.find("name", botconfig.channelName)
      channel.sendMessage('@everyone '+boss+' อีก 15 นาที')
  }
 if (h == 17 && m == 45){
      var channel = bot.channels.find("name", botconfig.channelName)
      channel.sendMessage('@everyone '+boss+' อีก 15 นาที')
  }

}

//ส่งข้อความบอส เพื่อพิม ข้อความแจ้งบอสก่อน 1 ชม
function alertz2() {
    if (day == 2 || day == 3 || day == 6) {
        if (h == 23 && m == 00){
            var channel = bot.channels.find("name", botconfig.channelName)
            channel.sendMessage('บอส')
    }}
   if (day == 0 || day == 1 || day == 4 || day == 5){
        if (h == 9 && m == 00){
            var channel = bot.channels.find("name", botconfig.channelName)
            channel.sendMessage('บอส')
    }}
   if (h == 13 && m == 00){
        var channel = bot.channels.find("name", botconfig.channelName)
        channel.sendMessage('บอส')
    }
   if (h == 17 && m == 00){
        var channel = bot.channels.find("name", botconfig.channelName)
        channel.sendMessage('บอส')
    }
  
  }
 

function timestart(){
currentUtcTime = new Date(); // This is in UTC
thTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }));


day= thTimeZone.getDay()   
d = thTimeZone.getDate();
month = thTimeZone.getMonth();
year = thTimeZone.getFullYear();

days = new Array('อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์');    
months = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');

h = thTimeZone.getHours()
m = thTimeZone.getMinutes()   
s = thTimeZone.getSeconds();
/**แต่งเวลาให้สวย */
if (h < 10) {
h = "0" + h;
}
if (m < 10) {
m = "0" + m;
}
if (s < 10) {
s = "0" + s;
}
databoss()

}




function databoss(){
switch (day) {
/*อาทิตย์*/   case 0 :
              if (h >= 18 && h < 24) {
                  boss ='ไม่มี'
                  t = '00:00'
                  imgboss = pic.noboss
              }else if (h >= 0 && h < 10){
                  boss = 'คจาคาร์'
                  t = '10:00'
                  imgboss = pic.kzarka
              }else if (h >= 10 && h < 14){
                  boss = 'คูทุม'
                  t = '14:00'
                  imgboss = pic.kutum
              }else if (h >= 14 && h < 18){
                  boss = 'คจาคาร์'
                  t = '18:00'
                  imgboss = pic.kzarka
              }
              break   
/*จันทร์*/    case 1:
              if (h >= 18 && h < 24) {
                  boss ='ไม่มี'
                  t = '00:00'
                  imgboss = pic.noboss
              }else if (h >= 0 && h < 10){
                  boss = 'คูทุม'
                  t = '10:00'
                  imgboss = pic.kutum
              }else if (h >= 10 && h < 14){
                  boss = 'คจาคาร์'
                  t = '14:00'
                  imgboss = pic.kzarka
              }else if (h >= 14 && h < 18){
                  boss = 'คูทุม'
                  t = '18:00'
                  imgboss = pic.kutum
              }
              break
/*อังคาร*/   case 2:
              if (h >= 18 && h < 24) {
                  boss ='คจาคาร์'
                  t = '00:00'
                  imgboss = pic.kzarka
              }else if (h >= 0 && h < 10){
                  boss = 'ไม่มี'
                  t = '10:00'
                  imgboss = pic.noboss
              }else if (h >= 10 && h < 14){
                  boss = 'คูทุม'
                  t = '14:00'
                  imgboss = pic.kutum
              }else if (h >= 14 && h < 18){
                  boss = 'คจาคาร์'
                  t = '18:00'
                  imgboss = pic.kzarka
              }
              break
/*พุธ*/      case 3 :
              if (h >= 18 && h < 24) {
                  boss ='คูทุม'
                  t = '00:00'
                  imgboss = pic.kutum
              }else if (h >= 0 && h < 10){
                  boss = 'ไม่มี'
                  t = '10:00'
                  imgboss = pic.noboss
              }else if (h >= 10 && h < 14){
                  boss = 'คจาคาร์'
                  t = '14:00'
                  imgboss = pic.kzarka
              }else if (h >= 14 && h < 18){
                  boss = 'คูทุม'
                  t = '18:00'
                  imgboss = pic.kutum
              }
              break
/*พฤ*/      case 4 :
              if (h >= 18 && h < 24) {
                  boss ='ไม่มี'
                  t = '00:00'
                  imgboss = pic.noboss
              }else if (h >= 0 && h < 10){
                  boss = 'คจาคาร์'
                  t = '10:00'
                  imgboss = pic.kzarka
              }else if (h >= 10 && h < 14){
                  boss = 'คูทุม'
                  t = '14:00'
                  imgboss = pic.kutum
              }else if (h >= 14 && h < 18){
                  boss = 'คจาคาร์'
                  t = '18:00'
                  imgboss = pic.kzarka
              }
              break
/*ศุกร์*/     case 5 :
              if (h >= 18 && h < 24) {
                  boss ='ไม่มี'
                  t = '00:00'
                  imgboss = pic.noboss
              }else if (h >= 0 && h < 10){
                  boss = 'คูทุม'
                  t = '10:00'
                  imgboss = pic.kutum
              }else if (h >= 10 && h < 14){
                  boss = 'คจาคาร์'
                  t = '14:00'
                  imgboss = pic.kzarka
              }else if (h >= 14 && h < 18){
                  boss = 'คูทุม'
                  t = '18:00'
                  imgboss = pic.kutum
              }
              break
/*เสาร์*/     case 6 :
              if (h >= 18 && h < 24) {
                  boss ='คจาคาร์'
                  t = '00:00'
                  imgboss = pic.kzarka
              }else if (h >= 0 && h < 10){
                  boss = 'ไม่มี'
                  t = '10:00'
                  imgboss = pic.noboss
              }else if (h >= 10 && h < 14){
                  boss = 'คูทุม'
                  t = '14:00'
                  imgboss = pic.kutum
              }else if (h >= 14 && h < 18){
                  boss = 'คจาคาร์'
                  t = '18:00'
                  imgboss = pic.kzarka
              }
              break

          }
}
