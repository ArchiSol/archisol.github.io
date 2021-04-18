---
title: "Release Note 자동화 (Release Drafter)"
classes: wide
toc: true
categroies:
  - Blog
tags:
  - Blog
---

Release 시점에 Release Note 를 작성하는것은 필수다. 하지만 수정사항이 많고 프로젝트 참여자가 많다면, 
Release Note 를 작성하고, 검토하는것은 쉽지 않은 일이다. Github 환경에서는 Release Drafter 를 통해
Release Note 작성을 자동화 할 수 있다.

## Release Drafter 사용방법
##### Action 설정
.github/workflows 디렉토리에 release-drafter.yml 생성

```yaml
name: Release Drafter
on:
  push:
    branches:
      - master
jobs:
  update_release_draft:
    runs-on: ubuntu-latest
    steps:
      - uses: release-drafter/release-drafter@v5
        with:
          config-name: release-drafter-config.yml # Release Drafter 설정파일
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```


##### Release Drafter Config 설정
./github 디렉토리에 release-drafter-config.yml 생성. 파일명은 action 에서 입력한 config-name 과 동일하게 해야함.

```yaml
name-template: 'v$NEXT_MINOR_VERSION' # 신규 Release Draft 의 이름
tag-template: 'v$NEXT_MINOR_VERSION' # 신규 Tag 명
categories: # 카테고리에 따라 PR / Issue 의 label 을 구분하여 Release Drafter 에 자동입력함
  - title: '🚀 Features' # Release Draft 에 보여질 항목명
    label: 'enhancement' # PR / Issue 의 label 
  - title: '🐛 Hotfixes'
    label: 'bug'
  - title: 'ETC'
    label: 'documentation'
change-template: '- $TITLE #$NUMBER @$AUTHOR '
template: |
  ## Uncategorized
  $CHANGES
```

##### 주의사항
Pull Request / Issue 작성시 Label 을 지정하여야 하며, commit message 또한 rule 을 지정하여 사용해야
추후 Release Drafter 를 통해 좋은 품질의 결과물을 얻을 수 있다.

## 참고
[github repository release 반쯤 자동화하기](https://medium.com/pozalabs/github-repository-release-%EB%B0%98%EC%AF%A4-%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EA%B8%B0-30e4738e5283)  
[Release Drafter Github](https://github.com/release-drafter/release-drafter)