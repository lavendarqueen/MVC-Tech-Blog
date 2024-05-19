async function newFormHandler(event) {
  event.preventDefault();

  const author_name = document.querySelector("#author_name").value;
  const blog_title = document.querySelector("#blog_title").value;
  const comment = document.querySelector("#comment").value;
  const user = document.querySelector("#user") ? true : false;

  const response = await fetch(`/api/blog_post`, {
    method: "POST",
    body: JSON.stringify({
      author_name,
      blog_title,
      comment,
      user,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add blog post");
  }
}

document
  .querySelector(".new-blogPost-form")
  .addEventListener("submit", newFormHandler);