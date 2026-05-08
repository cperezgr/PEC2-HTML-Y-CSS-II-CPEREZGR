/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import "@fortawesome/fontawesome-free/css/all.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap";

AOS.init();

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();
