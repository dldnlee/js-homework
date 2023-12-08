/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// DOM ELEMENTS
const emailInput = document.querySelector('.user-email-input');
const pwInput = document.querySelector('.user-password-input');
const loginForm = document.querySelector('.login-form');

// Input validator function
function validateInput(regValidate, input, invalidMsg) {
  input.addEventListener('input', () => {
    regValidate(input.value) || input.value === '' ? 
    input.classList.remove(invalidMsg) : input.classList.add(invalidMsg);
  })
}

// User Authenticator
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

// Call input validator functions
validateInput(emailReg, emailInput, 'is--invalid');
validateInput(pwReg, pwInput, 'is--invalid');
authenticateUser(loginForm, emailInput, pwInput, user.id, user.pw);


