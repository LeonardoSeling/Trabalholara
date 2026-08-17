
(function(){
  "use strict";

  /* ============================================================
     0. DADOS — fonte única de verdade para os "recibos"
     ============================================================ */
  var receiptData = [
    { icon:'ph-pants', title:'1 Calça Jeans', value:10000, unit:'L', pct:95, text:'Do algodão no campo até a costura final, uma única calça jeans consome o equivalente a mais de 60 banheiras de água virtual.' },
    { icon:'ph-coffee', title:'1 Xícara de Café', value:140, unit:'L', pct:20, text:'O cultivo, processamento e transporte dos grãos custam 140 litros para cada xícara de 125ml que você bebe distraidamente.' },
    { icon:'ph-hamburger', title:'1 Hambúrguer', value:2500, unit:'L', pct:70, text:'Ração, pastagem e abate somados tornam a carne bovina um dos itens mais sedentos do seu prato.' },
    { icon:'ph-t-shirt', title:'1 Camiseta de Algodão', value:2700, unit:'L', pct:75, text:'Uma peça básica de algodão equivale a quase três anos de água potável para beber, uma pessoa.' },
    { icon:'ph-device-mobile', title:'1 Smartphone', value:12760, unit:'L', pct:100, text:'Mineração de metais, fabricação de componentes e montagem tornam cada aparelho um reservatório escondido.' },
    { icon:'ph-file', title:'1 Folha de Papel A4', value:10, unit:'L', pct:8, text:'Mesmo um item tão fino quanto uma folha carrega o custo hídrico do cultivo e processamento da celulose.' }
  ];

  var cloudData = [
    { idx:'SRV / 01', title:'1 Prompt de IA', value:'0,5', unit:'L (estimado)', text:'Gerar uma única resposta de um modelo de linguagem pode consumir meio litro de água para resfriar os servidores que a processam.' },
    { idx:'SRV / 02', title:'1 Imagem gerada por IA', value:'2', unit:'L (estimado)', text:'Renderizar uma imagem sintética exige mais ciclos de GPU — e mais água evaporada nas torres de resfriamento.' },
    { idx:'SRV / 03', title:'Treinar 1 modelo grande', value:'700K', unit:'L (estimado)', text:'O treinamento de um modelo de linguagem de grande porte pode consumir centenas de milhares de litros só em resfriamento.' },
    { idx:'SRV / 04', title:'1 Data Center médio', value:'4,5M', unit:'L / dia (estimado)', text:'Um data center de médio porte pode evaporar milhões de litros por dia para manter seus servidores em temperatura segura.' },
    { idx:'SRV / 05', title:'1h de streaming em HD', value:'3', unit:'L (estimado)', text:'Cada hora assistida percorre uma cadeia de servidores refrigerados a água em algum lugar do planeta.' }
  ];

  /* ============================================================
     1. INJEÇÃO DE CONTEÚDO DINÂMICO
     ============================================================ */
  var receiptListEl = document.getElementById('receipt-list');
  receiptData.forEach(function(item, i){
    var el = document.createElement('div');
    el.className = 'receipt-item';
    el.innerHTML =
      '<span class="idx">ITEM ' + String(i+1).padStart(2,'0') + ' / ' + String(receiptData.length).padStart(2,'0') + '</span>' +
      '<h3><i class="ph-bold ' + item.icon + '"></i>' + item.title + '</h3>' +
      '<div class="receipt-number tabular" data-value="' + item.value + '">0<span class="unit">' + item.unit + '</span></div>' +
      '<div class="water-bar"><div class="water-bar-fill" data-pct="' + item.pct + '"></div></div>' +
      '<p>' + item.text + '</p>';
    receiptListEl.appendChild(el);
  });

  var cloudTrackEl = document.getElementById('cloud-track');
  cloudData.forEach(function(item){
    var el = document.createElement('div');
    el.className = 'server-card';
    el.innerHTML =
      '<div class="rack"><span></span><span></span><span></span><span></span></div>' +
      '<span class="idx">' + item.idx + '</span>' +
      '<h3>' + item.title + '</h3>' +
      '<div class="server-number tabular">' + item.value + '<span class="unit"> ' + item.unit + '</span></div>' +
      '<p>' + item.text + '</p>';
    cloudTrackEl.appendChild(el);
  });

  // Ticker: repete os dados do recibo em formato de fita corrida
  var tickerTrack = document.getElementById('ticker-track');
  var tickerHTML = receiptData.map(function(item){
    return '<span>' + item.title.toUpperCase() + ' <b>' + item.value.toLocaleString('pt-BR') + ' L</b></span>';
  }).join('');
  tickerTrack.innerHTML = tickerHTML + tickerHTML; // duplica para loop contínuo

  /* ============================================================
     2. CURSOR CUSTOMIZADO
     ============================================================ */
  var cursorDot = document.getElementById('cursor-dot');
  var cursorRing = document.getElementById('cursor-ring');
  var mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  window.addEventListener('mousemove', function(e){
    mouseX = e.clientX; mouseY = e.clientY;
    cursorDot.style.transform = 'translate(' + mouseX + 'px,' + mouseY + 'px) translate(-50%,-50%)';
  });

  function animateRing(){
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = 'translate(' + ringX + 'px,' + ringY + 'px) translate(-50%,-50%)';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener('mousedown', function(){ cursorRing.classList.add('ink'); });
  document.addEventListener('mouseup', function(){ cursorRing.classList.remove('ink'); });

  document.querySelectorAll('button, a, .server-card').forEach(function(el){
    el.addEventListener('mouseenter', function(){ cursorRing.classList.add('ink'); });
    el.addEventListener('mouseleave', function(){ cursorRing.classList.remove('ink'); });
  });

  /* ============================================================
     3. LENIS + GSAP TICKER (smooth scroll sincronizado)
     ============================================================ */
  gsap.registerPlugin(ScrollTrigger);

  var lenis = new Lenis({
    duration: 1.3,           // rolagem densa e pesada
    easing: function(t){ return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
    smoothWheel: true,
    wheelMultiplier: 0.9
  });

  // Sincroniza o relógio interno do GSAP com o Lenis para não engasgar
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function(time){ lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  document.getElementById('scrollDownBtn').addEventListener('click', function(){
    lenis.scrollTo('#receipt', { duration: 1.6 });
  });

  /* ============================================================
     4. CONTADOR HERO — gira freneticamente e estabiliza
     ============================================================ */
  var heroCounterEl = document.getElementById('counter-hero').firstChild;
  var heroTarget = 487213940; // litros gastos "hoje", estimativa ilustrativa
  var heroObj = { val: 0 };
  gsap.to(heroObj, {
    val: heroTarget,
    duration: 4.2,
    ease: 'power2.out',
    onUpdate: function(){
      heroCounterEl.nodeValue = Math.floor(heroObj.val).toLocaleString('pt-BR');
    }
  });

  /* ============================================================
     5. CONTADORES DO RECIBO — disparam ao entrar 20% na viewport
     ============================================================ */
  document.querySelectorAll('.receipt-item').forEach(function(itemEl){
    var numberEl = itemEl.querySelector('.receipt-number');
    var target = parseFloat(numberEl.getAttribute('data-value'));
    var textNode = numberEl.firstChild;
    var barFill = itemEl.querySelector('.water-bar-fill');
    var targetPct = parseFloat(barFill.getAttribute('data-pct'));
    var counterState = { val: 0 };

    ScrollTrigger.create({
      trigger: itemEl,
      start: 'top 80%',      // elemento entra 20% na viewport
      once: true,
      onEnter: function(){
        itemEl.classList.add('is-active');
        gsap.to(counterState, {
          val: target,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: function(){
            textNode.nodeValue = Math.floor(counterState.val).toLocaleString('pt-BR');
          }
        });
        gsap.to(barFill, { width: targetPct + '%', duration: 1.8, ease: 'power3.out' });
      }
    });
  });

  // Total acumulado no painel fixo esquerdo, soma conforme cada item ativa
  var runningTotalEl = document.getElementById('running-total');
  var runningState = { val: 0 };
  var cumulativeTarget = 0;
  document.querySelectorAll('.receipt-item').forEach(function(itemEl, i){
    cumulativeTarget += receiptData[i].value;
    var thisTotal = cumulativeTarget;
    ScrollTrigger.create({
      trigger: itemEl,
      start: 'top 80%',
      once: true,
      onEnter: function(){
        gsap.to(runningState, {
          val: thisTotal,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: function(){ runningTotalEl.textContent = Math.floor(runningState.val).toLocaleString('pt-BR'); }
        });
      }
    });
  });

  /* ============================================================
     6. SEÇÃO 2 — fundo escurece + barra lateral vermelha enche
     ============================================================ */
  gsap.to('#receipt', {
    backgroundColor: '#000000',
    scrollTrigger: {
      trigger: '#receipt',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6
    }
  });

  gsap.to('#receipt-progress-fill', {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: '#receipt',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6
    }
  });

  /* ============================================================
     7. SEÇÃO 3 — galeria horizontal pinada (showpiece técnico)
     ============================================================ */
  var mm = gsap.matchMedia();

  mm.add('(min-width: 769px)', function(){
    var track = document.getElementById('cloud-track');

    function getScrollDistance(){
      return track.scrollWidth - window.innerWidth;
    }

    var horizontalTween = gsap.to(track, {
      x: function(){ return -getScrollDistance(); },
      ease: 'none',
      scrollTrigger: {
        trigger: '#cloud',
        start: 'top top',
        end: function(){ return '+=' + (getScrollDistance() + window.innerHeight); },
        scrub: 0.8,
        pin: true,             // trava o scroll vertical
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function(self){
          document.getElementById('cloudProgressFill').style.width = (self.progress * 100) + '%';
        }
      }
    });

    return function(){
      horizontalTween.scrollTrigger && horizontalTween.scrollTrigger.kill();
      horizontalTween.kill();
    };
  });

  /* ============================================================
     8. CTA FINAL — feedback de clique (âncora simbólica)
     ============================================================ */
  document.getElementById('ctaBtn').addEventListener('click', function(){
    lenis.scrollTo(document.body.scrollHeight, { duration: 1.2 });
  });

  /* ============================================================
     9. CÓDIGO DE BARRAS CSS DO RODAPÉ
     ============================================================ */
  var barcodeEl = document.getElementById('cssBarcode');
  var barcodeHTML = '';
  for (var b = 0; b < 46; b++){
    var w = (b % 7 === 0) ? 3 : 2;
    var h = 20 + Math.round(Math.sin(b * 1.7) * 12) + 14;
    barcodeHTML += '<i style="width:' + w + 'px;height:' + h + 'px"></i>';
  }
  barcodeEl.innerHTML = barcodeHTML;

  /* ============================================================
     10. REFRESH — garante medidas corretas após fontes/imagens
     ============================================================ */
  window.addEventListener('load', function(){
    ScrollTrigger.refresh();
  });
})();

const ctaBtn = document.getElementById('ctaBtn');

ctaBtn.addEventListener('click', (e) => {
    // 1. Cancela o redirecionamento imediato do href="aura.html"
    e.preventDefault();

    // 2. Adiciona a classe que faz a transição vermelha na tela
    document.body.classList.add('sua-classe-de-transicao'); // substitua pela sua classe de animação

    // 3. Aguarda o tempo da transição antes de mudar de página
    setTimeout(() => {
        window.location.href = 'aura.html';
    }, 1000); // tempo em milissegundos (1000ms = 1 segundo, ajuste conforme sua animação)
});


  /* ============================================================
     9. TRANSIÇÃO PARA AURA.HTML E ESPERANCA.HTML
     ============================================================ */
     var transitionOverlay = document.getElementById('transition-overlay');
     var ctaAuraBtn = document.getElementById('ctaAuraBtn');
     var ctaEsperancaBtn = document.getElementById('ctaEsperancaBtn');
     var isTransitioning = false;
   
     // Pré-carregar as páginas de destino
     var pages = ['aura.html', 'esperanca.html'];
     pages.forEach(function(page) {
       var linkPreload = document.createElement('link');
       linkPreload.rel = 'prefetch';
       linkPreload.href = page;
       document.head.appendChild(linkPreload);
     });
   
     // Função de transição compartilhada
     function navigateTo(page) {
       if (isTransitioning) return;
       isTransitioning = true;
   
       // Desativa o Lenis
       lenis.stop();
       lenis.destroy();
   
       // Ativa o overlay
       transitionOverlay.classList.add('active');
   
       // Vibração na tela
       gsap.to('body', {
         x: (Math.random() - 0.5) * 12,
         y: (Math.random() - 0.5) * 8,
         duration: 0.08,
         yoyo: true,
         repeat: 3,
         ease: 'steps(2)',
         onComplete: function() {
           gsap.set('body', { x: 0, y: 0 });
         }
       });
   
       // Efeito de pulsação + navegação
       gsap.to(transitionOverlay, {
         opacity: 0.95,
         duration: 0.6,
         ease: 'power2.inOut',
         onComplete: function() {
           window.location.href = page;
         }
       });
     }
   
     // Eventos dos botões
     ctaAuraBtn.addEventListener('click', function(e) {
       e.preventDefault();
       e.stopPropagation();
       navigateTo('aura.html');
     });
   
     ctaEsperancaBtn.addEventListener('click', function(e) {
       e.preventDefault();
       e.stopPropagation();
       navigateTo('esperanca.html');
     });