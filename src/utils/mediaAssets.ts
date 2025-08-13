// Import all media assets
import img1717 from '../assets/naisl/IMG_1717.png';
import img2604 from '../assets/naisl/IMG_2604.png';
import img4449 from '../assets/naisl/IMG_4449.png';
import video4795 from '../assets/naisl/IMG_4795.mp4';
import img4867 from '../assets/naisl/IMG_4867.png';
import img6703 from '../assets/naisl/IMG_6703.png';
import img6797 from '../assets/naisl/IMG_6797.png';
import img6837 from '../assets/naisl/IMG_6837.png';
import img6843 from '../assets/naisl/IMG_6843.png';
import img6848 from '../assets/naisl/IMG_6848.png';

export interface MediaItem {
  src: string;
  type: 'image' | 'video';
  alt: string;
}

export const getMediaAssets = (designDescriptions: readonly string[]): MediaItem[] => [
  { src: img1717.src, type: 'image', alt: designDescriptions[0] },
  { src: img2604.src, type: 'image', alt: designDescriptions[1] },
  { src: img4449.src, type: 'image', alt: designDescriptions[2] },
  { src: video4795, type: 'video', alt: designDescriptions[3] },
  { src: img4867.src, type: 'image', alt: designDescriptions[4] },
  { src: img6703.src, type: 'image', alt: designDescriptions[5] },
  { src: img6797.src, type: 'image', alt: designDescriptions[6] },
  { src: img6837.src, type: 'image', alt: designDescriptions[7] },
  { src: img6843.src, type: 'image', alt: designDescriptions[8] },
  { src: img6848.src, type: 'image', alt: designDescriptions[0] },
];