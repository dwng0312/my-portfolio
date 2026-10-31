/**
 * Duong Portfolio - Showcase, Inspection & Bilingual Logic (EN / VI)
 * Contact: duongtk.work@gmail.com | Phone: 0835575440
 */

// Comprehensive Bilingual Translation Dictionary
const i18nData = {
  en: {
    // Navigation
    nav_about: 'About',
    nav_expertise: 'Expertise',
    nav_cases: 'Case Studies',
    nav_showcase: 'Website Showcase',
    nav_skills: 'Skills',
    nav_available: 'Freelance Available',
    nav_contact: 'Get in Touch',
    brand_sub: 'Web • SEO • AI Automation',

    // Hero Section
    hero_pill: 'Freelancer • Website, SEO & AI Automation Marketing',
    hero_title: 'Freelance Web Specialist & Growth Engineer <br class="hidden sm:inline" /><span class="text-blue-600">Web Development, Technical SEO & AI Automation.</span>',
    hero_desc: 'I\'m <strong class="text-slate-900 font-bold">Duong</strong>. I partner with businesses and boutique agencies to build high-converting websites (Shopify, WordPress, Wix), dominate Google search through <strong class="text-slate-900 font-semibold">Technical & Semantic SEO</strong>, and eliminate manual marketing bottlenecks with <strong class="text-slate-900 font-semibold">AI & workflow automation</strong>.',
    hero_chip_1: 'Shopify & WordPress',
    hero_chip_2: 'Wix Studio',
    hero_chip_3: 'Technical & Semantic SEO',
    hero_chip_4: 'AI Marketing Automation',
    hero_chip_5: 'Make / Zapier & GTM',
    hero_chip_6: 'High-CRO Landing Pages',
    hero_btn_showcase: 'View Website Showcase',
    hero_btn_copy: 'Copy Email',
    card_name: 'Duong',
    card_role: 'Web • SEO • AI Automation',
    card_location: 'Can Tho, Vietnam (Remote)',
    card_lang_title: 'Working Languages:',
    card_lang_vi: '🇻🇳 Vietnamese (Native)',
    card_lang_en: '🇬🇧 English (Vstep B2 - Professional)',
    card_lang_desc: 'Fluent with international client communication, technical APIs, and documentation.',

    // Section 01: About
    about_badge: '01 // About & Approach',
    about_title: 'Turning Digital Assets Into Revenue Engines',
    about_subtitle: 'Bridging technical web development, organic search algorithms, and automated marketing workflows for modern founders and digital marketing agencies.',
    about_card1_title: 'Web & Landing Page Development',
    about_card1_desc: 'Engineering websites and sales funnels across Shopify Liquid, WordPress child themes, and Wix Studio. Optimized for fast mobile loading, sub-second LCP, and friction-free checkout flows.',
    about_card2_title: 'Technical & Semantic SEO',
    about_card2_desc: 'Diagnosing crawl budget triage with Screaming Frog & Semrush, removing toxic index bloat, implementing Schema.org JSON-LD structured data, and deploying semantic topic clusters that rank.',
    about_card3_title: 'AI Marketing Automation & Tracking',
    about_card3_desc: 'Connecting lead forms to CRMs via Make, Zapier & Webhooks. Engineering Google Tag Manager event deduplication variables and GA4 custom funnels with 100% conversion attribution match rates.',

    // Section 02: Core Pillars
    pillars_badge: '02 // Core Competencies',
    pillars_title: 'Four Pillars of Freelance Delivery',
    pillars_subtitle: 'Comprehensive, end-to-end execution covering design, code, search indexation, and automated pipelines.',
    pillar1_tag: 'Pillar 01',
    pillar1_title: 'E-Commerce & Web Development',
    pillar1_desc: 'Custom development on Shopify Liquid, WordPress, and Wix Studio. From responsive storefront customization to third-party app conflict troubleshooting.',
    pillar1_li1: 'Shopify Theme Liquid customization, checkout CRO, and collection architecture.',
    pillar1_li2: 'WordPress lightweight child themes, Gutenberg & Elementor builds.',
    pillar1_li3: 'Wix Studio interactive portals, booking forms, and custom responsive layouts.',
    pillar2_tag: 'Pillar 02',
    pillar2_title: 'Technical & Semantic SEO',
    pillar2_desc: 'Auditing search architecture to ensure Google spiders crawl, understand, and rank pages efficiently.',
    pillar2_li1: 'Crawl health triage, resolving 4xx/5xx errors, robots.txt, dynamic XML sitemaps.',
    pillar2_li2: 'Schema.org JSON-LD structured data (<code class="code-tag">LocalBusiness</code>, <code class="code-tag">Product</code>, <code class="code-tag">FAQPage</code>).',
    pillar2_li3: 'Entity-based keyword research, topic clustering, and internal link graph design.',
    pillar3_tag: 'Pillar 03',
    pillar3_title: 'AI Marketing Automation & Data Tracking',
    pillar3_desc: 'Eliminating manual data entry and ensuring 100% reliable conversion attribution across ad platforms.',
    pillar3_li1: 'Workflow automation pipelines connecting web forms to CRMs via Make & Zapier.',
    pillar3_li2: 'Google Tag Manager custom JS triggers and transaction token deduplication.',
    pillar3_li3: 'Google Analytics 4 custom event funnels and Meta/TikTok pixel server sync.',
    pillar4_tag: 'Pillar 04',
    pillar4_title: 'Social Commerce & Multi-Channel Operations',
    pillar4_desc: 'Managing omnichannel retail operations spanning official web storefronts and social e-commerce.',
    pillar4_li1: 'TikTok Shop & Shopee store setup, listing SEO, and automated order dispatch.',
    pillar4_li2: 'Organic content planning, short-form video scripts, and Canva graphic design assets.',
    pillar4_li3: 'Repurposing top-performing SEO content into viral bite-sized social assets.',

    // Section 03: Case Studies
    cases_badge: '03 // Proven Track Record',
    cases_title: 'Featured Case Studies & Client Projects',
    cases_subtitle: 'Real technical challenges diagnosed, executed, and verified across e-commerce, international services, and growth platforms.',
    cases_outcomes_header: 'Verified Outcomes:',
    
    // Case 1
    case1_tag: 'German Local Service B2B',
    case1_title: 'German Butler & Relocation: Mobile-First Theme & Entity Schema',
    case1_challenge: '<strong>Challenge:</strong> German relocation enterprise required clear search entity recognition in Google Maps and fast mobile load times across Berlin districts with minimal DOM baggage.',
    case1_exec_title: 'Execution:',
    case1_exec1: 'Built a lightweight, mobile-first WordPress child theme minimizing script payloads.',
    case1_exec2: 'Engineered nested <code class="code-tag">MovingCompany</code> and <code class="code-tag">LocalBusiness</code> JSON-LD schema linking service areas, operating hours, and coordinates.',
    case1_exec3: 'Connected responsive service booking calculator with zero render-blocking scripts.',
    case1_inspect: 'Inspect German Web Architecture Preview',
    case1_m1_title: 'Clean Rich Results',
    case1_m1_desc: 'Zero syntax errors on Google Rich Results Testing Tool.',
    case1_m2_title: 'DOM Loading Friction',
    case1_m2_desc: 'Stripped unnecessary theme baggage for instant mobile rendering.',
    case1_m3_title: 'Google Knowledge Graph',
    case1_m3_desc: 'Accurate areaServed mapping for regional queries.',

    // Case 2
    case2_tag: 'Freelance SEO Case Study',
    case2_title: 'Technical SEO & Brand Top 1 Search Rank Restoration',
    case2_challenge: '<strong>Challenge:</strong> Platform struggled with crawl inefficiency and indexation bloat caused by faceted search parameter URLs and legacy toxic backlink spam.',
    case2_exec_title: 'Execution:',
    case2_exec1: 'Triage and disavow workflow via Google Search Console.',
    case2_exec2: 'Cleaned faceted URL parameters & configured 301 redirects to eliminate duplicate indexing.',
    case2_exec3: 'Structured nested <code class="code-tag">Product</code>, <code class="code-tag">AggregateRating</code>, and <code class="code-tag">BreadcrumbList</code> JSON-LD schemas.',
    case2_inspect: 'Inspect E-Commerce Store Architecture',
    case2_m1_title: 'Top 1 Google Rank',
    case2_m1_desc: 'For brand keyword \'carnivalvietnam\' with rich sitelinks.',
    case2_m2_title: 'Average Organic CTR',
    case2_m2_desc: 'Achieved within the first 1.5 months of measurement.',
    case2_m3_title: 'Zero Index Bloat',
    case2_m3_desc: 'Cleaned crawl budget and parameterized duplicate URLs.',

    // Case 3
    case3_tag: 'Content SEO Specialist',
    case3_title: 'Semantic SEO Content Strategy: +56% Organic Traffic Surge',
    case3_challenge: '<strong>Challenge:</strong> Elevating organic traffic and capturing high-intent search volume in a competitive job and career niche without paid advertising.',
    case3_exec_title: 'Execution:',
    case3_exec1: 'Researched keyword intent clusters and engineered semantic content silos.',
    case3_exec2: 'Researched, produced, and published <strong>207 semantic SEO articles</strong> targeting high-volume long-tail queries.',
    case3_exec3: 'Optimized internal links graph to channel page equity towards core service landing pages.',
    case3_m1_title: 'Organic Traffic Growth',
    case3_m1_desc: 'From 12.3k to 19.2k monthly visits in just 3 months.',
    case3_m2_title: 'Articles Published',
    case3_m2_desc: '&gt;50% ranked in Google Top 1, Top 3, and Top 10.',

    // Supplementary Cases
    case4_tag: 'Freelance E-Com',
    case4_status: 'Ongoing',
    case4_title: 'Shopify Liquid Themes & Store Setup',
    case4_desc: 'Developing responsive Shopify Liquid themes, configuring checkout flows, auditing 3rd-party apps (reviews, upsells, inventory sync), and resolving theme script conflicts for international clients.',
    
    case5_tag: 'Yatame Agency',
    case5_title: 'Technical SEO & Internal Link Clusters',
    case5_desc: 'Executed comprehensive technical SEO site health reviews: page load optimization, URL architecture hygiene, robots.txt, dynamic XML sitemaps, and fixing 4xx/5xx server response errors.',
    
    case6_tag: 'Kh\u0103n Gi\u1ea5y Mariel',
    case6_status: 'Operations',
    case6_title: 'Omnichannel Social & E-Commerce Ops',
    case6_desc: 'Organic content production on TikTok & Facebook (articles and short videos). Optimized product listings and managed order processing pipelines across Shopee Mall and TikTok Shop.',

    // Section 04: Showcase
    showcase_badge: '04 // Interactive Gallery',
    showcase_title: 'Website & Landing Page Showcase',
    showcase_desc: 'Live preview of full-length websites and high-converting landing pages built across WordPress, Wix Studio, and Shopify. Hover over any window to scroll down, or click to open the full inspector.',
    showcase_tip: 'Hover to auto-scroll • Click to view full screenshot',
    filter_all: 'All Works',
    filter_wp: 'WordPress & B2B Web',
    filter_cro: 'High-CRO Landing Pages',
    filter_wix: 'Wix & Modern Web',
    filter_ecom: 'Shopify & E-Commerce',

    // Showcase Items
    p1_tag: 'WordPress • Local Entity SEO',
    p1_title: 'German Butler & Relocation Portal',
    p1_desc: 'Lightweight child theme with nested MovingCompany schema, achieving 100% Rich Results and -40% DOM friction.',
    
    p2_tag: 'High-CRO • Healthcare UX',
    p2_title: 'Healthcare & Medical Clinic Landing Page',
    p2_desc: 'Direct-response appointment booking landing page with prominent trust badges and frictionless lead capture.',
    
    p3_tag: 'Wix Studio • Home Services',
    p3_title: 'Fixhub Doors & Architectural Services',
    p3_desc: 'Commercial service website with product catalog filters, door project galleries, and online quotation requests.',
    
    p4_tag: 'WordPress • Education Portal',
    p4_title: 'Newlife Study Abroad & Advisory Portal',
    p4_desc: 'Multi-country education advisory portal with semantic topic silos, scholarship guides, and advisory consultation forms.',
    
    p5_tag: 'Wix Studio • Media & PR',
    p5_title: 'Media & Digital PR Agency Landing Page',
    p5_desc: 'High-authority landing page for digital PR campaigns, publisher distribution tiers, and client briefing intake.',
    
    p6_tag: 'Wix Studio • Hospitality Brand',
    p6_title: 'Vietdeli Gourmet Restaurant Website',
    p6_desc: 'Appetizing hospitality web presence featuring digital menus with dietary labels and integrated table booking.',
    
    p7_tag: 'WordPress • Industrial B2B',
    p7_title: 'Industrial Bearings & Parts Catalog',
    p7_desc: 'Structured B2B mechanical components catalog with technical datasheet downloads and bulk quotation forms.',
    
    p8_tag: 'Wix Studio • Interactive EdTech',
    p8_title: 'EdTech Online Quiz & Testing Platform',
    p8_desc: 'Distraction-free digital testing environment featuring countdown timers, instant explanations, and scoring certificates.',
    
    p9_tag: 'Wix Studio • Research Publishing',
    p9_title: 'NFF Global Research & Report Portal',
    p9_desc: 'Executive data presentation with key takeaways, data charts, and email-gated PDF research downloads.',
    
    p10_tag: 'Wix Studio • Hardware Tech',
    p10_title: 'Clean Energy & Battery Engineering Web',
    p10_desc: 'Hardware showcase presenting exploded product views, battery cell configuration charts, and custom quotation forms.',
    
    p11_tag: 'Wix Studio • Creative Agency',
    p11_title: 'Creative Studio & Designer Portfolio',
    p11_desc: 'Visual-first agency portfolio showcasing creative direction, brand identity, and immersive case study presentations.',
    
    p12_tag: 'Shopify • Liquid & SEO',
    p12_title: 'Carnival Timepieces Luxury Store',
    p12_desc: 'Shopify Liquid adjustments, faceted URL hygiene, and Top 1 Google rank for brand searches.',

    // Section 05: Skills
    skills_badge: '05 // Stack & Tools',
    skills_title: 'Technical Skill Matrix',
    skills_subtitle: 'Certified competencies and tools applied across web development, SEO auditing, and AI marketing automation.',
    skills_col1_title: 'Web Development',
    skills_col2_title: 'Technical SEO',
    skills_col3_title: 'AI Automation & Data',
    skills_col4_title: 'Design & Languages',
    skills_semantic_badge: 'Semantic',
    skills_cusc_badge: 'Certified',
    skills_lang_badge: 'B2 & Native',
    skills_video_badge: 'Short-form',

    // Section 06: Contact
    contact_badge: '06 // Let\'s Collaborate',
    contact_title: 'Ready to Build, Rank, or Automate?',
    contact_desc: 'Whether you need a new website built (Shopify, WordPress, Wix), crawl issues diagnosed, Schema markup deployed, or AI automation workflows configured, let\'s talk.',
    contact_label_email: 'Direct Email:',
    contact_label_phone: 'Phone / Zalo:',
    contact_label_linkedin: 'LinkedIn Profile:',
    contact_box_title: 'Direct Communication',
    contact_box_desc: 'Send an inquiry directly or copy my email address. Guaranteed prompt reply.',
    contact_btn_send: 'Send Email to Duong',
    contact_btn_copy: 'Copy Email (duongtk.work@gmail.com)',
    contact_location: 'Location: Can Tho, Vietnam • Flexible for Global Time Zones',

    // Footer
    footer_text: '<strong class="text-slate-300">Duong</strong> • Freelance Web Specialist, SEO & AI Automation',
    footer_top: 'Top ↑',
    footer_cases: 'Case Studies',
    footer_showcase: 'Showcase',
    footer_contact: 'Contact',

    // Modal
    modal_outcomes: 'Verified Outcomes',
    modal_challenge: 'Challenge & Bottleneck',
    modal_solution: 'Engineered Solution',
    modal_tech: 'Technologies',
    modal_open_raw: 'Open Raw Image in New Tab',
    inspect_pill: 'Inspect Full Page',
    toast_copied: 'Copied to clipboard: '
  },

  vi: {
    // Navigation
    nav_about: 'Giới thiệu',
    nav_expertise: 'Năng lực cốt lõi',
    nav_cases: 'Dự án tiêu biểu',
    nav_showcase: 'Kho giao diện Web',
    nav_skills: 'Kỹ năng & Công cụ',
    nav_available: 'Sẵn sàng nhận dự án',
    nav_contact: 'Liên hệ ngay',
    brand_sub: 'Web • SEO • Tự động hóa AI',

    // Hero Section
    hero_pill: 'Freelancer • Phát triển Web, SEO & Tự động hóa Marketing AI',
    hero_title: 'Chuyên viên Phát triển Website & Tăng trưởng Số <br class="hidden sm:inline" /><span class="text-blue-600">Thiết kế Web, Technical SEO & Tự động hóa AI.</span>',
    hero_desc: 'Tôi là <strong class="text-slate-900 font-bold">Dương</strong>. Tôi đồng hành cùng các doanh nghiệp và agency xây dựng website chuẩn chuyển đổi (Shopify, WordPress, Wix), bứt phá thứ hạng Google bằng <strong class="text-slate-900 font-semibold">Technical & Semantic SEO</strong>, và tối ưu quy trình kinh doanh qua <strong class="text-slate-900 font-semibold">hệ thống tự động hóa Marketing bằng AI</strong>.',
    hero_chip_1: 'Shopify & WordPress',
    hero_chip_2: 'Wix Studio',
    hero_chip_3: 'SEO Kỹ thuật & Thực thể',
    hero_chip_4: 'Tự động hóa Marketing AI',
    hero_chip_5: 'Make / Zapier & GTM',
    hero_chip_6: 'Landing Page CRO cao',
    hero_btn_showcase: 'Xem kho dự án Website',
    hero_btn_copy: 'Sao chép Email',
    card_name: 'Dương',
    card_role: 'Web • SEO • Tự động hóa AI',
    card_location: 'Cần Thơ, Việt Nam (Remote)',
    card_lang_title: 'Ngôn ngữ làm việc:',
    card_lang_vi: '🇻🇳 Tiếng Việt (Bản ngữ)',
    card_lang_en: '🇬🇧 Tiếng Anh (Vstep B2 - Chuyên nghiệp)',
    card_lang_desc: 'Giao tiếp làm việc thành thạo với đối tác quốc tế, đọc hiểu API và tài liệu kỹ thuật tiếng Anh.',

    // Section 01: About
    about_badge: '01 // Giới thiệu & Định hướng',
    about_title: 'Biến tài sản số thành cỗ máy tạo doanh thu',
    about_subtitle: 'Cầu nối giữa lập trình website chuẩn chuyển đổi, thuật toán tìm kiếm tự nhiên và luồng tiếp thị tự động hóa cho các doanh nghiệp và agency hiện đại.',
    about_card1_title: 'Phát triển Website & Landing Page',
    about_card1_desc: 'Lập trình website và phễu bán hàng trên Shopify Liquid, WordPress child theme và Wix Studio. Tối ưu tốc độ tải di động vượt trội, chỉ số LCP dưới 1s và quy trình thanh toán mượt mà.',
    about_card2_title: 'SEO Kỹ thuật & Thực thể Ngữ nghĩa',
    about_card2_desc: 'Chẩn đoán crawl budget chuyên sâu với Screaming Frog & Semrush, loại bỏ index rác, triển khai Schema.org JSON-LD có cấu trúc và thiết lập cụm chủ đề ngữ nghĩa bứt phá thứ hạng.',
    about_card3_title: 'Tự động hóa Marketing AI & Đo lường',
    about_card3_desc: 'Kết nối biểu mẫu thu thập khách hàng với CRM qua Make, Zapier & Webhook. Thiết lập biến khử trùng lặp dữ liệu trên Google Tag Manager và phễu đo lường GA4 với độ chính xác gán chuyển đổi tuyệt đối.',

    // Section 02: Core Pillars
    pillars_badge: '02 // Năng lực cốt lõi',
    pillars_title: 'Bốn trụ cột năng lực chuyên môn',
    pillars_subtitle: 'Thực thi toàn diện từ thiết kế, lập trình, tối ưu lập chỉ mục tìm kiếm đến hệ thống tự động hóa tiếp thị.',
    pillar1_tag: 'Trụ cột 01',
    pillar1_title: 'Thương mại điện tử & Phát triển Web',
    pillar1_desc: 'Lập trình tùy biến trên Shopify Liquid, WordPress và Wix Studio. Từ tùy biến giao diện responsive đến khắc phục xung đột ứng dụng bên thứ ba.',
    pillar1_li1: 'Tùy biến giao diện Shopify Liquid, tối ưu CRO trang thanh toán và cấu trúc bộ sưu tập.',
    pillar1_li2: 'Xây dựng WordPress child theme siêu nhẹ, Gutenberg & Elementor tối ưu tốc độ.',
    pillar1_li3: 'Cổng thông tin tương tác Wix Studio, form đặt hẹn và bố cục responsive hiện đại.',
    pillar2_tag: 'Trụ cột 02',
    pillar2_title: 'SEO Kỹ thuật & Thực thể Ngữ nghĩa',
    pillar2_desc: 'Kiểm toán kiến trúc tìm kiếm đảm bảo bot Google thu thập dữ liệu, hiểu nội dung và xếp hạng trang hiệu quả nhất.',
    pillar2_li1: 'Xử lý lỗi crawl, giải quyết triệt để lỗi 4xx/5xx, cấu hình robots.txt và sitemap XML động.',
    pillar2_li2: 'Dữ liệu có cấu trúc Schema.org JSON-LD chuyên sâu (<code class="code-tag">LocalBusiness</code>, <code class="code-tag">Product</code>, <code class="code-tag">FAQPage</code>).',
    pillar2_li3: 'Nghiên cứu từ khóa theo thực thể (entity), cụm chủ đề (topic cluster) và thiết kế liên kết nội bộ.',
    pillar3_tag: 'Trụ cột 03',
    pillar3_title: 'Tự động hóa Marketing AI & Đo lường Dữ liệu',
    pillar3_desc: 'Xóa bỏ thao tác nhập liệu thủ công và đảm bảo gán chuyển đổi chính xác 100% trên các kênh quảng cáo.',
    pillar3_li1: 'Quy trình tự động hóa kết nối biểu mẫu web tới CRM qua Make & Zapier.',
    pillar3_li2: 'Kích hoạt trigger JS tùy biến trên Google Tag Manager và khử trùng lặp giao dịch.',
    pillar3_li3: 'Phễu sự kiện tùy biến Google Analytics 4 và đồng bộ server-side pixel Meta/TikTok.',
    pillar4_tag: 'Trụ cột 04',
    pillar4_title: 'Thương mại Mạng xã hội & Vận hành Đa kênh',
    pillar4_desc: 'Quản lý và vận hành bán lẻ đa kênh kết nối website chính thức với sàn thương mại xã hội.',
    pillar4_li1: 'Thiết lập gian hàng TikTok Shop & Shopee, chuẩn hóa SEO sản phẩm và quy trình xử lý đơn tự động.',
    pillar4_li2: 'Kế hoạch nội dung tự nhiên, kịch bản video ngắn và ấn phẩm thiết kế đồ họa Canva.',
    pillar4_li3: 'Chuyển hóa nội dung SEO hiệu quả thành các ấn phẩm mạng xã hội ngắn thu hút tương tác.',

    // Section 03: Case Studies
    cases_badge: '03 // Dự án thực tế',
    cases_title: 'Dự án tiêu biểu & Khách hàng thực tế',
    cases_subtitle: 'Các thách thức kỹ thuật thực tế được chẩn đoán, triển khai và đo lường kết quả cụ thể trên TMĐT, dịch vụ quốc tế và nền tảng tăng trưởng.',
    cases_outcomes_header: 'Kết quả đo lường:',

    // Case 1
    case1_tag: 'Dịch vụ Doanh nghiệp tại Đức B2B',
    case1_title: 'German Butler & Relocation: Giao diện Mobile-First & Schema Thực thể',
    case1_challenge: '<strong>Thách thức:</strong> Doanh nghiệp chuyển nhà tại Đức cần nhận diện thực thể trên Google Maps và tốc độ tải trang di động cực nhanh tại khu vực Berlin với dung lượng DOM tinh gọn tối đa.',
    case1_exec_title: 'Triển khai kỹ thuật:',
    case1_exec1: 'Xây dựng WordPress child theme mobile-first siêu nhẹ, giảm thiểu tải nạp script dư thừa.',
    case1_exec2: 'Lập trình Schema JSON-LD lồng nhau <code class="code-tag">MovingCompany</code> và <code class="code-tag">LocalBusiness</code> liên kết khu vực phục vụ, giờ hoạt động và tọa độ địa lý.',
    case1_exec3: 'Tích hợp công cụ tính giá đặt dịch vụ responsive không gây chặn hiển thị trang.',
    case1_inspect: 'Xem chi tiết kiến trúc web German Butler',
    case1_m1_title: 'Rich Results hợp lệ tuyệt đối',
    case1_m1_desc: 'Không có lỗi cú pháp trên công cụ kiểm tra Rich Results của Google.',
    case1_m2_title: 'Giảm tải độ nặng DOM',
    case1_m2_desc: 'Loại bỏ mã nguồn dư thừa giúp hiển thị tức thì trên thiết bị di động.',
    case1_m3_title: 'Sơ đồ tri thức Google',
    case1_m3_desc: 'Định danh chính xác phạm vi phục vụ cho các truy vấn địa phương.',

    // Case 2
    case2_tag: 'Dự án Freelance SEO',
    case2_title: 'Technical SEO & Khôi phục vị trí Top 1 tìm kiếm thương hiệu',
    case2_challenge: '<strong>Thách thức:</strong> Website bị lãng phí ngân sách crawl và phình to chỉ mục (index bloat) do URL tham số tìm kiếm và liên kết rác trong quá khứ.',
    case2_exec_title: 'Triển khai kỹ thuật:',
    case2_exec1: 'Sàng lọc và thiết lập quy trình từ chối liên kết độc hại qua Google Search Console.',
    case2_exec2: 'Làm sạch tham số URL bộ lọc và cấu hình chuyển hướng 301 để loại bỏ lập chỉ mục trùng lặp.',
    case2_exec3: 'Cấu trúc Schema JSON-LD lồng nhau cho <code class="code-tag">Product</code>, <code class="code-tag">AggregateRating</code> và <code class="code-tag">BreadcrumbList</code>.',
    case2_inspect: 'Xem chi tiết kiến trúc cửa hàng TMĐT',
    case2_m1_title: 'Xếp hạng Top 1 Google',
    case2_m1_desc: 'Từ khóa thương hiệu \'carnivalvietnam\' hiển thị sitelink đầy đủ.',
    case2_m2_title: 'Tỷ lệ CTR tự nhiên trung bình',
    case2_m2_desc: 'Đạt được chỉ trong 1.5 tháng đầu tiên theo dõi đo lường.',
    case2_m3_title: 'Triệt tiêu Index rác',
    case2_m3_desc: 'Làm sạch crawl budget và triệt tiêu các URL tham số trùng lặp.',

    // Case 3
    case3_tag: 'Chuyên viên SEO Nội dung',
    case3_title: 'Chiến lược SEO Nội dung Ngữ nghĩa: Tăng trưởng +56% Traffic tự nhiên',
    case3_challenge: '<strong>Thách thức:</strong> Gia tăng lượng truy cập tự nhiên và thu hút người tìm kiếm có chủ đích cao trong ngành việc làm cạnh tranh cao mà không dùng quảng cáo trả phí.',
    case3_exec_title: 'Triển khai kỹ thuật:',
    case3_exec1: 'Nghiên cứu cụm từ khóa theo ý định tìm kiếm và xây dựng cấu trúc nội dung ngữ nghĩa chuyên sâu (Content Silos).',
    case3_exec2: 'Nghiên cứu, biên tập và xuất bản <strong>207 bài viết chuẩn SEO ngữ nghĩa</strong> nhắm vào từ khóa đuôi dài có lượng tìm kiếm cao.',
    case3_exec3: 'Tối ưu mô hình liên kết nội bộ để truyền sức mạnh (link equity) về các trang dịch vụ mục tiêu.',
    case3_m1_title: 'Tăng trưởng Traffic tự nhiên',
    case3_m1_desc: 'Từ 12.3k lên 19.2k lượt truy cập hàng tháng chỉ trong 3 tháng.',
    case3_m2_title: 'Bài viết đã xuất bản',
    case3_m2_desc: '&gt;50% bài viết lọt vào Top 1, Top 3 và Top 10 Google.',

    // Supplementary Cases
    case4_tag: 'Freelance TMĐT',
    case4_status: 'Đang thực hiện',
    case4_title: 'Tùy biến Giao diện Shopify Liquid & Cài đặt Cửa hàng',
    case4_desc: 'Lập trình theme Shopify Liquid responsive, cấu hình quy trình checkout, kiểm định app bên thứ ba (đánh giá, upsell, đồng bộ kho) và xử lý xung đột script cho đối tác quốc tế.',
    
    case5_tag: 'Yatame Agency',
    case5_title: 'Technical SEO & Cụm Liên kết Nội bộ',
    case5_desc: 'Thực hiện kiểm tra sức khỏe SEO kỹ thuật toàn diện: tối ưu tốc độ tải trang, cấu trúc URL, robots.txt, sitemap XML động và sửa dứt điểm lỗi phản hồi server 4xx/5xx.',
    
    case6_tag: 'Khăn Giấy Mariel',
    case6_status: 'Vận hành',
    case6_title: 'Vận hành Đa kênh TMĐT & Mạng xã hội',
    case6_desc: 'Sản xuất nội dung tự nhiên trên TikTok & Facebook (bài viết và video ngắn). Tối ưu thông tin sản phẩm và vận hành quy trình xử lý đơn hàng trên Shopee Mall và TikTok Shop.',

    // Section 04: Showcase
    showcase_badge: '04 // Thư viện giao diện tương tác',
    showcase_title: 'Kho giao diện Website & Landing Page thực tế',
    showcase_desc: 'Trực quan hóa các website hoàn chỉnh và landing page chuyển đổi cao trên nền tảng WordPress, Wix Studio và Shopify. Rê chuột vào khung để cuộn trang tự động, hoặc bấm để mở xem toàn màn hình.',
    showcase_tip: 'Rê chuột để cuộn xem trang • Bấm để xem ảnh gốc full HD',
    filter_all: 'Tất cả dự án',
    filter_wp: 'WordPress & Web B2B',
    filter_cro: 'Landing Page CRO cao',
    filter_wix: 'Wix & Web hiện đại',
    filter_ecom: 'Shopify & TMĐT',

    // Showcase Items
    p1_tag: 'WordPress • SEO Thực thể Địa phương',
    p1_title: 'Cổng thông tin Chuyển nhà German Butler',
    p1_desc: 'Child theme siêu nhẹ với Schema MovingCompany lồng nhau, đạt 100% Rich Results và giảm 40% độ nặng DOM.',
    
    p2_tag: 'CRO cao • Trải nghiệm Y tế',
    p2_title: 'Landing Page Phòng khám & Dịch vụ Y tế',
    p2_desc: 'Landing page đặt lịch khám trực tiếp với hệ thống chứng nhận uy tín và biểu mẫu thu thập thông tin mượt mà.',
    
    p3_tag: 'Wix Studio • Dịch vụ Nhà cửa',
    p3_title: 'Fixhub Doors & Dịch vụ Kiến trúc Cửa',
    p3_desc: 'Website dịch vụ thương mại với bộ lọc danh mục sản phẩm, bộ sưu tập dự án cửa và form báo giá trực tuyến.',
    
    p4_tag: 'WordPress • Cổng Thông tin Giáo dục',
    p4_title: 'Cổng Tư vấn Du học Quốc tế Newlife',
    p4_desc: 'Cổng tư vấn du học đa quốc gia với cụm chủ đề ngữ nghĩa, cẩm nang học bổng và quy trình tư vấn du học sinh.',
    
    p5_tag: 'Wix Studio • Truyền thông & Báo chí',
    p5_title: 'Landing Page Agency Báo chí & Digital PR',
    p5_desc: 'Trang đích uy tín cao phục vụ chiến dịch Digital PR, phân tầng gói phát hành báo chí và biểu mẫu brief dự án.',
    
    p6_tag: 'Wix Studio • Thương hiệu F&B',
    p6_title: 'Website Chuỗi Nhà hàng Ẩm thực Vietdeli',
    p6_desc: 'Bộ nhận diện trực tuyến hấp dẫn với thực đơn số gắn nhãn dinh dưỡng và tính năng đặt bàn trực tuyến tiện lợi.',
    
    p7_tag: 'WordPress • B2B Công nghiệp',
    p7_title: 'Danh mục Vòng bi & Linh kiện Cơ khí',
    p7_desc: 'Danh mục linh kiện cơ khí B2B có cấu trúc chặt chẽ với tải tài liệu kỹ thuật và biểu mẫu yêu cầu báo giá sỉ.',
    
    p8_tag: 'Wix Studio • Công nghệ Giáo dục',
    p8_title: 'Nền tảng Thi & Trắc nghiệm Online EdTech',
    p8_desc: 'Giao diện làm bài thi trực tuyến tập trung, tích hợp đồng hồ bấm giờ, giải thích đáp án tức thì và cấp chứng chỉ.',
    
    p9_tag: 'Wix Studio • Xuất bản Nghiên cứu',
    p9_title: 'Cổng Báo cáo Nghiên cứu Toàn cầu NFF',
    p9_desc: 'Trình bày dữ liệu cấp cao với tóm tắt trọng điểm, biểu đồ tương tác và tải báo cáo PDF qua email.',
    
    p10_tag: 'Wix Studio • Công nghệ Phần cứng',
    p10_title: 'Website Cơ khí & Năng lượng Sạch Chia Pack Pin',
    p10_desc: 'Trưng bày phần cứng hiện đại với hình ảnh bóc tách chi tiết cell pin, bảng thông số kỹ thuật và form báo giá tùy chỉnh.',
    
    p11_tag: 'Wix Studio • Agency Sáng tạo',
    p11_title: 'Portfolio Studio Sáng tạo & Nhà thiết kế',
    p11_desc: 'Portfolio phong cách tối giản cao cấp giới thiệu định hướng sáng tạo, bộ nhận diện thương hiệu và dự án khách hàng.',
    
    p12_tag: 'Shopify • Liquid & SEO',
    p12_title: 'Cửa hàng Đồng hồ Cao cấp Carnival',
    p12_desc: 'Tùy biến giao diện Shopify Liquid, làm sạch tham số bộ lọc URL và đưa từ khóa thương hiệu lên Top 1 Google.',

    // Section 05: Skills
    skills_badge: '05 // Kỹ năng & Công cụ',
    skills_title: 'Ma trận Kỹ năng Chuyên môn',
    skills_subtitle: 'Năng lực chuyên môn và công cụ thành thạo trong lập trình web, kiểm toán SEO và tự động hóa tiếp thị AI.',
    skills_col1_title: 'Phát triển Web',
    skills_col2_title: 'SEO Kỹ thuật',
    skills_col3_title: 'Tự động hóa AI & Dữ liệu',
    skills_col4_title: 'Thiết kế & Ngôn ngữ',
    skills_semantic_badge: 'Chuẩn ngữ nghĩa',
    skills_cusc_badge: 'Chứng chỉ',
    skills_lang_badge: 'B2 & Bản ngữ',
    skills_video_badge: 'Video ngắn',

    // Section 06: Contact
    contact_badge: '06 // Hợp tác & Kết nối',
    contact_title: 'Sẵn sàng xây dựng website, bứt phá thứ hạng hoặc tự động hóa?',
    contact_desc: 'Dù bạn cần xây dựng website mới (Shopify, WordPress, Wix), xử lý sự cố thu thập dữ liệu, cài đặt Schema markup hay cấu hình quy trình tự động hóa AI, hãy liên hệ ngay.',
    contact_label_email: 'Email trực tiếp:',
    contact_label_phone: 'Điện thoại / Zalo:',
    contact_label_linkedin: 'Hồ sơ LinkedIn:',
    contact_box_title: 'Trao đổi trực tiếp',
    contact_box_desc: 'Gửi yêu cầu dự án trực tiếp hoặc sao chép địa chỉ email. Cam kết phản hồi nhanh chóng.',
    contact_btn_send: 'Gửi email cho Dương',
    contact_btn_copy: 'Sao chép Email (duongtk.work@gmail.com)',
    contact_location: 'Địa điểm: Cần Thơ, Việt Nam • Linh hoạt làm việc theo múi giờ quốc tế',

    // Footer
    footer_text: '<strong class="text-slate-300">Dương</strong> • Chuyên viên Phát triển Web, SEO & Tự động hóa AI',
    footer_top: 'Lên đầu trang ↑',
    footer_cases: 'Dự án tiêu biểu',
    footer_showcase: 'Kho giao diện',
    footer_contact: 'Liên hệ',

    // Modal
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

// Bilingual Project Data for Modal Inspector
const projectsData = {
  'project-germany-butler': {
    id: 'project-germany-butler',
    title: {
      en: 'German Butler & Relocation Enterprise Web Architecture',
      vi: 'Kiến trúc Web Doanh nghiệp Chuyển nhà & Dịch vụ Đức - German Butler'
    },
    categoryName: {
      en: 'WordPress & Local SEO',
      vi: 'WordPress & SEO Thực thể Địa phương'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Web_WP_Germany_Butler_11zon.webp',
    metrics: {
      en: [
        { label: 'Rich Results', value: '100% Validated' },
        { label: 'DOM Friction', value: '-40% Reduction' },
        { label: 'Syntax Errors', value: '0 Schema Errors' }
      ],
      vi: [
        { label: 'Rich Results', value: '100% Hợp lệ' },
        { label: 'Độ nặng DOM', value: '-40% Tối ưu' },
        { label: 'Lỗi cú pháp', value: '0 Lỗi Schema' }
      ]
    },
    challenge: {
      en: 'A German moving and relocation company required entity recognition in Google Knowledge Graph and hyper-fast mobile load performance across Berlin & Brandenburg.',
      vi: 'Doanh nghiệp dịch vụ chuyển nhà và hỗ trợ định cư tại Đức cần định danh thực thể rõ ràng trên Google Knowledge Graph và tốc độ tải trang di động siêu tốc trên địa bàn Berlin & Brandenburg.'
    },
    solution: {
      en: 'Engineered a streamlined WordPress child theme eliminating heavy external dependencies, mapping comprehensive LocalBusiness & MovingCompany schema linking areaServed, geo-coordinates, and operating hours.',
      vi: 'Lập trình WordPress child theme tối giản loại bỏ các thư viện phụ thuộc cồng kềnh, cấu hình Schema LocalBusiness & MovingCompany chuyên sâu liên kết khu vực phục vụ, tọa độ địa lý và thời gian hoạt động.'
    },
    techStack: ['WordPress Child Theme', 'Local SEO', 'JSON-LD Entity Graph', 'Core Web Vitals', 'Tailwind CSS']
  },
  'project-lp-ykhoa': {
    id: 'project-lp-ykhoa',
    title: {
      en: 'Healthcare & Medical Services CRO Landing Page',
      vi: 'Landing Page Phòng khám Y tế & Dịch vụ Chăm sóc Sức khỏe CRO cao'
    },
    categoryName: {
      en: 'High-CRO Landing Pages',
      vi: 'Landing Page CRO cao'
    },
    liveUrl: '#',
    image: 'assets/img/projects/LP_Ykhoa_11zon.webp',
    metrics: {
      en: [
        { label: 'Mobile UX', value: '100% Responsive' },
        { label: 'Conversion Intent', value: 'Optimized Flow' },
        { label: 'Form Completion', value: 'Frictionless' }
      ],
      vi: [
        { label: 'Trải nghiệm Di động', value: '100% Responsive' },
        { label: 'Chủ đích Chuyển đổi', value: 'Luồng Tối ưu' },
        { label: 'Điền biểu mẫu', value: 'Không rào cản' }
      ]
    },
    challenge: {
      en: 'Medical clinics frequently lose prospective patients due to cluttered service menus, confusing pricing, and multi-step booking friction.',
      vi: 'Các phòng khám y tế thường mất khách hàng tiềm năng do menu dịch vụ rườm rà, thông tin chi phí thiếu minh bạch và quy trình đặt lịch nhiều bước phức tạp.'
    },
    solution: {
      en: 'Designed an empathetic, clean medical landing page with prominent trust badges, doctor credentials, clear treatment packages, and a 2-step appointment booking form.',
      vi: 'Thiết kế trang đích y tế tinh tế, chỉn chu với huy hiệu chứng nhận uy tín, chứng chỉ bác sĩ, bảng gói khám rõ ràng và biểu mẫu đặt lịch khám 2 bước tinh gọn.'
    },
    techStack: ['High-CRO Layout', 'Direct Response', 'Mobile-First UX', 'Patient Funnel', 'Figma to Web']
  },
  'project-wix-doors': {
    id: 'project-wix-doors',
    title: {
      en: 'Fixhub Doors & Home Architectural Services Website',
      vi: 'Website Dịch vụ Lắp đặt Cửa & Kiến trúc Nhà cửa Fixhub'
    },
    categoryName: {
      en: 'Wix & Modern Web',
      vi: 'Wix Studio & Web Hiện đại'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Web_Wix_Doors_Fixhub_11zon.webp',
    metrics: {
      en: [
        { label: 'Service Showcase', value: 'Interactive' },
        { label: 'Quote Inquiries', value: 'Direct Form' },
        { label: 'Speed Index', value: 'Optimized' }
      ],
      vi: [
        { label: 'Trưng bày Dịch vụ', value: 'Tương tác mượt' },
        { label: 'Yêu cầu Báo giá', value: 'Form trực tiếp' },
        { label: 'Tốc độ Tải', value: 'Đã tối ưu' }
      ]
    },
    challenge: {
      en: 'Home service contractors need to clearly communicate product variations, installation warranties, and service radius to win local client trust.',
      vi: 'Nhà thầu dịch vụ nhà ở cần truyền tải rõ ràng các chủng loại vật tư, chính sách bảo hành lắp đặt và phạm vi phục vụ để tạo dựng niềm tin cho khách hàng.'
    },
    solution: {
      en: 'Built a sleek commercial service platform with product catalog filtering, high-resolution door project galleries, warranty badges, and instant quotation request forms.',
      vi: 'Xây dựng nền tảng dịch vụ thương mại sắc nét với bộ lọc danh mục sản phẩm, bộ sưu tập công trình cửa độ phân giải cao, chứng nhận bảo hành và form nhận báo giá tức thì.'
    },
    techStack: ['Wix Studio', 'Commercial Web', 'Service Catalog', 'Local Lead Capture', 'Responsive UI']
  },
  'project-wp-duhoc': {
    id: 'project-wp-duhoc',
    title: {
      en: 'Newlife Study Abroad & Education Advisory Portal',
      vi: 'Cổng Thông tin Tư vấn Du học Quốc tế Newlife'
    },
    categoryName: {
      en: 'WordPress & Education',
      vi: 'WordPress & Cổng Giáo dục'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Web_WP_duhocNewlife_11zon.webp',
    metrics: {
      en: [
        { label: 'Topical Clusters', value: 'Country Guides' },
        { label: 'Student Leads', value: 'High Intent' },
        { label: 'SEO Architecture', value: 'Semantic Silo' }
      ],
      vi: [
        { label: 'Cụm chủ đề', value: 'Cẩm nang quốc gia' },
        { label: 'Lead du học sinh', value: 'Chủ đích cao' },
        { label: 'Kiến trúc SEO', value: 'Silo Ngữ nghĩa' }
      ]
    },
    challenge: {
      en: 'Study abroad consultancies require deep topical authority across multiple countries (Korea, Japan, Australia, Germany) while maintaining intuitive student inquiry pathways.',
      vi: 'Công ty tư vấn du học đòi hỏi xây dựng thẩm quyền chủ đề (topical authority) sâu rộng cho nhiều quốc gia trong khi vẫn giữ luồng tư vấn của học sinh thật trực quan.'
    },
    solution: {
      en: 'Structured a semantic WordPress portal with country-specific scholarship guides, visa consultation funnels, student success stories, and WhatsApp/Zalo instant consultation integrations.',
      vi: 'Thiết kế cấu trúc WordPress ngữ nghĩa với cẩm nang học bổng theo từng quốc gia, phễu tư vấn visa, câu chuyện du học sinh thành công và tích hợp tư vấn Zalo tức thì.'
    },
    techStack: ['WordPress', 'Semantic Content Silo', 'Consulting Funnel', 'Local SEO', 'Custom Forms']
  },
  'project-lp-baochi': {
    id: 'project-lp-baochi',
    title: {
      en: 'Media, Journalism & Digital PR Agency Landing Page',
      vi: 'Landing Page Agency Báo chí, Truyền thông & Digital PR'
    },
    categoryName: {
      en: 'High-CRO Landing Pages',
      vi: 'Landing Page CRO cao'
    },
    liveUrl: '#',
    image: 'assets/img/projects/LP_Wix_Baochi_11zon.webp',
    metrics: {
      en: [
        { label: 'Brand Credibility', value: 'Press Badges' },
        { label: 'Package Clarity', value: 'Tiered Pricing' },
        { label: 'Lead Velocity', value: 'B2B Qualified' }
      ],
      vi: [
        { label: 'Độ uy tín Thương hiệu', value: 'Logo Đầu báo' },
        { label: 'Minh bạch Gói cước', value: 'Phân tầng Giá' },
        { label: 'Chất lượng Lead', value: 'B2B Đạt chuẩn' }
      ]
    },
    challenge: {
      en: 'B2B PR agencies must demonstrate instant editorial credibility and transparent distribution packages to corporate marketing directors.',
      vi: 'Agency truyền thông B2B cần khẳng định uy tín báo chí tức thì và các gói phân phối rõ ràng để thuyết phục giám đốc tiếp thị doanh nghiệp.'
    },
    solution: {
      en: 'Crafted an authoritative, editorial-inspired landing page highlighting newspaper publisher logos, verified case results, publication tiers, and a seamless client briefing intake form.',
      vi: 'Thiết kế trang đích đậm chất báo chí uy tín với mạng lưới logo báo chí lớn, kết quả chiến dịch đã kiểm chứng, các gói bài đăng và biểu mẫu tiếp nhận brief khách hàng mượt mà.'
    },
    techStack: ['Wix Studio', 'B2B Landing Page', 'Media Relations', 'Direct Response', 'High-Converting UI']
  },
  'project-wix-res': {
    id: 'project-wix-res',
    title: {
      en: 'Vietdeli Gourmet Restaurant & Hospitality Brand',
      vi: 'Website Thương hiệu Ẩm thực & Nhà hàng Cao cấp Vietdeli'
    },
    categoryName: {
      en: 'Wix & Modern Web',
      vi: 'Wix Studio & F&B'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Web_Wix_Res_Vietdeli_11zon.webp',
    metrics: {
      en: [
        { label: 'Visual Appetite', value: 'High-Res Media' },
        { label: 'Table Booking', value: 'Instant Form' },
        { label: 'Mobile Ease', value: 'Thumb-Friendly' }
      ],
      vi: [
        { label: 'Hình ảnh Ẩm thực', value: 'Độ nét cao' },
        { label: 'Đặt bàn Online', value: 'Form Tức thì' },
        { label: 'Thao tác Di động', value: 'Tiện lợi 1 tay' }
      ]
    },
    challenge: {
      en: 'Dining establishments need a mobile-first site that loads menus effortlessly on 4G connections and drives table reservations.',
      vi: 'Nhà hàng cần một website mobile-first tải nhanh thực đơn trên mạng 4G và kích thích khách hàng bấm đặt bàn ngay.'
    },
    solution: {
      en: 'Engineered a modern restaurant experience featuring appetizing photography, category-sorted digital menus with dietary labels, Google Maps location integration, and table booking widgets.',
      vi: 'Xây dựng trải nghiệm ẩm thực hiện đại với hình ảnh món ăn lôi cuốn, menu số phân loại rõ ràng kèm nhãn dinh dưỡng, bản đồ chỉ đường và tiện ích đặt bàn nhanh chóng.'
    },
    techStack: ['Wix Studio', 'F&B Hospitality', 'Digital Menu', 'Online Reservation', 'Mobile-First UI']
  },
  'project-wp-vongbi': {
    id: 'project-wp-vongbi',
    title: {
      en: 'Industrial Bearings & Mechanical Components Catalog',
      vi: 'Danh mục Vòng bi & Linh kiện Cơ khí Công nghiệp B2B'
    },
    categoryName: {
      en: 'WordPress & B2B Web',
      vi: 'WordPress & B2B Công nghiệp'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Web_WP_vongbi_11zon.webp',
    metrics: {
      en: [
        { label: 'Part Numbers', value: 'Searchable' },
        { label: 'B2B RFQ Flow', value: 'Direct Quote' },
        { label: 'Product Schema', value: 'Structured Data' }
      ],
      vi: [
        { label: 'Mã linh kiện', value: 'Tìm kiếm nhanh' },
        { label: 'Quy trình Báo giá', value: 'Báo giá Trực tiếp' },
        { label: 'Schema Sản phẩm', value: 'Chuẩn dữ liệu' }
      ]
    },
    challenge: {
      en: 'Industrial distributors deal with thousands of SKUs and part numbers that must be easily searchable by plant engineers and procurement managers.',
      vi: 'Nhà phân phối công nghiệp sở hữu hàng ngàn mã sản phẩm cần được kỹ sư nhà máy và phòng thu mua tìm kiếm nhanh chóng, chính xác.'
    },
    solution: {
      en: 'Built a structured WordPress B2B catalog with faceted categorization (deep groove ball bearings, roller bearings, pillow blocks), technical datasheet downloads, and bulk RFQ request forms.',
      vi: 'Xây dựng danh mục WordPress B2B chuẩn hóa với bộ lọc đa tiêu chí (vòng bi rãnh sâu, vòng bi côn, gối đỡ), tải datasheet kỹ thuật và biểu mẫu báo giá đơn hàng lớn.'
    },
    techStack: ['WordPress', 'B2B Catalog', 'Industrial SEO', 'Technical Specifications', 'RFQ Funnel']
  },
  'project-wix-edtech': {
    id: 'project-wix-edtech',
    title: {
      en: 'EdTech Online Quiz & Assessment Web Platform',
      vi: 'Nền tảng Ôn luyện Thi & Trắc nghiệm Trực tuyến EdTech'
    },
    categoryName: {
      en: 'Wix & Modern Web',
      vi: 'Wix Studio & Giáo dục Trực tuyến'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Web_Wix_Edtech_tracnghiem (3)_11zon.webp',
    metrics: {
      en: [
        { label: 'User Engagement', value: 'Gamified UI' },
        { label: 'Question Bank', value: 'Multi-Subject' },
        { label: 'Test Scoring', value: 'Instant Feedback' }
      ],
      vi: [
        { label: 'Mức độ Tương tác', value: 'Gamification' },
        { label: 'Ngân hàng Đề', value: 'Đa môn học' },
        { label: 'Chấm điểm Thi', value: 'Phản hồi Ngay' }
      ]
    },
    challenge: {
      en: 'Creating an intuitive, distraction-free test-taking environment that performs reliably across tablets and mobile phones for students.',
      vi: 'Tạo lập môi trường làm bài thi trực tuyến không xao nhãng, ổn định trên cả máy tính bảng và điện thoại cho học sinh sinh viên.'
    },
    solution: {
      en: 'Developed an interactive EdTech interface with progress bars, countdown timers, instant answer explanations, and downloadable test result certificates.',
      vi: 'Phát triển giao diện EdTech tương tác với thanh tiến độ làm bài, đồng hồ đếm ngược, phần giải thích câu trả lời chi tiết và cấp chứng nhận kết quả tải về.'
    },
    techStack: ['Wix Studio', 'Interactive EdTech', 'Quiz Logic', 'Student Experience', 'Responsive Web']
  },
  'project-wix-indian': {
    id: 'project-wix-indian',
    title: {
      en: 'NFF Global Research & Industry Report Portal',
      vi: 'Cổng Báo cáo & Nghiên cứu Ngành Toàn cầu NFF'
    },
    categoryName: {
      en: 'Wix & Modern Web',
      vi: 'Wix Studio & Xuất bản Báo cáo'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Web_Wix_Indian_Report_Nff_11zon.webp',
    metrics: {
      en: [
        { label: 'Publication Layout', value: 'Executive Tier' },
        { label: 'Report Downloads', value: 'Gated Lead Gen' },
        { label: 'Data Visuals', value: 'Interactive' }
      ],
      vi: [
        { label: 'Bố cục Xuất bản', value: 'Đẳng cấp Chuyên gia' },
        { label: 'Tải Báo cáo', value: 'Thu thập Lead' },
        { label: 'Đồ thị Dữ liệu', value: 'Tương tác cao' }
      ]
    },
    challenge: {
      en: 'Corporate research foundations need to present dense economic datasets in a visually engaging, credible format that generates subscriber leads.',
      vi: 'Tổ chức nghiên cứu cần trình bày tập dữ liệu kinh tế phức tạp dưới định dạng trực quan, uy tín nhằm gia tăng lượng đăng ký nhận tin.'
    },
    solution: {
      en: 'Engineered a corporate publishing portal with executive summaries, key takeaway callouts, interactive data infographics, and email-gated PDF downloads.',
      vi: 'Xây dựng cổng xuất bản chuyên nghiệp với tóm lược điều hành, điểm nhấn chính nổi bật, biểu đồ dữ liệu tương tác và tải báo cáo PDF qua email.'
    },
    techStack: ['Wix Studio', 'Corporate Research', 'Lead Gating', 'Data Presentation', 'Editorial Layout']
  },
  'project-chiapackpin': {
    id: 'project-chiapackpin',
    title: {
      en: 'Clean Energy & Battery Pack Engineering Web',
      vi: 'Website Kỹ thuật Cơ điện & Pack Pin Năng lượng Sạch Chia'
    },
    categoryName: {
      en: 'Wix & Modern Web',
      vi: 'Wix Studio & Phần cứng Kỹ thuật'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Web_chiapackpin_11zon.webp',
    metrics: {
      en: [
        { label: 'Tech Specs', value: 'Detailed Cells' },
        { label: 'Custom Orders', value: 'Bespoke Sizing' },
        { label: 'Safety Certs', value: 'Highlighted' }
      ],
      vi: [
        { label: 'Thông số Kỹ thuật', value: 'Chi tiết từng Cell' },
        { label: 'Đơn hàng Tùy chỉnh', value: 'Kích thước Riêng' },
        { label: 'Chứng chỉ An toàn', value: 'Nổi bật' }
      ]
    },
    challenge: {
      en: 'High-tech battery hardware manufacturers must communicate complex voltage, capacity, and cell chemistry safety standards to industrial buyers.',
      vi: 'Nhà sản xuất phần cứng pack pin công nghệ cao cần truyền đạt các tiêu chuẩn an toàn điện áp, dung lượng và hóa chất cell pin phức tạp tới khách hàng doanh nghiệp.'
    },
    solution: {
      en: 'Designed a modern hardware showcase with exploded product views, battery cell configuration charts, BMS safety feature breakdowns, and custom quotation builders.',
      vi: 'Thiết kế trang giới thiệu phần cứng hiện đại với hình ảnh bóc tách linh kiện, bảng cấu hình cell pin, tính năng mạch bảo vệ BMS và form báo giá đóng pin theo yêu cầu.'
    },
    techStack: ['Wix Studio', 'Hardware Tech', 'Technical Specs', 'B2B Inquiry', 'Product Presentation']
  },
  'project-portfolio-wix': {
    id: 'project-portfolio-wix',
    title: {
      en: 'Creative Agency & Designer Showcase Portfolio',
      vi: 'Portfolio Giới thiệu Studio Sáng tạo & Nhà thiết kế'
    },
    categoryName: {
      en: 'Wix & Modern Web',
      vi: 'Wix Studio & Thiết kế Sáng tạo'
    },
    liveUrl: '#',
    image: 'assets/img/projects/Portfolio_Wix_11zon.webp',
    metrics: {
      en: [
        { label: 'Aesthetic Impact', value: 'Minimalist Luxe' },
        { label: 'Case Studies', value: 'Visual Depth' },
        { label: 'Client Inquiries', value: 'Integrated Form' }
      ],
      vi: [
        { label: 'Ấn tượng Thị giác', value: 'Tối giản Sang trọng' },
        { label: 'Dự án Mẫu', value: 'Chiều sâu Hình ảnh' },
        { label: 'Yêu cầu Hợp tác', value: 'Form Tích hợp' }
      ]
    },
    challenge: {
      en: 'Design agencies require a portfolio that feels sophisticated, cutting-edge, and uncluttered to attract premium brand clientele.',
      vi: 'Agency thiết kế cần một portfolio tinh tế, thời thượng và thoáng đãng để thu hút các thương hiệu cao cấp.'
    },
    solution: {
      en: 'Crafted a modern layout with generous negative space, curated typography, subtle scroll animations, and immersive case study presentations.',
      vi: 'Thiết kế bố cục hiện đại với không gian thoáng rộng, kiểu chữ chọn lọc, hiệu ứng cuộn tinh tế và trình bày dự án khách hàng trực quan cuốn hút.'
    },
    techStack: ['Wix Studio', 'Creative Direction', 'Visual Identity', 'Portfolio UI', 'Micro-Interactions']
  },
  'project-carnival-watch': {
    id: 'project-carnival-watch',
    title: {
      en: 'Carnival Timepieces: Technical SEO & Brand Rank Restoration',
      vi: 'Đồng hồ Carnival: Technical SEO & Khôi phục Thứ hạng Top 1 Thương hiệu'
    },
    categoryName: {
      en: 'Shopify & SEO',
      vi: 'Shopify & SEO Kỹ thuật'
    },
    liveUrl: '#',
    image: 'assets/img/projects/project-1-watch-ecommerce.svg',
    metrics: {
      en: [
        { label: 'Google Brand Rank', value: 'Top 1' },
        { label: 'Average Organic CTR', value: '5.3%' },
        { label: 'Index Health', value: 'Clean Site Index' }
      ],
      vi: [
        { label: 'Top 1 Thương hiệu', value: 'Top 1 Google' },
        { label: 'CTR Tự nhiên TB', value: '5.3%' },
        { label: 'Sức khỏe Index', value: 'Sạch hoàn toàn' }
      ]
    },
    challenge: {
      en: 'Platform suffered from crawl inefficiency and indexation bloat caused by faceted search parameters, legacy backlink spam, and missing rich sitelinks.',
      vi: 'Website gặp tình trạng lãng phí ngân sách crawl và phình to chỉ mục do URL tham số tìm kiếm, liên kết rác cũ và thiếu sitelinks nổi bật trên Google.'
    },
    solution: {
      en: 'Conducted audit with Screaming Frog, executed disavow workflows in Google Search Console, restructured parameter hygiene, and engineered nested Product, AggregateRating, and BreadcrumbList JSON-LD schemas.',
      vi: 'Kiểm toán toàn diện bằng Screaming Frog, chặn liên kết độc hại qua Google Search Console, làm sạch tham số URL và lập trình Schema Product, AggregateRating, BreadcrumbList lồng nhau.'
    },
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

    const lang = currentLang === 'vi' ? 'vi' : 'en';

    modalTitle.textContent = typeof data.title === 'object' ? data.title[lang] : data.title;
    modalCategory.textContent = typeof data.categoryName === 'object' ? data.categoryName[lang] : data.categoryName;
    modalImage.src = data.image;
    modalImage.alt = typeof data.title === 'object' ? data.title[lang] : data.title;
    modalChallenge.textContent = typeof data.challenge === 'object' ? data.challenge[lang] : data.challenge;
    modalSolution.textContent = typeof data.solution === 'object' ? data.solution[lang] : data.solution;
    modalExternalLink.href = data.image;

    // Render Metrics
    modalMetrics.innerHTML = '';
    const metricsList = (typeof data.metrics === 'object' && data.metrics[lang]) ? data.metrics[lang] : data.metrics;
    if (Array.isArray(metricsList)) {
      metricsList.forEach(metric => {
        const metricEl = document.createElement('div');
        metricEl.className = 'bg-slate-50 border border-slate-200 p-2.5 rounded-lg flex items-center justify-between';
        metricEl.innerHTML = `
          <span class="text-xs text-slate-600 font-medium">${metric.label}</span>
          <span class="text-blue-600 font-extrabold text-sm">${metric.value}</span>
        `;
        modalMetrics.appendChild(metricEl);
      });
    }

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

    // Re-create lucide icons if any were replaced in innerHTML
    if (window.lucide) {
      window.lucide.createIcons();
    }
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
