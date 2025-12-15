# Habit Tracker 🎯

A modern, full-featured habit tracking application built with React, Vite, and Firebase. Track your daily habits, build streaks, and achieve your goals!

## 🌟 Features

### Core Functionality
- **Habit Management**
  - Create, read, update, and delete habits
  - Set habit categories (Morning, Work, Fitness, Sleep, Study, Health, etc.)
  - Set reminder times for each habit
  - Add descriptions and photos to habits

- **Habit Status Tracking**
  - Mark habits as complete or pending
  - Track completion status in real-time
  - Visual indicators for habit status

- **Streak System** 🔥
  - Automatic streak counting for completed habits
  - Top 5 streaks display with visual badges
  - Emoji indicators (🏆 for 7+ days, ⭐ for 3-6 days, 🔥 for 1-2 days)
  - Persistent streak tracking in localStorage

- **Analytics Dashboard**
  - Completion percentage ring chart using Recharts
  - Real-time statistics showing completed vs pending habits
  - Visual progress tracking with hollow-center donut chart

- **Public/Private Habits**
  - Toggle visibility between public and private habits
  - Browse and search public habits from other users
  - Full-text search across title, description, category, and creator name

- **Authentication**
  - Firebase authentication integration
  - User registration and login
  - Secure route protection with PrivateRoutes
  - Social login support

### User Interface
- **Responsive Design**
  - Mobile-first approach
  - Tailwind CSS + DaisyUI components
  - Fully responsive grid layouts
  - Adaptive navigation

- **Search & Filter**
  - Real-time search functionality
  - Multi-field search (title, description, category, creator)
  - Instant filtering with visual feedback
  - Case-insensitive search

- **Calendar Integration**
  - Interactive calendar using Cally library
  - Visual date selection
  - Track habits by date

- **Toast Notifications**
  - React Hot Toast for user feedback
  - Success, error, and info messages
  - Non-intrusive notifications

## 📋 Project Structure

```
src/
├── Components/
│   ├── HabitCard/          # Reusable habit card component
│   ├── SearchBar/          # Search functionality component
│   ├── Navbar/             # Navigation component
│   ├── Footer/             # Footer component
│   ├── Streaks/            # Streak display component
│   ├── Loading/            # Loading state component
│   └── SocialLogin/        # Social authentication component
├── Pages/
│   ├── HomePublic/         # Public landing page
│   ├── HomePrivate/        # Private dashboard with stats
│   ├── AddHabits/          # Create new habit page
│   ├── MyHabits/           # User's habit management page
│   ├── PublicHabit/        # Browse public habits
│   ├── LogIn/              # Login page
│   ├── Register/           # Registration page
│   ├── Notfound/           # 404 page
│   └── ConditionalHome/    # Route conditional rendering
├── Routes/
│   ├── router.jsx          # Main router configuration
│   └── PrivateRoutes.jsx   # Protected route wrapper
├── context/
│   ├── AuthContext.jsx     # Auth context definition
│   └── AuthProvider.jsx    # Auth provider component
├── Hook/
│   ├── UseAuth.jsx         # Authentication hook
│   ├── useAxios.jsx        # Axios hook for HTTP
│   └── useSecureAxios.jsx  # Secure axios with auth headers
├── Layout/
│   └── MainLayout.jsx      # Main layout wrapper
├── firebase/
│   └── firebase.inti.js    # Firebase configuration
└── assets/                 # Images and static files
```

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library with hooks
- **Vite 7** - Lightning-fast build tool
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI 5** - Component library for Tailwind

### State Management & Data
- **localStorage** - Client-side persistent storage
- **React Hooks** - useState, useEffect for state management

### Charts & Visualization
- **Recharts 3.6** - React chart library
- **Cally 0.8** - Interactive calendar component

### Authentication & Backend
- **Firebase 12** - Authentication and real-time database
- **Axios** - HTTP client for API requests

### UI/UX
- **React Hot Toast** - Toast notifications
- **SweetAlert2** - Beautiful alert dialogs
- **Lucide React** - Icon library
- **React Icons** - Additional icon set

## 🛠️ Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/MahfujulSagor/Habbit_Tracker_Client.git
   cd Habbit_Tracker_Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Add your Firebase config to `src/firebase/firebase.inti.js`
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     // ... other config
   };
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📱 User Guide

### For New Users
1. Click "Let's get started" on the landing page
2. Sign up with email or social login
3. Create your first habit with title, description, and category
4. Set a reminder time for the habit
5. Choose public or private visibility

### Creating Habits
- Navigate to "Add Habit"
- Fill in habit details:
  - **Title** - Name of your habit
  - **Description** - Details about the habit
  - **Category** - Type (Morning, Fitness, Study, etc.)
  - **Time** - Reminder time
  - **Visibility** - Public or Private
  - **Photo** - Optional habit image

### Tracking Progress
- View pending habits in the dashboard
- Click "Complete" to mark a habit as done
- Watch your streak grow with each completion
- Check analytics in the dashboard statistics
- Browse top streaks to stay motivated

### Managing Habits
- Edit habits by clicking the edit button
- Delete habits with confirmation
- Filter habits by visibility
- Search public habits by multiple criteria

### Dashboard Features
- **Pending Habits** - All incomplete tasks for the day
- **Completed Habits** - Finished tasks with reduced opacity
- **Streaks Section** - Top 5 active streaks with emoji badges
- **Statistics** - Completion percentage ring chart
- **Calendar** - Track habits by date

## 💾 Data Storage

### localStorage Structure
Habits are stored as a JSON array in localStorage:
```javascript
[
  {
    "_id": 1765445138619,
    "name": "User Name",
    "email": "user@example.com",
    "title": "Morning Run",
    "description": "30 minute morning jog",
    "category": "fitness",
    "photoURL": "",
    "time": "06:00",
    "visibility": "public",
    "createdAt": "2025-12-11T09:25:38.619Z",
    "streak": 5,
    "status": 0  // 0 = pending, 1 = completed
  }
]
```

## 🔐 Authentication Flow

1. User visits app → ConditionalHome checks authentication status
2. If logged in → Shows HomePrivate (dashboard)
3. If not logged in → Shows HomePublic (landing page)
4. User can register or login via Firebase
5. PrivateRoutes protect dashboard and habit pages
6. Auth context provides user info to all components

## 🎨 Design System

### Colors
- **Primary** - Purple to Pink gradient (#a855f7 to #ec4899)
- **Success** - Green (#10b981)
- **Warning** - Yellow/Orange (for pending)
- **Background** - Light gray (#f9fafb)

### Components
- Using DaisyUI for consistency
- Custom styling with Tailwind CSS
- Responsive grid layouts (mobile, tablet, desktop)

## 🔍 Key Features Implementation

### Search Functionality
- Real-time filtering across multiple fields
- Case-insensitive search
- Searches: title, description, category, creator name
- Instant visual feedback on no results

### Streak System
- Incremented when habit marked complete
- Top 5 displayed with visual hierarchy
- Persistent storage in localStorage
- Emoji indicators for motivation

### Charts & Analytics
- Donut/ring chart with Recharts
- Shows completion percentage
- Real-time update on completion
- Legend with count indicators

### Responsive Layout
- 2/3 and 1/3 split on desktop
- Full width on mobile
- Grid-based layout system
- Flexible card components

## 🚦 Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public/Private | Home (Conditional) |
| `/login` | Public | Login page |
| `/register` | Public | Registration page |
| `/addHabit` | Private | Create new habit |
| `/myHabit` | Private | Manage user habits |
| `/publicHabit` | Public | Browse public habits |
| `*` | All | 404 Not Found |

## 🔄 Component Communication

- **Auth Context** - Provides user data globally
- **localStorage Events** - Real-time updates across tabs
- **Props Drilling** - Component-specific data passing
- **State Lifting** - Parent manages child state

## ⚠️ Current Limitations

- Data stored in localStorage only (client-side)
- No backend persistence
- No multi-device sync
- No offline-first functionality
- Limited to browser storage capacity

## 🚀 Future Enhancements

- [ ] Backend integration with MongoDB
- [ ] Multi-device synchronization
- [ ] Advanced analytics and reports
- [ ] Habit recommendations based on patterns
- [ ] Social features (friend streaks, challenges)
- [ ] Push notifications
- [ ] Habit templates
- [ ] Export/import functionality
- [ ] Dark mode support
- [ ] Offline mode with service workers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Mahfujul Sagor**
- GitHub: [@MahfujulSagor](https://github.com/MahfujulSagor)
- Repository: [Habbit_Tracker_Client](https://github.com/MahfujulSagor/Habbit_Tracker_Client)

## 🙏 Acknowledgments

- DaisyUI for beautiful UI components
- Firebase for authentication
- Recharts for data visualization
- React community for amazing tools and libraries
- Tailwind CSS for utility-first styling

## 📞 Support

For support, questions, or suggestions, please open an issue on GitHub.

---

**Happy Habit Building! 🎯🔥**
