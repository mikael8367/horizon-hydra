const games = [
 {name:"Minecraft",category:"Sandbox",symbol:"M",tag:"CRIATIVO",desc:"Construa seu próprio mundo.",url:"https://www.minecraft.net/",art:"linear-gradient(135deg,#3b6e43,#172e20)"},
 {name:"Stardew Valley",category:"Indie",symbol:"SV",tag:"RELAXANTE",desc:"Crie uma vida no campo.",url:"https://www.stardewvalley.net/",art:"linear-gradient(135deg,#b88646,#4b673c)"},
 {name:"Terraria",category:"Aventura",symbol:"T",tag:"EXPLORAÇÃO",desc:"Aventura em um mundo 2D.",url:"https://terraria.org/",art:"linear-gradient(135deg,#397d56,#233c6a)"},
 {name:"Hades",category:"Ação",symbol:"H",tag:"ROGUELIKE",desc:"Lute para escapar do submundo.",url:"https://store.steampowered.com/app/1145360/Hades/",art:"linear-gradient(135deg,#a43d32,#351d3e)"},
 {name:"Celeste",category:"Indie",symbol:"C",tag:"PLATAFORMA",desc:"Uma jornada até o topo.",url:"https://www.celestegame.com/",art:"linear-gradient(135deg,#3979b9,#d27b9d)"},
 {name:"No Man’s Sky",category:"Aventura",symbol:"N",tag:"ESPAÇO",desc:"Explore um universo infinito.",url:"https://www.nomanssky.com/",art:"linear-gradient(135deg,#de7a40,#3c427f)"},
 {name:"Portal 2",category:"Ação",symbol:"P2",tag:"PUZZLE",desc:"Resolva enigmas com portais.",url:"https://store.steampowered.com/app/620/Portal_2/",art:"linear-gradient(135deg,#448caa,#303d50)"},
 {name:"The Sims 4",category:"Sandbox",symbol:"S4",tag:"SIMULAÇÃO",desc:"Crie histórias do seu jeito.",url:"https://www.ea.com/games/the-sims/the-sims-4",art:"linear-gradient(135deg,#54a75e,#266eac)"},
 {name:"Among Us",category:"Indie",symbol:"AU",tag:"SOCIAL",desc:"Descubra quem está mentindo.",url:"https://www.innersloth.com/games/among-us/",art:"linear-gradient(135deg,#a84958,#4b2a60)"},
 {name:"Hollow Knight",category:"Aventura",symbol:"HK",tag:"METROIDVANIA",desc:"Descubra um reino esquecido.",url:"https://www.hollowknight.com/",art:"linear-gradient(135deg,#4d6480,#1d263a)"},
 {name:"Trackmania",category:"Ação",symbol:"TM",tag:"CORRIDA",desc:"Corra em pistas desafiadoras.",url:"https://www.trackmania.com/",art:"linear-gradient(135deg,#d4a52c,#416d4c)"},
 {name:"OpenTTD",category:"Sandbox",symbol:"OT",tag:"ESTRATÉGIA",desc:"Construa uma rede de transportes.",url:"https://www.openttd.org/",art:"linear-gradient(135deg,#8b8b4c,#375e4c)"}
];
const grid=document.querySelector("#gameGrid"),search=document.querySelector("#searchInput"),empty=document.querySelector("#emptyState"),count=document.querySelector("#resultCount"),gameCount=document.querySelector("#gameCount");
let activeCategory="Todos";
function render(){const q=search.value.trim().toLocaleLowerCase("pt-BR");const filtered=games.filter(g=>(activeCategory==="Todos"||g.category===activeCategory)&&[g.name,g.category,g.desc].some(v=>v.toLocaleLowerCase("pt-BR").includes(q)));grid.innerHTML=filtered.map((g,i)=>`<article class="game-card"><div class="game-art" style="--art:${g.art}"><span class="game-number">HORIZON / ${String(i+1).padStart(2,"0")}</span><span class="game-symbol">${g.symbol}</span><span class="game-tag">${g.tag}</span></div><div class="game-info"><h3>${g.name}</h3><p>${g.desc}</p><div class="game-footer"><span class="game-category">${g.category}</span><a class="game-open" href="${g.url}" target="_blank" rel="noopener noreferrer">Página oficial ↗</a></div></div></article>`).join("");empty.hidden=filtered.length!==0;count.textContent=`${filtered.length} ${filtered.length===1?"jogo":"jogos"}`;gameCount.textContent=games.length}
function setCategory(category){activeCategory=category;document.querySelectorAll("[data-category]").forEach(b=>b.classList.toggle("active",b.dataset.category===category));render()}
document.querySelectorAll("[data-category]").forEach(b=>b.addEventListener("click",()=>setCategory(b.dataset.category)));
search.addEventListener("input",render);
document.querySelector("#resetSearch").addEventListener("click",()=>{search.value="";setCategory("Todos")});
document.querySelector("#menuToggle").addEventListener("click",()=>document.querySelector("#sidebar").classList.toggle("open"));
document.querySelectorAll(".nav-link[href]").forEach(a=>a.addEventListener("click",()=>{document.querySelectorAll(".nav-link[href]").forEach(n=>n.classList.remove("active"));a.classList.add("active");document.querySelector("#crumb").textContent=a.textContent.trim();document.querySelector("#sidebar").classList.remove("open")}));
document.addEventListener("keydown",e=>{if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();search.focus()}if(e.key==="Escape"){search.blur();document.querySelector("#sidebar").classList.remove("open")}});
document.querySelector("#year").textContent=new Date().getFullYear();render();