import React from 'react';
import './MySkills.css'
const MySkills = () => {
    const skills = ["Javascript", "React.js", "Node.js",  "Express.js", "MongoDB",  "Firebase", "HTML", "CSS", "Bootstrap", "Material UI",
    "C", 'Python']

    const expertise=["Javascript", "React.js", "Firebase", "HTML", "CSS", "Bootstrap", "Material UI"]
    const comfortable=["Node.js",  "Express.js", "MongoDB",]
    return (
        <div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h3>My Skill Set</h3>
                <div>
                    {
                        skills.map((skill,index)=>{
                            return(
                                <p key={'skill'+index} className="skill-design">{skill}</p>
                            )
                        })
                    }
                </div>
            </div><br/>
            
            <div style={{display:"flex", flexDirection:"column"}}>
                <h3>Feel free to work with</h3>
                <div>
                    {
                        expertise.map((expert,index)=>{
                            return(
                                <p key={'expert'+index} className="skill-design">{expert}</p>
                            )
                        })
                    }
                </div>
            </div><br/>
            
            <div style={{display:"flex", flexDirection:"column"}}>
                <h3>I'm Comfortable to</h3>
                <div>
                    {
                        comfortable.map((comfort, index)=>{
                            return(
                                <p key={"comfort"+index} className="skill-design">{comfort}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MySkills;