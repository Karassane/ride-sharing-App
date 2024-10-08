### TO generate and configure React Native Application :

# Android Studio Installation and React Native Dependencies Setup Guide

This guide explains how to install and configure Android Studio on a Linux system, along with instructions for setting up React Native dependencies and testing your mobile application on an Android emulator.

## 1. Download Android Studio

You can download Android Studio from the official website:

- [Android Studio Download Page](https://developer.android.com/studio)

If you have already downloaded the `.tar.gz` file, follow the steps below to install it.

---

## 2. Installing Android Studio

### Step 1: Extract the Android Studio Archive

Navigate to the directory where the `.tar.gz` file was downloaded and extract it:

```bash
cd ~/Downloads
tar -xvzf android-studio-2024.1.2.12-linux.tar.gz
```

### Step 2: Move the Android Studio Directory to /opt

Move the extracted Android Studio directory to `/opt` for easier access:

```bash
sudo mv android-studio /opt/
```

### Step 3: Launch Android Studio

You can launch Android Studio using the following command:

```bash
/opt/android-studio/bin/studio.sh
```

### Step 4: Follow the Setup Wizard

1. When launching for the first time, Android Studio will prompt you to import settings. Select **Do not import settings** if you are installing it for the first time.
2. Accept the terms and conditions.
3. Select the default options to install the Android SDK and other necessary development tools.

---

## 3. Setting Up the Environment for React Native

### Step 1: Install Java 17

Install Java 17 as it's required by the Android Gradle plugin:

```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

Ensure Java 17 is set as the default:

```bash
sudo update-alternatives --config java
```

Verify the installed version:

```bash
java -version
```

### Step 2: Install React Native

Run the following command to install a new React Native project with JavaScript:

```bash
npx react-native init mobile_frontend --template react-native-template-js
```

Navigate to the project directory:

```bash
cd mobile_frontend
```

### Step 3: Launch the Metro Bundler

Metro is the JavaScript bundler used by React Native:

```bash
npx react-native start
```

### Step 4: Configuring Android SDK and Emulator

Ensure the Android SDK is properly configured. Create or update the `local.properties` file in your React Native project's `android/` directory. It should point to the SDK location:

1. Create a file called `local.properties` inside the `android/` directory of your React Native project:

   ```bash
   touch android/local.properties
   ```

2. Add the following line to specify your SDK path (replace with your actual SDK location):

   ```bash
   sdk.dir=/home/your_username/Android/Sdk
   ```

You can locate your SDK path by checking the **SDK Location** in Android Studio under **Preferences > Appearance & Behavior > System Settings > Android SDK**.

### Step 5: Set Environment Variables

Ensure the `ANDROID_HOME` environment variable is set correctly. You can add the following lines to your `~/.bashrc` or `~/.zshrc`:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

After adding these lines, run:

```bash
source ~/.bashrc  # or source ~/.zshrc
```

### Step 6: Running the App on an Android Emulator

1. Start an Android emulator:

```bash
npx react-native run-android
```

Make sure that an emulator is running. You can check available emulators with:

```bash
emulator -list-avds
```

If none are listed, you can create an emulator using Android Studio.

---

Other checks :

sdkmanager --list
adb version
ls $HOME/Android/Sdk^C
