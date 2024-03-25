# Country Codes Flags Phone Codes 🏳

---

## Overview

The Country Codes Flags Phone Codes npm package provides a simple and efficient way to access country codes, flags, and phone codes. With data on 246 countries, you can effortlessly retrieve information by country name, country code, or phone code. This package streamlines the process of working with country-related data in your JavaScript applications.

## Features

- Access country codes, flags, and phone codes conveniently.
- Data on 246 available countries.
- Search functionality to find information quickly.
- Retrieve data by country name, country code, or phone code.

## Installation

You can install the package via npm:

```bash
npm install country-codes-flags-phone-codes
```

## Usage

```typescript
import {
  getCountryFlagEmojiFromCountryCode,
  getCountryNameFromCountryCode,
  getCountryCodeFromCountryName,
  getCountryFlagEmojiFromCountryName,
  getCountryNameFromCountryFlagEmoji,
  getCountryCodeFromCountryFlagEmoji
  getCountryFromCountryCode,
  getCountryFromCountryName,
  getCountryFromCountryFlagEmoji,
  getCountryFromCountryCodeOrName,
  getCountryFromCountryCodeOrFlagEmoji,
  getCountryFromCountryNameOrFlagEmoji,
  getCountryFromCountryCodeOrNameOrFlagEmoji,
  getCountryNameFromCountryCodeOrNameOrFlagEmoji,
  getCountryCodeFromCountryCodeOrNameOrFlagEmoji,
  getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji,
  getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji,
  countries, 
  CountryInterface,
 } from "country-codes-flags-phone-codes";


console.log(getCountryFlagEmojiFromCountryCode("US")); // 🇺🇸
console.log(getCountryNameFromCountryCode("US")); // United States
console.log(getCountryCodeFromCountryName("United States")); // US
console.log(getCountryFlagEmojiFromCountryName("United States")); // 🇺🇸
console.log(getCountryNameFromCountryFlagEmoji("🇺🇸")); // United States
console.log(getCountryCodeFromCountryFlagEmoji("🇺🇸")); // US
console.log(getCountryFromCountryCode("US")); // { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' }
console.log(getCountryFromCountryName("United States")); // { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' }
console.log(getCountryFromCountryFlagEmoji("🇺🇸")); // { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' }
console.log(getCountryFromCountryCodeOrName("US")); // { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸'
console.log(getCountryFromCountryCodeOrFlagEmoji("US")); // { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' }
console.log(getCountryFromCountryNameOrFlagEmoji("United States")); // { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' }
console.log(getCountryFromCountryCodeOrNameOrFlagEmoji("US")); // { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' }
console.log(getCountryNameFromCountryCodeOrNameOrFlagEmoji("US")); // United States
console.log(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("United States")); // US
console.log(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("US")); // 🇺🇸
console.log(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("US")); // +1
console.log("countries", countries); // [{ name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' }, ...]

```

## How to Contribute

Thank you for considering contributing to this project! Contributions are essential to keep the project thriving and improving. Below are steps on how you can contribute to the project:

### 1. Fork the Repository

- Navigate to the repository on GitHub.
- Click on the "Fork" button in the top-right corner of the page.
- This will create a copy of the repository in your GitHub account.

### 2. Clone the Repository

- On your GitHub account, find the forked repository.
- Click on the "Code" button and copy the URL provided.
- Open your terminal or command prompt.
- Use the `git clone` command followed by the URL to clone the repository to your local machine.

```bash
git clone <repository_URL>
```

### 3. Make Changes

- Navigate to the project directory on your local machine.
- Make the necessary changes or additions to the files you want. Ensure your changes adhere to the project's contribution guidelines and formatting standards.

### 4. Commit Your Changes

- After making the desired changes, save the files you have changed.
- In your terminal or command prompt, navigate to the project directory.
- Use the following commands to stage and commit your changes:

```bash
git add README.md # Replace README.md with the file you have changed
git commit -m "Brief description of changes"
```

### 5. Push Changes to Your Fork

- Once committed, push your changes to your forked repository on GitHub:

```bash
git push origin main
```

### 6. Submit a Pull Request

- Go to your forked repository on GitHub.
- Click on the "Pull Request" button.
- Provide a brief description of the changes you've made in the pull request.
- Click on "Create Pull Request" to submit your changes for review.

### 7. Await Review and Feedback

- Your pull request will be reviewed as soon as possible.
- Be open to feedback and be willing to make further changes if necessary.
- Once approved, your changes will be merged into the main project.

## Thank You!

Thank you for taking the time to contribute to our project. Your efforts are greatly appreciated and help make the project better for everyone. If you have any questions or need further assistance, feel free to reach out via GitHub issues. Happy coding!
