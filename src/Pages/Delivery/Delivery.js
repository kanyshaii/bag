import './Delivery.css';

function Delivery() {
  return (
    <section className='Delivery'>
      <div className="container">
        <div className="Delivery_grid">
          <div className="Delivery_option">
            <div className="Delivery_img">
              <img src="" alt="" />
            </div>
            <h2 className="Delivery_tit">Free Shipping</h2>
            <p className="Delivery_txt">Order above $200</p>
          </div>
          <div className="Delivery_option">
            <div className="Delivery_img">
              <img src="" alt="" />
            </div>
            <h2 className="Delivery_tit">Money-back</h2>
            <p className="Delivery_txt">30 days guarantee</p>
          </div>
          <div className="Delivery_option">
            <div className="Delivery_img">
              <img src="" alt="" />
            </div>
            <h2 className="Delivery_tit">Secure Payments</h2>
            <p className="Delivery_txt">ecured by Stripe</p>
          </div>
          <div className="Delivery_option">
            <div className="Delivery_img">
              <img src="" alt="" />
            </div>
            <h2 className="Delivery_tit">24/7 Support</h2>
            <p className="Delivery_txt">Phone and Email support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;