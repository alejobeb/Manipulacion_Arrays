const letters = ["a", "b", "b"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element);
}

letters.forEach((item) => console.log("forEach", item));
