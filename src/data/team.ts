import { TeamMember } from '../types';
import EyasuImage from '../assets/Eyasu.jpg';
import BrookImage from '../assets/brook.jpg';
import FremnatosImage from '../assets/Fremnatos.jpg';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Eyasu Tilahun',
    role: 'CEO & Founder',
    image: EyasuImage,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/eyasu-tilahun-3128b618a/',
      twitter: 'https://x.com/e38234',
    },
  },
  {
    id: '2',
    name: 'Biruk Tesfaye',
    role: 'CTO',
    image: BrookImage,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/brook-tesfaye-worku/',
      twitter: 'https://x.com/brook_tesfa',
    },
  },
  {
    id: '3',
    name: 'Fremnatos Abrham',
    role: 'Head of Design',
    image: FremnatosImage,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/frumentius-abraham-b6a8382ba/',
      twitter: 'https://x.com/Da9i_Ab',
    },
  },
];
