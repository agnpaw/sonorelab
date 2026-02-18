document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------
  // HAMBURGER MENU
  // ----------------------------
  const hamburger = document.querySelector('.hamburger'); 
  const navList = document.querySelector('.nav-list'); 
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => { 
      navList.classList.toggle('active'); 
    });
  }

  // ----------------------------
  // TRANSLATIONS
  // ----------------------------
  const translations = {
    pl: {
      "hero.title": "Sonore LAB",
      "hero.subtitle": "EARLY MUSIC REIMAGINED",
      "project.title": "O projekcie",
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
      "nav.project": "O projekcie",
      "nav.about": "O nas",
      "nav.lab": "Sonore LAB",
      "nav.recordings": "Nagrania",
      "nav.contact": "Kontakt",
      "about.title": "O nas",
      "about.text": `<strong>SonoreLAB</strong> to sześcioosobowy zespół kameralny –
<strong>kwintet smyczkowy z towarzyszeniem klawesynu</strong> –
powołany z myślą o twórczym dialogu pomiędzy
muzyczną tradycją baroku a współczesnym językiem
artystycznym.<br><br>
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
brzmieniem i świeżym spojrzeniem na arcydzieła sprzed wieków.<br><br>
Artyści <strong>podejmują odważny dialog</strong> z historią, tworząc przestrzeń,
w której klasyczna forma spotyka współczesną ekspresję,
improwizację i nowe środki wyrazu.`,
      "recordings.title": "Nagrania",
      "recordings.link": "Link do Google Dysk",
      "contact.title": "Kontakt",
      "contact.artisticDirector": "Dyrektor artystyczny",
      // Cookie banner
      "cookies.text": "Ta strona używa plików cookies w celach funkcjonalnych i analitycznych. Możesz zaakceptować wszystkie cookies lub dostosować swoje preferencje.",
      "cookies.accept": "Akceptuj",
      "cookies.reject": "Odrzuć",
      "cookies.more": "Dowiedz się więcej"
    },
    en: {
      "hero.title": "Sonore LAB",
      "hero.subtitle": "EARLY MUSIC REIMAGINED",
      "project.title": "The Project",
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
      "nav.project": "The Project",
      "nav.about": "About us",
      "nav.lab": "Sonore LAB",
      "nav.recordings": "Recordings",
      "nav.contact": "Contact",
      "about.title": "About Us",
      "about.text": `<strong>SonoreLAB</strong> is a six-member chamber ensemble –
<strong>a string quintet accompanied by a harpsichord</strong> –
established with the aim of entering into creative dialogue
between the Baroque musical tradition and contemporary artistic language.<br><br>
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
      "sonorelab.text": `<strong>A unique musical project</strong><br>
combining the nobility of the Baroque tradition with a modern sound
and a fresh take on centuries-old masterpieces.<br><br>
The artists engage in a <strong>bold dialogue with history</strong>,
creating a space where classical form meets contemporary expression,
improvisation, and new means of expression.`,
      "recordings.title": "Recordings",
      "recordings.link": "Google Drive link",
      "contact.title": "Contact",
      "contact.artisticDirector": "Artistic Director",
      // Cookie banner
      "cookies.text": "This website uses cookies for functional and analytical purposes. You can accept all cookies or customize your preferences.",
      "cookies.accept": "Accept",
      "cookies.reject": "Reject",
      "cookies.more": "Learn more"
    }
  };

  // ----------------------------
  // SET LANGUAGE
  // ----------------------------
  const langButtons = document.querySelectorAll('.lang-switch button');
  const translatableElements = document.querySelectorAll('[data-i18n]');

  function setLanguage(lang) {
    translatableElements.forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    langButtons.forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.lang-switch button[data-lang="${lang}"]`);
    if(activeBtn) activeBtn.classList.add('active');

    localStorage.setItem('lang', lang);

    // Update cookie banner texts dynamically
    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
      const cookieText = cookieBanner.querySelector("[data-i18n='cookies.text']");
      const acceptBtn = cookieBanner.querySelector("[data-cookie='accept']");
      const rejectBtn = cookieBanner.querySelector("[data-cookie='reject']");
      const moreInfoLink = cookieBanner.querySelector("[data-i18n='cookies.more']");
      if(cookieText) cookieText.innerHTML = translations[lang]["cookies.text"];
      if(acceptBtn) acceptBtn.innerHTML = translations[lang]["cookies.accept"];
      if(rejectBtn) rejectBtn.innerHTML = translations[lang]["cookies.reject"];
      if(moreInfoLink) moreInfoLink.innerHTML = translations[lang]["cookies.more"];
    }
  }

  langButtons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
  const savedLang = localStorage.getItem('lang') || 'pl';
  setLanguage(savedLang);

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

    if (acceptBtn) {
      acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "all");
        cookieBanner.style.display = "none";
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "none");
        cookieBanner.style.display = "none";
      });
    }

    if (moreInfoLink) {
      moreInfoLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("cookies.html", "_blank");
      });
    }
  }

});
