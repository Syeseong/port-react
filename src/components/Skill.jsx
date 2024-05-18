import React from 'react'
const skillText = {
    title: "USE STACK",
    subTitle: "사용해본 기술들"
}
const skillDesc = [
    {
        skill: "FRONT",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis, earum libero laudantium ducimus ratione dolor sunt commodi explicabo necessitatibus ut quos aliquam. Culpa animi blanditiis nihil architecto quam.Enim amet fugiat sunt fuga perspiciatis optio laudantium ratione illo nisi quasi ? Non nostrum aperiam voluptas est explicabo facilisarchitecto blanditiis."
    },
    {
        skill: "BACK-END",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt aut esse corporisasperiores, odit laudantium repellat iste consequatur blanditiis at dignissimos praesentium,inventore aliquid quas eveniet aspernatur rem perspiciatis molestiae doloribus facere quo! Placeat cupiditate vero voluptatem perferendis recusandae minus dolorem eligendi eaque magni, est velit? Assumenda iste fugit commodi modi perspiciatis a magni consequatur necessitatibus, nisi reprehenderit ducimus, ratione delectus ab suscipit ut omnis ipsum aperiam expedita at."
    },
    {
        skill: "LIBRARY",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit pariatur qui excepturi laborum nulla provident perspiciatis, optio assumenda ullam. Non deserunt voluptas est, eligendi et labore rerum, molestias saepe explicabo accusantium eius animi quasi? Numquam architecto deleniti voluptatibus officia quasi aut! Magnam, dignissimos a? Ipsa non voluptatibus dolor veniam ipsam recusandae maxime praesentium soluta officiis a quod harum sunt, incidunt nobis ea. Consectetur, iste."
    },
    {
        skill: "TOOLS",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum, deserunt rerum ad quae qui commodi assumenda aliquid vel dignissimos delectus natus tempora quo at maiores adipisci vitae aperiam a doloremque laboriosam, excepturi quas. Quia vitae delectus quisquam inventore recusandae doloremque natus minus quod tempora! Dignissimos alias et asperiores libero, quos atque sequi eaque accusantium."
    }
];
const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    {skillText.title} <em>{skillText.subTitle}</em>
                </h2>
                <div className="skill__desc">
                    {skillDesc.map((it, idx) => {
                        return (
                            <div key={idx}>
                                <span>{it.skill}</span>
                                <h2>{it.title}</h2>
                                <p>{it.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skill
