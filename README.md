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

```
