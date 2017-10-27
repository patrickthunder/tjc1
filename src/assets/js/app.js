import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

//sweet alert2 import node module
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'


import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

//contact form id event listener with abide
$('#contact-form')

  // field element is invalid function
  .on("invalid.zf.abide", function(ev,elem) {
    //add sweet alert function swal for error
    swal(
      'Please check form for errors...',
      'Something is missing',
      'error'
    )
  })
  // form validation passed, form will submit if submit event not returned false
  .on("formvalid.zf.abide", function(ev,frm) {
    //add sweet alert function swal for successful validation
    var form = $(this);

          // ajax post form
      $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
          success: function(data) {
            var result = data;
            var response = JSON.parse(result);
              console.log(response);
              swal(
                  response.message,
                  'Thank you, ' + response.name + ' for your interest in TJC',
                   'success'
              );
        }
      })

  })
  // to prevent form from submitting upon successful validation
  .on("submit", function(ev) {
    ev.preventDefault();
    console.log("Submit for form id "+ev.target.id+" intercepted");
  });
