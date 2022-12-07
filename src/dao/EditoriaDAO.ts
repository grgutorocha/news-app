import { IEditoria, INaHora } from 'src/api/services/headlines';
import { ILevel01Props } from 'src/containers/Editoria/components/Level01';
import { ILevel02Props } from 'src/containers/Editoria/components/Level02';
import { ILevel03Props } from 'src/containers/Editoria/components/Level03';
import { ILevel04Props } from 'src/containers/Editoria/components/Level04';
import { ILevel05Props } from 'src/containers/Editoria/components/Level05';
import { INaHoraProps } from 'src/containers/Editoria/components/NaHora';
import { helpers } from 'src/utils/helpers';

const level01 = (data: IEditoria[]): ILevel01Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  const item = data[0];
  const title = item.not_tit_editoria || item.not_tit || item.not_tit_materia;

  return {
    title,
    description: item.not_res,
    url: helpers.mountNewsUrl(title, item.not_id),
  };
};

const level02 = (data: IEditoria[]): ILevel02Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit_editoria || item.not_tit || item.not_tit_materia;

      return {
        title,
        url: helpers.mountNewsUrl(title, item.not_id),
      };
    }),
  };
};

const level03 = (data: IEditoria[]): ILevel03Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  const item = data[0];
  const title = item.not_tit_editoria || item.not_tit || item.not_tit_materia;

  return {
    title,
    picture: helpers.setImageUrlHeadliness(item.imagem),
    url: helpers.mountNewsUrl(title, item.not_id),
  };
};

const level04 = (data: IEditoria[]): ILevel04Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit_editoria || item.not_tit || item.not_tit_materia;

      return {
        title,
        url: helpers.mountNewsUrl(title, item.not_id),
        picture: helpers.setImageUrlHeadliness(item.imagem),
      };
    }),
  };
};

const level05 = (data: IEditoria[]): ILevel05Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  const item = data[0];
  const title = item.not_tit_editoria || item.not_tit || item.not_tit_materia;

  return {
    list: data.map((item) => {
      const title = item.not_tit_editoria || item.not_tit || item.not_tit_materia;

      return {
        title,
        url: helpers.mountNewsUrl(title, item.not_id),
        picture: helpers.setImageUrlHeadliness(item.imagem),
      };
    }),
  };
};

const naHora = (data: INaHora): INaHoraProps | null => {
  if (!Boolean(data.list.length > 0)) {
    return null;
  }

  return {
    title: data.title,
    slug: data.slug,
    list: data.list.map((item) => {
      const title = item.not_tit_editoria || item.not_tit || item.not_tit_materia;

      return {
        title,
        url: helpers.mountNewsUrl(title, item.not_id),
        dateTime: helpers.formatNewsDate(`${item.not_data}T${item.not_hora}`),
        description: item.not_res,
        picture: helpers.setImageUrlHeadliness(item.imagem || item.imagem2),
      };
    }),
  };
};

export const editoriaDAO = {
  level01,
  level02,
  level03,
  level04,
  level05,
  naHora,
};
