// Project 섹션 콘텐츠 (출처: Notion "Development Prjoect" 데이터베이스)

import type { StaticImageData } from 'next/image';

import type { Platform } from '@/shared/components/ui';

import imgDdak from '../assets/img-ddak.png';
import imgEwhaInvestigation from '../assets/img-ewha-invetigation.jpg';
import imgGreeners from '../assets/img-greeners.png';
import imgLinkrap from '../assets/img-linkrap.png';
import imgMidimate from '../assets/img-midimate.png';
import imgOsondoson from '../assets/img-osondoson.png';
import imgPortfolio from '../assets/img-portfolio.png';
import imgSnappin from "../assets/img-snappin'.png";
import imgSorissak from '../assets/img-sorissak.png';
import imgSpaceCloud from '../assets/img-space-cloud.png';

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  platform: Platform;
};

export const PROJECTS: Project[] = [
  {
    title: "Rain's Portfolio",
    description: '개인 포트폴리오 웹사이트 프로젝트',
    image: imgPortfolio,
    href: 'https://app.notion.com/p/3b412cb9f63d800e8613fe192e1cab93',
    platform: 'web',
  },
  {
    title: "Snappin'",
    description: '스냅 촬영 매칭 플랫폼',
    image: imgSnappin,
    href: 'https://app.notion.com/p/45512cb9f63d83afb3570150c879e385',
    platform: 'web',
  },
  {
    title: '소리싹',
    description: '무발화 자폐 아동을 위한 AI 기반 개인 맞춤형 의사소통 어플리케이션',
    image: imgSorissak,
    href: 'https://app.notion.com/p/3b412cb9f63d80eaba11dde8d9764657',
    platform: 'app',
  },
  {
    title: 'MIDI MATE',
    description: '어떤 사람과 점심을 먹게 될지 모른 채 신청하는 미스터리 런치 매칭 서비스',
    image: imgMidimate,
    href: 'https://app.notion.com/p/c0c12cb9f63d82ca8aad0197f652024b',
    platform: 'web',
  },
  {
    title: '스페이스클라우드',
    description: 'Space Cloud 리디자인',
    image: imgSpaceCloud,
    href: 'https://app.notion.com/p/be212cb9f63d8240ad4801f65f90aed9',
    platform: 'web',
  },
  {
    title: 'DDAK',
    description: '지도 및 실시간 채팅 기반 식사 약속 장소 투표 iOS 앱 서비스',
    image: imgDdak,
    href: 'https://app.notion.com/p/d6d12cb9f63d82ada1b6816d75da1cea',
    platform: 'app',
  },
  {
    title: '오손도손',
    description: '청년들의 경제적 문제해결을 위한 룸메이트 매칭 서비스',
    image: imgOsondoson,
    href: 'https://app.notion.com/p/e9a12cb9f63d8361a28901be9842e28d',
    platform: 'app',
  },
  {
    title: 'GREENERS',
    description: '실시간으로 기후행동 챌린지 공유 플랫폼',
    image: imgGreeners,
    href: 'https://app.notion.com/p/9cb12cb9f63d83deb81081d10bc14d6b',
    platform: 'app',
  },
  {
    title: 'LINKRAP',
    description: '스크랩 링크를 카테고리 별로 정리하는 웹사이트',
    image: imgLinkrap,
    href: 'https://app.notion.com/p/53c12cb9f63d8213b61d81e94ec8c3ed',
    platform: 'web',
  },
  {
    title: 'EWHA INVESTIGATION',
    description: '대학생들을 위한 금융 상품 안내 및 비교 사이트',
    image: imgEwhaInvestigation,
    href: 'https://app.notion.com/p/05d12cb9f63d83c5bebc818587ec9d58',
    platform: 'web',
  },
];
