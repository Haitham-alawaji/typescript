interface Student {
  [key: string]: any;
  id: number;
  name: string;
  level: string;
  isSenior: boolean;
}
interface Teacher {
  [key: string]: any;
  id: number;
  name: string;
  specialty: string;
  courseNum: number;
}

type Users = Student | Teacher;
const school: Users[] = [
  {
    name: "stu1",
    id: 1,
    level: "class1",
    isSenior: false,
  },
  { name: "thc4", id: 7, specialty: "sp4", courseNum: 4 },

  {
    name: "stu2",
    id: 2,
    level: "class2",
    isSenior: false,
  },
  {
    name: "stu3",
    id: 3,
    level: "class3",
    isSenior: true,
  },
  { name: "thc1", id: 4, specialty: "sp1", courseNum: 7 },
  { name: "thc2", id: 5, specialty: "sp2", courseNum: 9 },
  {
    name: "thc3",
    id: 6,
    specialty: "sp3",
    courseNum: 2,
  },
];
function logschool(user: Users) {
  if ("level" in user) {
    console.log(
      `Students:- ${user.name}, ${user.id}, ${user.level}, ${user.isSenior}}`
    );
  } else {
    console.log(
      `Teacher : - ${user.name}, ${user.id}, ${user.specialty},${user.corsesnom}`
    );
  }
}

function moveToSenior(x: number) {
  if ("level" in school) {
    return (school[x].isSenior = school[x].isSenior ? false : true);
  } else {
    console.log("not a student");
  }
}
function changNumOfCorses(x: number, y: number) {
  if ("corsesnom" in school) {
    return (school[x].courseNum = y);
  } else {
    console.log("not a Teacher");
  }
}

export {};
