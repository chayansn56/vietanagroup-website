/**
 * VIETANA GROUP — Corporate Client Interactive Logic
 * Features:
 * - Full bilingual i18n switcher (English / Tiếng Việt)
 * - Real brand ecosystem & corporate governance data
 * - Executive inquiry dispatch via direct email and WhatsApp
 * - Accessible, responsive, zero-dependency architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------------------------
  // 1. Translations (i18n: EN / VI)
  // ---------------------------------------------------------------------------
  const i18n = {
    en: {
      nav_about: 'About',
      nav_businesses: 'Divisions',
      nav_portfolio: 'Portfolio',
      nav_framework: 'Advantage',
      nav_governance: 'Governance',
      nav_contact: 'Contact',
      nav_get_in_touch: 'Connect with Us',

      badge_corp_status: 'CÔNG TY TNHH VIETANA GROUP · MST: 0319680543',
      hero_title: 'VIETANA GROUP',
      hero_tagline: 'Building Enterprises · Powering Technology · Cultivating Culture',
      hero_subheading_1: 'Consulting',
      hero_subheading_2: 'Technology',
      hero_subheading_3: 'Marketing',
      hero_subheading_4: 'Hospitality',
      hero_supporting: 'Headquartered in Ho Chi Minh City, VIETANA GROUP is a multi-sector enterprise operating across business consulting, enterprise technology, brand marketing, and hospitality ventures in Vietnam.',
      hero_cta_portfolio: 'Explore Our Portfolio',
      hero_cta_contact: 'Executive Inquiry',

      stat_pillars_num: '04',
      stat_pillars_lbl: 'Operating Divisions',
      stat_branches_num: '04+',
      stat_branches_lbl: 'Active Culinary Branches',
      stat_tax_num: '0319680543',
      stat_tax_lbl: 'Tax / Enterprise Code',
      stat_hq_num: 'HCMC',
      stat_hq_lbl: 'Corporate Headquarters',

      about_badge: 'Corporate Background',
      about_title: 'About VIETANA GROUP',
      about_text: '<strong>VIETANA GROUP COMPANY LIMITED (CÔNG TY TNHH VIETANA GROUP)</strong> is an agile enterprise group founded on the conviction that Vietnam’s dynamic growth is best realized through integrated cross-sector execution. Operating across consulting, digital engineering, brand architecture, and hospitality, we connect international standards with deep Vietnamese operational fluency to build resilient, high-value businesses.',
      pillar_consulting_sub: 'Cross-Border Advisory',
      pillar_tech_sub: 'Enterprise AI & Platforms',
      pillar_marketing_sub: 'Brand Architecture',
      pillar_hospitality_sub: 'F&B & Lifestyle Ventures',

      biz_tagline: 'Operating Divisions',
      biz_title: 'Four Core Business Pillars',
      biz_desc: 'Integrated enterprise capabilities driving commercial growth, technological innovation, and operational excellence across key sectors in Vietnam.',

      p1_title: 'STRATEGY & CONSULTING',
      p1_desc: 'Cross-border strategic advisory, specialized India-Vietnam business structuring, statutory regulatory compliance, and commercial procurement.',
      p1_cap1: 'Cross-Border Market Entry & Enterprise Expansion',
      p1_cap2: 'Statutory Compliance, Labor Quotas (DOLISA) & Licensing',
      p1_cap3: 'Strategic Supplier Procurement & Contract Negotiations',
      p1_cap4: 'Commercial Feasibility & Unit Economics Modeling',

      p2_title: 'TECHNOLOGY & ENTERPRISE AI',
      p2_desc: 'Proprietary artificial intelligence architectures, intelligent automation engines, cloud-native web systems, and secure API infrastructure.',
      p2_cap1: 'Intelligent AI Architecture & Workflow Automation',
      p2_cap2: 'Enterprise Cloud Platforms & Scalable Backends',
      p2_cap3: 'Custom API Integrations & High-Security Systems',
      p2_cap4: 'Data Governance, Compliance & Automation Tools',

      p3_title: 'MARKETING & BRAND ARCHITECTURE',
      p3_desc: 'Corporate brand architecture, strategic market positioning, cross-cultural storytelling, and omnichannel growth infrastructure.',
      p3_cap1: 'Corporate Brand Architecture & Strategic Narrative',
      p3_cap2: 'Cross-Cultural Positioning (India ⇄ Vietnam Corridors)',
      p3_cap3: 'Go-to-Market Strategy & B2B Distribution Engines',
      p3_cap4: 'Performance Analytics, Creative Direction & PR',

      p4_title: 'HOSPITALITY & CULINARY VENTURES',
      p4_desc: 'Multi-unit commercial restaurant concept development, authentic gastronomy curation, strict kitchen SOPs, and lifestyle hospitality operations.',
      p4_cap1: 'Multi-Unit Restaurant Incubation & Operations',
      p4_cap2: 'Uncompromising Culinary Authenticity & Recipe Standardisation',
      p4_cap3: 'Commercial Food Safety, Hygiene & Statutory Compliance',
      p4_cap4: 'Experiential Dining & Lifestyle Asset Management',

      portfolio_tagline: 'Real Ventures & Ecosystem',
      portfolio_title: 'Our Brand Portfolio',
      portfolio_desc: 'Tangible enterprises and specialized operating brands owned, developed, or managed under the VIETANA GROUP ecosystem.',
      
      port1_status: 'Operating · 4 Locations',
      port1_name: 'Mì Quảng Cô Viên',
      port1_div: 'VIETANA Food & Beverage',
      port1_desc: 'Celebrated Central Vietnamese noodle heritage brand serving authentic Quang-style dishes prepared with traditional recipes, regional herbs, and premium ingredients across 4 operating branches in Ho Chi Minh City.',
      port1_ent_lbl: 'Operating Entity',
      port1_ent_val: 'MI QUANG CO VIEN FOOD TRADING CO., LTD',
      port1_mst_lbl: 'Tax / MST Code',
      port1_loc_lbl: 'Locations',
      port1_loc_val: '4 Branches in TP. Thủ Đức, TP. Hồ Chí Minh',

      port2_status: 'Pre-Operational · Launching Soon',
      port2_name: 'The Spicy Spoon',
      port2_div: 'VIETANA Food & Beverage',
      port2_desc: 'Contemporary multi-regional Indian gastronomy concept crafted with authentic subcontinental spices and soul. Features strict station authenticity, international culinary talent, and modern dining ambiance in Ho Chi Minh City.',
      port2_ent_lbl: 'Corporate Parent',
      port2_ent_val: 'VIETANA GROUP COMPANY LIMITED',
      port2_tagline_lbl: 'Brand Tagline',
      port2_tagline_val: 'Crafted with Indian Soul',
      port2_loc_lbl: 'Target Location',
      port2_loc_val: 'Ho Chi Minh City, Vietnam',

      port3_status: 'Active Corridor',
      port3_name: 'VIETANA Global Advisory',
      port3_div: 'VIETANA Strategy & Consulting',
      port3_desc: 'Dedicated cross-border consulting division facilitating commercial trade, corporate market entry, statutory labor compliance, and supplier procurement between India, Southeast Asia, and Vietnam.',
      port3_ent_lbl: 'Operating Division',
      port3_ent_val: 'Corporate Advisory & B2B Procurement',
      port3_focus_lbl: 'Core Corridor',
      port3_focus_val: 'India ⇄ Vietnam Commercial Highway',
      port3_scope_lbl: 'Nationwide Scope',
      port3_scope_val: 'HCMC, Da Nang, Hanoi, Ha Long',

      port4_status: 'Proprietary Tech',
      port4_name: 'VIETANA Tech Labs',
      port4_div: 'VIETANA Technology',
      port4_desc: 'In-house software engineering and applied AI team developing proprietary decision engines, Model Context Protocol (MCP) servers, enterprise automation, and custom web platforms for commercial operations.',
      port4_ent_lbl: 'Engineering Division',
      port4_ent_val: 'Enterprise Systems & Applied AI',
      port4_standards_lbl: 'Core Architecture',
      port4_standards_val: 'Open MCP Standard · Cloud-Native',
      port4_app_lbl: 'Applications',
      port4_app_val: 'Autonomous Workflows & Enterprise APIs',

      framework_tagline: 'Strategic Foundation',
      framework_title: 'The VIETANA Advantage',
      framework_desc: 'A disciplined approach that blends deep Vietnam operational fluency with international enterprise standards.',
      f1_title: 'Vietnam Fluency, Global Standards',
      f1_desc: 'Deep local market insight, regulatory clarity, and extensive operational networks in Ho Chi Minh City and nationwide paired with institutional-grade delivery.',
      f2_title: 'Cross-Sector Synergies',
      f2_desc: 'Each division reinforces the others — technology powers operations, marketing scales market presence, and strategic consulting steers capital allocation.',
      f3_title: 'Long-Term Value Creation',
      f3_desc: 'We focus on sustainable business fundamentals, ethical governance, and strategic value that endures across shifting economic cycles.',

      gov_tagline: 'Institutional Transparency',
      gov_title: 'Corporate Governance & Statutory Details',
      gov_desc: 'VIETANA GROUP COMPANY LIMITED operates in full compliance with Vietnamese enterprise legislation and international business governance standards.',
      gov_lbl_legal: 'Legal Entity Name',
      gov_val_legal: 'CÔNG TY TNHH VIETANA GROUP (VIETANA GROUP COMPANY LIMITED)',
      gov_lbl_mst: 'Enterprise Registration / Tax Code (MST)',
      gov_val_mst: '0319680543',
      gov_lbl_address: 'Registered Headquarters',
      gov_val_address: '45 Nguyễn Quý Đức, Phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh, Vietnam',
      gov_lbl_founder: 'Founder & Business Development',
      gov_val_founder: 'Chayan Soni',
      gov_lbl_sector: 'Primary Commercial Classifications',
      gov_val_sector: 'Management Consulting, Technology, Marketing & F&B Ventures',
      gov_lbl_jurisdiction: 'Jurisdiction & Authority',
      gov_val_jurisdiction: 'Department of Planning and Investment (DPI), Ho Chi Minh City',

      statement_tag: 'Corporate Philosophy',
      statement_headline: 'Different industries.<br>One unified vision.',
      statement_subtext: 'VIETANA GROUP bridges industry capabilities under one cohesive identity — building businesses, engineering solutions, and cultivating value with a Vietnam-first perspective.',

      contact_tagline: 'Partnerships & Engagements',
      contact_title: 'Executive Inquiries',
      contact_desc: 'Connect directly with our leadership team in Ho Chi Minh City for strategic partnerships, advisory services, technology collaborations, and commercial ventures.',
      
      hq_label: 'Corporate Headquarters',
      hq_val: '45 Nguyễn Quý Đức, Phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh, Vietnam',
      phone_label: 'Direct Line / Executive Office',
      email_label: 'Corporate Email',
      web_label: 'Official Domain',

      form_title: 'Submit an Executive Inquiry',
      form_desc: 'Select your area of interest and our executive leadership will review and respond promptly.',
      form_name_lbl: 'Full Name',
      form_name_ph: 'Your Full Name',
      form_org_lbl: 'Company / Organization',
      form_org_ph: 'Your Organization Name',
      form_type_lbl: 'Inquiry Category',
      form_type_opt1: 'Strategic Consulting & Cross-Border Advisory',
      form_type_opt2: 'Technology & Enterprise AI Solutions',
      form_type_opt3: 'Marketing & Brand Strategy',
      form_type_opt4: 'Hospitality & F&B Concept Collaboration',
      form_type_opt5: 'General Corporate Partnership & Investment',
      form_msg_lbl: 'Brief / Message',
      form_msg_ph: 'Outline your project, collaboration idea, or inquiry...',
      form_submit_email: 'Send via Email',
      form_submit_wa: 'Connect on WhatsApp',

      footer_tagline: 'Consulting · Technology · Marketing · Hospitality',
      footer_desc: 'A Vietnam-based enterprise group creating businesses, developing solutions, and cultivating enduring value with a Vietnam-first perspective.',
      footer_nav_title: 'Corporate Navigation',
      footer_areas_title: 'Operating Sectors',
      footer_rights: '© 2026 VIETANA GROUP. All rights reserved.',
      footer_legal: 'CÔNG TY TNHH VIETANA GROUP (MST: 0319680543)'
    },
    vi: {
      nav_about: 'Giới thiệu',
      nav_businesses: 'Lĩnh vực',
      nav_portfolio: 'Hệ sinh thái',
      nav_framework: 'Thế mạnh',
      nav_governance: 'Pháp lý',
      nav_contact: 'Liên hệ',
      nav_get_in_touch: 'Kết nối ngay',

      badge_corp_status: 'CÔNG TY TNHH VIETANA GROUP · MST: 0319680543',
      hero_title: 'VIETANA GROUP',
      hero_tagline: 'Kiến tạo Doanh nghiệp · Tiên phong Công nghệ · Lan tỏa Văn hóa',
      hero_subheading_1: 'Tư vấn',
      hero_subheading_2: 'Công nghệ',
      hero_subheading_3: 'Tiếp thị',
      hero_subheading_4: 'Khách sạn & Dịch vụ',
      hero_supporting: 'Có trụ sở chính tại TP. Hồ Chí Minh, VIETANA GROUP là tập đoàn đa ngành hoạt động trên các lĩnh vực tư vấn chiến lược, công nghệ doanh nghiệp, tiếp thị thương hiệu và mô hình ẩm thực - dịch vụ tại Việt Nam.',
      hero_cta_portfolio: 'Xem Hệ sinh thái Thương hiệu',
      hero_cta_contact: 'Liên hệ Hợp tác',

      stat_pillars_num: '04',
      stat_pillars_lbl: 'Khối Kinh doanh Trọng tâm',
      stat_branches_num: '04+',
      stat_branches_lbl: 'Chi nhánh Ẩm thực Hoạt động',
      stat_tax_num: '0319680543',
      stat_tax_lbl: 'Mã số Thuế / ĐKKD',
      stat_hq_num: 'TP.HCM',
      stat_hq_lbl: 'Trụ sở Doanh nghiệp',

      about_badge: 'Tổng quan Doanh nghiệp',
      about_title: 'Về VIETANA GROUP',
      about_text: '<strong>CÔNG TY TNHH VIETANA GROUP</strong> là tập đoàn kinh tế đa ngành năng động, phát triển dựa trên niềm tin rằng sự tăng trưởng mạnh mẽ của Việt Nam được hiện thực hóa tốt nhất thông qua sự thực thi liên ngành. Hoạt động trên các lĩnh vực tư vấn, kỹ thuật số, kiến trúc thương hiệu và ẩm thực dịch vụ, chúng tôi kết nối các tiêu chuẩn quốc tế với sự am hiểu sâu sắc thị trường bản địa.',
      pillar_consulting_sub: 'Tư vấn Xuyên biên giới',
      pillar_tech_sub: 'Công nghệ & Nền tảng AI',
      pillar_marketing_sub: 'Kiến trúc Thương hiệu',
      pillar_hospitality_sub: 'Ẩm thực & Dịch vụ F&B',

      biz_tagline: 'Khối Hoạt động',
      biz_title: 'Bốn Trụ cột Kinh doanh Cốt lõi',
      biz_desc: 'Năng lực doanh nghiệp tích hợp thúc đẩy tăng trưởng thương mại, đổi mới công nghệ và chuẩn mực vận hành xuất sắc tại Việt Nam.',

      p1_title: 'TƯ VẤN CHIẾN LƯỢC',
      p1_desc: 'Tư vấn chiến lược xuyên biên giới, chuyên sâu hành lang doanh nghiệp Ấn Độ - Việt Nam, tuân thủ pháp lý và mua sắm thương mại.',
      p1_cap1: 'Tư vấn Gia nhập & Mở rộng Thị trường Xuyên biên giới',
      p1_cap2: 'Tuân thủ Pháp lý, Hạn ngạch Lao động nước ngoài (Sở LĐ-TB&XH) & Giấy phép',
      p1_cap3: 'Mua sắm Chiến lược & Đàm phán Hợp đồng Nhà cung cấp',
      p1_cap4: 'Thẩm định Khả thi Thương mại & Mô hình Đơn vị Kinh tế',

      p2_title: 'CÔNG NGHỆ & TRÍ TUỆ NHÂN TẠO',
      p2_desc: 'Kiến trúc trí tuệ nhân tạo chuyên sâu, động cơ tự động hóa thông minh, nền tảng web điện toán đám mây và hạ tầng API bảo mật.',
      p2_cap1: 'Kiến trúc AI Thông minh & Tự động hóa Quy trình',
      p2_cap2: 'Nền tảng Đám mây Doanh nghiệp & Hệ thống Mở rộng',
      p2_cap3: 'Tích hợp API Tùy chỉnh & Hệ thống An toàn Dữ liệu',
      p2_cap4: 'Quản trị Dữ liệu, Tuân thủ Pháp chế & Công cụ Tự động',

      p3_title: 'TIẾP THỊ & THƯƠNG HIỆU',
      p3_desc: 'Kiến trúc thương hiệu doanh nghiệp, định vị thị trường chiến lược, truyền thông đa văn hóa và hạ tầng tăng trưởng đa kênh.',
      p3_cap1: 'Kiến trúc Thương hiệu Doanh nghiệp & Thông điệp Chiến lược',
      p3_cap2: 'Định vị Đa văn hóa (Hành lang Ấn Độ ⇄ Việt Nam)',
      p3_cap3: 'Chiến lược Tiếp cận Thị trường & Kênh Phân phối B2B',
      p3_cap4: 'Phân tích Hiệu suất, Định hướng Sáng tạo & PR Doanh nghiệp',

      p4_title: 'ẨM THỰC & DỊCH VỤ F&B',
      p4_desc: 'Phát triển chuỗi nhà hàng thương mại, bảo tồn di sản ẩm thực nguyên bản, chuẩn hóa quy trình SOP bếp và quản trị dịch vụ phong cách sống.',
      p4_cap1: 'Ươm mầm & Vận hành Chuỗi Nhà hàng Thương mại',
      p4_cap2: 'Bảo tồn Ẩm thực Nguyên bản & Chuẩn hóa Công thức Chế biến',
      p4_cap3: 'An toàn Vệ sinh Thực phẩm & Tuân thủ Tiêu chuẩn Pháp lý',
      p4_cap4: 'Trải nghiệm Ẩm thực & Quản trị Dự án Phong cách sống',

      portfolio_tagline: 'Thương hiệu & Dự án Thực tế',
      portfolio_title: 'Hệ sinh thái Thương hiệu',
      portfolio_desc: 'Các doanh nghiệp cụ thể và thương hiệu hoạt động trực thuộc hoặc được quản lý bởi hệ sinh thái VIETANA GROUP.',
      
      port1_status: 'Đang Hoạt động · 4 Chi nhánh',
      port1_name: 'Mì Quảng Cô Viên',
      port1_div: 'Khối Ẩm thực & Dịch vụ VIETANA',
      port1_desc: 'Thương hiệu di sản ẩm thực miền Trung phục vụ món mì Quảng chuẩn vị truyền thống từ rau sống đặc trưng, nguyên liệu tươi ngon với 4 chi nhánh đang hoạt động tại TP. Thủ Đức, TP. Hồ Chí Minh.',
      port1_ent_lbl: 'Pháp nhân Vận hành',
      port1_ent_val: 'CÔNG TY TNHH THƯƠNG MẠI THỰC PHẨM MÌ QUẢNG CÔ VIÊN',
      port1_mst_lbl: 'Mã số Thuế (MST)',
      port1_loc_lbl: 'Hệ thống Chi nhánh',
      port1_loc_val: '4 Chi nhánh tại TP. Thủ Đức, TP. Hồ Chí Minh',

      port2_status: 'Chuẩn bị Khai trương',
      port2_name: 'The Spicy Spoon',
      port2_div: 'Khối Ẩm thực & Dịch vụ VIETANA',
      port2_desc: 'Mô hình ẩm thực Ấn Độ đa vùng miền đương đại mang hương vị tiểu lục địa đích thực. Thiết kế trạm bếp chuyên biệt, đầu bếp quốc tế và không gian ẩm thực sang trọng tại TP. Hồ Chí Minh.',
      port2_ent_lbl: 'Công ty Chủ quản',
      port2_ent_val: 'CÔNG TY TNHH VIETANA GROUP',
      port2_tagline_lbl: 'Khẩu hiệu Thương hiệu',
      port2_tagline_val: 'Crafted with Indian Soul',
      port2_loc_lbl: 'Địa điểm Hoạt động',
      port2_loc_val: 'TP. Hồ Chí Minh, Việt Nam',

      port3_status: 'Hành lang Hoạt động',
      port3_name: 'VIETANA Global Advisory',
      port3_div: 'Khối Tư vấn Chiến lược VIETANA',
      port3_desc: 'Bộ phận tư vấn quốc tế chuyên trách xúc tiến thương mại, gia nhập thị trường, cấp phép lao động nước ngoài và mua sắm thương mại giữa Ấn Độ, Đông Nam Á và Việt Nam.',
      port3_ent_lbl: 'Khối Hoạt động',
      port3_ent_val: 'Tư vấn Doanh nghiệp & Mua sắm B2B',
      port3_focus_lbl: 'Hành lang Trọng tâm',
      port3_focus_val: 'Tuyến Thương mại Ấn Độ ⇄ Việt Nam',
      port3_scope_lbl: 'Quy mô Hoạt động',
      port3_scope_val: 'TP.HCM, Đà Nẵng, Hà Nội, Hạ Long',

      port4_status: 'Nền tảng Công nghệ',
      port4_name: 'VIETANA Tech Labs',
      port4_div: 'Khối Công nghệ VIETANA',
      port4_desc: 'Đội ngũ kỹ thuật phần mềm phát triển động cơ quyết định AI chuyên dụng, hệ thống giao thức MCP (Model Context Protocol), tự động hóa doanh nghiệp và nền tảng số hiện đại.',
      port4_ent_lbl: 'Khối Kỹ thuật',
      port4_ent_val: 'Hệ thống Doanh nghiệp & Ứng dụng AI',
      port4_standards_lbl: 'Kiến trúc Tiêu chuẩn',
      port4_standards_val: 'Chuẩn MCP Mở · Điện toán Đám mây',
      port4_app_lbl: 'Ứng dụng Thực tế',
      port4_app_val: 'Quy trình Tự động & API Doanh nghiệp',

      framework_tagline: 'Nền tảng Chiến lược',
      framework_title: 'Thế mạnh VIETANA',
      framework_desc: 'Phương pháp tiếp cận kỷ luật kết hợp sự am hiểu sâu sắc thị trường Việt Nam với các chuẩn mực doanh nghiệp quốc tế.',
      f1_title: 'Thấu hiểu Bản địa, Chuẩn mực Quốc tế',
      f1_desc: 'Sự thông thạo môi trường kinh doanh tại Việt Nam, mạng lưới vận hành sâu rộng cùng năng lực bàn giao chuyên nghiệp.',
      f2_title: 'Cộng hưởng Liên ngành',
      f2_desc: 'Mỗi khối bổ trợ lẫn nhau — công nghệ tối ưu vận hành, tiếp thị mở rộng quy mô và tư vấn định hướng chiến lược.',
      f3_title: 'Tạo lập Giá trị Bền vững',
      f3_desc: 'Tập trung vào nền tảng kinh doanh cốt lõi, đạo đức doanh nghiệp và giá trị lâu dài qua mọi chu kỳ kinh tế.',

      gov_tagline: 'Minh bạch Doanh nghiệp',
      gov_title: 'Quản trị Doanh nghiệp & Thông tin Pháp lý',
      gov_desc: 'CÔNG TY TNHH VIETANA GROUP hoạt động tuân thủ đầy đủ Luật Doanh nghiệp Việt Nam và các tiêu chuẩn quản trị kinh doanh quốc tế.',
      gov_lbl_legal: 'Tên Doanh nghiệp Đăng ký',
      gov_val_legal: 'CÔNG TY TNHH VIETANA GROUP (VIETANA GROUP COMPANY LIMITED)',
      gov_lbl_mst: 'Mã số Doanh nghiệp / Mã số Thuế (MST)',
      gov_val_mst: '0319680543',
      gov_lbl_address: 'Địa chỉ Trụ sở chính',
      gov_val_address: '45 Nguyễn Quý Đức, Phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam',
      gov_lbl_founder: 'Sáng lập & Phát triển Kinh doanh',
      gov_val_founder: 'Chayan Soni',
      gov_lbl_sector: 'Ngành nghề Kinh doanh Trọng tâm',
      gov_val_sector: 'Tư vấn Quản lý, Công nghệ, Tiếp thị & Dịch vụ Ẩm thực (F&B)',
      gov_lbl_jurisdiction: 'Cơ quan Cấp phép',
      gov_val_jurisdiction: 'Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh',

      statement_tag: 'Triết lý Doanh nghiệp',
      statement_headline: 'Đa dạng ngành nghề.<br>Chung một tầm nhìn.',
      statement_subtext: 'VIETANA GROUP hội tụ các năng lực chuyên sâu dưới một bản sắc thống nhất — kiến tạo doanh nghiệp, giải pháp công nghệ và giá trị bền vững tại Việt Nam.',

      contact_tagline: 'Hợp tác & Kết nối',
      contact_title: 'Liên hệ Doanh nghiệp',
      contact_desc: 'Kết nối trực tiếp với ban lãnh đạo của chúng tôi tại TP. Hồ Chí Minh để thảo luận về hợp tác chiến lược, dịch vụ tư vấn và giải pháp công nghệ.',
      
      hq_label: 'Trụ sở Doanh nghiệp',
      hq_val: '45 Nguyễn Quý Đức, Phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam',
      phone_label: 'Đường dây nóng / Văn phòng Điều hành',
      email_label: 'Email Doanh nghiệp',
      web_label: 'Website Chính thức',

      form_title: 'Gửi Yêu cầu Hợp tác',
      form_desc: 'Vui lòng chọn lĩnh vực bạn quan tâm và ban lãnh đạo sẽ phản hồi sớm nhất.',
      form_name_lbl: 'Họ và Tên',
      form_name_ph: 'Họ và tên của bạn',
      form_org_lbl: 'Tổ chức / Doanh nghiệp',
      form_org_ph: 'Tên công ty hoặc tổ chức',
      form_type_lbl: 'Lĩnh vực Hợp tác',
      form_type_opt1: 'Tư vấn Chiến lược & Hành lang Xuyên biên giới',
      form_type_opt2: 'Giải pháp Công nghệ & Ứng dụng AI Doanh nghiệp',
      form_type_opt3: 'Chiến lược Tiếp thị & Thương hiệu',
      form_type_opt4: 'Hợp tác Dự án Ẩm thực (F&B)',
      form_type_opt5: 'Hợp tác Doanh nghiệp & Đầu tư Chung',
      form_msg_lbl: 'Nội dung trao đổi',
      form_msg_ph: 'Mô tả ngắn gọn về nhu cầu hoặc kế hoạch hợp tác...',
      form_submit_email: 'Gửi qua Email',
      form_submit_wa: 'Nhắn tin qua WhatsApp',

      footer_tagline: 'Tư vấn · Công nghệ · Tiếp thị · Khách sạn & Ẩm thực',
      footer_desc: 'Tập đoàn kinh tế đa ngành tại Việt Nam kiến tạo doanh nghiệp, phát triển giải pháp và lan tỏa giá trị bền vững.',
      footer_nav_title: 'Điều hướng',
      footer_areas_title: 'Khối Hoạt động',
      footer_rights: '© 2026 VIETANA GROUP. Bảo lưu mọi quyền.',
      footer_legal: 'CÔNG TY TNHH VIETANA GROUP (MST: 0319680543)'
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
      if (i18n[lang] && i18n[lang][key]) {
        el.innerHTML = i18n[lang][key];
      }
    });

    // Update placeholders for inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key]) {
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
      const category = document.getElementById('inquiryType')?.value || 'General Corporate Partnership';
      const message = document.getElementById('inquiryMessage')?.value.trim() || 'I would like to explore collaboration with VIETANA GROUP.';
      return { name, org, category, message };
    };

    if (emailBtn) {
      emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = getFormData();
        const subject = encodeURIComponent(`[Executive Inquiry] ${data.category} — ${data.name} (${data.org})`);
        const body = encodeURIComponent(
          `To: VIETANA GROUP Executive Leadership\n` +
          `Company: CÔNG TY TNHH VIETANA GROUP\n\n` +
          `Sender: ${data.name}\n` +
          `Organization: ${data.org}\n` +
          `Inquiry Category: ${data.category}\n\n` +
          `Message Details:\n${data.message}\n\n` +
          `Submitted via official corporate portal: https://vietanagroup.com`
        );
        window.location.href = `mailto:vietanagroup@gmail.com?subject=${subject}&body=${body}`;
        window.showToast('Opening corporate email client...');
      });
    }

    if (waBtn) {
      waBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = getFormData();
        const text = encodeURIComponent(
          `*VIETANA GROUP — Executive Corporate Inquiry*\n` +
          `From: ${data.name} (${data.org})\n` +
          `Focus: *${data.category}*\n\n` +
          `Message:\n${data.message}`
        );
        window.open(`https://wa.me/84902434006?text=${text}`, '_blank', 'noopener,noreferrer');
        window.showToast('Connecting with VIETANA Executive Desk...');
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
