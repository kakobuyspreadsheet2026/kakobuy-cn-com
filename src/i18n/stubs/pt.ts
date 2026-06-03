import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const pillLabels = {
  pt: {
    shoes: {
      label: 'Tênis',
      alt: 'calçados Weidian/Taobao com QC quando disponível',
    },
    't-shirts': {
      label: 'Camisetas',
      alt: 'boxy fits, lavagens ácidas e estampas',
    },
    pants: {
      label: 'Calças',
      alt: 'jeans, joggers e shorts',
    },
    accessories: {
      label: 'Acessórios',
      alt: 'cintos, bijuteria leve e detalhes',
    },
    bags: {
      label: 'Bolsas',
      alt: 'crossbody, mochilas e tote prontos para Kakobuy',
    },
    electronics: {
      label: 'Eletrônicos',
      alt: 'gadgets e áudio contextualizados',
    },
    jackets: {
      label: 'Jaquetas',
      alt: 'corta-vento, puffer e camadas técnicas',
    },
    hoodies: {
      label: 'Moletons',
      alt: 'zíperes, crewnecks e tricô',
    },
    headwear: {
      label: 'Bonés',
      alt: 'snapbacks, buckets e gorros',
    },
    jersey: {
      label: 'Jerseys',
      alt: 'mesh esportivo e regatas',
    },
    perfume: {
      label: 'Beauty',
      alt: 'fragrâncias e beauty no catálogo',
    },
    other: {
      label: 'Mix',
      alt: 'categorias cruzadas e achados únicos',
    },
  },
} as const;

export const ptHome: HomeStubContent = {
  title: 'Kakobuy Spreadsheet 2026 — 5.000+ links e fotos QC',
  description:
    'Hub independente Kakobuy Spreadsheet para 2026: mais de 5.000 finds Taobao, Weidian e 1688 com fotos QC. Categorias, guias paste-link, compre via Kakobuy.',
  keywords:
    'diretório Kakobuy, catálogo de réplicas, links Weidian, guia de controle de qualidade Taobao, despachante de compras na China',
  webPageName: 'Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
  webPageKeywords: [
    'diretório de réplicas',
    'guia de agente de compras',
    'links verificados',
    'fotos de controle de qualidade',
    'assistente de envios',
  ],
  hero: {
    h1: 'Kakobuy Spreadsheet 2026',
    kicker: 'Taobao · Weidian · 1688 · Fotos QC',
    body:
      'Acesse mais de 5.000 reps de alta qualidade com links verificados e fotos QC profissionais. Fornecemos os dados, o Kakobuy cuida do resto.',
    ctaBrowse: 'Abrir catálogo spreadsheet →',
    ctaLogin: 'Entrar na Kakobuy',
    heroPlaneAlt:
      'kakobuy spreadsheet · ilustração de avião estilo Kakobuy · hero decorativo · kakobuy-cn.com',
    searchAria:
      'kakobuy spreadsheet · busca editorial (abre catálogo indexado em nova aba)',
    searchPlaceholder: 'Marcas, estética ou palavras-chave…',
    searchByImage: 'Buscar por imagem',
    searchSubmit: 'Buscar',
    searchByImageAria:
      'kakobuy spreadsheet · busca por imagem no catálogo indexado · nova aba, stack idêntico',
  },
  categoriesAria: 'Atalhos de categoria para o front do catálogo',
  exploreTitle: 'Percorra faixas Kakobuy Spreadsheet por categoria',
  redditAria: 'Comunidade r/kakobuy (Reddit, nova aba)',
  redditSnooAlt:
    'kakobuy spreadsheet · Snoo Reddit r/kakobuy — debates de haul, QC spreadsheet e agents',
  sections: [
    {
      h3: 'O que é um Kakobuy Spreadsheet Hub?',
      paragraphs: [
        'Na prática, é uma coleção selecionada a dedo dos melhores links de produtos de marketplaces chineses como Taobao, Weidian e 1688. Adicionamos notas sobre „batches“ (versões de qualidade), estimativas de preço e fotos para que você não precise adivinhar enquanto pesquisa em sites que não estão no seu idioma.',
        'Este site atua como seu guia e índice. Enquanto ajudamos você a encontrar os itens, o Kakobuy cuida da compra real, da verificação de qualidade em seu armazém e do envio do pacote até a sua porta.',
      ],
    },
    {
      h3: 'Como eu compro depois de escolher um item?',
      paragraphs: [
        'É fácil: copie o link do produto, cole-o na barra de pesquisa do Kakobuy e escolha seu tamanho e cor. Depois de pagar o preço doméstico, o item é enviado para o armazém do Kakobuy, onde eles tiram fotos profissionais para você revisar.',
        'Sempre verifique essas fotos „QC“ cuidadosamente. Se o item parecer diferente do esperado, você pode solicitar uma devolução ou troca antes que ele saia da China.',
      ],
    },
    {
      h3: 'Por que usar um agente como o Kakobuy?',
      paragraphs: [
        'A maioria dos vendedores na China não envia diretamente para endereços internacionais. Os agentes preenchem essa lacuna. Eles fornecem um lugar seguro para armazenar seus itens, verificam se você recebeu exatamente o que pagou e consolidam vários itens em uma única caixa para economizar dinheiro no envio.',
        'O uso de um agente também oferece proteção de pagamento e uma maneira clara de lidar com disputas caso um vendedor envie o lote ou tamanho errado.',
      ],
    },
    {
      h3: 'E quanto a links mortos ou itens fora de estoque?',
      paragraphs: [
        'O mercado se move rápido — os vendedores costumam atualizar seus links ou ficar sem estoque sem aviso prévio. Atualizamos nosso diretório constantemente para manter as coisas funcionando, mas se você encontrar um link quebrado, basta verificar a página da categoria para uma alternativa nova.',
        'Se um item que você comprou ficar subitamente indisponível, o Kakobuy o notificará e reembolsará seu dinheiro em seu saldo para que você possa escolher outra coisa.',
      ],
    },
  ],
  ctaHeading: 'Entrar no diretório Kakobuy Spreadsheet',
  ctaIntro: 'Continue a descoberta por',
  ctaIntroSuffix:
    ' — permaneça em modo Browse enquanto caça URLs e autentique-se na Kakobuy quando colar compras.',
  ctaFooterNote: 'Plataformas de terceiros — due diligence manual.',
  sheetLinkLabel: 'a ponte Kakobuy Spreadsheet → spreadsheets do agente',
  categoryPills: pillsFor(pillLabels.pt),
  footer: {
    disclaimerLabel: 'Aviso legal',
    disclaimerHtml:
      'kakobuy-cn.com é hub editorial sem checkout. Links para <a href="https://maisonlooks.com/en" target="_blank" rel="noopener noreferrer">catálogo indexado</a> e <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a> são terceiros independentes; valide QC/políticas direto nas plataformas. Sem afiliação oficial declarada com Kakobuy.',
    copyrightLine:
      '© 2026 kakobuy-cn.com — notas de leitura; compras fechadas na Kakobuy.',
  },
  categoryPage: {
    titleTemplate: 'Melhor Kakobuy {uiName} Spreadsheet 2026 — Top Picks & QC',
    descriptionTemplate: 'Navegue pela melhor planilha Kakobuy {uiName} para 2026. Seleção curada de {uiNameLower} premium com links diretos de agentes e fotos QC verificadas.',
    introTemplate: 'Descubra os melhores {uiNameLower} selecionados para la comunidade Kakobuy. Todos os itens são verificados manualmente com links de compra ativos e referências de QC do armazém.',
    homeHubBackLink: '← Hub Kakobuy Spreadsheet',
    introToggleLabel: 'Sobre esta categoria',
    externalBtnTemplate: '{uiName} no MaisonLooks →',
    noProducts: 'Nenhum produto encontrado nesta categoria ainda. Volte em breve!',
  },
};
