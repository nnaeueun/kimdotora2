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

document.getElementById("passwordBtn").addEventListener("click", function() {
  const input = document.getElementById("password").value;
  const secret = document.getElementById("secret");

  if (input === "1123") {
    secret.style.display = "block";
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
});

// 3. 신규 기능: 드림코어 비눗방울 무한 생성 (★여기서부터 추가됨)
// ==========================================
function createBubble() {
    // 작년 구역인 #year-2025 내부에 방울을 스폰합니다.
    // 만약 페이지 전체에 띄우고 싶다면 'year-2025' 대신 'year-2026' 혹은 document.body를 쓰셔도 됩니다.
    const section = document.getElementById(document.body); 
    if (!section) return;

    const bubble = document.createElement('span');
    bubble.className = 'dream-bubble';

    // 방울 크기를 20px ~ 80px 사이로 랜덤 생성해서 인위적인 느낌 부여
    const size = Math.random() * 60 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // 화면 가로 위치를 랜덤으로 배치 (인스타 피드 폭 안에서 무작위 분산)
    bubble.style.left = Math.random() * window.innerWidth + 'px';

    // 떠오르는 속도(Duration)와 출발 딜레이(Delay)를 랜덤으로 줘서 엇박자로 날아가게 함
    bubble.style.animationDuration = Math.random() * 4 + 4 + 's'; // 4초~8초 사이 랜덤
    bubble.style.animationDelay = Math.random() * 2 + 's';

    section.appendChild(bubble);

    // 화면 바깥으로 나가 소멸한 방울 엘리먼트는 자동으로 지워줌 (스크롤 끊김 및 렉 방지)
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

// 웹사이트가 켜지면 0.5초(500ms)마다 주기적으로 createBubble 함수를 실행해서 방울을 계속 공급함
setInterval(createBubble, 500);
