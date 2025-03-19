# iNote - Simple Note-Taking Web App

## Overview
**iNote** is a lightweight and intuitive note-taking web application built with **React.js** and **Tailwind CSS**. It allows users to create, edit, delete, and mark notes as completed while persisting data in local storage. The app provides a clean and minimal UI with smooth animations for an enhanced user experience.

## Features
- 📝 **Add Notes**: Quickly jot down tasks or notes.
- ✏️ **Edit Notes**: Modify existing notes seamlessly.
- 🗑️ **Delete Notes**: Remove notes when no longer needed.
- ✅ **Mark as Completed**: Check off completed notes.
- 📋 **Copy Notes**: Easily copy note content to the clipboard.
- 💾 **Local Storage Support**: Notes persist even after refreshing the page.
- 🎨 **Beautiful UI**: Responsive design with smooth animations.

## Tech Stack
- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **UUID Generation:** `uuid`

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** installed on your machine.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/iNote.git
   cd iNote
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:5173/
   ```

## Project Structure
```
📂 iNote
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── 📄 package.json
├── 📄 README.md
```

## Usage
- Navigate to **Home Page** and click **Get Started**.
- On the **Tasks Page**, add your notes in the textarea and click **Add Note**.
- Click **Edit** to modify a note or **Delete** to remove it.
- Click on a note to open a modal with full details.
- Use the **Copy Note** button to copy the text to the clipboard.
- Press the **Escape** key to close the modal.
---