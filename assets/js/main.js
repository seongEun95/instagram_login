/*

* 구현 목록
1. 아이디 입력란을 누르면 ‘전화번호, 사용자 이름 또는 이메일’ 이  사지라고 유저로부터 값을 입력 받는다.
2. 비밀번호 입력란을 누르면 ‘비밀번호’라는 글자가 사라지고 유저로부터 값을 입력 받는다.
3. 로그인 버튼을 누르면 아이디, 비밀번호가 6글자 이상인지 확인 후 조건에 맞지 않으면 ‘아이디, 비밀번호는 6글자 이상이어야 합니다.’라는 alert창을 띄운다.
4. 로그인 버튼을 누를시 위 조건이 맞으면 ‘환영합니다! {유저가 입력한 ID}님!’라는 alert창을 띄우고 welcome.html페이지로 이동시킨다.

*/

// 구현목록 1번, 2번 placeholder 포커스, 블러 이벤트
/**
 * placeholder 이벤트 함수 : focus, blur 이벤트를 활용하여 사용자가 입력할 때 좋은 사용자 경험을 제공함.
 * @param {HTMLInputElement} element 
 * @param {string} event 
 * @param {string} txt 
 */
function placeholderEvent(element, event, txt){
  element.addEventListener(event, (e)=>{
    e.target.placeholder = txt;
  })
}

// placeholder 이벤트 실행 함수
function placeholderEventAction(){
  const idInput = document.querySelector(".id");
  const pwInput = document.querySelector(".pw");

  placeholderEvent(idInput, "focus", "");
  placeholderEvent(idInput, "blur", "전화번호, 사용자 이름 또는 이메일");
  placeholderEvent(pwInput, "focus", "");
  placeholderEvent(pwInput, "blur", "비밀번호");
}

/**
 * 구현 목록 3번, 아이디, 비밀번호 길이 체크 함수
 * @param {function} success 
 */
function loginTextLengthCheck(success){

  const loginFormElem = document.querySelector(".login_area");
  const idInput = document.querySelector(".id");
  const pwInput = document.querySelector(".pw");

  // login form 태그가 submit되기 바로 직전 실행 이벤트
  loginFormElem.addEventListener('submit', (e)=>{

    // id가 6글자 미만 또는 pw가 6글자 미만이면 if문 안에 코드 실행
    if(idInput.value.length < 6 || pwInput.value.length < 6){
      alert("아이디, 비밀번호는 6글자 이상이어야 합니다.");
      e.preventDefault();
      return false;
    }
    // 로그인 성공 시 loginSuccessMessage() 함수 실행
    success()
  })
}

// 구현목록 4번, 로그인 성공 시 alert창으로 메시지 알림
function loginSuccessMessage(){
  const idInput = document.querySelector(".id");
  alert(`환영합니다! ${idInput.value}님!`);
}

// 초기 실행할 함수
function init(){
  placeholderEventAction()
  loginTextLengthCheck(loginSuccessMessage)
}
init()
