const CHECK_LOTTERY_RATE = 5000;

window.addEventListener("DOMContentLoaded", () => {
  // Request lottery information while the modal is open.
  const lotteryModal = document;
  lotteryModal.getElementById("lotteryModal");

  lotteryModal.addEventListener("show.bs.modal", (event) => {
    if (event.target.id === "lotteryModal") {
      checkLotteryStats();
      startCheckingLotteryStats();
    }
  });
  lotteryModal.addEventListener("hide.bs.modal", (event) => {
    if (event.target.id === "lotteryModal") {
      stopCheckingLotteryStats();
    }
  });

  // Show ticket being pulled.
  document.getElementById("purchaseTicket").addEventListener("click", () => {
    document.getElementById("lotteryTicketPulled").style.display = "block";

    setTimeout(() => {
      document.getElementById("lotteryTicketPulled").style.display = "none";
    }, 3600);
  });
});

function purchaseLotteryTicket() {
  return handleLotteryRequest("buy", "POST");
}

// Continously checking
function checkLotteryStats() {
  return handleLotteryRequest("active", "GET");
}

let checking;
function startCheckingLotteryStats() {
  clearTimeout(checking);

  checking = setTimeout(() => {
    checkLotteryStats();
    startCheckingLotteryStats();
  }, CHECK_LOTTERY_RATE);
}

function stopCheckingLotteryStats() {
  clearTimeout(checking);
}

// Admin
function ensureIntent() {
  return window.confirm("Are you sure you want to end the current lottery?");
}

function startLotterySession() {
  if (ensureIntent()) {
    return handleLotteryRequest("start", "POST");
  }
}

function endLotterySession() {
  if (ensureIntent()) {
    return handleLotteryRequest("end", "POST");
  }
}

// Composed
function handleLotteryRequest(uri, method) {
  const xhr = new XMLHttpRequest();
  const url = `/lottery/${uri}`;
  xhr.open(method, url);
  xhr.onload = handleLotteryResponse.bind(null, xhr, method);

  const form = new FormData();
  form.append("formkey", formkey());

  xhr.send(form);
}

function handleLotteryResponse(xhr, method) {
  let response;

  try {
    response = JSON.parse(xhr.response);
  } catch (error) {
    console.error(error);
  }

  if (method === "POST") {
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
  }

  if (response && response.stats) {
    lastStats = response.stats;
    startCheckingLotteryStats();

    const { user, lottery, participants } = response.stats;
    const [
      prizeImage,
      prizeField,
      timeLeftField,
      ticketsSoldThisSessionField,
      participantsThisSessionField,
      ticketsHeldCurrentField,
      ticketsHeldTotalField,
      winningsField,
      purchaseTicketButton,
    ] = [
      "prize-image",
      "prize",
      "timeLeft",
      "ticketsSoldThisSession",
      "participantsThisSession",
      "ticketsHeldCurrent",
      "ticketsHeldTotal",
      "winnings",
      "purchaseTicket",
    ].map((id) => document.getElementById(id));

    if (lottery) {
      prizeImage.style.display = "inline";
      prizeField.textContent = lottery.prize;
      timeLeftField.textContent = formatTimeLeft(lottery.timeLeft);
      
      if (participants) {
        participantsThisSessionField.textContent = participants;
      }

      ticketsSoldThisSessionField.textContent = lottery.ticketsSoldThisSession;
      ticketsHeldCurrentField.textContent = user.ticketsHeld.current;
      purchaseTicketButton.disabled = false;
    } else {
      prizeImage.style.display = "none";
      prizeField.textContent = "-";
      timeLeftField.textContent = "-";
      ticketsSoldThisSessionField.textContent = "-";
      participantsThisSessionField.textContent = "-";
      ticketsHeldCurrentField.textContent = "-";
      purchaseTicketButton.disabled = true;
    }

    ticketsHeldTotalField.textContent = user.ticketsHeld.total;
    winningsField.textContent = user.winnings;

    const [endButton, startButton] = [
      "endLotterySession",
      "startLotterySession",
    ].map((id) => document.getElementById(id));
    if (response.stats.lottery) {
      endButton.style.display = "block";
      startButton.style.display = "none";
    } else {
      endButton.style.display = "none";
      startButton.style.display = "block";
    }
  }
}

function formatTimeLeft(secondsLeft) {
  const minutesLeft = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const minutes = minutesLeft % 60;
  const hours = Math.floor(minutesLeft / 60);

  return `${hours}h, ${minutes}m, ${seconds}s`;
}
