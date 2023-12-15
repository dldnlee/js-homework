# 네이버 로그인 페이지 구현

## 결과

![Recording 2023-12-08 at 16 32 26](https://github.com/dldnlee/js-homework/assets/83799987/77850710-51e3-4d4a-bc17-0c9a92efb9ad)


## 자바스크립트 코드

## 인풋 양식에 따른 에러 메세지 표시 함수 `validateInput`
위에 사전에 구성되어있던 emailReg과 pwReg함수는 인풋폼에 들어간 내용과 설정한 폼이
일치하는지에 대한 True / False 값을 반환 해주는 함수입니다. 두함수를 활용할 수 있는 `validateInput` 함수를 만들었습니다. `validateInput` 함수는
인풋 폼안 에 있는 내용의 양식을 확인하는 함수`regValidate`, 인풋 DOM Element `input`, 그리고 양식 에러 메세지를 조정해 줄 수 있는 html/css클래스`invalidMsg`를 매개변수로 받습니다.

매개변수를 사용함으로서 재상용 가능해졌으며 같은 코드를 재입력할 필요가 없어졌습니다.

해당 함수 내부에는 인풋 폼에 이벤트가 적용될 때 마다 적용이 되는 함수가 있습니다.
- 이벤트가 적용될 때마다 작동되는 함수/기능: 
폼 양식을 비교해주는 함수가 참이거나, 비어있으면 인풋 폼에 `invalidMsg`html/css 클래스를 제거해줍니다. 반대로
위에 있는 조건중 하나라도 거짓의 값을 가지게되면 `invalidMsg`클래스를 제거 해줍니다.
```
function validateInput(regValidate, input, invalidMsg) {
  input.addEventListener('input', () => {
    regValidate(input.value) || input.value === '' ? 
    input.classList.remove(invalidMsg) : input.classList.add(invalidMsg);
  })
}
```

## 유저 인풋에 따른 로그인 가능 여부 확인 함수 `authenticateUser`
해당 함수는 매개변수로 폼 DOM Element, 이메일 & 비밀번호 인풋 DOM Element, 그리고 데이터베이스에 저장돼있는 유저 아이디와 비밀번호를 받습니다.
매개변수로 받은 폼에 양식 제출시 실행할 기능 Event Listener를 사용하고, 유저가 해당 폼에 입력한 값들을 데이터베이스에 있는 값들과 비교합니다.
비교를 했을때 값이 일치할 경우에는 `windows.html`이라는 페이지로 옮겨주고, 일치하지 않을 경우에는 비밀번호가 틀렸다는 팝업을 띄어줍니다.
```
function authenticateUser(form, email, pw, emailData, pwData) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();   
    if (email.value === emailData && pw.value === pwData) {
      alert('웰컴~');
      window.location.href = 'welcome.html';
    } else {
      alert('너 누구야?!');
    }
  });
}
```







