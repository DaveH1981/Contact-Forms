jQuery(document).ready(function($) {
	$('#userEmail, #userPass, #signupNickname, #signupEmail, #signupPass, #signupPass_r').val('');

	$('#userEmail').on('click keyup blur focus', function(e) {
		$('#label_userEmail').addClass('active highlight');
	});
	$('#userEmail').blur(function() {
		if ($('#userEmail').val() === '') {
			$('#label_userEmail').removeClass('active highlight');
		} else {
			$('#label_userEmail').addClass('active highlight');
		}

		if ($('#userPass').val() === '') {
			$('#label_userPass').removeClass('active highlight');
		} else {
			$('#label_userPass').addClass('active highlight');
		}
	});

	$('#userPass').on('click keyup blur focus', function(e) {
		$('#label_userPass').addClass('active highlight');
	});
	$('#userPass').blur(function() {
		if ($('#userPass').val() === '') {
			$('#label_userPass').removeClass('active highlight');
		} else {
			$('#label_userPass').addClass('active highlight');
		}

		if ($('#userEmail').val() === '') {
			$('#label_userEmail').removeClass('active highlight');
		} else {
			$('#label_userEmail').addClass('active highlight');
		}
	});

	$('#signupNickname').on('click keyup blur focus', function(e) {
		$('#label_signupNickname').addClass('active highlight');
	});
	$('#signupNickname').blur(function() {
		if ($('#signupNickname').val() === '') {
			$('#label_signupNickname').removeClass('active highlight');
		} else {
			$('#label_signupNickname').addClass('active highlight');
		}

		if ($('#signupEmail').val() === '') {
			$('#label_signupEmail').removeClass('active highlight');
		} else {
			$('#label_signupEmail').addClass('active highlight');
		}

		if ($('#signupPass').val() === '') {
			$('#label_signupPass').removeClass('active highlight');
		} else {
			$('#label_signupPass').addClass('active highlight');
		}

		if ($('#signupPass_r').val() === '') {
			$('#label_signupPass_r').removeClass('active highlight');
		} else {
			$('#label_signupPass_r').addClass('active highlight');
		}
	});

	$('#signupEmail').on('click keyup blur focus', function(e) {
		$('#label_signupEmail').addClass('active highlight');
	});
	$('#signupEmail').blur(function() {
		if ($('#signupEmail').val() === '') {
			$('#label_signupEmail').removeClass('active highlight');
		} else {
			$('#label_signupEmail').addClass('active highlight');
		}

		if ($('#signupNickname').val() === '') {
			$('#label_signupNickname').removeClass('active highlight');
		} else {
			$('#label_signupNickname').addClass('active highlight');
		}

		if ($('#signupPass').val() === '') {
			$('#label_signupPass').removeClass('active highlight');
		} else {
			$('#label_signupPass').addClass('active highlight');
		}

		if ($('#signupPass_r').val() === '') {
			$('#label_signupPass_r').removeClass('active highlight');
		} else {
			$('#label_signupPass_r').addClass('active highlight');
		}
	});

	$('#signupPass').on('click keyup blur focus', function(e) {
		$('#label_signupPass').addClass('active highlight');
	});
	$('#signupPass').blur(function() {
		if ($('#signupPass').val() === '') {
			$('#label_signupPass').removeClass('active highlight');
		} else {
			$('#label_signupPass').addClass('active highlight');
		}
	});

	$('#signupPass_r').on('click keyup blur focus', function(e) {
		$('#label_signupPass_r').addClass('active highlight');
	});
	$('#signupPass_r').blur(function() {
		if ($('#signupPass_r').val() === '') {
			$('#label_signupPass_r').removeClass('active highlight');
		} else {
			$('#label_signupPass_r').addClass('active highlight');
		}
	});

	$('.tab a').on('click', function(e) {
		e.preventDefault();

		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		target = $(this).attr('href');

		$('.tab-content > div').not(target).hide();
		$(target).fadeIn(600);
	});
});
