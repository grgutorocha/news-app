interface ICategoryPivot {
  not_id: number;
  cat_id: number;
}

interface ICategory {
  cat_id: number;
  cat_nome: string;
  cat_slug?: string;
  pivot?: ICategoryPivot;
}

interface INaHoraItem {
  not_id: number;
  not_tit: string;
  not_res: string;
  not_data: string;
  not_hora: string;
  imagem: string;
  imagem2: string;
  category?: ICategory[];
}

interface INaHora {
  current_page: number;
  total: number;
  data: INaHoraItem[];
}
