// ===== Dados do profissional — preencha aqui =====
const CONFIG = {
  whatsapp: "5511978045188",         // só números com DDI
  whatsappLabel: "(11) 97804-5188",   // como o número aparece no site
  instagram: "@psico.gabrielsouza",  // usuário do Instagram
  crp: "CRP 06/178480"                // número do CRP (obrigatório na divulgação)
};
// ================================================

document.querySelectorAll('[data-cfg]').forEach(el=>{const v=CONFIG[el.dataset.cfg];if(v)el.textContent=v});
const waBase=CONFIG.whatsapp?`https://wa.me/${CONFIG.whatsapp}`:'#contato';
const igUrl=CONFIG.instagram&&!CONFIG.instagram.includes('seuperfil')?`https://instagram.com/${CONFIG.instagram.replace('@','')}`:'#conteudos';
document.querySelectorAll('#wa-card,.wa-link').forEach(a=>{a.href=waBase;if(!CONFIG.whatsapp)a.removeAttribute('target')});
document.querySelectorAll('#ig-card,#ig-link,.ig-link').forEach(a=>{a.href=igUrl;if(igUrl.startsWith('#'))a.removeAttribute('target')});

// Menu mobile
const btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
btn.addEventListener('click',()=>{const o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');btn.setAttribute('aria-expanded','false')}));

// Header + barra fixa no celular (some perto do formulário)
const hdr=document.getElementById('hdr'),mbar=document.getElementById('mbar'),contato=document.getElementById('contato');
const onScroll=()=>{hdr.classList.toggle('scrolled',scrollY>10);const c=contato.getBoundingClientRect();mbar.classList.toggle('show',scrollY>500&&!(c.top<innerHeight&&c.bottom>0))};
addEventListener('scroll',onScroll,{passive:true});onScroll();

// Animação de entrada: só anima o que começa abaixo da dobra
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  let pending=[...document.querySelectorAll('.reveal')].filter(el=>el.getBoundingClientRect().top>innerHeight);
  pending.forEach(el=>el.classList.add('pending'));
  document.documentElement.classList.add('js');
  const check=()=>{pending=pending.filter(el=>{if(el.getBoundingClientRect().top<innerHeight*1.1){el.classList.add('in');return false}return true});if(!pending.length)removeEventListener('scroll',check)};
  addEventListener('scroll',check,{passive:true});addEventListener('resize',check);check();
}

// Formulário → abre o WhatsApp com a mensagem pronta
document.getElementById('contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.target,msg=f.querySelector('.form-msg');
  if(!f.checkValidity()){msg.textContent='Preencha nome, WhatsApp e a autorização para continuar.';f.reportValidity();return}
  const d=new FormData(f);
  const text=`Olá, Gabriel! Meu nome é ${d.get('nome')}.\nTenho interesse em: ${d.get('servico')}\nO atendimento é para: ${d.get('para')}\n${d.get('msg')?'\n'+d.get('msg'):''}`;
  if(!CONFIG.whatsapp){msg.textContent='Prévia: o número de WhatsApp ainda não foi configurado no site.';return}
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`,'_blank','noopener');
  msg.textContent='Abrimos o WhatsApp com sua mensagem pronta. É só enviar!';
});
