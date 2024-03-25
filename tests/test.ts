import {
  getCountryFlagEmojiFromCountryCode,
  getCountryNameFromCountryCode,
  getCountryCodeFromCountryName,
  getCountryFlagEmojiFromCountryName,
  getCountryNameFromCountryFlagEmoji,
  getCountryCodeFromCountryFlagEmoji,
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
} from "../src";

test("getCountryFlagEmojiFromCountryCode", () => {
  expect(getCountryFlagEmojiFromCountryCode("US")).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCode("US ")).toBe(null);
});

test("getCountryNameFromCountryCode", () => {
  expect(getCountryNameFromCountryCode("US")).toBe("United States");
  expect(getCountryNameFromCountryCode("US ")).toBe(null);
});

test("getCountryCodeFromCountryName", () => {
  expect(getCountryCodeFromCountryName("United States")).toBe("US");
  expect(getCountryCodeFromCountryName("United States ")).toBe(null);
});

test("getCountryFlagEmojiFromCountryName", () => {
  expect(getCountryFlagEmojiFromCountryName("United States")).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryName("United States ")).toBe(null);
});

test("getCountryNameFromCountryFlagEmoji", () => {
  expect(getCountryNameFromCountryFlagEmoji("🇺🇸")).toBe("United States");
  expect(getCountryNameFromCountryFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryCodeFromCountryFlagEmoji", () => {
  expect(getCountryCodeFromCountryFlagEmoji("🇺🇸")).toBe("US");
  expect(getCountryCodeFromCountryFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryFromCountryCode", () => {
  expect(getCountryFromCountryCode("US")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCode("US ")).toBe(null);
});

test("getCountryFromCountryName", () => {
  expect(getCountryFromCountryName("United States")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryName("United States ")).toBe(null);
});

test("getCountryFromCountryFlagEmoji", () => {
  expect(getCountryFromCountryFlagEmoji("🇺🇸")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryFromCountryCodeOrName", () => {
  expect(getCountryFromCountryCodeOrName("US")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrName("United States")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrName("US ")).toBe(null);
  expect(getCountryFromCountryCodeOrName("United States ")).toBe(null);
});

test("getCountryFromCountryCodeOrFlagEmoji", () => {
  expect(getCountryFromCountryCodeOrFlagEmoji("US")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrFlagEmoji("🇺🇸")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrFlagEmoji("US ")).toBe(null);
  expect(getCountryFromCountryCodeOrFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryFromCountryNameOrFlagEmoji", () => {
  expect(getCountryFromCountryNameOrFlagEmoji("United States")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryNameOrFlagEmoji("🇺🇸")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryNameOrFlagEmoji("United States ")).toBe(null);
  expect(getCountryFromCountryNameOrFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryFromCountryCodeOrNameOrFlagEmoji", () => {
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("US")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("United States")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("🇺🇸")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("US ")).toBe(null);
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("United States ")).toBe(
    null
  );
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryNameFromCountryCodeOrNameOrFlagEmoji", () => {
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("US")).toBe(
    "United States"
  );
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("United States")).toBe(
    "United States"
  );
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("🇺🇸")).toBe(
    "United States"
  );
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("US ")).toBe(null);
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("United States ")).toBe(
    null
  );
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryCodeFromCountryCodeOrNameOrFlagEmoji", () => {
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("US")).toBe("US");
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("United States")).toBe(
    "US"
  );
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("🇺🇸")).toBe("US");
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("US ")).toBe(null);
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("United States ")).toBe(
    null
  );
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji", () => {
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("US")).toBe("🇺🇸");
  expect(
    getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("United States")
  ).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("🇺🇸")).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("US ")).toBe(null);
  expect(
    getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("United States ")
  ).toBe(null);
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe(null);
});

test("getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji", () => {
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("US")).toBe("+1");
  expect(
    getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("United States")
  ).toBe("+1");
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("🇺🇸")).toBe("+1");
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("US ")).toBe(null);
  expect(
    getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("United States ")
  ).toBe(null);
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe(null);
});
