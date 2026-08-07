// 프로필 학력 정보

export type Education = {
  title: string;
  period: string;
};

export const EDUCATIONS: Education[] = [
  { title: '상산고등학교 졸업', period: '2016.03 - 2019.02' },
  { title: '부산대학교 미디어커뮤니케이션학과 중퇴', period: '2020.03 - 2022.02' },
  { title: '이화여자대학교 컴퓨터공학과 & 커뮤니케이션∙미디어학부', period: '2022.03 - 현재' },
];
