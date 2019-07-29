// A $( document ).ready() block.
$( document ).ready(function() {
        // Contact Form AJAX Submission
	$(function() {

		// Get the form.
		var form = $('#recaptcha-contact');
	
		// Get the messages div.
		var formMessages = $('#form-messages');
	
		// Set up an event listener for the contact form.
		$(form).submit(function(e) {
			// Stop the browser from submitting the form.
			e.preventDefault();

			// Validate the form. All fields are mandatory.
			if ($.trim($('#name').val()) === '') {
				$(formMessages).removeClass('hidemsg');
				$(formMessages).addClass('error');
				$(formMessages).text('Please enter your name');
				return;
			}
			if ($.trim($('#email').val()) === '') {
				$(formMessages).removeClass('hidemsg');
				$(formMessages).addClass('error');
				$(formMessages).text('Please enter your email');
				return;
			}
			if ($.trim($('#message').val()) === '') {
				$(formMessages).removeClass('hidemsg');
				$(formMessages).addClass('error');
				$(formMessages).text('Please enter your message');
				return;
			}
			if ($.trim($('#g-recaptcha-response').val()) === '') {
				$(formMessages).removeClass('hidemsg');
				$(formMessages).addClass('error');
				$(formMessages).text('Please Validate that you are not a robot!');
				return;
			}

			// Serialize the form data.
			var formData = $(form).serialize();
	
			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData,
				dataType: 'json',
				contentType: 'application/json',
				success: function(data, textStatus, jqXHR) {
					console.log(data);
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('hidemsg');
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');
		
					// Set the message text.
					$(formMessages).text(data.message);
		
					// Clear the form.
					form.trigger("reset");

				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(errorThrown);
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('hidemsg');
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');
		
					// Set the message text.
					if (jqXHR.responseText !== '') {
						var responseJson = JSON.parse(jqXHR.responseText);
						if (message) {
							$(formMessages).text(responseJson.message);
						} else {
							$(formMessages).text(jqXHR.responseText);
						}
					} else {
						$(formMessages).text('Oops! An error occured and your message could not be sent.');
					}

				}
			});

			// Reset Recaptcha
			grecaptcha.reset();
	
		});
	
	});

});