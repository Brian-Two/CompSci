  
document.addEventListener('DOMContentLoaded', function () {

    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.BCA).forEach(function (url) {
      const div = document.createElement('div')
      div.textContent = `${url}: ${bg.BCA[url]}`
      document.body.appendChild(div)
    })
  
  }, false)