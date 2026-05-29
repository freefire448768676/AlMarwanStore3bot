const { Telegraf } = require('telegraf');

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('حط BOT_TOKEN بالـ Environment Variables');
  process.exit(1);
}

const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply('أهلا وسهلا! البوت اشتغل بنجاح 🚀'));
bot.help((ctx) => ctx.reply('اكتب /start لتشغيل البوت'));

bot.launch();
console.log('البوت شغال...');
