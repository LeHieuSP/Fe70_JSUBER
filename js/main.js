
const billBtn = document.querySelector(".contact100-form-btn");

billBtn.addEventListener("click", (e) => {
  // Phân loại

  const _cabList = document.querySelectorAll("input[name='selector']");
  let totalPrice = 0;
  const selectedCabTypeList = [..._cabList].filter((cabType) => {
    return cabType.checked === true;
  })[0].id;

  // Tính tiền 

  const kilometerNum = +document.querySelector("#soKM").value;
  const aWaitingTime = +document.querySelector("#thoiGianCho").value;
  const calculateRate = (
    startRate,
    first20KmRate,
    casualRate,
    waitingRate
  ) => {
    if (kilometerNum <= 1) {
      totalPrice = startRate + aWaitingTime * waitingRate;
      return totalPrice;
    }

    if (kilometerNum <= 20) {
      totalPrice = startRate + (kilometerNum - 1) * first20KmRate + aWaitingTime * waitingRate;
      return totalPrice;
    }

    if (kilometerNum > 20) {
      totalPrice = startRate + 19 * first20KmRate + (kilometerNum - 20) * casualRate + aWaitingTime * waitingRate;
      return totalPrice;
    }
  };
  switch (selectedCabTypeList) {
    case "uberX":
      calculateRate(8000, 12000, 10000, 2000);
      break;
    case "uberSUV":
      calculateRate(9000, 14000, 12000, 3000);
      break;
    case "uberBlack":
      calculateRate(10000, 16000, 14000, 4000);
      break;
  }

  // Tổng số tiền
  document.querySelector("#xuatTien").textContent = totalPrice;
});
