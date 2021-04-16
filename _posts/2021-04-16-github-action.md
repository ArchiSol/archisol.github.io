---
title: "GitHub Action"
classes: wide
toc: true
categroies:
  - Blog
tags:
  - Blog
---

GitHub Action 은 소프트웨어 개발 워크플로우를 자동화하는 도구이다. 
Github 에서 Pull Reqeust, Issue 생성, Merge 등의 이벤트가 생성했을때 Action 을 통해 워크플로우를 수행할 수 있다.
기존에는 Travis 나 Circle 과 같은 CI 도구를 많이 사용하였으나 관리를 위해 GitHub 와 다른 서비스 페이지를 이동해야 하는 불편이 있었다.
이제는 GitHub 에서 직접 Action 서비스를 시작하면서, GitHub 안에서 CI/CD 작업이 가능해졌다.
Github Marketplace 를 통해 다른 사용자들이 공개한 Action 을 바로 활용할 수 있다.
대부분의 우리가 원한는 작업들이 이미 공개되어있으며, 간단히 조합만으로 새로운 워크플로우를 만들어 사용 할 수 있다.

## Action 생성
대부분의 작업은 Marketplace 에서 참조하여 사용이 가능하다. 하지만 추가적인 작업이 필요한경우 개인이 자신만의 Action 을 만들수도 있다. Docker Image 나 Java Script 를 사용하여 Action 을 생성할 수 있다.
자세한 내용은 [Falsy Lab 의 Blog](https://falsy.me/github-actions-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-2-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%95%A1%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EA%B9%83%ED%97%88%EB%B8%8C-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A0%88/) 에서 확인할 수 있다.

## Workflow 생성
.github/workflows 디렉토리에 yml 을 작성하면 GitHub Action 에서 인식하여 Event 발생시 자동으로 해당하는 workflow 를 실행한다.  
Youtube 강좌 : [GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker](https://www.youtube.com/watch?v=R8_veQiYBjI&ab_channel=TechWorldwithNana)

- Sample Workflow - Artifact  생성 / Upload

```yaml
name: JFrog upload # Workflow 명

on: # Event - Workflow trigger 조건
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build: # Job id
    runs-on: ubuntu-latest # Workflow 수행 환경 (ubuntu, mac, window 가능)
    steps:
      - uses: actions/checkout@v2 # code check out -> actions 에서 제공하는 공식 checkout 소스
                                  #                    https://github.com/actions/checkout
      - name: Set up JDK 11       # Java 설치
        uses: actions/setup-java@v1
        with:
          java-version: 11
      - name: Grant execute permission for gradlew # Gradle 수행권한 설정
        run: chmod +x gradlew
      - name: Build Jar # Gradle Build 수행
        run: ./gradlew build
      - name: Upload Artifact to JFrog # JForg Upload 수행
        uses: katcosgrove/jfrogcli-action@v1.0.0-beta # katcosgrove 라는 개인이 생성한 action
        with:
          cmd: 'u "build/libs/opensourceenv-1.0-SNAPSHOT.jar" "sampleRepo/opensourceenv/" --recursive=false'
        env:
          auth: 'username'
          user: ${{ secrets.RT_USER }}  # Github Settings 에 등록한 secret 참조
          pass: ${{ secrets.RT_PASSWORD }}
          url: 'https://opensourceenv.jfrog.io/artifactory/'
``` 


## 참고
[GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker](https://www.youtube.com/watch?v=R8_veQiYBjI&ab_channel=TechWorldwithNana)
[Falsy Lab 의 Blog](https://falsy.me/github-actions-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-2-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%95%A1%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EA%B9%83%ED%97%88%EB%B8%8C-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A0%88/)