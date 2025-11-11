# Smart Waste Sorter

**A VibeState'25 Hackathon Project**

Our project is an AI-powered, two-part system designed to solve a simple, real-world problem: helping people learn to segregate waste correctly. It includes a fun web game for learning and a powerful mobile app for instant, real-world help.

---

## 🎥 Project Demo Video

[**Click here to watch our full project demo!**](https://your-video-link-goes-here.com)

*(This is the most important part of our submission! Please watch this 2-minute video to see the full project in action.)*

---

## 🚀 Our Solution: A Two-Part System

We built two separate applications that work together to solve the problem of waste segregation.

### 1. The Web Game (Learn the Basics)

Located in the `/webgame` folder, this is an interactive, drag-and-drop game built from scratch with **HTML, CSS, and JavaScript.**

* **Purpose:** To create a fun, simple, and engaging way for users to learn the core concepts of "Wet Waste," "Dry Waste," and (in our case) "E-Waste."

* **Features:**
    * Drag-and-drop interface.
    * Instant visual feedback (correct/incorrect).
    * A score-keeping and "attempts" system to gamify the learning process.

### 2. The Mobile App (Get Real-World Help)

This is a complete Android app (in the `Hackss.zip` file) that acts as a smart assistant in your hand.

* **Purpose:** To provide instant, AI-powered answers when you're holding a real piece of trash and don't know where to put it.

* **Features:**
    * **Real-Time AI:** Uses the phone's camera to scan any item.
    * **Custom Model:** We trained our own `waste_classifier.h5` model on hundreds of images using TensorFlow in Google Colab.
    * **On-Device ML:** The app uses the **RunAnywhere SDK** to run the 77MB AI model directly on the phone. This makes it incredibly fast, private, and able to work *without an internet connection*.
    * **AI-Driven Development:** The entire app, including the RunAnywhere SDK integration and bug-fixing, was built using **Firebender** as our AI coding partner.

---

## ⚙️ How to Test Our Project

You will need to test the two parts separately.

### 1. How to Run the Web Game

This part is simple and can be run in 30 seconds.

1.  In this GitHub repository, open the `/webgame` folder.
2.  Download the `index.html`, `style.css`, and `script.js` files.
3.  Open the `index.html` file in any web browser to play the game.

### 2. How to Access & Use the Mobile App (AI Sorter)

**\[!\] IMPORTANT:** The complete, functional Android project (including the 77MB AI model) is **too large for GitHub.** We have hosted the final, zipped project on Google Drive.

1.  **Download the Project:**
    * [**Click here to download the `Hackss.zip` file from Google Drive.**](https://drive.google.com/file/d/1ylVgxwj5k3Wlq80id03lewHXuNPqijUQ/view)
    *(This is a clean, single `.zip` file containing the complete Android Studio project.)*

2.  **Unzip and Open:**
    * Unzip the `Hackss.zip` file.
    * Open **Android Studio**.
    * Go to **File &rarr; Open** and select the `Hackss` folder you just unzipped.

3.  **Wait for Gradle Sync:**
    * The project will sync all its files. This may take a minute. You will know it's ready when the loading bar at the bottom disappears.

4.  **Run the App:**
    * Click the **Green "Play" button** to build and run the app on an Android Emulator or, for the best experience, on a **real, physical Android device**.

5.  **How to Use the App:**
    * Once the app is running, point your camera at a piece of waste (e.g., a bottle, an apple core).
    * Tap the "Scan Waste" (or camera) button.
    * The app will take a picture, the AI model will analyze it, and the screen will display the result: **"Wet Waste"** or **"Dry Waste"**.

---

## 💻 Tech Stack

* **Web Game:** HTML, CSS, JavaScript
* **Mobile App:** Kotlin, Jetpack Compose, Android Studio
* **AI Model:** Python, TensorFlow, Keras, Google Colab (for training)
* **Hackathon Tools:**
    * **Firebender:** Used for "vibe coding," generating new features, and fixing complex compilation bugs.
    * **RunAnywhere SDK:** The core engine of our mobile app, allowing us to run a large, custom AI model on-device.
```eof
