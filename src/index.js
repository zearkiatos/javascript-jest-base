const cities = ["Mexico City", "Bogotá", "Lima", "Buenos Aires", "Guadalajara"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = { randomString, reverseString };
