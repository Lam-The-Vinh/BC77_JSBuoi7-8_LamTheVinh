function getElement(selector) {
  return document.querySelector(selector);
}

let arrayNumber = [];
const handleAddNumber = () => {
  let number = +getElement("#numberAdd").value;
  arrayNumber.push(number);
  getElement("#result").innerHTML = `<p>Array Number: [${arrayNumber}]</p>`;
};

// bài tập tính tổng số dương trong mảng
function sumArray(mang) {
  return mang.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}
const sumNumber = () => {
  let total = sumArray(arrayNumber);
  getElement("#ketQua").innerHTML = `<p>Tổng: ${total}</p>`;
};

// Đếm có bao nhiêu số dương trong mảng
function countPositiveNumbers(arr) {
  return arr.filter((num) => num > 0).length;
}
const countNumber = () => {
  let count = countPositiveNumbers(arrayNumber);
  getElement(
    "#resultCount"
  ).innerHTML = `<p>có ${count} số dương trong mảng</p>`;
};

// Tìm số nhỏ nhất trong mảng
function findMinimum(arr) {
  return Math.min(...arr);
}
const findMinNumber = () => {
  let minNumber = findMinimum(arrayNumber);
  getElement(
    "#resultMinNumber"
  ).innerHTML = `<p>Số nhỏ nhất trong mảng: ${minNumber}</p>`;
};

// tìm số dương nhỏ nhất trong mảng
function findMinimumPositive(arr) {
  let positiveNumber = arr.filter((num) => num > 0);
  return positiveNumber.length > 0 ? Math.min(...positiveNumber) : null;
}
const findMinPositiveNumber = () => {
  let minPositive = findMinimumPositive(arrayNumber);
  getElement(
    "#resultMinPositiveNumber"
  ).innerHTML = `<p>Số dương nhỏ nhất trong mảng: ${minPositive}</p>`;
};

// Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function findLastEven(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
  return -1;
}
const findLastEvenNumber = () => {
  let evenNumber = findLastEven(arrayNumber);
  if (evenNumber % 2 === 0) {
    getElement(
      "#resultLastEvenNumber"
    ).innerHTML = `<p>Số chẵn cuối cùng trong mảng:${evenNumber}</p>`;
  } else {
    getElement(
      "#resultLastEvenNumber"
    ).innerHTML = `<p>không có Số chẵn cuối cùng trong mảng:${evenNumber}</p>`;
  }
};

// Đổi chỗ 2 giá trị trong mảng theo vị trí
function swapValue(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

const findSwapNumber = () => {
  let swap1 = +getElement("#viTri1").value;
  let swap2 = +getElement("#viTri2").value;
  let swapNumber = swapValue(arrayNumber, swap1, swap2);
  getElement(
    "#resultSwapNumber"
  ).innerHTML = `<p>mảng đã thay đổi: [${swapNumber}]</p>`;
};

// Sắp xếp mảng theo thứ tự tăng dần
function sortArrayNumber(arr) {
  return arr.sort((a, b) => a - b);
}
const sortNumber = () => {
  let sort = sortArrayNumber(arrayNumber);
  getElement(
    "#resultsortNumber"
  ).innerHTML = `<p>mảng đã thay đổi: [${sort}]</p>`;
};

// Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
function prime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findFirstPrime(arr) {
  for (let num of arr) {
    if (prime(num)) {
      return num;
    }
  }
  return -1;
}

const findFirstPrimeNumber = () => {
  let firstPrime = findFirstPrime(arrayNumber);
  getElement("#resultFirstPrimeNumber").innerHTML = `${firstPrime}`;
};

// Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function countInteger(arr) {
  return arr.filter((num) => Number.isInteger(num)).length;
}
const findIntegerNumber = () => {
  let intergerNumber = countInteger(arrayNumber);
  getElement(
    "#resultIntegerNumber"
  ).innerHTML = `Số lượng số nguyên trong mảng: ${intergerNumber}`;
};

// So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function comparePosAndNega(arr) {
  let posCount = arr.filter((num) => num > 0).length;
  let negaCount = arr.filter((num) => num < 0).length;
  if (posCount > negaCount) {
    getElement(
      "#resultCompareNumber"
    ).innerHTML = `<p>Số lượng số dương nhiều hơn số lượng số âm.</p>`;
  } else if (negaCount > posCount) {
    getElement(
      "#resultCompareNumber"
    ).innerHTML = `<p>Số lượng số âm nhiều hơn số lượng số dương.</p>`;
  } else {
    getElement(
      "#resultCompareNumber"
    ).innerHTML = `<p>Số lượng số dương số lượng số âm bằng nhau.</p>`;
  }
}

const compareNumber = () => {
  let compareResult = comparePosAndNega(arrayNumber);
};
