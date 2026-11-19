var EN = {
  nProj: "Projects", nExp: "Experience", nArt: "3D Art", nAbout: "About", nContact: "Contact",
  h1: "Hi, I’m Your Name.<span>I make games in Unity.</span>",
  heroP: "Unity developer who also models in 3D. I like taking care of the whole game, from mechanics to visuals, and shipping builds that run well.",
  bProj: "View projects", bTalk: "Get in touch", cv: "Résumé",
  projH: "Projects",
  projLead: "Games and tools I’ve made. Each one has a video, what I was responsible for, and a link to play it or see the code.",
  fAll: "All", fPro: "Professional projects", fPers: "Personal projects/jams", fOther: "Other",
  thumbGame: "GIF or video of the game", thumbTool: "Screenshot of the tool",
  p1t: "Game title", p1d: "One sentence about what the game is and what your role was.",
  p2t: "Another game", p2d: "Highlight a technical challenge you solved, such as pathfinding, optimization or multiplayer.",
  p3t: "Editor tool", p3d: "A reusable plugin or system that speeds up a team’s work in Unity.",
  p4t: "Game with original art", p4d: "A project where you did the programming and the 3D models too.",
  expH: "Experience", expLead: "Where I’ve worked, most recent first.",
  w1: "2024 – present", w3: "2021 – present",
  j1t: "Unity Developer", co1: "Company name",
  j1d: "Describe in two or three sentences what you built and the result: gameplay systems, tools, optimization, game launch.",
  j2t: "Junior Developer", co2: "Another company",
  j2d: "Mention the type of project, the team size and your main responsibility.",
  j3t: "Freelancer, development and 3D art",
  j3d: "Projects for clients in different places, delivering 3D models and Unity prototypes.",
  cvFull: "View full résumé",
  artH: "3D Art", artLead: "Models, textures and renders. Click a GIF to see the full work.",
  a1: "Render or turntable", a2: "Model", a3: "Character", a4: "Environment or prop", a5: "Texture and material", a6: "Wireframe",
  artNote: "Put your square GIFs (for example, 512×512) in the <code>gifs/</code> folder and swap each block’s <code>href</code> for the link to the work.",
  aboutH: "About me",
  about1: "Write two or three short paragraphs: how long you’ve worked with Unity, what kind of games you like making and what you’re looking for now.",
  about2: "Also mention your 3D art experience. Programming and modeling in the same person is an edge for small teams.",
  toolsH: "Tools", toolsP: "What I use day to day.",
  contactH: "Let’s talk", contactLead: "I’m open to job offers and game projects.",
  foot: "© 2026 Your Name",
  navLabel: "Main", filterLabel: "Filter projects"
};
var TITLE = { pt: document.title, en: "Your Name – Unity Developer and 3D Artist" };

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
