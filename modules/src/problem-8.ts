function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  }
  
  //Sample Input
  const Person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(Person, ["name", "email"]));  
  