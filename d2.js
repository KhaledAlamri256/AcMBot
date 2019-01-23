const prefix ="-";
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', message => {
    if(message.content == '%member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });

var lastq = false ;

const country = [
     ['ماهي عاصمة دولة افغانستان ؟','كابول'],
     ['ماهي عاصمة دولة السودان ؟','الخرطوم'],
     ['ماهي عاصمة دولة السعودية ؟','الرياض'],
     ['ماهي عاصمة دولة لبنان ؟','بيروت'],
     ['ماهي عاصمة دولة البحرين ؟','المنامة'],
     ['ماهي عاصمة دولة الصين ؟','بكين'],
     ['ماهي عاصمة دولة فلطسين ؟','القدس'],
     ['ماهي عاصمة دولة العراق ؟','بغداد'],
     ['ماهي عاصمة المالديف ؟','ماليه'],
     ['ماهي عاصمة دولة الكويت ؟','الكويت'],
     ['ماهي عاصمة دولة عمان ؟','مسقط'],
     ['ماهي عاصمة دولة اليمن ؟','صنعاء'],
     ['ماهي عاصمة دولة الهند ؟','نيودلهي'],
     ['ماهي عاصمة دولة سوريا ؟','دمشق'],
     ['ماهي عاصمة دولة تيمور الشرقية ؟','ديلي'],
     ['ماهي عاصمة دولة بنجلاديش ؟','دكا'],
     ['ماهي عاصمة دولة اليابان ؟','طوكيو'],
     ['ماهي عاصمة دولة الفلبين ؟','مانيلا'],
     ['ماهي عاصمة دولة تايوان ؟','تايبيه'],
     ['ماهي عاصمة دولة سنغافورة ؟','سنغافورة'],
     ['ماهي عاصمة دولة كوريا الجنوبية ؟','سيؤل'],
     ['ماهي عاصمة دولة تونس ؟','تونس'],
     ['ماهي عاصمة دولة الجزائر ؟','الجزائر'],
]

client.on('message', message => {
  if (message.content === `-عاصمة`) {
	if (!lastq){
	lastq = country[Math.floor(Math.random() * country.length)][0] ;
	message.channel.sendMessage({embed: {
	  color: 3547003,
	  description: `${lastq}`
	}});
	}else{
		 console.log(`This shit`);
		 message.channel.send(' :negative_squared_cross_mark: اجب على السؤال الأخير '+lastq);
	}
};
});

client.on('message', msg => {
	country.forEach(function(v,i){
		if (v[0] === lastq && v[1] === msg.content){
			lastq = false ;
		msg.reply(' :white_check_mark: اجابة صحيحة');
		
		};
	});
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
 if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('⚠ | **ليس لديك صلاحيات**');
	message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
  if (command === "رسالة") {
    message.member.sendMessage(args.join(" ")).catch(console.error);
message.reply("**تم ارسال الرسالة التي كتبتها بالخاص**")
  }
  

if (command == "embed") {
 if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('⚠ | **ليس لديك صلاحيات**');
    let say = new Discord.RichEmbed()
    .setDescription(args.join(" ")`GuildChannelclient`)
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }
 

});


 
 

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc')){
 if (message.author.id !== '261575750543605760') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '261575750543605760') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
 


client.on('message', message => {
      if(message.content.startsWith ("-اغتصاب")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تشوف بنت تخطبها , ولو مالقيت كلم <@246253154016952321> يخطبلك**').catch(console.error);
      if(message.mentions.users.size > 4) return message.reply(' 😳 **وش هالفحل الصامل ناوي على الزواج يعني**').catch(console.error);
       if(proposed === message.author) return message.reply(`**هل تقبلين الزواج بي ؟**`);
        if(proposed === client.user) return message.reply(`** ابي اتزوجك ؟ **`);
              message.channel.send(`
**${proposed} 
جاري اغتصابك حتى ينزف الدم ${message.author} 
صيحي وقولي اه او اطلبي النجده**`)

const filter = m => m.content.startsWith("اه");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` ** ${proposed} تمحني ي بنت الكلب ي ممحونه** `);
})

   const filte = m => m.content.startsWith("النجده");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  😏 **اعلى زبي , راكبك راكبك يقحبه** `);
})
        
  }
});


var lastmath = false ;
var lastmatha = false ;

const char = [
     '÷',
     '+',
     '×',
     '-',
]


client.on('message', message => {
  if (message.content === `-رياضيات`) {
    if (!lastmath){
        while(!setnum(message)){
            
            
        };
    message.channel.sendMessage({embed: {
      color: 3547003,
      description: 'السؤال هو \n'+`${lastmath}`
    }});
    }else{
         message.channel.send(' :negative_squared_cross_mark: اجب على السؤال الأخير \n'+lastmath);
    }
};
});

function setnum(message){
    var fn = Math.floor(Math.random()* 100) ;
    var sn = Math.floor(Math.random()* 100)+1 ;    
    var randomchar = char[Math.floor(Math.random() * char.length)] ;
    lastmath = fn+randomchar+sn;

    switch(randomchar) {
        case '+':
            lastmatha = fn+sn;
            return true
        break;
        case '-':
            lastmatha = fn-sn;
            if (lastmatha > 0){
                return true;
            }else{
                return false ;
            }
        break;
        case '×':
            lastmatha = fn*sn;
            return true;
        break;
        case '÷':
            lastmatha = fn/sn;
            if (Math.floor(lastmatha) === lastmatha){
                return true;
            }else{
                return false ;
            }
        break;
    };
}


client.on('message', message => {
  if (lastmath && message.content ==     lastmatha) {
        lastmath = false ;
        lastmatha = false ;
        message.channel.send(message.author+' :white_check_mark: اجابة صحيحة');
    };
});




client.on('message',  (message) => {
        if(message.content.startsWith('-ابلع')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} صكك كف ولا عمر ابوك ما ذقته ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message',  (message) => {
        if(message.content.startsWith('-مين يحبني')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'خالد يموت فيك',
    'سترونق يحبك',
    'جست بوي يكرهك',
    'محد يحبك انقلع',
    'السيرفر يحب بس',
    'الزبالة تحبك',
    'عفوا مالقينا اجابة , انقلع',
    'اسمع انا مشغول ذلحين سلام',
    'والله شوف ي غالي , ممكن ممكن امك تحبك',
    'ابوك وامك يحبونك',
    'محد يحبك , ممكن اتزوجك ؟',
    'هييييه , وش قصتك انت ؟ بزر مين يحبني ومدري وش',
    'جدتك تحبك',
    'سترونق يبي يغتصبك',
    'خالد يبي يلعب معك زوج والزوجه وهو الزوج طبعا',
    'انقلع تراك ازعجتني',
    'يالله انك تلعنه',
    'اركب عليه , فكني شرك',
    'لو كنت جست حاب اقلك , اركب عليه',
    'يليل الزق جاء النشبة',
    'عفوا , في مشكلة بالبوت ',
    'لو سمحت ممكن تقول السؤال ثاني ؟',
	  
  ];

  message.channel.send({
    embed: {
      title: `${message.author.username}  جالس يدور على مين يحبك ${user.username} !`,
      description: slaps[Math.floor(Math.random() * slaps.length)],
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

var lastq1 = false ;

const QQ = [
     ['شسم السيرفر ؟','مجتمع العرب'],
     ['مين يحبني ؟','انا'],
     ['ماهي عاصمة دولة مجتمع العرب ؟','مجتمع العرب'],
     ['اين تقع محطة مجتمع العرب ؟','شمال مجتمع العرب'],
     ['اسمع مالي حيل اسئلك سؤال لكن الجواب هو : مدري','مدري'],
     ['متى بدأ مجتمع العرب','2014'],
     ['وشو الشي اللي لو ضربته صاح ؟','البوري'],
     ['وشو الشي اللي يبلع اي شي الا الماء ؟','النار'],
     ['وش الشي اللي كل ماكلت منه رجع زي ماكان ؟','مدري والله'],
     ['متى فتحو اليوتيوب ؟','2004'],
     ['وش احسن موتر بالعالم ؟','الفورد'],

]

client.on('message', message => {
  if (message.content === `-سؤال`) {
	if (!lastq1){
	lastq1 = QQ[Math.floor(Math.random() * QQ.length)][0] ;
	message.channel.sendMessage({embed: {
	  color: 3547003,
	  description: `${lastq1}`
	}});
	}else{
		 console.log(`This shit`);
		 message.channel.send(' :negative_squared_cross_mark: اجب على السؤال الأخير '+lastq1);
	}
};
});
 

  
 
client.login(process.env.BOT_TOKEN);
