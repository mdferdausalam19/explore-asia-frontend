# 🌍 ExploreAsia Frontend

**ExploreAsia** is a tourism-focused web application that highlights the wonders of Asia. Users can discover, add, and manage tourist spots, ensuring a seamless and interactive experience.

## 🌐 Live Website

[ExploreAsia Frontend](https://explore-asia-frontend.vercel.app/)

## 📂 Repository

[Frontend Repository](https://github.com/mdferdausalam19/explore-asia-frontend)

## 📊 Key Features

### 🌟 Global Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop.
- **User Authentication**: Login and register with Firebase Authentication.
- **Private Routes**: Protected routes for adding, updating, and managing tourist spots.
- **Toast Notifications**: Success and error notifications powered by react-hot-toast and sweetalert2.

### 🌇 Home Page

- **Banner**: A dynamic banner implemented with react-simple-typewriter showcasing engaging text animations.
- **Tourist Spots Section**: Displays key tourist spots added by users with a "View Details" button.

### ➕ Add Tourist Spot Page

- A form to add new tourist spots, including fields for name, location, cost, seasonality, etc.
- Data is validated with react-hook-form.

### 🔍 All Tourist Spots Page

- Displays all tourist spots added by users with sorting functionality based on average cost.

### 🔢 My List Page

- Shows all tourist spots added by the currently logged-in user in a tabular format with "Update" and "Delete" options.

### 🏛️ Tourist Spot Details Page

- Private route displaying detailed information about a specific tourist spot.

### 🔄 Update Tourist Spot Page

- Allows users to update tourist spots they have added.

### 🔆 Other Features

- **Loading Spinner**: Indicates data loading state.
- **404 Page**: A well-designed error page for invalid routes.

## 🛠️ Technologies Used

### ⚡ Frameworks & Libraries:

- **React**: Frontend library.
- **React Router DOM**: For client-side routing.
- **Tailwind CSS & DaisyUI**: For styling.

### ➕ Additional Dependencies:
  - `firebase`
  - `react-hot-toast`
  - `react-icons`
  - `react-simple-typewriter`
  - `sweetalert2`

## 🗂️ Project Structure

```plaintext
explore-asia-frontend/
├── public/
│   └── images
├── src/
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Banner.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── touristSpots/
│   │   │   ├── TouristSpotCard.jsx
│   │   │   └── TouristSpotsContainer.jsx
│   │   └── ui/
│   │       ├── LoadingSpinner.jsx
│   │       └── SocialSignIn.jsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── useAuth.js
│   │   └── touristSpots/
│   │       ├── AddTouristSpot.jsx
│   │       ├── AllTouristSpots.jsx
│   │       ├── MyList.jsx
│   │       ├── TouristSpotDetails.jsx
│   │       └── UpdateTouristSpot.jsx
│   ├── firebase/
│   │   └── firebase.config.js
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── providers/
│   │   └── AuthProvider.jsx
│   ├── routes/
│   │   ├── AppRouter.jsx
│   │   └── PrivateRoute.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🚀 Getting Started

To run the project locally, follow these steps:

### Prerequisites

Ensure that you have **Node.js** and **npm** installed on your system.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mdferdausalam19/explore-asia-frontend
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd explore-asia-frontend
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Up Firebase**:

   - Replace the environment variables with your Firebase configuration in `.env.local`.

5. **Run the Development Server**:

   ```bash
   npm run dev
   ```

6. **Access the Application**:
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 📚 Resources

### **Frameworks & Libraries**:

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

### **Firebase**:

- [Firebase Documentation](https://firebase.google.com/docs)

### **Packages**:

- [react-hot-toast](https://react-hot-toast.com/)
- [sweetalert2](https://sweetalert2.github.io/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-hook-form](https://react-hook-form.com/)
- [react-simple-typewriter](https://react-simple-typewriter.vercel.app/)
