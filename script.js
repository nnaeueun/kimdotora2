// 아코디언 기능
document.querySelectorAll("section ul li").forEach(function(li) {
  li.addEventListener("click", function(e) {
    const content = li.querySelector(".content");
    if(content) {
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  });
});

//비번 입력

function checkPassword() {
  const input = document.getElementById("password").value;
  const content = document.getElementById("secret");
  if (input === "1123") {  // master가 설정할 비밀번호
    content.style.display = "block";
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
}
