import React from "react";

import './Expertise.css';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
      {/*    <h1>Info</h1> */} 
            <div className="skills-grid">
                <div className="skill">
                   
                    <h3>Shoot, Loot, Upgrade</h3>
                    <p>Roguelike dungeon crawler where the protagonist is an adventurer drawn to the abyss by a mysterious force. As they delve deeper, they uncover the dark secrets of the labyrinth and their connection to it. Each echo they collect reveals fragments of the abyss’s history, slowly piecing together the truth behind its curse and the protagonist’s role in breaking or succumbing to it.
                    </p>
                    
                </div>

               
            </div>
        </div>
    </div>
    );
}

export default Expertise;