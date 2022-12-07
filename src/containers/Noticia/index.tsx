import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import Categories from 'src/components/Categories';
import GoogleAd from 'src/components/GoogleAd';
import BoxNaHora from 'src/components/BoxNaHora';
import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';

import { BigPicture } from './components/BigPicture';
import { Picture } from './components/Picture';
import { YouTubeVideo } from './components/YouTubeVideo';
import { Relateds } from './components/Relateds';
import {
  Wrapper,
  WrapperFull,
  Title,
  Resume,
  Line,
  Info,
  InfoAvatar,
  InfoAvatarImage,
  InfoData,
  InfoAuthor,
  InfoPublishDate,
  InfoUpdateDate,
  SocialShare,
  SocialShareTitle,
  SocialShareList,
  TextContent,
  WrapperContent,
  WrapperContentSidebar,
  Content,
  ContentCenter,
  Sidebar,
  VerticalSpacer,
  Boxes,
} from './styles';

const { URL } = constants;
const videoPositionsTop: PositionVideoType[] = ['Acima', 'AcimaDireita', 'AcimaEsquerda'];
const videoPositionsBottom: PositionVideoType[] = ['Abaixo'];

const Noticia = (props: INews) => {
  const {
    not_id,
    not_tit,
    not_res,
    author,
    not_data,
    atualizacao,
    not_texto,
    category,
    credito,
    legenda,
    credito_fotao,
    legenda_fotao,
    imagem,
    imagem2,
    imagem2_zoom,
    imagem_fotao,
    posicaoimagem,
    posicaovideo,
    multimidia,
    posicaomultimidia,
    related_one,
    related_two,
    related_three,
    twitter_id,
  } = props;

  const shareUrl = helpers.mountNewsUrl(not_tit, not_id, true);
  const relateds = [related_one, related_two, related_three].filter((related) => !!related);
  const randomCategory = category ? category[Math.floor(Math.random() * category.length)] : undefined;

  return (
    <Wrapper>
      <WrapperContent>
        <ContentCenter>
          <GoogleAd name="billboard" slot="999999" />
        </ContentCenter>
      </WrapperContent>
      <WrapperContent>
        <Content>
          {category && <Categories list={category} />}
          <Title>{not_tit}</Title>
          {not_res && <Resume>{not_res}</Resume>}
        </Content>
      </WrapperContent>
      {imagem_fotao && (
        <WrapperFull>
          <BigPicture url={imagem_fotao} credit={credito_fotao} description={legenda_fotao} />
        </WrapperFull>
      )}
      <WrapperContent>
        <Content>
          <Line>
            <Info>
              {author?.imagem && (
                <InfoAvatar>
                  <InfoAvatarImage src={`${URL.CDN}/${author?.imagem}`} alt={`Avatar ${author?.user_nome}`} />
                </InfoAvatar>
              )}
              <InfoData>
                {author?.user_nome && <InfoAuthor>Por {author?.user_nome}</InfoAuthor>}
                {not_data && <InfoPublishDate>{not_data}</InfoPublishDate>}
                {atualizacao && <InfoUpdateDate>{atualizacao}</InfoUpdateDate>}
              </InfoData>
            </Info>
            <SocialShare>
              <SocialShareTitle>Compartilhe a notícia:</SocialShareTitle>
              <SocialShareList>
                <TwitterShareButton openShareDialogOnClick url={shareUrl} via="o_reporter">
                  <TwitterIcon size={27} round />
                </TwitterShareButton>
                <FacebookShareButton openShareDialogOnClick url={shareUrl}>
                  <FacebookIcon size={27} round />
                </FacebookShareButton>
                <LinkedinShareButton openShareDialogOnClick url={shareUrl}>
                  <LinkedinIcon size={27} round />
                </LinkedinShareButton>
                <WhatsappShareButton openShareDialogOnClick url={shareUrl}>
                  <WhatsappIcon size={27} round />
                </WhatsappShareButton>
              </SocialShareList>
            </SocialShare>
          </Line>
        </Content>
      </WrapperContent>
      <WrapperContentSidebar>
        <Content>
          <div>
            {videoPositionsTop.includes(posicaovideo) && imagem && <YouTubeVideo videoId={imagem} />}
            {imagem2 && (
              <Picture
                position={posicaoimagem}
                credit={credito}
                description={legenda}
                url={imagem2}
                urlLarge={imagem2_zoom}
              />
            )}
            <TextContent
              dangerouslySetInnerHTML={{
                __html: not_texto,
              }}
            />
            {videoPositionsBottom.includes(posicaovideo) && imagem && <YouTubeVideo videoId={imagem} />}
            {multimidia && (
              <TextContent
                dangerouslySetInnerHTML={{
                  __html: multimidia,
                }}
              />
            )}
            {twitter_id && <TwitterTweetEmbed tweetId={twitter_id} />}
          </div>
          {relateds?.length > 0 && (
            <>
              <VerticalSpacer height={48} />
              <Relateds list={relateds} />
            </>
          )}
        </Content>
        <Sidebar>
          <Boxes>
            {randomCategory && (
              <BoxNaHora
                title={`Últimas de ${randomCategory.cat_nome}`}
                categories={[randomCategory.cat_id]}
                newsId={not_id}
              />
            )}
          </Boxes>
          <VerticalSpacer />
          <GoogleAd name="medium" slot="999999" />
          <VerticalSpacer />
          <GoogleAd name="half-page" slot="999999" />
        </Sidebar>
      </WrapperContentSidebar>
    </Wrapper>
  );
};

export default Noticia;
