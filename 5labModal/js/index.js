$(document).ready(function(){
	$('body').on('click', '.open-modal', function(){
		let page = $(this).attr('page')
		console.log(page)
		$('.modal-container').removeClass('modal-container-open')
		$("#m"+page).addClass('modal-container-open')
	})
	$('body').on('click', '.overlay', function(){

		$('.modal-container').removeClass('modal-container-open')

	})
})
