/**
 * TODO:
 * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
 *  - firstName: bertipe data string, dengan nilai nama depan Anda.
 *  - lastName: bertipe data string, dengan nilai nama belakang Anda.
 *  - age: bertipe data number, dengan nilai umur Anda.
 *  - isMarried: bertipe data boolean, dengan bebas Anda tentukan.
 */

let firstName = "Muhaemin";
let lastName = "Iskandar";
let age = 25;
let isMarried = false;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMarried);

/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika nilai score lebih atau sama dengan 90
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika nilai score ada di antara 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika nilai score ada di antara 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika nilai score ada di antara 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika nilai score di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

function scoreChecker(score) {
  let result;

  // TODO
  if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";
  } else if (score >= 79 && score <= 90) {
    result = "Anda mendapatkan nilai B.";
  } else if (score >= 70) {
    result = "Anda mendapatkan nilai C.";
  } else if (score >= 60) {
    result = "Anda mendapatkan nilai D.";
  } else {
    result = "Anda mendapatkan nilai E.";
  }

  // Jangan hapus kode ini
  return result;
}
console.log(scoreChecker(80));
console.log(scoreChecker(50));
console.log(scoreChecker(60));
console.log(scoreChecker(90));
/**
 * Hiraukan kode di bawah ini
 */
module.exports = scoreChecker;
