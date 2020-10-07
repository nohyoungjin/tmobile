$(function() {
	
	var appendthis =  ("<div class='modal_overlay js-modal_close'></div>");

	// 팝업열기

	$(".sns_btn").click(function(e) {
		$('body,html').animate({ scrollTop: 0 }, 1000);
		$("body").append(appendthis);
		$(".modal_overlay").fadeTo(500, 0.7);
		$(".modal_overlay").css("height",$(document).height());

		$("#warn_popup").fadeIn($(this).data());
	});

	// 

	$('.join_end .btn_box').on('click', function() {
		// $('body,html').animate({ scrollTop: 0 }, 1000);
		$("body").append(appendthis);
		$(".modal_overlay").fadeTo(500, 0.7);
		$(".modal_overlay").css("height",$(document).height());

		$("#warn_popup").fadeIn($(this).data());
	});

	$('.app #s11_market').on('click', function() {
		if($('#s11_market').is(':checked')){
			// $('body,html').animate({ scrollTop: 0 }, 1000);
			$("body").append(appendthis);
			$(".modal_overlay").fadeTo(500, 0.7);
			$(".modal_overlay").css("height",$(document).height());

			$("#warn_popup").fadeIn($(this).data());
		} else {
			return			
		}
	});

	// 팝업닫기

	$(".popup_close, .term_check").click(function(e) {
		e.preventDefault();
		$(".modal_box, .modal_overlay").fadeOut(700, function() {
			$(".modal_overlay").remove();
		});
	});

	// FAQ

	$(".faq dl dt a").on("click", function() {
		if($(this).parent().next().css("display") == "none") {
			$(".faq dl dt a").removeClass('on');
			$(".faq dl dd").slideUp(150);
			$(this).addClass('on');
			$(this).parent().next().slideDown(150);
		} else {
			$(".faq dl dt a").removeClass('on');
			$(".faq dl dd").slideUp(150);
		}
	});

	// 유효성 검사 01

	$(".step-1-submit").on("click", function() {

		var email01 = $("#email_01").val();
		var email02 = $("#email_02").val();
		var email03 = $("#email_03").val();

		if( !$.trim( email01 ) ) {
			alert( "정확한 이메일 주소를 입력해주세요." );
			$("#email_01").focus();
			return;
		} else if( !$.trim( email02 ) ) {
			alert( "정확한 이메일 주소를 입력해주세요." );
			$("#email_02").focus();
			return;
		}

		$(".step-1").css("display","none");
		$(".step-1-1").css("display","block");

	});

	// 유효성 검사 02

	$(".step-1-1-submit").on("click", function() {

		/* var s11_email01 = $("#s11_email_01").val();
		var s11_email02 = $("#s11_email_02").val();
		var s11_email03 = $("#s11_email_03").val(); */

		var s11_pwd = $("#s11_pwd").val();
		var s11_pwd_ok = $("#s11_pwd_ok").val();

		var s11_name = $("#s11_name").val();

		var s11_phone_01 = $("#s11_phone_01").val();
		var s11_phone_02 = $("#s11_phone_02").val();
		var s11_phone_03 = $("#s11_phone_03").val();

		/* if( !$.trim( s11_email01 ) ) {
			alert( "정확한 이메일 주소를 입력해주세요." );
			$("#s11_email_01").focus();
			return;
		} else if( !$.trim( s11_email02 ) ) {
			alert( "정확한 이메일 주소를 입력해주세요." );
			$("#s11_email_02").focus();
			return;
		} else */ if( !$.trim( s11_pwd ) ) {
			alert( "비밀번호를 입력해주세요." );
			$("#s11_pwd").focus();
			return;
		} else if( !$.trim( s11_pwd_ok ) ) {
			alert( "비밀번호를 입력해주세요." );
			$("#s11_pwd_ok").focus();
			return;
		} else if( s11_pwd !== s11_pwd_ok ) {
			alert( "비밀번호와 동일하게 한번 더 입력해주세요." );
			$("#s11_pwd").focus();
			return;
		} else if( !$.trim( s11_name ) ) {
			alert( "이름을 정확하게 입력해주세요." );
			$("#s11_name").focus();
			return;
		} else if( !$.trim( s11_phone_02 ) ) {
			alert( "휴대폰번호 중간 자리를 정확하게 입력해주세요." );
			$("#s11_phone_02").focus();
			return;
		} else if( !$.trim( s11_phone_03 ) ) {
			alert( "휴대폰번호 마지막 자리를 정확하게 입력해주세요." );
			$("#s11_phone_03").focus();
			return;
		} else if( !$("#s11_market").is(":checked") ) {
			alert( "컨퍼런스 신청을 위해서는 홍보 및 마케팅 동의를 체크해주셔야 합니다." );
			$("#s11_market").focus();
			return;
		} else if( !$("#s11_14").is(":checked") ) {
			alert( "만 14세 이상에 체크해주세요." );
			$("#s14_market").focus();
			return;
		}

		$(".step-1-1").css("display","none");
		$(".step-1-2").css("display","block");

	});

	// 유효성 검사 03

	$(".step-1-2-submit").on("click", function() {

		/* var s12_email01 = $("#s12_email_01").val();
		var s12_email02 = $("#s12_email_02").val();
		var s12_email03 = $("#s12_email_03").val(); */

		var s12_pwd = $("#s12_pwd").val();

		/* if( !$.trim( s12_email01 ) ) {
			alert( "정확한 이메일 주소를 입력해주세요." );
			$("#s12_email_01").focus();
			return;
		} else if( !$.trim( s12_email02 ) ) {
			alert( "정확한 이메일 주소를 입력해주세요." );
			$("#s12_email_02").focus();
			return;
		} else */ if( !$.trim( s12_pwd ) ) {
			alert( "비밀번호를 입력해주세요." );
			$("#s12_pwd").focus();
			return;
		}

		$(".step-1-2").css("display","none");
		$(".step-2").css("display","block");

	});

	// 유효성 검사 04

	$(".step-2-submit").on("click", function() {

		/* var s2_email01 = $("#s2_email_01").val();
		var s2_email02 = $("#s2_email_02").val();
		var s2_email03 = $("#s2_email_03").val();

		if( !$.trim( s2_email01 ) ) {
			alert( "정확한 이메일 주소를 입력해주세요." );
			$("#s2_email_01").focus();
			return;
		} else if( !$.trim( s2_email02 ) ) {
			alert( "정확한 이메일 주소를 입력해주세요." );
			$("#s2_email_02").focus();
			return;
		} */

	});

	// 팝업 스크롤 디자인

	$('.scrollbar-inner').scrollbar();

});

function couponClose() {
	$(".modal_box, .modal_overlay").fadeOut(700, function() {
		$(".modal_overlay").remove();
	});
}