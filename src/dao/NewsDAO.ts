import { helpers } from 'src/utils/helpers';

const news = (data: INews[]): INews => {
  const newsData = data.map((item) => {
    item.not_data = Boolean(item.not_data && item.not_hora)
      ? helpers.formatNewsDate(`${item.not_data}T${item.not_hora}`)
      : '';

    item.atualizacao =
      !item.atualizacao || item.atualizacao === '0000-00-00 00:00:00'
        ? ''
        : `Atualizada em ${helpers.formatNewsDate(item.atualizacao?.split(' ').join('T'))}`;

    item.imagem2_zoom = helpers.setImageUrlNews(item.imagem2, 'large');
    item.imagem2 = helpers.setImageUrlNews(item.imagem2);
    item.imagem_fotao = helpers.setImageUrlNews(item.imagem_fotao, 'large');

    if (item.related_one) {
      item.related_one.imagem = helpers.setImageUrlNews(item.related_one.imagem ?? '');
      item.related_one.imagem2 = helpers.setImageUrlNews(item.related_one.imagem2 ?? '');
    }

    if (item.related_two) {
      item.related_two.imagem = helpers.setImageUrlNews(item.related_two.imagem ?? '');
      item.related_two.imagem2 = helpers.setImageUrlNews(item.related_two.imagem2 ?? '');
    }

    if (item.related_three) {
      item.related_three.imagem = helpers.setImageUrlNews(item.related_three.imagem ?? '');
      item.related_three.imagem2 = helpers.setImageUrlNews(item.related_three.imagem2 ?? '');
    }

    return item;
  });

  return newsData[0];
};

export const newsDAO = {
  news,
};
