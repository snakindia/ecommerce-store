

const axios = require('axios');
const IGNORE_PATH = ["/"]

const getRedirect = (req) => {
  const absoluteUrl = `${req.protocol}://${req.hostname}${req.url}`
  const relativeUrl = req.url
  const relativePath = req.path
  const url = `${process.env.REACT_APP_API_URL}/redirects`;
  //const url = `http://localhost:3001/api/v1/redirects`;
  //console.log({ url });
  //console.log(absoluteUrl,relativeUrl,relativePath);
  return axios.get(url).then((res) => {
    
    //console.log(res.data);
    const items = res.data;
    if (items && items.length > 0) {

      /*
      1. check absolute url
      2. check relative url
      3. check relative url (without query)
      */
      const redirect = items.find(
        item =>
          item.from === absoluteUrl ||
          item.from === relativeUrl ||
          item.from === relativePath
      )
      return redirect
    }

    return null
  })
}


const redirectUrlIsValid = (url) =>
  url &&
  url.length > 0 &&
  (url.startsWith("/") ||
    url.startsWith("https://") ||
    url.startsWith("http://"))

exports.redirects = (req, res, next) => {
  if (IGNORE_PATH.includes(req.url)) {
    next()
  } else {
    getRedirect(req)
      .then((redirect) => {
        if (redirect && redirectUrlIsValid(redirect.to)) {
          res.redirect(redirect.status, redirect.to)
        } else {
          next()
        }
      })
      .catch(() => {
        next()
      })
  }
}