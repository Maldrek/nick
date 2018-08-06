$(document).ready(function () {

    $('#contactModal').on('shown.bs.modal', function () {
        $('#submit').trigger('focus');
    })

    $('#submit').on('click', function (event) {
        event.preventDefault();
        firstName = $('#firstName').val().trim();
        lastName = $('#lastName').val().trim();
        email = $('#email').val().trim();
        subject = $('#subject').val().trim();
        message = $('#message').val().trim();
        if (firstName === '' || email === '') {
            $('#title').text('Your Message Has Not Been Submitted.')
            $('#body').text('Please fill in the required fields.');
        } else if(message === '') {
            $('#firstName').val('')
            $('#lastName').val('')
            $('#email').val('')
            $('#subject').val('')
            $('#message').val('')
            $("#title").text('Did you forget something?');
            $("#body").text('I noticed there was no message attached! I will do my best to reach out on my own, but if you forgot please feel free to re-send it!')
        } else {
            $('#firstName').val('')
            $('#lastName').val('')
            $('#email').val('')
            $('#subject').val('')
            $('#message').val('')
            $('#title').text('Your message has been sent!')
            $('#body').text('Thank you, ' + firstName + '! I will respond as soon as I am able!')
        }
    })
})