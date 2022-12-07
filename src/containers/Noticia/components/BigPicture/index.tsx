import { Container, Credits, ImageWrapper, ImageNext, Description } from './styles';

interface IBigPictureProps {
  url: string;
  credit?: string;
  description?: string;
}

export const BigPicture = ({ url, credit, description }: IBigPictureProps) => (
  <Container>
    {credit && <Credits>{`© ${credit}`}</Credits>}
    <ImageWrapper>
      <ImageNext src={url} alt={description} layout="fill" objectFit="contain" priority />
    </ImageWrapper>
    {description && <Description>{description}</Description>}
  </Container>
);
