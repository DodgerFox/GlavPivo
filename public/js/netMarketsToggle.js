document.addEventListener ('DOMContentLoaded', function () {

  netMarketsToggle()
  productToggle()
})
function netMarketsToggle () {
	var documentList = document.querySelector('.netMarketsItemsWrap')
	var documentMap = document.querySelector('.netMarketsMap')
	var toggleMap = document.querySelector('.netMarketsToggleMap')
	var toggleList = document.querySelector('.netMarketsToggleList')
	var toggleP = document.querySelectorAll('.netMarketsToggle p')
	var toggleActive = document.querySelector('.netMarketsToggleActive')
	var toggleSwich = document.querySelector('.netMarketsToggleSwich')
	var netMarketsCities = document.querySelector('.netMarketsCities')
	console.log(toggleP)

	Array.prototype.forEach.call (toggleP, function ( toggle, i ) {
		toggle.addEventListener('click', function () {
			if (this.classList.contains('netMarketsToggleMap') && this.classList.contains('netMarketsToggleP')) {
				console.log(this.classList)
				netMarketsCities.style.display = 'none'
				documentList.style.display = 'none'
				documentMap.style.display = 'block'
				toggleList.classList.remove('netMarketsToggleActive')
				toggleList.classList.add('netMarketsToggleP')
				this.classList.remove('netMarketsToggleP')
				this.classList.add('netMarketsToggleActive')
				initMap()
				if (toggleSwich.classList.contains('swichLeft')) {
					toggleSwich.style.right = '3px'
					toggleSwich.classList.remove('swichLeft')
				}
				else {
					toggleSwich.classList.add('swichLeft')
					toggleSwich.style.right = 'inherit'
				}

			}
			if (this.classList.contains('netMarketsToggleList') && this.classList.contains('netMarketsToggleP')) {
				console.log(this.classList)
				documentList.style.display = 'block'
				documentMap.style.display = 'none'
				toggleMap.classList.remove('netMarketsToggleActive')
				toggleMap.classList.add('netMarketsToggleP')
				this.classList.remove('netMarketsToggleP')
				this.classList.add('netMarketsToggleActive')
				if (toggleSwich.classList.contains('swichLeft')) {
					toggleSwich.style.right = '3px'
					toggleSwich.classList.remove('swichLeft')
				}
				else {
					toggleSwich.classList.add('swichLeft')
					toggleSwich.style.right = 'inherit'
				}

			}

		})
	})
}
function productToggle () {
	var documentList = document.querySelector('.productList')
	var documentMap = document.querySelector('.productMap')
	var toggleMap = document.querySelector('.productToggleMap')
	var toggleList = document.querySelector('.productToggleList')
	var toggleP = document.querySelectorAll('.productToggle p')
	var toggleActive = document.querySelector('.productToggleActive')
	var toggleSwich = document.querySelector('.productToggleSwich')
	var netMarketsCities = document.querySelector('.productCities')
	console.log(toggleP)

	Array.prototype.forEach.call (toggleP, function ( toggle, i ) {
		toggle.addEventListener('click', function () {
			if (this.classList.contains('productToggleMap') && this.classList.contains('productToggleP')) {
				console.log(this.classList)
				documentList.style.display = 'none'
				documentMap.style.display = 'block'
				toggleList.classList.remove('productToggleActive')
				toggleList.classList.add('productToggleP')
				this.classList.remove('productToggleP')
				this.classList.add('productToggleActive')
				initMap()
				if (toggleSwich.classList.contains('swichLeft')) {
					toggleSwich.style.right = '3px'
					toggleSwich.classList.remove('swichLeft')
				}
				else {
					toggleSwich.classList.add('swichLeft')
					toggleSwich.style.right = 'inherit'
				}

			}
			if (this.classList.contains('productToggleList') && this.classList.contains('productToggleP')) {
				console.log(this.classList)
				documentList.style.display = 'block'
				documentMap.style.display = 'none'
				toggleMap.classList.remove('productToggleActive')
				toggleMap.classList.add('productToggleP')
				this.classList.remove('productToggleP')
				this.classList.add('productToggleActive')
				if (toggleSwich.classList.contains('swichLeft')) {
					toggleSwich.style.right = '3px'
					toggleSwich.classList.remove('swichLeft')
				}
				else {
					toggleSwich.classList.add('swichLeft')
					toggleSwich.style.right = 'inherit'
				}

			}

		})
	})
}
