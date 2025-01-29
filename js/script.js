// Ini File Javascript

// Fungsi button untuk mengecek BMI
function checkBMI() {
    // Ambil nilai berat badan, tinggi badan, jenis kelamin, dan usia dari form
    const beratBadan = parseFloat(document.getElementById('input-berat-badan').value);
    const tinggiBadan = parseFloat(document.getElementById('input-tinggi-badan').value);
    const gender = document.querySelector('input[name="input-gender"]:checked').value;
    const usia = parseFloat(document.getElementById('input-usia').value);

    // Rumus hitung BMI
    const bmi = beratBadan / ((tinggiBadan/100)**2);

    // Definisikan variabel untuk kategori BMI, range BMI, deskripsi BMI, dan risiko penyakit
    let bmiCategory = '';
    let bmiCategory1 = '';
    let rangeCategory = '';
    let descCategory = '';
    let diseaseDesc = '';
    let diseaseCategory = '';

    // Validasi input berat badan, tinggi badan, dan usia
    if (isNaN(bmi) || isNaN(usia)) {
        alert('Silahkan masukkan berat badan, tinggi badan, dan usia yang valid');
        return;
    } else if (beratBadan <= 0 || tinggiBadan <= 0 || usia <= 0) {
        alert('Berat badan, tinggi badan, dan usia tidak boleh 0 atau negatif');
        return;
    } else if (beratBadan > 300 || tinggiBadan > 300 || usia > 150) {
        alert('Berat badan, tinggi badan, dan usia tidak boleh lebih dari batas yang ditentukan');
        return;
    } else if (beratBadan > 0 && tinggiBadan > 0 && usia > 0) {
        
        // Menentukan kategori BMI berdasarkan nilai BMI yang sudah dihitung
    if (bmi < 18.5) {
        bmiCategory = 'Kurus';
        bmiCategory1 = 'Berat badan kurang';
        rangeCategory = 'Hasil BMI < 18.5';
        descCategory = 'Anda berada dalam kategori kurus atau berat badan kurang. Cara terbaik untuk menaikkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.';
        diseaseDesc = 'Beberapa penyakit yang berasal dari berat badan kurang antara lain:<br><br>';
        diseaseCategory = '<ul>Osteoporosis</ul><ul>Menstruasi tidak teratur</ul><ul>Menurunnya sistem kekebalan tubuh</ul><ul>Menurunnya massa otot</ul>';

    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal';
        bmiCategory1 = 'Berat badan normal';
        rangeCategory = 'Hasil BMI diantara 18.5 dan 24.9';
        descCategory = 'Anda berada dalam kategori normal atau berat badan ideal. Cara terbaik untuk menjaga berat badan adalah dengan mengatur pola makan dan berolahraga secara teratur.';
        diseaseDesc = 'Beberapa keuntungan yang berasal dari berat badan normal antara lain:<br><br>';
        diseaseCategory = '<ul>Resiko penyakit jantung menurun</ul><ul>Resiko diabetes menurun</ul><ul>Resiko stroke menurun</ul><ul>Resiko kanker menurun</ul>';

    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Kegemukan';
        bmiCategory1 = 'Berat badan berlebih';
        rangeCategory = 'Hasil BMI diantara 25 dan 29.9';
        descCategory = 'Anda berada dalam kategori Kegemukan atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
        diseaseDesc = 'Beberapa penyakit yang berasal dari kegemukan antara lain:<br><br>';
        diseaseCategory = '<ul>Diabetes</ul><ul>Hipertensi</ul><ul>Sakit Jantung</ul><ul>Osteoarthritis</ul>';

    } else {
        bmiCategory = 'Obesitas';
        bmiCategory1 = 'Berat badan obesitas';
        rangeCategory = 'Hasil BMI > 30';
        descCategory = 'Anda berada dalam kategori obesitas atau berat badan sangat berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga rutin.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal.';
        diseaseDesc = 'Beberapa penyakit yang berasal dari obesitas antara lain:<br><br>';
        diseaseCategory = '<ul>Diabetes Tipe 2</ul><ul>Penyakit Jantung</ul><ul>Stroke</ul><ul>Kanker</ul><ul>Depresi</ul><ul>Apnea tidur</ul><ul>Arthritis</ul>';
    }}

    // Untuk menampilkan hasil BMI, status, saran, dan risiko penyakit
    document.getElementById('result-bmi').textContent = bmi.toFixed(1);
    document.getElementById('bmi-category1').textContent = bmiCategory1;
    document.getElementById('bmi-category2').textContent = `Anda ${gender} usia ${usia} tahun yang memiliki berat badan ${bmiCategory}`;
    document.getElementById('range').textContent = rangeCategory;
    document.getElementById('desc').innerHTML = descCategory;
    document.getElementById('disease1').innerHTML = diseaseDesc;
    document.getElementById('disease2').innerHTML = diseaseCategory;
}

// Fungsi button untuk mereset form
function resetForm() {
    document.getElementById('input-berat-badan').value = '';
    document.getElementById('input-tinggi-badan').value = '';
    document.getElementById('input-usia').value = '';
    document.getElementById('result-bmi').textContent = '0';
    document.getElementById('bmi-category1').textContent = 'Berat Badan';
    document.getElementById('bmi-category2').textContent = '';
    document.getElementById('range').textContent = '';
    document.getElementById('desc').textContent = '';
    document.getElementById('disease1').innerHTML = 'Jaga pola makan dan kesehatan tubuh Anda. Untuk mencegah penyakit, Anda bisa melakukan beberapa hal berikut:<br><br>';
    document.getElementById('disease2').textContent = 'olahraga teratur, makan makanan bergizi, dan tidur yang cukup';
}