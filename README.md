# 🌉 Knowledge Gateway AI: Curriculum-Linked Learning Platform

** Knowledge Gateway** is an AI-powered educational platform designed to help students discover logical connections between different academic subjects. Built specifically for the **Ethiopian National Curriculum (Grades 9-12)**, it uses Natural Language Processing to bridge the gap between complex topics in Biology, Chemistry, Physics, and Mathematics.

---

## 🚀 Core Features

- **AI-Powered Topic Bridging:** Uses OpenAI's GPT models to analyze Table of Contents and find structural relationships between subjects (e.g., how "Osmosis" in Biology relates to "Pressure" in Physics).
- **Curriculum-Specific Search:** A deep-search engine that queries a MongoDB Atlas database containing the full Grade 9-12 Ethiopian curriculum.
- **Secure Passwordless Auth:** Implements a robust authentication system using **OTP (One-Time Passwords)**, Bcrypt hashing, and JWT (JSON Web Tokens).
- **Progress Tracking:** Automatically saves AI-generated insights and search history to individual user profiles for long-term study.
- **Resource Mapping:** Recommends curated external resources like Khan Academy and YouTube based on the AI's bridge analysis.

---

## 🛠️ Technical Stack`

- **Frontend:** React.js, Tailwind CSS (Clean, Responsive UI)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud NoSQL)
- **AI Integration:** OpenAI API (GPT-4o-mini & GPT-3.5-turbo)
- **Security:** JWT, Bcrypt, Nodemailer (OTP Service)

---
