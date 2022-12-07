import { ILevel01Props } from 'src/containers/Editoria/components/Level01';
import { ILevel02Props } from 'src/containers/Editoria/components/Level02';
import { ILevel03Props } from 'src/containers/Editoria/components/Level03';
import { ILevel04Props } from 'src/containers/Editoria/components/Level04';
import { ILevel05Props } from 'src/containers/Editoria/components/Level05';
import { INewsProps } from 'src/containers/Editoria/components/NaHora/components/News';
import { helpers } from 'src/utils/helpers';

export const level01Mock: ILevel01Props = {
  title: 'Evergrande anuncia pequeno acordo e tenta tranquilizar mercados',
  description: 'Gigante do setor imobiliário está à beira da falência',
  url: helpers.mountNewsUrl('Evergrande anuncia pequeno acordo e tenta tranquilizar mercados', 139630),
};

export const level02Mock: ILevel02Props = {
  list: [
    {
      title: 'PIB fica estável no segundo trimestre deste ano',
      url: helpers.mountNewsUrl('PIB fica estável no segundo trimestre deste ano', 139188),
    },
    {
      title: 'Semana Brasil 2021 começa nesta sexta com descontos de até 70%',
      url: helpers.mountNewsUrl('Semana Brasil 2021 começa nesta sexta com descontos de até 70%', 139219),
    },
    {
      title: 'Decreto cria a Empresa Brasileira de Participações em Energia Nuclear',
      url: helpers.mountNewsUrl('Decreto cria a Empresa Brasileira de Participações em Energia Nuclear', 139410),
    },
    {
      title: 'Começam a valer hoje novas alíquotas do IOF',
      url: helpers.mountNewsUrl('Começam a valer hoje novas alíquotas do IOF', 139572),
    },
    {
      title: 'Estimativa de inadimplência do varejo em setembro fica em 4,06%',
      url: helpers.mountNewsUrl('Estimativa de inadimplência do varejo em setembro fica em 4,06%', 139609),
    },
    {
      title: 'Evergrande anuncia pequeno acordo e tenta tranquilizar mercados',
      url: helpers.mountNewsUrl('Evergrande anuncia pequeno acordo e tenta tranquilizar mercados', 139630),
    },
  ],
};

export const level03Mock: ILevel03Props = {
  title: 'Atividade do comércio registra queda de 0,7% em agosto, mostra Serasa',
  url: helpers.mountNewsUrl('Atividade do comércio registra queda de 0,7% em agosto, mostra Serasa', 139374),
  picture: helpers.setImageUrl('5945db260a20211119030143.jpg'),
};

export const level04Mock: ILevel04Props = {
  list: [
    {
      title: 'Atividade do comércio registra queda de 0,7% em agosto, mostra Serasa',
      url: helpers.mountNewsUrl('Atividade do comércio registra queda de 0,7% em agosto, mostra Serasa', 139374),
      picture: helpers.setImageUrl('5945db260a20211119030143.jpg'),
    },
  ],
};

export const level05Mock: ILevel05Props = {
  list: [
    {
      title: 'Estimativa de inadimplência do varejo em setembro fica em 4,06%',
      url: helpers.mountNewsUrl('Estimativa de inadimplência do varejo em setembro fica em 4,06%', 139609),
      picture: helpers.setImageUrl('5945db260a20211119030143.jpg'),
    },
  ],
};

export const naHoraListMock: INewsProps[] = [
  {
    url: helpers.mountNewsUrl('Publicado decreto que aumenta IOF para custear Auxílio Brasil', 139525),
    dateTime: '11:31',
    title: 'Publicado decreto que aumenta IOF para custear Auxílio Brasil',
    description: 'Novas alíquotas serão aplicadas de 20 de setembro a 31 de dezembro',
    picture: helpers.setImageUrl('5945db260a20211119030143.jpg'),
  },
];
