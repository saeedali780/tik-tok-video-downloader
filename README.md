
# 🚀 TikTok Video Downloader 🎬  
A super cool, easy-to-use TikTok video downloader! Download your favorite TikTok videos **without the watermark** in just a few clicks! ✨  
---

## ✨ Features  
- **Download TikTok videos** by pasting the link!  
- Seamlessly integrated with **RapidAPI** 🔥  
- Smart **error handling** for invalid links ❌  
- Auto-clear input field once the download is successful! 🙌  
- **Smooth UI** to make the experience even better 🎨  

---

## 🎥 Demo  
- Check out the **live version** if it's deployed!  
- https://video-downloader-tiktok.netlify.app/ 📸  

---

## 🛠️ Installation & Setup  

1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/saeedali780/tik-tok-video-downloader
cd tik-tok-video-downloader
```

2️⃣ **Install Dependencies**  
```bash
npm install
```

3️⃣ **Run the App**  
```bash
npm start
```

---

## 🧰 Tech Stack  
- **Frontend:** React.js ⚛️  
- **Styling:** CSS 🎨  
- **API Requests:** Axios 💻  

---

## 📡 API Integration  
This app uses **RapidAPI** for downloading TikTok videos. 🚀  
Make sure you have an API key and update the `api.js` file:  

```js
const options = {
    method: 'GET',
    url: 'https://tiktok-video-no-watermark2.p.rapidapi.com',
    params: { url: videoUrl, hd: '0' },
    headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
        'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
    }
};
```

---


## 🤝 Contributors  

- **[@ZainUlAbedin2407](https://github.com/ZainUlAbedin2407)** for the **UI Design** 👨‍💻  
- **[@saeedali780](https://github.com/saeedali780)** for **API integration** & adding all the cool functionality! 🦸‍♂️  

Want to contribute? We'd love to have you on board! 🌟  

---

## 📝 License  
This project is open-source and available under the **MIT License**.  

---

## 🌟 Show Some Love!  
If you love this project, give it a ⭐ on GitHub! Let’s spread the word! 🌍  
