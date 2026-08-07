// CONTENTS > 더보기 콘텐츠

import type { StaticImageData } from 'next/image';

import {
  imgAppjamBuddys,
  imgAppjamClustar,
  imgAppjamFlint,
  imgAppjamRoutee,
  imgAppjamSnappin,
  imgAppjamSsing,
  imgBrandingCardnews,
  imgCardnews,
  imgCollabCardnews1,
  imgCollabCardnews2,
  imgConcertBehind,
  imgDailyLook,
  imgDemodayTeaser,
  imgDirection,
  imgDnaLab,
  imgDnaLabVlog,
  imgFansignAndroid,
  imgFansignDesign,
  imgFansignIos,
  imgFansignPlanning,
  imgFansignServer,
  imgFansignWeb,
  imgGdgocHomecomingday,
  imgGdgocSession,
  imgMeetSopt1,
  imgMeetSopt2,
  imgMeetSopt3,
  imgMeetSopt4,
  imgOtSketch,
  imgPartyteeCardnews,
  imgSeminarVlog,
  imgSoptlist,
  imgSoptlistCardnews1,
  imgSoptlistCardnews2,
  imgTurncoat,
  imgYbRecruitingThumbnail,
} from '../assets';

export type MoreProjectCard = {
  title: string;
  description: string;
  href: string;
  image?: StaticImageData;
};

export const LONGFORM_PROJECTS: MoreProjectCard[] = [
  {
    title: 'SOPTLIST',
    description: 'SOPT 미디어팀 팔로미가 제작한 유튜브 플레이리스트 영상',
    href: 'https://www.youtube.com/watch?v=6zSXHHkPYfk&t=12319s',
    image: imgSoptlist,
  },
  {
    title: '데모데이 티저',
    description: "SOPT 데모데이 'THE CHECKPOINT' 홍보 티저 영상",
    href: 'https://www.youtube.com/watch?v=79adpLns-X8',
    image: imgDemodayTeaser,
  },
  {
    title: '38기 OT 현장 스케치',
    description: 'SOPT 38기 OT 현장을 담은 스케치 영상',
    href: 'https://www.youtube.com/watch?v=hIAY8flaSww',
    image: imgOtSketch,
  },
  {
    title: '38기 YB 리크루팅 홍보 영상',
    description: 'SOPT 38기 신입 회원 모집을 위한 홍보 영상',
    href: 'https://www.youtube.com/watch?v=8749xFRmkRo',
    image: imgYbRecruitingThumbnail,
  },
  {
    title: '정기공연 비하인드',
    description: '중앙재즈댄스동아리 2025 정기공연 비하인드 영상',
    href: 'https://www.youtube.com/watch?v=QpBDrm5qQX0&list=PL-d9_ZLF0f52PJeElIbFxM4nkFnoUdYql&index=27',
    image: imgConcertBehind,
  },
];

export const SHORTFORM_PROJECTS: MoreProjectCard[] = [
  {
    title: '세미나 브이로그',
    description: '파트원과 함께한 SOPT 세미나 날을 담은 브이로그',
    href: 'https://www.instagram.com/p/DRMSaCLghYi/',
    image: imgSeminarVlog,
  },
  {
    title: '솝일리룩',
    description: 'SOPT 회원들의 데일리룩을 소개하는 룩북 콘텐츠',
    href: 'https://www.instagram.com/p/DSv7jbjAQjp/',
    image: imgDailyLook,
  },
  {
    title: 'YB 면접 장소 안내',
    description: 'SOPT YB 면접 장소를 안내하는 숏폼 영상',
    href: 'https://www.youtube.com/shorts/rqwpd-mepNo',
    image: imgDirection,
  },
  {
    title: '서버 파트장 영통 팬사인회',
    description: '서버 파트원들의 질문으로 준비한 영통 팬사인회 숏폼',
    href: 'https://www.instagram.com/p/DY6BS3KiquG/',
    image: imgFansignServer,
  },
  {
    title: '웹 파트장 영통 팬사인회',
    description: '웹 파트원들의 질문으로 준비한 영통 팬사인회 숏폼',
    href: 'https://www.instagram.com/p/DY6B0o4ikBA/',
    image: imgFansignWeb,
  },
  {
    title: '안드로이드 파트장 영통 팬사인회',
    description: '안드로이드 파트원들의 질문으로 준비한 영통 팬사인회 숏폼',
    href: 'https://www.instagram.com/p/DY6CIC3CdqT/',
    image: imgFansignAndroid,
  },
  {
    title: '기획 파트장 영통 팬사인회',
    description: '기획 파트원들의 질문으로 준비한 영통 팬사인회 숏폼',
    href: 'https://www.instagram.com/p/DY8lsJbC2UK/',
    image: imgFansignPlanning,
  },
  {
    title: 'iOS 파트장 영통 팬사인회',
    description: 'iOS 파트원들의 질문으로 준비한 영통 팬사인회 숏폼',
    href: 'https://www.instagram.com/p/DY8mrEsCiDu/',
    image: imgFansignIos,
  },
  {
    title: '디자인 파트장 영통 팬사인회',
    description: '디자인 파트원들의 질문으로 준비한 영통 팬사인회 숏폼',
    href: 'https://www.instagram.com/p/DY8mxwGiHW2/',
    image: imgFansignDesign,
  },
  {
    title: '변절자들 시즌3',
    description: '다른 파트로 이동한 38기 회원들의 이야기를 담은 숏폼',
    href: 'https://www.instagram.com/p/DacGagOC6V0/',
    image: imgTurncoat,
  },
  {
    title: '도넛 꾸미기 with Routee',
    description: '앱잼 팀 루티와 함께한 도넛 꾸미기 콘텐츠',
    href: 'https://www.instagram.com/p/Daz48gfiYzL/',
    image: imgAppjamRoutee,
  },
  {
    title: '필름 콘텐츠 with buddys',
    description: '앱잼 팀 버디즈의 합숙 현장을 담은 필름 콘텐츠',
    href: 'https://www.instagram.com/p/Da4eOcJCXh9/',
    image: imgAppjamBuddys,
  },
  {
    title: 'Dna Lab 활동 릴스 ①',
    description: '외국인 유학생과 함께 하는 봉사활동 vlog',
    href: 'https://www.instagram.com/reel/C0TAqXYyc14/',
    image: imgDnaLabVlog,
  },
  {
    title: 'Dna Lab 활동 릴스 ②',
    description: 'RNA의 이주여성 인권침해 인식개선 오프라인 캠페인 현장 릴스',
    href: 'https://www.instagram.com/p/C0TAqXYyc14/',
    image: imgDnaLab,
  },
];

export const CARDNEWS_PROJECTS: MoreProjectCard[] = [
  {
    title: '파트별 공감 카드뉴스',
    description: 'SOPT 회원들이 파트별로 공감할 멘트와 사진으로 만든 카드뉴스',
    href: 'https://www.instagram.com/p/DSj8ES6gYFp/?img_index=1',
    image: imgCardnews,
  },
  {
    title: 'APPJAM - Flint',
    description: "SOPT 앱잼 결과물 'Flint' 소개 카드뉴스",
    href: 'https://www.instagram.com/p/DWDbIKQlN3q/?img_index=1',
    image: imgAppjamFlint,
  },
  {
    title: "APPJAM - Snappin'",
    description: "SOPT 앱잼 결과물 Snappin' 소개 카드뉴스",
    href: 'https://www.instagram.com/p/DWDcAnblCXm/?img_index=1',
    image: imgAppjamSnappin,
  },
  {
    title: 'APPJAM - CLUSTAR',
    description: "SOPT 앱잼 결과물 'CLUSTAR' 소개 카드뉴스",
    href: 'https://www.instagram.com/p/DWDcFphFLGi/?img_index=1',
    image: imgAppjamClustar,
  },
  {
    title: '합숙 인터뷰 with SSING',
    description: '앱잼 팀 씽의 합숙 현장을 담은 인터뷰 카드뉴스',
    href: 'https://www.instagram.com/p/Da2LYqQFGUe/?img_index=1',
    image: imgAppjamSsing,
  },
  {
    title: 'SOPT를 만나다 ①',
    description: '예비 YB를 위한 면접 꿀팁 인터뷰 카드뉴스',
    href: 'https://www.instagram.com/p/DWGUhOwFMqf/?img_index=1',
    image: imgMeetSopt1,
  },
  {
    title: 'SOPT를 만나다 ②',
    description: 'SOPT를 200% 활용하는 방법 인터뷰 카드뉴스',
    href: 'https://www.instagram.com/p/DYD9I74mVaF/?img_index=1',
    image: imgMeetSopt2,
  },
  {
    title: 'SOPT를 만나다 ③',
    description: '아트디렉터 디자인 인터뷰 카드뉴스',
    href: 'https://www.instagram.com/p/DZZQW6DFJWV/?img_index=1',
    image: imgMeetSopt3,
  },
  {
    title: 'SOPT를 만나다 ④',
    description: '36·37기 회장 김가연님 인터뷰 카드뉴스',
    href: 'https://www.instagram.com/p/DaxHlcMFDtw/?img_index=1',
    image: imgMeetSopt4,
  },
  {
    title: '팔로미팀을 소개합니다',
    description: '38기 미디어팀 팔로미팀 소개 카드뉴스',
    href: 'https://www.instagram.com/p/DW79umAlDhN/?img_index=1',
    image: imgBrandingCardnews,
  },
  {
    title: '협업 고수 되는 법 ①',
    description: '합동 세미나를 위한 협업 용어 정리 카드뉴스',
    href: 'https://www.instagram.com/p/DXnvQODFHaT/?img_index=1',
    image: imgCollabCardnews1,
  },
  {
    title: '협업 고수 되는 법 ②',
    description: '합동 세미나를 위한 협업 용어 정리 카드뉴스',
    href: 'https://www.instagram.com/p/DXnvVeUFBRv/?img_index=1',
    image: imgCollabCardnews2,
  },
  {
    title: 'SOPTLIST 카드뉴스 (기획·디자인·안드로이드)',
    description: '파트별 작업 플레이리스트를 소개하는 카드뉴스',
    href: 'https://www.instagram.com/p/DYUFeqClC-L/?img_index=1',
    image: imgSoptlistCardnews1,
  },
  {
    title: 'SOPTLIST 카드뉴스 (iOS·웹·서버)',
    description: '파트별 작업 플레이리스트를 소개하는 카드뉴스',
    href: 'https://www.instagram.com/p/DYUFku8FK-7/?img_index=1',
    image: imgSoptlistCardnews2,
  },
  {
    title: '제1회 파트티 자랑대회',
    description: '기수별 파트티 디자인을 소개하는 카드뉴스',
    href: 'https://www.instagram.com/p/DY3q2MmFKD6/?img_index=1',
    image: imgPartyteeCardnews,
  },
  {
    title: '세션 활동 카드뉴스',
    description: 'GDGoC Ewha 7기 Networking Session을 소개하는 카드뉴스',
    href: 'https://www.instagram.com/p/DPOnBikknFq/',
    image: imgGdgocSession,
  },
  {
    title: '홈커밍데이 카드뉴스',
    description: 'GDGoC Ewha 홈커밍데이 행사를 소개하는 카드뉴스',
    href: 'https://www.instagram.com/p/DDy8cu1T442/?img_index=1',
    image: imgGdgocHomecomingday,
  },
];
