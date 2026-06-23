// =============================
// Project data — replace with your own work
// =============================
const works = [
  {
    id: 'project-one', title: 'Project One', name: 'Lorem Ipsum', category: 'Food & Beverage', year: 2026,
    main: 'assets/images/works/placeholder-a.svg',
    url: '#',
    subtitle: 'Write a one-line project intro here',
    overview: 'Write a short project overview here — who the client was, what problem you solved, and your visual direction and key implementation points.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-two', title: 'Project Two', name: 'Lorem Ipsum', category: 'Electronics', year: 2026,
    main: 'assets/images/works/placeholder-b.svg',
    url: '#',
    subtitle: 'Write a one-line project intro here',
    overview: 'Write a short project overview here — who the client was, what problem you solved, and your visual direction and key implementation points.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-three', title: 'Project Three', name: 'Lorem Ipsum', category: 'IT · Embedded', year: 2025,
    main: 'assets/images/works/placeholder-c.svg',
    url: '#',
    subtitle: 'Write a one-line project intro here',
    overview: 'Write a short project overview here — who the client was, what problem you solved, and your visual direction and key implementation points.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-four', title: 'Project Four', name: 'Lorem Ipsum', category: 'Materials', year: 2025,
    main: 'assets/images/works/placeholder-d.svg',
    url: '#',
    subtitle: 'Write a one-line project intro here',
    overview: 'Write a short project overview here — who the client was, what problem you solved, and your visual direction and key implementation points.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-five', title: 'Project Five', name: 'Lorem Ipsum', category: 'Medical Device', year: 2025,
    main: 'assets/images/works/placeholder-a.svg',
    url: '#',
    subtitle: 'Write a one-line project intro here',
    overview: 'Write a short project overview here — who the client was, what problem you solved, and your visual direction and key implementation points.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
  {
    id: 'project-six', title: 'Project Six', name: 'Lorem Ipsum', category: 'Advertising', year: 2026,
    main: 'assets/images/works/placeholder-b.svg',
    url: '#',
    subtitle: 'Write a one-line project intro here',
    overview: 'Write a short project overview here — who the client was, what problem you solved, and your visual direction and key implementation points.',
    gallery: [
      'assets/images/works/placeholder-a.svg',
      'assets/images/works/placeholder-b.svg',
      'assets/images/works/placeholder-c.svg',
      'assets/images/works/placeholder-d.svg',
    ],
  },
];

// Extra projects — name + external link only (omit url if none)
const worksExtra = [
  { name: 'Project Seven', url: '#' },
  { name: 'Project Eight', url: '#' },
  { name: 'Project Nine', url: '#' },
  { name: 'Project Ten' },
];

// =============================
// Works list sparkle mark
// =============================
function initWorksSparkle() {
  const SPARKLE_SVG = `<svg class="works__sparkle" viewBox="-1.1 -1.1 2.2 2.2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0,-1 L0.092,-0.092 L1,0 L0.092,0.092 L0,1 L-0.092,0.092 L-1,0 L-0.092,-0.092 Z" fill="currentColor"/></svg>`;
  document.querySelectorAll('.works__item__link').forEach(link => {
    link.insertAdjacentHTML('beforeend', SPARKLE_SVG);
  });
}

// =============================
// Works thumbnail hover (for static HTML)
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
// Works rendering — line list
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

  // Thumbnail follows cursor
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
