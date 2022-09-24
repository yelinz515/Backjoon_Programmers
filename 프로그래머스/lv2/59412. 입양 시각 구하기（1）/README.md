# [level 2] 입양 시각 구하기(1) - 59412 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59412) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > GROUP BY

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;"><code style="user-select: auto;">ANIMAL_OUTS</code> 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. <code style="user-select: auto;">ANIMAL_OUTS</code> 테이블 구조는 다음과 같으며, <code style="user-select: auto;">ANIMAL_ID</code>, <code style="user-select: auto;">ANIMAL_TYPE</code>, <code style="user-select: auto;">DATETIME</code>, <code style="user-select: auto;">NAME</code>, <code style="user-select: auto;">SEX_UPON_OUTCOME</code>는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">TYPE</th>
<th style="user-select: auto;">NULLABLE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">ANIMAL_ID</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">ANIMAL_TYPE</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">DATETIME</td>
<td style="user-select: auto;">DATETIME</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">NAME</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">SEX_UPON_OUTCOME</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 09:00부터 19:59까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.</p>

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;">SQL문을 실행하면 다음과 같이 나와야 합니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">HOUR</th>
<th style="user-select: auto;">COUNT</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">9</td>
<td style="user-select: auto;">1</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">10</td>
<td style="user-select: auto;">2</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">11</td>
<td style="user-select: auto;">13</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">12</td>
<td style="user-select: auto;">10</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">13</td>
<td style="user-select: auto;">14</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">14</td>
<td style="user-select: auto;">9</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">15</td>
<td style="user-select: auto;">7</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">16</td>
<td style="user-select: auto;">10</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">17</td>
<td style="user-select: auto;">12</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">18</td>
<td style="user-select: auto;">16</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">19</td>
<td style="user-select: auto;">2</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<p style="user-select: auto;">본 문제는 <a href="https://www.kaggle.com/aaronschlegel/austin-animal-center-shelter-intakes-and-outcomes" target="_blank" rel="noopener" style="user-select: auto;">Kaggle의 "Austin Animal Center Shelter Intakes and Outcomes"</a>에서 제공하는 데이터를 사용하였으며 <a href="https://opendatacommons.org/licenses/odbl/1.0/" target="_blank" rel="noopener" style="user-select: auto;">ODbL</a>의 적용을 받습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges