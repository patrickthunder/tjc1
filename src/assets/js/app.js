import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

//sweet alert2
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'
//sweet alert function swal
swal('Hi from webpack!')

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
