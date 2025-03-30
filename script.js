let scrollbar = document.querySelector(".scrollbar");

window.addEventListener("scroll", () => {
  console.log("scrollY", window.scrollY); //shows scrolling height
  console.log("scrollHeight", document.body.scrollHeight); // full page hight (start to end)
  console.log("innerHeight", window.innerHeight); // front/screen size hight

  let percentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollbar.style.display = "block";
  scrollbar.style.width = `${percentage}%`;
  console.log(percentage);
});
