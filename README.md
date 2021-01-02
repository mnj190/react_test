# 생활코딩 React

## Bulid / Start

1) npm run start --> 다양한 기능을 포함하고 있지만 용량이 크다. 개발 시 사용
2) npm run build --> 사용된 기능만 포함하여 용량이 작다. 배포 시 사용

## Component

* 컴포넌트 생산 시 하나의 최상위 태그만 사용

## JSX
    {this.props.title}

## props
    ### 컴포넌트 태그의 속성으로 데이터 등록
        <Subject title="WEB"> </Subject>

    ### 컴포너틑 클래스에서 JSX로 데이터 출력

## React Developer Tool
    리액트로 작성된 페이지의 컴포넌트 확인, 수정 가능

## Constructor
    컴포넌트 사용시 가장먼저 실행되어 초기화 담당

## State
    외부에서 스테이트 값을 알 수 없다. (은닉성)
    스테이트의 값을 컴포넌트의 props의 값으로 사용

## Tag Option
    * onClick
    * preventDefault
    * onChangePage - 클릭 시 호출할 함수 등록

## debugger
    디버거 실행 시 동작 정지

## bind
    * render안의 함수 안에서 this 호출 시 this는 window or undefined
    * this.function_name.bind(this); 사용 시 함수의 this는 bind의 값

## setState
    동적으로 state 변경 시 setState를 사용해야지 변경 후 리로딩