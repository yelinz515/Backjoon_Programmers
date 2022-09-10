# [level 1] 나머지가 1이 되는 수 찾기 - 87389 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/87389?language=javascript) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌3

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">자연수 <code style="user-select: auto;">n</code>이 매개변수로 주어집니다. <code style="user-select: auto;">n</code>을 <code style="user-select: auto;">x</code>로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 <code style="user-select: auto;">x</code>를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">3 ≤ <code style="user-select: auto;">n</code> ≤ 1,000,000</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">n</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">10</td>
<td style="user-select: auto;">3</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">12</td>
<td style="user-select: auto;">11</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #1</strong></p>

<ul style="user-select: auto;">
<li style="user-select: auto;">10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.</li>
</ul>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #2</strong></p>

<ul style="user-select: auto;">
<li style="user-select: auto;">12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges