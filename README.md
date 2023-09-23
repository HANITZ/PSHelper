<h1 align="center">
  <img src="./PSHelper.png" alt="PSHelper" width="400">
  <br>
  PSHelper
  <br>
</h1>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license"/></a>
</a>
</p>


## 목차

<p>알고리즘 문제를 푸는데 효율성을 올려주는 프로그램입니다. 문제를 통과하면 GitHub Repository에 자동으로 push가 되어 풀이한 코드를 저장할 수 있습니다. 문제를 풀면서 자동으로 타이머를 설정해줍니다. 풀이한 시간을 확인하면서 알고리즘 실력을 성장시킬 수 있습니다. </p>
   <br />
   <br />

<!--- 소개 --->

# PSHelper?

<p>
  PSHelper는 알고리즘 문제 풀이를 할 때 보다 효과적인 풀이를 할 수 있도록 도와주는 크롬 익스텐션입니다. 코드 풀이를 시작할 때 자동으로 타이머가 시작되어 정확한 풀이시간을 측정할 수 있도록 해줍니다. 풀이가 완료된 코드는 자동으로 깃허브에 푸시됩니다.
  <br>
  <em style="opacity:0.5; font-size: 13px;" >PSHelper는 코딩테스트 준비에 개인 풀이를 github에 자동 푸시해주는 <a href="https://github.com/QasimWani/LeetHub">LeetHub</a>, <a href="https://www.acmicpc.net/">백준</a>을 참고하여 만든 개인프로젝트 입니다.</em>
</p>

<br />

<!--- 설치 및 연동 --->

# 설치 및 연동(How to set it up)

<ol>
  <li>크롬에서 설치 후 우측 상단의 popup 버튼을 클릭합니다.</li>
  <li>"Authorize with GitHub" 버튼을 누르면 Repository 연동 화면이 표시됩니다.</li>
  <li>신규 혹은 기존의 Repository를 선택하면 BaekjoonHub과 연동이 완료됩니다
    (기본값은 private으로 되어있습니다).</li>
  <li>이후 제출화면이 감지되면 자동으로 업로드됩니다</li>
</ol>
👉 보다 구체적인 사용 방법을 알고 싶다면 다음 <a href="https://velog.io/@flaxinger/백준허브-사용-방법">사용자 매뉴얼</a>을 확인해주세요.
<br />
<br />

<!--- 작동 원리 --->

## 작동원리(How it works)

### 1. 동작 화면

![](assets/extension/Baekjoon.gif)

<div align="center">백준 동작 화면</div>
<br/>

![](assets/extension/Programmers.gif)

<div align="center">프로그래머스 동작 화면</div>
<br/>

![](assets/extension/SWExpertAcademy.gif)

<div align="center">SW Expert Academy 동작 화면</div>

### 2. 업로드 시점

<p> 백준허브는 풀이 제출 직후에 작동합니다. 백준은 신규 탭이 일시적으로 사용되고 업로드 후 자동 종료되며 프로그래머스는 제출 화면에서 바로 업로드가 진행됩니다.</p>

### 3. 저장되는 정보

<p>플랫폼 별로 문제 해결 시 파싱 후 저장되는 정보는 다음과 같습니다.</p>

<table>
  <tbody>
    <tr>
      <th>플랫폼</th>
      <th align="center">문제 메타 정보</th>
      <th align="center">사용자 제출 정보</th>
    </tr>
    <tr>
      <td>백준</td>
      <td align="left">
        <li>문제 제목</li>
        <li>문제 아이디</li>
        <li>문제 링크</li>
        <li>문제 등급</li>
        <li>문제 설명</li>
        <li>사용 언어</li>
        <li>문제 분류</li>
      </td>
      <td align="left">
        <li>코드</li>
        <li>사용한 메모리</li>
        <li>실행 시간</li>
      </td>
    </tr>
    <tr>
      <td>프로그래머스</td>
      <td align="left">
        <li>문제 제목</li>
        <li>문제 아이디</li>
        <li>문제 링크</li>
        <li>문제 등급</li>
        <li>문제 설명</li>
        <li>사용 언어</li>
      </td>
      <td align="left">
        <li>코드</li>
        <li>사용한 메모리</li>
        <li>실행 시간</li>
      </td>
    </tr>
    <tr>
      <td>SW Expert Academy</td>
      <td align="left">
        <li>문제 제목</li>
        <li>문제 아이디</li>
        <li>문제 링크</li>
        <li>문제 등급</li>
        <li>사용 언어</li>
      </td>
      <td align="left">
        <li>코드</li>
        <li>사용한 메모리</li>
        <li>실행 시간</li>
        <li>코드 길이</li>
      </td>
    </tr>
  </tbody>
</table>

<br />
<br />

<!--- 개발자 참고 내용 --->

## 개발자 참고 내용

```sh
$ npm test # jest test 실행
```

<!--- 링크 및 문서 --->

## 링크 및 문서

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/BaekjoonHub/BaekjoonHub/issues" title="버그신고">
          <img src="./assets/readme_icons/bug.png" width="100" height="100">
      </a><br/><sub><b>버그 신고</b></sub>
    </td>
    <td align="center">
      <a href="https://hyeon-jinhyeok.tistory.com/5" title="GetCurrentThread의 개발블로그">
        <img src="./assets/readme_icons/tstory.png" width="100" height="100">
      </a><br/><sub><b>개발 블로그</b></sub>
    </td>
    <td align="center">
      <a href="https://open.kakao.com/o/gOWn2ySd" title="카카오톡 협업방">
        <img src="./assets/readme_icons/kakao.png" width="100" height="100">
      </a><br/><sub><b>카카오톡 협업방</b></sub>
    </td>
    <td align="center">
      <a href="./Patch_Notes/" title="패치 노트">
        <img src="./assets/readme_icons/patchnotes.png" width="100" height="100">
      </a><br/><sub><b>패치 노트</b></sub>
    </td>
  </tr>
</table>

<br />
<br />
