  
			$('.lang_menu').hide();
		
		$('#lang').click(function(){
			$('.lang_menu').slideToggle(250);
		});
		var un=document.getElementById('login_user');
		var pw=document.getElementById('pass_user');
		var lm=document.getElementById('lw');
		var tm=document.getElementById('tm');
		$('#vd').on('click', function (){
			tm.style.display="flex";
			lm.style.display="flex";
		 
		});
		$('#tm').on('click', function(){
        tm.style.display="none";
		lm.style.display="none";	
		});
		$('#lw').on('click', function(){
        tm.style.display="flex";
		lm.style.display="flex";	
		});
		$('#singin').on('click',function(){
         un.value="";
         pw.value="";
		})
		
		
		
