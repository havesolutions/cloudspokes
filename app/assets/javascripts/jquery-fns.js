// Melbourne Cufon Replacement
Cufon.replace('.melbourne', { fontFamily: "Melbourne" });

// AmasisMTStd-Black Cufon Replacement
Cufon.replace('.num', { fontFamily: "AmasisMTStd-Black", textShadow: '0 1px #fff' });

$(function () {

    $(function () {
        $('input[id$=txtPassword]').val('password');
        $('input[id$=tbPassword]').val('password')
        $('input[id$=tbConfirmPassword]').val('password')
    });

    // Blinking Fields
    $('.blink').
	    focus(function () {
	        if (this.title == this.value) {
	            this.value = '';
	        }
	    }).
	    blur(function () {
	        if (this.value == '') {
	            this.value = this.title;
	        }
	    });

    // Apply PNG Fix for Internet Explorer 6
    if ($.browser.msie && $.browser.version.substr(0, 1) == 6) {
        DD_belatedPNG.fix('#dashboard .trans-box .box-t, #dashboard .trans-box .box-b, #dashboard .trans-box .box-cnt, .button-blue, .button-grey, #dashboard .pin, .popup .tab, .popup .t, .popup .b, .popup .cnt, .menu span');
    }

    // Login & Signup Popups
    $('#utility-nav .trigger').hover(function () {
        var href = $(this).attr('href');
        $('.popup').hide();
        $(href).show();
    });

    // Hide Popup on leaving
    $('.popup').hover(
		function () { },
		function () { $(this).hide(); }
	);


    // Code added to manage popup show hide on google chrome -- Starts here

    // show login Popup on textboxes hover
    $('.dvlogin').hover(
		function () { $('.dvlogin').show(); },
		function () { }
	);

    // show signup Popup on textboxes hover
    $('.dvsignup').hover(
		function () { $('.dvsignup').show(); },
		function () { }
	);

    // Code added to manage popup show hide on google chrome -- Ends here



    // Show the Terms & Conditions
    $('.terms-trigger').click(function () {
        var href = $(this).attr('href');
        $(href).show();
        return false;
    });

    // Already Member Login Switch
    $('.login-trigger').click(function () {
        var href = $(this).attr('href');

        $('#signup-popup').hide();
        $(href).show();
        return false;
    });


    $('.close-trigger').click(function () {
        var href = $(this).attr('href');
        $(href).hide();
        return false;
    });

    // Already Member Login Switch
    $('.signup-trigger').click(function () {
        var href = $(this).attr('href');

        $('#login-popup').hide();
        $(href).show();
        return false;
    });

    // Hover State on Categories
    $('.categories li').hover(function () {
        $(this).toggleClass('hover');
    });

    // Show Achievements Popup on click
    $('.achievements .trigger').click(function () {
        $('.badge-popup').hide();
        $(this).parent().find('.badge-popup').show();
        return false;
    });

    // Hide Popup on leaving
    $('.achievements .badge-popup').hover(
		function () { },
		function () { $(this).hide(); }
	);

    // Facebox
    $('a[rel*=facebox]').facebox();

    
    // Close Facebox from Cancel button
    $('.close-trigger').live('click', function () { $(document).trigger('close.facebox') });

    // Topic Quick Reply Toggle
    $('.quick-reply .toggle').click(function () {
        $(this).toggleClass('show');
        $(this).parents('.quick-reply').eq(0).find('.container').toggle();
        return false;
    });

    //    // Call the Datepicker
    //    $('.field-date').datepicker({
    //        showOn: "button",
    //        buttonImage: "images/icon-calendar.gif",
    //        buttonImageOnly: true
    //    });

    // message
    $('a[rel*=all]').click(function () {
        $("[id$='_chkMessage']").attr('checked', true);
    });
    $('a[rel*=none]').click(function () {
        $("[id$='_chkMessage']").attr('checked', false);
    });
    $('a[rel*=read]').click(function () {
        $("[id$='_chkMessage']").attr('checked', false);
        $(".emptyRow").find("td").children("[id$='_chkMessage']").attr('checked', true);

    });

    $('input[id$=txtStartDate]').change(function () {
        var d = new Date($('input[id$=txtStartDate]').val());

        var month = '';
        var day = '';
        if ($('input[id$=txtEndDate]').val() == '') {
            d.setDate(d.getDate() + 7)

            if (d.getMonth() + 1 < 10) {
                month = "0" + (d.getMonth() + 1);
            }
            else {
                month = d.getMonth() + 1
            }

            if (d.getDate() < 10) {
                day = "0" + (d.getDate());
            }
            else {
                day = d.getDate()
            }
            $('input[id$=txtEndDate]').val(month + "/" + day + "/" + d.getFullYear());
        }

        if ($('input[id$=txtWinnerAnnouncedDate]').val() == '') {
            d.setDate(d.getDate() + 7)
            if (d.getMonth() + 1 < 10) {
                month = "0" + (d.getMonth() + 1);
            }
            else {
                month = d.getMonth() + 1
            }

            if (d.getDate() < 10) {
                day = "0" + (d.getDate());
            }
            else {
                day = d.getDate()
            }
            $('input[id$=txtWinnerAnnouncedDate]').val(month + "/" + day + "/" + d.getFullYear());
        }



        if ($('input[id$=txtRegistrationEndDate]').val() == '') {
            d = new Date($('input[id$=txtStartDate]').val());
            d.setDate(d.getDate() + 4)
            if (d.getMonth() + 1 < 10) {
                month = "0" + (d.getMonth() + 1);
            }
            else {
                month = d.getMonth() + 1
            }

            if (d.getDate() < 10) {
                day = "0" + (d.getDate());
            }
            else {
                day = d.getDate()
            }
            $('input[id$=txtRegistrationEndDate]').val(month + "/" + day + "/" + d.getFullYear());
        }
    });

    $('input[id$=txtEndDate]').change(function () {
        var month = '';
        var day = '';
        var d = new Date($('input[id$=txtEndDate]').val());
        if ($('input[id$=txtWinnerAnnouncedDate]').val() == '') {
            d.setDate(d.getDate() + 7)
            if (d.getMonth() + 1 < 10) {
                month = "0" + (d.getMonth() + 1);
            }
            else {
                month = d.getMonth() + 1
            }

            if (d.getDate() < 10) {
                day = "0" + (d.getDate());
            }
            else {
                day = d.getDate()
            }
            $('input[id$=txtWinnerAnnouncedDate]').val(month + "/" + day + "/" + d.getFullYear());
        }
    });


});
