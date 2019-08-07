// ==UserScript==
// @name         Responsive Sesam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Responsive Sesam
// @author       You
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @include     https://sesam.intra.ip-only.net/*
// ==/UserScript==


$(document).ready(function () {
	
	'use strict';

    $('*').filter(function () {
        if ($(this).width() > 1200) {
            $(this).width(1900)
        }
    });

    $('iframe').filter(function () {
        $(this).attr('scrolling', 'yes');
    });

});
