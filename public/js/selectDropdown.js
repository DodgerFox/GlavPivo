document.addEventListener('DOMContentLoaded', function () {
  selDropFunc()
})
openClose = false

openCloseTwo = false
function selDropFunc () {
  console.log('Function!')
  var selDrop = document.querySelector('.select-wrap-one')
  var elements = document.querySelectorAll('.select-wrap-one .netMarketsSelectInput')

  selDrop.addEventListener('click', function () {
    if (openClose === false) {
      Array.prototype.forEach.call(elements, function (element, i) {
        console.log('click')
        element.style.display = 'flex'
        selDrop.classList.remove('select-wrap-close')
        selDrop.classList.add('select-wrap-open')
      })
      
      openClose = true
    }

    else {
      Array.prototype.forEach.call(elements, function (element, i) {
        element.style.display = 'none'
      })
      selDrop.classList.remove('select-wrap-open')
      selDrop.classList.add('select-wrap-close')
      openClose = false
    }
  })

  var selDropT = document.querySelector('.select-wrap-two')
  var elementsT = document.querySelectorAll('.select-wrap-two .netMarketsSelectInput')

  console.log(openCloseTwo)

  Array.prototype.forEach.call(elementsT, function (elementtwo, i) {
    selDropT.addEventListener('click', function () {
      if (openCloseTwo == false) {
        console.log('click')
        elementsT[ i ].style.display = 'flex'
        this.classList.add('select-wrap-open')
        openCloseTwo = true
        console.log(openCloseTwo)
      }
      else if (openCloseTwo == true) {
        elementsT[ i ].style.display = 'none'
        this.classList.remove('select-wrap-open')
        this.classList.add('select-wrap-close')
        openCloseTwo = false
      }
    })
  })
}
console.log('awdawd')
