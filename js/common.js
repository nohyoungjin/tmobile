$(function() {

	// 메일 입력 (select)
	
	$('.email_sel').change(function() {
		mailchange();
	});

	// 비즈니스 접대 제공 안내

	$('.faq dl dt a').on('click', function() {
		if ($(this).parent().next().css('display') == 'none') {
			$('.faq dl dt a').removeClass('on');
			$('.faq dl dd').slideUp(150);
			$(this).addClass('on');
			$(this).parent().next().slideDown(150);
		} else {
			$('.faq dl dt a').removeClass('on');
			$('.faq dl dd').slideUp(150);
		}
	});

	/*  [s] 댓글 (유효성 검사) */

	$('.btn_upload').on('click', function() {
		if ($(this).parent().prev().prev().children().children('#write_textarea').val() == "") {
			alert('내용을 입력해주세요');
			$(this).parent().prev().prev().children().children('.box_text').focus();
			return false;
		}
	});

	/*  [e] 댓글 (유효성 검사) */

	/*  [s] 참가신청 (유효성 검사) */

	$('.join_end .btn_box').on('click', function() {

		if ($('.type_sel option').index($('.type_sel option:selected')) == 0) {

			alert('참가자 타입을 선택해주세요.')
			$('.type_sel').focus();
			return;

		} else if ($('input[name=flag_1]:checked').length == 0) {

			alert('정부 소유 기관 지원 유무를 체크해 주세요.');
			return;

		} else if (!$.trim($('.company_nm').val())) {

			alert('회사명을 입력해주세요.');
			return;

		} else if ($('.type_sel_1 option').index($('.type_sel_1 option:selected')) == 0) {

			alert('업종을 선택해주세요.')
			$('.type_sel_1').focus();
			return;

		} else if (!$.trim($('.department_nm').val())) {

			alert('부서 이름을 입력해주세요.')
			$('.type_sel_1').focus();
			return;

		} else if ($('.type_sel_2 option').index($('.type_sel_2 option:selected')) == 0) {

			alert('담당 직무를 선택해주세요.')
			$('.department_nm').focus();
			return;

		} else if (!$.trim($('.title_nm').val())) {

			alert('직함을 입력해주세요.')
			$('.title_nm').focus();
			return;

		} else {

			openLayer('complete_popup');

		}

	});

	/* [e] 참가신청 (유효성 검사) */

	/* [s] 유효성 검사 01(간편회원 가입여부 확인) */

	$('.step-1-submit').on('click', function() {

		var email01 = $("#email_01").val();
		var email02 = $("#email_02").val();
		var email03 = $("#email_03").val();

		if (!$.trim(email01)) {
			alert('정확한 이메일 주소를 입력해주세요.');
			$('#email_01').focus();
			return;
		} else if(!$.trim(email02)) {
			alert('정확한 이메일 주소를 입력해주세요.');
			$('#email_02').focus();
			return;
		}

		/* 가입되지 않은 아이디 회원가입으로 이동 
		 : 	member_chk(1)
		가입된 아이디 패스워드 입력창 활성화
		 : member_chk(2) */

		member_chk(2)

	});

	/* [e] 유효성 검사 01(간편회원 가입여부 확인) */


	/* [s] 유효성 검사 01(간편회원 가입) */

	$(".step-1-1-submit").on("click", function() {
		var s11_pwd = $("#s11_pwd").val();
		var s11_pwd_ok = $("#s11_pwd_ok").val();

		var s11_name = $("#s11_name").val();

		var s11_phone_01 = $("#s11_phone_01").val();
		var s11_phone_02 = $("#s11_phone_02").val();
		var s11_phone_03 = $("#s11_phone_03").val();

	   if( !$.trim( s11_pwd ) ) {
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
		}else if( !$.trim( s11_phone_03 ) || s11_phone_03.length < 4 ) {
			alert( "휴대폰번호 마지막 자리를 정확하게 입력해주세요." );
			$("#s11_phone_03").focus();
			return;
		} else if( !$("#s11_market").is(":checked") ) {
			alert( "컨퍼런스 신청을 위해서는 홍보 및 마케팅 \n동의를 체크해주셔야 합니다." );
			$("#s11_market").focus();
			return;
		} else if( !$("#s11_14").is(":checked") ) {
			alert( "만 14세 이상에 체크해주세요." );
			$("#s14_market").focus();
			return;
		}
	});

	/* [e] 유효성 검사 01(간편회원 가입) */


	// 로그인 버튼 클릭

	$(".step-1-2-submit").on("click", function() {

		var s12_pwd = $("#s12_pwd").val();

			if( !$.trim( s12_pwd ) ) {
				alert( "비밀번호를 입력해주세요." );
				$("#s12_pwd").focus();
			return;
		}

		/*비밀번호 check
		비밀번호확인 일치
		 : password_chk(1);
		 비밀확인 불일치
		 : password_chk(2);
		*/
		password_chk(1);

	});


	// 다른 이메일로 신청

	$('.step1-2-submit ').on("click", function() {
		window.location.reload();
	});

	// 팝업 스크롤 디자인

	$('.scrollbar-inner').scrollbar();

});

/* 
	func :  mailchange
	메일  도메인 선택
*/

function mailchange() {

   if ($('select.email_sel').val() == "00") {
		$('input.mail_02').val('');
		$('input.mail_02').prop('disabled', false);
		$('input.mail_02').css('background', '#FFFFFF');
   } else {
		$('input.mail_02').prop('disabled', true);
		$('input.mail_02').css('background', '#F2F2F2');
		$('input.mail_02').val($('select.email_sel').val());

   }

}

/* 
	func :  member_chk(val)
	가입 여부 확인
	param  1: 가입화면
	param  2: 기존회원  패스워드창 활성화
*/

function member_chk(val) {

	var sel_index = $("#email_03 option").index($("#email_03 option:selected"));

	if (val == 1) {
		var confirm_str = confirm("가입 이력이 없는 아이디 입니다. \n간편 회원 가입을 진행 하시겠습니까?")
			if (confirm_str == true) {
				   
				$('.step-1').css('display','none');
				$('.step-1-1').css('display','none');
				$('.step-2-1').css('display','block');

				$('#s11_email_01').val($('#email_01').val());
				$('#s11_email_02').val($('#email_02').val());
				$("#s11_email_03 option:eq("+sel_index+")").attr("selected", "selected");

			} else {
				return
			}
		}
	else if(val == 2){
			$('.step-1').css('display','none');
			$('.step-1-1').css('display','block');
			$('#email_01_01').val($('#email_01').val());
			$('#email_02_01').val($('#email_02').val());
			$("#email_03_01 option:eq("+sel_index+")").attr("selected", "selected");
			$('.step-1-1 input[type=text] ').attr("readonly",true);
			$('.step-1-1 select').attr("disabled",true);

	}
}

/* 
	func :  password_chk(val)
	가입 여부 확인
	param  1: 로그인 완료
	param  2: 패스워드 오류
*/

function password_chk(val) {

	if (val == 1) {

		$(location).attr('href','mobile_02.html')

	} else if (val == 2) {

		var sel_index = $("#email_03_01 option").index($("#email_03_01 option:selected"));
		$('.step-1-1').css('display','none');
		$('.step-1-2').css('display','block');
		$('#email_01_02').val($('#email_01_01').val());
		$('#email_02_02').val($('#email_02_01').val());
		$("#email_03_02 option:eq("+sel_index+")").attr("selected", "selected");
		$('.error span').html($('#email_01_02').val()+"@"+$('#email_02_02').val());

	}

}

// Element ID 불러쓰기

function dEI(elementID) {
	return document.getElementById(elementID);
}

// 레이어 팝업 열기

function openLayer(IdName) {

	var pop = dEI(IdName);
	pop.style.display = "block";

	var wrap = dEI('wrap');
	var reservation = document.createElement('div');
	reservation.setAttribute('id', 'deemed');
	wrap.appendChild(reservation);
	$('#deemed').css('height', $(document).height());

}

// 동의 유무에 따른 레이어 팝업 열기

function openCheckLayer(IdName, CheckValue) {

	if ($('#'+CheckValue).is(':checked')) {
		var pop = dEI(IdName);
		pop.style.display = 'block';

		var wrap = dEI('wrap');
		var reservation = document.createElement('div');
		reservation.setAttribute('id', 'deemed');
		wrap.appendChild(reservation);
		$('#deemed').css('height',$(document).height());
	} else {
		return false;			
	}

}

// 레이어 팝업 닫기

function closeLayer(IdName) {

	var pop = dEI(IdName);
	pop.style.display = 'none';
	var clearEl = parent.dEI('deemed');
	var momEl = parent.dEI('wrap');
	momEl.removeChild(clearEl);

}