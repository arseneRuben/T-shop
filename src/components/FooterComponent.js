import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (  
      <footer class="pt-4 sticky-bottom">
        <div class="container">
          <ul class="list-unstyled list-inline text-center list-link">
            <li class="list-inline-item">
              <a class="mx-auto my-auto">
                  <i id="social-fb" class="fa-brands fa-facebook fa-2x social"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="mx-auto my-10">
                  <i id="social-tw" class="fa-brands fa-x-twitter fa-2x social"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="mx-auto my-auto">
                  <i id="social-gp" className = "fa-brands fa-instagram fa-2x social"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="mx-auto my-auto">
                  <i id="social-em" class="fa fa-envelope fa-2x social"></i>
              </a>
            </li>
          </ul>

          <div class="footer-copyright text-center py-3">© 2020 Copyright : {' '}
              <a href="https://tyshop237.com/">tyshop237</a>
          </div>
          
        </div>
        <a href="#" className="goToTopBtn"> <i className="fa-solid fa-arrow-up"></i></a>

      </footer>

      )
    }
}

export default Footer;