// Campus Explorer: sample content and frontend-only interactions.
const clubs = [
  {id:"gdg",name:"Google Developer Groups",category:"Technology",icon:"code-2",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",tagline:"Build, learn and connect with developers.",description:"A community for students interested in Google technologies, web development, cloud, Android and open-source projects. Join peer-led sessions, project teams and developer events.",detail:"Meet fellow builders, learn through practical sessions and collaborate on projects. Beginners are welcome; curiosity matters more than experience.",meta:"Developer community"},
  {id:"aiml",name:"AI & Machine Learning Club",category:"AI & ML",icon:"brain-circuit",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",tagline:"Explore the ideas shaping tomorrow.",description:"Discover machine learning, generative AI and data science through discussions, experiments and beginner-friendly projects.",detail:"The club explores responsible AI, Python foundations, model concepts and hands-on mini projects. A good place to ask questions and learn together.",meta:"Learning community"},
  {id:"robotics",name:"Robotics Society",category:"Technology",icon:"bot",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",tagline:"Turn curious ideas into working machines.",description:"A hands-on community for electronics, automation, embedded systems and robotics challenges.",detail:"Collaborate on prototypes, learn about sensors and microcontrollers, and take part in team build sessions.",meta:"Build & make"},
  {id:"e-cell",name:"Entrepreneurship Cell",category:"Technology",icon:"lightbulb",image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",tagline:"Think big. Start small. Build boldly.",description:"A space for aspiring founders to explore ideas, innovation, pitching and the startup ecosystem.",detail:"Take part in idea jams, founder conversations, business model activities and collaborative problem-solving.",meta:"Innovation community"},
  {id:"rang",name:"Cultural Collective",category:"Cultural",icon:"palette",image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",tagline:"Celebrate art, culture and expression.",description:"Bring music, dance, theatre and creative expression together in one welcoming community.",detail:"Whether you perform, organise or simply enjoy the arts, find a space to collaborate and celebrate campus culture.",meta:"Arts & culture"},
  {id:"sports",name:"Campus Sports Club",category:"Sports",icon:"trophy",image:"https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",tagline:"Play together. Grow together.",description:"Connect with students across indoor and outdoor sports, fitness activities and friendly competitions.",detail:"Find teammates, discover campus sports activities and build confidence through participation and teamwork.",meta:"Sports community"},
  {id:"frame",name:"Photography & Media",category:"Cultural",icon:"camera",image:"https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",tagline:"Tell campus stories, one frame at a time.",description:"Explore photography, filmmaking, design and visual storytelling with fellow creatives.",detail:"Share your work, learn creative techniques and collaborate on documenting campus life and student events.",meta:"Creative community"}
];

const events = [
  {id:"web-workshop",name:"Web Development Workshop",category:"Workshops",date:"12 NOV",time:"10:00 AM – 1:00 PM",venue:"Innovation Lab",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",description:"A beginner-friendly introduction to building responsive websites with HTML, CSS and JavaScript.",detail:"Learn how the web works, structure a page with semantic HTML, style it with CSS and add a small interactive feature. Bring a laptop if available.",},
  {id:"ai-bootcamp",name:"AI & ML Bootcamp",category:"Workshops",date:"16 NOV",time:"11:00 AM – 3:00 PM",venue:"Seminar Hall",image:"https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=900&q=80",description:"Explore the fundamentals of artificial intelligence through demos and guided activities.",detail:"A sample introductory session covering AI concepts, practical use cases, responsible development and a guided activity.",},
  {id:"hackathon",name:"Campus Buildathon",category:"Technology",date:"22 NOV",time:"9:00 AM onwards",venue:"Main Auditorium",image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",description:"Team up, solve a campus-inspired problem and turn an idea into a prototype.",detail:"A demo event concept for collaborative problem-solving. Teams brainstorm, prototype and present an idea. No previous hackathon experience required.",},
  {id:"ideathon",name:"Technical Ideathon",category:"Technology",date:"27 NOV",time:"10:30 AM – 2:00 PM",venue:"Project Studio",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",description:"Bring a problem worth solving and pitch a thoughtful technical solution.",detail:"Practice identifying real problems, communicating ideas and getting feedback in a friendly, team-based format.",},
  {id:"design",name:"Design Thinking Lab",category:"Workshops",date:"03 DEC",time:"1:00 PM – 4:00 PM",venue:"Design Room",image:"https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",description:"Learn to approach everyday challenges with empathy, creativity and experimentation.",detail:"Try simple user-research exercises, sketch ideas and build a low-fidelity concept with a small group.",}
];

const resources = [
  {id:"mdn",name:"MDN Web Docs",category:"Resources",icon:"book-open",description:"Clear documentation and guides for HTML, CSS and JavaScript.",url:"https://developer.mozilla.org/",linkLabel:"Explore documentation"},
  {id:"github",name:"GitHub Student",category:"Resources",icon:"github",description:"Learn Git, collaborate on projects and build a public portfolio.",url:"https://education.github.com/pack",linkLabel:"Explore GitHub"},
  {id:"developers",name:"Google for Developers",category:"Resources",icon:"code",description:"Developer tools, learning paths, documentation and community updates.",url:"https://developers.google.com/",linkLabel:"Start learning"},
  {id:"nptel",name:"NPTEL",category:"Resources",icon:"graduation-cap",description:"Online courses and learning material from Indian institutes.",url:"https://nptel.ac.in/",linkLabel:"Browse courses"}
];

const clubsGrid = document.querySelector("#clubsGrid");
const eventsGrid = document.querySelector("#eventsGrid");
const resourcesGrid = document.querySelector("#resourcesGrid");
const searchInput = document.querySelector("#globalSearch");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const resultsSummary = document.querySelector("#resultsSummary");
const detailsDialog = document.querySelector("#detailsDialog");
const registerDialog = document.querySelector("#registerDialog");
const dialogContent = document.querySelector("#dialogContent");
const eventSelect = document.querySelector("#selectedEvent");
let activeFilter = "All";
let searchTerm = "";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);
}

function matches(item) {
  const searchable = [item.name, item.category, item.tagline, item.description, item.detail, item.venue].filter(Boolean).join(" ").toLowerCase();
  const matchesSearch = searchable.includes(searchTerm);
  const matchesCategory = activeFilter === "All" ||
    (activeFilter === "Resources" && item.type === "resource") ||
    (activeFilter === "Events" && item.type === "event") ||
    item.category === activeFilter;
  return matchesSearch && matchesCategory;
}

function clubCard(club) {
  return `<article class="club-card">
    <div class="card-image"><img src="${club.image}" alt="" loading="lazy"><span class="card-category">${escapeHTML(club.category)}</span></div>
    <div class="card-body"><div class="card-meta"><i data-lucide="${club.icon}"></i>${escapeHTML(club.meta)}</div>
      <h4>${escapeHTML(club.name)}</h4><p>${escapeHTML(club.tagline)}</p>
      <div class="card-footer"><button class="text-button" type="button" data-detail-type="club" data-id="${club.id}">View details <i data-lucide="arrow-up-right"></i></button><span class="card-arrow"><i data-lucide="arrow-up-right"></i></span></div>
    </div></article>`;
}

function eventCard(event) {
  const [day, month] = event.date.split(" ");
  return `<article class="event-card">
    <div class="card-image"><img src="${event.image}" alt="" loading="lazy"><span class="card-category">${escapeHTML(event.category)}</span><span class="event-date"><strong>${escapeHTML(day)}</strong><span>${escapeHTML(month)}</span></span></div>
    <div class="card-body"><div class="card-meta"><i data-lucide="calendar-days"></i> SAMPLE EVENT · DEMO ONLY</div>
      <h4>${escapeHTML(event.name)}</h4><div class="event-details"><span><i data-lucide="clock"></i>${escapeHTML(event.time)}</span><span><i data-lucide="map-pin"></i>${escapeHTML(event.venue)}</span></div>
      <p>${escapeHTML(event.description)}</p><div class="card-footer"><button class="text-button" type="button" data-detail-type="event" data-id="${event.id}">Event details <i data-lucide="arrow-up-right"></i></button><button class="text-button" type="button" data-register="${event.id}">Register <i data-lucide="arrow-right"></i></button></div>
    </div></article>`;
}

function resourceCard(resource) {
  return `<article class="resource-card"><span class="resource-icon"><i data-lucide="${resource.icon}"></i></span>
    <h4>${escapeHTML(resource.name)}</h4><p>${escapeHTML(resource.description)}</p>
    <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(resource.linkLabel)} <i data-lucide="arrow-up-right"></i></a>
  </article>`;
}

function render() {
  const clubMatches = clubs.filter(item => matches({...item, type:"club"}));
  const eventMatches = events.filter(item => matches({...item, type:"event"}));
  const resourceMatches = resources.filter(item => matches({...item, type:"resource"}));
  clubsGrid.innerHTML = clubMatches.map(clubCard).join("");
  eventsGrid.innerHTML = eventMatches.map(eventCard).join("");
  resourcesGrid.innerHTML = resourceMatches.map(resourceCard).join("");
  document.querySelector("#clubsEmpty").hidden = clubMatches.length > 0;
  document.querySelector("#eventsEmpty").hidden = eventMatches.length > 0;
  document.querySelector("#resourcesEmpty").hidden = resourceMatches.length > 0;
  const total = clubMatches.length + eventMatches.length + resourceMatches.length;
  resultsSummary.textContent = searchTerm || activeFilter !== "All"
    ? `${total} result${total === 1 ? "" : "s"} found${searchTerm ? ` for “${searchInput.value.trim()}”` : ""}`
    : "Showing all campus discoveries";
  if (window.lucide) window.lucide.createIcons();
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach(button => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  render();
}

filterButtons.forEach(button => button.addEventListener("click", () => setFilter(button.dataset.filter)));
document.querySelector("#clearFilters").addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  setFilter("All");
});
searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  render();
});
document.querySelector("#searchForm").addEventListener("submit", event => {
  event.preventDefault();
  searchTerm = searchInput.value.trim().toLowerCase();
  render();
  document.querySelector("#discover").scrollIntoView({behavior:"smooth"});
});

// One reusable dialog handles club and event details.
function openDetails(type, id) {
  const item = (type === "club" ? clubs : events).find(entry => entry.id === id);
  if (!item) return;
  const isEvent = type === "event";
  const facts = isEvent
    ? `<span class="dialog-fact"><i data-lucide="calendar"></i>${escapeHTML(item.date)} · DEMO</span><span class="dialog-fact"><i data-lucide="clock"></i>${escapeHTML(item.time)}</span><span class="dialog-fact"><i data-lucide="map-pin"></i>${escapeHTML(item.venue)}</span>`
    : `<span class="dialog-fact"><i data-lucide="tag"></i>${escapeHTML(item.category)}</span><span class="dialog-fact"><i data-lucide="users"></i>${escapeHTML(item.meta)}</span>`;
  dialogContent.innerHTML = `<img class="dialog-image" src="${item.image}" alt="">
    <div class="dialog-content-inner"><span class="section-index">${isEvent ? "CAMPUS EVENT · SAMPLE" : "CAMPUS COMMUNITY"}</span>
    <h2 id="dialogTitle">${escapeHTML(item.name)}</h2><p>${escapeHTML(item.description)}</p><div class="dialog-facts">${facts}</div>
    <p>${escapeHTML(item.detail)}</p>${isEvent ? `<button class="button button-dark dialog-action" type="button" data-register="${item.id}">Register for this demo event <i data-lucide="arrow-right"></i></button>` : ""}</div>`;
  detailsDialog.showModal();
  document.body.classList.add("dialog-open");
  if (window.lucide) window.lucide.createIcons();
}

function openRegistration(eventId = "") {
  eventSelect.value = eventId;
  clearErrors();
  document.querySelector("#formSuccess").hidden = true;
  registerDialog.showModal();
  document.body.classList.add("dialog-open");
}

// Fill the select list from the same event data used to render the cards.
events.forEach(event => {
  const option = document.createElement("option");
  option.value = event.id;
  option.textContent = event.name;
  eventSelect.append(option);
});

document.addEventListener("click", event => {
  const detailButton = event.target.closest("[data-detail-type]");
  const registerButton = event.target.closest("[data-register]");
  if (detailButton) openDetails(detailButton.dataset.detailType, detailButton.dataset.id);
  if (registerButton) {
    const eventId = registerButton.dataset.register;
    if (detailsDialog.open) detailsDialog.close();
    openRegistration(eventId);
  }
});

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
  if (!detailsDialog.open && !registerDialog.open) document.body.classList.remove("dialog-open");
}
document.querySelector("#dialogClose").addEventListener("click", () => closeDialog(detailsDialog));
document.querySelector("#registerClose").addEventListener("click", () => closeDialog(registerDialog));
[detailsDialog, registerDialog].forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog.addEventListener("close", () => {
    if (!detailsDialog.open && !registerDialog.open) document.body.classList.remove("dialog-open");
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (detailsDialog.open) closeDialog(detailsDialog);
    if (registerDialog.open) closeDialog(registerDialog);
  }
});

// Simple client-side validation: no network request is made.
const registrationForm = document.querySelector("#registrationForm");
const errorFields = ["nameError", "emailError", "departmentError", "eventError"];
function clearErrors() {
  errorFields.forEach(id => document.getElementById(id).textContent = "");
  ["studentName", "studentEmail", "department", "selectedEvent"].forEach(id => {
    document.getElementById(id).removeAttribute("aria-invalid");
  });
}
function showError(inputId, errorId, message) {
  document.getElementById(errorId).textContent = message;
  document.getElementById(inputId).setAttribute("aria-invalid", "true");
}
registrationForm.addEventListener("submit", event => {
  event.preventDefault();
  clearErrors();
  document.querySelector("#formSuccess").hidden = true;
  const name = document.querySelector("#studentName").value.trim();
  const email = document.querySelector("#studentEmail").value.trim();
  const department = document.querySelector("#department").value.trim();
  const eventId = eventSelect.value;
  let valid = true;

  if (name.length < 2) { showError("studentName", "nameError", "Please enter your name (at least 2 characters)."); valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { showError("studentEmail", "emailError", "Enter a valid email address."); valid = false; }
  if (department.length < 2) { showError("department", "departmentError", "Please enter your college or department."); valid = false; }
  if (!events.some(item => item.id === eventId)) { showError("selectedEvent", "eventError", "Please choose an event."); valid = false; }

  if (!valid) {
    const firstInvalid = registrationForm.querySelector('[aria-invalid="true"]');
    firstInvalid?.focus();
    return;
  }
  document.querySelector("#formSuccess").hidden = false;
  registrationForm.reset();
  eventSelect.value = "";
});

// Accessible mobile navigation.
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) window.lucide.createIcons();
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.innerHTML = '<i data-lucide="menu"></i>';
  if (window.lucide) window.lucide.createIcons();
}));

document.querySelector("#year").textContent = new Date().getFullYear();
render();
