$(function(){
			$('.our').mouseover(function(){
				$('.our1').stop().animate({
					width:196
				},500)
			})
			$('.our').mouseout(function(){
				$('.our1').stop().animate({
					width:0
				},50)
			})
			$('.ul1 li a img').mousemove(function(){
//				$('.ul1 li a img')
			})
			
			$('.dong .tip img').mousemove(function(){
				$('.dong .tip img').stop().animate({
					top:100
				},2000)
			})
			$('.dong .tip img').mouseout(function(){
				$('.dong .tip img').stop().animate({
					bottom:0
				},2000)
			})
			
			
		})
