---
title: "SonarCloud - Travis 연동"
classes: wide
toc: true
categroies:
  - Blog
tags:
  - Blog
---

# Code Quality - SonarCloud
- SonarCloud와 Github연결  
- SonarCloud 회원가입(https://sonarcloud.io/)  
- Allow to access for github repository
- get secure key

```shell
gem install travis
travis login --github-token ghp_uS****************wtN0iiSxg
travis encrypt SOMEVAR="fe7fe6**********e014803dfa8f" -r giyeonYu/OSS
```
ghp_uS****************wtN0iiSxg => github token
fe7fe6**********e014803dfa8f => travis token
+ edit .travis.yml

```yml
addons:
  sonarcloud:
    organization: "giyeonyu"
    token:
      secure: "**************************" # encrypted value of your token

script:
  # the following command line builds the project, runs the tests with coverage and then execute the SonarCloud analysis
  - mvn clean org.jacoco:jacoco-maven-plugin:prepare-agent install sonar:sonar -Dsonar.login=c1a58ac2e42e06851dd4e9c8de969a76a1d53a1f
```
sonarcloud needs over jdk11 at least.