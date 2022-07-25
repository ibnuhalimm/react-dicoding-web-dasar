import Github from "./Icons/Github";
import Instagram from "./Icons/Instagram";
import Linkedin from "./Icons/Linkedin";
import Twitter from "./Icons/Twitter";
import SocialMediaLink from "./SocialMediaLink";
import avatar from "../Img/avatar.webp";

export default function Footer() {
    return (
        <footer>
            <div className="section">
                <div className="developer">
                    <div className="developer--avatar">
                        <img src={avatar}
                            alt="Ibnu Halim Mustofa" />
                    </div>
                    <div className="developer--profile">
                        <h2 className="developer--title">
                            Developer Profile
                        </h2>
                        <p className="developer--name">
                            Ibnu Halim Mustofa
                        </p>
                    </div>
                    <div className="developer--social-media">
                        <SocialMediaLink href="https://github.com/ibnuhalimm">
                            <Github/>
                        </SocialMediaLink>
                        <SocialMediaLink href="https://twitter.com/ibnuhmustofa">
                            <Twitter/>
                        </SocialMediaLink>
                        <SocialMediaLink href="https://linkedin.com/in/ibnuhalimm">
                            <Linkedin/>
                        </SocialMediaLink>
                        <SocialMediaLink href="https://instagram.com/ibnuhmustofa">
                            <Instagram/>
                        </SocialMediaLink>
                    </div>
                </div>

            </div>
            <div className="footer">
                <div className="container">
                    <p className="footer--text">
                        Web Dev News - 2022
                    </p>
                    <p className="footer--text">
                        Made with <span className="hearth">&hearts;</span> by <a href="https://ibnuis.dev?utm_source=dicoding.com" target="_blank" rel="noreferrer">Ibnu Halim Mustofa</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
