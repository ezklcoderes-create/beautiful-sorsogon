const destinations = [
      {name:"Rompeolas Baywalk",town:"Sorsogon City",category:"City",type:"Waterfront",desc:"A breezy waterfront promenade along Sorsogon Bay, ideal for a relaxed walk, sea views and catching the sunset.",img:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80"},
      {name:"Museo Sorsogon",town:"Sorsogon City",category:"Culture",type:"Museum",desc:"Explore the province's story through exhibits inside the restored Old Provincial Jail building at the Capitol Compound.",img:"https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=80"},
      {name:"Pepita Park",town:"Sorsogon City",category:"City",type:"Landmark",desc:"A roadside stop known for its crab-themed landmark and views toward Sorsogon Bay. A quick photo stop for travellers.",img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80"},
      {name:"Paguriran Island & Lagoon",town:"Bacon District, Sorsogon City",category:"Beach",type:"Island & lagoon",desc:"A coastal attraction in Barangay Sawanga known for a rocky islet and a natural lagoon. Access can depend on tides and local conditions.",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"},
      {name:"Whale Shark Experience",town:"Donsol",category:"Nature",type:"Wildlife experience",desc:"Donsol is known for responsible, guide-led encounters with whale sharks (butanding). The usual season is November to early June, with sightings never guaranteed.",img:"https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=900&q=80"},
      {name:"Donsol Firefly River",town:"Donsol",category:"Nature",type:"River adventure",desc:"Enjoy an after-sunset river cruise and look for fireflies among the riverside trees. Confirm current tours and river conditions locally.",img:"https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80"},
      {name:"Bulusan Lake",town:"Bulusan",category:"Nature",type:"Lake & rainforest",desc:"A peaceful lake surrounded by the lush landscape of Bulusan Volcano Natural Park. Check park access and activity availability before visiting.",img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"},
      {name:"Subic Pink Beach",town:"Matnog",category:"Beach",type:"Island beach",desc:"A boat-access beach on Calintaan Island, known for its subtle pinkish sand and clear coastal water. Arrange boats and local guidance before your trip.",img:"https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80"},
      {name:"Juag Fish Sanctuary",town:"Matnog",category:"Nature",type:"Marine sanctuary",desc:"A community-managed marine attraction where visitors can learn about coastal life. Follow local rules and avoid touching or disturbing marine animals.",img:"https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=900&q=80"},
      {name:"Barcelona Ruins Park",town:"Barcelona",category:"Culture",type:"Heritage site",desc:"A coastal heritage stop near the town's historic church area, with remnants and landmarks that tell stories of Barcelona's past.",img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80"},
      {name:"Rizal Beach",town:"Gubat",category:"Beach",type:"Surf & seaside",desc:"A popular coastal area in Gubat. Enjoy the shoreline and, when conditions are suitable, explore the town's surf culture with local guidance.",img:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80"},
      {name:"Irosin Hot Springs",town:"Irosin",category:"Nature",type:"Hot spring",desc:"Unwind in the hot-spring area around Irosin, a town known for its geothermal waters. Contact individual resorts for current rates and facilities.",img:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"},
      {name:"Pilar Sandbar",town:"Pilar",category:"Beach",type:"Sandbar",desc:"A coastal sandbar experience in Pilar. Conditions and visibility change with tides and weather, so arrange a local boat and check conditions first.",img:"https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80"},
      {name:"Bagatao Island",town:"Magallanes",category:"Culture",type:"Island heritage",desc:"An island with an important place in Sorsogon's maritime history, associated with a historic Spanish-era shipyard.",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"},
      {name:"Bahay na Bato",town:"Juban",category:"Culture",type:"Heritage houses",desc:"Discover ancestral-house architecture and local heritage in Juban. Respect private property and ask before entering or photographing homes.",img:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80"},
      {name:"Prieto Diaz Mangroves",town:"Prieto Diaz",category:"Nature",type:"Mangrove ecosystem",desc:"Explore the coastal mangrove environment and learn why these ecosystems matter for marine life and shoreline protection.",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80"}
    ];

    const grid = document.getElementById("spotGrid");
    const searchInput = document.getElementById("searchInput");
    let activeFilter = "All";

    function renderSpots(){
      const query = searchInput.value.toLowerCase().trim();
      const shown = destinations.filter(d => (activeFilter==="All" || d.category===activeFilter) &&
        (d.name+" "+d.town+" "+d.type+" "+d.desc).toLowerCase().includes(query));
      grid.innerHTML = shown.length ? shown.map((d) => {
        const index = destinations.indexOf(d);
        return `<article class="spot-card">
          <div class="spot-photo"><img src="${d.img}" alt="${d.name} (illustrative image)" loading="lazy"><span class="tag">${d.type}</span></div>
          <div class="spot-body"><div class="spot-location">${d.town}</div><h3>${d.name}</h3><p>${d.desc}</p>
          <div class="spot-foot"><small>Explore Sorsogon</small><button class="text-link" data-detail="${index}">View details ↗</button></div></div>
        </article>`;
      }).join("") : `<div class="no-results">No destinations found. Try another keyword or category.</div>`;
      grid.querySelectorAll("[data-detail]").forEach(btn => btn.addEventListener("click",()=>openDetails(Number(btn.dataset.detail))));
    }

    function openDetails(index){
      const d=destinations[index];
      document.getElementById("modalImage").src=d.img;
      document.getElementById("modalImage").alt=d.name+" (illustrative image)";
      document.getElementById("modalLocation").textContent=d.town+" · "+d.type;
      document.getElementById("modalTitle").textContent=d.name;
      document.getElementById("modalDescription").textContent=d.desc+" Please confirm current access, schedules, fees and visitor rules with the local tourism office before travelling.";
      document.getElementById("modalMap").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(d.name+" "+d.town+" Sorsogon Philippines");
      document.getElementById("spotModal").classList.add("show");
      document.body.style.overflow="hidden";
    }
    function closeDetails(){document.getElementById("spotModal").classList.remove("show");document.body.style.overflow="";}
    document.getElementById("closeModal").addEventListener("click",closeDetails);
    document.getElementById("spotModal").addEventListener("click",e=>{if(e.target.id==="spotModal")closeDetails()});
    document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDetails()});
    document.getElementById("filters").querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
      activeFilter=btn.dataset.filter;
      document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));
      renderSpots();
    }));
    searchInput.addEventListener("input",renderSpots);
    document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
    document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open")));
    const toTop=document.getElementById("toTop");
    window.addEventListener("scroll",()=>toTop.classList.toggle("show",window.scrollY>500));
    toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));


    // Public local-government contact directory for all 15 Sorsogon LGUs.
    // General LGU email is labelled clearly; direct tourism-office contacts only where verified.
    const municipalityContacts = [
      {name:"Barcelona",type:"Municipality",email:"wework.barcelonaph@yahoo.com",about:"Explore coastal heritage, historic stone structures and traditional local crafts.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Bulan",type:"Municipality",email:"lgubulan@gmail.com",about:"A major coastal town known for fishing, agriculture and its lively local community.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Bulusan",type:"Municipality",email:"lgu.bulusan@yahoo.com",about:"Gateway to Bulusan Lake, mountain scenery, springs and protected natural areas.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Casiguran",type:"Municipality",email:"casiguranmio@gmail.com",about:"Discover the historic town and its coastal and agricultural communities.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Castilla",type:"Municipality",email:"progresibonglgucastilla@gmail.com",about:"A Sorsogon Bay town with forest products, agriculture and coastal scenery.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Donsol",type:"Municipality",email:"tourism@donsol.gov.ph",phone:"+63917 322 6109",about:"Ask the Donsol Tourism Office about whale shark interaction, firefly river tours, guides and accommodation.",contactType:"Direct Tourism Office",source:"https://www.donsol.gov.ph/Tourism.html"},
      {name:"Gubat",type:"Municipality",email:"gubatsorsogon.lgu@gmail.com",about:"Known for surf culture, beaches and coastal community experiences.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Irosin",type:"Municipality",email:"municipalityofirosin@gmail.com",about:"An inland destination known for its valley landscape, hot springs and agricultural heritage.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Juban",type:"Municipality",email:"lgujuban123@gmail.com",about:"Explore ancestral houses, heritage architecture and local traditions.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Magallanes",type:"Municipality",email:"contact@magallanessorsogon.gov.ph",about:"Visit historic Gibalon and learn about the town's maritime heritage and Bagatao Island.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Matnog",type:"Municipality",email:"matnogsorsogon.lgu@gmail.com",about:"A southern gateway to island trips, beaches and coastal attractions. Check boat and sea conditions.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Pilar",type:"Municipality",email:"pilarsor.mayor@gmail.com",about:"A coastal town with shipbuilding heritage and access to island and marine attractions.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Prieto Diaz",type:"Municipality",email:"lce.prietodiaz@yahoo.com",about:"Discover coastal scenery, mangrove areas and local fishing communities.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Santa Magdalena",type:"Municipality",email:"lgu.smmo@gmail.com",about:"A quiet coastal destination known for beaches and fishing communities.",contactType:"LGU email",source:"https://sorsogon.gov.ph/tourism/interactive-map/"},
      {name:"Sorsogon City",type:"City",email:"sorsogon.citytourism@gmail.com",phone:"+63 919 991 2289",officer:"Joni Asphasia O. Jao",about:"Contact the City Tourism, Culture and Arts Office for city attractions, visitor guidance and tourism-related inquiries.",contactType:"City Tourism Office",source:"https://sorsogoncity.gov.ph/wp-content/uploads/2023/11/Sorsogon-City-Citizens-Charter-2nd-Edition.pdf"}
    ];
    const municipalityGrid=document.getElementById("municipalityGrid");
    function renderMunicipalities(){
      const q=document.getElementById("municipalitySearch").value.toLowerCase().trim();
      const type=document.getElementById("municipalityType").value;
      const rows=municipalityContacts.filter(m=>(type==="All"||m.type===type)&&(m.name+" "+m.about).toLowerCase().includes(q));
      municipalityGrid.innerHTML=rows.length?rows.map(m=>{
        const map="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(m.name+" Sorsogon Philippines");
        return `<article class="municipality-card">
          <span class="municipality-kind">${m.type} · Sorsogon Province</span>
          <h3>${m.name}</h3>
          <p>${m.about}</p>
          ${m.officer?`<div class="contact-label">Publicly listed tourism officer</div><div class="contact-value">${m.officer}</div>`:""}
          <div class="contact-label" style="margin-top:12px">${m.contactType}</div>
          <div class="contact-value">${m.email}</div>
          ${m.phone?`<div class="contact-value" style="margin-top:5px">${m.phone}</div>`:""}
          <div class="municipality-actions"><a href="mailto:${m.email}?subject=${encodeURIComponent("Tourism inquiry - "+m.name+", Sorsogon")}">Email LGU ↗</a>${m.phone?`<a href="tel:${m.phone.replace(/[^+0-9]/g,"")}">Call office ↗</a>`:""}<a href="${map}" target="_blank" rel="noopener">Map ↗</a><a href="${m.source}" target="_blank" rel="noopener">Source ↗</a></div>
        </article>`;
      }).join(""):'<div class="no-results">No local government found. Try another search.</div>';
    }
    document.getElementById("municipalitySearch").addEventListener("input",renderMunicipalities);
    document.getElementById("municipalityType").addEventListener("change",renderMunicipalities);
    renderMunicipalities();

    // Accommodation directory: contact each property to verify current rates and availability.
    const accommodations = [
      {name:"Fernando's Hotel",town:"Sorsogon City",kind:"Hotel",desc:"A city-based hotel option for visitors who want a convenient base in the provincial capital.",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"},
      {name:"Antonio's Bed and Breakfast Hotel",town:"Sorsogon City",kind:"Bed & breakfast",desc:"A bed-and-breakfast option in the city, suitable to consider for a central overnight stay.",img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"},
      {name:"Siama Hotel",town:"Sorsogon City",kind:"Boutique hotel",desc:"A boutique-style hotel in a garden setting. Contact the property for room types and current facilities.",img:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"},
      {name:"Villa Isabel Hotel",town:"Sorsogon City",kind:"Hotel",desc:"A city hotel with accommodation and on-site facilities. Confirm room availability and inclusions directly.",img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"},
      {name:"Vitton & Woodland Beach Resorts",town:"Donsol",kind:"Beach resort",desc:"A beach-resort option in Dancalan, Donsol, convenient to explore the town's coastal and marine activities.",img:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"},
      {name:"Elysia Beach Resort",town:"Donsol",kind:"Beach resort",desc:"A Donsol beach-resort option. Check directly for current packages, room categories and availability.",img:"https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80"},
      {name:"Casa Sereno Spring Resort",town:"Irosin",kind:"Spring resort",desc:"A resort option in Irosin for travellers planning a relaxing stay near the town's hot-spring attractions.",img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"},
      {name:"Baia Nest",town:"Gubat",kind:"Villa / guest stay",desc:"A villa-style stay in Gubat for visitors who want to explore the town and nearby coast.",img:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"},
      {name:"The Point at Beata Beach & Sanctuary",town:"Santa Magdalena",kind:"Beach resort",desc:"A coastal resort option in Santa Magdalena for a quieter seaside getaway.",img:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80"}
    ];
    const stayGrid = document.getElementById("stayGrid");
    stayGrid.innerHTML = accommodations.map(a => {
      const q = encodeURIComponent(a.name+" "+a.town+" Sorsogon Philippines");
      return `<article class="stay-card"><div class="stay-image"><img src="${a.img}" alt="Illustrative accommodation photo" loading="lazy"><span class="stay-type">${a.kind}</span></div><div class="stay-content"><div class="stay-location">${a.town}</div><h3>${a.name}</h3><p>${a.desc}</p><div class="stay-links"><a href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">View map ↗</a><a href="https://www.google.com/search?q=${q}+booking" target="_blank" rel="noopener">Check booking ↗</a></div></div></article>`;
    }).join("");

    // Activity calendar stores visitor-created plans in this browser only.
    const calendarGrid = document.getElementById("calendarGrid");
    const monthLabel = document.getElementById("calendarMonth");
    const selectedLabel = document.getElementById("selectedDateLabel");
    const eventList = document.getElementById("eventList");
    const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let calendarCursor = new Date();
    calendarCursor.setDate(1);
    let selectedDate = new Date();
    const dateKey = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
    const readEvents = () => { try { return JSON.parse(localStorage.getItem("sorsogonTripEvents") || "{}"); } catch(e) { return {}; } };
    const writeEvents = events => localStorage.setItem("sorsogonTripEvents", JSON.stringify(events));
    function renderCalendar(){
      const year=calendarCursor.getFullYear(), month=calendarCursor.getMonth();
      monthLabel.textContent=calendarCursor.toLocaleDateString("en-PH",{month:"long",year:"numeric"});
      calendarGrid.innerHTML=dayNames.map(d=>`<div class="calendar-dayname">${d}</div>`).join("");
      const firstDay=new Date(year,month,1).getDay();
      const daysInMonth=new Date(year,month+1,0).getDate();
      const prevDays=new Date(year,month,0).getDate();
      const events=readEvents();
      for(let i=0;i<42;i++){
        let day, date, inMonth=true;
        if(i<firstDay){day=prevDays-firstDay+i+1;date=new Date(year,month-1,day);inMonth=false;}
        else if(i>=firstDay+daysInMonth){day=i-(firstDay+daysInMonth)+1;date=new Date(year,month+1,day);inMonth=false;}
        else {day=i-firstDay+1;date=new Date(year,month,day);}
        const key=dateKey(date), isToday=key===dateKey(new Date()), isSelected=key===dateKey(selectedDate);
        const hasEvents=(events[key]||[]).length>0;
        const btn=document.createElement("button");
        btn.type="button";
        btn.className="calendar-date"+(!inMonth?" muted":"")+(isToday?" today":"")+(isSelected?" selected":"");
        btn.innerHTML=`<span class="date-num">${day}</span>${hasEvents?'<span class="event-dot"></span>':''}`;
        btn.setAttribute("aria-label",date.toDateString());
        btn.addEventListener("click",()=>{selectedDate=date;renderCalendar();renderEventList();});
        calendarGrid.appendChild(btn);
      }
      selectedLabel.textContent=selectedDate.toLocaleDateString("en-PH",{weekday:"long",month:"long",day:"numeric",year:"numeric"});
    }
    function renderEventList(){
      const events=readEvents(), key=dateKey(selectedDate), items=events[key]||[];
      eventList.innerHTML=items.length?items.map((e,i)=>`<div class="event-item"><button class="event-delete" data-delete="${i}" type="button">Remove</button><strong>${escapeText(e.title)}</strong><span>${e.time?e.time+" · ":""}${escapeText(e.place||"Sorsogon")}</span></div>`).join(""):'<div class="small-muted">No activities planned for this date yet.</div>';
      eventList.querySelectorAll("[data-delete]").forEach(b=>b.addEventListener("click",()=>{
        const all=readEvents();all[key].splice(Number(b.dataset.delete),1);if(!all[key].length)delete all[key];writeEvents(all);renderCalendar();renderEventList();
      }));
    }
    function escapeText(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
    document.getElementById("prevMonth").addEventListener("click",()=>{calendarCursor.setMonth(calendarCursor.getMonth()-1);renderCalendar();});
    document.getElementById("nextMonth").addEventListener("click",()=>{calendarCursor.setMonth(calendarCursor.getMonth()+1);renderCalendar();});
    document.getElementById("todayMonth").addEventListener("click",()=>{calendarCursor=new Date();calendarCursor.setDate(1);selectedDate=new Date();renderCalendar();renderEventList();});
    document.getElementById("eventForm").addEventListener("submit",e=>{
      e.preventDefault();
      const title=document.getElementById("eventTitle").value.trim();
      if(!title)return;
      const all=readEvents(),key=dateKey(selectedDate);
      all[key]=all[key]||[];
      all[key].push({title,time:document.getElementById("eventTime").value,place:document.getElementById("eventPlace").value.trim()});
      writeEvents(all);e.target.reset();renderCalendar();renderEventList();
    });
    renderCalendar();renderEventList();

    // Front-end demonstration account: only profile name/email is kept locally.
    const authModal=document.getElementById("authModal");
    const authForm=document.getElementById("authForm");
    let authMode="login";
    function openAuth(){authModal.classList.add("show");document.body.style.overflow="hidden";document.getElementById("authMessage").textContent="";}
    function closeAuth(){authModal.classList.remove("show");document.body.style.overflow="";}
    function setAuthMode(mode){
      authMode=mode;
      document.getElementById("loginTab").classList.toggle("active",mode==="login");
      document.getElementById("registerTab").classList.toggle("active",mode==="register");
      document.getElementById("nameField").style.display=mode==="register"?"block":"none";
      document.getElementById("authName").required=mode==="register";
      document.getElementById("authTitle").textContent=mode==="register"?"Create your traveller profile.":"Welcome back, traveller.";
      document.getElementById("authSubmit").textContent=mode==="register"?"Create profile":"Login";
      document.getElementById("authMessage").textContent="";
    }
    function updateAccountButton(){
      const profile=JSON.parse(localStorage.getItem("sorsogonVisitorProfile")||"null");
      const btn=document.getElementById("accountBtn");
      btn.textContent=profile?`Hi, ${profile.name.split(" ")[0]} · Logout`:"Login / Register";
    }
    document.getElementById("accountBtn").addEventListener("click",()=>{
      if(localStorage.getItem("sorsogonVisitorProfile")){localStorage.removeItem("sorsogonVisitorProfile");updateAccountButton();}
      else {setAuthMode("login");openAuth();}
    });
    document.getElementById("authClose").addEventListener("click",closeAuth);
    authModal.addEventListener("click",e=>{if(e.target===authModal)closeAuth();});
    document.getElementById("loginTab").addEventListener("click",()=>setAuthMode("login"));
    document.getElementById("registerTab").addEventListener("click",()=>setAuthMode("register"));
    authForm.addEventListener("submit",e=>{
      e.preventDefault();
      const email=document.getElementById("authEmail").value.trim();
      const password=document.getElementById("authPassword").value;
      if(!email||password.length<4)return;
      const name=authMode==="register"?document.getElementById("authName").value.trim():(email.split("@")[0]);
      if(authMode==="register"&&!name)return;
      localStorage.setItem("sorsogonVisitorProfile",JSON.stringify({name,email}));
      document.getElementById("authMessage").textContent=authMode==="register"?"Profile created for this browser. Welcome!":"Demo login successful. Welcome back!";
      updateAccountButton();
      setTimeout(closeAuth,900);
      authForm.reset();
    });
    updateAccountButton();

    renderSpots();
