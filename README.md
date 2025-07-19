
# 🤖 Fox AI Chatbot using Flask & Google Gemini

Welcome to the **Smart AI Chatbot** project – a free and open-source chatbot powered by **Python Flask** and **Google Gemini API**. This project allows you to build your own intelligent chatbot capable of understanding and responding in natural language.

---

## 🚀 Features

- 🧠 AI-powered conversations using Google Gemini
- 🌐 Flask web app with real-time chat interface
- 🎨 Beautiful and responsive UI (HTML/CSS/JS)
- 💬 Easy integration and customization
- 💯 Completely FREE to use (uses Gemini free-tier API)

---

## 📦 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python (Flask)
- **AI Engine**: Google Gemini API
- **Tools**: VS Code, logging (for testing)

---

## Screenshot
<img width="825" height="888" alt="app_demo" src="Screenshot .png" />


## 📁 Project Structure

```
smart-ai-chatbot/
├── static

│   └── styles.css
├── templates/
│   └── index.html
├── app.py
├── requirements.txt
└── README.md
```

---

## 🔧 Installation & Setup

1. **Create a virtual environment (optional but recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install the dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Add your Google Gemini API key:**
   - Create a `.env` file and write as: G00GLE_API_KEY="add your api" (Secure way to store your private keys)

4. **Run the app:**
   ```bash
   python app.py
   ```

5. **Open your browser:**
   ```
   http://127.0.0.1:5000/
   ```

---



## 💡 Customization Tips

- Modify `templates/index.html` for UI changes
- Update response logic in `app.py`
- Add logging, chat history, user auth for advanced features

---

## 💡 Upcoming Feature

- Mic enabled Voice assistant Chatbot (eg. JARVIS) using pyttsx3 and SpeachRecognition
- A Working AI Bot to handle your tasks using PyAutoGUI
- Bot can do advance works including Microsoft office works, To do notifications
- A Smart Mirror who can make you smile, talk to you and give you informations/news in real time like weather info, Guide you to make your lifestyle good.
- Overall, A Smart AI Mirror who will do what you expect from an Artificial Intelligence.
---

## 📄 License

This project is licensed under the **MIT License** – feel free to use, modify, and distribute with credit.
