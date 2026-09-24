import type { Dictionary } from "./de";

export const en: Dictionary = {
  meta: {
    siteTitle: "Digital Vision | Websites that sell",
    siteDescription:
      "Visionary web design agency for modern websites, SEO and management systems.",
    keywords: [
      "Web design agency",
      "SEO agency",
      "Website development",
      "Management system",
      "Google ranking",
    ],
    tabAwayTitle: "Your vision is waiting...",
    ogImageAlt: "Digital Vision – Websites, SEO and management systems",
    ogImageTagline: "Websites · SEO · Management Systems",
  },

  common: {
    languageSwitchLabel: "Zur deutschen Version wechseln",
    languageSwitchName: "Deutsch",
    backToTop: "Back to top",
    backToTopAria: "Scroll to top",
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
    legalNavAria: "Legal information",
    info: "Info",
    startProject: "Start a project",
    freeRequest: "Free enquiry",
    requestProject: "Request a project",
    contactRequest: "Contact us",
    backToHome: "Back to the homepage",
    breadcrumbHome: "Home",
    logoTagline: "DIGITAL SOLUTIONS",
  },

  nav: {
    brandAria: "Digital Vision homepage",
    mainAria: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    links: [
      { href: "/#leistungen", label: "Services" },
      { href: "/#prozess", label: "Process" },
      { href: "/#preise", label: "Packages" },
      { href: "/#faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
      { href: "/#kontakt", label: "Contact" },
    ],
  },

  categories: {
    Webseiten: "Websites",
    SEO: "SEO",
    Verwaltungssysteme: "Management Systems",
  },

  notFound: {
    eyebrow: "404",
    title: "This page does not exist.",
    text: "The address is wrong or the page has been moved.",
  },

  home: {
    hero: {
      eyebrow: ["Web Design", "SEO", "Systems"],
      titleLine1: "Present yourself clearly",
      titleLine2: "Get found more easily",
      textLine1: "Websites with structure",
      textLine2: "Visible and easy to manage",
      primaryCta: "Free enquiry",
      secondaryCta: "See how it works",
      note: "Free initial assessment. Clear roadmap.",
      noteBreak: "No obligation.",
      scrollAria: "Scroll down",
      scroll: "Scroll",
    },
    problems: {
      eyebrow: "The challenge",
      title: "Online, the first impression is decided in seconds.",
      items: [
        {
          stat: "50 ms",
          title: "First impression",
          text: "That is how quickly visitors subconsciously decide whether a website looks trustworthy or not.",
        },
        {
          stat: "3 sec.",
          title: "Loading time",
          text: "Hardly anyone waits longer. After that, many visitors have already left the page.",
        },
        {
          stat: "60%+",
          title: "Mobile visits",
          text: "Most traffic comes from smartphones. Without optimisation, enquiries are simply lost.",
        },
        {
          stat: "Unclear",
          title: "Structure & paths",
          text: "If visitors do not see the next step right away, they leave instead of getting in touch.",
        },
      ],
    },
    showcase: {
      sectionAria: "Examples of digital products",
      label: "Examples",
      title: "Websites in the right look.",
      controlsAria: "Scroll products",
      left: "Scroll left",
      right: "Scroll right",
      request: "Free enquiry",
    },
    services: {
      eyebrow: "What you get",
      title: "Everything your digital presence really needs.",
      items: [
        {
          title: "SEO & Google ranking",
          text: "Technical SEO, fast loading times, a clear page structure and content that gets found more easily on Google.",
          infoHref: "/seo-info",
        },
        {
          title: "Website development",
          text: "Modern websites, landing pages and company sites with strong design, clear structure and professional execution.",
          infoHref: "/webseite-info",
        },
        {
          title: "Management systems",
          text: "Custom admin areas, dashboards and systems that let you manage content, enquiries and processes.",
          infoHref: "/verwaltungssystem-info",
        },
      ],
    },
    vision: {
      eyebrow: "Why Digital Vision",
      titleLine1: "We build digital systems that combine technology,",
      titleLine2: "impact and clarity.",
      points: [
        "Clear structure instead of digital chaos",
        "Technology that looks elegant and works cleanly",
        "Visibility, trust and structure from one system",
      ],
    },
    split: {
      eyebrow: "From idea to launch",
      titleLines: ["Visible on Google.", "Strong in design.", "Easy to manage."],
      text: "We combine SEO, web design and digital management into a presence that looks professional, gets found and works in everyday practice.",
      features: [
        "SEO structure for Google rankings and local visibility",
        "Websites with responsive design for every device",
        "Management systems for content, customer enquiries and workflows",
        "Performance, security and launch support included",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Four steps to your digital system.",
      steps: [
        {
          title: "Define goals",
          text: "We clarify your offer, your target audience and what the website needs to achieve.",
        },
        {
          title: "Plan the structure",
          text: "Page structure, SEO foundation and system logic are planned cleanly.",
        },
        {
          title: "Build website & system",
          text: "Website, management system and features are developed responsively.",
        },
        {
          title: "Optimise the Google launch",
          text: "Performance, Google fundamentals and handover get everything ready to go.",
        },
      ],
    },
    comparison: {
      eyebrow: "The difference",
      title: "Two paths. One clear roadmap.",
      tableAria: "Comparison of typical providers with Digital Vision",
      otherHeader: "Typical provider",
      usHeader: "Digital Vision",
      rows: [
        {
          label: "Point of contact",
          other: "Changing contacts, long response times",
          us: "One dedicated contact for your project",
        },
        {
          label: "Costs",
          other: "Unclear quotes, hidden extra costs",
          us: "Transparent packages from the first conversation",
        },
        {
          label: "Services",
          other: "Only design or only SEO, thought of separately",
          us: "Design, SEO and management from a single source",
        },
        {
          label: "Getting started",
          other: "Non-binding quotes take time",
          us: "Free initial assessment with no obligation",
        },
        {
          label: "After launch",
          other: "The website is left to fend for itself",
          us: "Ongoing maintenance & support included",
        },
      ],
    },
    packages: {
      eyebrow: "Packages",
      title: "Choose the right starting point.",
      request: "Enquire",
      items: [
        {
          name: "Website",
          price: "from €300 per month",
          detailLines: [
            { text: "Website, hosting, maintenance & support included." },
            {
              text: "After full payment: ongoing support from €100/month.",
              emphasis: true,
            },
          ],
        },
        {
          name: "SEO Growth",
          price: "from €200 per month",
          detail:
            "For websites with a focus on Google rankings, SEO structure and conversion areas.",
        },
        {
          name: "Management System",
          price: "on request",
          detail: "For management systems, dashboards and custom digital processes.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions? Answers.",
      items: [
        {
          question: "How does working together look?",
          answer:
            "After the free initial assessment, we define goals and structure, plan the SEO foundation and system logic, develop the website and management system, and finally optimise the Google fundamentals. You get clear feedback at every step.",
        },
        {
          question: "How much does a website cost with you?",
          answer:
            "Our website packages start from €300 per month, SEO Growth from €200 per month. Management systems are custom and priced according to scope. You will find details in the package overview above.",
        },
        {
          question: "How long does a project take?",
          answer:
            "That depends on the scope – a simple website takes less time than a management system with many features. After the first conversation, you get a clear timeline for your project.",
        },
        {
          question: "Is the first conversation really free?",
          answer:
            "Yes. The initial assessment is free and non-binding. You get a clear roadmap without committing to anything.",
        },
        {
          question: "What do I need to provide myself?",
          answer:
            "Ideally texts, images and brand material, if available. If something is missing, we support you with structure and content so the project still moves forward quickly.",
        },
        {
          question: "Do I also get support after the launch?",
          answer:
            "Yes, ongoing maintenance and support are included in our website packages – your site stays technically up to date and secure.",
        },
      ],
    },
    contact: {
      eyebrow: "Request a project",
      title: "Ready for more visibility and better systems?",
      text: "Tell us briefly what you need. We will get back to you with a clear assessment and the next step.",
    },
    reactions: {
      eyebrow: "Client feedback",
      title: "Reactions, straight from the project.",
      stageAria: "Project reactions",
      items: [
        {
          label: "Website",
          text: "The new website finally looks professional. This is exactly how I imagined our presence.",
          meta: "after the launch",
        },
        {
          label: "SEO",
          text: "The structure has become much clearer. Visitors now find the right services faster.",
          meta: "after the optimisation",
        },
        {
          label: "System",
          text: "The dashboard really saves us time every day. We finally have enquiries and tasks in view.",
          meta: "after the handover",
        },
        {
          label: "Design",
          text: "Not only does it look good, it also works cleanly on the phone. That immediately makes a better impression.",
          meta: "mobile view",
        },
        {
          label: "Process",
          text: "Communication was clear and uncomplicated. Changes were implemented quickly.",
          meta: "project feedback",
        },
        {
          label: "Enquiries",
          text: "The form is easy to understand and guides you through exactly the right questions. That brings in better enquiries.",
          meta: "contact section",
        },
        {
          label: "Maintenance",
          text: "Being able to change content ourselves makes the website much easier to run day to day.",
          meta: "admin area",
        },
        {
          label: "Consulting",
          text: "After the very first conversation it was clear what makes sense and which step comes next.",
          meta: "project start",
        },
        {
          label: "Launch",
          text: "Everything was prepared cleanly: texts, technology, Google fundamentals and the handover.",
          meta: "project completion",
        },
      ],
    },
  },

  contactForm: {
    topics: [
      { key: "SEO", title: "SEO", text: "Better rankings & more traffic" },
      { key: "Webseite", title: "Website", text: "New site or relaunch" },
      { key: "Verwaltungssystem", title: "Management system", text: "Custom solution" },
    ],
    stepTwo: {
      SEO: {
        label: "Your main goals",
        helper: "(multiple selection possible)",
        options: [
          { key: "Mehr Traffic", title: "More traffic", text: "More qualified visitors via Google" },
          { key: "Bessere Rankings", title: "Better rankings", text: "Push important search terms further up" },
          { key: "Mehr Leads", title: "More leads", text: "Generate more enquiries and contact requests" },
          { key: "Lokale Sichtbarkeit", title: "Local visibility", text: "Get found more easily in your region" },
        ],
      },
      Webseite: {
        label: "I am interested in:",
        helper: "",
        options: [
          { key: "Neue Webseite", title: "New website", text: "A complete rebuild for your business" },
          { key: "Relaunch", title: "Relaunch", text: "Modernise your existing website" },
          { key: "Landingpage", title: "Landing page", text: "A focused page for campaigns and enquiries" },
          { key: "Unternehmenswebseite", title: "Company website", text: "Clear structure for services and trust" },
        ],
      },
      Verwaltungssystem: {
        label: "What kind of management system are you looking for?",
        helper: "(multiple selection possible, e.g. CRM, inventory management or project management)",
        options: [
          { key: "Kundenverwaltung / CRM", title: "Customer management / CRM", text: "Manage contacts, companies and cases centrally" },
          { key: "Mitarbeiterverwaltung", title: "Staff management", text: "Organise teams, roles and internal workflows" },
          { key: "Lagerverwaltung", title: "Inventory management", text: "Keep track of stock, deliveries and warehouse processes" },
          { key: "Terminverwaltung", title: "Appointment management", text: "Control bookings, availability and calendars centrally" },
          { key: "Projektmanagement", title: "Project management", text: "Bundle tasks, responsibilities and progress in one place" },
          { key: "Individuelle Softwarelösung", title: "Custom software solution", text: "A tailor-made solution for your specific workflow" },
        ],
      },
    },
    defaultServicesLabel: "I am interested in:",
    projectStatusLabels: [
      "I already have a website",
      "I am planning a relaunch",
      "I am starting from scratch",
      "I currently use a different system",
    ],
    satisfactionLabels: ["Not at all", "Rather unsatisfied", "Neutral", "Satisfied", "Very satisfied"],
    websiteScopeLabels: ["Small (1-4 pages)", "Medium (5-10 pages)", "Large (11+ pages)"],
    seoCompetitionLabels: ["Low", "Medium", "High"],
    startWindowLabels: ["Immediately", "In 1-3 months", "Flexible"],
    seoPeriodLabels: ["3 months", "6 months", "12 months"],
    websitePayoffLabels: ["12 months", "18 months", "24 months"],
    websiteContractLabels: ["24 months", "36 months", "48 months"],
    userCountLabels: ["1-5 users", "6-15 users", "16-50 users", "51-100 users", "100+ users"],
    mobileUsageLabels: ["Desktop only", "Responsive website", "Dedicated app for Android / iPhone"],
    weekdayLabels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    timeSuffix: "",
    steps: {
      topic: {
        title: "Hello! How can we help you?",
        text: "Choose the option that best matches your request.",
        next: "Next",
      },
      services: {
        title: "Tell us more about your project",
        text: "More details help us prepare a better offer for you.",
        projectName: "Project name",
        optional: "(optional)",
        projectNamePlaceholder: "My new project",
        currentStatus: "Current status",
        websiteLabel: "Website",
        systemLocationLabel: "Existing solution / link",
        websitePlaceholder: "https://your-website.com",
        systemPlaceholder: "https://your-software.com",
        ifAvailable: "(if available)",
        satisfactionQuestion: "Are you satisfied with your current solution?",
        satisfactionMin: "Not at all",
        satisfactionMax: "Very satisfied",
        systemDetailsTitle: "Additional details about the management system",
        systemDetailsText:
          "These details help us to better assess the scope, usage and technical direction.",
        userCountQuestion: "How many users will work with the system?",
        usageQuestion: "How should the system be used?",
        interfacesQuestion: "Which integrations are needed?",
        interfacesHint: "For example Google Calendar, Outlook, Lexoffice, DATEV or internal tools",
        interfacePlaceholder: "Integration",
        addInterface: "Add another integration",
        descriptionLabel: "Description: What should the system do?",
        descriptionPlaceholder:
          "For example: manage customers, coordinate appointments, store documents and send reminders automatically.",
        back: "Back",
        confirm: "Confirm selection",
      },
      calculator: {
        title: "Project calculator",
        text: "Get a rough estimate for your project",
        websiteScope: "Website scope",
        seoCompetition: "SEO competition",
        supportPeriod: "Support period",
        desiredStart: "Desired start",
        payoffPeriod: "Website payment period",
        contractTerm: "Contract term",
        monthlyEstimate: "Estimated monthly price range",
        monthlyRate: "Monthly website instalment",
        estimate: "Estimated price range",
        perMonth: "/ month",
        customByScope: "Custom, depending on scope",
        estimateNote: "Non-binding & individually adjustable",
        breakdownTotalPrice: "Total website price",
        breakdownSupportMonths: "Support months",
        monthsUnit: "months",
        breakdownSupportTotal: "Support total",
        breakdownTotalCost: "Total cost",
        paymentPlan: "Payment plan",
        paymentPlanWebsite: "Months 1-{end}: {rate} per month for the website.",
        paymentPlanSupport: "Months {start}-{end}: {rate} per month for support & maintenance.",
        paymentPlanNoSupport: "No additional support months after the final instalment.",
        paymentNote:
          "Hosting, maintenance and support are included while you pay off the website. Paid support only starts after full payment.",
        back: "Back",
        next: "Continue to appointment",
      },
      booking: {
        titleHighlight: "Free",
        title: "consultation",
        text: "Book a suitable appointment right away.",
        advisorAria: "Contact person",
        availableTimes: "Available times",
        bookedSuffix: "Fully booked",
        nameLabel: "Your name",
        namePlaceholder: "Jane Doe",
        emailLabel: "Your email",
        emailPlaceholder: "you@company.com",
        consentPrefix: "I accept the",
        consentLink: "privacy policy",
        back: "Back",
        submit: "Book appointment",
        submitting: "Booking appointment...",
      },
      confirmation: {
        title: "Thank you!",
        received: "We have received your enquiry.",
        text: "We have all the information and will get back to you within 24 hours.",
        nextTitle: "What happens next?",
        nextItems: [
          "We analyse your enquiry",
          "We create a custom concept",
          "You receive all the details by email",
        ],
        home: "Back to the homepage",
      },
    },
    errors: {
      slotTaken: "This time slot has just been taken. Please choose another one.",
      generic: "The enquiry could not be sent yet. Please try again later.",
    },
  },

  product: {
    homeAria: "Back to the matching website preview",
    websiteSuffix: "website",
    previewSuffix: "preview",
    requestProject: "Request a project",
    moreAbout: "More about",
    characterEyebrow: "Project character",
    highlights: "Highlights",
  },

  blog: {
    metaTitle: "Blog: Websites, Systems & Digital Presence",
    metaDescription:
      "The Digital Vision blog with practical articles on websites, online shops, industry websites, digital workflows and systems.",
    pageSuffix: "Page",
    listName: "Digital Vision Blog",
    backHome: "Back to Digital Vision",
    heroTitle: "Ideas for digital projects.",
    heroText: "Practical articles for clear websites and digital workflows.",
    freeRequest: "Free enquiry",
    viewServices: "View services",
    magazineTitle: "Digital Vision Magazine",
    magazineCards: [
      { tag: "01 Websites", title: "Clear structure before design", sub: "Planning, content, contact paths" },
      { tag: "02 Processes", title: "Organising enquiries cleanly", sub: "Forms, status, overview" },
      { tag: "03 Systems", title: "Making digital workflows visible", sub: "Dashboards, management, routine" },
    ],
    visualNoteTitle: "Focus",
    visualNoteText: "Idea / Structure / Result",
    listEyebrow: "All articles for a better digital presence.",
    author: "Digital Vision",
    readArticle: "Read article",
    paginationAria: "Blog pages",
    previous: "Previous",
    next: "Next",
    footerEyebrow: "Next step",
    footerTitle: "Want a clearer website?",
    footerText: "We define structure, content and features for your project.",
    footerCta: "Request a project",
    article: {
      backToBlog: "Back to the blog",
      topic: "Topic",
      sidebarAria: "Article overview",
      inThisArticle: "In this article",
      sidebarBrand: "Digital Vision",
      sidebarTitle: "Planning a website or system?",
      sidebarText: "We sort out structure, content and features before implementation.",
      sidebarCta: "Request a project",
      takeawaysAria: "Key points",
      takeawaysTitle: "The key points in brief",
      faqEyebrow: "FAQ",
      faqTitle: "Frequently asked questions",
      relatedEyebrow: "Read more",
      relatedTitle: "Related articles for your project.",
      readArticle: "Read article",
    },
  },

  infoShared: {
    backAria: "Back to Digital Vision",
    viewOffer: "View our offer",
    contactRequest: "Contact us",
    offerEyebrow: "Our offer",
    processEyebrow: "Process",
    faqEyebrow: "FAQ",
    contactEyebrow: "Request a project",
  },

  infoWeb: {
    metaTitle: "Website Development",
    metaDescription:
      "Information page on website development with concept, design, structure, launch and support.",
    heroTitle: "Understanding websites clearly.",
    heroTextLine1: "Your website shows who you are and what you offer.",
    heroTextLine2: "It shows why visitors should take the next step with you.",
    heroProofAria: "Website benefits",
    heroProofs: [
      { title: "Trust", text: "A credible first impression" },
      { title: "Mobile", text: "Clean on every device" },
      { title: "Enquiries", text: "Clear paths to contact" },
    ],
    heroNote: "Site map. Design system. Content. Launch check.",
    previewDomain: "atelier-website.com",
    previewLabel: "New website",
    previewTiles: ["Services", "References", "Content"],
    styleBoard: "Design system",
    launchTitle: "Ready to launch",
    launchText: "Design, content and technology aligned",
    contentMap: [
      ["Home", "Services"],
      ["References", "Contact"],
      ["Team", "FAQ"],
    ],
    metricsAria: "Website key figures",
    metrics: [
      ["Available 24/7", "A website answers important questions even outside opening hours"],
      ["Mobile first", "Visitors expect a clean experience on smartphone, tablet and desktop"],
      ["Central base", "All digital channels can point to one professional website"],
      ["Measurable enquiries", "Contact paths, clicks and content can be analysed and improved"],
    ],
    offerTitle: "Websites that inform clearly and make enquiries easy.",
    offerText: "We combine content, design and technology into a clear path to the enquiry.",
    offer: [
      {
        title: "Concept & consulting",
        text: "We clarify your target audience, offer, content and priorities. The result is not an arbitrary website, but a digital presence with a clear purpose.",
      },
      {
        title: "User guidance & layout",
        text: "We design page structure, visual flow and contact points so that visitors move forward without detours.",
      },
      {
        title: "Content & message",
        text: "We write texts, sections and calls to action so that your offer is explained clearly, professionally and with a focus on enquiries.",
      },
      {
        title: "Launch & maintenance plan",
        text: "We publish the website, check forms, performance and content, and plan sensible maintenance points.",
      },
    ],
    basicsEyebrow: "What makes a good website?",
    basicsTitle: "Your offer, explained clearly.",
    basicsText:
      "A good website answers the most important questions directly: What do you offer, who is it for and how do people get in touch?",
    basics: [
      { title: "Always available", text: "A website is your digital location and answers important questions around the clock." },
      { title: "Quick orientation", text: "Visitors recognise services, process and contact paths without a long search." },
      { title: "Clear actions", text: "Buttons, forms and contact points lead straight to the right enquiry." },
      { title: "Long-term value", text: "A good website can inform, sell and support other channels for years." },
    ],
    factorsEyebrow: "Key building blocks",
    factorsTitle: "The factors behind a strong web presence.",
    factorsText:
      "What matters is visual guidance, understandable content and a smooth path to the enquiry.",
    factors: [
      {
        title: "Clear design",
        text: "Good web design uses hierarchy, spacing, contrast and imagery so that visitors find their bearings immediately.",
      },
      {
        title: "Clean structure",
        text: "Navigation, sections and calls to action are built so that the next step stays visible at all times.",
      },
      {
        title: "Technical quality",
        text: "A responsive layout, optimised media, stable forms and clean components ensure reliable use.",
      },
    ],
    processTitle: "From site map to launch-ready website.",
    process: [
      { n: "01", title: "Collect content", text: "We clarify services, credentials, images, contact paths and everything visitors need to know." },
      { n: "02", title: "Site map", text: "We define which subpages, sections and actions the website needs." },
      { n: "03", title: "Interface build", text: "We build layouts, components and mobile views to match the brand." },
      { n: "04", title: "Publication", text: "We test the mobile view, forms, loading time and legally required pages before going live." },
    ],
    faqTitle: "Answers on scope, launch and website maintenance.",
    faq: [
      { q: "Why does a business need a professional website?", a: "Because many customers first check online whether a provider is credible, reachable and a good fit. A good website answers these questions before contact is made." },
      { q: "What is the difference between a homepage and a website?", a: "The homepage is usually the start page. The website is the entire web presence with all subpages, content, contact paths and features." },
      { q: "How long does a new website take?", a: "A small website can be built in a few weeks. Larger projects take longer because concept, copy, design, development, feedback and launch need to be coordinated properly." },
      { q: "How much does a website cost?", a: "The cost depends on scope, design ambitions, copywriting needs, features, CMS, multilingual content and support. What matters is the job the website needs to do." },
      { q: "Do I need a CMS?", a: "A CMS is worthwhile if content is updated regularly. If pages rarely change, a lean static build can be faster and require less maintenance." },
      { q: "Why is responsive design so important?", a: "Because visitors on smartphone, tablet and desktop need to find the same information and be able to get in touch. Mobile problems cost trust and enquiries." },
      { q: "What happens after the launch?", a: "After the launch, technology, content, contact paths and analytics should be checked regularly. That keeps the website up to date and lets it grow with the business." },
      { q: "Can a website be extended later?", a: "Yes. If structure and technology are planned cleanly, new services, landing pages, languages, forms or integrations can be added later in a targeted way." },
    ],
    contactTitle: "Ready for a website that explains your offer clearly?",
    contactText:
      "If your website should come across more clearly, we start with the site map, content structure, design direction and contact paths.",
    contactChoices: ["Website concept", "Web design", "Launch & support"],
  },

  infoSeo: {
    metaTitle: "SEO & Google Ranking",
    metaDescription: "A short information page on SEO, ranking factors, process and visibility.",
    heroTitle: "Understanding SEO clearly.",
    focusAria: "SEO focus",
    focusTitle: "SEO guide",
    focusSubtitle: "Keywords · Indexing · Reporting",
    focusRows: [
      { step: "01", title: "Keyword check", text: "Rank search terms by priority" },
      { step: "02", title: "Indexing", text: "Make technical hurdles visible" },
      { step: "03", title: "Reporting", text: "Analyse visibility and clicks" },
    ],
    heroNote: "Keyword clusters. Indexing. Landing pages. Reporting.",
    consoleTitle: "SEO roadmap",
    searchQuery: "better google rankings local",
    scoreLabel: "SEO score",
    serpRows: [
      { title: "Understand the user's question", text: "Align content with the search" },
      { title: "Improve page structure", text: "Connect important content sensibly" },
      { title: "Make the website faster", text: "Mobile, stable and technically clean" },
    ],
    growthLabel: "Visibility",
    kpiKeywords: "Keywords",
    kpiRequests: "Enquiries",
    metricsAria: "SEO key figures",
    metrics: [
      ["Over 5 billion", "Google searches are made every day"],
      ["First page", "The best positions get the most important clicks"],
      ["Organic visibility", "SEO works long term without ongoing click costs"],
      ["Local search", "Regional rankings make enquiries measurable"],
    ],
    offerTitle: "We make search queries, rankings and the next SEO steps visible.",
    offerText:
      "We check search terms, indexing, content and rankings, and first implement the measures that measurably improve how easily you are found.",
    offer: [
      {
        title: "SEO audit",
        text: "We review technology, content, competition and existing rankings. The result is a clear list of priorities instead of a jumble of individual measures.",
      },
      {
        title: "Information architecture",
        text: "We organise topics, internal links and landing pages so that Google recognises clear relationships.",
      },
      {
        title: "Content optimisation",
        text: "We develop content, metadata and landing pages so that they combine search intent, trust and a focus on enquiries.",
      },
      {
        title: "Ranking reporting",
        text: "We measure clicks, impressions, positions and technical signals so that the next steps are based on data.",
      },
    ],
    basicsEyebrow: "What is SEO?",
    basicsTitle: "Become visible organically, without paying for every click.",
    basicsText:
      "SEO makes your pages findable for specific search queries. What matters is which topics are searched for and which page gives the best answer.",
    basics: [
      { title: "Sustainable traffic", text: "Visibility grows over the long term without every click having to be paid for." },
      { title: "Match search intent", text: "Good SEO answers exactly the question users start with on Google." },
      { title: "Strengthen authority", text: "Expertise, local signals and clean sourcing make rankings more resilient." },
      { title: "Better ROI", text: "Organic traffic can work economically for months and years." },
    ],
    factorsEyebrow: "Ranking signals",
    factorsTitle: "The factors behind good Google positions.",
    factorsText:
      "Search intent, indexability, topical depth and external signals all matter. Together they create a clear SEO priority.",
    factors: [
      {
        title: "Backlinks",
        text: "Backlinks work like recommendations from outside. What counts is relevance, quality and a natural link profile rather than as many weak references as possible.",
      },
      {
        title: "Content quality",
        text: "Good content matches search intent, uses clear terms and answers the questions that really matter before an enquiry.",
      },
      {
        title: "Technical foundation",
        text: "Indexing, crawling, Core Web Vitals, redirects and structured data ensure that search engines capture your pages cleanly.",
      },
    ],
    processTitle: "From search term to optimised landing page.",
    process: [
      { n: "01", title: "Keyword clusters", text: "We group search terms by intent, region and commercial relevance." },
      { n: "02", title: "Indexing", text: "We check whether important pages are reachable, fast and technically clean to deliver." },
      { n: "03", title: "Landing pages", text: "We sharpen content, metadata and internal links for specific search queries." },
      { n: "04", title: "Evaluation", text: "We compare visibility, clicks and enquiries and derive new priorities from them." },
    ],
    faqTitle: "Answers on rankings, visibility and SEO effort.",
    faq: [
      { q: "How long does it take for SEO to work?", a: "First signals are often visible after 3 to 6 months. Noticeable improvements depend on competition, technology, content and domain strength." },
      { q: "What is the difference between SEO and SEA?", a: "SEO builds organic visibility. SEA means paid ads that can be visible immediately but consume budget per click." },
      { q: "Which areas belong to SEO?", a: "SEO mainly consists of technology, content and authority. Add to that local signals, user experience, internal linking, reporting and, today, discoverability in AI search." },
      { q: "Are backlinks really important?", a: "For competitive terms, yes. But quality is decisive: topically relevant recommendations are worth more than many weak or artificial links." },
      { q: "How often should content be updated?", a: "Important pages should be reviewed regularly, especially when offers, competition or search intent change. Freshness helps keep content relevant." },
      { q: "How important is AI search for SEO?", a: "AI search relies on clear, well-structured and trustworthy content. If you explain topics understandably, consider sourcing logic and reduce technical hurdles, you improve your chances there too." },
      { q: "How much does SEO cost?", a: "The cost depends on competition, website size, technical condition, content needs and goals. Small projects need less effort, highly competitive markets usually require ongoing optimisation." },
      { q: "What matters more: technology, content or links?", a: "The order is pragmatic: first the technical foundation and crawlability, then helpful content, then authority through links, mentions, reviews and trust." },
    ],
    contactTitle: "Ready for more visibility and clear SEO priorities?",
    contactText:
      "If you want to know which search terms are realistic, we start with keyword clusters, a technical check and a list of priorities.",
    contactChoices: ["SEO audit", "Content structure", "Local visibility"],
  },

  infoSystem: {
    metaTitle: "Management Systems",
    metaDescription:
      "Information page on management systems with process analysis, system structure, modules, implementation and support.",
    heroTitle: "Understanding management systems clearly.",
    panelAria: "Management system benefits",
    panelTitle: "System hub",
    panelText: "Data, roles and cases in one place",
    panelTiles: [
      ["8", "modules connected"],
      ["1", "data base"],
      ["0", "scattered lists"],
    ],
    heroNote: "Data model. Status logic. Roles. Pilot version.",
    hubTitle: "System hub",
    hubText: "Every case flows through a clear structure.",
    modules: [
      { title: "Customers", detail: "Contacts & history" },
      { title: "Documents", detail: "Storage & versions" },
      { title: "Deadlines", detail: "Dates & reminders" },
      { title: "Approvals", detail: "Status & permissions" },
      { title: "Reporting", detail: "Figures & bottlenecks" },
    ],
    stackLabel: "Today",
    stackValue: "12 cases",
    permissionsTitle: "Roles & permissions",
    permissionsText: "cleanly separated",
    ribbon: ["Request", "Review", "Approval", "Completion"],
    metricsAria: "Management system key figures",
    metrics: [
      ["One data base", "Contacts, documents and tasks come together centrally"],
      ["Clear states", "Every case has a status, an owner and a next step"],
      ["Less manual work", "Routine tasks are standardised or automated"],
      ["Measurable workflows", "Bottlenecks and progress become visible through key figures"],
    ],
    offerTitle: "We turn workflows into clear\ndata models and usable workflows.",
    offerText:
      "We translate recurring work into data models, views and workflows that your team can actually use.",
    offer: [
      {
        title: "Process analysis",
        text: "We capture real work steps, media breaks and recurring decisions directly from everyday practice.",
      },
      {
        title: "System structure",
        text: "We plan records, status values, views and relationships to match your cases.",
      },
      {
        title: "Implementation",
        text: "We develop the most important screens, workflows and reports first as a usable core.",
      },
      {
        title: "Rollout & evaluation",
        text: "We accompany the launch, review usage patterns and refine roles, fields and workflows in a targeted way.",
      },
    ],
    basicsEyebrow: "What is a management system?",
    basicsTitle: "One central place for data, tasks and decisions.",
    basicsText:
      "A management system shows which case has which status, who is responsible and which information is still missing.",
    basics: [
      { title: "Central overview", text: "Important cases are no longer scattered across spreadsheets, emails and individual tools." },
      { title: "Less manual work", text: "Routine tasks, reminders and status changes can be standardised or automated." },
      { title: "Clear responsibility", text: "Every case has a status, a responsible person and a next step." },
      { title: "Scalable workflows", text: "When more customers, documents or enquiries come in, management stays under control." },
    ],
    factorsEyebrow: "System factors",
    factorsTitle: "What makes a good management system.",
    factorsText:
      "What matters is a stable data model, unambiguous status logic and permissions that protect sensitive information.",
    factors: [
      {
        title: "Clean data base",
        text: "A good management system bundles customer data, documents, tasks and status values in a structured way. That means fewer duplicates, less searching and more reliable decisions.",
      },
      {
        title: "Clear process logic",
        text: "Recurring workflows are not improvised anew every time. States, responsibilities, approvals and next steps are transparent for everyone involved.",
      },
      {
        title: "Roles & security",
        text: "Not everyone needs access to everything. Permissions, sensitive data, change histories and secure storage are therefore part of the system structure from the start.",
      },
    ],
    processTitle: "From workflow to tested pilot version.",
    process: [
      { n: "01", title: "Capture workflows", text: "We document which cases, roles and data are actually used today." },
      { n: "02", title: "Data model", text: "We define fields, relationships, status values and permissions for the system core." },
      { n: "03", title: "Pilot version", text: "We build a first usable workflow and test it with real cases." },
      { n: "04", title: "Rollout", text: "We train users, collect feedback and only add features with a clear benefit." },
    ],
    faqTitle: "Answers on data, roles and getting started.",
    faq: [
      { q: "What is a management system?", a: "A management system is a digital working environment in which data, tasks, documents, appointments and processes are organised centrally." },
      { q: "Why do we offer management systems?", a: "Because many teams grow with spreadsheets, emails and individual tools until overview and accountability get lost. A suitable system brings these workflows back together." },
      { q: "Why is that good for businesses?", a: "It saves time, reduces errors, makes responsibilities visible and creates a foundation on which processes remain stable even with more customers, tasks or documents." },
      { q: "Does every business need its own system?", a: "Not always. If standard tools fit well, they should be used. A custom system is worthwhile when workflows are more specific or several tools need to be permanently connected." },
      { q: "Does a management system replace all existing tools?", a: "Not necessarily. It often connects existing tools or only replaces the areas that slow down the workflow." },
      { q: "How does a project start?", a: "It starts with a process analysis. Then the most important modules are prioritised so that the area with the biggest everyday impact is implemented first." },
      { q: "How important is data protection?", a: "Very important. Roles, permissions, logs, secure storage and the handling of sensitive data belong in the planning from the start." },
      { q: "Can the system be extended later?", a: "Yes. A sensibly built management system starts focused and can then be extended with further modules, automations or integrations." },
    ],
    contactTitle: "Ready for management that works clearly and scales?",
    contactText:
      "When lists, emails and individual tools become too confusing, we start with a data model, role logic and a pilot process.",
    contactChoices: ["Process analysis", "System structure", "Modules & support"],
  },

  legal: {
    eyebrow: "Legal",
    backToHome: "Back to the homepage",
    translationNote:
      "This English version is provided for convenience. The German version is legally binding.",
    impressum: {
      metaTitle: "Legal Notice | Digital Vision – Parmis Paschaei",
      metaDescription: "Legal notice and provider identification of Digital Vision.",
      title: "Legal Notice",
      providerTitle: "Information pursuant to Section 5 DDG",
      providerLines: [
        "Ms Parmis Paschaei",
        "Owner of Digital Vision",
        "Erfurter Straße 16",
        "41069 Mönchengladbach",
        "Germany",
      ],
      contactTitle: "Contact",
      contactLines: ["Phone: +49 178 8324883", "Email: info@digitalvision.site"],
      vatTitle: "VAT",
      vatText:
        "In accordance with Section 19 of the German VAT Act (UStG), no VAT is charged (small business regulation).",
      responsibleTitle: "Responsible for content pursuant to Section 18 (2) MStV",
      responsibleLines: ["Ms Parmis Paschaei", "Erfurter Straße 16", "41069 Mönchengladbach"],
      disputeTitle: "EU dispute resolution",
      disputeBefore:
        "The European Commission provides a platform for online dispute resolution (ODR): ",
      disputeAfter:
        ". We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
    },
    datenschutz: {
      metaTitle: "Privacy Policy",
      metaDescription: "Privacy policy of Digital Vision.",
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Controller",
          blocks: [
            {
              lines: [
                "Ms Parmis Paschaei",
                "Erfurter Straße 16",
                "41069 Mönchengladbach",
                "Phone: +49 178 8324883",
                "Email: info@digitalvision.site",
              ],
            },
          ],
        },
        {
          title: "2. Overview of processing",
          blocks: [
            {
              text: "Below we give you an overview of which data is processed when you visit this website and use the contact or booking form, for what purpose this happens and how long the data is stored. This website is aimed at prospective customers in Germany and is operated as a small business within the meaning of Section 19 UStG.",
            },
          ],
        },
        {
          title: "3. Hosting",
          blocks: [
            {
              text: "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When the website is accessed, Vercel automatically processes technical data (so-called server log files) transmitted by your browser, including IP address, date and time of the request, page accessed, browser type, operating system and the previously visited page (referrer). This data is technically necessary to deliver the website and to ensure its stability and security; it is not merged with other data sources and is not evaluated for analytics or marketing purposes. The legal basis is our legitimate interest in the secure and trouble-free operation of the website (Art. 6 (1) (f) GDPR). The server log files are deleted automatically after a short time, at the latest after 30 days.",
            },
            {
              text: "As Vercel Inc. is a company based in the USA, data may be transferred to a third country (USA). Vercel refers to appropriate safeguards under Art. 46 GDPR, in particular the standard contractual clauses (SCC) adopted by the EU Commission. A data processing agreement pursuant to Art. 28 GDPR is in place with Vercel.",
            },
          ],
        },
        {
          title: "4. SSL/TLS encryption",
          blocks: [
            {
              text: "For security reasons and to protect the transmission of confidential content, this website uses SSL/TLS encryption. You can recognise an encrypted connection by the fact that the address bar of your browser changes from “http://” to “https://” and by the padlock symbol in the browser bar.",
            },
          ],
        },
        {
          title: "5. Contact form and appointment booking",
          blocks: [
            {
              text: "Via the form on this website you can submit a project enquiry and book a non-binding consultation directly. The following data is processed:",
            },
            {
              strong: "Information you enter directly:",
              text: "name, email address, your chosen topic (SEO, website or management system), the services you selected and – depending on the topic – optional additional details such as project name, existing website or software, current status, satisfaction with an existing solution, desired number of users, planned usage (desktop, responsive, app), required integrations and a free-text description of your project.",
            },
            {
              strong: "Information from the calculator and appointment selection:",
              text: "the values you set for scope, competitive situation and desired start date or support period, the price range calculated from them, and the date, time and contact person you chose for the consultation.",
            },
            {
              strong: "Forwarding by email:",
              text: "All of the above information is transmitted to our mailbox via the email service Resend (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA) so that we can process your enquiry or appointment booking. A data processing agreement pursuant to Art. 28 GDPR is in place with Resend; as Resend Inc. is based in the USA, data may also be transferred to a third country here, for which Resend provides appropriate safeguards under Art. 46 GDPR (including standard contractual clauses).",
            },
            {
              strong: "Storage in our database:",
              text: "To avoid double bookings and to coordinate appointments, when you book an appointment we additionally store the following in a database: the booked date, the time, the contact person, your email address, the chosen topic, the selected services, the scope, the competitive situation, the desired start or support period and the calculated price range. Your name and any additional details (e.g. free-text description, existing website/software, number of users, integrations) are transmitted by email only and are not stored in the database. This database is operated by Neon, Inc. (USA), a provider of managed PostgreSQL databases. A data processing agreement pursuant to Art. 28 GDPR is in place with Neon; as Neon, Inc. is based in the USA, data may also be transferred to a third country here, for which Neon provides appropriate safeguards under Art. 46 GDPR (including standard contractual clauses).",
            },
            {
              strong: "Legal basis",
              text: "for the above processing is Art. 6 (1) (b) GDPR, as the processing serves to handle your enquiry or to initiate a consulting or contractual relationship. The checkbox confirming the privacy policy in the booking form ensures that you have taken note of this privacy policy before submitting; it does not constitute separate consent under Art. 6 (1) (a) GDPR for any further processing.",
            },
            {
              strong: "Storage period:",
              text: "The data transmitted by email remains in our mailbox until your enquiry has been fully processed or a resulting contractual relationship has been completed and invoiced; after that it is deleted unless statutory retention obligations under commercial or tax law (generally 6 or 10 years under Sections 147 AO and 257 HGB for documents relevant to invoicing) prevent this. The appointment data stored in the database is deleted as soon as the appointment has taken place or the appointment coordination has been completed and the data is no longer needed.",
            },
          ],
        },
        {
          title: "6. Cookies and local storage",
          blocks: [
            {
              text: "This website does not use cookies for analytics, marketing or tracking purposes and does not embed third-party services (e.g. web analytics or social media services) that would set cookies. No usage profiles are created and there is no tracking across multiple websites.",
            },
          ],
        },
        {
          title: "7. No automated decision-making",
          blocks: [
            {
              text: "The calculator available on this website serves solely as a non-binding, rough estimate of a possible price range and does not constitute automated decision-making or profiling within the meaning of Art. 22 GDPR. No decisions are made that produce legal effects concerning you or similarly significantly affect you.",
            },
          ],
        },
        {
          title: "8. Recipients and processors",
          blocks: [
            {
              text: "As part of the processing described above, the following recipients have access to personal data, in each case within the scope of data processing pursuant to Art. 28 GDPR or on the basis of appropriate safeguards for third-country transfers:",
            },
            {
              text: "Vercel Inc. (hosting of the website and processing of server log files), Resend Inc. (sending of form and booking data by email) and Neon, Inc. (database for storing appointment data). Your data is not passed on to any other third parties, sold or used by us for advertising purposes.",
            },
          ],
        },
        {
          title: "9. Your rights as a data subject",
          blocks: [
            {
              text: "Under the GDPR you have the following rights vis-à-vis us as the controller:",
            },
            {
              strong: "Right of access (Art. 15 GDPR):",
              text: "You can request information about whether and which personal data we process about you.",
            },
            {
              strong: "Right to rectification (Art. 16 GDPR):",
              text: "You can request the correction of inaccurate data or the completion of incomplete data concerning you.",
            },
            {
              strong: "Right to erasure (Art. 17 GDPR):",
              text: "You can request the deletion of your data stored by us, provided that no statutory retention obligations or other grounds for exception prevent this.",
            },
            {
              strong: "Right to restriction of processing (Art. 18 GDPR):",
              text: "Under certain conditions you can request the restriction of the processing of your data, for example while the accuracy of disputed data is being verified.",
            },
            {
              strong: "Right to data portability (Art. 20 GDPR):",
              text: "You can request that we hand over the data you have provided to us in a structured, commonly used and machine-readable format or – where technically feasible – transmit it to another controller.",
            },
            {
              strong: "Right to object (Art. 21 GDPR):",
              text: "Where we process data on the basis of a legitimate interest (Art. 6 (1) (f) GDPR), you can object to this processing at any time on grounds relating to your particular situation.",
            },
            {
              strong: "Withdrawal of consent (Art. 7 (3) GDPR):",
              text: "If you have given us consent, you can withdraw it at any time with effect for the future, without affecting the lawfulness of the processing carried out on the basis of the consent until its withdrawal.",
            },
            {
              text: "To exercise these rights, you can contact us informally at any time using the contact details given in Section 1.",
            },
          ],
        },
        {
          title: "10. Right to lodge a complaint with a supervisory authority",
          blocks: [
            {
              text: "Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a data protection supervisory authority about our processing of your personal data (Art. 77 GDPR). The supervisory authority responsible for us is:",
            },
            {
              lines: [
                "State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia (LDI NRW)",
                "Kavalleriestraße 2–4",
                "40213 Düsseldorf",
              ],
            },
          ],
        },
        {
          title: "11. Data security",
          blocks: [
            {
              text: "We take appropriate technical and organisational measures to protect your data against accidental or intentional manipulation, loss, destruction or unauthorised access. These include in particular the encryption of transmission using SSL/TLS, the use of processors with contractually guaranteed security measures and the restriction of data access to what is necessary for processing. Our security measures are continuously improved in line with technological developments.",
            },
          ],
        },
        {
          title: "12. Validity and changes to this privacy policy",
          blocks: [
            {
              text: "This privacy policy is currently valid. Due to the further development of our website and offers or due to changed legal or regulatory requirements, it may become necessary to change this privacy policy. You can find the current privacy policy on this page at any time.",
            },
          ],
        },
      ],
    },
  },
};
