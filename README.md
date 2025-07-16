# ✅ Correctify Backend – Grammar Correction API

This is the backend service for **Correctify**, an AI-powered grammar correction platform that uses **Cohere's `command-r-plus` model** to fix grammar issues in user-submitted text and provide explanations.

---

## 🔧 Technologies Used

- **Node.js** – Backend runtime  
- **Express.js** – REST API framework  
- **Cohere API** – AI grammar correction (`command-r-plus` model)  
- **Axios** – For external API calls  
- **dotenv** – Manage environment variables  
- **CORS** – Enable frontend-backend communication

---

## 📤 API Endpoint

### `POST /correct`  
`Content-Type: application/json`  
**Required Field in Body:** `text` (string)

---

### ✅ Request Body

```json
{
  "text": "He go to school every day and eat a apple."
}
```

---

### 🧠 Response

```json
{
  "original": "He go to school every day and eat a apple.",
  "correctedText": "He goes to school every day and eats an apple.",
  "explanation": "Corrected subject-verb agreement ('go' → 'goes', 'eat' → 'eats') and article usage ('a apple' → 'an apple').",
  "responseTime": "532ms"
}
```

---

## 🔗 API Base URL

```
https://correctify.onrender.com/correct
```

**Send a POST request with only the `text` field in the body.**

---

## 📌 Notes

- Only the `text` field is required in the request.  
- Response contains:
  - `original`: the input text  
  - `correctedText`: AI-corrected grammar  
  - `explanation`: reason behind each correction  
  - `responseTime`: time taken by the API in milliseconds  
- Powered by **Cohere `command-r-plus`**, optimized for writing and correction tasks.  
- Can be easily connected to any frontend interface.

---

