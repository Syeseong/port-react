import React, { useEffect, useRef } from 'react'

import { portText } from '../constants/index'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Port = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 30px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
            }
        })

        return () => {
            scrollTween.kill()
        }
    }, [])
    return (
        <section id="portfolio" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>참고하기 좋은 다른 개발자분들의 포트폴리오</em>
                </div>
                <div className="port__wrap">
                    {portText.map((item, idx) => (
                        <article className={`port__item p${idx + 1}`} key={idx} ref={(el) => (sectionRef.current[idx] = el)}>
                            <div className="prot__item__box">
                                <span className="num">{item.num}.</span>
                                <a href={item.code} target="_blank" rel="noopener noreferrer" className="img">
                                    <img src={item.img} alt={item.name} />
                                </a>
                                <h3 className="title">{item.title}</h3>
                                <p className="desc">{item.desc}</p>
                                <a href={item.view} target="_blank" rel="noopener noreferrer" className="site">사이트 보기</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port
