var Ajax = {
  ajax: null,

  init() {
    if (!this.ajax) {
      this.ajax = new XMLHttpRequest();
    }

    return this.ajax;
  },

  oldGet(url, callback) {
    var request = this.init();
    request.open("GET", url);
    request.send();
    request.onload = () => {
      callback(JSON.parse(request.responseText));
    };
  },

  get(url, callback, errCallback) {
    fetch(url)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function(data) {
          if (isFunction(callback)) callback(data);
        });
      })
      .catch(function(err) {
        if (isFunction(errCallback)) errCallback(err);
        console.log("Fetch Error :-S", err);
      });
  },

  post(url, data, callback) {
    var request = this.init();
    request.open("POST", url);
    request.send(data);
    request.onload = () => {
      callback(JSON.parse(request.responseText));
    };
  }
};
