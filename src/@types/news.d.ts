type PositionType = 'Horizontal' | 'Esquerda' | 'Direita';
type PositionVideoType = 'Acima' | 'AcimaDireita' | 'AcimaEsquerda' | 'Abaixo';

interface IAuthor {
  user_id: number;
  user_nome: string;
  imagem?: string;
}

interface ICategoryPivot {
  not_id: number;
  cat_id: number;
}

interface ICategory {
  cat_id?: number;
  cat_nome?: string;
  cat_slug?: string;
  cat_desc?: string;
  pivot?: ICategoryPivot;
}

interface IRelated {
  not_id: number;
  not_tit: string;
  not_res?: string;
  imagem?: string;
  imagem2?: string;
}

interface INews {
  not_id: number;
  not_tit: string;
  not_tit_editoria: string;
  not_tit_materia: string;
  not_res: string;
  not_data?: string;
  not_autor: number;
  not_texto: string;
  not_hora?: string;
  not_cat: string;
  nome_url: string;
  tags: string;
  keywords: string;
  imagem: string;
  imagem2: string;
  imagem2_zoom?: string;
  imagem_fotao: string;
  posicaoimagem: PositionType;
  posicaovideo: PositionVideoType;
  multimidia: string;
  posicaomultimidia: string;
  not_excl: string;
  credito: string;
  legenda: string;
  credito_fotao?: string;
  legenda_fotao?: string;
  clicks: number;
  galeriadefotos: number;
  posicaogaleria: number;
  shorturl: string;
  atualizacao?: string;
  datainsercao: string;
  relacionadaum: number;
  relacionadadois: number;
  relacionadatres: number;
  minutoaminuto: number;
  situacao: number;
  data_insercao: string | null;
  data_atualizacao: string;
  author?: IAuthor;
  category?: ICategory[];
  related_one?: IRelated | null;
  related_two?: IRelated | null;
  related_three?: IRelated | null;
  twitter_id?: string;
}
