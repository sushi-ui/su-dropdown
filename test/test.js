const dropdown = new SuDropdown(document.querySelector('.su-Dropdown'), {
  padding: 0,
  placement: 'bottom-start',
  closeOnClickInside: false,
  closeOnClickOutside: false
})

document.querySelector('.su-Dropdown').addEventListener('hide', e => {
  // dropdown.destroy()
})
