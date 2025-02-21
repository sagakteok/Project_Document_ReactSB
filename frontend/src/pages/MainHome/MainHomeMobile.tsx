import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header.tsx';
import './MainHome.scss';
import Section1_1 from '../../assets/Section1-1.png';
import Section1_2 from '../../assets/Section1-2.png';
import Section3 from '../../assets/Section3.png';
import Button from '@mui/material/Button';

function MainHomeMobile() {
    const sectionRefs = {
        one: useRef<HTMLElement | null>(null),
        two: useRef<HTMLElement | null>(null),
        three: useRef<HTMLElement | null>(null),
        four: useRef<HTMLElement | null>(null),
        five: useRef<HTMLElement | null>(null),
        six: useRef<HTMLElement | null>(null),
        seven: useRef<HTMLElement | null>(null),
        eight: useRef<HTMLElement | null>(null),
        nine: useRef<HTMLElement | null>(null),
    };

    const [visibleSections, setVisibleSections] = useState<string[]>([]);

    {/* 스크롤 페이드인 효과 */}
    useEffect(() => {
        const sections = [
            { ref: sectionRefs.two, id: "two" },
            { ref: sectionRefs.three, id: "three" },
            { ref: sectionRefs.four, id: "four" },
            { ref: sectionRefs.five, id: "five" },
            { ref: sectionRefs.six, id: "six" },
            { ref: sectionRefs.seven, id: "seven" },
            { ref: sectionRefs.eight, id: "eight" },
        ];

        const handleScroll = () => {
            const visible = sections.filter(({ ref }) => {
                    if (!ref.current) return false;
                    const rect = ref.current.getBoundingClientRect();
                    return (
                        rect.top <= window.innerHeight * 0.8 &&
                        rect.bottom >= window.innerHeight * 0.2
                    );
                })
                .map(({ id }) => id);

            setVisibleSections(visible);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    {/* 스크롤 스냅 효과 (1, 2번째 섹션) */}
    useEffect(() => {
        const handleWheelScroll = (event: WheelEvent) => {
            const { one, two } = sectionRefs;
            if (!one.current || !two.current) return;

            const sectionTwoRect = two.current.getBoundingClientRect();

            if (event.deltaY > 0 && window.scrollY === 0) {
                two.current.scrollIntoView({ behavior: 'smooth' });
            } else if (event.deltaY < 0 && sectionTwoRect.top >= 0) {
                one.current.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const handleFade = () => {
            const { eight, nine } = sectionRefs;
            if (!eight.current || !nine.current) return;

            const scrollPercentage = Math.min(1, Math.max(0, 1 - eight.current.getBoundingClientRect().bottom / window.innerHeight));

            eight.current.style.opacity = (1 - scrollPercentage).toString();
            nine.current.style.opacity = scrollPercentage.toString();
        };

        window.addEventListener('wheel', handleWheelScroll);
        window.addEventListener('scroll', handleFade);

        return () => {
            window.removeEventListener('wheel', handleWheelScroll);
            window.removeEventListener('scroll', handleFade);
        };
    }, []);

    {/* 가상 DOM */}
    return (
        <React.StrictMode>
            <div className="main-home">
                <Header />
                {/* 1번째 섹션 */}
                <section ref={sectionRefs.one} id="one" className="mobile-section one">
                    <div className="mobile-text-container-one">
                        <div className="top-content-one">
                            <p className="maintitle">증명서는, <span className="maintitle-highlight">서류봉투</span><span style={{fontFamily: 'SpoqaHanSansNeo-Bold'}}>.</span></p>
                            <p style={{marginTop: 'clamp(50px, 15vw, 100px)'}}>원하는 민원문서,</p>
                            <p>처리하고 싶은 업무,</p>
                            <p>한 곳에서 찾아보세요.</p>
                            <div style={{marginTop: '20px', textAlign: 'center'}}>
                                <Button style={{backgroundColor: '#414B6A', width: '120px', height: '40px', borderRadius: '9px', fontFamily: 'SpoqaHanSansNeo-Medium', fontSize: '15px', color: '#FFFFFF', textTransform: 'none', zIndex: '2'}}>App Store</Button>
                                <Button style={{backgroundColor: '#414B6A', width: '120px', height: '40px', marginLeft: '8px', borderRadius: '9px', fontFamily: 'SpoqaHanSansNeo-Medium', fontSize: '14px', color: '#FFFFFF', textTransform: 'none', zIndex: '2'}}>Google Play</Button>
                            </div>
                        </div>
                        <div className="bottom-content-one">
                            <img src={Section1_1} style={{width: 'clamp(100px, 30vw, 200px)', marginRight: '10px'}}></img>
                            <img src={Section1_2} style={{width: 'clamp(100px, 30vw, 200px)', marginLeft: '10px'}}></img>
                        </div>
                    </div>
                </section>
                {/* 2번째 섹션 */}
                <section ref={sectionRefs.two} id="two" className={`mobile-section two ${visibleSections.includes("two") ? "visible" : ""}`}>
                    <div className="mobile-text-container-two">
                        <p>서류마다 각각 다른 출력 기관,</p>
                        <p>헷갈리는 출력 방법,</p>
                        <p>한 곳에서 찾고 싶으셨죠?</p>
                    </div>
                </section>
                {/* 3번째 섹션 */}
                <section ref={sectionRefs.three} id="three" className={`mobile-section three ${visibleSections.includes("three") ? "visible" : ""}`}>
                    <div className="mobile-text-container-three">
                        <div className="top-content-three">
                            <p className="maintitle">서류 모아보기</p>
                            <p style={{marginTop: 'clamp(30px, 7vw, 50px)'}}>분류된 카테고리에서</p>
                            <p>원하는 서류를</p>
                            <p>하나하나씩 열람해보세요.</p>
                        </div>
                        <div className="bottom-content-three">
                            <img src={Section3} style={{width: 'clamp(150px, 45vw, 300px)'}}></img>
                        </div>
                    </div>
                </section>
                {/* 4번째 섹션 */}
                <section ref={sectionRefs.four} id="four" className={`mobile-section four ${visibleSections.includes("four") ? "visible" : ""}`}>
                    <div className="mobile-text-container-four">
                        <p>업무 처리하고 싶을 때,</p>
                        <p>이제는 <span className="highlight">서류봉투</span>에서</p>
                        <p>필요한 서류들과</p>
                        <p>방법까지 볼 수 있어요.</p>
                    </div>
                </section>
                {/* 5번째 섹션 */}
                <section ref={sectionRefs.five} id="five" className={`mobile-section five ${visibleSections.includes("five") ? "visible" : ""}`}>
                    <div className="mobile-text-container-five">
                        <div className="top-content-five">
                            <p className="maintitle">업무 처리</p>
                            <p>카테고리 별로</p>
                            <p>원하는 업무 처리를 모았어요.</p>
                        </div>
                        <div className="center-content-five">
                            <img src={Section3} style={{width: 'clamp(150px, 45vw, 300px)'}}></img>
                        </div>
                        <div className="bottom-content-five">
                            <p className="smalltitle">처리 방법,</p>
                            <p className="smalltitle">필요한 서류를 확인해보세요.</p>
                        </div>
                    </div>
                </section>
                {/* 6번째 섹션 */}
                <section ref={sectionRefs.six} id="six" className={`mobile-section six ${visibleSections.includes("six") ? "visible" : ""}`}>
                    <div className="mobile-text-container-six">
                        <div className="top-content-six">
                            <p className="maintitle">동네 소식</p>
                            <p className="subtitle">내가 사는 지역의</p>
                            <p className="subtitle">유익한 정보,</p>
                            <p className="subtitle">여러 소식을 접해보세요.</p>
                        </div>
                        <div className="center-content-six">
                        <img src={Section1_1} style={{width: 'clamp(125px, 37.5vw, 250px)', marginRight: '10px'}}></img>
                        <img src={Section1_2} style={{width: 'clamp(125px, 37.5vw, 250px)', marginLeft: '10px'}}></img>
                        </div>
                        <div className="bottom-content-six">
                            <p className="smalltitle">동네에서 진행 중인</p>
                            <p className="smalltitle">재미있는 수업,</p>
                            <p className="smalltitle">이벤트도 참여해보세요.</p>
                        </div>
                    </div>
                </section>
                {/* 7번째 섹션 */}
                <section ref={sectionRefs.seven} id="seven" className={`mobile-section seven ${visibleSections.includes("seven") ? "visible" : ""}`}>
                    <div className="mobile-text-container-seven">
                        <div className="top-content-seven">
                            <div>
                                <p className="maintitle">나의 서류</p>
                                <p>검색하기 귀찮고,</p>
                                <p>일일이 찾기 힘드시죠?</p>
                            </div>
                        </div>
                        <div className="center-content-seven">
                            <img src={Section3} style={{width: 'clamp(165px, 49.5vw, 330px)'}}></img>
                        </div>
                        <div className="bottom-content-seven">
                            <div>
                                <p>자주 찾게 되는 서류,</p>
                                <p>자주 보는 업무,</p>
                                <p>장바구니처럼 담아보세요.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 8번째 섹션 */}
                <section ref={sectionRefs.eight} id="eight" className={`mobile-section eight ${visibleSections.includes("eight") ? "visible" : ""}`}>
                    <div className="mobile-text-container-eight">
                        <p>내 손 안의</p>
                        <p className="large-text">행정복지센터,</p>
                    </div>
                </section>
                {/* 9번째 섹션 */}
                <section ref={sectionRefs.nine} id="nine" className="mobile-section nine">
                    <div className="mobile-text-container-nine">
                        <p>증명서 알려주는 앱</p>
                        <p className="large-text">서류봉투</p>
                    </div>
                </section>
            </div>
        </React.StrictMode>
    );
}

export default MainHomeMobile;