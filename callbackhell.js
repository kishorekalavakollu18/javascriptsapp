const studentinfo = () => {
  console.log("student datails are:");
  setTimeout(() => {
    let rollno = [1, 2, 3, 4, 5];
    console.log(rollno);
    setTimeout(
      (roll_no) => {
        const data = {
          sname: "kishore",
          qualification: "b.tech",
        };
        console.log(
          `student name is ${data.sname} qualification is ${data.qualification} and roll num is ${roll_no}`
        );
      },
      2000,
      rollno[1]
    );
  }, 2000);
};
studentinfo();
