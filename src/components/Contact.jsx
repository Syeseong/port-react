import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div class="contact__inner">
                <h2 class="contact__title">Contact</h2>
                <div class="contact__lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <div class="contact__text">
                    <div class="text">
                        <div>
                            <a href="/">KAKAO : ...</a>
                        </div>
                        <div>
                            <a href="/">mail : ...@NAVER.COM</a>
                        </div>
                    </div>
                </div>
                <div class="contact__lines bottom" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
        </section>
    )
}

export default Contact