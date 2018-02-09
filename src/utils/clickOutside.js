export default (obj, cb) => {
  function ref({ target }) {
    if (!obj.contains(target)) {
      window.removeEventListener('click', ref, true)
      cb()
    }
  }
  window.addEventListener('click', ref, true)
  return ref
}
