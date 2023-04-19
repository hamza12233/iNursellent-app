
console.log("cddscdd");
// $('.signup-slider').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:false,
//     dots:false,
//     autoplay:true,
//     mouseDrag:false,
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })


$(document).on('change', '.file-input', function() {
    console.log("files uploaded");
    var filesCount = $(this)[0].files.length;
    var textbox = $(this).prev();
    if (filesCount === 1) {
        var fileName = $(this).val().split('\\').pop();
        textbox.text(fileName);
    } else {
        textbox.text(filesCount + ' files selected');
    }
});



//    step form
    $(document).ready(function () {
        var currentStep = 0;
        var steps = $(".step");

        showStep(currentStep);

        // "Next" button click event handler
        $(".nextBtn").click(function () {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });

        // "Previous" button click event handler
        $(".prevBtn").click(function () {
            currentStep--;
            showStep(currentStep);
        });

        // "Submit" button click event handler
        $(".submitBtn").click(function () {
            if (validateStep(currentStep)) {
                $("#jobApply").submit();
            }
        });

        // Function to show the current step
        function showStep(step) {
            steps.hide();
            $(steps[step]).show();
            if (step == 0) {
                $(".prevBtn").hide();
            } else {
                $(".prevBtn").show();
            }
            if (step == steps.length - 1) {
                $(".nextBtn").hide();
                $(".submitBtn").show();
            } else {
                $(".nextBtn").show();
                $(".submitBtn").hide();
            }
        }

        // Function to validate the current step
        function validateStep(step) {
            var inputs = $(steps[step]).find("input, textarea");
            var valid = true;
            for (var i = 0; i < inputs.length; i++) {
                if (!inputs[i].checkValidity()) {
                    valid = false;
                    $(inputs[i]).addClass("invalid");
                } else {
                    $(inputs[i]).removeClass("invalid");
                }
            }
            return valid;
        }
    });





// $('.solution_silder_wrap').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     dots:true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         },
//         768: {
//             items: 2
//         },
//         1000: {
//             items: 3
//         }
//     }
// });
// $('.testimonail_silder').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         },
//         1000: {
//             items: 1
//         }
//     }
// });

// $('.partner_slider').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     responsive: {
//         0: {
//             items: 3
//         },
//         600: {
//             items: 5
//         },
//         1000: {
//             items: 7
//         }
//     }
// });


$(document).ready(function() {
  $('.accordion-panel').on('click', '.accordion__header', function() {
    $('.accordion__body').slideUp().removeClass('flipInX');
    if($(this).next().is(':hidden')) {
      $(this).next().slideDown().addClass('flipInX');
      $(this).closest('.accordion__header').addClass('open');
    } else {
      $(this).next().slideUp();
      $(this).closest('.accordion__header').removeClass('open');
    }
  });
});


$('.custom_input').change(function () {
    var filename = $(this).val().split('\\').pop();
    $(this).next('.file-name').text(filename).css('visibility','visible');
});

$(document).ready(function() {
    // hide all steps except the first one
    $('.step-2, .step-3, .step-4, .step-5, .step-6, .step-7, .step-8, .step-9, .step-10, .step-11, .step-12, .step-13, .step-14, .step-15, .step-16, .step-17, .step-18, .step-19, .step-20, .step-21').hide();
    
    // when the "Next" button is clicked, show the next step and hide the current step
    $('.continue').click(function() {
        var currentStep = $(this).parent();
        var nextStep = $(this).parent().next();
        currentStep.hide();
        nextStep.show();
        return false; // prevent page refresh
    });
    
    // when the "Back" button is clicked, show the previous step and hide the current step
    $('.Back').click(function() {
        var currentStep = $(this).parent();
        var previousStep = $(this).parent().prev();
        currentStep.hide();
        previousStep.show();
        return false; // prevent page refresh
    });
});   
    
    

$(document).ready(function() {
    // add event listener to existing cross icons
    $(".hospitals_worked_wrap .remove-icon").on("click", function() {
        $(this).closest(".hospitals_worked_wrap").remove();
    });
    
    // add event listener to new cross icons in cloned elements
    $(".btn-success").on("click", function(e) {
        e.preventDefault(); // prevent form submission
        var hospitalsWrap = $(".hospitals_worked_wrap").last();
        var newHospitalsWrap = hospitalsWrap.clone();
        var newCrossIcon = $("<img src='./frontend/img/close.png' class='remove-icon genral-icon' alt='Remove'>"); // create new cross icon
        newHospitalsWrap.append(newCrossIcon); // add new cross icon to cloned element
        newHospitalsWrap.insertAfter(hospitalsWrap);
        
        // add event listener to new cross icon
        newCrossIcon.on("click", function() {
        $(this).closest(".hospitals_worked_wrap").remove();
        });
        // add box-shadow to .all-hopitals-data element
            $(".all-hopitals-data").css("box-shadow", "1px 1px 10px #f4d4d4");
    });
});
      
      
      

// $('#country_selector1').countrySelect({
//     onlyCountries: ['us', 'gb', 'ca', 'au', 'ae', 'sa', 'eg', 'jo', 'lb', 'qa'],
//     priorityCountries: ['us', 'gb', 'ca', 'au', 'ae', 'sa', 'eg', 'jo', 'lb', 'qa']
// });




  $('.country-selector .country').change(function() {
    var selectedOptions = $('#selected-countries');
    if ($(this).is(':checked')) {
        var tag = $('<span>', {
            class: 'selected-country',
            text: $(this).val()
        });
        var icon = $('<i>', {
            class: 'fas fa-times ml-1',
            click: function() {
                tag.remove();
                $(this).siblings('input[type="checkbox"]').prop('checked', false);
            }
        });
        tag.append(icon);
        selectedOptions.append(tag);
    } else {
        var tagToRemove = selectedOptions.find('span[data-value="' + $(this).val() + '"]');
        if (tagToRemove.length) {
            tagToRemove.remove();
        }
    }
});


$('#multi-country-select-btn').click(function () {
    $('.countries-menu').slideToggle();
})
    

$(document).ready(function(){
    $('.nclex-yes').click(function(){ 
        if($(this).is(':checked')){ 
            $('#NCLEX').slideDown();
        }
    });
    $('.nclex-no').click(function(){ 
        if($(this).is(':checked')){ 
            $('#NCLEX').slideUp();
        }
    });
// 
    $('.ielts-yes').click(function(){ 
        if($(this).is(':checked')){ 
            $('#TOELL').slideDown();
        }
    });
    $('.ielts-no').click(function(){ 
        if($(this).is(':checked')){ 
            $('#TOELL').slideUp();
        }
    });

// 
$('.visa-yes').click(function(){ 
    if($(this).is(':checked')){ 
        $('#visascreen').slideDown();
    }
});
$('.visa-no').click(function(){ 
    if($(this).is(':checked')){ 
        $('#visascreen').slideUp();
    }
});


});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});

// $(document).ready(function () {
//     var myData = ['apple', 'banana', 'banana0', 'banana1', 'banana2', 'banana3', 'banana4', 'banana5', 'cherry', 'durian', 'elderberry'];
//     var myInput = $('#my-input');

//     myInput.typeahead({
//         hint: true,
//         highlight: true,
//         minLength: 1
//     },
//         {
//             name: 'my-data',
//             source: substringMatcher(myData)
//         });

//     function substringMatcher(strs) {
//         return function findMatches(q, cb) {
//             var matches, substringRegex;

//             // an array that will be populated with substring matches
//             matches = [];

//             // regex used to determine if a string contains the substring `q`
//             substringRegex = new RegExp(q, 'i');

//             // iterate through the pool of strings and for any string that
//             // contains the substring `q`, add it to the `matches` array
//             $.each(strs, function (i, str) {
//                 if (substringRegex.test(str)) {
//                     matches.push(str);
//                 }
//             });

//             cb(matches);
//         };
//     }
// })


// EMPLAYER DROPDOWN
$(document).ready(function() {
    $(document).click(function(event) {
        // Check if the clicked element is not within the dropdown or the dropdown button
        if (!$(event.target).closest('.employer_notification-dropdown, .employer_profile-dropdown').length) {
            // Hide any visible dropdown
            $('.profile-dropdown').fadeOut(300);
        }
    });

    $('#open_profile_notification').click(function() {
        if ($('.employer_profile-dropdown .profile-dropdown').is(':visible')) {
            $('.employer_profile-dropdown .profile-dropdown').fadeOut(300, function() {
                $('.employer_notification-dropdown .profile-dropdown').fadeIn(300);
            });
        } else {
            $('.employer_notification-dropdown .profile-dropdown').fadeIn(300);
        }
    });

    $('#open_profile_dropdown').click(function() {
        if ($('.employer_notification-dropdown .profile-dropdown').is(':visible')) {
            $('.employer_notification-dropdown .profile-dropdown').fadeOut(300, function() {
                $('.employer_profile-dropdown .profile-dropdown').fadeIn(300);
            });
        } else {
            $('.employer_profile-dropdown .profile-dropdown').fadeIn(300);
        }
    });
});

//toggle sidebar

$(document).ready(function() {
    $('#menu_toggle_btn').click(function () {
        $('.sidebar').toggleClass('hide')
        $('.emplayer_main_content').toggleClass('expand')
    });
});
