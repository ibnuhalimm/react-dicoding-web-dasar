import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import image_1280_640 from '../Img/image_1280_640.jpeg';
import PostItem from '../Components/PostItem/PostItem';


export default function HomePage() {
    return (
        <>
            <Navigation/>
            <main>
                <div id="content">
                   <section className="headline">
                        <div className="headline--inner">
                            <div className="headline--image">
                                <img src={image_1280_640} alt="Headline" />
                            </div>
                            <div className="headline--content">
                                <div className="headline--metadata">
                                   <span className="post--tag flirt">
                                       Tutorials
                                   </span>
                                   <span className="post--date">
                                        17 Juni 2022
                                   </span>
                                </div>
                                <a href="post.html" className="post--link">
                                    <div className="headline--header">
                                        <h1>
                                            Belajar Dasar Pemrograman Web di Dicoding
                                        </h1>
                                    </div>
                                    <div className="headline--body">
                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="section--header">
                                <h2>
                                    Latest Web Dev Tutorials
                                </h2>
                            </div>
                            <div className="section--body">
                                <div className="post-list">

                                    <PostItem url="#"
                                            tag="Tutorials"
                                            title="Belajar Dasar Pemrograman Web di Dicoding" />

                                    <PostItem url="#"
                                            tag="Tips"
                                            title="Menjadi Front-End Developer Expert" />

                                    <PostItem url="#"
                                            tag="Tutorials"
                                            title="Cloud Engineer Professional Bersama AWS" />

                                    <PostItem url="#"
                                            tag="Tutorials"
                                            title="Mastering React Native" />

                                    <PostItem url="#"
                                            tag="Tutorials"
                                            title="Android Apps Development" />

                                    <PostItem url="#"
                                            tag="Tips"
                                            title="Multi Platform Apps Development" />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
}
