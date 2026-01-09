import { Link } from 'react-router-dom';
import { rtosReport } from '../reportData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../post-templates.css'

function PostTemplates() {

  return (
    <>
            <header>
                <nav>
                    <Link to="/"><h1>RTOS on Arduino</h1></Link>
                    <div className="tagline">연암공과대학교 22260013 김승환 · 임베디드 메모</div>
                </nav>
            </header>

            <main className="post-main">
                <section className="section">
                    <h1>글 제목을 여기에</h1>
                    <p className="meta">작성일 / 버전 메모</p>
                    <p>이 페이지는 개별 실험/프로젝트를 기록하는 템플릿입니다. 아래 가이드를 따라 내용을 채워 넣으세요.</p>
                </section>

                <section className="section">
                    <h2>1. 문제 정의</h2>
                    <p>어떤 문제를 RTOS로 해결하려는지 간단히 서술합니다.</p>

                    <h2>2. 실험 구성</h2>
                    <ul>
                        <li>보드 / 센서 / 액추에이터</li>
                        <li>사용한 RTOS 버전 및 주요 설정 값</li>
                        <li>빌드/업로드 환경 (Arduino IDE / PlatformIO 등)</li>
                    </ul>

                    <h2>3. 핵심 코드</h2>
                    <pre>
                        <code>
                            // 핵심 코드 스니펫을 넣으세요.
                            // 필요 시 추가 설명을 주석으로 남깁니다.
                        </code>
                    </pre>

                    <h2>4. 동작/로그</h2>
                    <p>시리얼 로그, 측정 결과, 관찰한 현상을 정리합니다.</p>

                    <section className="section chart-section">
                        <h1>{rtosReport.experiment}</h1>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={rtosReport.tasks}>
                                    <XAxis dataKey="name" stroke="#95a0b8" />
                                    <YAxis stroke="#95a0b8"/>
                                    <Tooltip contentStyle={{ backgroundColor: '#111a2b', border: '1px solid #5ad1ff', color: '#e8edf7' }}/>
                                    <Bar dataKey="usage" fill="#5ad1ff" radius={[4, 4, 0, 0]}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </section>

                    <h2>5. 트러블슈팅 & 배운 점</h2>
                    <ul>
                        <li>문제가 발생했다면 원인과 해결 과정을 요약</li>
                        <li>스택/힙, 우선순위, 큐/세마포어 등 RTOS 관점에서 배운 점</li>
                    </ul>
                </section>
            </main>
    </>
  )
}

export default PostTemplates;
