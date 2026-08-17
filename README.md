(Assuma o papel de um Desenvolvedor Front‑end Sênior, Creative Developer e Especialista em Data Storytelling, com múltiplos prêmios "Site of the Day" no Awwwards. Sua missão é codificar do zero um site promocional de página única que funcione como um monitor de colapso hídrico subjetivo — uma experiência sensorial brutalista onde textos, texturas e ritmo substituem qualquer métrica convencional.

Tema central: A exaustão de um sistema hídrico invisível. O desperdício de água não é mais contado em litros, mas declamado em frases fraturadas. Não há números, apenas a presença fantasmagórica de palavras que queimam, evaporam e se distorcem na tela.

Estética: Brutalismo de Dados lírico — provocativo, técnico, distópico, minimalista, com tipografia monumental e fricção visual constante. A água está em toda parte, mas apenas como espectro digital: ondas de distorção, partículas em suspensão e névoa de dados.

Paleta de cores: Fundo escuro absoluto (#080808), texto em branco osso (#F5F5F0), cor de destaque roxo neon (#BF00FF) — representando a "contaminação digital" do recurso, e alertas em laranja queimado (#FF4500) para o colapso final.

Nome interno do projeto: AQUA_VOID // NEON PURPLE

RESTRIÇÃO CRÍTICA
Toda a entrega deve estar contida em um ÚNICO ARQUIVO (.html). CSS limpo na tag <style>, JavaScript na tag <script>. Uso de bibliotecas externas exclusivamente via CDN oficial.

1. STACK TECNOLÓGICA E BIBLIOTECAS (Via CDN)

Animação: GSAP (GreenSock) + ScrollTrigger + SplitText (para animar letras e palavras individualmente) – controle cirúrgico da linha do tempo.

Smooth Scroll: Lenis (Studio Freight) – rolagem densa, pesada, com wheelMultiplier elevado (1.8) para sensação de arrasto industrial.

Tipografia: Google Fonts – Space Grotesk (títulos monumentais, pesos 500/700) e Inter (textos descritivos e logs, pesos 300/400/500).

Ícones: Phosphor Icons (peso Bold ou Fill, apenas para pequenos marcadores de alerta, como um drop d'água).

Gráficos visuais: Nenhum gráfico numérico. Toda a narrativa visual vem de SVGs inline (ondas, distorções), filtros <feTurbulence> e pseudo‑elementos CSS para glitch.

2. DIREÇÃO DE ARTE E IDENTIDADE VISUAL
A página é um poema de erro de uma estação de tratamento em colapso. Cada elemento remete a logs de sistema, mas escritos em prosa poética. O roxo neon (#BF00FF) é o sinal de que o sistema ainda respira, mas já está intoxicado pela falha.

Atmosfera e sensações desejadas:

Irradiação digital: O roxo neon sangra nas bordas das letras, como um vazamento químico na tipografia.

Sobrecarga hídrica: Pequenas partículas (SVG ou pseudo‑elementos) flutuam como gotículas em suspensão. Ondas senoidais (SVG) atravessam o fundo das seções lentamente.

Texto maquínico e instável: Títulos em Space Grotesk com tracking negativo, levemente inclinados (transform: skewX(-2deg)). Palavras-chave sofrem com flicker de opacidade e deslocamento de glitch via pseudo-elementos (::before e ::after).

Alertas: O laranja queimado (#FF4500) aparece apenas nas palavras finais de colapso ("COLAPSA", "FIM", "ESGOTO"), piscando como um alarme final.

Comportamento do cursor:

Cursor customizado: um ponto roxo neon (#BF00FF) com um anel externo mais claro. Ao passar sobre o texto, o anel se expande e distorce como uma bolha prestes a estourar. Ao clicar, o ponto solta um respingo de partículas em forma de gotas (via GSAP).

Tipografia cinética:

Números praticamente abolidos. O foco são palavras enormes que ocupam a viewport.

Efeito de morphing textual: algumas palavras mudam de forma lentamente (ex: "ÁGUA" vira "VAZIO" via mudança de opacidade).

Glitch intencional: ao passar o mouse sobre blocos de texto, a palavra treme 2px por 0.2s e emite um breve brilho roxo.

3. NARRATIVA E ESTRUTURA DO SITE (Nova Estrutura em 4 Atos Textuais)

SECTION 1 – O VERBO QUE VAZA (Hero)

Layout: Centralizado absoluto. Sem contadores. Apenas uma frase imensa e pulsante:
> O SISTEMA SANGRA ÁGUA
(com "SANGRA" em roxo neon brilhante e levemente deslocado).

Subtexto: Abaixo, uma linha de código piscando (efeito typewriter infinito):
> registro_poetico_0001: a pressão é apenas uma palavra...

Elemento de scroll down: Um código de barras estilizado com barras roxas e pretas que pulsam como um medidor de vazão óptico.

Efeitos visuais:

Scanline dupla (roxo e branco) varrendo a tela verticalmente com velocidades diferentes.

Ondas de fundo: 3 curvas SVG senoidais se movendo horizontalmente em loop, com baixa opacidade, simulando a água que escapa pelos cantos da tela.

SECTION 2 – A LITURGIA DO DESPERDÍCIO (Scroll Vertical com Cards de Texto)

Layout: 3 cards enormes que surgem com efeito de distorção líquida (GSAP animando skew e scale).

Conteúdo dos Cards (Apenas textos poéticos):

"O RESERVATÓRIO NÃO RETÉM O QUE PROMETE" (com cada palavra tendo um atraso de entrada).
"A MEMÓRIA DA ÁGUA SE APAGA EM SEGUNDOS" (com efeito de fade e desfoque).
"O VAZAMENTO É A ÚNICA CONSTANTE" (com um brilho roxo pulsando no fundo do card).
Barra de progresso lateral: Uma linha vertical roxa neon de 4px na direita da viewport que cresce de 0% a 100% conforme a rolagem.

Efeito principal: Partículas em formato de gotas flutuam ao redor dos cards, como dados vazando das tubulações.

SECTION 3 – FANTASMAS DA PRESSÃO (Galeria Horizontal Pinada com Blocos Visuais)

Pin horizontal: O scroll trava e o conteúdo desliza horizontalmente (300vw) com 3 blocos de texto monumentais.

Design dos cards (puramente textuais e distorcidos):

Card 1: A palavra "EVAPORA" ocupa a tela inteira, com filtro SVG feTurbulence distorcendo-a lentamente como calor.

Card 2: A palavra "DESVIA" treme violentamente (GSAP loop) com um rastro de pseudo‑elementos.

Card 3: A palavra "COLAPSA" em laranja queimado, com glitch estático (deslocamento horizontal via ::before e ::after).

Efeito de distorção aquática: Fundo da seção com filtro SVG <feTurbulence> animado em alta intensidade, simulando ondulações e refrações de água sobre o hardware.

SECTION 4 – O SILÊNCIO DA ÁGUA (Footer Distópico)

Mudança de atmosfera: O roxo neon desaparece quase totalmente. Restam preto, cinza queimado e laranja (#FF4500).

Texto monumental: "A ÚLTIMA GOTA FOI UM ELOGIO" em clamp(3rem, 12vw, 8rem), com "ÚLTIMA GOTA" em laranja e efeito de glitch estático.

Botão CTA: "IGNORAR ALARME" – hover invertido: fundo preto é rompido por um bloco roxo neon que cresce do centro, revelando texto preto.

Rodapé filosófico: Código de barras CSS (barras roxas e pretas) sobre fundo branco osso, com texto miúdo: "ESTE DOCUMENTO É SIMBÓLICO · A ÁGUA NUNCA ESTEVE AQUI".

4. REQUISITOS DE ENGENHARIA E ANIMAÇÃO (FOCO TOTAL EM EFEITOS VISUAIS E TEXTO)

Animação de textos com SplitText: Usar GSAP SplitText para quebrar títulos em palavras e caracteres. Cada caractere terá animação de entrada (opacidade + yPercent) com stagger.

Efeito Typewriter: Implementar um loop de datilografia no subtítulo do Hero via JS puro, alternando entre 3 frases de erro.

Animações contínuas (loop):

Ondas SVG com requestAnimationFrame ou GSAP to infinito para movimento perpétuo.

Glitch de texto via CSS @keyframes com porcentagens aleatórias de deslocamento.

Sistema de partículas: Máx. 20 partículas (gotas) com movimento orgânico (GSAP) pela tela, mudando de escala e opacidade.

Integração Lenis + GSAP: lenis.on('scroll', ScrollTrigger.update) para sincronia perfeita.

Performance: Zero imagens bitmap. Toda a complexidade visual vem de feTurbulence, mix-blend-mode e transformações CSS.

Responsividade: Abaixo de 768px, a Section 3 vira uma coluna vertical com as palavras gigantes empilhadas. Os tamanhos de fonte são reduzidos, mas mantêm o impacto visual (uso de clamp()).

Comentários no código: Descrever cada bloco de ScrollTrigger, a lógica do SplitText e as decisões de estética, explicando como cada animação reforça a metáfora do desperdício de água.

Gere O CÓDIGO FINAL COMPLETO, estilizado, animado e pronto para rodar no navegador.


