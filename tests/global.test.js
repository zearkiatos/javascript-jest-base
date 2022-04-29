describe("This is a global test for jest", () => {
  beforeAll(() => {
    console.log("Before all tests");
  });
  beforeEach(() => {
    console.log("Before each tests");
  });
  afterEach(() => {
    console.log("After each tests");
  });

  afterAll(() => {
    console.log("After all tests");
  });
  test("Should content a text", () => {
    const text = "Hello World!";

    expect(text).toMatch(/World/);
  });

  test("Should content an array", () => {
    const fruits = ["apples", "melon", "banana"];

    expect(fruits).toContain("banana");
  });

  test("Should evaluate if a number is grant to other", () => {
    const TEN = 10;
    const NINE = 9;

    expect(TEN).toBeGreaterThan(NINE);
  });

  test("Should be a true value", () => {
    const trueValue = true;

    expect(trueValue).toBeTruthy();
  });

  test("Should reverse a string callback", () => {
    const resultExpected = "!dlroW olleH";
    const reverseString = (str, callback) => {
      callback(str.split("").reverse().join(""));
    };

    reverseString("Hello World!", (str) => {
      expect(str).toBe(resultExpected);
    });
  });

  test("Should reverse a string with a promise resolve with then", () => {
    const resultExpected = "!esimorP olleH";
    const reverseString = (str) => {
      return new Promise((resolve, reject) => {
        if (!str) {
          reject(Error("error"));
        }
        resolve(str.split("").reverse().join(""));
      });
    };

    reverseString("Hello Promise!").then((strReversed) => {
      expect(strReversed).toBe(resultExpected);
    });
  });

  test("Should be fail reverse if the string is empty and reject the promise", () => {
    const resultExpected = "!esimorP olleH";
    const reverseString = (str) => {
      return new Promise((resolve, reject) => {
        if (!str) {
          reject(Error("error"));
        }
        resolve(str.split("").reverse().join(""));
      });
    };

    reverseString("Hello Promise!")
      .then((strReversed) => {})
      .catch((error) => {
        expect(error).toBe("error");
      });
  });

  test("Should reverse a string with a promise resolve with async and await", async () => {
    const resultExpected = "!esimorP olleH";
    const reverseString = (str) => {
      return new Promise((resolve, reject) => {
        if (!str) {
          reject(Error("error"));
        }
        resolve(str.split("").reverse().join(""));
      });
    };

    const strReversed = await reverseString("Hello Promise!");

    expect(strReversed).toBe(resultExpected);
  });

  test("Should be fail reverse if the string is empty and reject with async and await", async () => {
    const expectedError = "error";
    const reverseString = (str) => {
      return new Promise((resolve, reject) => {
        if (!str) {
          reject(Error("error"));
        }
        resolve(str.split("").reverse().join(""));
      });
    };

    try {
      await reverseString("");
    } catch (ex) {
      expect(ex.message).toBe(expectedError);
    }
  });
});
