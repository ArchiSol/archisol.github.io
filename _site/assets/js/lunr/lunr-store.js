var store = [{
        "title": "조직구성",
        "excerpt":"오픈소스 프로젝트 역할 관리자(Maintainer) 오픈소스의 방향을 결정하는 사람들입니다. 일반적으로 창시자로 시작하여 프로젝트 관리위원회(PMC), TC (Technical Committee) 를 예로 들 수 있습니다. 이들은 오픈소스 프로젝트에서 의사결정권을 가지며, 올바른 방향으로 오픈소스가 발전하도록 기여합니다. 기여자(Contributor) 기여자는 오픈소스프로젝트에 Pull Request 하거나, 의견을 제시하는등 오픈소스를 위해 활동하는 모든 사람이라고 볼 수 있습니다. 커미터(Committer) 커미터는 Commit...","categories": [],
        "tags": [],
        "url": "/docs/organization/",
        "teaser": null
      },{
        "title": "라이선스",
        "excerpt":"오픈소스라고 해서 모두가 마음대로 가져다 쓸 수 있는것은 아니다. 저작권, 특허, 지적재산권을 보호하기 위해 오픈소스 프로젝트에서는 라이선스를 선정하게 된다. 라이선스에 따라 개발자와 이용자의 사용 방법 및 조건의 범위를 달라진다. 간단히 오픈소스 라이브러리를 가져다 쓰는 경우에도, 라이선스에 따라 수정 및 배포가 자유로울 수도 있고, 관련된 모든 소스를 오픈해야 할수도 있다. 이를...","categories": [],
        "tags": [],
        "url": "/docs/license/",
        "teaser": null
      },{
        "title": "프로젝트 환경구성",
        "excerpt":"오픈소스 개발환경은 GitHub를 중심으로 수많은 오픈소스 서비스들로 구성되어있다. GitHub 기능만으로도 프로젝트 계획, 소스관리, 문서관리, 웹사이트, CI/CD 까지 거의 모든 환경구성을 진행할 수 있다. 또한 Travis CI, Circle CI, Codecov, Slack, Sonarcloud, telegram 등 수많은 서비스와 연동하여 유기적으로 프로젝트를 진행할 수 있다. 오픈소스 CI/CD 환경 오픈소스 프로젝트에서 일반적으로 사용하는 서비스 /...","categories": [],
        "tags": [],
        "url": "/docs/setupossenv/",
        "teaser": null
      },{
        "title": "기여 Rule",
        "excerpt":"CLA서명 모든 Contributor는 CLA(Contributor License Agreement)에 서명해야 한다. Contributor의 저작물을 관리하면서 관리할 수 있는 저작권 분쟁을 줄이기 위해 Contributor에게 동의를 구하는 약정서이다. 이를 완료해야만 Contributor가 될 수 있다. 저작권 수정되는 파일의 상단에 아래와 같이 저작권과 라이선스가 표시되어야 한다. Copyright*** Apache License 2.0 지식재산 민감한 정보, 특허 등 기업의 지식재산 노출이...","categories": [],
        "tags": [],
        "url": "/docs/contribution-rule/",
        "teaser": null
      },{
        "title": "기여절차",
        "excerpt":"Issue 생성 및 관리 Issue유형 프로그램 버그 프로그램 개선사항 및 아이디어 일반 문의 생성 및 관리 Issue를 생성하고 관리할 수 있는 Tools(Git-Issue, jira 등)를 사전에 정의하라 식별된 Issue에 대해 중복으로 등록이 되는 것을 막아라 Issue Template을 작성하여 일관성있는 Issue Format을 유지하라 Issue Label을 생성하여 Issue를 효율적으로 Pull Request Pull Request는...","categories": [],
        "tags": [],
        "url": "/docs/contribution-process/",
        "teaser": null
      },{
        "title": "Codecov - Github Action 연동",
        "excerpt":"Code Coverage Code Coverage 는 테스트를 진행했을때 코드 자체가 얼마나 실행되었는지 측정하는 것이다. 코드는 구문(Statement), 조건(Condition), 결정(Decision) 으로 이루어진다. 이 세가지 항목을 얼마나 커버했느냐에 따라 측정값이 달라진다. 일반적으로 많이 사용되는 커버리지는 구문(Statement)커버리지이며, 실행 코드라인이 한번 이상 실행 되면 충족된다. 조건(Condition)커버리지는 각 내부 조건이 참 혹은 거짓을 가지면 충족된다. 결정(Decision) 커버리지는...","categories": [],
        "tags": ["Blog"],
        "url": "/code-coverage/",
        "teaser": null
      },{
        "title": "Opensource Guide",
        "excerpt":"#oss guide 시작??  ","categories": [],
        "tags": ["Blog"],
        "url": "/oss-guide/",
        "teaser": null
      },{
        "title": "Jekyll",
        "excerpt":"Jekyll은 개인 프로젝트 또는 조직 사이트에 적합한 정적 사이트 생성기 입니다. Jekyll 은 콘텐츠를 가져와 Markdown 및 Liquid 템플릿을 렌더링하여 웹사이트를 생성합니다. 기본적으로 Jekyll 은 Ruby 로 만들어져 있으나, 운영하는데 Ruby 를 공부할 필요는 없습니다. 간단히 Markdown 을 생성 수정하는것 만으로 웹사이트를 운영할 수 있습니다. 또한 GitHub 와 강력히 연동되어...","categories": [],
        "tags": ["Blog"],
        "url": "/jekyll/",
        "teaser": null
      },{
        "title": "Codecove - Travis 연동",
        "excerpt":"Code Coverage - CodeCov     codecov 사이트 가입 후 repository 활성화   travis.yml script추가   script: \"mvn cobertura:cobertura\" after_success:   - bash &lt;(curl -s https://codecov.io/bash)   - codecov env:    - CODECOV_TOME=583d22f4-1c33-4b5f-91ad-a370a0290fab     pom.xml plugin 추가   &lt;plugin&gt; \t&lt;groupId&gt;org.codehaus.mojo&lt;/groupId&gt; \t&lt;artifactId&gt;cobertura-maven-plugin&lt;/artifactId&gt; \t&lt;version&gt;2.7&lt;/version&gt; \t&lt;configuration&gt; \t\t&lt;formats&gt; \t\t\t&lt;format&gt;html&lt;/format&gt; \t\t\t&lt;format&gt;xml&lt;/format&gt; \t\t&lt;/formats&gt; \t\t&lt;check /&gt; \t&lt;/configuration&gt; &lt;/plugin&gt;  ","categories": [],
        "tags": ["Blog"],
        "url": "/code-coverage-codecov-with-travis/",
        "teaser": null
      },{
        "title": "Gatsby",
        "excerpt":"Site - Gatsby Static Site Generator Gatsby Starter Template사이트에 방문하여 원하는 Template 설치 https://www.gatsbyjs.com/starters/ # Insatllation with 'git clone' git clone git@github.com:&lt;user&gt;/&lt;repository&gt; my-site cd my-site # Installation dependency yarn insatll # To develop yarn develop # To build yarn build # To start gatsby develop Git Repository에 Push Git Page...","categories": [],
        "tags": ["Blog"],
        "url": "/gatsby/",
        "teaser": null
      },{
        "title": "GitHub Action",
        "excerpt":"GitHub Action 은 소프트웨어 개발 워크플로우를 자동화하는 도구이다. Github 에서 Pull Reqeust, Issue 생성, Merge 등의 이벤트가 생성했을때 Action 을 통해 워크플로우를 수행할 수 있다. 기존에는 Travis 나 Circle 과 같은 CI 도구를 많이 사용하였으나 관리를 위해 GitHub 와 다른 서비스 페이지를 이동해야 하는 불편이 있었다. 이제는 GitHub 에서 직접...","categories": [],
        "tags": ["Blog"],
        "url": "/github-action/",
        "teaser": null
      },{
        "title": "GitHub Issue & Project",
        "excerpt":"Issue 프로젝트 내부적으로 Issue 를 통해 요구사항 / 진적사항 관리가 가능하며, 사용자들이 문의를 올리거나, Bug 리포팅하는 공간으로도 사용이 가능하다. Github 에서 Issue 번호가 생성되면. Pull Request 부터, Release Note 작업까지 해당 번호를 다양한 방식으로 연동하여 사용할 수 있다. Template GitHub Settings 의 Features 에서 Issue 에 대한 Template 설정이 가능하다....","categories": [],
        "tags": ["Blog"],
        "url": "/github-issue-project/",
        "teaser": null
      },{
        "title": "SonarCloud - Travis 연동",
        "excerpt":"Code Quality - SonarCloud SonarCloud와 Github연결 SonarCloud 회원가입(https://sonarcloud.io/) Allow to access for github repository get secure key gem install travis travis login --github-token ghp_uS****************wtN0iiSxg travis encrypt SOMEVAR=\"fe7fe6**********e014803dfa8f\" -r giyeonYu/OSS ghp_uS******wtN0iiSxg =&gt; github token fe7fe6****e014803dfa8f =&gt; travis token edit .travis.yml addons: sonarcloud: organization: \"giyeonyu\" token: secure: \"**************************\" # encrypted value of...","categories": [],
        "tags": ["Blog"],
        "url": "/sonarcloud-travis/",
        "teaser": null
      },{
        "title": "Github - Telegram 연동",
        "excerpt":"Telegram Notify 1.Add ./github/workflow/main.xml for github action name: telegram message on: [push] jobs: build: name: Build runs-on: ubuntu-latest steps: - uses: actions/checkout@master - name: send custom message uses: appleboy/telegram-action@master with: to: $ token: $ message: | The $ event triggered final step. echo This event is a pull request that...","categories": [],
        "tags": ["Blog"],
        "url": "/telegram/",
        "teaser": null
      },{
        "title": "Travis",
        "excerpt":"Travis Travis CI, Github계정으로 회원가입 연동시킬 Repository 활성화 Project root경로에 .travis.yml 작성 language: java jdk: - openjdk11 # using jdk11 at least for sonarcloud branches: only: - master # Travis CI 서버의 Home cache: directories: - $HOME/.m2 # CI 실행 완료시 메일로 알람 notifications: email: recipients: - your@Email.com Github Readme.md에...","categories": [],
        "tags": ["Blog"],
        "url": "/travis/",
        "teaser": null
      }]
