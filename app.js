/**
 * EcoTrack • E-Waste Academic Portfolio Application Logic
 * Student: Samruddhi Naresh Sakharkar (Roll: 24102A0074) | Division: CMPN A
 * Faculty Evaluator: Prof. Aniket Kundu
 */

const ACTIVITIES = [
  // --- ISA ACTIVITIES ---
  {
    id: "isa-0",
    index: "ISA • Activity 01",
    category: "isa",
    title: "Assignment Zero – Check AAP",
    description: "Baseline self-assessment & initial appraisal verification (AAP) document submitted for academic enrollment and coursework benchmarking.",
    tags: ["Initial Appraisal", "Course Baseline", "Verification"],
    liveUrl: null,
    files: [
      {
        name: "A-0_Samruddhi.S(24102A0074) (1).pdf",
        path: "ISA/Assignment-0/A-0_Samruddhi.S(24102A0074) (1).pdf",
        type: "pdf"
      }
    ]
  },
  {
    id: "isa-1",
    index: "ISA • Activity 02",
    category: "isa",
    title: "Assignment 1 – State E-Waste Tracker",
    description: "Geospatial data collection, state-level analysis, and district-wise monitoring of electronic waste generation and authorized disposal across Uttarakhand.",
    tags: ["State Analytics", "Live Dashboard", "District Metrics"],
    liveUrl: "https://samruddhinareshsakharkar.github.io/Uttarakhand_dashboard/",
    files: [
      {
        name: "Uttarakhand_Ewaste_Collection_Samruddhi.S.xlsx",
        path: "ISA/Assignment_1_State E Waste Tracker/Uttarakhand_Ewaste_Collection_Samruddhi.S.xlsx",
        type: "xlsx"
      },
      {
        name: "Uttarakhand_EWaste_Report.docx",
        path: "ISA/Assignment_1_State E Waste Tracker/Uttarakhand_EWaste_Report.docx",
        type: "docx"
      }
    ]
  },
  {
    id: "isa-ppt",
    index: "ISA • Activity 03",
    category: "isa",
    title: "PPT Presentation – State-wise E-Waste Tracker",
    description: "Comprehensive slide deck presentation evaluating Uttarakhand's e-waste disposal infrastructure, gaps in collection points, and proposed municipal strategies.",
    tags: ["Presentation", "Uttarakhand Analysis", "Slide Deck"],
    liveUrl: null,
    files: [
      {
        name: "24102A0074_Uttarkhand (2).pptx",
        path: "ISA/PPT Upload for State wise E Waste Tracker/24102A0074_Uttarkhand (2).pptx",
        type: "pptx"
      }
    ]
  },
  {
    id: "isa-2",
    index: "ISA • Activity 04",
    category: "isa",
    title: "Assignment 2 – Elemental Blueprint (In-Class Activity)",
    description: "Technical in-class study examining circuit board compositions, toxic heavy metal isolation, and elemental blueprinting for critical and rare earth materials.",
    tags: ["Elemental Blueprint", "In-Class Activity", "Material Recovery"],
    liveUrl: null,
    files: [
      {
        name: "A-2_samruddhi.sakharkar (2).pdf",
        path: "ISA/Assisgnment_2_Elemental Blueprint_In Class Activity/A-2_samruddhi.sakharkar (2).pdf",
        type: "pdf"
      }
    ]
  },

  // --- ESE ACTIVITIES ---
  {
    id: "ese-1",
    index: "ESE • Activity 01",
    category: "ese",
    title: "Changes in the E-Waste Recovery Process Document",
    description: "Detailed technological analysis on advancements in e-waste processing, pyrometallurgy versus green hydrometallurgy, and legislative recovery mandates.",
    tags: ["Recovery Innovations", "Circular Economy", "Process Engineering"],
    liveUrl: null,
    files: [
      {
        name: "Changes in the E Waste Recover Process Document (3).pdf",
        path: "ESE/Changes in the E Waste Recover Process Document/Changes in the E Waste Recover Process Document (3).pdf",
        type: "pdf"
      }
    ]
  },
  {
    id: "ese-2",
    index: "ESE • Activity 02",
    category: "ese",
    title: "Indian Companies Following E-Waste Rules – 5 Case Studies",
    description: "Multi-corporate compliance evaluation studying 5 top Indian enterprises (e.g. Dell, Samsung, Tata, etc.) with DevOps automated web dashboard deployment.",
    tags: ["EPR Compliance", "5 Case Studies", "DevOps Dashboard"],
    liveUrl: "https://samruddhinareshsakharkar.github.io/Miniproject_Devops/",
    files: [
      {
        name: "Indian Companies Following E waste Rules_5 case studies (2).pdf",
        path: "ESE/Indian Companies Following E waste Rules_5 case studies/Indian Companies Following E waste Rules_5 case studies (2).pdf",
        type: "pdf"
      }
    ]
  },
  {
    id: "ese-3",
    index: "ESE • Activity 03",
    category: "ese",
    title: "New Start-up Ideas & E-Waste Rules Comparison",
    description: "Business incubation venture pitch for eco-friendly e-waste collection paired with comparative regulatory study of Indian E-Waste Management Rules (2016 vs 2022).",
    tags: ["Startup Venture", "Rules Comparison", "Pitch Deck"],
    liveUrl: null,
    files: [
      {
        name: "comparison.pdf",
        path: "ESE/New Start up Ideas_E Waste Rules and Regulations Comparison/comparison.pdf",
        type: "pdf"
      },
      {
        name: "Samruddhi.Sakharkat_pitch_ppt 1.pdf",
        path: "ESE/New Start up Ideas_E Waste Rules and Regulations Comparison/Samruddhi.Sakharkat_pitch_ppt 1.pdf",
        type: "pdf"
      },
      {
        name: "Updates_24102A0074_Samruddhi_Pitch Deck.pptx",
        path: "ESE/New Start up Ideas_E Waste Rules and Regulations Comparison/Updates_24102A0074_Samruddhi_Pitch Deck.pptx",
        type: "pptx"
      }
    ]
  },
  {
    id: "ese-4",
    index: "ESE • Activity 04",
    category: "ese",
    title: "E-Waste Campaign in College – Ideas & Drive",
    description: "Integrated campus awareness initiative featuring an interactive survey quiz application, campaign real-time analytics dashboard, official poster, and Q&A documentation.",
    tags: ["Campus Campaign", "Live Quiz & Analytics", "Student Engagement"],
    liveUrl: "https://samruddhinareshsakharkar.github.io/ewaste-quiz-form/",
    additionalLinks: [
      {
        title: "Campaign Dashboard",
        url: "https://pratiksha9321.github.io/ewaste-dashboard/"
      }
    ],
    files: [
      {
        name: "E-waste_campaign_poster.jpeg",
        path: "ESE/E waste Campaign in College_Ideas submission Folder/E-waste_campaign_poster.jpeg",
        type: "jpeg",
        isImage: true
      },
      {
        name: "E-waste QnA Solution (1).docx",
        path: "ESE/E waste Campaign in College_Ideas submission Folder/E-waste QnA Solution (1).docx",
        type: "docx"
      }
    ]
  },
  {
    id: "ese-5",
    index: "ESE • Activity 05",
    category: "ese",
    title: "LEED Certification in India & Green Building Detector",
    description: "Deployment of an intelligent Green Building Detector web app on Vercel combined with verified dataset on the Top 10 Indian structures certified under LEED v5 standards.",
    tags: ["LEED v5", "Green Building App", "Vercel Deployed"],
    liveUrl: "https://green-building-detector.vercel.app/",
    files: [
      {
        name: "Top_10_Green_Buildings_India_LEEDv5 (1) (1).xlsx",
        path: "ESE/LEED certification in India/Top_10_Green_Buildings_India_LEEDv5 (1) (1).xlsx",
        type: "xlsx"
      }
    ]
  },
  {
    id: "ese-6",
    index: "ESE • Activity 06",
    category: "ese",
    title: "Specialized Case Studies Submission",
    description: "Extensive analytical research report and accompanying presentation examining formal sector incentives, informal unorganized dismantling risks, and circular reverse logistics.",
    tags: ["Case Studies", "Report & PPT", "Field Analysis"],
    liveUrl: null,
    files: [
      {
        name: "EWaste_Case_Studies (1).pptx",
        path: "ESE/Case Studies Submission/EWaste_Case_Studies (1).pptx",
        type: "pptx"
      },
      {
        name: "EWaste_Case_Study_Report (2) (1).docx",
        path: "ESE/Case Studies Submission/EWaste_Case_Study_Report (2) (1).docx",
        type: "docx"
      }
    ]
  },
  {
    id: "ese-7",
    index: "ESE • Activity 07",
    category: "ese",
    title: "IEEE Paper Submission (In-Class Activity)",
    description: "Academic research paper drafted under IEEE formatting guidelines analyzing sustainability benchmarks, lifecycle assessment (LCA), and next-generation e-waste management.",
    tags: ["IEEE Paper", "In-Class Research", "Academic Publication"],
    liveUrl: null,
    files: [
      {
        name: "Research_ppr 1.pdf",
        path: "ESE/IEEE Paper Submission_In class activity/Research_ppr 1.pdf",
        type: "pdf"
      }
    ]
  }
];

// Helper to URL encode relative file paths safely
function encodePath(path) {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

// Global Filter & View State
let currentFilter = "all";
let searchQuery = "";
let currentViewMode = "grid"; // 'grid' | 'table'

// DOM Elements
const activitiesGrid = document.getElementById("activitiesGrid");
const activitiesTableWrapper = document.getElementById("activitiesTableWrapper");
const activitiesTableBody = document.getElementById("activitiesTableBody");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const filterPills = document.querySelectorAll(".filter-pill");
const themeToggle = document.getElementById("themeToggle");
const viewGridBtn = document.getElementById("viewGridBtn");
const viewTableBtn = document.getElementById("viewTableBtn");

// Modals
const previewModal = document.getElementById("previewModal");
const previewIframe = document.getElementById("previewIframe");
const modalTitle = document.getElementById("modalTitle");
const modalUrl = document.getElementById("modalUrl");
const modalExternalLink = document.getElementById("modalExternalLink");
const modalLoader = document.getElementById("modalLoader");

const imageModal = document.getElementById("imageModal");
const imageModalSrc = document.getElementById("imageModalSrc");
const imageModalTitle = document.getElementById("imageModalTitle");

// Drawer
const evaluationDrawer = document.getElementById("evaluationDrawer");
const evaluationDrawerBtn = document.getElementById("evaluationDrawerBtn");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const isaChecklist = document.getElementById("isaChecklist");
const eseChecklist = document.getElementById("eseChecklist");
const checklistProgress = document.getElementById("checklistProgress");
const verifiedCountText = document.getElementById("verifiedCountText");
const facultyComments = document.getElementById("facultyComments");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderContent();
  setupEventListeners();
  initChecklist();
  initScores();
});

// Setup Events
function setupEventListeners() {
  // Search Input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = searchQuery ? "block" : "none";
    renderContent();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderContent();
  });

  // Filter Pills
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter");
      renderContent();
    });
  });

  // View Mode Toggles
  viewGridBtn.addEventListener("click", () => {
    currentViewMode = "grid";
    viewGridBtn.classList.add("active");
    viewTableBtn.classList.remove("active");
    renderContent();
  });

  viewTableBtn.addEventListener("click", () => {
    currentViewMode = "table";
    viewTableBtn.classList.add("active");
    viewGridBtn.classList.remove("active");
    renderContent();
  });

  // Drawer Toggle
  evaluationDrawerBtn.addEventListener("click", openEvaluationDrawer);
  closeDrawerBtn.addEventListener("click", closeEvaluationDrawer);
  drawerBackdrop.addEventListener("click", closeEvaluationDrawer);

  // Theme Toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Esc Key to close modals/drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePreviewModal();
      closeImageModal();
      closeEvaluationDrawer();
    }
  });

  // Iframe load listener
  previewIframe.addEventListener("load", () => {
    if (modalLoader) {
      modalLoader.style.opacity = "0";
      setTimeout(() => { modalLoader.style.display = "none"; }, 300);
    }
  });
}

// Get Filtered Activities
function getFilteredActivities() {
  return ACTIVITIES.filter(act => {
    if (currentFilter === "isa" && act.category !== "isa") return false;
    if (currentFilter === "ese" && act.category !== "ese") return false;
    if (currentFilter === "live" && !act.liveUrl) return false;
    if (currentFilter === "presentation") {
      const hasPresentation = act.files.some(f => f.type === "pptx") || act.title.toLowerCase().includes("pitch");
      if (!hasPresentation) return false;
    }

    if (searchQuery) {
      const matchTitle = act.title.toLowerCase().includes(searchQuery);
      const matchDesc = act.description.toLowerCase().includes(searchQuery);
      const matchIndex = act.index.toLowerCase().includes(searchQuery);
      const matchTags = act.tags.some(t => t.toLowerCase().includes(searchQuery));
      const matchFiles = act.files.some(f => f.name.toLowerCase().includes(searchQuery));
      const matchUrl = act.liveUrl && act.liveUrl.toLowerCase().includes(searchQuery);

      if (!matchTitle && !matchDesc && !matchIndex && !matchTags && !matchFiles && !matchUrl) {
        return false;
      }
    }

    return true;
  });
}

// Render Content (Grid or Table)
function renderContent() {
  const filtered = getFilteredActivities();

  if (filtered.length === 0) {
    activitiesGrid.style.display = "none";
    activitiesTableWrapper.style.display = "none";
    noResults.style.display = "flex";
    return;
  }

  noResults.style.display = "none";

  if (currentViewMode === "grid") {
    activitiesGrid.style.display = "grid";
    activitiesTableWrapper.style.display = "none";
    activitiesGrid.innerHTML = filtered.map(act => createActivityCardHTML(act)).join("");
  } else {
    activitiesGrid.style.display = "none";
    activitiesTableWrapper.style.display = "block";
    activitiesTableBody.innerHTML = filtered.map(act => createActivityTableRowHTML(act)).join("");
  }
}

// Create Card HTML (Solid High-Contrast)
function createActivityCardHTML(act) {
  const isIsa = act.category === "isa";
  const categoryLabel = isIsa ? "ISA Assessment" : "ESE Evaluation";
  const categoryClass = isIsa ? "isa" : "ese";

  // Files HTML
  const filesHTML = act.files.map(file => {
    const encoded = encodePath(file.path);
    const badgeClass = `badge-ext-${file.type}`;
    
    if (file.isImage) {
      return `
        <div class="file-row" style="cursor: pointer;" onclick="openImageModal('${encoded}', '${act.title} - Poster')">
          <div class="file-row-left">
            <span class="badge-ext ${badgeClass}">${file.type.toUpperCase()}</span>
            <span class="file-row-name" title="${file.name}">${file.name}</span>
          </div>
          <div class="file-actions-group">
            <span class="file-action-pill" title="View Fullsize Poster">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>View</span>
            </span>
            <a href="${encoded}" download="${file.name}" class="file-action-icon-btn" title="Download Image" onclick="event.stopPropagation()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        </div>
      `;
    }

    // For PDF files: open directly in browser tab so Sir can read it without downloading!
    if (file.type === "pdf") {
      return `
        <div class="file-row">
          <a href="${encoded}" target="_blank" rel="noopener noreferrer" class="file-row-left" title="Click to view PDF in browser">
            <span class="badge-ext ${badgeClass}">${file.type.toUpperCase()}</span>
            <span class="file-row-name">${file.name}</span>
          </a>
          <div class="file-actions-group">
            <a href="${encoded}" target="_blank" rel="noopener noreferrer" class="file-action-pill" title="Open and read PDF in browser tab">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>Read</span>
            </a>
            <a href="${encoded}" download="${file.name}" class="file-action-icon-btn" title="Save / Download ${file.name}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        </div>
      `;
    }

    // For PPTX, DOCX, XLSX files:
    return `
      <div class="file-row">
        <a href="${encoded}" download="${file.name}" class="file-row-left" title="Click to download ${file.name}">
          <span class="badge-ext ${badgeClass}">${file.type.toUpperCase()}</span>
          <span class="file-row-name">${file.name}</span>
        </a>
        <div class="file-actions-group">
          <button class="file-action-pill" onclick="previewOfficeFile('${encoded}', '${file.name}', '${file.type}')" title="Preview or view instructions">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>Open</span>
          </button>
          <a href="${encoded}" download="${file.name}" class="file-action-icon-btn" title="Download ${file.name}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </div>
      </div>
    `;
  }).join("");

  // Live URL block
  let liveBlockHTML = "";
  if (act.liveUrl) {
    const additionalBtn = act.additionalLinks ? act.additionalLinks.map(extra => `
      <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem;">
        <a href="${extra.url}" target="_blank" rel="noopener noreferrer" class="btn-open-external" style="background: #0891b2;">
          <span>${extra.title}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        <button class="btn-solid-preview" onclick="openPreviewModal('${extra.url}', '${extra.title}')">
          <span>Preview</span>
        </button>
      </div>
    `).join("") : "";

    liveBlockHTML = `
      <div class="live-link-box">
        <div class="live-link-meta">
          <span class="live-link-heading">Live Dashboard App</span>
          <span class="live-link-url-text font-mono">${act.liveUrl.replace('https://', '')}</span>
        </div>
        <div class="live-link-actions">
          <a href="${act.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-open-external">
            <span>Launch Live App</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <button class="btn-solid-preview" onclick="openPreviewModal('${act.liveUrl}', '${act.title}')">
            <span>In-Page Preview</span>
          </button>
        </div>
        ${additionalBtn}
      </div>
    `;
  }

  const tagsHTML = act.tags.map(t => `<span class="tag-chip">${t}</span>`).join("");

  return `
    <article class="activity-card" id="card-${act.id}">
      <div class="card-top">
        <div class="badges-group">
          <span class="category-chip ${categoryClass}">${categoryLabel}</span>
          ${tagsHTML}
        </div>
        <div class="submitted-status">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Submitted</span>
        </div>
      </div>

      <div class="activity-index">${act.index}</div>
      <h3 class="activity-title">${act.title}</h3>
      <p class="activity-description">${act.description}</p>

      ${liveBlockHTML}

      <div class="deliverables-box">
        <div class="deliverables-heading">
          <span>Submitted Deliverables</span>
          <span>${act.files.length} File${act.files.length > 1 ? 's' : ''}</span>
        </div>
        <div class="files-stack">
          ${filesHTML}
        </div>
      </div>
    </article>
  `;
}

// Create Table Row HTML for Sir
function createActivityTableRowHTML(act) {
  const isIsa = act.category === "isa";
  const catLabel = isIsa ? "ISA" : "ESE";
  const catClass = isIsa ? "isa" : "ese";

  const filesChips = act.files.map(f => {
    const encoded = encodePath(f.path);
    return `
      <a href="${encoded}" class="table-file-chip" download target="_blank">
        <span class="badge-ext badge-ext-${f.type}">${f.type.toUpperCase()}</span>
        <span>${f.name}</span>
      </a>
    `;
  }).join("");

  let liveLinkHTML = "-";
  if (act.liveUrl) {
    liveLinkHTML = `
      <div style="display: flex; gap: 0.35rem; align-items: center;">
        <a href="${act.liveUrl}" target="_blank" class="btn-solid-preview" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">Launch</a>
        <button onclick="openPreviewModal('${act.liveUrl}', '${act.title}')" class="btn-solid-preview" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">Preview</button>
      </div>
    `;
  }

  return `
    <tr>
      <td class="font-mono text-cyan" style="font-weight: 700;">${act.id.toUpperCase()}</td>
      <td><span class="category-chip ${catClass}">${catLabel}</span></td>
      <td>
        <strong>${act.title}</strong>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">${act.tags.join(" • ")}</p>
      </td>
      <td>${filesChips}</td>
      <td>${liveLinkHTML}</td>
      <td>
        <button class="btn-solid-preview" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;" onclick="jumpToCard('${act.id}')">View Card</button>
      </td>
    </tr>
  `;
}

// Reset Filters
function resetFilters() {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.style.display = "none";
  currentFilter = "all";
  filterPills.forEach(p => p.classList.remove("active"));
  document.querySelector('.filter-pill[data-filter="all"]').classList.add("active");
  renderContent();
}

function applyMetricFilter(filterName) {
  const pill = document.querySelector(`.filter-pill[data-filter="${filterName}"]`);
  if (pill) {
    filterPills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    currentFilter = filterName;
    renderContent();
    document.getElementById("activitiesSection").scrollIntoView({ behavior: "smooth" });
  }
}

function jumpToCard(id) {
  if (currentViewMode !== "grid") {
    currentViewMode = "grid";
    viewGridBtn.classList.add("active");
    viewTableBtn.classList.remove("active");
    renderContent();
  }
  const el = document.getElementById(`card-${id}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.style.borderColor = "#38bdf8";
    el.style.boxShadow = "0 0 20px rgba(56, 189, 248, 0.4)";
    setTimeout(() => {
      el.style.borderColor = "";
      el.style.boxShadow = "";
    }, 2000);
  }
}

// Copy All Deployed Dashboard Links
function copyAllLinks() {
  const links = [
    "1. State E-Waste Tracker (Uttarakhand): https://samruddhinareshsakharkar.github.io/Uttarakhand_dashboard/",
    "2. Indian Companies Following E-Waste Rules (DevOps): https://samruddhinareshsakharkar.github.io/Miniproject_Devops/",
    "3. E-Waste Campus Quiz & Survey: https://samruddhinareshsakharkar.github.io/ewaste-quiz-form/",
    "4. College Campaign Live Analytics Dashboard: https://pratiksha9321.github.io/ewaste-dashboard/",
    "5. Green Building Detector (LEED v5): https://green-building-detector.vercel.app/"
  ].join("\n");

  navigator.clipboard.writeText(links).then(() => {
    const textSpan = document.getElementById("copyLinksText");
    const oldText = textSpan.textContent;
    textSpan.textContent = "Copied 5 Links!";
    setTimeout(() => { textSpan.textContent = oldText; }, 2500);
  }).catch(() => {
    alert("Copied to clipboard!\n\n" + links);
  });
}

// Live Preview Modal
function openPreviewModal(url, title) {
  modalTitle.textContent = title;
  modalUrl.textContent = url;
  modalExternalLink.href = url;
  
  if (modalLoader) {
    modalLoader.style.display = "flex";
    modalLoader.style.opacity = "1";
  }
  
  previewIframe.src = url;
  previewModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePreviewModal() {
  previewModal.classList.remove("open");
  previewIframe.src = "";
  document.body.style.overflow = "";
}

// Image Modal
function openImageModal(src, title) {
  imageModalSrc.src = src;
  imageModalTitle.textContent = title;
  imageModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModalSrc.src = "";
  document.body.style.overflow = "";
}

// Drawer
function openEvaluationDrawer() {
  evaluationDrawer.classList.add("open");
  drawerBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeEvaluationDrawer() {
  evaluationDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// Scoring Rubric Calculation for Prof. Aniket Kundu
function calculateTotalScore() {
  const isa = parseInt(document.getElementById("scoreIsa").value) || 0;
  const live = parseInt(document.getElementById("scoreLive").value) || 0;
  const ieee = parseInt(document.getElementById("scoreIeee").value) || 0;
  const cstudy = parseInt(document.getElementById("scoreCase").value) || 0;
  const pitch = parseInt(document.getElementById("scorePitch").value) || 0;

  const total = Math.min(50, Math.max(0, isa + live + ieee + cstudy + pitch));
  const percent = Math.round((total / 50) * 100);

  let remark = "Outstanding";
  if (percent < 50) remark = "Needs Improvement";
  else if (percent < 70) remark = "Satisfactory";
  else if (percent < 85) remark = "Very Good";
  else if (percent < 95) remark = "Excellent";

  document.getElementById("totalScoreText").textContent = `${total} / 50 (${percent}% - ${remark})`;

  const scores = { isa, live, ieee, cstudy, pitch };
  localStorage.setItem("ecotrack_scores", JSON.stringify(scores));
}

function initScores() {
  const saved = JSON.parse(localStorage.getItem("ecotrack_scores") || "null");
  if (saved) {
    if (document.getElementById("scoreIsa")) document.getElementById("scoreIsa").value = saved.isa;
    if (document.getElementById("scoreLive")) document.getElementById("scoreLive").value = saved.live;
    if (document.getElementById("scoreIeee")) document.getElementById("scoreIeee").value = saved.ieee;
    if (document.getElementById("scoreCase")) document.getElementById("scoreCase").value = saved.cstudy;
    if (document.getElementById("scorePitch")) document.getElementById("scorePitch").value = saved.pitch;
    calculateTotalScore();
  }
}

// Checklist in Drawer
function initChecklist() {
  const savedChecks = JSON.parse(localStorage.getItem("ecotrack_checklist") || "{}");
  const savedComments = localStorage.getItem("ecotrack_comments") || "";
  facultyComments.value = savedComments;

  const isaItems = ACTIVITIES.filter(a => a.category === "isa");
  const eseItems = ACTIVITIES.filter(a => a.category === "ese");

  isaChecklist.innerHTML = isaItems.map(item => createChecklistItemHTML(item, savedChecks[item.id])).join("");
  eseChecklist.innerHTML = eseItems.map(item => createChecklistItemHTML(item, savedChecks[item.id])).join("");

  updateChecklistProgress();

  document.querySelectorAll(".checklist-checkbox").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const parent = e.target.closest(".checklist-item");
      if (e.target.checked) parent.classList.add("checked");
      else parent.classList.remove("checked");
      saveChecklistState();
      updateChecklistProgress();
    });
  });
}

function createChecklistItemHTML(item, isChecked) {
  const checkedAttr = isChecked ? "checked" : "";
  const checkedClass = isChecked ? "checked" : "";
  return `
    <label class="checklist-item ${checkedClass}">
      <input type="checkbox" class="checklist-checkbox" data-id="${item.id}" ${checkedAttr}>
      <span class="checklist-label">
        <strong>${item.index}:</strong> ${item.title}
      </span>
    </label>
  `;
}

function saveChecklistState() {
  const state = {};
  document.querySelectorAll(".checklist-checkbox").forEach(chk => {
    state[chk.getAttribute("data-id")] = chk.checked;
  });
  localStorage.setItem("ecotrack_checklist", JSON.stringify(state));
}

function updateChecklistProgress() {
  const total = ACTIVITIES.length;
  let checked = 0;
  document.querySelectorAll(".checklist-checkbox").forEach(chk => {
    if (chk.checked) checked++;
  });

  const percentage = Math.round((checked / total) * 100);
  checklistProgress.style.width = `${percentage}%`;
  verifiedCountText.textContent = `${checked} / ${total} Checked (${percentage}%)`;
}

function saveEvaluationLocal() {
  localStorage.setItem("ecotrack_comments", facultyComments.value);
  calculateTotalScore();
  alert("Marks, rubric scores, and remarks saved for Prof. Aniket Kundu!");
}

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("ecotrack_theme");
  if (savedTheme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  }
}

function toggleTheme() {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("ecotrack_theme", "light");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  }
}

// Office & Document File Viewer (PPTX, DOCX, XLSX)
function previewOfficeFile(relativeEncodedPath, filename, fileType) {
  const isOnline = window.location.protocol.startsWith('http');
  
  if (isOnline) {
    // When deployed online (e.g. GitHub Pages), we can use Microsoft Office Online Viewer or Google Viewer
    const fullPublicUrl = new URL(relativeEncodedPath, window.location.href).href;
    const officeViewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(fullPublicUrl)}`;
    
    openPreviewModal(officeViewerUrl, `${filename} (${fileType.toUpperCase()} Viewer)`);
  } else {
    // When opened locally via file:///
    // Trigger download with exact original filename and open prompt
    const a = document.createElement('a');
    a.href = relativeEncodedPath;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

// Window attachments
window.openPreviewModal = openPreviewModal;
window.closePreviewModal = closePreviewModal;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.previewOfficeFile = previewOfficeFile;
window.resetFilters = resetFilters;
window.applyMetricFilter = applyMetricFilter;
window.jumpToCard = jumpToCard;
window.copyAllLinks = copyAllLinks;
window.openEvaluationDrawer = openEvaluationDrawer;
window.closeEvaluationDrawer = closeEvaluationDrawer;
window.calculateTotalScore = calculateTotalScore;
window.saveEvaluationLocal = saveEvaluationLocal;
