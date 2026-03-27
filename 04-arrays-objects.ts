let student: {
  name: string;
  grades: number[];
};

student = {
  name: "Margaux Austria",
  grades: [1.25, 2.00, 1.25]
};

student.grades.push(95);

console.log(student);

let user: {
    name: string;
    age: number;
    hobbies: Array<string>;
    role: {
        description: string,
        id: number
    }
} = {
    name: "Margaux Austria",
    age: 21,
    hobbies: ["Watching One Piece", "Playing Volleyball"],
    role: {
        description: 'Student',
        id: 16
    }
}

console.log(user)