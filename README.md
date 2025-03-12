# **Mega Blog Project** 🚀  

## **📌 Description**  
**Mega Blog** is a **full-featured blogging platform** designed for modern web development.  
It offers **rich text editing, user authentication, post management, and dynamic content rendering** with a sleek and responsive UI.  

This project is built using **React (with Vite), Tailwind CSS, Redux Toolkit for state management, and Appwrite as the backend**.  
It also leverages **TinyMCE for rich text editing, HTML React Parser for rendering HTML in React, and React Hook Form for seamless form validation**.  

---

## 📸 Screenshots  

### 🏠 Homepage  
<img src="https://github.com/athrocks/Blog-Website/blob/main/imgs/home.png" alt="Homepage Preview" width="600"/>

### 🔐 Login Page  
<img src="https://github.com/athrocks/Blog-Website/blob/main/imgs/login.png" alt="Login Page" width="600"/>

### ✏️ Rich Text Editor  
<img src="https://github.com/athrocks/Blog-Website/blob/main/imgs/editor.png" alt="Post Editor" width="600"/>

### 📚 Blog Posts  
<img src="https://github.com/athrocks/Blog-Website/blob/main/imgs/posts.png" alt="All Posts" width="600"/>

---

## **🛠 Technologies Used**  

| Technology            | Description |
|-----------------------|-------------|
| [React](https://reactjs.org/docs/getting-started.html) | A JavaScript library for building fast and interactive user interfaces. |
| [Vite](https://vitejs.dev/guide/) | A fast and optimized build tool for modern web projects. |
| [Tailwind CSS](https://tailwindcss.com/docs) | A utility-first CSS framework for custom UI design. |
| [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) | The recommended way to manage state in React apps. |
| [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview) | Enables seamless client-side navigation. |
| [Appwrite](https://appwrite.io/docs) | Open-source backend-as-a-service (BaaS) for authentication, database, and storage. |
| [TinyMCE React](https://www.tiny.cloud/docs/integrations/react/) | A powerful rich text editor for creating and editing blog posts. |
| [HTML React Parser](https://www.npmjs.com/package/html-react-parser) | Converts raw HTML strings into React components. |
| [React Hook Form](https://react-hook-form.com/) | A lightweight library for form validation and management. |

---

## **📌 Features**  

✔️ **User Authentication** – Secure login and signup using Appwrite.  
✔️ **Create, Edit & Delete Posts** – Full CRUD functionality for blog posts.  
✔️ **Rich Text Editing** – TinyMCE provides a robust text editor with formatting options.  
✔️ **Responsive UI** – Designed with **Tailwind CSS** for a smooth experience on all devices.  
✔️ **State Management** – Handled efficiently using **Redux Toolkit**.  
✔️ **Fast Navigation** – Powered by **React Router v6** for seamless client-side routing.  
✔️ **Appwrite Integration** – **User authentication, database storage, and media uploads** are fully integrated.  

---

## **📥 Installation & Setup**  

### **🔹 Prerequisites**  
Make sure you have the following installed:  
- **[Node.js](https://nodejs.org/) (v16+)**  
- **[npm](https://www.npmjs.com/)**  

### **🔹 Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### **🔹 Install Dependencies**
```bash
npm install
```

### **🔹 Set Up Environment Variables**
Create a `.env` file in the root directory and add your Appwrite credentials:
```plaintext
VITE_APPWRITE_URL=your-appwrite-url
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
VITE_TINYMCE_API_KEY=your-tinymce-api-key
```

### **🔹 Run the Development Server**
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## **🛠 Installation via Individual Packages**  
If you're setting up from scratch, install the required dependencies:  
```bash
npm create vite@latest
npm install @reduxjs/toolkit react-redux react-router-dom
npm install appwrite @tinymce/tinymce-react html-react-parser
npm install react-hook-form tailwindcss postcss autoprefixer
```

---

## **🛠 Folder Structure**  
```
📂 mega-blog-project
 ┣ 📂 src
 ┃ ┣ 📂 appwrite          # Appwrite configuration
 ┃ ┣ 📂 components        # Reusable UI components (Header, Footer, Buttons, Forms, etc.)
 ┃ ┣ 📂 pages             # Page components (Home, Login, Signup, Posts, etc.)
 ┃ ┣ 📂 store             # Redux state management
 ┃ ┣ 📂 styles            # Global styles and Tailwind CSS config
 ┃ ┣ 📜 App.jsx           # Main App component
 ┃ ┣ 📜 main.jsx          # Entry point
 ┃ ┗ 📜 index.css         # Global styles
 ┣ 📜 .env                # Environment variables (Appwrite credentials)
 ┣ 📜 package.json        # Dependencies and scripts
 ┣ 📜 README.md           # Project documentation
 ┗ 📜 vite.config.js      # Vite configuration
```

---

## **📜 License**  
This project is licensed under the **MIT License**. Feel free to modify and use it as you like.

---

## **🙌 Contributing**  
We welcome contributions!  
1. **Fork** the repository.  
2. **Create a branch** (`git checkout -b feature-branch`).  
3. **Commit changes** (`git commit -m "Added new feature"`).  
4. **Push to GitHub** (`git push origin feature-branch`).  
5. **Open a Pull Request** and describe your changes.

---

## **📞 Contact & Support**  
If you need any help, feel free to reach out:  
📧 **Email**: atharva0709pardeshi@gmail.com
🔗 **GitHub**: [my github](https://github.com/athrocks)  

---
