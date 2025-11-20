# 🧑‍🍳 FoodDev Admin Panel – React + Firebase

This is the **admin web panel** for the FoodDev project.  
It is built with **React** and uses **Firebase Firestore** to add and manage food items that are displayed in the **FoodDev React Native mobile app**.

Using this panel, an admin can:

- Add new food items
- Set name, description, price, category (Veg / Non-Veg)
- Provide restaurant name, address, phone number
- Provide an image URL for the food

All data is stored in Firestore collection: **`FoodData`**.

---

## 🚀 Features

- 🌐 React single-page application
- 🧾 Form to add food data:
  - `foodName`
  - `foodDescription`
  - `foodPrice`
  - `foodCategory`
  - `foodImage` (URL)
  - `restraurantName`
  - `restraurantAddress`
  - `restraurantPhoneNo`
- 📂 Saves all data to **Firebase Firestore**
- 🧩 Designed to work together with:
  - **FoodDev React Native app** (mobile client)

---

## 🧱 Tech Stack

- **React**
- **Firebase Firestore**
- CSS for styling

---
🛠 Setup & Installation
1️⃣ Clone the repo
git clone https://github.com/ayush08m/fooddevadminpanel.git
cd fooddevadminpanel

2️⃣ Install dependencies
npm install


or

yarn install

3️⃣ Firebase configuration

Open:

src/Firebase/FirebaseConfig.js


and configure it like this:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


Make sure this Firebase project is the same one used in the FoodDev mobile app so both share the same database.

✏️ Add Food Data (Component Overview)

Core form component (example: AddFoodData.js):

Takes input fields:

Food name, price, description

Category (Veg / Non-Veg)

Image URL

Restaurant details

On submit:

Builds a foodData object

Calls addDoc(collection(db, "FoodData"), foodData)

This collection (FoodData) is what the mobile app reads from.

▶️ Run the app (development)
npm start


Opens at: http://localhost:3000/

<img width="1918" height="1017" alt="image" src="https://github.com/user-attachments/assets/ee3bff5a-bc6c-4c0f-b315-1d5029d18ec5" />


Use the form to add foods → verify in Firebase Console → Firestore → FoodData.

🔗 Related Project (Mobile App)

This admin panel is used to manage the food data consumed by my React Native app:

👉 Mobile App Repo:
https://github.com/ayush08m/FoodDev

✨ Future Improvements

Add authentication (only admins can log in and add items)

Add edit / delete options for existing food items

Show a table/list of all FoodData from Firestore

Add image preview from image URL

Add category dropdown instead of free text

👨‍💻 Author

Ayush More

GitHub: @ayush08m

## 📂 Project Structure (simplified)

```bash
fooddevadminpanel/
  ├─ src/
  │  ├─ Firebase/
  │  │  └─ FirebaseConfig.js
  │  ├─ components/
  │  │  └─ AddFoodData.js
  │  ├─ App.js
  │  └─ index.js
  ├─ public/
  ├─ package.json
  └─ README.md
