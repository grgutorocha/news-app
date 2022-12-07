import MenuButton, { IMenuButton } from 'src/components/MenuButton';
import SocialShare from 'src/components/SocialShare';
import Logotype from 'src/components/Logotype';
import SearchButton from 'src/components/SearchButton';

import { Wrapper, Container, ContentMenuButton, ContentLogotype, ContentSocialShare, ContentSocial } from './styles';
import { useMainLayoutContext } from 'src/layouts/Main/Context';

export interface IPrincipal extends IMenuButton {}

export const Principal = () => {
  const { onOpenMenu, onOpenSearchForm } = useMainLayoutContext();

  return (
    <Wrapper>
      <Container>
        <ContentMenuButton>
          <MenuButton onOpenMenu={onOpenMenu} />
        </ContentMenuButton>
        <ContentLogotype>
          <Logotype />
        </ContentLogotype>
        <ContentSocialShare>
          <ContentSocial>
            <SocialShare />
          </ContentSocial>
          <SearchButton onOpenSearch={onOpenSearchForm} />
        </ContentSocialShare>
      </Container>
    </Wrapper>
  );
};
