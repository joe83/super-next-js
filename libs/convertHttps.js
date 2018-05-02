const convertHttps = (url) => {
  return url.replace(/^http:\/\//i, 'https://')
}

export default convertHttps
