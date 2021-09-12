# ✏️ Study for Algorithm ✏️
> 자바스크립트로 알고리즘 영역 확장하기!

🤩 환영합니다!

⛔️ 이 알고리즘 스터디는 아래의 이유로 다른 스터디와는 조금 다릅니다.
1. 언어는 **자바스크립트**로 진행하지만 어떤 언어여도 상관은 없습니다.
2. 단, 리뷰는 자바스크립트 언어 위주로 진행되니 자바스크립트로 사용하시기를 권고드립니다.
3. `1번`의 이유는, 이 알고리즘 스터디가 **의사 코드(Pseudo-Code)** 작성에 중심을 두고 있기 때문입니다.

<hr>
<br>

## 🌠 시즌 🌠
> 🚝 *새로운 시즌이 시작되었습니다!*

|   시즌   |        진행 기간        |
| :------: | :---------------------: |
| Season 1 | 2019-10-07 ~ 2020-01-03 |
| Season 2 | 2021-09-13 ~ 2021-10-11 |

<br>
<hr>

## ⌨️ 저장소 사용 방법 ⌨️
✅ 해당 저장소는 자바스크립트 언어가 기본 환경입니다.

✅ Visual Studio Code를 권고합니다.

✅ 환경은 리더가 미리 구축해 두었으나 아래가 선행되어야 합니다.
  - ☑️ Visual Studio Code 설치 : `jsonconfig.json` 등 vscode 호환에 맞춘 환경입니다.
  - ☑️ Node.js 설치 : `NPM Package Manager`를 사용합니다.

✅ 코드 표준을 정의해 놓았습니다. `Eslint`와 `Prettier`로 포맷팅 합니다.
  - ☑️ 설정이 미리 되어있으니, 가급적 수정하지 말고 사용해주세요.

✅ 테스트 라이브러리로 `jest`를 채용했습니다.

✅ 예제
  ```sh
  npm install # 모듈 의존성 설치

  node 경로/파일명 # *js 파일 런타임으로 실행

  npm test 경로/파일명 # *.js 파일에 선언된 descripbe 문 실행(jest)
  ```


## 💻 진행 규칙 💻
✅ 이 저장소를 개인 저장소로 Fork 합니다.

✅ 자신의 이름(또는 닉네임)으로 디렉토리를 생성합니다.
> 이 내부 디렉토리는 어떻게 운용하시든 상관 없지만, 생성되는 디렉토리 별로 `README.md`를 **반드시** 작성하셔서 한 눈에 TOC를 볼 수 있게 유도해주세요.

✅ 알고리즘에 **집중**하기 위한 스터디가 아니므로 권고되는 문제 풀이 수는 `하루 2문`입니다.

✅ 한 문제를 풀 경우 생성되는 파일은 `최소 3개` 입니다.
  - ☑️ README.md : 문제에 대한 설명
  - ☑️ 의사 코드(*.txt) : 의사 코드(`README.md`와 merge해도 좋습니다)
  - ☑️ 문제 풀이 코드(*.js)
  - ☑️ stdin : 테스트 케이스
  - ☑️ 폴더 구조 결정 예시
    ```
    user
      |——boj
      |   |——stack
      |   |     |——10828
      |   |     ...   |——10828.txt
      |   |           |——10828.js
      |   |           |——stdin
      |   |           └——README.md
      |   |——queue
      |   ...   |——...
      ...       ...
    ```

✅ 팀원이 각 주마다 `공통 5문`, `개인 5문`으로 총 10문을 선별하여 풀이합니다.
  - ☑️ `총 10문`을 월요일부터 금요일까지 분할하여 푸는 것이므로 최소 2문씩 풀면 딱 맞게 됩니다.
  - ☑️ 리뷰는 하루하루 진행하지 않으셔도 괜찮으나, `일주일(월요일 ~ 일요일)`이라는 시간 안에 반드시 끝내주세요.

✅ 하루 단위로 푼 문제를 Commit하시고, Pull Request를 생성해 주세요.
  - ☑️ 팀원 리뷰가 완료된 PR건은 즉시 Merge합니다.
  - ☑️ 아무리 늦어져도 해당 주에 일어난 PR은 해당 주에 Merge함을 원칙으로 합니다.

<br>
<hr>

## ⏱ 진행 방식 ⏱
1️⃣ 아래 알고리즘 사이트에 수록된 문제들을 선별합니다(*이 외에 추가해주셔도 좋습니다*😊).
  - ⚠️ 백준 [Link](https://www.acmicpc.net/)
  - ⚠️ 프로그래머스 [Link](https://programmers.co.kr/)
  - ⚠️ 리트코드 [Link](https://leetcode.com/problemset/all/)
  - ⚠️  해커랭크 [Link](https://www.hackerrank.com/)

2️⃣ 선별한 문제에서 쓰일 것 같은 알고리즘을 리스트업 한 뒤, 의사 코드(Pseudo Code)를 작성합니다.

3️⃣ 의사 코드로 리뷰 및 피드백을 진행합니다.
  - ❗️ 중요합니다! 문제를 풀이한 코드는 의미가 없습니다. 어떻게 문제를 접근하고, 이를 구조화하여 해석했는지를 적어야 합니다.

4️⃣ 테스트 케이스를 각각 작성하여 합칩니다.

5️⃣ 문제를 해결한 코드는 공유하는 지침 없이, 결과에 따른 시간복잡도/공간복잡도를 공유합니다.

6️⃣ 일주일 단위로 공부했던 알고리즘과 문제들을 재점검합니다.

  - ⚠️ 문제 전체를 처음부터 끝까지 푸는 게 아니라 의사 코드를 세운 뒤, 얼마나 달라졌는지 비교합니다.

  - ⚠️ 팀원과 의견을 나눈 뒤 결정된 자신만의 알고리즘으로 의사 코드를 작성합니다.

<br>
<hr>

## 📅 스터디 진행 현황 📅
<details><summary>🎼Season 2🎼 <strong>자세히보기!</strong></summary>

<br>

<table align="center">
  <thead>
    <th style="text-align:center">일자</th>
    <th style="text-align:center">내용</th>
    <th style="text-align:center">참석자</th>
    <th style="text-align:center">비고</th>
  </thead>
  <tbody>
    <tr>
      <td>2021-09-10</td>
      <td>인원 모집 완료</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2021-09-13</td>
      <td>1차 온라인 세션(KickOff)</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<hr>
</details>

<br>
<hr>

## 🛠 Contributors 🛠

<table>
    <tr height="140px">
        <td align="center">
            <a href="https://github.com/InSeong-So"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/18283006?v=4"/></a>
            <br />
            <a href="https://github.com/InSeong-So">VSFe</a>
        </td>
        <td align="center">
            <a href="https://github.com/Jinwook-R"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/85405837?v=4"/></a>
            <br />
            <a href="https://github.com/Jinwook-R">Jinwook</a>
        </td>
        <td align="center">
            <a href="https://github.com/hyojinLee-git"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/59614918?v=4"/></a>
            <br />
            <a href="https://github.com/hyojinLee-git">hyojinLee</a>
        </td>
        <td align="center">
            <a href="https://github.com/zinozino1"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/52441478?v=4"/></a>
            <br />
            <a href="https://github.com/zinozino1">zinozino1</a>
        </td>
    </tr>
</table>

## 📚 History 📚

<br>
<hr>
