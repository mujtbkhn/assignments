import React from "react"

const Card = ({ name, description, socialMedia, interests }) => {
    return (
        <>
            <div>
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <h2>Interests</h2>
                    <ul>
                        {interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    {socialMedia.linkedin && <a href={socialMedia.linkedin}>LinkedIn</a>}
                    {socialMedia.twitter && <a href={socialMedia.twitter}>Twitter</a>}
                </div>
            </div>
        </>
    )
}

export default Card