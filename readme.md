# 👨‍💻 Portfolio Website

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

A fully responsive, full-stack personal portfolio website designed to showcase academic research, professional experience, and technical projects. Built with a focus on performance, maintainability, and clean design.

**[🔴 Live Demo]()** *(will be live by January 2026)*

---

## 🛠️ Features

* **Dynamic Content Management:** Custom Django Admin panel to easily manage and update:
    * **Research & Publications:** Dedicated section for academic work with publication links.
    * **Experience Timeline:** Professional history with company logos and descriptions.
    * **Academic Projects:** Showcase of university coursework and thesis work.
* **Dual-Language Resume:** Support for uploading and downloading CVs in multiple languages (English/German).
* **Responsive UI:** Mobile-first design using **Tailwind CSS** for a seamless experience on all devices.
* **Contact System:** Functional contact form storing messages in the database.
* **Secure Media Handling:** Organized management of profile images, project screenshots, descriptions and PDFs.

---

## 🧠 Skills & Technologies Demonstrated

This project serves as a practical demonstration of the following technical skills:

| Category | Technologies |
| :--- | :--- |
| **Backend Development** | **Django**, Python, ORM, Class-Based Views |
| **Database** | **MySQL** (Production), Database Modeling |
| **Frontend Development** | **Tailwind CSS**, HTML5, JavaScript, Responsive Design |
| **DevOps & Tools** | **Dotenv** (Secret Management)|**Git**, WhiteNoise (Static Files), npm |
| **Design** | UI/UX Principles, Mobile-First Architecture |

---

## 📦 Requirements

Before running the project locally, ensure you have the following installed:

* **Python** (v3.10 or higher)
* **MySQL** (for database handling)
* **Node.js & npm** (for compiling Tailwind CSS)
* **Git**

---

## 🔧 Usage (Run Locally)

Follow these steps to get the project running on your own machine.
### 1. Clone the Repository
```bash
git clone https://github.com/Urmee63/myportfolio.git
cd YOUR_REPO_NAME
```
### 2. Set Up Virtual Environment
```bash
# Create the environment
python -m venv venv

# Activate it
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
```
### 3. Environment Configuration (.env)

Create a .env file in the root directory (same level as manage.py) and add your credentials:

```bash
SECRET_KEY=your_secret_key
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

# Database (MySQL)
DATABASE_URL=mysql://your_username:your_password@localhost:3306/your_DB
# Tailwind 
NPM_BIN_PATH = your_npm_bin_path #once the requirements are satisfied 
```
### 4. Install Backend Dependencies
```bash
pip install -r requirements.txt
```
### 5. Install Frontend Dependencies (Tailwind)
```bash
# Install Node modules for Tailwind
npm install
```
### 6. Build the CSS
You must compile the Tailwind classes before running the server.
```bash
# One-time build
npm run build

# OR Watch mode (for development)
npm run watch
```
### 6. Run the Server
```bash
# Apply database migrations
python manage.py makemigrations
python manage.py migrate

# Create a superuser (to access the admin panel)
python manage.py createsuperuser

# Start the server
python manage.py runserver
```
Open your browser to http://127.0.0.1:8000/.

### 📂 Project Structure
```bash
myportfolio
├── myportfolio/  
│   ├── settings.py         
│   └── urls.py
├── portfolio/          
│   ├── templates/      
│   ├── static/ 
│   ├── admin.py               
│   ├── apps.py            
│   ├── models.py           
│   ├── views.py
│   └── urls.py          
├── tailwind/       
├── media/              
├── static/
├── templates/
│   ├── partials
│   └── portfolio    
├── .env                    
└── manage.py            
```