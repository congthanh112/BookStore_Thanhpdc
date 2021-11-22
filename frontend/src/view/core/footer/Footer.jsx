import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
      <footer className="site-footer">    
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <h6 className="text-uppercase mb-3 font-weight-bold">About Us</h6>
              <p className="text-justify">With an infinite passion for reading, this is a book library built by <i>Thanhpdc</i>, with the purpose of serving my personal reading. Besides, this is also a place for me to learn and practice new skills and knowledge about programming that I have learned or researched by myself.</p>
            </div>
            <div className="col-xs-4 col-md-2">
              <h6 className="text-uppercase mb-3 font-weight-bold">Technology</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">.NET 5.0</a>  <a className="facebook" href="#"><i className="bx bxl-windows" /></a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">React JS</a>  <a className="facebook" href="#"><i className="bx bxl-react" /></a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Flutter</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Microsoft SQL Server</a></li>
                <li><a href="http://scanfcode.com/category/android/">Firebase</a></li>
                <li><a href="http://scanfcode.com/category/templates/">Material UI</a></li>
              </ul>
            </div>
            <div className="col-xs-4 col-md-2">
              <h6 className="text-uppercase mb-3 font-weight-bold">Member</h6>
              <ul className="footer-links">
                <li><a href="https://www.instagram.com/pdct20_/">Pham Dao Cong Thanh</a></li>
                <li><a href="https://www.instagram.com/cristiano/">Cristiano Ronaldo</a></li>
                <li><a href="https://www.instagram.com/brunofernandes.10/">Bruno Fernandes</a></li>
                <li><a href="https://www.instagram.com/paulpogba/">Paul Pogba</a></li>

              </ul>
            </div>

            <div class="col-xs-4 col-md-2">
              <h6 className="text-uppercase mb-3 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> District 9, Ho Chi Minh City</p>
              <p><i className="fas fa-envelope mr-3"></i> pdcthanh112@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> +(84) 374039357</p>
              <p><i className="fas fa-print mr-3"></i> +(84) 949957497</p>
            </div>
          </div>
          <hr />
        



        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright © 2022 by <a href="https://www.facebook.com/cong.thanh0112/">Thanhpdc</a></p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="bx bxl-facebook" /></a></li>
                <li><a className="instagram" href="#"><i className="bx bxl-instagram" /></a></li>
                <li><a className="twitter" href="#"><i className="bx bxl-twitter" /></a></li>
                <li><a className="linkedin" href="#"><i className="bx bxl-linkedin" /></a></li>
                <li><a className="github" href="#"><i className="bx bxl-github" /></a></li>

              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
}


export default Footer;