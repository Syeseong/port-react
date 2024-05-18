import React from 'react'
import { skillText, skillDesc } from '../constants/index'
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
