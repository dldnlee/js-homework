# 네이버 로그인 페이지 구현

## 자바스크립트 코드
```
// Input validator function
function validateInput(regValidate, input) {
  input.addEventListener('input', () => {
    regValidate(input.value) || input.value === '' ? 
    input.classList.remove('is--invalid') : input.classList.add('is--invalid');
  })
}

// Form event listener 
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();   
  if (emailInput.value === user.id && pwInput.value === user.pw) {
    alert('웰컴~');
    window.location.href = 'welcome.html';
  } else {
    alert('너 누구야?!');
  }
});
```
### 인풋 양식에 따른 에러 메세지 표시 함수
위에 사전에 구성되어있던 emailReg과 pwReg함수는 인풋폼에 들어간 내용과 설정한 폼이
일치하는지에 대한 True / False 값을 반환 해주는 함수들입니다. 이 두함수를 활용할 수 있는 `validateInput` 함수를 만들었습니다. `validateInput` 함수는
인풋 폼안 에 있는 내용의 양식을 확인하는 함수`regValidate`, 인풋 DOM Element `input`, 그리고 양식 에러 메세지를 조정해 줄 수 있는 html/css클래스`invalidMsg`를 매개변수로 받습니다.
이렇게 매개변수를 사용함으로서 재상용 가능해졌습니다.

해당 함수 내부에는 인풋 폼에 이벤트가 적용될 때 마다 적용이 되는 함수가 있습니다.
- 이벤트가 적용될 때마다 작동되는 함수/기능: 
폼 양식을 비교해주는 함수가 참이거나, 비어있으면 인풋 폼에 `invalidMsg`html/css 클래스를 제거해줍니다. 반대로
위에 있는 조건중 하나라도 거짓의 값을 가지게되면 `invalidMsg`클래스를 제거 해줍니다.




로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.








