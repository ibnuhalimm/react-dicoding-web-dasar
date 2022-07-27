import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";

export default function NotFound() {
    return (
        <>
            <Header>
                <Navigation/>
            </Header>
            <main>
                <section className="section">
                    <div className="container">
                        <div className="section--header">
                            <h2>
                                Not Found
                            </h2>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
