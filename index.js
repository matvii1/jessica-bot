import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'

dotenv.config()

const token = process.env.BOT_TOKEN

const bot = new TelegramBot(token, { polling: true })

const OPTION = 'Receive a compliment'

bot.on('message', (msg) => {
	const chatId = msg.chat.id
	const messageText = msg.text

	const options = {
		reply_markup: {
			keyboard: [[OPTION]],
			resize_keyboard: true,
			one_time_keyboard: false,
		},
	}

	if (messageText === '/start') {
		bot.sendMessage(
			chatId,
			'Welcome to a compliment bot. Click on the button below',
			options
		)
	}
})

bot.on('message', (msg) => {
	const chatId = msg.chat.id
	const text = msg.text

	switch (text) {
		case OPTION:
			const complimentsForGirlfriend = [
				'You have a smile that lights up the room.',
				'Your kindness and compassion are truly remarkable.',
				'I love the way you make me feel special.',
				"You're not just beautiful on the outside, but your inner beauty shines through as well.",
				'Your intelligence and wit always impress me.',
				'I appreciate your support and encouragement in everything I do.',
				'Spending time with you is the highlight of my day.',
				"You have a heart of gold, and it's one of the many things I love about you.",
				'Your laugh is contagious and brings joy to those around you.',
				'I feel incredibly lucky to have you in my life.',
				'Your strength and resilience inspire me every day.',
				'You make every moment memorable and full of love.',
			]

			const randomCompliment =
				complimentsForGirlfriend[
					Math.floor(Math.random() * complimentsForGirlfriend.length)
				]

			bot.sendMessage(chatId, randomCompliment)
			break

		default:
			break
	}
})
