let cartOpen = false

document.getElementsByClassName('ui button')[3].addEventListener('click', () => {
  if(window.innerWidth < 900) {
    document.getElementById('add-to-bag').style.position = 'absolute'
    window.scroll(0,0)
  } else {
    document.getElementById('add-to-bag').style.position = 'fixed'
  }
  document.getElementsByClassName('buttons')[0].style.opacity = '0'
  // document.getElementsByClassName('dWUjRn')[0].style.visibility = 'hidden'
  document.getElementById('add-to-bag').style.top = '0'
  document.getElementById('add-to-bag').style.right = '0'
  document.getElementById('add-to-bag').style.bottom = '0'
  document.getElementById('add-to-bag').style.zIndex = '3'
  document.getElementsByClassName('sc-EHOje SkSPV')[0].style.height = '100vh'
  document.getElementById('overlay').style.visibility = 'initial'
  document.getElementById('overlay').style.opacity = '1'
  cartOpen = true;
})



document.getElementById('overlay').addEventListener('click', () => {
  if (cartOpen) {
    document.getElementsByClassName('buttons')[0].style.opacity = '1'
    // document.getElementsByClassName('dWUjRn')[0].style.visibility = 'initial'
    document.getElementById('add-to-bag').style.position = 'initial'
    document.getElementById('add-to-bag').style.top = 'initial'
    document.getElementById('add-to-bag').style.right = 'initial'
    document.getElementById('add-to-bag').style.bottom = 'initial'
    document.getElementsByClassName('sc-EHOje SkSPV')[0].style.height = 'initial'
    document.getElementById('overlay').style.visibility = 'hidden'
    document.getElementById('overlay').style.opacity = '0'
    cartOpen = false;
  }
})

// document.getElementById('add-to-bag').addEventListener('dblclick', () => {
//   if (cartOpen) {
//     document.getElementById('add-to-bag').style.position = 'initial'
//     document.getElementById('add-to-bag').style.top = 'initial'
//     document.getElementById('add-to-bag').style.right = 'initial'
//     document.getElementById('add-to-bag').style.bottom = 'initial'
//     document.getElementsByClassName('sc-EHOje jKIeok')[0].style.height = 'initial'
//     document.getElementById('overlay').style.display = 'none'
//     cartOpen = false;
//   }
// })

