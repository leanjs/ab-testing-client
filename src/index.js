const API_BASE_URL = (window.__beerder_config && window.__beerder_config.apiWidgetUrl) ? window.__beerder_config.apiWidgetUrl : ''
const FILES_BASE_URL = (window.__beerder_config && window.__beerder_config.filesWidgetUrl) ? window.__beerder_config.filesWidgetUrl : ''
const URL_WIDGET = (window.__beerder_config && window.__beerder_config.domainUrl) ? window.__beerder_config.domainUrl : ''

const createCORSRequest = (method, url) => {
  let xhr = new XMLHttpRequest()

  if ('withCredentials' in xhr) {
    xhr.open(method, url, true)
    if (method === 'POST') xhr.setRequestHeader('Content-type', 'application/json')

  } else if (typeof XDomainRequest != 'undefined') {
    xhr = new XDomainRequest()
    xhr.open(method, url)
    if (method === 'POST') xhr.setRequestHeader('Content-type', 'application/json')

  } else {
    xhr = null
  }

  return xhr
}

const downloadData = (method, url, params, callback) => {
  let xhr = createCORSRequest(method, url)

  xhr.onload = () => {
    let responseText = xhr.responseText
    callback(responseText)
  }

  xhr.onerror = () => {}
  xhr.send(params)
}

downloadData('POST', `${API_BASE_URL}/sessions`, JSON.stringify({ url: URL_WIDGET }), function(responseText){
  const data = JSON.parse(responseText)
  window.__beerder_config.widgetVersion = data.version
  if (data.site.language !== '') {
    downloadData('GET', `${FILES_BASE_URL}/${data.version}/${data.site.language}.json`, '', function(responseText){
      const translations = JSON.parse(responseText)
      const locale = (window.__beerder_config && window.__beerder_config.locale) ? window.__beerder_config.locale : data.site.language
      window.__beerder_config.translations[locale] = translations.translations

      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = `${FILES_BASE_URL}/${data.version}/bundle.js`
      document.body.appendChild(s)
    })
  } else {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = `${FILES_BASE_URL}/${data.version}/bundle.js`
    document.body.appendChild(s)
  }
})