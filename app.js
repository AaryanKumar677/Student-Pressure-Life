/**
 * The Merit Mirage — Core Interactive System
 * Light Theme Edition | Literary English Prose
 */

const app = {
  // Academic discipline data (Pure English, Poignant Prose)
  disciplines: {
    engineering: {
      title: "Technology & Engineering (B.Tech / BCA)",
      quoteLead: "“Universities recite algorithms from 2008; entry-level postings demand three years of production architecture.”",
      bullets: [
        "The Algorithmic Grind: Human intellect reduced to reversing binary trees within strict 20-minute competitive timers.",
        "The Junior Layoff Anxiety: Early-career software vacancies shrink by 40% amid rapid AI automation.",
        "The Off-Campus Vacuum: Tier-2 and Tier-3 graduates transmitting hundreds of applications into unmonitored ATS software."
      ],
      personalQuote: "“I solved three hundred LeetCode problems and constructed four functional web applications. My rejection letter concluded: 'We seek someone with deeper commercial tenure.' Where is a 21-year-old expected to purchase three years of commercial tenure?”",
      metrics: [
        { label: "Off-Campus Algorithmic Rejection Rate", value: "96.4%", highlight: true },
        { label: "Delayed Corporate Onboarding Window", value: "12 - 18 Months", highlight: true },
        { label: "Average Mass Recruiter Starting Package", value: "₹3.2 - ₹3.8 LPA", highlight: false }
      ]
    },
    commerce: {
      title: "Commerce & Finance (B.Com / BBA / CA Aspirants)",
      quoteLead: "“Confined within a rented room for three years, bargaining with a single-digit pass percentage while youth silently expires.”",
      bullets: [
        "The CA Attempt Treadmill: Punitive pass rates (9–12%) that trap young adults in multi-year social exile and silent shame.",
        "Unpaid Corporate Exploitation: Sixty-hour workweeks under the title of 'Articleship' for ₹3,000 monthly stipends in metropolitan hubs.",
        "The General Degree Vacuum: Traditional commerce colleges offering zero campus placement apart from tele-sales and call centres."
      ],
      personalQuote: "“When the CA Intermediate examination results were declared and my name was absent for the third time, I could not unlock my bedroom door. Outside, my father whispered that dinner was ready. I did not possess the courage to face his eyes.”",
      metrics: [
        { label: "Chartered Accountancy Final Pass Ratio", value: "9.8% - 13.2%", highlight: true },
        { label: "Mandatory Articleship Monthly Stipend", value: "₹2,500 - ₹5,000", highlight: false },
        { label: "Direct Campus Placement Rate for B.Com", value: "< 14%", highlight: true }
      ]
    },
    humanities: {
      title: "Humanities & Liberal Arts (BA / Media / Design)",
      quoteLead: "“Bearing the relentless societal accusation of 'uselessness' while competing within an unforgiving freelance economy.”",
      bullets: [
        "Social Derision: Enduring relatives' patronizing quips: 'What will you do now—become a clerk or school tutor?'",
        "The Civil Services Labyrinth: Pushed into 4–5 years of competitive coaching in cramped quarters with a 0.15% selection threshold.",
        "Institutional Neglect: Ninety percent of humanities departments operate without any career placement infrastructure."
      ],
      personalQuote: "“I loved literature and sociology with all my heart. But the society around me reminded me every single afternoon that intellectual curiosity is a luxury reserved solely for the wealthy.”",
      metrics: [
        { label: "UPSC Civil Services Admission Rate", value: "0.15%", highlight: true },
        { label: "Departments Possessing Placement Cells", value: "< 8%", highlight: true },
        { label: "Average Unpaid Internship Expectation", value: "40 Hrs/Week", highlight: false }
      ]
    },
    sciences: {
      title: "Pure Sciences & Research (B.Sc / M.Sc)",
      quoteLead: "“Trapped on the academic treadmill: B.Sc demands an M.Sc, M.Sc demands a Ph.D., with zero economic autonomy until age twenty-seven.”",
      bullets: [
        "The Degree Slog: A Bachelor’s qualification in Physics or Zoology offers virtually zero corporate recruitment avenues.",
        "Depleted Research Grants: Stagnant laboratory equipment, frozen fellowship stipends, and bureaucratic grant delays.",
        "The Age Crisis: Turning twenty-five while still requesting transit fare from aging parents, as childhood peers purchase apartments."
      ],
      personalQuote: "“I hold a Master of Science degree with first-class honors. Yet at twenty-four, asking my father for ₹500 feels like an unforgivable confession of failure. No industrial firm hires pure science without vocational accreditation.”",
      metrics: [
        { label: "Direct Campus Placements for B.Sc", value: "< 6%", highlight: true },
        { label: "Median Age Before Sustainable Income", value: "26 - 28 Years", highlight: true },
        { label: "State Fellowship Disbursement Backlog", value: "4 - 8 Months", highlight: false }
      ]
    }
  },

  // Dynamic thoughts reflecting psychological strain tiers
  stressThoughts: {
    critical: [
      "“My father inquired about campus hiring on our evening telephone call. I looked away and lied that results were deferred. I could not face my reflection in the mirror afterward.”",
      "“If my corporate offer is rescinded, the educational loan repayment clock will consume our household. My chest tightens every time the postal courier approaches.”",
      "“Everyone on my professional feed is celebrating twenty-lakh salaries. I have submitted one hundred and forty resumes without receiving even an automated rejection receipt.”",
      "“My mother told me: 'Do not worry, child.' Her kindness dismantled me entirely, because I know she worries ten times more than I do.”"
    ],
    severe: [
      "“Forty browser tabs illuminated across my desk at 2:30 AM. My eyes ache, but if I allow myself to sleep, I feel the rest of the world pulling irreversibly ahead.”",
      "“My mandatory classroom attendance stands at seventy-four percent. One missed morning and they will prohibit me from examinations. When am I supposed to acquire real competence?”",
      "“An entry-level corporate internship demanded three years of previous experience and zero remuneration. How am I supposed to pay my hostel board?”"
    ],
    moderate: [
      "“Enduring antiquated semester assignments that possess no relevance to modern commerce, while frantically studying online tutorials late into the night.”",
      "“Maintaining a calm demeanor in front of childhood peers, while quietly dreading the arrival of final graduation.”"
    ]
  },

  // Detailed unsent letters for modal viewing
  fullLetters: {
    1: {
      title: "To My Father",
      badge: "Fourth Year Engineering • Discovered in Drafts",
      body: `
        <p><strong>Father,</strong></p>
        <p>You sold the family's vintage scooter to pay my third-year semester fees. I still remember your words: <em>'I will walk to the office; my son's studies must never be halted.'</em></p>
        <p>Every evening when we speak by telephone, I reassure you that all is progressing well. But the truth is that not a single reputable company visited our college. The two firms that arrived demanded a three-year mandatory service bond for fifteen thousand rupees a month.</p>
        <p>I sit in the quiet corner of the campus library for five hours every night, dispatching twenty tailored applications through slow internet connections. Every morning I awaken to the same automated sentence: <em>'We regret to inform you that we have chosen to pursue other candidates.'</em></p>
        <p>Father, I am not idle. I have spent every midnight learning modern engineering systems; I have labored fourteen hours a day. The market simply refuses to look at graduates like us. Forgive me if I fail to become the pride you envisioned. I have not surrendered, but I am profoundly tired.</p>
        <p style="margin-top: 1.5rem; font-style: italic; color: #4338CA;">— Your son</p>
      `
    },
    2: {
      title: "To My Mother",
      badge: "Chartered Accountancy Candidate • 23 Years",
      body: `
        <p><strong>Mother,</strong></p>
        <p>Whenever you call and ask gently: <em>'Have you eaten today, my child?'</em>, my throat tightens.</p>
        <p>I have lived inside this ten-by-ten foot rented room for two years. Weeks pass without my skin feeling open sunlight. Whenever relatives inquire whether your child has cleared the examination yet, I feel as though I have forced you to lower your head before the world.</p>
        <p>Looking at single-digit passing percentages before every examination makes my hands tremble. During corporate articleship, they demand work from 9:00 AM until 10:00 PM and dispense three thousand rupees a month, which scarcely pays for monthly metro travel.</p>
        <p>Mother, I do not seek wealth. I only yearn for the morning when I can witness ease across your face—knowing your child is safe. If my next attempt falters as well, please promise me you will not stop speaking to me.</p>
        <p style="margin-top: 1.5rem; font-style: italic; color: #4338CA;">— Your daughter</p>
      `
    },
    3: {
      title: "Open Letter to Corporate Panels and Recruiters",
      badge: "Humanities & Liberal Arts Graduate",
      body: `
        <p><strong>To Corporate Recruiters & Institutional Panels,</strong></p>
        <p>Throughout our schooling, you instructed us: <em>'Pursue curiosity and original intellect. Study what moves your mind, and dignity will follow.'</em></p>
        <p>We pursued humanities, literature, and design. Yet the moment we reached convocation, you declared our education worthless. You advised us to abandon our studies and queue for civil service exams.</p>
        <p>When we open recruitment portals, you demand three years of prior experience for entry-level roles. And when you offer internships, you affix 'Unpaid' and tell us that <em>'exposure is its own reward.'</em></p>
        <p>Exposure does not settle room rent. The quiet indignity a twenty-one-year-old feels when asking their aging parents for pocket change is an emotional price accounted for in no corporate balance sheet. We are not disposable resume rows; we are young humans seeking a fair threshold upon which to build our lives.</p>
        <p style="margin-top: 1.5rem; font-style: italic; color: #4338CA;">— A Graduating Senior</p>
      `
    }
  },

  // Default pre-seeded solidarity notes (Eloquent English)
  defaultNotes: [
    {
      id: 1,
      author: "2024 Tier-3 Graduate",
      stream: "Technology",
      text: "It took nine months and four interview rounds to secure my first opportunity. If you are sitting with one hundred rejections tonight: Remember, you only need one single organization to say yes. Hold on.",
      likes: 48,
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "Former CA Aspirant, Now Financial Analyst",
      stream: "Commerce",
      text: "Leaving an academic path is not the termination of life. I pivoted after two attempts and found stable ground. Your existence is infinitely larger than any single examination.",
      likes: 39,
      time: "4 hours ago"
    },
    {
      id: 3,
      author: "Final Year Literature Student",
      stream: "Humanities",
      text: "To everyone weeping quietly in hostel corridors tonight: You are not defective. We are enduring an unreasonable economic storm together.",
      likes: 62,
      time: "Yesterday"
    },
    {
      id: 4,
      author: "Parent of an Engineering Graduate",
      stream: "Alumni",
      text: "If any young student is reading this tonight: We cherish your well-being far more than any corporate title. The career will arrive; please do not forfeit faith in yourself.",
      likes: 94,
      time: "Yesterday"
    }
  ],

  // Initialization lifecycle
  init() {
    this.initSplitSlider();
    this.initDisciplineTabs();
    this.initStressSimulator();
    this.initLettersModal();
    this.initSolidarityWall();
    this.initCounterObserver();
  },

  // 1. Two Worlds Interactive Draggable Split Slider
  initSplitSlider() {
    const wrapper = document.getElementById("slider-wrapper");
    const facade = document.getElementById("split-facade");
    const handle = document.getElementById("split-handle");

    if (!wrapper || !facade || !handle) return;

    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = wrapper.getBoundingClientRect();
      let pos = clientX - rect.left;
      if (pos < 0) pos = 0;
      if (pos > rect.width) pos = rect.width;

      const percentage = (pos / rect.width) * 100;
      facade.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };

    wrapper.addEventListener("mousedown", (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    // Touch events for mobile/tablet
    wrapper.addEventListener("touchstart", (e) => {
      isDragging = true;
      updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchend", () => {
      isDragging = false;
    });
  },

  // 2. Discipline Tabs & Dynamic Narrative
  initDisciplineTabs() {
    const btns = document.querySelectorAll(".discipline-btn");
    const container = document.getElementById("discipline-box");

    const render = (key) => {
      const item = this.disciplines[key];
      if (!item || !container) return;

      container.innerHTML = `
        <div class="disc-grid">
          <div class="disc-info">
            <h3>${item.title}</h3>
            <div class="disc-quote-lead">${item.quoteLead}</div>
            <ul class="disc-bullet-list">
              ${item.bullets.map(b => `<li><i class="fa-solid fa-circle-exclamation"></i> <span>${b}</span></li>`).join('')}
            </ul>
            <div class="disc-personal-quote">${item.personalQuote}</div>
          </div>
          <div class="disc-metrics-sidebar">
            <h4 style="font-size: 1rem; margin-bottom: 1.25rem;"><i class="fa-solid fa-chart-column"></i> Key Discipline Indicators</h4>
            ${item.metrics.map(m => `
              <div class="disc-metric-row">
                <div class="metric-caption">${m.label}</div>
                <div class="metric-stat-val ${m.highlight ? 'val-highlight' : ''}">${m.value}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    };

    btns.forEach(b => {
      b.addEventListener("click", () => {
        btns.forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        render(b.dataset.stream);
      });
    });

    // Initial render
    render("engineering");
  },

  // 3. Cumulative Pressure Simulator
  initStressSimulator() {
    const sAtt = document.getElementById("sl-attendance");
    const sRej = document.getElementById("sl-rejections");
    const sDebt = document.getElementById("sl-debt");
    const sSoc = document.getElementById("sl-social");

    const dAtt = document.getElementById("disp-attendance");
    const dRej = document.getElementById("disp-rejections");
    const dDebt = document.getElementById("disp-debt");
    const dSoc = document.getElementById("disp-social");

    const bFill = document.getElementById("battery-fill");
    const bNum = document.getElementById("battery-num");
    const bStatus = document.getElementById("battery-status");
    const bpmDisp = document.getElementById("bpm-display");
    const heartIcon = document.getElementById("heart-icon");
    const thoughtDisp = document.getElementById("live-thought");
    const verdictDisp = document.getElementById("assessment-verdict");

    const debtLabels = ["Minimal", "Moderate", "High", "Critical (Moratorium Ending)"];
    const socialLabels = ["Occasional", "Frequent", "Intense", "Constant / Toxic"];

    const compute = () => {
      const att = parseInt(sAtt.value, 10);
      const rej = parseInt(sRej.value, 10);
      const debt = parseInt(sDebt.value, 10);
      const soc = parseInt(sSoc.value, 10);

      dAtt.textContent = `${att}%`;
      dRej.textContent = `${rej}`;
      dDebt.textContent = debtLabels[debt - 1];
      dSoc.textContent = socialLabels[soc - 1];

      // Normalized stress score (0 to 100)
      const wAtt = ((att - 50) / 45) * 25;
      const wRej = ((rej - 10) / 490) * 35;
      const wDebt = ((debt - 1) / 3) * 25;
      const wSoc = ((soc - 1) / 3) * 15;

      const totalStress = Math.min(94, Math.max(6, wAtt + wRej + wDebt + wSoc));
      const battery = Math.round(100 - totalStress);

      bNum.textContent = `${battery}%`;
      bFill.style.width = `${battery}%`;

      if (battery > 65) {
        bFill.style.background = "#059669";
        bNum.style.color = "#059669";
        bStatus.textContent = "Stable Cognitive Reserve";
        bStatus.style.color = "#059669";
        bpmDisp.textContent = "Estimated Pulse: 72 BPM (Resting Baseline)";
        bpmDisp.style.color = "#059669";
        heartIcon.style.animationDuration = "1.3s";
        thoughtDisp.textContent = "“Semester coursework is manageable. Still surveying entry-level openings, but optimistic about eventual opportunities.”";
        verdictDisp.innerHTML = "<strong>Observation:</strong> Low acute burnout probability. Academic schedule remains within manageable parameters.";
        verdictDisp.style.background = "#ECFDF5";
        verdictDisp.style.color = "#065F46";
        verdictDisp.style.borderColor = "rgba(5, 150, 105, 0.2)";
      } else if (battery > 35) {
        bFill.style.background = "#D97706";
        bNum.style.color = "#D97706";
        bStatus.textContent = "Moderate Chronic Depletion";
        bStatus.style.color = "#D97706";
        bpmDisp.textContent = "Estimated Pulse: 94 BPM (Elevated Tension)";
        bpmDisp.style.color = "#D97706";
        heartIcon.style.animationDuration = "0.9s";
        const list = this.stressThoughts.moderate;
        thoughtDisp.textContent = list[Math.floor(Math.random() * list.length)];
        verdictDisp.innerHTML = "<strong>Observation:</strong> Elevated strain. Sleep architecture degraded. Tension between lecture attendance and practical upskilling evident.";
        verdictDisp.style.background = "#FFFBEB";
        verdictDisp.style.color = "#92400E";
        verdictDisp.style.borderColor = "rgba(217, 119, 6, 0.25)";
      } else {
        bFill.style.background = "#DC2626";
        bNum.style.color = "#DC2626";
        bStatus.textContent = "Severe Acute Exhaustion";
        bStatus.style.color = "#DC2626";
        bpmDisp.textContent = "Estimated Pulse: 118 BPM (Acute Anxiety Spike)";
        bpmDisp.style.color = "#DC2626";
        heartIcon.style.animationDuration = "0.55s";
        const list = this.stressThoughts.critical;
        thoughtDisp.textContent = list[Math.floor(Math.random() * list.length)];
        verdictDisp.innerHTML = "<strong>Observation:</strong> Severe burnout trajectory. Psychological isolation and sleep deprivation exceed safe thresholds. Immediate peer solidarity and de-escalation required.";
        verdictDisp.style.background = "#FEF2F2";
        verdictDisp.style.color = "#991B1B";
        verdictDisp.style.borderColor = "rgba(220, 38, 38, 0.25)";
      }
    };

    [sAtt, sRej, sDebt, sSoc].forEach(sl => {
      sl.addEventListener("input", compute);
    });

    compute();
  },

  // 4. Unsent Letters Modal System
  initLettersModal() {
    const modal = document.getElementById("letter-modal");
    const closeBtn = document.getElementById("modal-close");

    if (!modal || !closeBtn) return;

    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.classList.remove("open");
    });
  },

  openModal(id) {
    const modal = document.getElementById("letter-modal");
    const container = document.getElementById("modal-body-content");
    const item = this.fullLetters[id];

    if (!item || !modal || !container) return;

    container.innerHTML = `
      <div style="margin-bottom: 1.5rem; border-bottom: 1px solid #EAE5D9; padding-bottom: 1rem;">
        <span style="font-size: 0.75rem; font-family: var(--font-mono); background: #F3EFE6; color: #78716C; padding: 2px 8px; border-radius: 6px;">${item.badge}</span>
        <h2 style="font-size: 1.7rem; color: #0F172A; margin-top: 0.5rem;">${item.title}</h2>
      </div>
      <div style="font-family: var(--font-serif); font-size: 1.25rem; line-height: 1.75; color: #292524;">
        ${item.body}
      </div>
    `;

    modal.classList.add("open");
  },

  // 5. Wall of Solidarity (LocalStorage Persistence)
  initSolidarityWall() {
    const form = document.getElementById("note-form");
    const authorInput = document.getElementById("note-author");
    const streamSelect = document.getElementById("note-stream");
    const messageInput = document.getElementById("note-message");
    const charCounter = document.getElementById("char-remaining");
    const grid = document.getElementById("notes-grid");

    if (!form || !grid) return;

    let notes = [];
    try {
      const stored = localStorage.getItem("behind_degree_light_notes");
      notes = stored ? JSON.parse(stored) : [...this.defaultNotes];
    } catch (e) {
      notes = [...this.defaultNotes];
    }

    const render = () => {
      grid.innerHTML = notes.map(n => `
        <div class="single-note-item">
          <div>
            <div class="note-top-bar">
              <span class="author-title">${this.sanitize(n.author)}</span>
              <span class="stream-flag">${this.sanitize(n.stream)}</span>
            </div>
            <p class="note-prose">${this.sanitize(n.text)}</p>
          </div>
          <div class="note-bottom-bar">
            <span>${n.time}</span>
            <button class="heart-button" onclick="app.likeNoteItem(${n.id})">
              <i class="fa-solid fa-heart"></i>
              <span>${n.likes}</span>
            </button>
          </div>
        </div>
      `).join('');
    };

    render();

    messageInput.addEventListener("input", () => {
      const left = 280 - messageInput.value.length;
      charCounter.textContent = `${left} characters left`;
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newEntry = {
        id: Date.now(),
        author: authorInput.value.trim() || "Anonymous Graduate",
        stream: streamSelect.value,
        text: messageInput.value.trim(),
        likes: 1,
        time: "Just now"
      };

      notes.unshift(newEntry);
      try {
        localStorage.setItem("behind_degree_light_notes", JSON.stringify(notes));
      } catch (err) {}

      render();
      form.reset();
      charCounter.textContent = "280 characters left";
    });

    this.storedNotes = notes;
    this.refreshNotes = render;
  },

  likeNoteItem(id) {
    const note = this.storedNotes.find(x => x.id === id);
    if (note) {
      note.likes += 1;
      try {
        localStorage.setItem("behind_degree_light_notes", JSON.stringify(this.storedNotes));
      } catch (e) {}
      this.refreshNotes();
    }
  },

  // 6. Number Counter Animation (IntersectionObserver)
  initCounterObserver() {
    const counters = document.querySelectorAll(".count-up");
    let triggered = false;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          counters.forEach(c => {
            const target = +c.dataset.target;
            const duration = 1600;
            const step = 25;
            const inc = target / (duration / step);
            let current = 0;

            const timer = setInterval(() => {
              current += inc;
              if (current >= target) {
                c.textContent = target;
                clearInterval(timer);
              } else {
                c.textContent = Math.floor(current);
              }
            }, step);
          });
        }
      });
    }, { threshold: 0.3 });

    const targetRow = document.querySelector(".hero-stats-row");
    if (targetRow) obs.observe(targetRow);
  },

  sanitize(str) {
    const el = document.createElement("div");
    el.textContent = str;
    return el.innerHTML;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
