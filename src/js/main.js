/**
 * Main.
 *
 * @since 1.0.0
 * @author Blockshot
 */
'use strict';

$(document).ready(function () {

	console.log('main.js');

	var currentPathName = location.pathname;

	console.log(currentPathName);

	$('header .navbar .nav')
		.find('a[href="' + currentPathName + '"]')
		.closest('li')
		.addClass('active');

	$('.subnav .nav-list')
		.find('a[href="' + currentPathName + '"]')
		.closest('li')
		.addClass('active');

	$('footer nav')
		.find('a[href="' + currentPathName + '"]')
		.closest('li')
		.addClass('active');

	if (currentPathName === '/ombsy/hvavigjor/' || currentPathName === '/ombsy/styret/') {

		$('header .navbar .nav')
			.find('a[href="/ombsy/"]')
			.closest('li')
			.addClass('active');

		$('footer nav')
			.find('a[href="/ombsy/"]')
			.closest('li')
			.addClass('active');

	}

	var thisYear = new Date().getFullYear();

	$('.thisYear').text(thisYear);

	$("#contactForm").submit(function (e) {

		e.preventDefault();

		var $form = $(this);

		$.post($form.attr("action"), $form.serialize()).then(function () {

			$('.contact form').fadeOut();

			console.log("Thank you!");

		});
		
	});

});
