from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackQueryHandler, ContextTypes
import database

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.message.chat_id
    user = update.message.from_user
    database.create_user(chat_id, user.username)

    keyboard = [
        [InlineKeyboardButton("Casino", callback_data='casino')],
        [InlineKeyboardButton("Referral", callback_data='referral')],
        [InlineKeyboardButton("Earnings", callback_data='earnings')],
        [InlineKeyboardButton("News", callback_data='news')],
        [InlineKeyboardButton("Wallet", callback_data='wallet')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Welcome to the Clicker Bot!', reply_markup=reply_markup)

async def button(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    data = query.data

    if data == 'casino':
        await query.edit_message_text(text="Welcome to the Casino!")
        # Additional logic for casino
    elif data == 'referral':
        await query.edit_message_text(text="Here is your referral link!")
        # Additional logic for referral
    elif data == 'earnings':
        await query.edit_message_text(text="Start earning!")
        # Additional logic for earnings
    elif data == 'news':
        await query.edit_message_text(text="Latest news here!")
        # Additional logic for news
    elif data == 'wallet':
        await query.edit_message_text(text="Manage your wallet!")
        # Additional logic for wallet

def main():
    application = ApplicationBuilder().token("7414949177:AAES1kUaxpa-j3PSZfWmg4OYzlleI66gcuI").build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CallbackQueryHandler(button))

    application.run_polling()

if __name__ == '__main__':
    main()
