import YouTube from 'react-youtube';

import { Container } from './styles';

interface IYouTubeVideoProps {
  videoId?: string;
}

export const YouTubeVideo = ({ videoId }: IYouTubeVideoProps) => (
  <Container>
    <YouTube
      videoId={videoId?.replace('https://www.youtube.com/watch?v=', '')}
      opts={{
        width: '100%',
        height: '465',
      }}
    />
  </Container>
);
