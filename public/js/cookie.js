/*function setcookie (a, b, c) { if (c) { var d = new Date(); d.setDate(d.getDate() + c) } if (a && b) document.cookie = a + '=' + b + (c ? '; expires=' + d.toUTCString() : ''); else return false }
function getcookie (a) { var b = new RegExp(a + '=([^;]){1,}'); var c = b.exec(document.cookie); if (c) c = c[ 0 ].split('='); else return false; return c[ 1 ] ? c[ 1 ] : false }

var block = getcookie('age18')
  buttonAgeYes = document.querySelector('.popUpAgeButtonYes')
  buttonAgeNo = document.querySelector('.popUpAgeButtonNo')
  console.log(buttonAgeNo, buttonAgeYes)
if (block = 'yes')
  {
  el = document.querySelector('.popUpAge')
  console.log(el)
  el.style.display = 'flex'
  buttonAgeYes = document.querySelector('.popUpAgeButtonYes')
  buttonAgeNo = document.querySelector('.popUpAgeButtonNo')
  console.log(buttonAgeNo, buttonAgeYes)
  buttonAgeYes.addEventListener('click', function () {
    setcookie('age18', 'yes', 14)
    el.style.display = 'none'
  })
  buttonAgeNo.addEventListener('click', function () {
    location.href = 'http://www.disney.ru/'
  })
  console.log('Yes')
}
else
  {
}
*/