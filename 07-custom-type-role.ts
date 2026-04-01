(() => {
  type Role = 'admin' | 'guest' | 'teacher' | 'student';

  type User = {
    name: string;
    age: number;
    role: Role;
    permission: string[];
  };

  let user: User = {
    name: "Marga",
    age: 20,
    role: "student",
    permission: ["read", "write"]
  };

  function access(role: Role) {
    if (role === 'admin') {
      return "Full access";
    } else {
      return "Limited access";
    }
  }

  console.log(user);
  console.log(access(user.role));
})();