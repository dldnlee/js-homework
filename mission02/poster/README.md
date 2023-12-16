# 엘리멘탈 영화 포스터 웹사이트 구현하기 🟥🟦🟩🟪
![Recording 2023-12-16 at 21 08 55](https://github.com/dldnlee/js-homework/assets/83799987/8ca5eaba-823f-412a-b7b6-9a30d9e1e90e)

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

## 클릭 이벤트 발생시 실행되는 함수 설명
1. 불필요한 행동 방지 preventDefault, 초기화하기(모든 요소에서 is-active 제거하기)
```
nav.addEventListener('click', (e) => {
    // 클릭시 실행되는 기본값 차단
    e.preventDefault();

    // 모든 요소에서 'is-active'이라는 CSS클래스 없애기
    for(const listItem of ul.children) {
      removeCSSClass(listItem, 'is-active');
    }
```

2. 사용자가 어디에 클릭을 했는지 target변수에 지정 후, 클릭한 요소에서 가장 가까운 li 요소를 li 변수에 지정. 마지막으로 사용자가 클릭한 지점이 li 요소가 아니라면, 아무것도 하지 않습니다.
```
let target = e.target
    let li = target.closest('li');
    if(!li) return;
```
