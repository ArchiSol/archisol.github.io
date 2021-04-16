---
title: "프로젝트 환경구성"
permalink: /docs/setupossenv/
last_modified_at: 2021-04-12
redirect_from:
  - /theme-setup/
layout: single
classes: wide
toc: true
---
오픈소스 개발환경은 GitHub를 중심으로 수많은 오픈소스 서비스들로 구성되어있다. GitHub 기능만으로도 
프로젝트 계획, 소스관리, 문서관리, 웹사이트, CI/CD 까지 거의 모든 환경구성을 진행할 수 있다. 
또한 Travis CI, Circle CI, Codecov, Slack, Sonarcloud, telegram 등 수많은 서비스와 연동하여
유기적으로 프로젝트를 진행할 수 있다.

## 오픈소스 CI/CD 환경
오픈소스 프로젝트에서 일반적으로 사용하는 서비스 / 솔루션을 정리한 내용이다.
<figure>
  <img src="{{ '/assets/images/osscicd.PNG' | relative_url }}" alt="oss cicd">
</figure>


### PLAN
[요구사항 / 진척사항]({{ "/github-issue-project/" | relative_url }}) 등 을 관리한다.  


### Develop
분석 / 설계 / 개발 / 문서화 등이 진행된다. 생성되는 결과물은 Git 과 같은 VCS 를 통해 관리 된다.
오픈소스 프로젝트에 대한 웹사이트는 일반적으로 Static Site Generator([Jekyll]({{ "/jekyll/" | relative_url }}), [Gatsby]({{ "/gatsby/" | relative_url }})) 를 통해 생성하여 관리한다.  


### Integration
오픈소스 전반에 걸쳐 프로젝트 통합작업을 수행한다. Build / Testing / Release 가 대표적인 작업이다.
[Github Action]({{ "/github-action/" | relative_url }}), [Travis]({{ "/travis/" | relative_url }}), Circle CI 를 많이 사용하는 추세이다.  

### Build
library packaging, testing, code quality 분석등 다양한 작업이 Build 를 통해 진행된다.
Pull Request, Merge, Push 등 다양한 시점에 자동으로 트리거되도록 설정할 수 있다.  

### Verify
Code Quality, Testing 작업을 진행한다. 이를 통해 오픈소스의 완성도를 높일 수 있다.
rxJava 와 같은 프로젝트는 Coverage 가 100% 를 유지하고 있다. 이런 지표들을 통해 사용자에게 신뢰받는 오픈소스로 거듭날 수 있다.  
sonarcloud 설명  
codecov 설명

### Release
Build 에 의해 생성된 jar, war, static website, 문서 등 결과물을 배포한다.
유형에 따라 Maven, Artifactory, GitHub Page 등에 배포된다.  
artifactory 설명  


### Feedback
오픈소스에서 커뮤니티를 운영하는것은 가장 중요한 작업중 하나다. 커뮤니티의 활성화에 따라 사용자 / 기여자 의 참여율이 달라진다.
여러가지 Feedback 경로를 통해 사용자들의 의견을 청취하고, 반영해야한다.  

***환경 구성 관련하여 유용한 자료들은 Blog 를 통해 지속적으로 업로드할 예정임***