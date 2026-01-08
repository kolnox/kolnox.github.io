import { Link } from 'react-router-dom';
import '../index.css'

function Home() {

  return (
    <>
        <header>
          <nav>
              <div>
                  <h1>RTOS on Arduino</h1>
                  <div className="tagline">연암공과대학교 22260013 김승환 · 임베디드 메모</div>
              </div>
          </nav>
        </header>

        <main>
          <section className="hero">
            <h2>RTOS + Arduino 개발 공부</h2>
            <p>아두이노 위에서 RTOS를 적용하며 진행한 여러 가지 테스트를 정리하는 기술 블로그의 메인 페이지입니다. 각 글마다 하나의 실험/프로젝트를 중심으로 설정, 코드, 트러블슈팅을 자세히 다룰 예정입니다.</p>

            <div className="chips">
              <span className="chip">Task</span>
              <span className="chip">Queue</span>
              <span className="chip">ISR</span>
            </div>
          </section>

          <section className="section">
            <h3>개발 사양 소개</h3>

            <ul>
              <li>PC 사양</li>
              <li>CPU: i5-1235U</li>
              <li>RAM: 16GB</li>
              <li>OS: Windows 11</li>
              <li>IDE: Arduino IDE 1.8.19</li>
              <li>RTOS: FreeRTOS 11.1.0-3</li>
              <li>사용 보드: Arduino Uno R3</li>
              <li>사용 센서/액추에이터: LED, 버튼, 온도 센서, 팬</li>
            </ul>
          </section>

          <section className="grid">
            <article className="card section">

            <h3>개발 과정 리포트</h3>
              <ul>
                <li>
                  <Link to="/post">
                  <strong>testing</strong></Link>
                  – Task, 스케줄러, 우선순위, 크리티컬 섹션
                </li>

                <li>
                  <Link to="post-freertos-setup.html">
                  <strong>아두이노에 FreeRTOS 올리기</strong></Link>
                  – 기본 설정과 최소 예제
                </li>

                <li>
                  <Link to="post-led-sensor.html">
                  <strong>LED + 센서 멀티태스킹</strong></Link>
                  – 블로킹 코드 제거 실험
                </li>

                <li>
                  <Link to="post-queue-pipeline.html">
                  <strong>Queue를 이용한 센서 데이터 처리</strong></Link>
                </li>

                <li>
                  <Link to="post-isr-patterns.html">
                  <strong>인터럽트 + FromISR 패턴</strong></Link>
                </li>

                <li>
                  <Link to="post-lowpower-timer.html">
                    <strong>저전력 + 타이머 활용</strong></Link>
                </li>

              </ul>
            </article>

            <article className="card section">
              <h3>업데이트 메모</h3>
              <p>새 실험이 끝날 때마다:</p>
              <ul>
                  <li>해당 실험용 상세 페이지 생성 (예: <code>post-led-sensor.html</code>)</li>
                  <li>상세 페이지에 개발 환경, 코드, 로그, 문제 해결 과정 정리</li>
                  <li>위 글 모음 리스트에 파일명과 링크, 간단한 요약 추가</li>
              </ul>
            </article>
          </section>
        </main>
    </>
  )
}

export default Home;