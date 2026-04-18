# OpenLearn Local

Offline Vue.js mobile application for OpenLearn, built with Capacitor for Android deployment.

## Project Overview

This is a Capacitor-based Vue.js application designed to work offline. The app provides access to OpenLearn educational content on mobile devices.

## Tech Stack

- Vue.js 3
- TypeScript
- Vite
- Capacitor (Android)
- Vue Router

## Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Android SDK

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build web app
npm run build

# Sync to Android
npx cap sync android

# Open in Android Studio
npx cap open android
```

## Project Structure

```
vue-frontend/
├── android/              # Capacitor Android project
│   ├── app/             # Android app source
│   └── capacitor-cordova-android-plugins/
├── src/                 # Vue.js source (when available)
├── dist/                # Build output
├── node_modules/        # Dependencies
└── README.md
```

## Build Artifacts

The following are generated during build and should NOT be committed:
- `dist/` - Web build output
- `node_modules/` - npm dependencies
- `android/.gradle/` - Gradle cache
- `android/app/build/` - Android build output
- `android/build/` - Android build output
