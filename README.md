# Quick Test by Tahir - Capacitor Android Wrapper

This is a complete, production-ready Capacitor Android wrapper project for **Quick Test by Tahir** (`com.tahircreations.app`), pre-configured for the **Google Play Store**.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18 or higher ([Download](https://nodejs.org))
- **Android Studio**: Hedgehog, Iguana, Koala, or Ladybug ([Download](https://developer.android.com/studio))
- **JDK 17**: Pre-bundled with Android Studio

### 2. Install Dependencies
In the root directory of this unzipped project:
```bash
npm install
```

### 3. Sync Web Assets with Android
```bash
npx cap sync android
```

### 4. Test in Android Emulator / Real Device
Option A: Open in Android Studio GUI
```bash
npx cap open android
```
*(Then click the green "Run" play button in Android Studio)*

Option B: Run from Command Line
```bash
npx cap run android
```

---

## 📦 Building for Google Play Store (Release .AAB)

Google Play Store requires an **Android App Bundle (.aab)** signed with a release keystore, targeting **Android 14 (API 34)** or higher.

### Step 1: Generate Release Keystore
Run this command in your terminal:
```bash
keytool -genkey -v -keystore release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```
*(Save your keystore file and passwords safely! You will need them for every app update!)*

### Step 2: Build Signed Release App Bundle
Navigate to the `android` directory:
```bash
cd android
./gradlew bundleRelease
```
*(On Windows Command Prompt, use `gradlew.bat bundleRelease`)*

The release bundle will be created at:
`android/app/build/outputs/bundle/release/app-release.aab`

### Step 3: Sign your .AAB (if not configured in build.gradle)
You can let Google Play App Signing manage your release keys, or sign via `jarsigner`:
```bash
jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore release-key.jks app/build/outputs/bundle/release/app-release.aab my-key-alias
```

### Step 4: Upload to Google Play Console
1. Log into [Google Play Console](https://play.google.com/console).
2. Select your app -> **Production** (or **Closed Testing** / **Internal Testing**).
3. Create a new release and upload `app-release.aab`.
4. Fill in release notes and rollout!

---

## 🛡️ Configured Permissions
This build requests the following permissions in `AndroidManifest.xml`:
- `INTERNET`
- `ACCESS_NETWORK_STATE`
- `VIBRATE`
- `READ_MEDIA_IMAGES`

Target SDK: **34** (Compliant with Google Play Store 2024-2026 mandates)
Min SDK: **24** (Android 7.0+, 98% device coverage)
