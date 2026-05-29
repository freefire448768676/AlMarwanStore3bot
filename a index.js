const { Telegraf } = require('telegraf');
const express = require('express');

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('خطأ: حط BOT_TOKEN بال Environment');
  process.exit(1);
}

const bot = new Telegraf(token);

// سيرفر صغير مشان Render ما ينيمه + يطلع رابط
const app = express();
app.get('/', (req, res) => {
  res.send('البوت شغال 24 ساعة 🔥');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`السيرفر شغال على بورت ${port}`);
});

bot.start((ctx) => ctx.reply('أهلا فيك ببوت المروان ستور ✅'));
bot.help((ctx) => ctx.reply('اكتب /start لتشغيل البوت'));

bot.launch();
console.log('البوت شغال...');
