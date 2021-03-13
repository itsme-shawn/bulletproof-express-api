# bulletproof-express-api

## 목표
[견고한 node.js 프로젝트 설계하기](https://velog.io/@hopsprings2/%EA%B2%AC%EA%B3%A0%ED%95%9C-node.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0) 를 읽고 난 후, 3-layer Architecture 를 Express REST api 에 적용해보기

## 3-layer 아키텍처란?

3-tier 아키텍처가 물리적인 구분이라면, 3-layer 아키텍처는 논리적인 구분이다.  

1. Presentation Layer(Route API Controller) : Route API 를 통해 HTTP 통신(req,res)을 담당한다.
2. Service(Business Logic) Layer : 비즈니스 로직을 담당한다.
3. Data Access Layer : DB 모델

각각의 레이어에서 다른 레이어를 호출함으로써 소프트웨어가 구성된다.

## 폴더 구조

```
src
│   app.js          # 엔트리 파일
└───api             # Presentation Layer (Express app 의 모든 route controllers)
└───config          # 환경변수
└───loaders         # 시작 프로세스(Express, mongoose ..) loader
└───models          # Data Access Layer (데이터베이스 모델)
└───services        # Service Layer (비즈니스 로직 작성)
└───subscribers     # 비동기 작업에 대한 이벤트 핸들러
```
