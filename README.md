# 🚀 Modern Admin Dashboard

A fully responsive, feature-rich Admin Dashboard built with modern web technologies. Designed for seamless data management, analytics tracking, and interactive visualizations.

![Dashboard Preview](./public/screenshot.png) <!-- (اختياري: يمكنك إضافة لقطة شاشة لمشروعك هنا لاحقاً) -->

---

## 🛠️ Tech Stack

* **Front-end Framework:** React (with Vite)
* **Language:** TypeScript
* **UI Library & Styling:** Material UI (MUI)
* **Routing:** React Router DOM
* **Forms & Validation:** React Hook Form
* **Charts & Visualizations:** Nivo Charts (Line, Bar, Pie, Geography)
* **Icons:** Material UI Icons

---

## ✨ Features

* **Responsive Sidebar & Navigation:** Collapsible sidebar with multi-level routing and active route highlighting.
* **Data Management Tables:** Interactive data grids for managing Team members, Contacts, and Invoices.
* **Forms & Inputs:** Profile creation and configuration forms managed via React Hook Form.
* **Interactive Charts & Analytics:** 
  * 📈 Line Chart (Revenue & performance tracking)
  * 📊 Bar Chart (Data distribution)
  * 🥧 Pie Chart (Proportional breakdown)
  * 🗺️ Geography Chart (Map-based visual data)
* **Interactive Calendar:** Integrated scheduling and event management page.
* **FAQ Section:** Accordion-based frequently asked questions page.
* **Dark / Light Theme Support:** Built-in dynamic theme toggling using Material UI's palette system.

---

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI components (Header, Sidebar, Topbar, etc.)
├── pages/            # Page-level components (Dashboard, Team, Contacts, Charts, Form, etc.)
├── theme/            # Material UI custom theme configurations
└── App.tsx           # Main application entry and routing setup