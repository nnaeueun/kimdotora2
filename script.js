// 아코디언 기능
document.querySelectorAll("section ul li").forEach(function(li) {
  li.addEventListener("click", function(e) {
    const content = li.querySelector(".content");
    if(content) {
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  });
});
