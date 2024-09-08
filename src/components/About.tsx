function About(){
    return(
        <div className="bg-highlight rounded-xl p-4 inline-block about-parent">
            <div className="inline-block pr-28 font-mono space-y-4 about-child">
                <h2 className="text-lg font-semibold">About us</h2>
                <div className="pl-4 ml-4 rounded-3xl bg-secondary pt-2 pb-2 mt-1">
                    <p>We are a team of three software engineering students working together to build a to-do list website.</p>
                </div>
            </div>
            <div className="inline-block pr-28 font-mono space-y-4 about-child">
                <h2 className="text-lg font-semibold">Our Goal</h2>
                <div className="pl-4 ml-4 rounded-3xl bg-secondary pt-2 pb-2 mt-1">
                    <p>
                        Our goal is to create a to-do list website which can become a usefull task management tool for us and others.<br/>
                        We're focusing on learning React to build the user interface, while also applying concepts that we have learned during our web development class.
                    </p>
                </div>
            </div>
            <div className="inline-block pr-28 font-mono space-y-4 about-child">
                <h2 className="text-lg font-semibold">What We're Learning</h2>
                <div className="pl-4 ml-4 rounded-3xl bg-secondary pt-2 pb-2 mt-1">
                    <p>
                        As we work on this project, we are sharpening our HTML,CSS and JavaScript skills.
                        We are also learning how to use React to create a component based user interface.
                        Further, we are enhancing our GitHub skill, preparing us for a professional setting.  
                    </p>
                </div>
            </div>
            <div className="inline-block pr-28 font-mono space-y-4 about-child">
                <h2 className="text-lg font-semibold">TL;DR</h2>
                <div className="pl-4 ml-4 rounded-3xl bg-secondary pt-2 pb-2 mt-1">
                    <p>
                        We're three software engineering students building a to-do list website to sharpen our skills in React, HTML, CSS, and JavaScript, 
                        while also preparing for professional development with GitHub. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About