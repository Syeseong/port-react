import React from 'react'
const siteData = [
    {
        title: "VITE를 이용한 사이트 제작",
        text: ["make", "site compliant width", "webstandard"],
        btn: ["code", "view"],
        info: {
            subject: "site coding",
            period: "production period : two days",
            stack: "use stack : html5/css3, CSS Variable, Vite",
        },
    },
    {
        title: "React를 이용한 사이트 제작",
        text: ["make", "site compliant width", "webstandard"],
        btn: ["code", "view"],
        info: {
            subject: "site coding",
            period: "production period : two days",
            stack: "use stack : html5/css3, CSS Variable, React",
        },
    },
    {
        title: "Vue를 이용한 사이트 제작",
        text: ["make", "site compliant width", "webstandard"],
        btn: ["code", "view"],
        info: {
            subject: "site coding",
            period: "production period : two days",
            stack: "use stack : html5/css3, CSS Variable, Vue",
        },
    },
    {
        title: "Next를 이용한 사이트 제작",
        text: ["make", "site compliant width", "webstandard"],
        btn: ["code", "view"],
        info: {
            subject: "site coding",
            period: "production period : two days",
            stack: "use stack : html5/css3, CSS Variable, Next",
        },
    },
];
const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    Site Coding <em>나의 작업물</em>
                </h2>
                <div className="site__wrap">
                    {siteData.map((item, idx) => {
                        return (
                            <div className={`site__item s${idx + 1}`} key={idx}>
                                <span className='num'>{idx + 1}.</span>
                                <div className='text'>
                                    {item.text.map((text, idx) => (
                                        <div key={idx}>{text}</div>
                                    ))}
                                </div>
                                <h3 className='title'>
                                    {item.title}
                                </h3>
                                <div className='btn'>
                                    {item.btn.map((btn, idx) => (
                                        <a href="#" key={idx}>{btn}</a>
                                    ))}
                                </div>
                                <div className='info'>
                                    <span>{item.info.subject}</span>
                                    <span>{item.info.period}</span>
                                    <span>{item.info.stack}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Site
