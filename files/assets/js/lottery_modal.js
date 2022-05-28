window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("purchaseTicket").addEventListener("click", () => {
    // Show ticket being pulled.
    document.getElementById("lotteryTicketPulled").style.display = "block";

    setTimeout(() => {
      document.getElementById("lotteryTicketPulled").style.display = "none";
    }, 1600);
  });
});
