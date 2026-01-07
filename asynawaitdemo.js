//asyn await logic
const movieresult = () => {
  return new Promise((resolve, reject) => {
    let rating = 5;
    if (rating > 4) {
      resolve("good movie");
    } else {
      reject("waste of our time");
    }
  });
};
// to call promise async await
const result = async () => {
  try {
    const res = await movieresult();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
result();
