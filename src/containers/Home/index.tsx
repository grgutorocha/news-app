import GoogleAd from 'src/components/GoogleAd';
import ContagemRegressiva from 'src/components/ContagemRegressiva';

import Level01, { ILevel01Props } from './components/Level01';
import Level02, { ILevel02Props } from './components/Level02';
import Level03, { ILevel03Props } from './components/Level03';
import Level04, { ILevel04Props } from './components/Level04';
import Level05, { ILevel05Props } from './components/Level05';
import Level06, { ILevel06Props } from './components/Level06';
import NaHora, { INaHoraProps } from './components/NaHora';
import Level08, { ILevel08Props } from './components/Level08';
import Level10, { ILevel10Props } from './components/Level10';
import Level11, { ILevel11Props } from './components/Level11';

import {
  Wrapper,
  WrapperContent,
  WrapperContentLevel0102,
  WrapperContentLevel03,
  WrapperContentLevel11,
  WrapperContentPubTop,
  Level0102EmptySpacer,
  Content,
  ContentCenter,
} from './styles';

export interface IHome {
  level01?: ILevel01Props | null;
  level02?: ILevel02Props | null;
  level03?: ILevel03Props | null;
  level04?: ILevel04Props | null;
  level05?: ILevel05Props | null;
  level06?: ILevel06Props | null;
  naHora?: INaHoraProps | null;
  level08?: ILevel08Props | null;
  level10?: ILevel10Props | null;
  level11?: ILevel11Props | null;
}

const Home = ({ level01, level02, level03, level04, level05, level06, level08, level10, level11, naHora }: IHome) => {
  const hasLevel01or02 = level01 || level02;

  return (
    <>
      <Wrapper>
        <WrapperContentPubTop>
          <ContentCenter>
            <GoogleAd name="billboard" slot="999999" />
          </ContentCenter>
        </WrapperContentPubTop>
        {hasLevel01or02 ? (
          <WrapperContentLevel0102>
            <Content>
              {level01 && <Level01 {...level01} />}
              {level02 && <Level02 {...level02} />}
            </Content>
          </WrapperContentLevel0102>
        ) : (
          <Level0102EmptySpacer />
        )}
        {level11 ? (
          <WrapperContentLevel11>
            <Content>
              <Level11 {...level11} />
            </Content>
          </WrapperContentLevel11>
        ) : (
          <>
            {level03 && (
              <WrapperContentLevel03>
                <Content>
                  <Level03 {...level03} />
                </Content>
              </WrapperContentLevel03>
            )}
          </>
        )}
        {/* <WrapperContent>
          <Content>
            <ContagemRegressiva />
          </Content>
        </WrapperContent> */}
        {level04 && (
          <WrapperContent>
            <Content>
              <Level04 {...level04} />
            </Content>
          </WrapperContent>
        )}
        <WrapperContentPubTop>
          <ContentCenter>
            <GoogleAd name="maxiboard" slot="999999" />
          </ContentCenter>
        </WrapperContentPubTop>
        {level05 && (
          <WrapperContent>
            <Content>
              <Level05 {...level05} />
            </Content>
          </WrapperContent>
        )}
        {level06 && (
          <WrapperContent>
            <Content>
              <Level06 {...level06} />
            </Content>
          </WrapperContent>
        )}
        {level08 && (
          <WrapperContent>
            <Content>
              <Level08 {...level08} />
            </Content>
          </WrapperContent>
        )}
        {level10 && (
          <WrapperContent>
            <Content>
              <Level10 {...level10} />
            </Content>
          </WrapperContent>
        )}
        {naHora && (
          <WrapperContent>
            <Content>
              <NaHora {...naHora} />
            </Content>
          </WrapperContent>
        )}
        <WrapperContent>
          <ContentCenter>
            <GoogleAd name="maxiboard" slot="999999" />
          </ContentCenter>
        </WrapperContent>
      </Wrapper>
    </>
  );
};

export default Home;
