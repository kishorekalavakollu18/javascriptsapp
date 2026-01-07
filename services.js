//api calling logic with async and await
const getdetails = async () => {
  // request data gathering logic
  let userid = document.getElementById("userid").value;
  let para = document.getElementById("simple");
  let result = document.getElementById("sample");
  // validation logic
  if (userid == "") {
    alert("please enter user id");
    return;
  }
  para.style.display = "block";
  // business logic
  try {
    const [userres, postres] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userid}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userid=${userid}`),
    ]);
    const userdata = await userres.json();
    const postdata = await postres.json();
    result.innerHTML =
      `
<h3>${userdata.name}</h3>
<p>${userdata.email}</p>
<h3>post</h3>` <
      ul >
      `
    ${postdata.map((item) => `<li> ${item.title}</li>`)}
    </ul>`;
  } catch (error) {
    result.innerHTML = "<h3>something went wrong</h3>";
  }
};
