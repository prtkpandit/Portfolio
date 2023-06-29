import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
    return (
        <div className="container-fluid text-center" id="showcase">
            <h3>My competitive programming profiles</h3>
            <hr width="80%"></hr>
            <Carousel>
                <Carousel.Item>
                    <a href="https://www.codechef.com/users/prateek034">
                        <div className="mx-auto bg-dark" id="car">
                            <img
                                className="d-block img-fluid mx-auto width150"
                                src="https://www.codechef.com/sites/all/themes/abessive/logo.png"
                                alt="First slide"
                            />
                        </div>
                    </a>
                    <Carousel.Caption>
                        <h3>Codechef</h3>
                        <p>3 star, 1700+ Rating</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.hackerrank.com/Upadhyayprateek1">
                        <div className="mx-auto bg-dark" id="car">
                            <img
                                className="d-block img-fluid mx-auto width150"
                                src="https://info.hackerrank.com/rs/487-WAY-049/images/Podcast-ChannelCover-Final.jpg"
                                alt="Second slide"
                            />
                        </div>
                    </a>
                    <Carousel.Caption>
                        <h3>Hackerrank</h3>
                        <p>c++ 5 star,Problem solving certificate</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://codeforces.com/profile/upadhyayprateek51">
                        <div className="mx-auto bg-dark" id="car">
                            <img
                                className="d-block img-fluid mx-auto width150"
                                src="https://st.codeforces.com/s/70853/images/codeforces-logo-with-telegram.png"
                                alt="Third slide"
                            />
                        </div>
                    </a>
                    <Carousel.Caption>
                        <h3>Codeforces</h3>
                        <p>1200+ rating</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCarousel;
