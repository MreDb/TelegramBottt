import sqlite3

def connect_db():
    return sqlite3.connect('database.db')

def create_user(chat_id, username):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("INSERT OR IGNORE INTO users (chat_id, username, balance) VALUES (?, ?, ?)", (chat_id, username, 0))
    conn.commit()
    conn.close()

# Add other database functions as needed
