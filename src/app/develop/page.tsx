import { Marquee, ProjectCard, SkillTile } from '@/shared/components/ui';

import { ProjectFilterTabs } from './components/ProjectFilterTabs';
import { PROJECTS } from './mocks/projects';
import { DEVELOP_SKILLS } from './mocks/skills';

type DevelopPageProps = {
  searchParams: Promise<{ platform?: string }>;
};

const isFilterablePlatform = (value: string | undefined): value is 'web' | 'app' =>
  value === 'web' || value === 'app';

export default async function DevelopPage({ searchParams }: DevelopPageProps) {
  const { platform } = await searchParams;
  const activePlatform = isFilterablePlatform(platform) ? platform : 'all';
  const filteredProjects = isFilterablePlatform(activePlatform)
    ? PROJECTS.filter((project) => project.platform === activePlatform)
    : PROJECTS;

  return (
    <div className='flex flex-col items-center gap-[10rem]'>
      <section aria-labelledby='develop-hero-title'>
        <div className='animate-fade-in flex flex-col items-center gap-[4rem]'>
          <h1 id='develop-hero-title' className='display-sb-50 text-black-10 text-center'>
            안녕하세요,
            <br />
            프론트엔드 개발자
            <br />
            <span className='text-yellow-1'>양승혜</span>입니다.
          </h1>
          <p className='font-23-rg text-black-8 text-center tracking-[0.2rem]'>
            화면 뒤에 있는 사람을 먼저 생각하며 웹과 앱을 만듭니다.
            <br />
            React로 웹을, React Native로 앱을 개발하고 UI/UX 설계까지 직접 합니다.
            <br />
            <br />
            필요한 기술은 짧은 시간 안에 배워 바로 서비스에 적용해 왔고,
            <br />
            지금은 AI를 개발 워크플로에 연결하는 방법을 익히고 있습니다.
            <br />
            기능이 되는 것보다 사용자가 편한 것을 먼저 고민하는 개발자가 되고자 합니다.
          </p>
        </div>
      </section>

      <Marquee
        className='gap-[4rem] px-[2rem]'
        items={DEVELOP_SKILLS}
        keyExtractor={(skill) => skill.label}
        renderItem={(skill) => (
          <SkillTile imageSrc={skill.src} imageAlt={skill.label} label={skill.label} />
        )}
      />

      <section aria-labelledby='develop-project-title' className='w-full'>
        <div className='flex w-full flex-col items-center gap-[4rem]'>
          <ProjectFilterTabs activePlatform={activePlatform} />
          <div key={activePlatform} className='animate-rise-up grid grid-cols-3 gap-[5.6rem]'>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageSrc={project.image}
                imageAlt={project.title}
                href={project.href}
                platform={project.platform}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
