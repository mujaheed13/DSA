// ? https://oj.masaischool.com/contest/402/problem/1

function masaiSchoolHurray(n) {
  console.log(
    n % 35 == 0
      ? "Masai School"
      : n % 7 == 0
      ? "Masai"
      : n % 5 == 0
      ? "School"
      : "Hurray!"
  );
}

let n = 7; // ! Masai

masaiSchoolHurray(n);
