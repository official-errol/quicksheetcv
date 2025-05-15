# QuickSheet CV - React Resume Builder
*A modern, responsive resume builder built with React*

## 📝 Overview

QuickSheet CV is a sleek, user-friendly web application that helps you create professional resumes in minutes. Built with React.js, this tool offers:

- Intuitive form-based resume creation
- Real-time preview of your resume
- Multiple template options
- PDF export functionality
- Mobile-responsive design

## ✨ Features

### 📋 Resume Sections
- **Personal Information** - Name, contact details, professional summary
- **Work Experience** - Add multiple positions with details
- **Education** - Academic background and certifications
- **Skills** - Highlight your technical and soft skills
- **Projects** - Showcase your portfolio
- **Certifications** - Display professional achievements

### 🎨 Customization Options
- Multiple clean, professional templates
- Font and color scheme customization
- Section reordering
- Optional section inclusion

### 💾 Export Options
- Download as PDF
- Save to local storage
- Copy shareable link

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quicksheet-cv.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quicksheet-cv
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🛠️ Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - For navigation between pages
- [Material-UI](https://mui.com/) - For UI components and styling
- [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) - For PDF generation
- [React Icons](https://react-icons.github.io/react-icons/) - For icon library

## 📂 Project Structure

```
quicksheet-cv/
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ cv.png
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ a34f9d1faa5f3315-s.p.woff2
│  ├─ components
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  ├─ PreviewModal.jsx
│  │  ├─ ResumeForm.jsx
│  │  ├─ ResumePreview.jsx
│  │  └─ Section.jsx
│  ├─ data.jsx
│  ├─ hooks
│  │  └─ ExportToPDF.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ utils
│     └─ Handlers.jsx
└─ vite.config.js
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspiration from various resume builders
- Open source community for amazing libraries
- Contributors who helped improve this project

---

**QuickSheet CV** - Build your perfect resume in minutes! 🚀