import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const auth = false;
  return (
    <div className="footer-main">
      <div className="footer-upper">
        <div className="footer-links">
          <ul className="company">
            <h2>Company</h2>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>For the record</Link>
            </li>
          </ul>
          <ul className="communities">
            <h2>Communities</h2>
            <li>
              <Link>For Artists</Link>
            </li>
            <li>
              <Link>Developers</Link>
            </li>
            <li>
              <Link>Advertising</Link>
            </li>
            <li>
              <Link>Investors</Link>
            </li>
            <li>
              <Link>Vendors</Link>
            </li>
          </ul>
          <ul className="useful-links">
            <h2>Useful links</h2>
            <li>
              <Link>Support</Link>
            </li>
            <li>
              <Link>Free mobile App</Link>
            </li>
            <li>
              <Link>Popular by country</Link>
            </li>
          </ul>
          <ul className="plans">
            <h2>ViveSteram Plans</h2>
            <li>
              <Link>Premium Individual</Link>
            </li>
            <li>
              <Link>Premium Duo</Link>
            </li>
            <li>
              <Link>Premium Family</Link>
            </li>
            <li>
              <Link>Premium Student</Link>
            </li>
            <li>
              <Link>Premium Free</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <button id="instagram">
            <span>
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <button id="twiter">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
              >
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
              </svg>
            </span>
          </button>
          <button id="facebook">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
              >
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="footer-lower">
        {auth && (
          <div className="footer-options">
            <ul>
              <li>
                <Link>Legal</Link>
              </li>
              <li>
                <Link>Safety&amps;PrivecyCenter</Link>
              </li>
              <li>
                <Link>Privecy policy</Link>
              </li>
              <li>
                <Link>Cookies</Link>
              </li>
              <li>
                <Link>About Ads</Link>
              </li>
              <li>
                <Link>Accessibility</Link>
              </li>
            </ul>
          </div>
        )}
        <div className="copyright">
          <p>&copy; 2025 ViveSteam Avijit</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
