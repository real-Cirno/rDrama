window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("purchaseTicket").addEventListener("click", () => {
    // Show ticket being pulled.
    document.getElementById("lotteryTicketPulled").style.display = "block";

    setTimeout(() => {
      document.getElementById("lotteryTicketPulled").style.display = "none";
    }, 1600);
  });
});

function purchaseLotteryTicket() {
  const xhr = new XMLHttpRequest();
  const url = `/lottery/buy`;

  xhr.open("POST", url);
  xhr.setRequestHeader("xhr", "xhr");
  xhr.onload = function () {
    let response;

    try {
      response = JSON.parse(xhr.response);
    } catch (error) {
      console.error(error);
    }

    const succeeded =
      xhr.status >= 200 && xhr.status < 300 && response && response.message;

    if (succeeded) {
      // Display success.
      const toast = document.getElementById("lottery-post-success");
      const toastMessage = document.getElementById("lottery-post-success-text");

      toastMessage.innerText = response.message;

      bootstrap.Toast.getOrCreateInstance(toast).show();
    } else {
      // Display error.
      const toast = document.getElementById("lottery-post-error");
      const toastMessage = document.getElementById("lottery-post-error-text");

      toastMessage.innerText =
        (response && response.error) || "Error, please try again later.";

      bootstrap.Toast.getOrCreateInstance(toast).show();
    }
  };

  const form = new FormData();
  form.append("formkey", formkey());

  xhr.send(form);
}
