/**
 * VIETANA GROUP — Corporate Client Interactive Logic
 * Lightweight, accessible, zero external dependencies.
 * Includes bilingual switcher (EN / VI), smooth scrolling, and corporate inquiry dispatch.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------------------------
  // 1. Translations (i18n: EN / VI)
  // ---------------------------------------------------------------------------
  const i18n = {
    en: {
      nav_about: 'About',
      nav_businesses: 'Businesses',
      nav_framework: 'Advantage',
      nav_contact: 'Contact',
      nav_get_in_touch: 'Get in Touch',
      badge_corp_status: 'Official Corporate Portal · Ho Chi Minh City',
      hero_title: 'VIETANA GROUP',
      hero_subheading_1: 'Consulting',
      hero_subheading_2: 'Technology',
      hero_subheading_3: 'Marketing',
      hero_subheading_4: 'Hospitality',
      hero_supporting: 'A diversified multi-sector enterprise group in Vietnam — building resilient businesses, engineering modern technology, and creating enduring value.',
      hero_cta_explore: 'Explore Our Businesses',
      hero_cta_contact: 'Corporate Inquiry',
      
      stat_pillars_num: '04',
      stat_pillars_lbl: 'Core Operating Pillars',
      stat_hq_num: 'HCMC',
      stat_hq_lbl: 'Corporate Headquarters',
      stat_scope_num: 'Nationwide',
      stat_scope_lbl: 'Vietnam & Regional Reach',
      stat_standards_num: 'Enterprise',
      stat_standards_lbl: 'Governance & Execution',

      about_badge: 'Corporate Overview',
      about_title: 'About VIETANA GROUP',
      about_text: '<strong>VIETANA GROUP COMPANY LIMITED</strong> is a forward-looking Vietnam-based enterprise operating across business consulting, technology solutions, strategic marketing, and hospitality ventures. We unite market acumen, technology engineering, and operational discipline to build high-standard ventures and drive sustainable commercial growth.',
      pillar_consulting_sub: 'Strategy & Advisory',
      pillar_tech_sub: 'Engineering & Platforms',
      pillar_marketing_sub: 'Branding & Growth',
      pillar_hospitality_sub: 'Commercial Concepts',

      biz_tagline: 'Capabilities & Focus',
      biz_title: 'Our Businesses',
      biz_desc: 'Four integrated operating pillars positioned across high-growth economic sectors in Vietnam, delivering end-to-end strategic execution and enterprise capability.',
      
      p1_title: 'CONSULTING',
      p1_desc: 'Cross-border strategic advisory, Vietnam market entry, corporate governance, and operational transformation designed for sustainable scale.',
      p1_cap1: 'Vietnam Market Entry & Expansion Advisory',
      p1_cap2: 'Corporate Structuring & Regulatory Compliance',
      p1_cap3: 'Strategic Procurement & Commercial Negotiations',
      p1_cap4: 'Operational Due Diligence & Feasibility',

      p2_title: 'TECHNOLOGY',
      p2_desc: 'Bespoke enterprise software, intelligent workflow automation, modern web platforms, and scalable cloud architectures.',
      p2_cap1: 'Enterprise Software & Platform Engineering',
      p2_cap2: 'Workflow Automation & Intelligent AI Systems',
      p2_cap3: 'Scalable Cloud Architecture & Data Security',
      p2_cap4: 'Custom API Integrations & Web Ecosystems',

      p3_title: 'MARKETING',
      p3_desc: 'Corporate brand architecture, strategic market positioning, omnichannel growth engines, and high-impact corporate communications.',
      p3_cap1: 'Corporate Brand Architecture & Positioning',
      p3_cap2: 'Go-to-Market Strategy & Demand Generation',
      p3_cap3: 'High-Impact Content Direction & PR Storytelling',
      p3_cap4: 'Performance Analytics & Growth Infrastructure',

      p4_title: 'HOSPITALITY',
      p4_desc: 'Enterprise F&B concept incubation, commercial venue development, quality benchmarking, and lifestyle experience ventures.',
      p4_cap1: 'Commercial F&B & Hospitality Concept Development',
      p4_cap2: 'Operational Standards & Quality Benchmarking',
      p4_cap3: 'Culinary Brand Partnerships & Incubation',
      p4_cap4: 'Experience-Driven Commercial Venture Strategy',

      framework_tagline: 'Strategic Foundation',
      framework_title: 'The VIETANA Advantage',
      framework_desc: 'A disciplined approach that blends deep Vietnam operational fluency with international enterprise standards.',
      f1_title: 'Vietnam Fluency, Global Standards',
      f1_desc: 'Deep local market insight, regulatory clarity, and extensive operational networks paired with institutional-grade delivery.',
      f2_title: 'Cross-Sector Synergies',
      f2_desc: 'Each business pillar reinforces the others — technology powers our operations, marketing scales our presence, and consulting steers execution.',
      f3_title: 'Long-Term Value Creation',
      f3_desc: 'We focus on sustainable business fundamentals, ethical governance, and strategic value that endures across market cycles.',

      statement_tag: 'Corporate Philosophy',
      statement_headline: 'Different industries.<br>One unified vision.',
      statement_subtext: 'VIETANA GROUP bridges industry capabilities under one cohesive identity — building businesses, engineering solutions, and creating value with a Vietnam-first perspective.',

      contact_tagline: 'Partnerships & Engagements',
      contact_title: 'Corporate Inquiries',
      contact_desc: 'Connect directly with our leadership team in Ho Chi Minh City for strategic partnerships, advisory services, technology collaborations, and business discussions.',
      
      hq_label: 'Headquarters',
      hq_val: '45 Nguyễn Quý Đức, Phường Bình Trưng, Thành phố Hồ Chí Minh, Vietnam',
      phone_label: 'Direct Line',
      email_label: 'Corporate Email',
      web_label: 'Official Domain',

      form_title: 'Submit an Executive Inquiry',
      form_desc: 'Select your area of interest and our executive team will review and respond promptly.',
      form_name_lbl: 'Full Name',
      form_name_ph: 'Your Full Name',
      form_org_lbl: 'Company / Organization',
      form_org_ph: 'Your Organization Name',
      form_type_lbl: 'Inquiry Category',
      form_type_opt1: 'Strategic Consulting & Advisory',
      form_type_opt2: 'Technology & Digital Solutions',
      form_type_opt3: 'Marketing & Brand Strategy',
      form_type_opt4: 'Hospitality & Commercial Ventures',
      form_type_opt5: 'General Corporate Partnership',
      form_msg_lbl: 'Brief / Message',
      form_msg_ph: 'Outline your project, collaboration idea, or inquiry...',
      form_submit_email: 'Send via Email',
      form_submit_wa: 'Connect on WhatsApp',

      footer_tagline: 'Consulting · Technology · Marketing · Hospitality',
      footer_desc: 'A Vietnam-based enterprise group creating businesses, developing solutions, and building experiences with a Vietnam-first perspective.',
      footer_nav_title: 'Corporate Navigation',
      footer_areas_title: 'Operating Sectors',
      footer_rights: '© 2026 VIETANA GROUP. All rights reserved.',
      footer_legal: 'VIETANA GROUP COMPANY LIMITED'
    },
    vi: {
      nav_about: 'Giới thiệu',
      nav_businesses: 'Lĩnh vực',
      nav_framework: 'Thế mạnh',
      nav_contact: 'Liên hệ',
      nav_get_in_touch: 'Kết nối ngay',
      badge_corp_status: 'Cổng thông tin doanh nghiệp · TP. Hồ Chí Minh',
      hero_title: 'VIETANA GROUP',
      hero_subheading_1: 'Tư vấn',
      hero_subheading_2: 'Công nghệ',
      hero_subheading_3: 'Tiếp thị',
      hero_subheading_4: 'Khách sạn & Dịch vụ',
      hero_supporting: 'Tập đoàn kinh doanh đa ngành tại Việt Nam — kiến tạo doanh nghiệp vững mạnh, phát triển công nghệ hiện đại và mang lại giá trị bền vững.',
      hero_cta_explore: 'Khám phá Lĩnh vực',
      hero_cta_contact: 'Liên hệ Hợp tác',

      stat_pillars_num: '04',
      stat_pillars_lbl: 'Trụ cột Kinh doanh',
      stat_hq_num: 'TP.HCM',
      stat_hq_lbl: 'Trụ sở Doanh nghiệp',
      stat_scope_num: 'Toàn quốc',
      stat_scope_lbl: 'Quy mô Hoạt động',
      stat_standards_num: 'Chuẩn mực',
      stat_standards_lbl: 'Quản trị Doanh nghiệp',

      about_badge: 'Tổng quan Doanh nghiệp',
      about_title: 'Về VIETANA GROUP',
      about_text: '<strong>CÔNG TY TNHH VIETANA GROUP</strong> là tập đoàn kinh tế đa ngành tại Việt Nam hoạt động trên các lĩnh vực tư vấn chiến lược, giải pháp công nghệ, tiếp thị thương hiệu và dịch vụ khách sạn. Chúng tôi kết hợp tư duy thị trường sắc bén, năng lực công nghệ và kỷ luật vận hành để phát triển các dự án chuẩn mực cao.',
      pillar_consulting_sub: 'Chiến lược & Quản trị',
      pillar_tech_sub: 'Kỹ thuật & Nền tảng',
      pillar_marketing_sub: 'Thương hiệu & Tăng trưởng',
      pillar_hospitality_sub: 'Mô hình Dịch vụ',

      biz_tagline: 'Năng lực & Trọng tâm',
      biz_title: 'Các Lĩnh vực Hoạt động',
      biz_desc: 'Bốn trụ cột kinh doanh cốt lõi nằm trong các ngành kinh tế trọng điểm tại Việt Nam, mang lại giải pháp toàn diện và năng lực vượt trội.',
      
      p1_title: 'TƯ VẤN CHIẾN LƯỢC',
      p1_desc: 'Tư vấn gia nhập thị trường Việt Nam, cấu trúc doanh nghiệp xuyên biên giới, quản trị doanh nghiệp và chuyển đổi vận hành bền vững.',
      p1_cap1: 'Tư vấn Gia nhập & Mở rộng Thị trường Việt Nam',
      p1_cap2: 'Cấu trúc Doanh nghiệp & Tuân thủ Pháp lý',
      p1_cap3: 'Mua sắm Chiến lược & Đàm phán Thương mại',
      p1_cap4: 'Thẩm định Vận hành & Phân tích Khả thi',

      p2_title: 'CÔNG NGHỆ SỐ',
      p2_desc: 'Phần mềm doanh nghiệp theo yêu cầu, tự động hóa quy trình thông minh, nền tảng số hiện đại và hạ tầng đám mây an toàn.',
      p2_cap1: 'Kỹ thuật Phần mềm & Nền tảng Doanh nghiệp',
      p2_cap2: 'Tự động hóa Quy trình & Ứng dụng AI Thông minh',
      p2_cap3: 'Hạ tầng Đám mây Mở rộng & An toàn Dữ liệu',
      p2_cap4: 'Tích hợp Hệ thống API & Hệ sinh thái Web',

      p3_title: 'TIẾP THỊ & THƯƠNG HIỆU',
      p3_desc: 'Kiến trúc thương hiệu doanh nghiệp, định vị thị trường chiến lược, động cơ tăng trưởng đa kênh và truyền thông tác động cao.',
      p3_cap1: 'Kiến trúc Thương hiệu Doanh nghiệp & Định vị',
      p3_cap2: 'Chiến lược Tiếp cận Thị trường & Tạo Nhu cầu',
      p3_cap3: 'Định hướng Nội dung & Truyền thông Doanh nghiệp',
      p3_cap4: 'Phân tích Hiệu suất & Hạ tầng Tăng trưởng',

      p4_title: 'KHÁCH SẠN & DỊCH VỤ',
      p4_desc: 'Phát triển mô hình F&B thương mại, chuẩn hóa vận hành dịch vụ khách sạn và phát triển các dự án trải nghiệm phong cách sống.',
      p4_cap1: 'Phát triển Mô hình F&B & Khách sạn Thương mại',
      p4_cap2: 'Tiêu chuẩn Vận hành & Định chuẩn Chất lượng',
      p4_cap3: 'Hợp tác & Ươm mầm Thương hiệu Ẩm thực',
      p4_cap4: 'Chiến lược Dự án Trải nghiệm Khách hàng',

      framework_tagline: 'Nền tảng Chiến lược',
      framework_title: 'Thế mạnh VIETANA',
      framework_desc: 'Phương pháp tiếp cận kỷ luật kết hợp sự am hiểu sâu sắc thị trường Việt Nam với các chuẩn mực doanh nghiệp quốc tế.',
      f1_title: 'Thấu hiểu Bản địa, Chuẩn mực Quốc tế',
      f1_desc: 'Sự thông thạo môi trường kinh doanh tại Việt Nam, mạng lưới vận hành sâu rộng cùng năng lực bàn giao chuyên nghiệp.',
      f2_title: 'Cộng hưởng Liên ngành',
      f2_desc: 'Mỗi trụ cột bổ trợ lẫn nhau — công nghệ tối ưu vận hành, tiếp thị mở rộng quy mô và tư vấn định hướng chiến lược.',
      f3_title: 'Tạo lập Giá trị Bền vững',
      f3_desc: 'Tập trung vào nền tảng kinh doanh cốt lõi, đạo đức doanh nghiệp và giá trị lâu dài qua mọi chu kỳ kinh tế.',

      statement_tag: 'Triết lý Doanh nghiệp',
      statement_headline: 'Đa dạng ngành nghề.<br>Chung một tầm nhìn.',
      statement_subtext: 'VIETANA GROUP hội tụ các năng lực chuyên sâu dưới một bản sắc thống nhất — kiến tạo doanh nghiệp, giải pháp công nghệ và giá trị bền vững tại Việt Nam.',

      contact_tagline: 'Hợp tác & Kết nối',
      contact_title: 'Liên hệ Doanh nghiệp',
      contact_desc: 'Kết nối trực tiếp với ban lãnh đạo của chúng tôi tại TP. Hồ Chí Minh để thảo luận về hợp tác chiến lược, dịch vụ tư vấn và giải pháp công nghệ.',
      
      hq_label: 'Trụ sở chính',
      hq_val: '45 Nguyễn Quý Đức, Phường Bình Trưng, Thành phố Hồ Chí Minh, Việt Nam',
      phone_label: 'Đường dây nóng',
      email_label: 'Email Doanh nghiệp',
      web_label: 'Website Chính thức',

      form_title: 'Gửi Yêu cầu Hợp tác',
      form_desc: 'Vui lòng chọn lĩnh vực bạn quan tâm và ban lãnh đạo sẽ phản hồi sớm nhất.',
      form_name_lbl: 'Họ và Tên',
      form_name_ph: 'Họ và tên của bạn',
      form_org_lbl: 'Tổ chức / Doanh nghiệp',
      form_org_ph: 'Tên công ty hoặc tổ chức',
      form_type_lbl: 'Lĩnh vực Hợp tác',
      form_type_opt1: 'Tư vấn Chiến lược & Gia nhập Thị trường',
      form_type_opt2: 'Giải pháp Công nghệ & Phần mềm',
      form_type_opt3: 'Chiến lược Tiếp thị & Thương hiệu',
      form_type_opt4: 'Dự án Khách sạn & Ẩm thực (F&B)',
      form_type_opt5: 'Hợp tác Doanh nghiệp Chung',
      form_msg_lbl: 'Nội dung trao đổi',
      form_msg_ph: 'Mô tả ngắn gọn về nhu cầu hoặc kế hoạch hợp tác...',
      form_submit_email: 'Gửi qua Email',
      form_submit_wa: 'Nhắn tin qua WhatsApp',

      footer_tagline: 'Tư vấn · Công nghệ · Tiếp thị · Khách sạn & Dịch vụ',
      footer_desc: 'Tập đoàn kinh tế đa ngành tại Việt Nam kiến tạo doanh nghiệp, phát triển giải pháp và xây dựng giá trị bền vững.',
      footer_nav_title: 'Điều hướng',
      footer_areas_title: 'Lĩnh vực Trọng tâm',
      footer_rights: '© 2026 VIETANA GROUP. Bảo lưu mọi quyền.',
      footer_legal: 'CÔNG TY TNHH VIETANA GROUP'
    }
  };

  // Current language state
  let currentLang = localStorage.getItem('vietana_lang') || 'en';

  function applyLanguage(lang) {
    if (!i18n[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('vietana_lang', lang);
    document.documentElement.lang = lang;

    // Update text content for data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        el.innerHTML = i18n[lang][key];
      }
    });

    // Update placeholders for inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang][key]) {
        el.setAttribute('placeholder', i18n[lang][key]);
      }
    });

    // Update toggle active buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Bind Language Switcher Buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      applyLanguage(selectedLang);
      if (window.showToast) {
        window.showToast(selectedLang === 'vi' ? 'Đã chuyển sang Tiếng Việt' : 'Switched to English');
      }
    });
  });

  // Apply initial language
  applyLanguage(currentLang);

  // ---------------------------------------------------------------------------
  // 2. Header Scroll Effect
  // ---------------------------------------------------------------------------
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // ---------------------------------------------------------------------------
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-cta');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
    document.body.style.overflow = '';
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeMobileMenu();
      }
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 4. Smooth Anchor Scrolling
  // ---------------------------------------------------------------------------
  const navAnchorLinks = document.querySelectorAll('a[href^="#"]');
  navAnchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight + 10;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 5. Active Nav Highlighting via IntersectionObserver
  // ---------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // ---------------------------------------------------------------------------
  // 6. Corporate Inquiry Form Dispatch
  // ---------------------------------------------------------------------------
  const inquiryForm = document.getElementById('corpInquiryForm');
  if (inquiryForm) {
    const emailBtn = document.getElementById('btnSubmitEmail');
    const waBtn = document.getElementById('btnSubmitWA');

    const getFormData = () => {
      const name = document.getElementById('inquiryName')?.value.trim() || 'Valued Partner';
      const org = document.getElementById('inquiryOrg')?.value.trim() || 'Independent';
      const category = document.getElementById('inquiryType')?.value || 'General Corporate';
      const message = document.getElementById('inquiryMessage')?.value.trim() || 'I would like to explore collaboration with VIETANA GROUP.';
      return { name, org, category, message };
    };

    if (emailBtn) {
      emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = getFormData();
        const subject = encodeURIComponent(`[Corporate Inquiry] ${data.category} — ${data.name} (${data.org})`);
        const body = encodeURIComponent(
          `Dear VIETANA GROUP Leadership Team,\n\n` +
          `Name: ${data.name}\n` +
          `Organization: ${data.org}\n` +
          `Inquiry Category: ${data.category}\n\n` +
          `Message:\n${data.message}\n\n` +
          `Sent via www.vietanagroup.com`
        );
        window.location.href = `mailto:vietanagroup@gmail.com?subject=${subject}&body=${body}`;
        window.showToast('Opening email client...');
      });
    }

    if (waBtn) {
      waBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = getFormData();
        const text = encodeURIComponent(
          `Hello VIETANA GROUP, my name is ${data.name} from ${data.org}.\n` +
          `I am reaching out regarding *${data.category}*.\n\n` +
          `Message: ${data.message}`
        );
        window.open(`https://wa.me/84902434006?text=${text}`, '_blank', 'noopener,noreferrer');
        window.showToast('Connecting via WhatsApp...');
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 7. Toast Notification Helper
  // ---------------------------------------------------------------------------
  window.showToast = function(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 2800);
  };

  // ---------------------------------------------------------------------------
  // 8. Copy to Clipboard Helper
  // ---------------------------------------------------------------------------
  window.copyToClipboard = function(text, label, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    navigator.clipboard.writeText(text).then(() => {
      window.showToast(`Copied ${label} to clipboard`);
    }).catch(() => {
      window.showToast(`Unable to copy automatically`);
    });
  };
});
