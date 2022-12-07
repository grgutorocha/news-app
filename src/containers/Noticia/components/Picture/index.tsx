import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Container, Credits, ImageWrapper, ImageNext, Description } from './styles';

interface IPictureProps {
  url: string;
  urlLarge?: string;
  credit?: string;
  description?: string;
  position?: PositionType;
}

export const Picture = ({ credit, url, urlLarge, description, position }: IPictureProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Container position={position}>
        {credit && <Credits>{credit}</Credits>}
        <ImageWrapper>
          <ImageNext src={url} alt={description} layout="fill" objectFit="contain" onClick={() => setOpen(true)} />
        </ImageWrapper>
        {description && <Description>{description}</Description>}
      </Container>
      {open && urlLarge && <Lightbox mainSrc={urlLarge} onCloseRequest={() => setOpen(false)} enableZoom={false} />}
    </>
  );
};
