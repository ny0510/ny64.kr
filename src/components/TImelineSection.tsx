import { Link } from 'lucide-react';

const TimelineData: { date: string; title: string; tags: string[]; url?: string }[] = [
	{ date: '2024-11-01', title: '제 20회 국제특허정보박람회 부스 전시 참여', tags: ['Conference'], url: 'https://patinex.org' },
	{ date: '2024-10-29', title: '한국코드페어 SW 공모전 동상 수상', tags: ['Award'], url: 'https://www.kcf.or.kr/notice/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=123951920' },
	{ date: '2024-10-04', title: '리눅스마스터 2급 자격증 취득', tags: ['Certification'] },
	{ date: '2024-09-20', title: 'Gencon 2024 AI Conference for DEV 참여', tags: ['Conference'], url: 'https://gencon2024.fastcampus.co.kr' },
	{ date: '2024-08-24', title: '제11회 대한민국 SW융합 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://www.swhackathon.kr' },
	{ date: '2024-08-09', title: 'JUNCTION ASIA 2024 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://eu.junctionplatform.com/projects/junction-asia-2024' },
	{ date: '2024-04-18', title: '홈서버 CPU 업그레이드 (R7 5700X)', tags: ['HomeLab'] },
	{ date: '2023-11-09', title: '콘텐츠유니버스 코리아 테크 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://contentsuniverse.com/kr/2023contest' },
	{ date: '2023-09-09', title: 'UbuCon Korea 2023 참여', tags: ['Conference'], url: 'https://2023.ubuntu-kr.org/ko' },
	{ date: '2023-03-02', title: '선린인터넷고등학교 입학', tags: ['Education'] },
	{ date: '2023-01-07', title: 'x86 홈서버 구축 (R5 4650G)', tags: ['HomeLab'] },
	{ date: '2022-08-23', title: '우분투 CD 미러 구축', tags: ['Project'], url: 'https://mirror.mahiro.kr/ubuntu-releases' },
	{ date: '2021-11-23', title: '개발 블로그 시작', tags: ['Project'], url: 'https://blog.ny64.kr' },
	{ date: '2019-10-18', title: 'GTQ 2급 자격증 취득', tags: ['Certification'] },
	{ date: '2018-02-01', title: 'ITQ 한셀 1급 자격증 취득', tags: ['Certification'] },
	{ date: '2017-09-28', title: 'ITQ 한글 2급 자격증 취득', tags: ['Certification'] },
	{ date: '2017-06-29', title: 'ITQ 한쇼 1급 자격증 취득', tags: ['Certification'] },
	{ date: '2016-10-15', title: '청소년로봇연맹 창의로봇자격증 취득', tags: ['Certification'] },
];

const TimelineSection = () => {
	return (
		<section id="timeline" className="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
			<div className="text-xl font-semibold md:w-1/3">
				<h2>Timeline</h2>
			</div>
			<div className="flex flex-col gap-y-3 md:w-2/3">
				<ul className="flex flex-col gap-y-2">
					{TimelineData.map((data, index) => (
						<li key={index} className="flex flex-col gap-2 sm:flex-row sm:gap-x-4 basis-full px-3 py-1 rounded-md transition-all">
							<time dateTime={data.date} className="min-w-[100px] text-gray-400">
								{new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}
							</time>
							<div>
								<div className={`items-center gap-1.5 flex ${data.url ? 'hover:opacity-70 cursor-pointer transition duration-200' : ''}`}>
									<span className="transition-all text-gray-200 break-keep">{data.title}</span>
									{data.url && <Link size={16} className="text-gray-200" onClick={(e) => e.stopPropagation} />}
								</div>
								{/* <span className="transition-all hover:opacity-70 text-gray-200 break-keep">{data.title}</span> */}
								<div className="flex flex-wrap gap-1">
									{data.tags.map((tag, tagIndex) => (
										<span key={tagIndex} className="text-sm text-gray-500">
											{tag}
											{tagIndex < data.tags.length - 1 && <span className="mx-1">•</span>}
										</span>
									))}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default TimelineSection;
