// document.addEventListener("DOMContentLoaded", () => {
//   // ----------------------------
//   // HAMBURGER MENU
//   // ----------------------------
//   const hamburger = document.querySelector(".hamburger");
//   const navList = document.querySelector(".nav-list");
//   if (hamburger && navList) {
//     hamburger.addEventListener("click", () => navList.classList.toggle("active"));
//   }

//   // ----------------------------
//   // FIX POLISH TYPOGRAPHY
//   // ----------------------------
//   function fixPolishWidows(root = document) {
//     const elements = root.querySelectorAll("p, li, span, strong");
//     elements.forEach(el => {
//       el.innerHTML = el.innerHTML.replace(/(\s|^)([aiouwzAIUOWZ])\s+/g, "$1$2&nbsp;");
//     });
//   }

//   // ----------------------------
//   // PROJECT DATA
//   // ----------------------------
//   const projectData = {
//     pl: [
//       {
//         subtitle: "VIVALDI REIMAGINED",
//         text: `<span class="highlight">VIVALDI REIMAGINED</span> to autorski projekt obejmujący zarówno
// „Cztery pory roku”, jak i rzadziej wykonywane perły epoki baroku, ukazane
// w nowoczesnym kontekście artystycznym.<br><br>
// <strong>Projekcje świetlne oraz wizualizacje z obrazem i napisami</strong>
// wzmacniają przekaz muzyczny, ułatwiają odbiór i budują atrakcyjną warstwę
// estetyczno-edukacyjną spektaklu.<br><br>
// Przewodnim punktem programu jest cykl koncertów „Cztery pory roku”
// Antonio Vivaldiego – zaprezentowane w nowej interpretacji, która z pełnym
// szacunkiem dla oryginału łączy wierność barokowej formy z twórczą swobodą,
// pozwalając odkryć te słynne koncerty na nowo.<br><br>
// Repertuar może być elastycznie dopasowany do charakteru wydarzenia –
// od kameralnych koncertów, przez festiwale, po projekty edukacyjne i multi-medialne.`
//       },
//       {
//         subtitle: "HAYDN REIMAGINED",
//         text: `<span class="highlight">HAYDN REIMAGINED</span> to autorski projekt muzyczny poświęcony twórczości Josepha Haydna, w którym koncert w całości oparty jest na wykonaniu „Siedmiu ostatnich słów Chrystusa na Krzyżu”.<br>
// Utwór ukazany zostaje jako spójna narracja muzyczno-słowna, łącząca muzykę Haydna z cytatami z Ewangelii.<br><br>
// Naturalnym kontekstem realizacji <strong>HAYDN REIMAGINED</strong> są wnętrza świątyń, gdzie sakralny charakter przestrzeni wzmacnia duchowy wymiar kompozycji.`
//       }
//     ],
//     en: [
//       {
//         subtitle: "VIVALDI REIMAGINED",
//         text: `<span class="highlight">VIVALDI REIMAGINED</span> is an original project encompassing ‘The Four Seasons’ and lesser-known Baroque gems presented in a modern context.`
//       },
//       {
//         subtitle: "HAYDN REIMAGINED",
//         text: `<span class="highlight">HAYDN REIMAGINED</span> is an original project dedicated to Joseph Haydn, centered on "The Seven Last Words of Christ on the Cross."`
//       }
//     ]
//   };

//   const subtitleEl = document.querySelector(".project-subtitle");
//   const textEl = document.querySelector("[data-i18n='project.text']");
//   const langButtons = document.querySelectorAll(".lang-switch button");

//   let currentProjectIndex = 0;

//   // ----------------------------
//   // RENDER PROJECT
//   // ----------------------------
//   function renderProject(lang) {
//     if (!subtitleEl || !textEl) return;

//     if (currentProjectIndex < 0) currentProjectIndex = 0;
//     if (currentProjectIndex >= projectData[lang].length)
//       currentProjectIndex = projectData[lang].length - 1;

//     const project = projectData[lang][currentProjectIndex];
//     subtitleEl.textContent = project.subtitle;
//     textEl.innerHTML = project.text;

//     if (lang === "pl") fixPolishWidows();
//   }

//   // ----------------------------
//   // GO TO PROJECT
//   // ----------------------------
//   function goToProject(index) {
//     const lang = localStorage.getItem("lang") || "pl";
//     if (isNaN(index) || index < 0 || index >= projectData[lang].length) return;
//     currentProjectIndex = index;
//     renderProject(lang);

//     const projectSection = document.querySelector("#project");
//     if (projectSection) projectSection.scrollIntoView({ behavior: "smooth" });
//   }

//   const projectSubtitles = document.querySelectorAll(".project-subtitle");
// projectSubtitles.forEach(el => {
//   el.addEventListener("click", () => {
//     const index = parseInt(el.dataset.project, 10);
//     goToProject(index);
//   });
// });

//   // ----------------------------
//   // PROJECT LINK CLICK (delegacja)
//   // ----------------------------
//   const projectNav = document.querySelector(".nav-list"); // lub inny stały rodzic
//   if (projectNav) {
//     projectNav.addEventListener("click", (e) => {
//       const link = e.target.closest("[data-project]");
//       if (!link) return;
//       e.preventDefault();
//       const index = parseInt(link.dataset.project, 10);
//       goToProject(index);
//     });
//   }

//   // ----------------------------
//   // LANGUAGE SUPPORT
//   // ----------------------------
//   const translations = { /* ...tutaj wklejasz swój obiekt translations z pl i en... */ };

//   function setLanguage(lang) {
//     const translatableElements = document.querySelectorAll("[data-i18n]");
//     translatableElements.forEach(el => {
//       const key = el.dataset.i18n;
//       if (translations[lang] && translations[lang][key]) {
//         el.innerHTML = translations[lang][key];
//       }
//     });
//     langButtons.forEach(b => b.classList.remove("active"));
//     const activeBtn = document.querySelector(`.lang-switch button[data-lang="${lang}"]`);
//     if (activeBtn) activeBtn.classList.add("active");
//     localStorage.setItem("lang", lang);
//     renderProject(lang);
//   }

//   const savedLang = localStorage.getItem("lang") || "pl";
//   setLanguage(savedLang);

//   langButtons.forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

//   // ----------------------------
//   // COOKIE BANNER
//   // ----------------------------
//   const cookieBanner = document.getElementById("cookie-banner");
//   if (cookieBanner) {
//     const acceptBtn = cookieBanner.querySelector("[data-cookie='accept']");
//     const rejectBtn = cookieBanner.querySelector("[data-cookie='reject']");
//     const moreInfoLink = cookieBanner.querySelector("[data-i18n='cookies.more']");

//     const cookiesAccepted = localStorage.getItem("cookiesAccepted");
//     if (!cookiesAccepted) cookieBanner.style.display = "flex";

//     if (acceptBtn) {
//       acceptBtn.addEventListener("click", () => {
//         localStorage.setItem("cookiesAccepted", "all");
//         cookieBanner.style.display = "none";
//       });
//     }

//     if (rejectBtn) {
//       rejectBtn.addEventListener("click", () => {
//         localStorage.setItem("cookiesAccepted", "none");
//         cookieBanner.style.display = "none";
//       });
//     }

//     if (moreInfoLink) {
//       moreInfoLink.addEventListener("click", (e) => {
//         e.preventDefault();
//         window.open("cookies.html", "_blank");
//       });
//     }
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------
  // HAMBURGER MENU
  // ----------------------------
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  if (hamburger && navList) {
    hamburger.addEventListener("click", () => navList.classList.toggle("active"));
  }

  // ----------------------------
  // FIX POLISH TYPOGRAPHY
  // ----------------------------
  function fixPolishWidows(root = document) {
    const elements = root.querySelectorAll("p, li, span, strong");
    elements.forEach(el => {
      el.innerHTML = el.innerHTML.replace(/(\s|^)([aiouwzAIUOWZ])\s+/g, "$1$2&nbsp;");
    });
  }

  // ----------------------------
  // PROJECT DATA
  // ----------------------------
  const projectData = {
   pl: [
{
subtitle: "VIVALDI REIMAGINED",
text: `<span class="highlight">VIVALDI REIMAGINED</span> to autorski projekt obejmujący zarówno
„Cztery pory roku”, jak i rzadziej wykonywane perły epoki baroku, ukazane
w nowoczesnym kontekście artystycznym.<br><br>
<strong>Projekcje świetlne oraz wizualizacje z obrazem i napisami</strong>
wzmacniają przekaz muzyczny, ułatwiają odbiór i budują atrakcyjną warstwę
estetyczno-edukacyjną spektaklu.<br><br>
Przewodnim punktem programu jest cykl koncertów „Cztery pory roku” Antonio Vivaldiego – zaprezentowane 
w nowej interpretacji, która z pełnym szacunkiem 
dla oryginału łączy wierność barokowej formy z twórczą swobodą, pozwalając odkryć te słynne koncerty na nowo.<br><br>

Repertuar może być elastycznie dopasowany do charakteru wydarzenia – od kameralnych koncertów, przez festiwale, po projekty edukacyjne i multi-medialne.`,
},
{
subtitle: "HAYDN REIMAGINED",
text: `<span class="highlight">HAYDN REIMAGINED</span> to autorski projekt muzyczny poświęcony twórczości Josepha Haydna, w którym koncert w całości oparty jest na wykonaniu „Siedmiu ostatnich słów Chrystusa na Krzyżu”.<br>
Utwór ukazany zostaje jako spójna, zamknięta forma narracji muzyczno-słownej, łączącej muzykę Haydna
z cytatami z Ewangelii według św. Łukasza, św. Mateusza oraz św. Jana.<br><br>
Naturalnym kontekstem realizacji <strong>HAYDN REIMAGINED</strong> są wnętrza świątyń, gdzie sakralny charakter przestrzeni wzmacnia duchowy wymiar kompozycji.
Synergia muzyki i słowa prowadzi słuchacza przez kolejne etapy pasyjnej narracji, przygotowując go do pogłębionego, kontemplacyjnego przeżycia Triduum Paschalnego.<br><br>
Całość zachowuje szacunek dla klasycznej formy
i stylistyki epoki, oferując słuchaczowi intensywne, całościowe doświadczenie artystyczne i duchowe.`,
},
],
en: [
{
subtitle: "VIVALDI REIMAGINED",
text: `<span class="highlight">VIVALDI REIMAGINED</span> is an original project encompassing
‘The Four Seasons’ and also lesser-known gems
of the Baroque era presented in a modern artistic context.<br><br>

<strong>Light projections, visualisations and captions</strong> reinforce
the musical message, facilitate reception and build
an attractive aesthetic coupled with educational layer.<br><br>

The highlight of the programme is a series of concerts
of Antonio Vivaldi's ‘The Four Seasons’ - presented
in a new interpretation which, with full respect for the
original, combines fidelity to the Baroque
form with creative freedom, allowing rediscovery
of these famous pieces.<br><br>

The repertoire can be flexibly adapted to the nature
of the event - from chamber concerts and festivals
to educational and multimedia projects. `,
},
{
subtitle: "HAYDN REIMAGINED",
text: `<span class="highlight">HAYDN REIMAGINED</span> is an original project dedicated to the legacy of Joseph Haydn, centering on a complete performance of "The Seven Last Words of Christ on the Cross." The work unfolds as a seamless narrative of music and word, interlacing Haydn’s score with Gospel passages from St. Luke, St. Matthew, and St. John. <strong>HAYDN REIMAGINED</strong> finds its ideal setting within church interiors, where the sacred architecture heightens the spiritual resonance of the composition.<br><br>
This synergy of music and scripture guides the listener through the Passion narrative, fostering a profound, contemplative preparation for the Easter Triduum.<br><br>
While honoring the classical form and period style, the project offers a holistic experience that is as intellectually intense as it is spiritually moving.`,
},
],
};

  const subtitleEls = document.querySelectorAll(".project-subtitle"); // oba <p>
  const textEl = document.querySelector("[data-i18n='project.text']");
  const langButtons = document.querySelectorAll(".lang-switch button");
  let currentProjectIndex = 0;

  // ----------------------------
  // RENDER PROJECT
  // ----------------------------
  function renderProject(lang) {
    if (!textEl || !subtitleEls) return;
    const project = projectData[lang][currentProjectIndex];
    textEl.innerHTML = project.text;

    // aktualizujemy oba <p> po lewej
    subtitleEls.forEach((el, i) => {
      el.textContent = projectData[lang][i].subtitle;
      el.classList.toggle("active", i === currentProjectIndex);
    });

    if (lang === "pl") fixPolishWidows();
  }

  // ----------------------------
  // GO TO PROJECT
  // ----------------------------
  function goToProject(index) {
    const lang = localStorage.getItem("lang") || "pl";
    if (isNaN(index) || index < 0 || index >= projectData[lang].length) return;
    currentProjectIndex = index;
    renderProject(lang);

    const projectSection = document.querySelector("#project");
    if (projectSection) projectSection.scrollIntoView({ behavior: "smooth" });
  }

  // ----------------------------
  // CLICK EVENTS ON LEFT SUBTITLES
  // ----------------------------
  subtitleEls.forEach((el, i) => {
    el.style.cursor = "pointer";
    el.dataset.project = i; // ustawiamy dataset
    el.addEventListener("click", () => goToProject(i));
  });

  // ----------------------------
  // MENU CLICK EVENTS
  // ----------------------------
  const projectNav = document.querySelector(".nav-list"); // rodzic menu projektów
  if (projectNav) {
    projectNav.addEventListener("click", (e) => {
      const link = e.target.closest("[data-project]");
      if (!link) return;
      e.preventDefault();
      const index = parseInt(link.dataset.project, 10);
      goToProject(index);
    });
  }

  // ----------------------------
  // LANGUAGE SUPPORT
  // ----------------------------
  const translations = { pl: {
"hero.title": "SonoreLAB",
"hero.subtitle": "EARLY MUSIC REIMAGINED",
"project.title": "O projektach",
"project.text": `<span class="highlight">VIVALDI REIMAGINED</span> to autorski projekt obejmujący zarówno
„Cztery pory roku”, jak i rzadziej wykonywane perły epoki baroku, ukazane
w nowoczesnym kontekście artystycznym.<br><br>
<strong>Projekcje świetlne oraz wizualizacje z obrazem i napisami</strong>
wzmacniają przekaz muzyczny, ułatwiają odbiór i budują atrakcyjną warstwę
estetyczno-edukacyjną spektaklu.<br><br>
Przewodnim punktem programu jest cykl koncertów „Cztery pory roku”
Antonio Vivaldiego – zaprezentowane w nowej interpretacji, która z pełnym
szacunkiem dla oryginału łączy wierność barokowej formy z twórczą swobodą,
pozwalając odkryć te słynne koncerty na nowo.<br><br>
Repertuar może być elastycznie dopasowany do charakteru wydarzenia –
od kameralnych koncertów, przez festiwale, po projekty edukacyjne
i multi-medialne.`,
"nav.home": "Home",
"nav.project": "O projektach",
"nav.about": "O nas",
"nav.lab": "Sonore LAB",
"nav.recordings": "Nagrania",
"nav.contact": "Kontakt",
"about.title": "O nas",
"about.text": `<strong>Sonore LAB</strong> to sześcioosobowy zespół kameralny –
<strong>kwintet smyczkowy z towarzyszeniem klawesynu</strong> –
powołany z myślą o twórczym dialogu pomiędzy
muzyczną tradycją baroku a współczesnym językiem
artystycznym.
Zespół tworzą doświadczeni instrumentaliści, których łączy
pasja do muzyki dawnej, poszukiwanie nowych form interpretacji
oraz chęć przedstawiania muzycznych arcydzieł nowym odbiorcom.`,
"about.teamTitle": "SKŁAD ZESPOŁU",
"about.teamList": `<li><strong>Gabriela Kubarska</strong> <span>| skrzypce</span></li>
<li><strong>Joanna Zagajewska</strong> <span>| skrzypce</span></li>
<li><strong>Daria Kubik</strong> <span>| klawesyn</span></li>
<li><strong>Szymon Stochniol</strong> <span>| altówka</span></li>
<li><strong>Krzysztof Krawczyk</strong> <span>| wiolonczela</span></li>
<li><strong>Dominik Polak</strong> <span>| kontrabas</span></li>`,
"sonorelab.text": `<strong>Wyjątkowy projekt muzyczny</strong><br>
łączący szlachetność barokowej tradycji z nowoczesnym
brzmieniem i świeżym spojrzeniem na arcydzieła sprzed wieków.<br>
Artyści <strong>podejmują odważny dialog</strong> z historią, tworząc przestrzeń,
w której klasyczna forma spotyka współczesną ekspresję,
improwizację i nowe środki wyrazu.`,
"recordings.title": "Nagrania",
"recordings.link": "Materiały promocyjne - do pobrania",
"contact.title": "Kontakt",
"contact.artisticDirector": "Dyrektor artystyczny",
// Cookie banner
"cookies.text":
"Ta strona używa plików cookies w celach funkcjonalnych i analitycznych. Możesz zaakceptować wszystkie cookies lub dostosować swoje preferencje.",
"cookies.accept": "Akceptuj",
"cookies.reject": "Odrzuć",
"cookies.more": "Dowiedz się więcej",
},
en: {
"hero.title": "Sonore LAB",
"hero.subtitle": "EARLY MUSIC REIMAGINED",
"project.title": "About projects",
"project.text": `<span class="highlight">VIVALDI REIMAGINED</span> is an original project encompassing ‘The Four Seasons’ and also lesser-known gems
of the Baroque era presented in a modern artistic context.<br><br>
<strong>Light projections, visualisations and captions</strong>
reinforce the musical message, facilitate reception and build
an attractive aesthetic coupled with educational layer.<br><br>
The highlight of the programme is a series of concerts of Antonio Vivaldi's ‘The Four Seasons’ - presented
in a new interpretation which, with full respect for the original, combines fidelity to the Baroque
form with creative freedom, allowing rediscovery of these famous pieces.<br><br>
The repertoire can be flexibly adapted to the nature of the event - from chamber concerts and festivals to educational and multimedia projects.`,
"nav.home": "Home",
"nav.project": "About projects",
"nav.about": "About us",
"nav.lab": "Sonore LAB",
"nav.recordings": "Recordings",
"nav.contact": "Contact",
"about.title": "About Us",
"about.text": `<strong>Sonore LAB</strong> is a six-member chamber ensemble –<br>
a string quintet accompanied by a harpsichord
established with the aim of entering into creative dialogue
between the Baroque musical tradition and contemporary artistic language.<br>
The ensemble consists of experienced instrumentalists who share
a passion for early music, the search for new forms of interpretation,
and the desire to bring musical masterpieces to new audiences.`,
"about.teamTitle": "ARTISTS",
"about.teamList": `<li><strong>Gabriela Kubarska</strong> <span>| violin</span></li>
<li><strong>Joanna Zagajewska</strong> <span>| violin</span></li>
<li><strong>Daria Kubik</strong> <span>| harpsichord</span></li>
<li><strong>Szymon Stochniol</strong> <span>| viola</span></li>
<li><strong>Krzysztof Krawczyk</strong> <span>| cello</span></li>
<li><strong>Dominik Polak</strong> <span>| double bass</span></li>`,
"sonorelab.text": `<strong>A unique musical project</strong>
combining the nobility of the Baroque tradition with a modern sound
and a fresh take on centuries-old masterpieces.<br>
The artists <strong>engage in a bold dialogue </strong>with history,
creating a space where classical form meets contemporary expression,
improvisation, and new means of expression.`,
"recordings.title": "Recordings",
"recordings.link": "Google Drive link",
"contact.title": "Contact",
"contact.artisticDirector": "Artistic Director",
// Cookie banner
"cookies.text":
"This website uses cookies for functional and analytical purposes. You can accept all cookies or customize your preferences.",
"cookies.accept": "Accept",
"cookies.reject": "Reject",
"cookies.more": "Learn more",
},
};

  function setLanguage(lang) {
    const translatableElements = document.querySelectorAll("[data-i18n]");
    translatableElements.forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    langButtons.forEach(b => b.classList.remove("active"));
    const activeBtn = document.querySelector(`.lang-switch button[data-lang="${lang}"]`);
    if (activeBtn) activeBtn.classList.add("active");
    localStorage.setItem("lang", lang);
    renderProject(lang);
  }

  const savedLang = localStorage.getItem("lang") || "pl";
  setLanguage(savedLang);

  langButtons.forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

  // ----------------------------
  // COOKIE BANNER
  // ----------------------------
  const cookieBanner = document.getElementById("cookie-banner");
  if (cookieBanner) {
    const acceptBtn = cookieBanner.querySelector("[data-cookie='accept']");
    const rejectBtn = cookieBanner.querySelector("[data-cookie='reject']");
    const moreInfoLink = cookieBanner.querySelector("[data-i18n='cookies.more']");
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) cookieBanner.style.display = "flex";
    if (acceptBtn) acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "all");
      cookieBanner.style.display = "none";
    });
    if (rejectBtn) rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "none");
      cookieBanner.style.display = "none";
    });
    if (moreInfoLink) moreInfoLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.open("cookies.html", "_blank");
    });
  }

  // ----------------------------
  // INITIAL RENDER
  // ----------------------------
  renderProject(savedLang);
});