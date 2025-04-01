const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth() // Сохраняет сессию после перезапуска
});

client.on('qr', qr => {
    console.log('Сканируйте QR-код в WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Бот запущен и готов к работе!');
});

client.on('message', async message => {
    console.log(`Получено сообщение: ${message.body}`);
    await message.reply('Привет!');
});

client.initialize();
