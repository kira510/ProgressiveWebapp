var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', { scope: '/' })
    .then(() => {
      navigator.geolocation.getCurrentPosition((position) => {console.log(position)});
    }).catch((err) => {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

fetch('http://httpbin.org/ip')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })

fetch('http://httpbin.org/post', {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify({message: 'Does this work?'})
  })
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })

/**
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://httpbin.org/ip');
xhr.responseType = 'json';

xhr.onload = () => {
  console.log(xhr.response);
}

xhr.onerror = () => {
  console.log('Error!')
}

xhr.send();
*/
