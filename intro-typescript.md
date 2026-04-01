# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.


________________________________________________________________________________
## 06-alternative-to-enum.ts
It shows another way to replace enums using literal types or objects. It uses fixed values (`like roles`) to control what is allowed. This makes the code simpler and more flexible while still **preventing invalid values.**

## 07-custom-type-role.ts
Demonstrates **custom types for roles** in an application (`admin`, `guest`, etc.). Helps make the code more readable and prevents invalid assignments. Easy to maintain parameter.

## 08-functions.ts
Teaches **function return types**, `void` and `never` types, and **callback functions**. Also demonstrates typing objects with methods and using `this` safely in TypeScript.
    - **Void** = `no return`, pero tinatapos nya yung funtion.
    - **Never** = `nothing to return`,function never finish (like Infinite loop)...to make it stop, used never to end the execution.

## 09-special-types.ts
Explains **special types** like `null` and `undefined`, and how to combine them with other types using unions. Shows how TypeScript prevents accessing properties on `null` or `undefined`.

## 10-form.html and 10-type-narrowing.ts
Demonstrates **interacting with HTML inputs safely** using TypeScript. Shows **type narrowing**, **type assertions**, and **optional chaining** to avoid runtime errors when accessing DOM elements.

## 11-optional.ts
Shows how to use **optional function parameters**, **optional object properties**, and the **nullish coalescing operator (`??`)**. Helps handle missing or undefined values safely in TypeScript.