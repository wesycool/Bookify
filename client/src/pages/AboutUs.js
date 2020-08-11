import React from "react";

function AboutUs() {
    return (
        <div>
        <div className='container mt-4'>
            <h1>About Us</h1>
            <p>Bookify is a convenient web application designed to allowed users to research and discover the ideal venue for whatever they might be looking for. Whether you're looking for top reviewed barber shops, the cheapest auto repair shop or the hit new restaurant in town, Bookify will find it for you. </p>
            <p>Bookify is simple to use. Just search for what your interested in and all the information you need will present itself. You will be given addresses, images, reviews and for the options presented. You will also be given a featured option on the business page for something say like a restaurant that is trending near you. Once you have decide, Bookify allows to to booked through us. So you are literally ready to go after visiting our site. </p>
            <p>We are The Spartans; a development team from the Toronto area. We came up with the idea for Bookify with convenience in mind. In today’s world, especially since covid-19 happened, it is important to have information you can receive about the place you are visiting. Having app that can get you this in one shot, just made sense to us.</p>
        </div>
        <div className="container">
        <div className='container-fluid row text-center justify-content-center'>
            <div className="devInfo col-12 col-md-3 shadow p-3 m-2 mb-5">
                <div className="cards h-100 d-inline-block">
                    <div className="card-Img pb-3">
                        <img src="../assets/photo/Samuel.png" />
                    </div>
                    <div className="card-Content">
                        <h5 className="devName ml-10">Samuel Yoo</h5>
                        <p className="devIntro">
                            Sam is a great coder, he helped us meet deadlines and his contribution shines.
                        </p>
                        <div class="link">
                            <a href="https://samuelyoo.github.io/portfolio/" class="btn btn-secondary m-1">Portfolio</a>
                            <a href="https://github.com/samuelyoo/" class="btn btn-secondary m-1">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="devInfo col-12 col-md-3 shadow p-3 m-2 mb-5">
                <div className="cards h-100 d-inline-block">
                    <div className="card-Img pb-3">
                        <img src="../assets/photo/Edmund.png" />
                    </div>
                    <div className="card-Content">
                        <h5 className="devName ml-10">Edmund Wong</h5>
                        <p className="devIntro">
                            Edmund is the glue that keeps us together. He ensures we meet deadlines.
                        </p>
                        <div class="link">
                            <a href="https://wesycool-portfolio.herokuapp.com/" class="btn btn-secondary m-1">Portfolio</a>
                            <a href="https://github.com/wesycool" class="btn btn-secondary m-1">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="devInfo col-12 col-md-3 shadow p-3 m-2 mb-5">
                <div className="cards h-100 d-inline-block">
                    <div className="card-Img pb-3">
                        <img src="../assets/photo/Chet.png" />
                    </div>
                    <div className="card-Content">
                        <h5 className="devName ml-10">Chet Martin</h5>
                        <p className="devIntro">
                            Chet is creative and his design skills make Bookify visually pleasing.
                        </p>
                        <div class="link">
                            <a href="https://boiling-tundra-87912.herokuapp.com/" class="btn btn-secondary m-1">Portfolio</a>
                            <a href="https://github.com/Chet1317" class="btn btn-secondary m-1">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AboutUs;