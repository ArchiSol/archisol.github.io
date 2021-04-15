---
title: "조직구성"
permalink: /docs/organization/
last_modified_at: 2021-04-12
redirect_from:
  - /theme-setup/
layout: single
classes: wide
toc: true
---
## 오픈소스 프로젝트 역할
### 관리자(Maintainer)
오픈소스의 방향을 결정하는 사람들입니다. 일반적으로 창시자로 시작하여 프로젝트 관리위원회(PMC), TC (Technical Committee) 를 예로 들 수 있습니다.
이들은 오픈소스 프로젝트에서 의사결정권을 가지며, 올바른 방향으로 오픈소스가 발전하도록 기여합니다.
### 기여자(Contributor)
기여자는 오픈소스프로젝트에 Pull Request 하거나, 의견을 제시하는등 오픈소스를 위해 활동하는 모든 사람이라고 볼 수 있습니다.
### 커미터(Committer)
커미터는 Commit 이라는 권한과 책임을 가진 사람을 의미합니다. Pull Request 를 검토하고 승인합니다.

## 오픈소스 관리 구조
오픈소스 프로젝트는 일반적으로 BDFL(자비로운 종신독재자), Meritocracy(능력주의), Liberal Contribution(자유주의) 관리 구조를 사용합니다.
모든 구조는 각가의 장단점을 가지고 있으며, 실제로는 비슷한 부분을 많이 가지고 있습니다. 프로젝트의 성향에 다라 원하는 구조를 벤치마킹하여 
발전시키는 방향으로 사용해야합니다.
### BDFL(자비로운 종신독재자)
BDFL 은 "자비로운 종신독재자"(Benevolent Dictator for Life) 의 약자입니다. 이 구조에서는 한두명의 리더가 결정권을 갖습니다.
주로 기업주도의 프로젝트의 경우 BDFL 의 범주에 들어갑니다. (ex. Python)
### Meritocracy(능력주의)
Meritocracy 에서는 오픈소스 활동을 통해 주요 의사 결정자들가 선정됩니다.  ASF ( Apache Software Foundation ) 을 예로 들 수 있습니다.
ASF 의 경우 PMC 라는 프로젝트 관리위원회를 운영합니다. PMC 들은 오픈소스 프로젝트가 개인 / 특정 회사를 위해 운영되지 않고, 공공의 이익을위해
운영되도록 감시하고 관리합니다. PMC 는 기존 PMC 회원의 초대 / 투표를 통해 최종 선정됩니다.  (ex. Apache Foundation)
### Liberal Contribution(자유주의)
Liberal Contribution 에서는 가장 활발하게 기여하는 사람을 중심으로 운영됩니다. 과거 이력이 아닌 최근 작업들로 이를 판단합니다.
주요 사안들은 투표를 통해 결정하기 보다는, 합의점을 찾아 결정하는 방법으로 운영됩니다. 투표는 최후의 수단으로 사용됩니다. (ex. Node.js, Rust)


## 참고
[오픈소스가이드](https://opensource.guide/leadership-and-governance/)