function ajaxcall() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./ajax.txt", true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      document.getElementById("change").textContent = xhr.responseText;
    } else {
      console.error("Ajax req failed", xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("Bad response");
  };
  xhr.send();
}

function updateTimer() {
  $.ajax({
    url: "./timer.php",
    method: "GET",
    success: function (response) {
      document.getElementById("timer").textContent = response;
      setTimeout(updateTimer, 1000);
    },
    error: function () {
      console.error("error timeout");
    },
  });
}
updateTimer();
