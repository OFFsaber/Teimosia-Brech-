// Array de ofertas: id do produto e % de desconto
const ofertas = [
  { id: 4, desconto: 15 }, // Pré-Treino Thunder
  { id: 1, desconto: 10 }, // Whey Protein Gold
  { id: 3, desconto: 20 }  // BCAA 2400
];

const svgCarrinho = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2b80ff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="19" cy="21" r="1.5"/><path d="M5 6h2l1.68 9.39a2 2 0 0 0 2 1.61h6.72a2 2 0 0 0 2-1.61L21 8H7.42"/></svg>`;

// Array de produtos com novos campos: status, desc (desconto), emOferta
window.produtos = [
  {
    id: 1,
    nome: "Whey Protein Gold",
    descricao: "Proteína premium para ganho de massa.",
    preco: 149.90,
    imagens: ["imagens/whey-gold.jpeg", "imagens/whey-gold-2.jpeg", "imagens/whey-gold-3.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "Whey Protein Gold é ideal para recuperação muscular pós-treino, contém 24g de proteína por dose.",
    status: "indisponivel",
    desc: 10,
    emOferta: 1
  },
  {
    id: 2,
    nome: "Creatina Monohidratada",
    descricao: "Auxilia no aumento de força.",
    preco: 89.90,
    imagens: ["imagens/creatina.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "A creatina é um composto natural ideal para treinos intensos, melhorando o desempenho físico.",
    status: "vendido",
    desc: 25,
    emOferta: 1
  },
  {
    id: 3,
    nome: "BCAA 2400",
    descricao: "Aminoácidos essenciais em cápsulas.",
    preco: 69.90,
    imagens: [
      "imagens/bcaa.jpeg", 
      "imagens/bcaa-2.jpeg", 
      "imagens/bcaa-3.jpeg" 
    ],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "O BCAA auxilia na recuperação muscular e evita o catabolismo, especialmente em atividades intensas.",
    status: "disponivel",
    desc: 20,
    emOferta: 1
  },
  {
    id: 4,
    nome: "Pré-Treino Thunder",
    descricao: "Energia máxima para o treino.",
    preco: 99.90,
    imagens: ["imagens/pretreino.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "Pré-Treino Thunder proporciona energia e foco para treinos intensos, com ingredientes testados.",
    status: "indisponivel",
    desc: 15,
    emOferta: 1
  },
  {
    id: 5,
    nome: "Albumina Egg Protein",
    descricao: "Proteína natural do ovo.",
    preco: 59.90,
    imagens: ["imagens/albumina.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "Indicado para quem busca fonte proteica de lenta digestão. Mantém o anabolismo noturno.",
    status: "disponivel",
    desc: 0,
    emOferta: 1
  },
  {
    id: 6,
    nome: "Hipercalórico Mass Gainer",
    descricao: "Ganho de peso e massa.",
    preco: 139.90,
    imagens: ["imagens/hipercalorico.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "Mass Gainer é perfeito para aumentar o aporte calórico diário e facilitar o ganho de massa muscular.",
    status: "disponivel",
    desc: 0,
    emOferta: 1
  },
  {
    id: 7,
    nome: "Glutamina Recovery",
    descricao: "Rápida recuperação muscular.",
    preco: 84.90,
    imagens: ["imagens/glutamina.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "Glutamina auxilia na recuperação dos músculos e reforça o sistema imunológico.",
    status: "disponivel",
    desc: 0,
    emOferta: 0
  },
  {
    id: 8,
    nome: "Multivitamínico Ultra",
    descricao: "Seu corpo sempre fortalecido.",
    preco: 56.90,
    imagens: ["imagens/multivitaminico.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "Suplemento completo de vitaminas e minerais, desenvolvia para praticantes de atividades físicas.",
    status: "disponivel",
    desc: 0,
    emOferta: 0
  },
  {
    id: 9,
    nome: "Omega 3 Fish Oil",
    descricao: "Proteção cardiovascular.",
    preco: 44.90,
    imagens: ["imagens/omega3.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "Fonte de ácidos graxos essenciais, contribui para saúde do coração e do cérebro.",
    status: "disponivel",
    desc: 0,
    emOferta: 0
  },
  {
    id: 10,
    nome: "Termogênico Power",
    descricao: "Auxilia na queima de gordura.",
    preco: 99.90,
    imagens: ["imagens/termogenico.jpeg"],
    video: "https://www.youtube.com/embed/McXWc4ZUjK0",
    detalhes: "Termogênico Power acelera o metabolismo e aumenta a energia para treinos de alta intensidade.",
    status: "vendido",
    desc: 0,
    emOferta: 0
  }
];

function renderizarProdutos(filtro = '') {
  const swiperWrapper = document.querySelector('.ofertas-swiper .swiper-wrapper');
  const produtosGrid = document.getElementById('produtosGrid');
  if (!swiperWrapper || !produtosGrid) return;
  // Gerar carrossel de ofertas dinamicamente
  swiperWrapper.innerHTML = window.produtos.filter(p => p.emOferta === 1 && p.status !== 'vendido' && p.nome.toLowerCase().includes(filtro.toLowerCase())).map(prod => {
    const precoDesconto = prod.desc > 0 ? (prod.preco * (1 - prod.desc / 100)).toFixed(2) : prod.preco.toFixed(2);
    return `
      <div class="swiper-slide" onclick="abrirDetalhes(${prod.id})" style="cursor:pointer;">
        <div class="oferta-card">
          ${prod.desc > 0 ? `<span class='oferta-label'>-${prod.desc}%</span>` : ''}
          <img src="${prod.imagens[0]}" alt="${prod.nome}" loading="lazy">
          <p>${prod.nome} <b>R$ ${precoDesconto}</b></p>
        </div>
      </div>
    `;
  }).join('');

  // Reinicializar o Swiper para garantir funcionamento após filtro
  if (window.swiper) {
    window.swiper.destroy(true, true);
  }
  window.swiper = new Swiper('.ofertas-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    effect: 'slide',
    speed: 800,
    grabCursor: true
  });

  // Renderizar Catálogo de Produtos
  produtosGrid.innerHTML = '';
  window.produtos.filter(prod => prod.status !== 'vendido' && prod.nome.toLowerCase().includes(filtro.toLowerCase())).forEach(prod => {
    const card = document.createElement('div');
    card.className = "produto-card";
    card.innerHTML = `
      <img src="${prod.imagens[0]}" alt="${prod.nome}" loading="lazy">
      <div class="produto-info">
        <h4>${prod.nome}</h4>
        <p>${prod.descricao}</p>
        <strong>R$ ${prod.preco.toFixed(2)}</strong>
      </div>
      <div style="margin-top:8px; display: flex; gap: 8px; align-items: center;">
        <button class="btn-carrinho" title="Adicionar ao carrinho" onclick="event.stopPropagation(); adicionarCarrinho(${prod.id})" style="background:#fff;border:2px solid #2b80ff;border-radius:50%;padding:7px;display:flex;align-items:center;justify-content:center;transition:box-shadow .2s;box-shadow:0 2px 8px #e0eaff;cursor:pointer;" ${prod.status === 'indisponivel' ? 'disabled style=\"opacity:0.5;cursor:not-allowed;\"' : ''}>${svgCarrinho}</button>
      </div>
    `;
    card.style.cursor = 'pointer';
    card.onclick = () => abrirDetalhes(prod.id);
    produtosGrid.appendChild(card);
  });
}

// Inicializar filtro
const inputFiltro = document.getElementById('filtroNome');
if (inputFiltro) {
  inputFiltro.addEventListener('input', function() {
    renderizarProdutos(this.value);
  });
}

// Renderizar ao carregar a página
renderizarProdutos();

// Função abrir detalhes
function abrirDetalhes(id) {
  const url = new URL('detalhe.html', window.location.href);
  url.searchParams.set('id', id);
  window.open(url, '_blank');
}

window.abrirDetalhes = abrirDetalhes;