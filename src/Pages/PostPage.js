import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import image_1280_640 from '../Img/image_1280_640.jpeg';
import akaunting from '../Img/partners/akaunting.png';
import beyondcode_logo from '../Img/partners/beyondcode_logo.png';
import statamic_logo from '../Img/partners/statamic_logo.png';
import PostTag from '../Components/PostTag/PostTag';
import PostDate from '../Components/PostDate/PostDate';
import Header from '../Components/Header/Header';
import DeveloperProfile from '../Components/DeveloperProfile/DeveloperProfile';


export default function PostPage() {
    return (
        <>
            <Header>
                <Navigation/>

                <section className="headline-detail">
                    <div className="headline-detail--inner">
                        <div className="headline-detail--content">
                            <div className="headline-detail--header">
                                <h1>
                                    3 Tips Mantap untuk Memulai Belajar Pemrograman
                                </h1>
                            </div>
                            <div className="headline-detail--metadata">
                                <PostTag>
                                    Misc
                                </PostTag>
                                <PostDate>
                                    14 July 2022
                                </PostDate>
                            </div>
                        </div>
                        <div className="headline-detail--image">
                            <img src={image_1280_640} alt="3 Tips Mantap untuk Memulai Belajar Pemrograman" />
                        </div>
                    </div>
                </section>

            </Header>
            <main className="post-detail container">
                <article>
                    <p>
                        Pemrograman merupakan kemampuan yang harus selalu diasah. Kita harus banyak membaca dari berbagai sumber, bersahabat dengan dokumentasi sebuah program, dan mengetahui tips belajar programming yang tepat. Selain membaca teori, kita juga harus mempraktikkan apa yang telah kita pelajari. Bahkan jika dihitung dari persentase, disarankan untuk 80% praktik dan 20% teori sehingga waktu untuk menulis kode lebih banyak daripada teori. Ketika belajar teori lebih banyak, kamu juga harus meningkatkan intensitas praktik.
                        <br/><br/>
                        Dengan praktik langsung maka teori yang kita pelajari akan selalu teringat kuat di dalam otak. Semisal kita membaca teori selama 5 menit, kita juga harus meluangkan waktu untuk mempraktikkannya 5 kali lebih banyak, yaitu sekitar 25 menit. Konsep belajar pemrograman sarat praktik inilah yang akan memudahkan kamu untuk mengingat dan meresapi setiap maksud dari teori yang kamu pelajari. 
                        <br/><br/>
                        Mungkin kamu bertanya, “Lalu, bagaimana jika saya masih baru dalam dunia pemrograman?” Berikut beberapa tips yang dapat membantu kamu untuk mulai belajar pemrograman.
                    </p>

                    <h3>
                        Mengatur Waktu
                    </h3>

                    <p>
                        Tidak ada waktu merupakan alasan klasik ketika belajar pemrograman. Untuk mengatasi hal tersebut, kita harus memiliki target belajar. Misalnya dalam waktu satu minggu harus sudah bisa memahami konsep perulangan dalam pemrograman. Target lain yang bisa dicoba adalah target waktu, misal belajar 3,5 jam per minggu atau sama dengan 30 menit per hari. Durasi waktu belajar bisa disesuaikan dengan kemampuan dan waktu yang kamu miliki.
                        <br/><br/>
                        Dengan memiliki target dan mengalokasikan waktu, kamu akan lebih terarah dan memiliki pencapaian belajar yang lebih terukur. Namun, bukan berarti semakin banyak waktu yang kamu alokasikan untuk belajar akan menghasilkan hasil yang baik. Misalnya, kamu mengalokasikan waktu 60 jam per minggu untuk belajar pemrograman atau lebih banyak. Hasil yang didapatkan bisa saja kurang efektif karena kamu terlalu lelah atau memaksakan diri, kecuali kamu tidak terpaksa untuk melakukannya. Namun, cara tersebut sebaiknya dihindari. Mengapa demikian?
                        <br/><br/>
                        Ketika kita memaksa otak untuk berpikir secara berlebihan, ia akan memproses informasi secara tidak efektif. Selain itu, hal itu bisa menciptakan sebuah illusion of proficiency atau bisa disebut ilusi kemahiran. Memang benar semua seolah teringat dengan jelas di kepala dan tampak mudah. Namun, ketika berhenti belajar misal dalam waktu sebulan, kamu dapat lupa apa yang telah dipelajari sebelumnya atau sering disebut dengan kurva lupa (forgetting curve).
                        <br/><br/>
                        Untuk mengatasi permasalahan di atas, maka kita dapat menerapkan pola belajar dalam waktu singkat dan dilakukan secara kontinu. Hal tersebut dilakukan supaya otak memiliki waktu untuk memproses setiap informasi sehingga tidak cepat lelah. Maksud dari kontinu di atas adalah dilakukan secara berulang-ulang dan mengingat kembali apa yang telah dipelajari. Misal, kamu telah belajar selama 30 menit pada pukul 19.00 maka pada keesokan harinya kamu harus kembali mengingat apa yang telah dipelajari kemarin sebelum mulai belajar hal baru. Lakukan secara teratur untuk membuat proses belajar kamu lebih menyenangkan.
                    </p>
                    <br/>
                    <p>
                        Sumber : <a href="https://www.dicoding.com/blog/3-tips-mantap-untuk-memulai-belajar-pemrograman" target="_blank" rel="noreferrer">3 Tips Mantap untuk Memulai Belajar Pemrograman</a>
                    </p>
                </article>

                <aside className="section">
                    <DeveloperProfile />

                    <div className="partners">
                        <div className="partners--header">
                            <h2 className="partners--title">
                               Web Dev Partners
                            </h2>
                        </div>
                        <div className="partners--body">
                            <div className="partners--list">
                                <div className="partners--item beyondcode-logo">
                                    <img src={beyondcode_logo} alt="BeyondCode" />
                                </div>
                                <div className="partners--item statamic-logo">
                                    <img src={statamic_logo} alt="Statamic" />
                                </div>
                                <div className="partners--item akaunting-logo">
                                    <img src={akaunting} alt="Akaunting" />
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
            <Footer/>
        </>
    )
}
