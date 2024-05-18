import React from 'react';
import { socialLinks } from '../constants/index'


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
                            <a href="/">good bye</a>
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
