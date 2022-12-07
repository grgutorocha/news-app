export const constants = {
  HEAD: {
    META: {
      DESCRIPTION: {
        DEFAULT:
          'Entenda o que está acontecendo e fique por dentro das últimas notícias do Brasil e do mundo, sobre política, economia, emprego, educação, saúde, tecnologia, ciência, cultura, shows, música, esportes, futebol, automobilismo. Acesse OREPORTER.COM',
        ANUNCIE:
          'Conheça as soluções de conteúdo que o OREPORTER.COM oferece para a sua marca e comece a anunciar online. Aplique conosco a sua estratégia de marketing digital. Alcance públicos qualificados, que estão em busca de informação de verdade na Internet.',
        BUSCA:
          'Entenda o que está acontecendo e fique por dentro das últimas notícias do Brasil e do mundo, sobre política, economia, emprego, educação, saúde, tecnologia, ciência, cultura, shows, música, esportes, futebol, automobilismo. Acesse OREPORTER.COM',
        EXPEDIENTE:
          'OREPORTER.COM tem uma equipe de profissionais que gosta do que faz. Essa equipe está comprometida com o conteúdo ágil, com a verdade dos fatos e com o Jornalismo profissional e apartidário.',
        FALE_CONOSCO:
          'Falar com a gente é muito fácil. Basta enviar uma mensagem para a nossa redação, usando um dos canais disponíveis no nosso Fale Conosco ou ainda através das nossas redes sociais. A gente responde logo!',
        NA_HORA:
          'Você confere aqui as últimas notícias do Brasil e do mundo, sobre política, economia, emprego, educação, saúde, tecnologia, ciência, cultura, shows, música, esportes, futebol, automobilismo. Acesse: oreporter.com/na-hora',
        O_REPORTER_E_VOCE:
          'Colabore, compartilhe a sua notícia. Aquele buraco que o prefeito não fecha, aquela imagem de segurança que esclarece crimes, seja texto, foto, áudio ou vídeo manda pra gente. Esta é a seção de jornalismo colaborativo de OREPORTER.COM. Aqui você é o repórter.',
        QUEM_SOMOS:
          'OREPORTER.COM é um portal de notícias brasileiro criado por jornalistas profissionais. As notícias do Brasil e do mundo são sempre temas atuais em nossas páginas, sendo tratadas com isenção. Somos um veículo de informação nacional, apartidário e sempre em busca da verdade dos fatos.',
        TRABALHE_CONOSCO:
          'Nunca temos vaga. Temos oportunidade. Vai que ela surja e você seja o perfil certo. Se quer vestir a nossa camisa azul, é bom contar pra gente um pouco de você e dizer por que gostaria de trabalhar aqui.',
      },
      TITLE: {
        ANUNCIE: 'Anuncie',
        BUSCA: 'Busca',
        COLUNA: 'Coluna',
        DEFAULT: 'O Repórter | Informação de Verdade na Internet',
        EXPEDIENTE: 'Expediente',
        FALE_CONOSCO: 'Fale Conosco',
        NA_HORA: 'Na Hora',
        O_REPORTER_E_VOCE: 'O Repórter é Você',
        QUEM_SOMOS: 'Quem Somos',
        TRABALHE_CONOSCO: 'Trabalhe Conosco',
      },
      OG: {
        IMAGE: '/image/logo-o-reporter-share.png',
        IMAGE_RIR: '/image/logo-o-reporter-rir-share.png',
        SITE_NAME: 'O Repórter',
      },
    },
  },
  MESSAGE: {
    ERROR: {
      CONTACT_US: 'Ocorreu um erro no envio do formulário.',
      REPORTER_IS_YOU: 'Ocorreu um erro no envio do formulário.',
      WORK_WITH_US: 'Ocorreu um erro no envio do formulário.',
    },
    SUCCESS: {
      CONTACT_US: 'Formulário enviado com sucesso.',
      REPORTER_IS_YOU: 'Formulário enviado com sucesso.',
      WORK_WITH_US: 'Formulário enviado com sucesso.',
    },
  },
  PAGINATION: {
    PER_PAGE: 10,
  },
  ROUTE: {
    ANUNCIE: '/anuncie',
    BUSCA: '/busca',
    HOME: '/',
    EDITORIA: {
      BASE: '/editoria',
      BRASIL: '/editoria/brasil',
      COPDA_DO_MUNDO: '/editoria/copa-2022',
      CULTURA: '/editoria/cultura',
      ECONOMIA: '/editoria/economia',
      EDUCACAO: '/editoria/educacao',
      ELEICOES_2022: '/editoria/eleicoes-2022',
      ESPORTES: '/editoria/esportes',
      MIDIA_CIA: '/editoria/midia-cia',
      MUNDO: '/editoria/mundo',
      RIO: '/editoria/rio',
      ROCK_IN_RIO: '/editoria/rock-in-rio',
      SAUDE: '/editoria/saude',
      TRENDING_TOPICS: '/editoria/trending-topics',
      TURISMO: '/editoria/turismo',
      TECNOLOGIA: '/editoria/tecnologia',
    },
    EXPEDIENTE: '/expediente',
    FALE_CONOSCO: '/fale-conosco',
    NA_HORA: '/na-hora',
    NOTICIA: '/noticia',
    O_REPORTER_E_VOCE: '/o-reporter-e-voce',
    QUEM_SOMOS: '/quem-somos',
    TRABALHE_CONOSCO: '/trabalhe-conosco',
  },
  URL: {
    BASE: process.env.NEXT_PUBLIC_BASE_URL,
    CDN: process.env.NEXT_PUBLIC_CDN_URL,
    EXTERNAL: {
      INSTAGRAM: 'https://instagram.com/oreporter.com.br',
      FACEBOOK: 'https://www.facebook.com/siteoreporter',
      TWITTER: 'https://twitter.com/o_reporter',
      YOUTUBE: 'https://www.youtube.com/user/oreporterdobrasil',
      WHATSAPP: 'https://wa.me/5521976785125?lang=pt_br',
    },
  },
  VALIDATION: {
    CONTACT_US: {
      REQUIRED: 'Este campo é obrigatório.',
      EMAIL_VALID: 'Informe um e-mail válido.',
    },
    REPORTER_IS_YOU: {
      REQUIRED: 'Este campo é obrigatório.',
      EMAIL_VALID: 'Informe um e-mail válido.',
    },
    WORK_WITH_US: {
      REQUIRED: 'Este campo é obrigatório.',
      EMAIL_VALID: 'Informe um e-mail válido.',
    },
  },
};
