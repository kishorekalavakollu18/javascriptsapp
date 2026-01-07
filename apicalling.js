// api calling logic with async avoid
const todosdata = async () => {
  try {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

todosdata();
