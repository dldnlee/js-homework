
/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

// 배경색 정하는 함수
function setBgColor(colorA, colorB='#000') {
  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`
}

// 이미지 바꿔주는 함수
function setImage(element, source, alt) {
  element.src = source;
  element.alt = alt;
}

// 이미지 위에 있는 텍스트 바꿔주는 함수
function setNameText(element, name) {
  element.innerHTML = name;
}

// 오디오 바꿔주는 함수
function setAudio(element, source) {
  element.src = source;
}


// 바로 실행되는 IIFE 함수 선언/실행
(function(){
  // 함수 실행에 필요한 DOM Element 미리 선언
  const nav = document.querySelector('.nav');
  const ul = document.querySelector('.nav > ul');
  const visual = document.querySelector('.visual>div>img');
  const nickName = document.querySelector('.nickName');
  const audio = document.querySelector('.audio-controls');

  nav.addEventListener('click', (e) => {
    // 클릭시 실행되는 기본값 차단
    e.preventDefault();

    // 모든 요소에서 'is-active'이라는 CSS클래스 없애기
    for(const listItem of ul.children) {
      listItem.classList.remove('is-active'); 
    }

    // 클릭 타겟 구하고, 타겟이 li가 아니라면 아무것도 실행하지 않음
    let target = e.target
    let li = target.closest('li');
    if(!li) return;

    // 타겟의 인덱스 구하고, data 객체에 사용하기 좋게 1 빼주기 
    let index = li.dataset.index - 1;
    

    // 함수 매개변수로 사용될 변수
    const name = data[index].name;
    const altText = data[index].alt; 
    const colorA = data[index].color[0];
    const colorB = data[index].color[1];


    // 필요한 함수 모두 실행
    setImage(visual, `./assets/${name.toLowerCase()}.jpeg`, altText);
    setBgColor(colorA, colorB);
    setNameText(nickName, name);
    setAudio(audio, `./assets/audio/${name.toLowerCase()}.m4a`);
    li.classList.add('is-active');
  })
})();









