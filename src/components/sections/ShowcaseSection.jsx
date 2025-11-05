import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    
            projects.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        y: 50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power2.inOut",
                        delay: 0.3 * (index + 1),
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                        },
                    }
                )
            })
        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.inOut",
            }
        )
    })

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}

                <div  className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className="text-content">
                        <h2>On the Road to Success with Ryde</h2>
                        <p className="text-white-50 md:text-xl">
                            Ryde is a mobile application built with React Native, React, and Expo. It provides a user-friendly interface for users to book and manage rides, making it easy for them to access transportation services.
                        </p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">

                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="Library Management Platform" />
                        </div>
                        <h2>Library Management Platform</h2>
                    </div>
                    
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2>YC Directory - Your Community Hub</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection