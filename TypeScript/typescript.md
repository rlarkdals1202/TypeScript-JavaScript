# TypeScript
TypeScript 는 타입에 대한 문법이 있는 JavaScript 이다.
<br>(TypeScript 홈페이지: [TypeScript](https://www.typescriptlang.org/))
<br><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg">

>* **TypeScript 는 최종적으로 JavaScript 로 변환된다.** 웹 브라우저(Chrome, Edge..)나 Node.js 는 모두 .js 파일을 실행시킨다.
>* TypeScript 는 **tsc** 를 제공한다. (tsc 는 TypeScript 코드를 JavaScript 코드로 변환시킨다.)
>* tsc 는 **tsconfig.json** 파일에 따라서 TypeScript 코드를 JavaScript 코드로 바꿔준다. (가장 중요한 파일)
>  * **allowJS** : JavaScript 파일 컴파일 허용 여부
>  * **strict** : 모든 엄격한 타입 검사 옵션 활성화 여부
>  * **module** : 생성되는 모듈 코드를 지정<br>(require, import)
>  * **forceConsistentCasingInFileNames** : import, require 내에서 파일 대소문자 구분 허용 여부
>  * **skipLibCheck** : .d.ts 파일의 타입 확인을 건너 뛸 지에 대한 허용 여부
>* tsc 관련 명령어<br>(타입스크립트 설치 명령어: **npm install typescript**)
>  * **npx tsc --noEmit** : 단순한 타입 검사
>  * **npx tsc --init** : 기본 형태의 tsconfig.json 파일 생성
>  * **npx tsc** : TypeScript 파일을 JavaScript 파일로 변환
>  * 
>* .ts 파일을 실행시키는 것이 아니다. .js 파일을 실행시키는 것이다.<br>(tsc 를 통해 변환된 .js 파일)
>* 