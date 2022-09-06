# [level 1] 하샤드 수 - 12947 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12947) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.</p>

<h5 style="user-select: auto;">제한 조건</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">x</code>는 1 이상, 10000 이하인 정수입니다.</li>
</ul>

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">arr</th>
<th style="text-align: center; user-select: auto;">return</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">10</td>
<td style="text-align: center; user-select: auto;">true</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">12</td>
<td style="text-align: center; user-select: auto;">true</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">11</td>
<td style="text-align: center; user-select: auto;">false</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">13</td>
<td style="text-align: center; user-select: auto;">false</td>
</tr>
</tbody>
      </table>
<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #1</strong><br style="user-select: auto;">
10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.</p>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #2</strong><br style="user-select: auto;">
12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.</p>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #3</strong><br style="user-select: auto;">
11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.</p>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #4</strong><br style="user-select: auto;">
13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges