const listTags = document.querySelectorAll('li');

//const li = document.querySelector('li');
listTags.forEach(li => {
  li.addEventListener("mouseover", () => {
    li.querySelector('a').style.backgroundColor = "white";
    li.querySelector('a').style.color = "black";
  });

  li.addEventListener("mouseout", () => {
    li.querySelector('a').style.backgroundColor = "black";
    li.querySelector('a').style.color = "white";
  });

  //redirecting to respective links
  li.addEventListener("click", () => {
    const link = li.querySelector('a').getAttribute('href');
    window.location.href = link;
  });
});
