export default (cb, duration = 0) => {
  const ref = setTimeout(() => {
    cb()
    clearTimeout(ref)
  }, duration)
}
