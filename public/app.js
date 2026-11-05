const events = [
  {id:'haldi', chapter:'01', title:'A little sunshine.<br>A lot of <em>Haldi.</em>', label:'THE HALDI CEREMONY', date:'Wednesday, 2 December 2026', time:'11:00 AM – 2:00 PM', day:'02', month:'DEC', attire:'Yellow outfit', host:'Lovingly hosted by Ram’s Family', description:'Splash of Haldi, glow of sunshine. Tunes of music & loads of fun!', venue:'Joe’s Beach & Shack', address:'Madurai – Rameshwaram Road, Ariyaman Beach, Sattakkonvalasai, Ramanathapuram Dist.', map:"Joe's Beach & Shack Ariyaman Beach Sattakkonvalasai Ramanathapuram", coordinator:'Hemalatha', phone:'9790358790', start:'2026-12-02T11:00:00+05:30',end:'2026-12-02T14:00:00+05:30', image:'beach.png', imageAlt:'Illustration of a tranquil tropical shoreline, palms, and a sunlit seaside pavilion', caption:'ARIYAMAN BEACH · A SUNSHINE CELEBRATION', schedule:[['A warm welcome','Welcome drink'],['Let the colour begin','Haldi ceremony'],['A little friendly competition','Fun games'],['Turn up the celebration','Live DJ'],['11:30 AM onwards','Festive lunch · Veg & non-veg']]},
  {id:'engagement', chapter:'02',title:'An evening of joy.<br>A promise of <em>forever.</em>',label:'ENGAGEMENT & RECEPTION',date:'Thursday, 3 December 2026',time:'5:00 PM – 8:00 PM',day:'03',month:'DEC',attire:'Festive attire',host:'With the blessings of Mr. Ramakrishnan & Mrs. Kavitha',description:'An evening to gather, celebrate, and surround the couple with love.',venue:'La Palmera Resorts',address:'Kannirajapuram, Sayalkudi – Vembar, ECR, Ramanathapuram Dist. – 623135',map:'La Palmera Resorts Kannirajapuram Sayalkudi Vembar',coordinator:'Hemanth Kumar',phone:'9840383115',start:'2026-12-03T17:00:00+05:30',end:'2026-12-03T20:00:00+05:30',image:'resort.png',imageAlt:'Illustrated resort garden with palms, an ornamental pavilion and warm evening lights',caption:'LA PALMERA · AN EVENING TO REMEMBER',schedule:[['A warm welcome','Welcome drink'],['A beautiful promise','Engagement ceremony'],['The soundtrack to our evening','Live music'],['7:00 PM onwards','Festive dinner · Veg & non-veg'],['Memories to take home','Photo session']]},
  {id:'wedding', chapter:'03',title:'Sacred traditions.<br>A beautiful <em>beginning.</em>',label:'THE WEDDING CEREMONY',date:'Friday, 4 December 2026',time:'7:30 AM – 9:00 AM',day:'04',month:'DEC',attire:'Traditional attire',host:'Mr. Ramakrishnan & Mrs. Kavitha cordially invite you',description:'With the blessings of our elders and the love of our families, two lives become one.',venue:'A1 Mahal',address:'Vani, Ramanathapuram, Madurai – Rameshwaram Highway, Tamil Nadu – 623536',map:'A1 Mahal Vani Ramanathapuram 623536',coordinator:'Muganeshwaran',phone:'9600664752',start:'2026-12-04T07:30:00+05:30',end:'2026-12-04T09:00:00+05:30',image:'mahal.png',imageAlt:'Illustration of a traditional wedding mandapam with carved pillars, jasmine garlands and brass lamps',caption:'A1 MAHAL · BLESSED BEGINNINGS',schedule:[['A warm welcome','Welcome drink'],['7:00 AM – 9:00 AM','Breakfast · Vegetarian'],['7:30 AM – 9:00 AM','Muhurtham'],['Memories to cherish','Photo session'],['10:30 AM onwards','Wedding feast · Veg & non-veg']]}
];

document.querySelector('#event-sections').innerHTML = events.map(e=>`
  <article class="event ${e.id}" id="${e.id}" aria-labelledby="${e.id}-title">
    <div class="event-inner">
      <div class="event-visual reveal"><span class="chapter">CHAPTER ${e.chapter}</span><div class="scene"><img src="/images/${e.image}" alt="${e.imageAlt}" loading="lazy"></div><p class="scene-caption">${e.caption}</p><div class="event-quote">${e.id==='haldi'?'Painted in joy. Dipped in sunshine.':e.id==='engagement'?'A promise, a celebration, a little magic.':'Rooted in tradition. Bound by love.'}</div></div>
      <div class="event-copy reveal"><p class="eyebrow">${e.label}</p><h2 id="${e.id}-title">${e.title}</h2><p class="event-description">${e.description}</p><div class="event-when"><div class="date-stamp"><strong>${e.day}</strong><span>${e.month}</span></div><div><h3>${e.date}</h3><p>${e.time} <small>IST</small></p></div></div><p class="dress"><span class="dress-dot"></span> DRESS CODE <strong>${e.attire}</strong></p><div class="venue"><span class="venue-pin" aria-hidden="true">⌖</span><div><h3>${e.venue}</h3><p>${e.address}</p></div></div><div class="event-actions"><a class="button event-button" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.map)}">Find the venue <span><svg class="inline-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><button class="calendar-button" data-calendar="${e.id}">＋ Add to calendar</button></div><p class="host">${e.host}</p></div>
      <details class="event-details reveal" open><summary><span>How the celebration unfolds</span><span class="details-symbol" aria-hidden="true">+</span></summary><div class="itinerary"><ol>${e.schedule.map(([time,title])=>`<li><span class="itinerary-dot"></span><h4>${title}</h4><p>${time}</p></li>`).join('')}</ol><div class="coordinator"><span>FESTIVITIES COORDINATED BY</span><strong>${e.coordinator}</strong><a href="tel:+91${e.phone}">+91 ${e.phone.slice(0,5)} ${e.phone.slice(5)} <span><svg class="inline-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a></div></div></details>
    </div>
  </article>`).join('');

const target = new Date('2026-12-04T07:30:00+05:30');
function updateCountdown(){
  const seconds=Math.max(0,Math.floor((target-Date.now())/1000));
  const values={days:Math.floor(seconds/86400),hours:Math.floor(seconds/3600)%24,minutes:Math.floor(seconds/60)%60,seconds:seconds%60};
  for(const [key,val] of Object.entries(values)) document.getElementById(key).textContent=String(val).padStart(2,'0');
  if(!seconds)document.querySelector('#countdown-note').textContent='The wedding day has arrived. Celebrating a lifetime of love!';
}
updateCountdown(); setInterval(updateCountdown,1000);

const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const progress = document.querySelector('.scroll-progress');
function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?scrollY/max*100:0}%`;document.querySelector('.header').classList.toggle('scrolled',scrollY>30);}
addEventListener('scroll',onScroll,{passive:true});onScroll();
const eventObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.event-nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));}}),{rootMargin:'-25% 0px -50% 0px'});
document.querySelectorAll('.event').forEach(e=>eventObserver.observe(e));

let selectedEvent;
const dialog=document.querySelector('#calendar-dialog');
const utc = value=>new Date(value).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
document.querySelectorAll('[data-calendar]').forEach(button=>button.addEventListener('click',()=>{
  selectedEvent=events.find(e=>e.id===button.dataset.calendar);
  const e=selectedEvent;
  document.querySelector('#calendar-title').textContent=e.id==='haldi'?'Haldi by the sea':e.id==='engagement'?'Engagement & reception':'Kamesh & Preetha’s wedding';
  const params=new URLSearchParams({action:'TEMPLATE',text:`Kamesh & Preetha · ${e.label}`,dates:`${utc(e.start)}/${utc(e.end)}`,location:`${e.venue}, ${e.address}`,details:`${e.description}\nDress code: ${e.attire}\n${e.schedule.map(([time,title])=>`${time}: ${title}`).join('\n')}\nCoordinator: ${e.coordinator} +91 ${e.phone}`,ctz:'Asia/Kolkata'});
  document.querySelector('#google-calendar').href='https://calendar.google.com/calendar/render?'+params;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
function icsEscape(value){return value.replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');}
function foldLine(line){let out='',current='',bytes=0;for(const char of line){const size=new TextEncoder().encode(char).length;if(bytes+size>74){out+=current+'\r\n';current=' ';bytes=1;}current+=char;bytes+=size;}return out+current;}
document.querySelector('#download-calendar').addEventListener('click',()=>{
  const e=selectedEvent;
  const data=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Kamesh and Preetha//Wedding//EN','CALSCALE:GREGORIAN','BEGIN:VEVENT',`UID:${e.id}-2026@kamesh-preetha.invite`,`DTSTAMP:${utc(new Date())}`,`DTSTART:${utc(e.start)}`,`DTEND:${utc(e.end)}`,`SUMMARY:${icsEscape('Kamesh & Preetha · '+e.label)}`,`LOCATION:${icsEscape(e.venue+', '+e.address)}`,`DESCRIPTION:${icsEscape(`Dress code: ${e.attire}\n${e.schedule.map(([time,title])=>`${time}: ${title}`).join('\n')}\nCoordinator: ${e.coordinator}, +91 ${e.phone}`)}`,'END:VEVENT','END:VCALENDAR'].map(foldLine).join('\r\n')+'\r\n';
  const url=URL.createObjectURL(new Blob([data],{type:'text/calendar;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=`kamesh-preetha-${e.id}.ics`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
document.querySelector('#share-invite').addEventListener('click',async()=>{
  const status=document.querySelector('#share-status');
  if(location.protocol==='file:'){status.textContent='Sharing will be available once the invitation has a public web address.';return;}
  try{if(navigator.share){await navigator.share({title:'Kamesh & Preetha · Wedding celebrations',text:'Join us for three beautiful days, 2–4 December 2026, in Ramanathapuram.',url:location.href.split('#')[0]});status.textContent='';}else{await navigator.clipboard.writeText(location.href.split('#')[0]);status.textContent='Invitation link copied. Share a little joy!';}}
  catch(err){if(err.name!=='AbortError')status.textContent='Copy the address from your browser to share this invitation.';}
});
