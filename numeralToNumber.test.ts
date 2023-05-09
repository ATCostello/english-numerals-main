import { numeralToNumber } from "./numeralToNumber";

test("Should return a number", () => {
  const result = numeralToNumber("zero");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(0)
});

test("Should return a number", () => {
  const result = numeralToNumber("twenty two-thousand two hundred AND          two");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(22202)
});

test("Should return a number", () => {
  const result = numeralToNumber("four million twenty eight thousand, six hundred and one");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(4028601)
});

test("Should return a number", () => {
  const result = numeralToNumber("one million thirteen hundred");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(1001300)
});

test("Should return a number", () => {
  const result = numeralToNumber("eighteen hundred thousand");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(1800000)
});

test("Should return a number", () => {
  const result = numeralToNumber("nine hundred thousand");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(900000)
});

test("Should return NaN", () => {
  const result = numeralToNumber("123");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(NaN)
});

test("Should return NaN", () => {
  const result = numeralToNumber("This is not a number");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(NaN)
});

test("Should return a number", () => {
  const result = numeralToNumber("three");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(3)
});

test("Should return a number", () => {
  const result = numeralToNumber("Three");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(3)
});

test("Should return a number", () => {
  const result = numeralToNumber("Twenty-four");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(24)
});

test("Should return a number", () => {
  const result = numeralToNumber("twenty four");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(24)
});

test("Should return a number", () => {
  const result = numeralToNumber("eight hundred and twelve");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(812)
});

test("Should return a number", () => {
  const result = numeralToNumber("Seven hundred and forty nine thousand, five hundred and eighty one");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(749581)
});

test("Should return a number", () => {
  const result = numeralToNumber("One Million");
  console.log(result)
  expect(typeof result).toBe("number");
  expect(result).toBe(1000000)
});