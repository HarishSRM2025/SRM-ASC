// Book spines
const grid = document.getElementById('booksGrid');
const colors = ['#7D1F3B','#1B7B7D','#2D8659','#D4A574','#5A1529','#0F5456','#00152e','#a84060','#28a8ab','#3eb577'];
for(let i=0;i<42;i++){
  const el=document.createElement('div');
  el.className='book-spine';
  el.style.cssText=`background:${colors[i%colors.length]};animation-delay:${(Math.random()*4).toFixed(2)}s`;
  grid.appendChild(el);
}

// Scroll reveal
const ro=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.10});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// Active nav
const secs=document.querySelectorAll('.infra-section[id]');
const pills=document.querySelectorAll('.nav-pill');
const po=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){
    pills.forEach(p=>p.classList.remove('active'));
    const a=document.querySelector(`.nav-pill[href="#${e.target.id}"]`);
    if(a)a.classList.add('active');
  }
}),{threshold:.38});
secs.forEach(s=>po.observe(s));