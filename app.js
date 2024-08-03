const express = require('express');
const http = require('http');
const socketIo = require('socket.io')
const TelegramBot = require('node-telegram-bot-api');





const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3000;

const TOKEN = '6554951276:AAENuyk5g9Z_1R7bc8W0Rm3DqJxRBh4Y6I4'
const chatID = '1779499306'


const bot = new TelegramBot (TOKEN, { polling: true});


.then(() => {
    console.log(`Connected to mongo DB`)
})
const userCount = new mongoose.Schema({
    userCount: {type: Number, default: 0}
})

const count = mongoose.model('userCount', userCount)

io.on('connection', (socket) => {
    console.log('New user connecter');
    bot.sendMessage(chatID, 'Новий користувач на сайті');
    const count = await 
    socket.on('disconnect', () => {
        console.log(`User disconnected`);
    })
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


server.listen(PORT, () => {
    console.log(`Server work on port: ${PORT}`);
});