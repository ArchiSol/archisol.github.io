---
title: "Codecove - Travis 연동"
classes: wide
toc: true
categroies:
  - Blog
tags:
  - Blog
---

## Code Coverage - CodeCov
- codecov 사이트 가입 후 repository 활성화  
- travis.yml script추가  

```yml
script: "mvn cobertura:cobertura"
after_success:
  - bash <(curl -s https://codecov.io/bash)
  - codecov
env:
   - CODECOV_TOME=583d22f4-1c33-4b5f-91ad-a370a0290fab
```
- pom.xml plugin 추가 
 
```xml
<plugin>
	<groupId>org.codehaus.mojo</groupId>
	<artifactId>cobertura-maven-plugin</artifactId>
	<version>2.7</version>
	<configuration>
		<formats>
			<format>html</format>
			<format>xml</format>
		</formats>
		<check />
	</configuration>
</plugin>
```