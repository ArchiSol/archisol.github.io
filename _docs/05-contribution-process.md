---
title: "기여절차"
permalink: /docs/contribution-process/
last_modified_at: 2021-04-12
redirect_from:
  - /theme-setup/
layout: single
classes: wide
toc: true
---

## Issue 생성 및 관리
1. Issue유형
  - 프로그램 버그
  - 프로그램 개선사항 및 아이디어
  - 일반 문의 
2. 생성 및 관리
  - Issue를 생성하고 관리할 수 있는 Tools(Git-Issue, jira 등)를 사전에 정의하라
  - 식별된 Issue에 대해 중복으로 등록이 되는 것을 막아라
  - Issue Template을 작성하여 일관성있는 Issue Format을 유지하라
  - Issue Label을 생성하여 Issue를 효율적으로 

## Pull Request
Pull Request는 local에서 작업이 완료된 소스를 remote repository에 push를 요청하는 절차이며 아래 사항에 유의해야 한다
1. 유의사항
  - 기존에 생성된 Issue에 관련된 내용만 Pull Request를 요청하며, 요청 시에는 해당 Issue Number를 Mapping 해주어야 한다
  - Pull Request 요청 전 해당 프로젝트의 Pull Request 요건(CLA서명, Commit Rule 등)을 확인한다

2. 절차
  - 생성된 Issue를 확인하고 local에 Fork된 소스를 수정한다
  - Pull Request 요건을 확인하여 적절히 요청한다
  - Pull Request Trigger에 의해 Build, Code Coverage, Test 등의 프로세스가 자동으로 수행된다
  - 모든 내용이 통과한 후 관리자는 검토 후에 Merge 여부를 검토한다

## Documentation
1. Readme
   Readme문서는 프로젝트 소개 및 사용 방법 등이 설명되어있는 문서이다. Contributing전 프로젝트에 대한 이해를 위해 확인해야 하는 문서이다
2. Contributing
   Readme문서는 Contributor보다는 사용자를 위한 문서이며, Contributing은 프로젝트에 기여하는 사람들을 위한 문서이다.
   기여하기위한 방법이 설명되어 있기 떄문에 필수로 확인해야 한다. 만약 해당 문서가 없다면 관리자에게 기여 방법을 문의 해야한다.
3. Code Of Conduct
   행동수칙, 행동강령이라고도 불리며 프로젝트가 건강하게 유지되기 위한 Contributor들의 행동 Rule을 정의한다.
4.Manual
   수정되는 소스로 인한 메뉴얼 수정이 필요할 경우 함께 수정되어야 한다.

## Feedback
관리자는 Contributor에게 프로그래밍 내역에 대해 상세한 설명을 요구할 수 있으며 그에 따라 개발된 소스의 Merge여부가 결정될 수 있다
이는 Contributor의 개발 능력의 관점보다는 프로젝트의 Rule, 목적에 기반한다
1. Pull Request에 대한 무응답
  - 일정기간동안 관리자로부터 응답이 오지 않을 경우 멘션(@)기능을 통해 관리자에게 notify를 해라
  - 개인적으로는 연락을 하지 않는다
2. 수정 요청 시
  - 수정요청을 받을 경우 즉시 대응해야 한다. PR(Pull Request)가 열려둔 상태로 남겨저 있으면 안되기 때문이다. 만약 수정이 불가할 경우 관리자에게 해당 내용을 notify하여
    해당 PR를 Close하거나 다른 사람이 해결할 수 있도록 해야 한다
3. 거절 될 경우
  - 거절된 내용이 이해가 가지 않을 경우 설명을 요청하라. 하지만 이에대해 논쟁을 하거나 강압적으로 승인을 요청하는 것을 절대 금기이다. 만약 의견 조율이 되지 않는다면
    자신의 repository에 fork를 하여 개별프로젝트로 직접 진행하면 된다
