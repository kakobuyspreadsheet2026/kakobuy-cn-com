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
  title: 'Melhor Kakobuy Spreadsheet 2026 (Atualizado) — 5.000+ Reps Links & QC',
  description:
    'A melhor Kakobuy Spreadsheet para 2026. Navegue em nosso catálogo atualizado de reps para tênis, moletons e jaquetas com links diretos e fotos QC.',
  keywords:
    'diretório Kakobuy, catálogo de réplicas, links Weidian, guia de controle de qualidade Taobao, despachante de compras na China',
  webPageName: 'Melhor Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
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
      h3: '1. O que é uma Kakobuy Spreadsheet?',
      paragraphs: [
        'Na comunidade, uma "spreadsheet" é uma grade curada de links (Taobao, Weidian, 1688) com informações de lotes e fotos QC. É um atalho para encontrar os melhores produtos rapidamente.',
        'Nuestra plataforma transforma essas listas estáticas em uma experiência interativa. Use nossas categorias para encontrar artigos verificados.',
      ],
    },
    {
      h3: '2. Como comprar?',
      paragraphs: [
        'O processo é simples: encontre um artigo em nosso catálogo, copie o link HTTPS e cole na barra de busca do Kakobuy. Lá você poderá escolher tamanho, cor e finalizar sua compra.',
      ],
    },
    {
      h3: '3. Controle de Qualidade (QC)',
      paragraphs: [
        'Assim que seu artigo chegar ao armazém, você receberá fotos profissionais de QC. Verifique-as cuidadosamente para validar a qualidade antes de aprovar o envio internacional.',
      ],
    },
    {
      h3: '4. Custos e Frete',
      paragraphs: [
        'O custo total inclui o envio doméstico, as taxas do agente e o frete internacional. O peso volumétrico é essencial para calcular o custo final do envio do seu pacote.',
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
    externalBtnTemplate: 'Ver catálogo completo de {uiName} no MaisonLooks →',
    noProducts: 'Nenhum produto encontrado nesta categoria ainda. Volte em breve!',
  },
};
