# Habit Tracker PWA

A production-style **Habit Tracker App** built with **Next.js (App Router)**, focusing on clean architecture, predictable state flow, and client-side persistence.

👉 **Live App:** [https://habit-trackr-theta.vercel.app/habits](https://habit-trackr-theta.vercel.app/habits)

---

## 🚀 Running Locally

```bash
git clone https://github.com/luz-vndra/habit-trackr.git
cd habit-trackr
npm install
npm run dev
```

App runs at: `http://localhost:3000`

---

## 📦 Deployment

Deployed on **Vercel**
🔗 [https://habit-trackr-theta.vercel.app/habits](https://habit-trackr-theta.vercel.app/habits)

---

## ✨ Features

* Create, view, and delete habits
* Habit-scoped analytics routing
* Persistent storage using **IndexedDB**
* Responsive dashboard UI
* Offline-friendly, client-first design
* PWA-ready deployment

---

## 🛠 Tech Stack

* **Next.js (App Router)**
* **React + TypeScript**
* **IndexedDB** (client-side persistence)
* **Tailwind CSS**
* **Vercel** (deployment)

---

## 🎯 Intent

This project was built to demonstrate:

* Practical **Next.js App Router** usage
* Thoughtful **frontend architecture decisions**
* Client-side persistence beyond `localStorage`
* Production-minded React patterns suitable for scaling

---

## 🧠 Architecture Overview

This app follows a **feature-oriented, layered frontend architecture**:

* **UI Layer**
  Client components focused purely on rendering and user interaction
  (`HabitList`, `NewHabitForm`, Analytics views)

* **Domain Layer**
  Strongly typed domain models (e.g. `Habit`) defining the core business shape and rules

* **Storage Layer**
  A dedicated IndexedDB abstraction responsible for all persistence logic
  (CRUD operations, migrations, and data isolation)

* **Routing & State Flow**

  * App Router used for **clear URL-driven state** (`/habits`, `/habits/[id]/analytics`)
  * Local state scoped per feature to avoid global state overuse
  * Side effects isolated to data-access utilities

This separation keeps the UI stateless where possible, improves testability, and allows the persistence layer to be swapped (e.g. API / Prisma) without impacting components.




