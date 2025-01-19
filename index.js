const { execSync } = require("child_process");


try {
  // 1. SSH 키 생성
  execSync("ssh-keygen -t rsa -b 4096 -C emc22wonil@naver.com");
  console.log("SSH 키 생성 완료");

  // 2. SSH 에이전트를 시작 
    // "eval "$(ssh-agent -s)" ssh-add ~/.ssh/id_rsa "

  // 3. SSH 공개키 추가
  execSync("cat ~/.ssh/id_rsa.pub"); 

  //4. SSH URL 방식으로 변경 
  execSync("git remote set-url origin git@github.com:imwonil/react.git"); 

} catch (error) {
  console.error("오류 발생:", error.message);
}
