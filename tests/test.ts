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
  expect(getCountryFlagEmojiFromCountryCode("US ")).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCode(" us ")).toBe("🇺🇸");
});

test("getCountryNameFromCountryCode", () => {
  expect(getCountryNameFromCountryCode("US")).toBe("United States");
  expect(getCountryNameFromCountryCode("US ")).toBe("United States");
  expect(getCountryNameFromCountryCode(" us ")).toBe("United States");
});

test("getCountryCodeFromCountryName", () => {
  expect(getCountryCodeFromCountryName("United States")).toBe("US");
  expect(getCountryCodeFromCountryName("United States ")).toBe("US");
  expect(getCountryCodeFromCountryName(" united states ")).toBe("US");
});

test("getCountryFlagEmojiFromCountryName", () => {
  expect(getCountryFlagEmojiFromCountryName("United States")).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryName("United States ")).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryName(" united states ")).toBe("🇺🇸");
});

test("getCountryNameFromCountryFlagEmoji", () => {
  expect(getCountryNameFromCountryFlagEmoji("🇺🇸")).toBe("United States");
  expect(getCountryNameFromCountryFlagEmoji("🇺🇸 ")).toBe("United States");
  expect(getCountryNameFromCountryFlagEmoji(" 🇺🇸 ")).toBe("United States");
});

test("getCountryCodeFromCountryFlagEmoji", () => {
  expect(getCountryCodeFromCountryFlagEmoji("🇺🇸")).toBe("US");
  expect(getCountryCodeFromCountryFlagEmoji("🇺🇸 ")).toBe("US");
  expect(getCountryCodeFromCountryFlagEmoji(" 🇺🇸 ")).toBe("US");
});

test("getCountryFromCountryCode", () => {
  expect(getCountryFromCountryCode("US")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCode("US ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCode(" us ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
});

test("getCountryFromCountryName", () => {
  expect(getCountryFromCountryName("United States")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryName("United States ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryName(" united states ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
});

test("getCountryFromCountryFlagEmoji", () => {
  expect(getCountryFromCountryFlagEmoji("🇺🇸")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryFlagEmoji("🇺🇸 ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryFlagEmoji(" 🇺🇸 ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
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
  expect(getCountryFromCountryCodeOrName("US ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrName("United States ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrName(" us ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrName(" united states ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
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
  expect(getCountryFromCountryCodeOrFlagEmoji("US ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrFlagEmoji("🇺🇸 ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrFlagEmoji(" us ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrFlagEmoji(" 🇺🇸 ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
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
  expect(getCountryFromCountryNameOrFlagEmoji("United States ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryNameOrFlagEmoji("🇺🇸 ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryNameOrFlagEmoji(" united states ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryNameOrFlagEmoji(" 🇺🇸 ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
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
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("US ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("United States ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji(" us ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji(" united states ")).toEqual(
    {
      code: "US",
      name: "United States",
      flag: "🇺🇸",
      dialCode: "+1",
    }
  );
  expect(getCountryFromCountryCodeOrNameOrFlagEmoji(" 🇺🇸 ")).toEqual({
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    dialCode: "+1",
  });
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
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("US ")).toBe(
    "United States"
  );
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("United States ")).toBe(
    "United States"
  );
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe(
    "United States"
  );
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji(" us ")).toBe(
    "United States"
  );
  expect(
    getCountryNameFromCountryCodeOrNameOrFlagEmoji(" united states ")
  ).toBe("United States");
  expect(getCountryNameFromCountryCodeOrNameOrFlagEmoji(" 🇺🇸 ")).toBe(
    "United States"
  );
});

test("getCountryCodeFromCountryCodeOrNameOrFlagEmoji", () => {
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("US")).toBe("US");
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("United States")).toBe(
    "US"
  );
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("🇺🇸")).toBe("US");
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("US ")).toBe("US");
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("United States ")).toBe(
    "US"
  );
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe("US");
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji(" us ")).toBe("US");
  expect(
    getCountryCodeFromCountryCodeOrNameOrFlagEmoji(" united states ")
  ).toBe("US");
  expect(getCountryCodeFromCountryCodeOrNameOrFlagEmoji(" 🇺🇸 ")).toBe("US");
});

test("getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji", () => {
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("US")).toBe("🇺🇸");
  expect(
    getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("United States")
  ).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("🇺🇸")).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("US ")).toBe("🇺🇸");
  expect(
    getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("United States ")
  ).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji(" us ")).toBe(
    "🇺🇸"
  );
  expect(
    getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji(" united states ")
  ).toBe("🇺🇸");
  expect(getCountryFlagEmojiFromCountryCodeOrNameOrFlagEmoji(" 🇺🇸 ")).toBe(
    "🇺🇸"
  );
});

test("getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji", () => {
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("US")).toBe("+1");
  expect(
    getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("United States")
  ).toBe("+1");
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("🇺🇸")).toBe("+1");
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("US ")).toBe("+1");
  expect(
    getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("United States ")
  ).toBe("+1");
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji("🇺🇸 ")).toBe("+1");
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji(" us ")).toBe("+1");
  expect(
    getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji(" united states ")
  ).toBe("+1");
  expect(getCountryDialCodeFromCountryCodeOrNameOrFlagEmoji(" 🇺🇸 ")).toBe("+1");
});
