// =============================
// 프로젝트 데이터 — 실제 작업물로 교체하세요
// =============================
const works = [
  {
    id: 'project-one', title: 'Project One', name: '프로젝트 원', category: 'Food & Beverage', year: 2024,
    main: 'assets/images/works/placeholder-a.svg',
    url: '#',
    subtitle: '여기에 프로젝트 한 줄 소개를 작성하세요',
    overview: '프로젝트에 대한 개요를 작성하세요. 어떤 클라이언트와 어떤 문제를 어떻게 풀어냈는지, 비주얼 방향과 구현 포인트를 간단히 설명합니다.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-two', title: 'Project Two', name: '프로젝트 투', category: 'Electronics', year: 2024,
    main: 'assets/images/works/placeholder-b.svg',
    url: '#',
    subtitle: '여기에 프로젝트 한 줄 소개를 작성하세요',
    overview: '프로젝트에 대한 개요를 작성하세요. 어떤 클라이언트와 어떤 문제를 어떻게 풀어냈는지, 비주얼 방향과 구현 포인트를 간단히 설명합니다.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-three', title: 'Project Three', name: '프로젝트 쓰리', category: 'IT · Embedded', year: 2023,
    main: 'assets/images/works/placeholder-c.svg',
    url: '#',
    subtitle: '여기에 프로젝트 한 줄 소개를 작성하세요',
    overview: '프로젝트에 대한 개요를 작성하세요. 어떤 클라이언트와 어떤 문제를 어떻게 풀어냈는지, 비주얼 방향과 구현 포인트를 간단히 설명합니다.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-four', title: 'Project Four', name: '프로젝트 포', category: 'Materials', year: 2024,
    main: 'assets/images/works/placeholder-d.svg',
    url: '#',
    subtitle: '여기에 프로젝트 한 줄 소개를 작성하세요',
    overview: '프로젝트에 대한 개요를 작성하세요. 어떤 클라이언트와 어떤 문제를 어떻게 풀어냈는지, 비주얼 방향과 구현 포인트를 간단히 설명합니다.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-five', title: 'Project Five', name: '프로젝트 파이브', category: 'Medical Device', year: 2023,
    main: 'assets/images/works/placeholder-a.svg',
    url: '#',
    subtitle: '여기에 프로젝트 한 줄 소개를 작성하세요',
    overview: '프로젝트에 대한 개요를 작성하세요. 어떤 클라이언트와 어떤 문제를 어떻게 풀어냈는지, 비주얼 방향과 구현 포인트를 간단히 설명합니다.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-six', title: 'Project Six', name: '프로젝트 식스', category: 'Advertising', year: 2023,
    main: 'assets/images/works/placeholder-b.svg',
    url: '#',
    subtitle: '여기에 프로젝트 한 줄 소개를 작성하세요',
    overview: '프로젝트에 대한 개요를 작성하세요. 어떤 클라이언트와 어떤 문제를 어떻게 풀어냈는지, 비주얼 방향과 구현 포인트를 간단히 설명합니다.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
];

// 자투리 프로젝트 — 이름 + 외부링크만 (없으면 url 생략)
const worksExtra = [
  { name: 'Project Seven', url: '#' },
  { name: 'Project Eight', url: '#' },
  { name: 'Project Nine', url: '#' },
  { name: 'Project Ten' },
];

// =============================
// Works 리스트 스파클 마크
// =============================
function initWorksSparkle() {
  const SPARKLE_SVG = `<svg class="works__sparkle" viewBox="-1.1 -1.1 2.2 2.2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0,-1 L0.092,-0.092 L1,0 L0.092,0.092 L0,1 L-0.092,0.092 L-1,0 L-0.092,-0.092 Z" fill="currentColor"/></svg>`;
  document.querySelectorAll('.works__item__link').forEach(link => {
    link.insertAdjacentHTML('beforeend', SPARKLE_SVG);
  });
}

// =============================
// Works 썸네일 hover (정적 HTML용)
// =============================
function initWorksThumb() {
  const thumb = document.getElementById('works-thumb');
  if (!thumb) return;

  document.querySelectorAll('.works__item').forEach(li => {
    const href = li.querySelector('a')?.getAttribute('href') || '';
    const id = href.split('/').pop();
    const work = works.find(w => w.id === id);
    if (!work) return;

    li.addEventListener('mouseenter', () => {
      thumb.src = work.main;
      thumb.classList.add('is-visible');
    });
    li.addEventListener('mouseleave', () => {
      thumb.classList.remove('is-visible');
    });
  });

  document.addEventListener('mousemove', (e) => {
    gsap.to(thumb, {
      left: e.clientX,
      top: e.clientY,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  });
}

// =============================
// Works 렌더링 — 라인 리스트
// =============================
function renderWorks() {
  const list  = document.getElementById('works-list');
  const thumb = document.getElementById('works-thumb');
  if (!list) return;

  works.forEach((work, i) => {
    const li = document.createElement('li');
    li.className = 'works__item';
    li.innerHTML = `
      <a href="/works/${work.id}" class="works__item__link">
        <span class="works__item__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="works__item__title">${work.title}</span>
        <span class="works__item__category">${work.category}</span>
        <span class="works__item__year">${work.year}</span>
      </a>
    `;

    if (thumb) {
      li.addEventListener('mouseenter', () => {
        thumb.src = work.main;
        thumb.classList.add('is-visible');
      });
      li.addEventListener('mouseleave', () => {
        thumb.classList.remove('is-visible');
      });
    }

    list.appendChild(li);
  });

  // 썸네일 커서 따라다니기
  if (thumb) {
    document.addEventListener('mousemove', (e) => {
      gsap.to(thumb, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  }
}
