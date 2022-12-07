import { INews, INaHoraItem } from 'src/api/services/headlines';
import { ILevel01Props } from 'src/containers/Home/components/Level01';
import { ILevel02Props } from 'src/containers/Home/components/Level02';
import { ILevel03Props } from 'src/containers/Home/components/Level03';
import { ILevel04Props } from 'src/containers/Home/components/Level04';
import { ILevel05Props } from 'src/containers/Home/components/Level05';
import { ILevel06Props } from 'src/containers/Home/components/Level06';
import { ILevel08Props } from 'src/containers/Home/components/Level08';
import { ILevel10Props } from 'src/containers/Home/components/Level10';
import { ILevel11Props } from 'src/containers/Home/components/Level11';
import { INaHoraProps } from 'src/containers/Home/components/NaHora';
import { helpers } from 'src/utils/helpers';

const level01 = (data: INews[]): ILevel01Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  const item = data[0];
  const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

  return {
    title,
    url: helpers.mountNewsUrl(title, item.not_id),
  };
};

const level02 = (data: INews[]): ILevel02Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

      return {
        title,
        url: helpers.mountNewsUrl(title, item.not_id),
      };
    }),
  };
};

const level03 = (data: INews[]): ILevel03Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  const item = data[0];
  const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

  return {
    title,
    url: helpers.mountNewsUrl(title, item.not_id),
    picture: helpers.setImageUrlHeadliness(item.imagem),
  };
};

const level04 = (data: INews[]): ILevel04Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

      return {
        title,
        picture: helpers.setImageUrlHeadliness(item.imagem),
        url: helpers.mountNewsUrl(title, item.not_id),
      };
    }),
  };
};

const level05 = (data: INews[]): ILevel05Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

      return {
        title,
        picture: helpers.setImageUrlHeadliness(item.imagem),
        url: helpers.mountNewsUrl(title, item.not_id),
      };
    }),
  };
};

const level06 = (data: INews[]): ILevel06Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

      return {
        title,
        picture: helpers.setImageUrlHeadliness(item.imagem),
        url: helpers.mountNewsUrl(title, item.not_id),
      };
    }),
  };
};

const level08 = (data: INews[]): ILevel08Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

      return {
        title,
        picture: helpers.setImageUrlHeadliness(item.imagem),
        url: helpers.mountNewsUrl(title, item.not_id),
      };
    }),
  };
};

const level10 = (data: INews[]): ILevel10Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

      return {
        title,
        picture: helpers.setImageUrlHeadliness(item.imagem),
        url: helpers.mountNewsUrl(title, item.not_id),
      };
    }),
  };
};

const level11 = (data: INews[]): ILevel11Props | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  const item = data[0];
  const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;
  const subtitle = item?.not_res;

  return {
    title,
    subtitle,
    url: helpers.mountNewsUrl(title, item.not_id),
    picture: helpers.setImageUrlHeadliness(item.imagem),
  };
};

const naHora = (data: INaHoraItem[]): INaHoraProps | null => {
  if (!Boolean(data.length > 0)) {
    return null;
  }

  return {
    list: data.map((item) => {
      const title = item.not_tit || item.not_tit_editoria || item.not_tit_materia;

      return {
        title,
        description: item.not_res,
        dateTime: helpers.formatNewsDate(`${item.not_data}T${item.not_hora}`),
        picture: helpers.setImageUrlNews(item.imagem2),
        url: helpers.mountNewsUrl(title, item.not_id),
      };
    }),
  };
};

export const homeDAO = {
  level01,
  level02,
  level03,
  level04,
  level05,
  level06,
  naHora,
  level08,
  level10,
  level11,
};
