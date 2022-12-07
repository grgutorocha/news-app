interface INews {
  not_id: number;
  not_tit: string;
  not_tit_editoria: string;
  not_tit_materia: string;
  not_res: string;
  not_data: string;
  not_autor: number;
  not_texto: string;
  not_hora: string;
  not_cat: string;
  nome_url: string;
  tags: string;
  keywords: string;
  imagem: string;
  imagem2: string;
  posicaoimagem: string;
  posicaovideo: string;
  multimidia: string;
  posicaomultimidia: string;
  not_excl: string;
  credito: string;
  legenda: string;
  clicks: number;
  galeriadefotos: number;
  posicaogaleria: number;
  shorturl: string;
  atualizacao: string;
  datainsercao: string;
  relacionadaum: number;
  relacionadadois: number;
  relacionadatres: number;
  minutoaminuto: number;
  situacao: number;
  data_insercao: string | null;
  data_atualizacao: string;
}

export const newsBySlugMock: INews[] = [
  {
    not_id: 102928,
    not_tit: 'Polícia reforça esquema de segurança no Complexo da Maré',
    not_tit_editoria: 'Polícia reforça esquema de segurança no Complexo da Maré Ed',
    not_tit_materia: 'Polícia reforça esquema de segurança no Complexo da Maré Mat',
    not_res: '',
    not_data: '2013-06-25',
    not_autor: 433,
    not_texto:
      '<p><strong>RIO DE JANEIRO</strong><em> (Ag\u00eancia Brasil)</em> - Cerca de 500 policiais do Batalh\u00e3o de Opera\u00e7\u00f5es Especiais (Bope), do Batalh\u00e3o de Choque, da For\u00e7a Nacional e do Batalh\u00e3o de A\u00e7\u00e3o com C\u00e3es ocupam a favela Nova Holanda, no Complexo da Mar\u00e9, zona norte da cidade. A opera\u00e7\u00e3o foi deflagrada na noite de ontem (24), depois que um sargento do Bope e um morador morreram durante troca de tiros entre a Pol\u00edcia Militar (PM) e traficantes. Um homem suspeito de pertencer ao tr\u00e1fico de drogas na favela tamb\u00e9m morreu baleado.</p>\r\n<p>O clima na comunidade \u00e9 bastante tenso e novos tiroteios foram registrados na manh\u00e3 de hoje (25). Segundo a Pol\u00edcia Militar, mais quatro homens ainda n\u00e3o identificados morreram no confronto. O com\u00e9rcio que funciona na entrada da Nova Holanda n\u00e3o abriu as portas.</p>\r\n<p>Ainda de acordo com a pol\u00edcia, cinco homens foram presos e um menor de 16 anos apreendido. Na mochila que ele carregava estavam muni\u00e7\u00e3o e coca\u00edna em pasta. Os homens foram encaminhados para a Delegacia de Bonsucesso e o menor para a Delegacia de Prote\u00e7\u00e3o \u00e0 Crian\u00e7a e ao Adolescente. Pelo menos dez pessoas ficaram feridas e foram levadas para o Hospital Federal de Bonsucesso. Ainda n\u00e3o h\u00e1 informa\u00e7\u00f5es sobre o estado de sa\u00fade das v\u00edtimas.</p>\r\n<p>O clima de tens\u00e3o na favela Nova Holanda come\u00e7ou no fim da tarde de ontem, depois que a Pol\u00edcia Militar entrou na comunidade em busca de homens que aproveitaram uma manifesta\u00e7\u00e3o nas proximidades para promover um arrast\u00e3o, roubando mercadorias de lojas e assaltando motoristas que passavam pela Avenida Brasil. O Bope foi chamado para dar refor\u00e7o aos PMs, e o sargento Ednelson Jer\u00f4nimo da Silva acabou baleado na troca de tiros. Ele vai ser enterrado hoje \u00e0 tarde, no Cemit\u00e9rio Jardim da Saudade, em Paci\u00eancia, zona oeste do Rio.</p>',
    not_hora: '12:04:00',
    not_cat: '13;',
    nome_url: '2013/06/25/polciareforaesquemadesegurananocomplexodamar1205th',
    tags: '',
    keywords: 'Complexo da Mar\u00e9',
    imagem: '',
    imagem2: '',
    posicaoimagem: 'Direita',
    posicaovideo: 'Abaixo',
    multimidia: '',
    posicaomultimidia: '',
    not_excl: '0',
    credito: '',
    legenda: '',
    clicks: 129,
    galeriadefotos: 0,
    posicaogaleria: 0,
    shorturl: 'http://goo.gl/cPqCe',
    atualizacao: '0000-00-00 00:00:00',
    datainsercao: '2013-06-25 08:05:38',
    relacionadaum: 0,
    relacionadadois: 0,
    relacionadatres: 0,
    minutoaminuto: 0,
    situacao: 1,
    data_insercao: null,
    data_atualizacao: '2017-07-26T04:25:43.000000Z',
  },
];
