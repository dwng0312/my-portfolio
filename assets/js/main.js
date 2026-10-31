/**
 * Duong Portfolio - Showcase, Inspection & Bilingual Logic (EN / VI)
 * Contact: duongtk.work@gmail.com | Phone: 0835575440
 */

// Bilingual Translation Dictionary
const i18nData = {
  en: {
    nav_about: 'About',
    nav_expertise: 'Expertise',
    nav_cases: 'Case Studies',
    nav_showcase: 'Website Showcase',
    nav_skills: 'Skills',
    nav_available: 'Freelance Available',
    nav_contact: 'Get in Touch',
    hero_pill: 'Freelancer • Website, SEO & AI Automation Marketing',
    hero_title: 'Freelance Web Specialist & Growth Engineer <br class="hidden sm:inline" /><span class="text-blue-600">Web Development, Technical SEO & AI Automation.</span>',
    hero_desc: 'I\'m <strong class="text-slate-900 font-bold">Duong</strong>. I partner with businesses and boutique agencies to build high-converting websites (Shopify, WordPress, Wix), dominate Google search through <strong class="text-slate-900 font-semibold">Technical & Semantic SEO</strong>, and eliminate manual marketing bottlenecks with <strong class="text-slate-900 font-semibold">AI & workflow automation</strong>.',
    hero_btn_showcase: 'View Website Showcase',
    hero_btn_copy: 'Copy Email',
    card_lang_title: 'Working Languages:',
    card_lang_desc: 'Fluent with international client communication, technical APIs, and documentation.',
    showcase_badge: '04 // Interactive Gallery',
    showcase_title: 'Website & Landing Page Showcase',
    showcase_desc: 'Live preview of full-length websites and high-converting landing pages built across WordPress, Wix Studio, and Shopify. Hover over any window to scroll down, or click to open the full inspector.',
    showcase_tip: 'Hover to auto-scroll • Click to view full screenshot',
    filter_all: 'All Works',
    filter_wp: 'WordPress & B2B Web',
    filter_cro: 'High-CRO Landing Pages',
    filter_wix: 'Wix & Modern Web',
    filter_ecom: 'Shopify & E-Commerce',
    modal_outcomes: 'Verified Outcomes',
    modal_challenge: 'Challenge & Bottleneck',
    modal_solution: 'Engineered Solution',
    modal_tech: 'Technologies',
    modal_open_raw: 'Open Raw Image in New Tab',
    inspect_pill: 'Inspect Full Page',
    toast_copied: 'Copied to clipboard: '
  },
  vi: {
    nav_about: 'Giới thiệu',
    nav_expertise: 'Năng lực cốt lõi',
    nav_cases: 'Dự án tiêu biểu',
    nav_showcase: 'Kho giao diện Web',
    nav_skills: 'Kỹ năng & Công cụ',
    nav_available: 'Sẵn sàng nhận dự án',
    nav_contact: 'Liên hệ ngay',
    hero_pill: 'Freelancer • Phát triển Web, SEO & Tự động hóa Marketing AI',
    hero_title: 'Chuyên viên Phát triển Website & Tăng trưởng Số <br class="hidden sm:inline" /><span class="text-blue-600">Thiết kế Web, Technical SEO & Tự động hóa AI.</span>',
    hero_desc: 'Tôi là <strong class="text-slate-900 font-bold">Dương</strong>. Tôi đồng hành cùng các doanh nghiệp và agency xây dựng website chuẩn chuyển đổi (Shopify, WordPress, Wix), bứt phá thứ hạng Google bằng <strong class="text-slate-900 font-semibold">Technical & Semantic SEO</strong>, và tối ưu quy trình kinh doanh qua <strong class="text-slate-900 font-semibold">hệ thống tự động hóa Marketing bằng AI</strong>.',
    hero_btn_showcase: 'Xem kho dự án Website',
    hero_btn_copy: 'Sao chép Email',
    card_lang_title: 'Ngôn ngữ làm việc:',
    card_lang_desc: 'Giao tiếp làm việc thành thạo với đối tác quốc tế, đọc hiểu API và tài liệu kỹ thuật tiếng Anh.',
    showcase_badge: '04 // Thư viện giao diện tương tác',
    showcase_title: 'Kho giao diện Website & Landing Page thực tế',
    showcase_desc: 'Trực quan hóa các website hoàn chỉnh và landing page chuyển đổi cao trên nền tảng WordPress, Wix Studio và Shopify. Rê chuột vào khung để cuộn trang tự động, hoặc bấm để mở xem toàn màn hình.',
    showcase_tip: 'Rê chuột để cuộn xem trang • Bấm để xem ảnh gốc full HD',
    filter_all: 'Tất cả dự án',
    filter_wp: 'WordPress & Web B2B',
    filter_cro: 'Landing Page CRO cao',
    filter_wix: 'Wix & Web hiện đại',
    filter_ecom: 'Shopify & TMĐT',
    modal_outcomes: 'Kết quả đo lường',
    modal_challenge: 'Thách thức & Nút thắt',
    modal_solution: 'Giải pháp kỹ thuật',
    modal_tech: 'Công nghệ áp dụng',
    modal_open_raw: 'Mở ảnh gốc trong tab mới',
    inspect_pill: 'Xem chi tiết trang',
    toast_copied: 'Đã sao chép vào bộ nhớ: '
  }
};

let currentLang = localStorage.getItem('user_lang') || 'en';

const projectsData = {
  'project-germany-butler': {
    id: 'project-germany-butler',
    title: 'German Butler & Relocation Enterprise Web Architecture',
    category: 'wordpress',
    categoryName: 'WordPress & Local SEO',
    liveUrl: '#',
    image: 'assets/img/projects/Web_WP_Germany_Butler_11zon.webp',
    summary: 'Lightweight WordPress child theme engineering with nested MovingCompany schema for German local maps and search.',
    metrics: [
      { label: 'Rich Results', value: '100% Validated' },
      { label: 'DOM Friction', value: '-40% Reduction' },
      { label: 'Syntax Errors', value: '0 Schema Errors' }
    ],
    challenge: 'A German moving and relocation company required entity recognition in Google Knowledge Graph and hyper-fast mobile load performance across Berlin & Brandenburg.',
    solution: 'Engineered a streamlined WordPress child theme eliminating heavy external dependencies, mapping comprehensive LocalBusiness & MovingCompany schema linking areaServed, geo-coordinates, and operating hours.',
    techStack: ['WordPress Child Theme', 'Local SEO', 'JSON-LD Entity Graph', 'Core Web Vitals', 'Tailwind CSS']
  },
  'project-lp-ykhoa': {
    id: 'project-lp-ykhoa',
    title: 'Healthcare & Medical Services CRO Landing Page',
    category: 'landing-cro',
    categoryName: 'High-CRO Landing Pages',
    liveUrl: '#',
    image: 'assets/img/projects/LP_Ykhoa_11zon.webp',
    summary: 'Direct-response medical appointment booking and patient consultation landing page designed for frictionless conversions.',
    metrics: [
      { label: 'Mobile UX', value: '100% Responsive' },
      { label: 'Conversion Intent', value: 'Optimized Flow' },
      { label: 'Form Completion', value: 'Frictionless' }
    ],
    challenge: 'Medical clinics frequently lose prospective patients due to cluttered service menus, confusing pricing, and multi-step booking friction.',
    solution: 'Designed an empathetic, clean medical landing page with prominent trust badges, doctor credentials, clear treatment packages, and a 2-step appointment booking form.',
    techStack: ['High-CRO Layout', 'Direct Response', 'Mobile-First UX', 'Patient Funnel', 'Figma to Web']
  },
  'project-wix-doors': {
    id: 'project-wix-doors',
    title: 'Fixhub Doors & Home Architectural Services Website',
    category: 'wix',
    categoryName: 'Wix & Modern Web',
    liveUrl: '#',
    image: 'assets/img/projects/Web_Wix_Doors_Fixhub_11zon.webp',
    summary: 'Modern commercial website for doors, architectural fittings, and home repair services with dynamic service showcases.',
    metrics: [
      { label: 'Service Showcase', value: 'Interactive' },
      { label: 'Quote Inquiries', value: 'Direct Form' },
      { label: 'Speed Index', value: 'Optimized' }
    ],
    challenge: 'Home service contractors need to clearly communicate product variations, installation warranties, and service radius to win local client trust.',
    solution: 'Built a sleek commercial service platform with product catalog filtering, high-resolution door project galleries, warranty badges, and instant quotation request forms.',
    techStack: ['Wix Studio', 'Commercial Web', 'Service Catalog', 'Local Lead Capture', 'Responsive UI']
  },
  'project-wp-duhoc': {
    id: 'project-wp-duhoc',
    title: 'Newlife Study Abroad & Education Advisory Portal',
    category: 'wordpress',
    categoryName: 'WordPress & Education',
    liveUrl: '#',
    image: 'assets/img/projects/Web_WP_duhocNewlife_11zon.webp',
    summary: 'Multi-destination international education consultancy web portal structured for semantic organic search and student inquiries.',
    metrics: [
      { label: 'Topical Clusters', value: 'Country Guides' },
      { label: 'Student Leads', value: 'High Intent' },
      { label: 'SEO Architecture', value: 'Semantic Silo' }
    ],
    challenge: 'Study abroad consultancies require deep topical authority across multiple countries (Korea, Japan, Australia, Germany) while maintaining intuitive student inquiry pathways.',
    solution: 'Structured a semantic WordPress portal with country-specific scholarship guides, visa consultation funnels, student success stories, and WhatsApp/Zalo instant consultation integrations.',
    techStack: ['WordPress', 'Semantic Content Silo', 'Consulting Funnel', 'Local SEO', 'Custom Forms']
  },
  'project-lp-baochi': {
    id: 'project-lp-baochi',
    title: 'Media, Journalism & Digital PR Agency Landing Page',
    category: 'landing-cro',
    categoryName: 'High-CRO Landing Pages',
    liveUrl: '#',
    image: 'assets/img/projects/LP_Wix_Baochi_11zon.webp',
    summary: 'High-authority landing page for digital PR campaigns, press release distribution, and editorial media placements.',
    metrics: [
      { label: 'Brand Credibility', value: 'Press Badges' },
      { label: 'Package Clarity', value: 'Tiered Pricing' },
      { label: 'Lead Velocity', value: 'B2B Qualified' }
    ],
    challenge: 'B2B PR agencies must demonstrate instant editorial credibility and transparent distribution packages to corporate marketing directors.',
    solution: 'Crafted an authoritative, editorial-inspired landing page highlighting newspaper publisher logos, verified case results, publication tiers, and a seamless client briefing intake form.',
    techStack: ['Wix Studio', 'B2B Landing Page', 'Media Relations', 'Direct Response', 'High-Converting UI']
  },
  'project-wix-res': {
    id: 'project-wix-res',
    title: 'Vietdeli Gourmet Restaurant & Hospitality Brand',
    category: 'wix',
    categoryName: 'Wix & Modern Web',
    liveUrl: '#',
    image: 'assets/img/projects/Web_Wix_Res_Vietdeli_11zon.webp',
    summary: 'Visual-first culinary brand website featuring digital menus, chef philosophy, and online reservation management.',
    metrics: [
      { label: 'Visual Appetite', value: 'High-Res Media' },
      { label: 'Table Booking', value: 'Instant Form' },
      { label: 'Mobile Ease', value: 'Thumb-Friendly' }
    ],
    challenge: 'Dining establishments need a mobile-first site that loads menus effortlessly on 4G connections and drives table reservations.',
    solution: 'Engineered a modern restaurant experience featuring appetizing photography, category-sorted digital menus with dietary labels, Google Maps location integration, and table booking widgets.',
    techStack: ['Wix Studio', 'F&B Hospitality', 'Digital Menu', 'Online Reservation', 'Mobile-First UI']
  },
  'project-wp-vongbi': {
    id: 'project-wp-vongbi',
    title: 'Industrial Bearings & Mechanical Components Catalog',
    category: 'wordpress',
    categoryName: 'WordPress & B2B Web',
    liveUrl: '#',
    image: 'assets/img/projects/Web_WP_vongbi_11zon.webp',
    summary: 'B2B mechanical parts catalog and quotation portal engineered for industrial search queries and bulk wholesale RFQs.',
    metrics: [
      { label: 'Part Numbers', value: 'Searchable' },
      { label: 'B2B RFQ Flow', value: 'Direct Quote' },
      { label: 'Product Schema', value: 'Structured Data' }
    ],
    challenge: 'Industrial distributors deal with thousands of SKUs and part numbers that must be easily searchable by plant engineers and procurement managers.',
    solution: 'Built a structured WordPress B2B catalog with faceted categorization (deep groove ball bearings, roller bearings, pillow blocks), technical datasheet downloads, and bulk RFQ request forms.',
    techStack: ['WordPress', 'B2B Catalog', 'Industrial SEO', 'Technical Specifications', 'RFQ Funnel']
  },
  'project-wix-edtech': {
    id: 'project-wix-edtech',
    title: 'EdTech Online Quiz & Assessment Web Platform',
    category: 'wix',
    categoryName: 'Wix & Modern Web',
    liveUrl: '#',
    image: 'assets/img/projects/Web_Wix_Edtech_tracnghiem (3)_11zon.webp',
    summary: 'Interactive digital testing platform with subject-wise multiple choice questions, timer logic, and automated scoring flows.',
    metrics: [
      { label: 'User Engagement', value: 'Gamified UI' },
      { label: 'Question Bank', value: 'Multi-Subject' },
      { label: 'Test Scoring', value: 'Instant Feedback' }
    ],
    challenge: 'Creating an intuitive, distraction-free test-taking environment that performs reliably across tablets and mobile phones for students.',
    solution: 'Developed an interactive EdTech interface with progress bars, countdown timers, instant answer explanations, and downloadable test result certificates.',
    techStack: ['Wix Studio', 'Interactive EdTech', 'Quiz Logic', 'Student Experience', 'Responsive Web']
  },
  'project-wix-indian': {
    id: 'project-wix-indian',
    title: 'NFF Global Research & Industry Report Portal',
    category: 'wix',
    categoryName: 'Wix & Modern Web',
    liveUrl: '#',
    image: 'assets/img/projects/Web_Wix_Indian_Report_Nff_11zon.webp',
    summary: 'Data-driven international research publication platform with gated PDF reports, economic charts, and corporate media center.',
    metrics: [
      { label: 'Publication Layout', value: 'Executive Tier' },
      { label: 'Report Downloads', value: 'Gated Lead Gen' },
      { label: 'Data Visuals', value: 'Interactive' }
    ],
    challenge: 'Corporate research foundations need to present dense economic datasets in a visually engaging, credible format that generates subscriber leads.',
    solution: 'Engineered a corporate publishing portal with executive summaries, key takeaway callouts, interactive data infographics, and email-gated PDF downloads.',
    techStack: ['Wix Studio', 'Corporate Research', 'Lead Gating', 'Data Presentation', 'Editorial Layout']
  },
  'project-chiapackpin': {
    id: 'project-chiapackpin',
    title: 'Clean Energy & Battery Pack Engineering Web',
    category: 'wix',
    categoryName: 'Wix & Modern Web',
    liveUrl: '#',
    image: 'assets/img/projects/Web_chiapackpin_11zon.webp',
    summary: 'Modern technical presentation website for custom lithium battery packs, solar storage modules, and power equipment.',
    metrics: [
      { label: 'Tech Specs', value: 'Detailed Cells' },
      { label: 'Custom Orders', value: 'Bespoke Sizing' },
      { label: 'Safety Certs', value: 'Highlighted' }
    ],
    challenge: 'High-tech battery hardware manufacturers must communicate complex voltage, capacity, and cell chemistry safety standards to industrial buyers.',
    solution: 'Designed a modern hardware showcase with exploded product views, battery cell configuration charts, BMS safety feature breakdowns, and custom quotation builders.',
    techStack: ['Wix Studio', 'Hardware Tech', 'Technical Specs', 'B2B Inquiry', 'Product Presentation']
  },
  'project-portfolio-wix': {
    id: 'project-portfolio-wix',
    title: 'Creative Agency & Designer Showcase Portfolio',
    category: 'wix',
    categoryName: 'Wix & Modern Web',
    liveUrl: '#',
    image: 'assets/img/projects/Portfolio_Wix_11zon.webp',
    summary: 'Visual-first agency portfolio showcasing creative direction, digital branding, and client case studies with subtle micro-interactions.',
    metrics: [
      { label: 'Aesthetic Impact', value: 'Minimalist Luxe' },
      { label: 'Case Studies', value: 'Visual Depth' },
      { label: 'Client Inquiries', value: 'Integrated Form' }
    ],
    challenge: 'Design agencies require a portfolio that feels sophisticated, cutting-edge, and uncluttered to attract premium brand clientele.',
    solution: 'Crafted a modern layout with generous negative space, curated typography, subtle scroll animations, and immersive case study presentations.',
    techStack: ['Wix Studio', 'Creative Direction', 'Visual Identity', 'Portfolio UI', 'Micro-Interactions']
  },
  'project-carnival-watch': {
    id: 'project-carnival-watch',
    title: 'Carnival Timepieces: Technical SEO & Brand Rank Restoration',
    category: 'ecommerce',
    categoryName: 'Shopify & SEO',
    liveUrl: '#',
    image: 'assets/img/projects/project-1-watch-ecommerce.svg',
    summary: 'Shopify architecture tuning, faceted URL canonicalization, and structured JSON-LD schema implementation.',
    metrics: [
      { label: 'Google Brand Rank', value: 'Top 1' },
      { label: 'Average Organic CTR', value: '5.3%' },
      { label: 'Index Health', value: 'Clean Site Index' }
    ],
    challenge: 'Platform suffered from crawl inefficiency and indexation bloat caused by faceted search parameters, legacy backlink spam, and missing rich sitelinks.',
    solution: 'Conducted audit with Screaming Frog, executed disavow workflows in Google Search Console, restructured parameter hygiene, and engineered nested Product, AggregateRating, and BreadcrumbList JSON-LD schemas.',
    techStack: ['Shopify Liquid', 'Technical SEO', 'Schema Markup', 'Google Search Console', 'Screaming Frog']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Portfolio Filtering Logic
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Modal / Lightbox Handling for Full-Page Previews
  const modalBackdrop = document.getElementById('showcaseModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalImage = document.getElementById('modalImage');
  const modalChallenge = document.getElementById('modalChallenge');
  const modalSolution = document.getElementById('modalSolution');
  const modalMetrics = document.getElementById('modalMetrics');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalExternalLink = document.getElementById('modalExternalLink');

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.categoryName;
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalChallenge.textContent = data.challenge;
    modalSolution.textContent = data.solution;
    modalExternalLink.href = data.image;

    // Render Metrics
    modalMetrics.innerHTML = '';
    data.metrics.forEach(metric => {
      const metricEl = document.createElement('div');
      metricEl.className = 'bg-slate-50 border border-slate-200 p-2.5 rounded-lg flex items-center justify-between';
      metricEl.innerHTML = `
        <span class="text-xs text-slate-600 font-medium">${metric.label}</span>
        <span class="text-blue-600 font-extrabold text-sm">${metric.value}</span>
      `;
      modalMetrics.appendChild(metricEl);
    });

    // Render Tech Stack
    modalTechStack.innerHTML = '';
    data.techStack.forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'code-tag text-[11px]';
      tag.textContent = tech;
      modalTechStack.appendChild(tag);
    });

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Trigger modal when clicking "Inspect Full Page" or viewport preview
  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-open-modal');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Copy to Clipboard with Toast Notification
  const copyBtns = document.querySelectorAll('.copy-trigger');
  const toast = document.getElementById('toast');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy') || 'duongtk.work@gmail.com';
      navigator.clipboard.writeText(textToCopy).then(() => {
        const prefix = (i18nData[currentLang] && i18nData[currentLang].toast_copied) || 'Copied: ';
        showToast(`${prefix}${textToCopy}`);
      }).catch(() => {
        showToast(`Contact: ${textToCopy}`);
      });
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // =========================================================================
  // BILINGUAL LANGUAGE SWITCHER LOGIC (ENGLISH & VIETNAMESE)
  // =========================================================================
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('user_lang', lang);

    // Update active class on all lang-switch buttons (desktop and mobile)
    document.querySelectorAll('.lang-opt').forEach(opt => {
      if (opt.getAttribute('data-lang-opt') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // Update all elements with data-i18n
    const dict = i18nData[lang] || i18nData.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update inspection pill hover texts in case cards
    document.querySelectorAll('.inspect-pill span, .inspect-pill').forEach(pill => {
      // keep icon, update text
      const text = dict.inspect_pill || 'Inspect Full Page';
      const icon = pill.querySelector('svg, i');
      if (icon) {
        pill.innerHTML = '';
        pill.appendChild(icon);
        pill.appendChild(document.createTextNode(' ' + text));
      }
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);
  }

  // Bind click events on language toggle buttons
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'vi' : 'en';
      updateLanguage(newLang);
    });

    // Also support keyboard Enter / Space
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const newLang = currentLang === 'en' ? 'vi' : 'en';
        updateLanguage(newLang);
      }
    });
  });

  // Initialize with stored or default language
  if (currentLang && currentLang !== 'en') {
    updateLanguage(currentLang);
  }
});
