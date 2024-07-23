import { countries } from "./countries";

/**
 * Represents the interface for a country.
 */
interface CountryInterface {
  name: string;
  flag: string;
  code: string;
  dialCode: string;
}

/**
 * Normalizes the input string by removing leading/trailing spaces and converting it to lowercase.
 * @param input - The input string to be normalized.
 * @returns The normalized string.
 */
const normalizeInput = (input: string): string => input.trim().toLowerCase();

/**
 * Retrieves the country flag emoji from the given country code.
 * @param countryCode - The country code.
 * @returns The country flag emoji corresponding to the country code, or null if not found.
 */
export const getCountryFlagEmojiFromCountryCode = (
  countryCode: string
): string | null => {
  const normalizedCode = normalizeInput(countryCode);
  for (const country of countries) {
    if (normalizeInput(country.code) === normalizedCode) {
      return country.flag;
    }
  }
  return null;
};

/**
 * Retrieves the country name from the given country code.
 * @param countryCode - The country code.
 * @returns The country name corresponding to the country code, or null if not found.
 */
export const getCountryNameFromCountryCode = (
  countryCode: string
): string | null => {
  const normalizedCode = normalizeInput(countryCode);
  for (const country of countries) {
    if (normalizeInput(country.code) === normalizedCode) {
      return country.name;
    }
  }
  return null;
};

/**
 * Retrieves the country code from the given country name.
 * @param countryName - The country name.
 * @returns The country code corresponding to the country name, or null if not found.
 */
export const getCountryCodeFromCountryName = (
  countryName: string
): string | null => {
  const normalizedName = normalizeInput(countryName);
  for (const country of countries) {
    if (normalizeInput(country.name) === normalizedName) {
      return country.code;
    }
  }
  return null;
};

/**
 * Retrieves the country flag emoji from the given country name.
 * @param countryName - The country name.
 * @returns The country flag emoji corresponding to the country name, or null if not found.
 */
export const getCountryFlagEmojiFromCountryName = (
  countryName: string
): string | null => {
  const normalizedName = normalizeInput(countryName);
  for (const country of countries) {
    if (normalizeInput(country.name) === normalizedName) {
      return country.flag;
    }
  }
  return null;
};

/**
 * Retrieves the country name from the given country flag emoji.
 * @param countryFlagEmoji - The country flag emoji.
 * @returns The country name corresponding to the country flag emoji, or null if not found.
 */
export const getCountryNameFromCountryFlagEmoji = (
  countryFlagEmoji: string
): string | null => {
  const normalizedFlag = normalizeInput(countryFlagEmoji);
  for (const country of countries) {
    if (normalizeInput(country.flag) === normalizedFlag) {
      return country.name;
    }
  }
  return null;
};

/**
 * Retrieves the country code from the given country flag emoji.
 * @param countryFlagEmoji - The country flag emoji.
 * @returns The country code corresponding to the country flag emoji, or null if not found.
 */
export const getCountryCodeFromCountryFlagEmoji = (
  countryFlagEmoji: string
): string | null => {
  const normalizedFlag = normalizeInput(countryFlagEmoji);
  for (const country of countries) {
    if (normalizeInput(country.flag) === normalizedFlag) {
      return country.code;
    }
  }
  return null;
};

/**
 * Retrieves the country object from the given country code.
 * @param countryCode - The country code.
 * @returns The country object corresponding to the country code, or null if not found.
 */
export const getCountryFromCountryCode = (
  countryCode: string
): CountryInterface | null => {
  const normalizedCode = normalizeInput(countryCode);
  for (const country of countries) {
    if (normalizeInput(country.code) === normalizedCode) {
      return country;
    }
  }
  return null;
};

/**
 * Retrieves the country object from the given country name.
 * @param countryName - The country name.
 * @returns The country object corresponding to the country name, or null if not found.
 */
export const getCountryFromCountryName = (
  countryName: string
): CountryInterface | null => {
  const normalizedName = normalizeInput(countryName);
  for (const country of countries) {
    if (normalizeInput(country.name) === normalizedName) {
      return country;
    }
  }
  return null;
};

/**
 * Retrieves the country object from the given country flag emoji.
 * @param countryFlagEmoji - The country flag emoji.
 * @returns The country object corresponding to the country flag emoji, or null if not found.
 */
export const getCountryFromCountryFlagEmoji = (
  countryFlagEmoji: string
): CountryInterface | null => {
  const normalizedFlag = normalizeInput(countryFlagEmoji);
  for (const country of countries) {
    if (normalizeInput(country.flag) === normalizedFlag) {
      return country;
    }
  }
  return null;
};

/**
 * Retrieves the country object from the given country code, name, or flag emoji.
 * @param countryCodeOrName - The country code, name, or flag emoji.
 * @returns The country object corresponding to the country code, name, or flag emoji, or null if not found.
 */
export const getCountryFromCountryCodeOrName = (
  countryCodeOrName: string
): CountryInterface | null => {
  const normalizedInput = normalizeInput(countryCodeOrName);
  for (const country of countries) {
    if (
      normalizeInput(country.code) === normalizedInput ||
      normalizeInput(country.name) === normalizedInput
    ) {
      return country;
    }
  }
  return null;
};

/**
 * Retrieves the country object from the given country code, flag emoji, or name.
 * @param countryCodeOrFlagEmoji - The country code, flag emoji, or name.
 * @returns The country object corresponding to the country code, flag emoji, or name, or null if not found.
 */
export const getCountryFromCountryCodeOrFlagEmoji = (
  countryCodeOrFlagEmoji: string
): CountryInterface | null => {
  const normalizedInput = normalizeInput(countryCodeOrFlagEmoji);
  for (const country of countries) {
    if (
      normalizeInput(country.code) === normalizedInput ||
      normalizeInput(country.flag) === normalizedInput
    ) {
      return country;
    }
  }
  return null;
};

/**
 * Retrieves the country object from the given country name, flag emoji, or code.
 * @param countryNameOrFlagEmoji - The country name, flag emoji, or code.
 * @returns The country object corresponding to the country name, flag emoji, or code, or null if not found.
 */
export const getCountryFromCountryNameOrFlagEmoji = (
  countryNameOrFlagEmoji: string
): CountryInterface | null => {
  const normalizedInput = normalizeInput(countryNameOrFlagEmoji);
  for (const country of countries) {
    if (
      normalizeInput(country.name) === normalizedInput ||
      normalizeInput(country.flag) === normalizedInput
    ) {
      return country;
    }
  }
  return null;
};

/**
 * Retrieves the country object from the given country code, name, flag emoji, or code.
 * @param countryCodeOrNameOrFlagEmoji - The country code, name, flag emoji, or code.
 * @returns The country object corresponding to the country code, name, flag emoji, or code, or null if not found.
 */
export const getCountryFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): CountryInterface | null => {
  const normalizedInput = normalizeInput(countryCodeOrNameOrFlagEmoji);
  for (const country of countries) {
    if (
      normalizeInput(country.code) === normalizedInput ||
      normalizeInput(country.name) === normalizedInput ||
      normalizeInput(country.flag) === normalizedInput
    ) {
      return country;
    }
  }
  return null;
};

/**
 * Retrieves the country name from the given country code, name, flag emoji, or code.
 * @param countryCodeOrNameOrFlagEmoji - The country code, name, flag emoji, or code.
 * @returns The country name corresponding to the country code, name, flag emoji, or code, or null if not found.
 */
export const getCountryNameFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): string | null => {
  const normalizedInput = normalizeInput(countryCodeOrNameOrFlagEmoji);
  for (const country of countries) {
    if (
      normalizeInput(country.code) === normalizedInput ||
      normalizeInput(country.name) === normalizedInput ||
      normalizeInput(country.flag) === normalizedInput
    ) {
      return country.name;
    }
  }
  return null;
};

/**
 * Retrieves the country code from the given country code, name, flag emoji, or code.
 * @param countryCodeOrNameOrFlagEmoji - The country code, name, flag emoji, or code.
 * @returns The country code corresponding to the country code, name, flag emoji, or code, or null if not found.
 */
export const getCountryCodeFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): string | null => {
  const normalizedInput = normalizeInput(countryCodeOrNameOrFlagEmoji);
  for (const country of countries) {
    if (
      normalizeInput(country.code) === normalizedInput ||
      normalizeInput(country.name) === normalizedInput ||
      normalizeInput(country.flag) === normalizedInput
    ) {
      return country.code;
    }
  }
  return null;
};

/**
 * Retrieves the country flag emoji from the given country code, name, flag emoji, or code.
 * @param countryCodeOrNameOrFlagEmoji - The country code, name, flag emoji, or code.
 * @returns The country flag emoji corresponding to the country code, name, flag emoji, or code, or null if not found.
 */
export const getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): string | null => {
  const normalizedInput = normalizeInput(countryCodeOrNameOrFlagEmoji);
  for (const country of countries) {
    if (
      normalizeInput(country.code) === normalizedInput ||
      normalizeInput(country.name) === normalizedInput ||
      normalizeInput(country.flag) === normalizedInput
    ) {
      return country.flag;
    }
  }
  return null;
};

/**
 * Retrieves the country dial code from the given country code, name, flag emoji, or code.
 * @param countryCodeOrNameOrFlagEmoji - The country code, name, flag emoji, or code.
 * @returns The country dial code corresponding to the country code, name, flag emoji, or code, or null if not found.
 */
export const getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji = (
  countryCodeOrNameOrFlagEmoji: string
): string | null => {
  const normalizedInput = normalizeInput(countryCodeOrNameOrFlagEmoji);
  for (const country of countries) {
    if (
      normalizeInput(country.code) === normalizedInput ||
      normalizeInput(country.name) === normalizedInput ||
      normalizeInput(country.flag) === normalizedInput
    ) {
      return country.dialCode;
    }
  }
  return null;
};

export { countries, CountryInterface };
