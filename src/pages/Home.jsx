import { React } from 'react';
import '../assets/css/Navbar.css';
import Fresh from "../assets/img/Fresh_Poster.jpg";
import Juice from "../assets/img/3Juice_Poster.png";
import hyginic from "../assets/img/Hyginic_Poster.jpg";
import NNPoster from "../assets/img/Juice/NN_Poster.png";
import dFruits from "../assets/img/Dry_Fruits.png";
import { products } from "../data/products";
//import "./ProductSlider.css";
import ProductSlider from '../data/ProductSlider.jsx';
import Spacer from '../components/Spacer.jsx';

export default function HomePage() {
    const handleViewProduct = (product) => {
};

    return (
        <div>
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close" /></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i className="fas fa-search" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* hero area */}
            {/* <div className="hero-area hero-bg" style={{ padding: '190px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Native &amp; Nature</p>
                                    <h1>Healthy Fresh Juice</h1>
                                    <div className="hero-btns">
                                        <a
                                            href="#products"
                                            className="boxed-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document
                                                    .getElementById("products")
                                                    .scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >
                                            Juice Collections
                                        </a>
                                        <a href="/contact" className="bordered-btn">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <section class="hero-section">
                <div class="hero-container">

                    <div class="hero-content">
                        {/* <span class="hero-tagline">NATIVE & NATURE</span>    */}
                        <h1>Where Purity Feels Premium</h1>
                        <p>
                            Elite dry fruits and nuts chosen for those who expect the best.Sourced with care, crafted to deliver timeless quality and refined taste.
                        </p>
                        <div class="hero-buttons">
                        <a href="#" class="btn-brand">Shop Now</a>
                            <a href="#" class="btn-outline">Explore</a>
                        </div>
                    </div>

                    <div class="hero-image">
                        <img src={dFruits}alt="Fresh Juice" />
                    </div>

                </div>
            </section>

            {/* product section */}
            <Spacer height="50px" /> 
            <ProductSlider products={products} onView={handleViewProduct}></ProductSlider>
            {/* advertisement section */}
            <Spacer height="50px" /> 
            <div className="abt-section mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Why</span> Choose Us</h3>
                            </div>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="abt-left">
                                    <img
                                        src={NNPoster}
                                        alt="Native & Nature Logo"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="abt-right">
                                    <h2 style={{ color: "white" }}>
                                        We are <span className="orange-text">Yaazhvi Traders</span>
                                    </h2>
                                    <p style={{ color: "#ffffff80" }}>
                                         We delivering the finest quality dry fruits and nuts sourced naturally 
                                        and packed with care. Our products bring the goodness of nature straight to 
                                        your home, ensuring freshness, taste, and health in every bite. 
                                        Experience premium, handpicked delights that you can trust and enjoy every day. 
                                        From almonds to cashews and raisins, each product is carefully selected to 
                                        guarantee quality and flavor. At Yaazhvi Traders, we are committed to bringing 
                                        healthy, natural, and delicious snacks that your family will love.
                                    </p>
                                </div>
                                <div className="hero-buttons">
                                    <a href="/about" className="btn-brand">know more</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            {/* latest news */}
            <div className="latest-news pt-70 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Our</span> News</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                {/*<a href="/single-news"><div className="latest-news-bg news-bg-1" /></a>*/}
                                <img
                                    src={Fresh}
                                    alt="Native & Nature Logo"
                                    className="latest-news-bg news-bg-2"
                                />
                                <></>
                                <div className="news-text-box">
                                    <h3><a href="/single-news">Fresh Stock Arrives Daily!</a></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 15 October, 2025</span>
                                    </p>
                                    <p className="excerpt">At Native & Nature, we now receive farm-fresh fruits and vegetables every morning to ensure the highest quality in every juice. Your health is our first priority!</p>
                                    {/*<a href="/single-news" className="read-more-btn">read more <i className="fas fa-angle-right" /></a>*/}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <img
                                    src={Juice}
                                    alt="Native & Nature Logo"
                                    className="latest-news-bg news-bg-2"
                                />
                                <div className="news-text-box">
                                    <h3><a href="/single-news">New Seasonal Juices Launched!</a></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 15 October, 2025</span>
                                    </p>
                                    <p className="excerpt"> We’ve introduced ABC, Amla, and Ash Gourd Juice for this month.
                                        100% Natural • No Preservatives • Made Fresh Daily</p>
                                    {/*<a href="/single-news" className="read-more-btn">read more <i className="fas fa-angle-right" /></a>*/}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-latest-news">
                                <img
                                    src={hyginic}
                                    alt="Native & Nature Logo"
                                    className="latest-news-bg news-bg-2"
                                />
                                <div className="news-text-box">
                                    <h3><a href="/single-news">Hygiene & Safety Update</a></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 15 October, 2025</span>
                                    </p>
                                    <p className="excerpt">Your safety matters!
                                        All our juices are prepared just 2 hours before serving, in a clean and sanitized kitchen, using RO water and fresh ingredients.</p>
                                    {/*<a href="/single-news" className="read-more-btn">read more <i className="fas fa-angle-right" /></a>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
