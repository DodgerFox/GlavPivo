export default function singleMarketMain() {
	singleMarketClose()
	singleMarketForm()
}
function singleMarketClose() {
	var buttonClose = document.querySelector('.singleMarketFeedbacButtonClose');
	var buttonOpen = document.querySelector('.contactFeedbackButton');
	var windowPopUp = document.querySelector('.singleMarketFeedback');
	i = false;

	buttonOpen.addEventListener('click', function () {
		if (i == false) {
		windowPopUp.style.display = 'block';
		i = true
		}
	})
	buttonClose.addEventListener('click', function () {
		if (i == true) {
		windowPopUp.style.display = 'none';
		i = false
		}
	})

}
function singleMarketForm() {
	var textAreaForm = document.querySelector('.singleMarketFeedbackBigInput');
	console.log(textAreaForm);
textAreaForm.onblur = function() {
  this.rows = "5";
  console.log('222');
}

textAreaForm.onfocus = function() {
    this.rows = "5";
  

}
}
