# [level 2] 동명 동물 수 찾기 - 59041 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59041) 

### 성능 요약

메모리: 0.0 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > GROUP BY

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;"><code style="user-select: auto;">ANIMAL_INS</code> 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. <code style="user-select: auto;">ANIMAL_INS</code> 테이블 구조는 다음과 같으며, <code style="user-select: auto;">ANIMAL_ID</code>, <code style="user-select: auto;">ANIMAL_TYPE</code>, <code style="user-select: auto;">DATETIME</code>, <code style="user-select: auto;">INTAKE_CONDITION</code>, <code style="user-select: auto;">NAME</code>, <code style="user-select: auto;">SEX_UPON_INTAKE</code>는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.</p>
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
<td style="user-select: auto;">INTAKE_CONDITION</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">NAME</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">TRUE</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">SEX_UPON_INTAKE</td>
<td style="user-select: auto;">VARCHAR(N)</td>
<td style="user-select: auto;">FALSE</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;">동물 보호소에 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL문을 작성해주세요. 이때 결과는 이름이 없는 동물은 집계에서 제외하며, 결과는 이름 순으로 조회해주세요. </p>

<h5 style="user-select: auto;">예시</h5>

<p style="user-select: auto;">예를 들어 <code style="user-select: auto;">ANIMAL_INS</code> 테이블이 다음과 같다면</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">ANIMAL_ID</th>
<th style="user-select: auto;">ANIMAL_TYPE</th>
<th style="user-select: auto;">DATETIME</th>
<th style="user-select: auto;">INTAKE_CONDITION</th>
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">SEX_UPON_INTAKE</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">A396810</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2016-08-22 16:13:00</td>
<td style="user-select: auto;">Injured</td>
<td style="user-select: auto;">Raven</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A377750</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2017-10-25 17:17:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Lucy</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A355688</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2014-01-26 13:48:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Shadow</td>
<td style="user-select: auto;">Neutered Male</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A399421</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2015-08-25 14:08:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Lucy</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A400680</td>
<td style="user-select: auto;">Dog</td>
<td style="user-select: auto;">2017-06-17 13:29:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Lucy</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">A410668</td>
<td style="user-select: auto;">Cat</td>
<td style="user-select: auto;">2015-11-19 13:41:00</td>
<td style="user-select: auto;">Normal</td>
<td style="user-select: auto;">Raven</td>
<td style="user-select: auto;">Spayed Female</td>
</tr>
</tbody>
      </table>
<ul style="user-select: auto;">
<li style="user-select: auto;">Raven 이름은 2번 쓰였습니다.</li>
<li style="user-select: auto;">Lucy 이름은 3번 쓰였습니다</li>
<li style="user-select: auto;">Shadow 이름은 1번 쓰였습니다.</li>
</ul>

<p style="user-select: auto;">따라서 SQL문을 실행하면 다음과 같이 나와야 합니다. </p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">NAME</th>
<th style="user-select: auto;">COUNT</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">Lucy</td>
<td style="user-select: auto;">3</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">Raven</td>
<td style="user-select: auto;">2</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<p style="user-select: auto;">본 문제는 <a href="https://www.kaggle.com/aaronschlegel/austin-animal-center-shelter-intakes-and-outcomes" target="_blank" rel="noopener" style="user-select: auto;">Kaggle의 "Austin Animal Center Shelter Intakes and Outcomes"</a>에서 제공하는 데이터를 사용하였으며 <a href="https://opendatacommons.org/licenses/odbl/1.0/" target="_blank" rel="noopener" style="user-select: auto;">ODbL</a>의 적용을 받습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges