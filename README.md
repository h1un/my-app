# MY APP

## 디자인 시스템 
### variants: {
#### variant: 모양
#### intent: 의도
- primary: 기본 색, 가장 많이 사용되는 색
- secondary: 보조 색, 주 색과 함께 사용되며 덜 강조됨
- success:  성공적인 작업을 나타내는 색, 예를 들어 저장, 완료
- danger: 위험한 작업을 나타내는 색, 예를 들어 삭제, 취소
- warning: 경고를 나타내는 색, 예를 들어 주의가 필요한 작업


<details>
<summary> intent 에 대한 고민</summary>
<div markdown="1">

#### 기본 intent
- primary: 기본 색, 가장 많이 사용되는 색
- secondary: 보조 색, 주 색과 함께 사용되며 덜 강조됨
- success:  성공적인 작업을 나타내는 색, 예를 들어 저장, 완료
- danger: 위험한 작업을 나타내는 색, 예를 들어 삭제, 취소
- warning: 경고를 나타내는 색, 예를 들어 주의가 필요한 작업
- info : 정보 제공 색, 예를 들어 도움말, 정보 표시 - secondary 색상 참조 ( 동일함 )
  - 언제 info 를 쓰고 언제 secondary 를 쓰냐 ? 그냥 쓰지 말까 .........

#### 고민

- primary = success
- secondary = info
- destructive = danger
- tertiary = warning

이렇게 가야하는거 아닌지? ( 왜냐면 나는 성공도 파랑색으로 하고 싶기 때문 )

고민한 내용
- info : 정보 제공 색, 예를 들어 도움말, 정보 표시
  - secondary 색과 동일한 역할을 한다면 ?? 언제 secondary 를 쓰고 언제 info 를 쓴건지? 
- primary 가 파랑색인데, success 도 파랑색으로 할것인지? 보통 초록색을 많이 사용하는데 파랑색을 사용한다면, 굳이 success 를 구분할 필요가 있는가 ?? 


</div>
</details>


#### size: {
md: 'h-10 px-4 py-2 text-sm',
sm: 'h-9 rounded-md px-3 text-xs',
lg: 'h-11 rounded-md px-8 text-base',
},