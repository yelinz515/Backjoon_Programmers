# [level 1] 음양 더하기 - 76501 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/76501?language=javascript) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.09 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌2

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">absolutes의 길이는 1 이상 1,000 이하입니다.

<ul style="user-select: auto;">
<li style="user-select: auto;">absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.</li>
</ul></li>
<li style="user-select: auto;">signs의 길이는 absolutes의 길이와 같습니다.

<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">signs[i]</code> 가 참이면 <code style="user-select: auto;">absolutes[i]</code> 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.</li>
</ul></li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">absolutes</th>
<th style="user-select: auto;">signs</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;"><code style="user-select: auto;">[4,7,12]</code></td>
<td style="user-select: auto;"><code style="user-select: auto;">[true,false,true]</code></td>
<td style="user-select: auto;">9</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;"><code style="user-select: auto;">[1,2,3]</code></td>
<td style="user-select: auto;"><code style="user-select: auto;">[false,false,true]</code></td>
<td style="user-select: auto;">0</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #1</strong></p>

<ul style="user-select: auto;">
<li style="user-select: auto;">signs가 <code style="user-select: auto;">[true,false,true]</code> 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.</li>
<li style="user-select: auto;">따라서 세 수의 합인 9를 return 해야 합니다.</li>
</ul>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #2</strong></p>

<ul style="user-select: auto;">
<li style="user-select: auto;">signs가 <code style="user-select: auto;">[false,false,true]</code> 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.</li>
<li style="user-select: auto;">따라서 세 수의 합인 0을 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges