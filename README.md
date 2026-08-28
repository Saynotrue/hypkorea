# hypkorea-site

https://hypkorea.com 운영 중인 사이트에서 복원한 정적 소스.

원본 소스를 분실해 라이브 사이트를 크롤링해 재구성했다. 서버는 GitHub Pages이고
빌드 도구 없는 순수 정적 사이트라, 아래 파일 전체가 곧 배포본이자 소스다.

- 복원일: 2026-08-28
- 원본 최종 수정: 2022-11-16 (index.html `Last-Modified` 헤더 기준)

## 구조

```
index.html          메인
company.html        회사 소개
manpower.html       인력 사업
disinfection.html   방역 사업
result.html         실적
form.html           문의 폼
HYP.pptx            회사 소개서 (푸터 다운로드 링크)
robots.txt
sitemap.xml
css/                normalize · common · main + 페이지별 css, slick 슬라이더
js/                 jquery 3.4.1, slick, common · main · manpower
img/                이미지 · 동영상 (페이지별 하위 디렉터리)
```

외부 의존성은 CDN 없이 전부 로컬에 포함되어 있고, 유일한 외부 임베드는
푸터 오시는 길의 Google Maps iframe 3개다.

## 로컬 확인

```sh
python3 -m http.server 8000
# http://localhost:8000/
```

`file://` 로 직접 열지 말 것 — 상대 경로 리소스 일부가 막힌다.

## 복원 시 누락된 파일 (원본도 동일)

`css/slick-theme.css` 가 참조하지만 라이브 사이트에도 없는 404 파일들이다.
서드파티 슬라이더의 구형 브라우저 fallback이라 렌더링에는 영향이 없다.

- `css/fonts/slick.eot`, `css/fonts/slick.svg` (IE용 폰트 fallback, `.woff`/`.ttf` 는 있음)
- `img/slide_prev.svg`, `img/slide_next.svg` (기본 화살표. 실제로는 페이지별 화살표를 따로 씀)

## 주의

크롤링 복원본이므로 **원본 저장소의 커밋 이력·주석·미사용 소스는 남아 있지 않다.**
GitHub Pages로 배포 중이니, 원래 저장소를 찾으면 그쪽을 정본으로 삼는 편이 낫다.
