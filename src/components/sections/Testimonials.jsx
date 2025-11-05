import { testimonials } from "../../constants"
import GlowCard from "../HeroModels/GlowCard"
import TitleHeader from "../TitleHeader"

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title='What Our Clients Say?' 
                sub="Clients' Feedback About Us."
            />

            <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                {testimonials.map(({ imgPath, name, mentions, review }) => (
                    <GlowCard card={{ review }}>
                        <div className="flex items-center gap-3">
                            <div>
                                <img src={imgPath} alt={name} />
                            </div>
                            <div>
                                <p className="font-bold">{name}</p>
                                <p className="text-white-50">{mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials