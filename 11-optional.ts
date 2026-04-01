function generateError(msg?: string) {
    if (msg) {
        console.log("Error message:", msg);
    } else {
        console.log("No message provided");
    }
}

generateError("An error occurred"); 
generateError();               


type User = {
    name: string;
    age: number;
    role?: 'admin' | 'guest';
};

const user1: User = {
    name: "Marga",
    age: 21
};

const user2: User = {
    name: "Park Sunghoon",
    age: 23,
    role: 'admin'
};

console.log(user1.name, user1.age, user1.role);
console.log(user2.name, user2.age, user2.role); 

let input = "";
const didProvideInput = input ?? "No input provided"; 
console.log("Input:", didProvideInput);

let input2: string | null = null;
const safeInput = input2 ?? "Fallback value";
console.log("Safe Input:", safeInput);

const falsyInput = "";
const fallbackWithOr = falsyInput || "Default for any falsy value";
console.log("Fallback with ||:", fallbackWithOr);