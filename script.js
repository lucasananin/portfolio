var EN = {
  // Navigation
  nProj: "Projects", nExp: "Experience", nArt: "3D Art", nAbout: "About", nContact: "Contact",

  // Hero
  h1: "Hi, I’m Lucas.<span>I make games in Unity.</span>",
  heroP: "Unity developer since 2019 and hobbyist artist. I like working on every stage of game development, from creating mechanics to visuals, always aiming to deliver well-optimized builds.",
  bProj: "View projects", bTalk: "Get in touch",

  // Projects
  projH: "Projects",
  projLead: "Main games, tools and other collaborations I’ve worked on.",
  fAll: "All", fPro: "Professional", fPers: "Personal/Jams", fOther: "Other",
  arcaneD: "Merge objects to create new items in this game where I developed multiple systems, from pre- to post-production.",
  logicD: "Nonogram logic puzzle in which I worked on porting systems such as [controls, UI, save/load] to the Nintendo Switch version.",
  tapD: "Casual action game in which I worked on the Steam port, bug fixing and [performance/loading/memory] optimizations.",
  galacticD: "2D top-down shooter in which I was responsible for gameplay and 2D art, from [characters, environments, effects] to combat systems.",
  stingD: "Mini metroidvania made in a game jam, where I worked as programmer and leader of an international team.",
  squareD: "Turn-based strategy game I developed as a study project to practice [turn system, AI, pathfinding] in [Unity].",
  catalinaD: "360° video produced in partnership with the Brazilian Air Force (FAB) Memorial in the Amazon, simulating a flight aboard the Catalina aircraft, in which I was responsible for [programming, editing].",
  vidT: "Getting to know the tools – Unity",
  vidD: "Educational video about the Unity engine, produced in partnership with the Beljogos YouTube channel, in which I was responsible for the script and recording.",

  // Experience
  expH: "Experience", expLead: "Where I’ve worked, most recent first.",
  w1: "2025 – present",
  j1t: "Unity Developer", co1: "Freelancer",
  j1d: "Development of playable prototypes and gameplay systems in C# for PC, Mobile and Web platforms. Maintenance and evolution of existing projects, including bug fixing, code refactoring and implementation of new features. Remote collaboration with clients and international teams, aiming to deliver quality solutions within the agreed deadlines.",
  j2t: "Unity Programmer", co2: "Space Bit Games",
  j2d: "Worked on developing gameplay systems in Unity using C#, implementing user interfaces (UI) and responsive layouts for mobile games, and optimizing performance for Mobile and PC platforms. I also worked on integrating localization systems with multi-language support, fixing bugs in production and improving game stability. During this period, I collaborated with cross-functional teams of 3 to 6 people.",

  // 3D Art
  artH: "3D Art", artLead: "Models and animations I’ve made. Click to see the full post.",
  a1: "Render or turntable", a2: "Model", a3: "Character", a4: "Environment or prop", a5: "Texture and material",

  // About
  aboutH: "About me",
  about1: "I’ve worked in game development with Unity since 2019, with experience in C# and building gameplay systems for different platforms. I enjoy creating games with interesting mechanics and interactive experiences, taking part in different stages of development, from programming to visual implementation.",
  about2: "Besides programming, I also have interest and experience in 3D art and modeling, which lets me contribute to different areas of game production. I’m currently looking for new opportunities to develop my skills, collaborate with creative teams and take part in challenging projects in the games industry.",
  toolsH: "Tools",

  // Contact / footer
  contactH: "Let’s talk", contactLead: "I’m open to job offers and game projects.",
  foot: "© 2026 Lucas Bernard",

  // Accessibility labels
  navLabel: "Main", filterLabel: "Filter projects"

  // ---------------------------------------------------------------
  // Keys for HTML blocks that are currently commented out in index.html.
  // Copy them back into the object above if you uncomment those blocks.
  // ---------------------------------------------------------------
  // cv: "Résumé",
  // cvFull: "View full résumé",
  // w3: "2021 – present",
  // j3t: "Freelancer, development and 3D art",
  // j3d: "Projects for clients in different places, delivering 3D models and Unity prototypes.",
  // a6: "Wireframe",
  // artNote: "Put your square GIFs (for example, 512×512) in the <code>gifs/</code> folder and swap each block’s <code>href</code> for the link to the work.",
  // toolsP: "What I use day to day.",
  // p4t: "Game with original art",
  // p4d: "A project where you did the programming and the 3D models too.",
};
var TITLE = { pt: document.title, en: "Lucas Bernard - Portfolio" };

function setLang(l) {
  document.documentElement.lang = l === 'en' ? 'en' : 'pt-BR';
  document.title = TITLE[l];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    if (el.dataset.pt === undefined) el.dataset.pt = el.innerHTML;
    el.innerHTML = l === 'en' ? EN[el.dataset.i18n] : el.dataset.pt;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    if (el.dataset.ptAria === undefined) el.dataset.ptAria = el.getAttribute('aria-label');
    el.setAttribute('aria-label', l === 'en' ? EN[el.dataset.i18nAria] : el.dataset.ptAria);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    if (el.dataset.ptAlt === undefined) el.dataset.ptAlt = el.getAttribute('alt');
    el.setAttribute('alt', l === 'en' ? EN[el.dataset.i18nAlt] : el.dataset.ptAlt);
  });
  document.querySelectorAll('.lbtn').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === l) });
  try { localStorage.setItem('lang', l) } catch (e) { }
}
document.querySelectorAll('.lbtn').forEach(function (b) {
  b.addEventListener('click', function () { setLang(b.dataset.l) });
});

document.querySelectorAll('.filters .chip').forEach(function (chip) {
  chip.addEventListener('click', function () {
    var f = chip.dataset.f;
    document.querySelectorAll('.filters .chip').forEach(function (c) { c.setAttribute('aria-pressed', c === chip) });
    document.querySelectorAll('.card').forEach(function (card) {
      card.hidden = !(f === 'todos' || card.dataset.cat === f);
    });
  });
});
document.querySelectorAll('.art img').forEach(function (img) {
  img.addEventListener('error', function () { img.remove() });
  if (img.complete && img.naturalWidth === 0) { img.remove() }
});

var saved = null;
try { saved = localStorage.getItem('lang') } catch (e) { }
setLang(saved || ((navigator.language || 'pt').slice(0, 2) === 'pt' ? 'pt' : 'en'));
