// SKILL 섹션 콘텐츠

export type SkillItem = {
  label: string;
  src: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '개발',
    items: [
      { label: 'Typescript', src: '/imgs/skill-content/img-typescript.png' },
      { label: 'JavaScript', src: '/imgs/skill-content/img-js.png' },
      { label: 'React', src: '/imgs/skill-content/img-react.png' },
      { label: 'Next.js', src: '/imgs/skill-content/img-nextjs.png' },
      { label: 'React Native', src: '/imgs/skill-content/img-react.png' },
    ],
  },
  {
    title: '디자인 및 편집',
    items: [
      { label: 'Figma', src: '/imgs/skill-content/img-figma.png' },
      { label: 'Adobe Premiere Pro', src: '/imgs/skill-content/img-premiere.png' },
      { label: 'CapCut', src: '/imgs/skill-content/img-cacut.png' },
      { label: 'VLLO', src: '/imgs/skill-content/img-vllo.png' },
    ],
  },
  {
    title: '협업',
    items: [
      { label: 'Notion', src: '/imgs/skill-content/img-notion.png' },
      { label: 'Slack', src: '/imgs/skill-content/img-slack.png' },
      { label: 'Github', src: '/imgs/skill-content/img-github.png' },
    ],
  },
];
