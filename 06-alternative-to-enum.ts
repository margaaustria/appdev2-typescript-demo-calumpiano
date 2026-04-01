(() => {

  let userRole: 'admin' | 'guest' | 'teacher' | 'student' = 'admin';

  userRole = 'guest';  


  function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
    if (role === 'admin') {
      console.log('Full access');
    } else {
      console.log('Limited access');
    }
  }

  access(userRole);
})();



function printMessage(type: 'info' | 'warning' | 'error') {
  console.log("Message type is:", type);
}

  printMessage('info'),
  printMessage('warning'),
  printMessage('error')




let User: {
  name: string;
  role: 'admin' | 'teacher' | 'student';
};

User = {
  name: "Marga",
  role: "teacher"
};

console.log(User.name);
console.log(User.role);