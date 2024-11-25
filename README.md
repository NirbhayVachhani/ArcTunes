# ArcTunes - Music Player App

ArcTunes is a music player app built using **React Native**, with **Firebase Authentication** for user login/sign-up functionality, and **Expo** for development and testing. This app uses **Google OAuth** and **email/password** based login to provide a seamless user experience.

The app is developed to offer a consistent user interface with features such as a splash screen, authentication, home screen with user profile, and a music playback section.

## Table of Contents
- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Features
- **Firebase Authentication** (Google Sign-in and Email/Password Authentication).
- **Bottom Tab Navigation** for easy switching between Home, Profile, and Music screens.
- **React Navigation** integration for smooth user experience.
- **Google Sign-In** for one-tap login.
- **Firebase Storage** for user profile images and media.

## File Structure
The application is structured as follows:

```
ArcTunes/
│
├── assets/                           # All static assets
│   ├── images/                       # Images like splash screen, icons, etc.
│   ├── fonts/                        # Custom fonts
│   └── audio/                        # Optional - sample audio files (not from Firebase)
│
├── src/                              # Main application source code
│   ├── App.js                        # Main entry point for the React Native app
│   ├── firebaseConfig.js             # Firebase configuration setup
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── Button/                   # Custom Button components
│   │   │   └── CustomButton.js
│   │   ├── Input/                    # Custom Input components
│   │   │   └── CustomInput.js
│   │   ├── MusicPlayer/              # Music player components
│   │   │   └── MusicPlayer.js        # Component to handle music playback
│   │   └── Header/                   # Header component used across screens
│       │   └── Header.js
│   │
│   ├── screens/                      # All screen components
│   │   ├── SplashScreen/             # Splash screen for app startup
│   │   │   └── SplashScreen.js
│   │   ├── Auth/                     # Authentication screens (Login/Sign up)
│   │   │   └── AuthScreen.js         # Combined login/signup screen
│   │   │
│   │   ├── Home/                     # Main user-facing home screen
│   │   │   └── HomeScreen.js         # Home page that shows user's profile info
│   │   │
│   │   ├── Profile/                  # Profile-related screens
│   │   │   └── ProfileScreen.js      # User profile details like email and profile picture
│   │   │
│   │   └── Music/                    # Music-related screens
│       │   ├── MusicScreen.js        # Screen to display and play music
│       │   └── MusicListScreen.js    # Screen to list all available tracks
│
│   ├── navigation/                   # Navigation setup
│   │   └── BottomTabNavigator.js     # Bottom tab navigation setup for easy switching
│   │   └── AppNavigator.js           # Main stack navigator managing auth and main app
│   │
│   ├── services/                     # Firebase or API interaction logic
│   │   ├── firebaseAuth.js           # Authentication functions for login/signup
│   │   ├── firebaseStorage.js        # Firebase Storage to get music URLs
│   │
│   ├── context/                      # React context files for state management
│   │   └── AuthContext.js            # User authentication context
│   │
│   ├── styles/                       # Global and screen-specific styles
│   │   ├── GlobalStyles.js           # Global styles shared across components
│   │   └── screenStyles.js           # Styles for individual screens
│   │
│   └── utils/                        # Utility files (helpers, constants, etc.)
│       ├── constants.js              # Constant variables and strings used throughout the app
│       └── helpers.js                # Helper functions like formatting, calculations, etc.
│
├── .gitignore                        # Files and directories to ignore in Git
├── app.json                          # Expo configuration for the project
├── package.json                      # Project dependencies and scripts
├── package-lock.json                 # Lock file for npm dependencies
└── README.md                         # Documentation about the project
```

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ArcTunes.git
   cd ArcTunes
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a new project in Firebase.
   - Add your Android and iOS apps.
   - Copy the Firebase configuration details and replace them in `firebaseConfig.js`.

4. **Install Expo CLI**:
   ```bash
   npm install -g expo-cli
   ```

5. **Run the app**:
   ```bash
   npx expo start
   ```
   - To run the app on your phone, scan the QR code using the Expo Go app (available on both Android and iOS).

## Usage
- **Sign-Up or Log-In** using either **Google Sign-In** or **Email/Password**.
- **Navigate** between screens using the bottom tab bar for **Home**, **Profile**, and **Music**.
- **Play Music** directly from the **Music** section, fetching tracks from Firebase Storage.
- **Edit Profile Information** in the **Profile** section.

## Dependencies
- **React Navigation**: Navigation between screens.
- **Firebase**: Authentication and storage.
- **Expo Auth Session**: Handles Google OAuth authentication.
- **Expo**: For building and running the app.
- **React Native Vector Icons**: Icons for tab navigation.

## Screenshots
Add screenshots of the app running on the device or emulator.

## Contributing
1. **Fork** the repository.
2. **Create** a new branch.
3. **Commit** your changes.
4. **Push** to your fork and submit a **pull request**.

### Issues
Please report bugs or suggest new features by creating an **issue** in this repository.

Feel free to contribute to making ArcTunes even better!

