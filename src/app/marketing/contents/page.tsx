import { ProjectMore, ProjectSopt, ProjectYoutube } from './_section';
import { ProjectTabs } from './components/ProjectTabs';

const SECTION_BY_TAB = {
  sopt: ProjectSopt,
  youtube: ProjectYoutube,
  more: ProjectMore,
} as const;

type TabValue = keyof typeof SECTION_BY_TAB;

const isTabValue = (value: string | undefined): value is TabValue =>
  value === 'sopt' || value === 'youtube' || value === 'more';

type MarketingContentsPageProps = {
  searchParams: Promise<{ tab?: string }>;
};

export default async function MarketingContentsPage({ searchParams }: MarketingContentsPageProps) {
  const { tab } = await searchParams;
  const activeTab: TabValue = isTabValue(tab) ? tab : 'sopt';
  const ActiveSection = SECTION_BY_TAB[activeTab];

  return (
    <div className='flex flex-col items-center gap-[10rem] max-lg:gap-[5rem]'>
      <section aria-labelledby='marketing-contents-project-title' className='max-lg:w-full'>
        <div className='flex flex-col items-center gap-[10rem] max-lg:gap-[5rem]'>
          <p className='font-23-rg text-black-8 text-center tracking-[0.2rem]'>
            사용자가 무엇에 반응하는지 관찰하고,
            <br />
            그 답을 콘텐츠와 카피로 만들어 직접 세상에 내놓습니다.
            <br />
            <br />
            기획부터 촬영·편집·업로드까지 가능하며,
            <br />
            생성형 AI를 초안과 카피를 빠르게 만들어내는 도구 등 다방면으로 사용합니다.
            <br />
            발행 후에는 참여·전환 데이터로 검증하고 다음 기획에 반영합니다.
            <br />
            <br />
            아래는 제가 참여한 프로젝트입니다.
          </p>

          <ProjectTabs activeTab={activeTab} />
          <ActiveSection />
        </div>
      </section>
    </div>
  );
}
