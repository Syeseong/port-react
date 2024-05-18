import React from 'react';

const socialLinks = [
    { name: "GITHUB", desc: "GITHUB에 들어오시면 모든 작업물들을 볼 수 있습니다.", href: "#" },
    { name: "TISTORY", desc: "티스토리에 들어오시면 개인 개발일지를 볼 수 있습니다.", href: "#" },
    { name: "INSTAGRAM", desc: "개인 인스타그램 입니다.", href: "#" },
];

const SocialLink = ({ name, desc, href }) => (
    <li>
        <a href={href}>{name}</a>
        <em>{desc}</em>
    </li>
);

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>SEOYESEONG</div>
                    <div>@SYS</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="#">good bye</a>
                        </div>
                        <p className="desc">봐주셔서 감사합니다.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {socialLinks.map((link, idx) => (
                                <SocialLink key={idx} {...link} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2024 SEOYESEONG <br />
                    이 사이트는 개인 포트폴리오 모음 사이트입니다.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
