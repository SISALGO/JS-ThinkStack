<div align='center'>

<img src='../../../images/boj.jpg' width='600'/>

</div>

<br>

> 이 게시글은 [백준 9251번 LCS](https://www.acmicpc.net/problem/9251) 문제를 풀이합니다. 언어는 *Javascript*입니다.

<br>

# 문제
LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.

예를 들어, ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.

<br>

# 입력
> 첫째 줄과 둘째 줄에 두 문자열이 주어진다. 문자열은 알파벳 대문자로만 이루어져 있으며, 최대 1000글자로 이루어져 있다.

## 예제 입력 1

```
ACAYKP
CAPCAK
```

<br>

# 출력
> 첫째 줄에 입력으로 주어진 두 문자열의 LCS의 길이를 출력한다.

## 예제 출력 1

```
4
```

<br>

# 풀이
## 접근
LCS(Longest Common Subsequence, 최장 공통 부분수열)는 최장 공통 문자열(Longest Common Substring)이라고도 합니다. 점화식을 보며 알아볼까요?

```
Target, Compare
만약 i가 0이거나 j가 0이라면
	LCS[i][j] = 0
만약 Target의 i번째가 Compare의 j번째와 같다면
	LCS[i][j] = LCS[i - 1][j - 1] + 1
둘 다 아니라면
	LCS[i][j] = 0
```

우선 LCS라는 2차원 배열로 Target, Compare 문자열의 행, 열을 바인딩합니다. 그 후 아래와 같이 흐릅니다.

1. Target과 Compare를 한 글자씩 비교합니다.
2. 비교된 글자가 다르다면 `LCS[i][j]`을 **0**으로 기록합니다.
3. 비교된 글자가 같다면 `LCS[i - 1][j - 1]`에 **1 증가**시킵니다.
4. 비교할 문자열이 없을 때까지 반복합니다.

최장 공통 문자열은, 말 그대로 제일 긴(연속 된) 문자열을 찾는 알고리즘이니 가능한 점화식입니다!

위의 논리 그대로 풀이에 적용하면 되겠습니다.

<br>

## 알고리즘(의사 코드)
> [의사 코드 바로 읽기](./9251.txt)

<br>

## 구현
> [구현 코드 바로 읽기](./9251.js)

<br>

# 참고
## 구조
- 9251.txt : 의사 코드
- 9251.js : 구현 코드
- stdin : 테스트 케이스

<br>

## 같이 읽기
- [그림으로 알아보는 LCS](https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence)

<br>

