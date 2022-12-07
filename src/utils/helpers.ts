import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { CategoryEnum, CategorySlugEnum, CategoryTitleEnum } from 'src/enums/category';
import { constants } from './constants';

const friendlyUrl = (title: string, maxlen: number = 80): string => {
  if (!title) return '';

  const remapInternationalCharToAscii = (c: string): string => {
    if ('àåáâãåa'.indexOf(c) !== -1) return 'a';
    else if ('èéêe'.indexOf(c) !== -1) return 'e';
    else if ('ìíîïi'.indexOf(c) !== -1) return 'i';
    else if ('òóôõøoð'.indexOf(c) !== -1) return 'o';
    else if ('ùúûuu'.indexOf(c) !== -1) return 'u';
    else if ('çccc'.indexOf(c) !== -1) return 'c';
    else if ('zzž'.indexOf(c) !== -1) return 'z';
    else if ('ssšs'.indexOf(c) !== -1) return 's';
    else if ('ñn'.indexOf(c) !== -1) return 'n';
    else if ('ýÿ'.indexOf(c) !== -1) return 'y';
    else if ('gg'.indexOf(c) !== -1) return 'g';
    else if (c === 'r') return 'r';
    else if (c === 'l') return 'l';
    else if (c === 'd') return 'd';
    else if (c === 'ä') return 'ae';
    else if (c === 'ö') return 'oe';
    else if (c === 'ü') return 'ue';
    else if (c === 'ß') return 'ss';
    else if (c === 'Þ') return 'th';
    else if (c === 'h') return 'h';
    else if (c === 'j') return 'j';
    else return '';
  };

  const len = title.length;
  let prevdash = false;
  const sb = [];
  let c = '';

  for (var i = 0; i < len; ++i) {
    c = title[i];
    if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
      sb.push(c);
      prevdash = false;
    } else if (c >= 'A' && c <= 'Z') {
      sb.push(c.toLowerCase());
      prevdash = false;
    } else if (c === ' ' || c === ',' || c === '.' || c === '/' || c === '\\' || c === '-' || c === '_' || c === '=') {
      if (!prevdash && sb.length > 0) {
        sb.push('-');
        prevdash = true;
      }
    } else if (c.charCodeAt(0) >= 128) {
      var remapped = remapInternationalCharToAscii(c);
      if (remapped) {
        sb.push(remapped);
        prevdash = false;
      }
    }
    if (sb.length === maxlen) break;
  }

  if (prevdash) return sb.join('').substring(0, sb.length - 1);
  else return sb.join('');
};

export const helpers = {
  friendlyUrl,
  todayDateDescription: (): string => {
    return format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  },
  formatNewsDate: (data: string): string => {
    return format(new Date(data), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR });
  },
  getCategorySlugById: (slug: number): CategorySlugEnum | null => {
    switch (slug) {
      case CategoryEnum.Brasil:
        return CategorySlugEnum.Brasil;
      case CategoryEnum.Cultura:
        return CategorySlugEnum.Cultura;
      case CategoryEnum.Economia:
        return CategorySlugEnum.Economia;
      case CategoryEnum.Educacao:
        return CategorySlugEnum.Educacao;
      case CategoryEnum.Esportes:
        return CategorySlugEnum.Esportes;
      case CategoryEnum.MidiCia:
        return CategorySlugEnum.MidiCia;
      case CategoryEnum.Mundo:
        return CategorySlugEnum.Mundo;
      case CategoryEnum.Rio:
        return CategorySlugEnum.Rio;
      case CategoryEnum.Saude:
        return CategorySlugEnum.Saude;
      case CategoryEnum.Turismo:
        return CategorySlugEnum.Turismo;
      default:
        return null;
    }
  },
  getCategoryIdBySlug: (slug: string): CategoryEnum | null => {
    switch (slug) {
      case CategorySlugEnum.Brasil:
        return CategoryEnum.Brasil;
      case CategorySlugEnum.Cultura:
        return CategoryEnum.Cultura;
      case CategorySlugEnum.Economia:
        return CategoryEnum.Economia;
      case CategorySlugEnum.Educacao:
        return CategoryEnum.Educacao;
      case CategorySlugEnum.Esportes:
        return CategoryEnum.Esportes;
      case CategorySlugEnum.MidiCia:
        return CategoryEnum.MidiCia;
      case CategorySlugEnum.Mundo:
        return CategoryEnum.Mundo;
      case CategorySlugEnum.Rio:
        return CategoryEnum.Rio;
      case CategorySlugEnum.Saude:
        return CategoryEnum.Saude;
      case CategorySlugEnum.Turismo:
        return CategoryEnum.Turismo;
      default:
        return null;
    }
  },
  getCategoryTitleBySlug: (slug: string): CategoryTitleEnum | null => {
    switch (slug) {
      case CategorySlugEnum.Brasil:
        return CategoryTitleEnum.Brasil;
      case CategorySlugEnum.Cultura:
        return CategoryTitleEnum.Cultura;
      case CategorySlugEnum.Economia:
        return CategoryTitleEnum.Economia;
      case CategorySlugEnum.Educacao:
        return CategoryTitleEnum.Educacao;
      case CategorySlugEnum.Esportes:
        return CategoryTitleEnum.Esportes;
      case CategorySlugEnum.MidiCia:
        return CategoryTitleEnum.MidiCia;
      case CategorySlugEnum.Mundo:
        return CategoryTitleEnum.Mundo;
      case CategorySlugEnum.Rio:
        return CategoryTitleEnum.Rio;
      case CategorySlugEnum.Saude:
        return CategoryTitleEnum.Saude;
      case CategorySlugEnum.Turismo:
        return CategoryTitleEnum.Turismo;
      default:
        return null;
    }
  },
  mountNewsUrl: (title: string, id: number | string, useBaseUrl: boolean = false): string => {
    const newsUrl = `${constants.ROUTE.NOTICIA}/${friendlyUrl(title)}/${id}`;

    if (useBaseUrl) {
      return `${constants.URL.BASE}${newsUrl}`;
    }

    return newsUrl;
  },
  setMetaDescription: (description: string[] = [], addDefault: boolean = true): string => {
    if (addDefault) {
      description.push(constants.HEAD.META.DESCRIPTION.DEFAULT);
    }

    return description.filter((item) => Boolean(item)).join(' ');
  },
  setMetaKeywords: (keywords: string = ''): string => {
    return keywords;
  },
  setMetaTitle: (title: string[] = [], addDefault: boolean = true): string => {
    if (addDefault) {
      title.push(constants.HEAD.META.TITLE.DEFAULT);
    }

    return title.join(' | ');
  },
  setMetaOgImage: (picture?: string): string => {
    if (picture) {
      return picture;
    }

    const baseUrl = constants.URL.BASE ?? '';
    const baseImg = constants.HEAD.META.OG.IMAGE ?? '';

    return `${baseUrl}${baseImg}`;
  },
  setMetaOgImageEditorial: (slug: string): string => {
    const baseUrl = constants.URL.BASE ?? '';

    let baseImg = constants.HEAD.META.OG.IMAGE ?? '';

    if (['rock-in-rio'].includes(slug)) {
      baseImg = constants.HEAD.META.OG.IMAGE_RIR ?? '';
    }

    return `${baseUrl}${baseImg}`;
  },
  setMetaOgSiteName: (): string => {
    return constants.HEAD.META.OG.SITE_NAME;
  },
  setMetaOgUrl: (route?: string): string => {
    const baseUrl = constants.URL.BASE ?? '';

    return route ? `${baseUrl}${route}` : baseUrl;
  },
  setImageUrl: (image: string): string => {
    return image ? `${constants.URL.CDN}/${image}` : '';
  },
  setImageUrlHeadliness: (image: string): string => {
    return image ? `${constants.URL.CDN}/destaques/${image}` : '';
  },
  setImageUrlNews: (image: string, size: 'thumb' | 'normal' | 'large' = 'normal'): string => {
    if (!image) {
      return '';
    }

    const URL_CDN = `${constants.URL.CDN}/noticias`;

    if (size === 'thumb') {
      return `${URL_CDN}/thumb/${image}`;
    }

    if (size === 'large') {
      return `${URL_CDN}/large/${image}`;
    }

    return `${URL_CDN}/${image}`;
  },
};
