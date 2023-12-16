# 엘리멘탈 영화 포스터 웹사이트 구현하기 🟥🟦🟩🟪

## CSS 요소들을 수정해주는 함수들
```
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

// 해당 노드에서 원하는 CSS 클래스 제거해주는 함수
function removeCSSClass(node, cssClass) {
  node.classList.remove(cssClass);
}
```
위에 있는 함수들을 사용해서 원하는 블록에 이벤트 리스너를 할당했을 때 쉽고 빠르게 원하는 CSS요소들을 쉽게 다룰 수 있습니다.

## 클릭 이벤트에 필요한 환경 구성을 위한 IIFE 표현식으로 프로그램 작동
클릭 이벤트가 처리되는 과정에서 필요한 DOM 요소들과 변수들이 글로벌 환경을 오염 시키지 않기 위해 필요한 변수들을 IIFE 환경에서 선언한 후에 바로 실행되게 했습니다.
```
(function(){

  ...클릭 이벤트에 필요한 변수들과 로직

})();
```
