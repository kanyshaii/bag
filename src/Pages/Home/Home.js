import './Home.css';
import promoImg from '../../img/promo.png'
import video from '../../img/video.mp4'

function Home() {
  return (
    <>
      <div className="Home">
        <div className="container">
        <div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span class="highlight">
								<span>LET’S</span>
							</span>
							EXPLORE
							<span class="highlight highlight--yellow">
								<span>UNIQUE</span>
							</span>
							BAGS.
						</div>
						<div className="promo__desc">
							Live for Influential and Innovative fashion!
						</div>
						<div className="promo__btn-wrapper">
							<a href="#!" className="promo__btn">
								Shop Now
							</a>
						</div>
					</div>
					<div className="promo__img">
						<img src={promoImg} alt="Promo" />
					</div>
				</div>
				<div className="Home_video">
				<video width="100%" height="auto" controls autoPlay muted>
					<source src={video} type="video/mp4"/>
					</video>
				</div>
        </div>
      </div>
    </>
  );
}

export default Home;