import { countries, CountryInterface } from "./countries";

export const getCountryFlagEmojiFromCountryCode = (
  countryCode: string
): string | null => {
  for (const country of countries) {
    if (country.code === countryCode) {
      return country.flag;
    }
  }
  return null;
};

export const getCountryNameFromCountryCode = (
  countryCode: string
): string | null => {
  for (const country of countries) {
    if (country.code === countryCode) {
      return country.name;
    }
  }
  return null;
};

export const getCountryCodeFromCountryName = (
  countryName: string
): string | null => {
  for (const country of countries) {
    if (country.name === countryName) {
      return country.code;
    }
  }
  return null;
};

export const getCountryFlagEmojiFromCountryName = (
  countryName: string
): string | null => {
  for (const country of countries) {
    if (country.name === countryName) {
      return country.flag;
    }
  }
  return null;
};

export const getCountryNameFromCountryFlagEmoji = (
  countryFlagEmoji: string
): string | null => {
  for (const country of countries) {
    if (country.flag === countryFlagEmoji) {
      return country.name;
    }
  }
  return null;
};

export const getCountryCodeFromCountryFlagEmoji = (
  countryFlagEmoji: string
): string | null => {
  for (const country of countries) {
    if (country.flag === countryFlagEmoji) {
      return country.code;
    }
  }
  return null;
};

export const getCountryFromCountryCode = (
  countryCode: string
): CountryInterface | null => {
  for (const country of countries) {
    if (country.code === countryCode) {
      return country;
    }
  }
  return null;
};

export const getCountryFromCountryName = (
  countryName: string
): CountryInterface | null => {
  for (const country of countries) {
    if (country.name === countryName) {
      return country;
    }
  }
  return null;
};

export const getCountryFromCountryFlagEmoji = (
  countryFlagEmoji: string
): CountryInterface | null => {
  for (const country of countries) {
    if (country.flag === countryFlagEmoji) {
      return country;
    }
  }
  return null;
};

export const getCountryFromCountryCodeOrName = (
  countryCodeOrName: string
): CountryInterface | null => {
  for (const country of countries) {
    if (
      country.code === countryCodeOrName ||
      country.name === countryCodeOrName
    ) {
      return country;
    }
  }
  return null;
};

export const getCountryFromCountryCodeOrFlagEmoji = (
  countryCodeOrFlagEmoji: string
): CountryInterface | null => {
  for (const country of countries) {
    if (
      country.code === countryCodeOrFlagEmoji ||
      country.flag === countryCodeOrFlagEmoji
    ) {
      return country;
    }
  }
  return null;
};

export const getCountryFromCountryNameOrFlagEmoji = (
  countryNameOrFlagEmoji: string
): CountryInterface | null => {
  for (const country of countries) {
    if (
      country.name === countryNameOrFlagEmoji ||
      country.flag === countryNameOrFlagEmoji
    ) {
      return country;
    }
  }
  return null;
};

export const getCountryFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): CountryInterface | null => {
  for (const country of countries) {
    if (
      country.code === countryCodeOrNameOrFlagEmoji ||
      country.name === countryCodeOrNameOrFlagEmoji ||
      country.flag === countryCodeOrNameOrFlagEmoji
    ) {
      return country;
    }
  }
  return null;
};

export const getCountryNameFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): string | null => {
  for (const country of countries) {
    if (
      country.code === countryCodeOrNameOrFlagEmoji ||
      country.name === countryCodeOrNameOrFlagEmoji ||
      country.flag === countryCodeOrNameOrFlagEmoji
    ) {
      return country.name;
    }
  }
  return null;
};

export const getCountryCodeFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): string | null => {
  for (const country of countries) {
    if (
      country.code === countryCodeOrNameOrFlagEmoji ||
      country.name === countryCodeOrNameOrFlagEmoji ||
      country.flag === countryCodeOrNameOrFlagEmoji
    ) {
      return country.code;
    }
  }
  return null;
};

export const getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): string | null => {
  for (const country of countries) {
    if (
      country.code === countryCodeOrNameOrFlagEmoji ||
      country.name === countryCodeOrNameOrFlagEmoji ||
      country.flag === countryCodeOrNameOrFlagEmoji
    ) {
      return country.flag;
    }
  }
  return null;
};

export const getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): string | null => {
  for (const country of countries) {
    if (
      country.code === countryCodeOrNameOrFlagEmoji ||
      country.name === countryCodeOrNameOrFlagEmoji ||
      country.flag === countryCodeOrNameOrFlagEmoji
    ) {
      return country.dialCode;
    }
  }
  return null;
};
