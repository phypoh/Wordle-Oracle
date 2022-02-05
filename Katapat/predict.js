// Link: https://www.projecteugene.com/katapat.html


var wordlist = ["ketul", "masih", "moral", "tapir", "cinta", "bukan", "karya", "mirip", "didih", "siswa", "wujud", "beruk", "bakul", "wayar", "huruf", "suami", "tukul", "telan", "wajah", "bunyi", "marah", "tugas", "labah", "lapor", "harap", "belum", "ngeri", "jahit", "versi", "ulang", "rumah", "kakak", "bubur", "usaha", "lesen", "rokok", "kalah", "kacau", "flora", "dapur", "balai", "puluh", "pedas", "askar", "kelas", "lahir", "tikar", "bisik", "teguh", "bayar", "helai", "panas", "ujian", "kotor", "sesak", "tahap", "susun", "sulit", "digit", "semut", "tidur", "tanya", "masuk", "silat", "tanda", "cabut", "susah", "hasil", "salah", "lawak", "kuali", "pecah", "teori", "timah", "bayam", "cuaca", "cawan", "idola", "benda", "balut", "skala", "gosok", "jalur", "siang", "kecil", "encik", "amaun", "biasa", "media", "angsa", "mesra", "sains", "butir", "mewah", "terus", "kanak", "sifat", "dadah", "latih", "mobil", "masak", "virus", "turun", "tuduh", "gatal", "bebas", "tebal", "gemuk", "lawan", "sabun", "mikro", "tarik", "rotan", "licin", "hilir", "nanti", "dalam", "catur", "botol", "kulit", "dunia", "dekat", "sudah", "timur", "kaset", "jatuh", "rindu", "nipis", "juara", "pokok", "bodoh", "pamer", "nanas", "garis", "aktor", "bidak", "sopan", "ruang", "bantu", "tepuk", "pasar", "ceria", "asing", "belia", "diari", "gelas", "kuasa", "putih", "lekat", "indah", "habuk", "layak", "semua", "elaun", "harga", "fauna", "ambil", "gelap", "mudah", "novel", "jujur", "drama", "wakil", "suara", "berus", "lihat", "palsu", "walau", "jerit", "papan", "kimia", "haram", "manja", "tawar", "gurun", "jenis", "beban", "cipta", "depan", "acara", "balas", "murah", "ketua", "pergi", "tolak", "kolam", "celak", "gerai", "nilai", "udang", "demam", "pekan", "puisi", "roket", "buaya", "sunyi", "mandi", "pesta", "cakap", "kalau", "sedar", "deria", "penuh", "tuala", "akaun", "pasti", "bogel", "cukup", "budak", "syair", "duduk", "tanam", "belon", "teman", "boleh", "vakum", "halau", "artis", "pisau", "masam", "besar", "utama", "kacak", "janji", "ragbi", "tutup", "kunci", "lirik", "mulut", "rekod", "siapa", "optik", "lepas", "lebih", "derma", "logam", "donat", "lidah", "milik", "bonet", "lipan", "fakta", "serta", "tiket", "garam", "pilih", "minat", "jawab", "ulser", "arena", "puasa", "babun", "murid", "tanah", "nikel", "impak", "tutur", "pohon", "tekan", "hadir", "zaman", "warga", "arkib", "nyawa", "pelan", "nenek", "hujan", "pisah", "minta", "cetek", "basuh", "amali", "folio", "mitos", "surat", "ingin", "manis", "calon", "macam", "harus", "ketam", "waris", "tokoh", "objek", "bilik", "musim", "aktif", "comel", "kedai", "tepat", "bajet", "aroma", "pihak", "gagak", "hijau", "benar", "racun", "barat", "habis", "untuk", "bambu", "benam", "punya", "rumit", "mohon", "wabak", "judul", "kasih", "meter", "besok", "betik", "tikus", "kenal", "tajam", "sedia", "tulis", "belok", "ganti", "udara", "nafas", "kasar", "kanan", "rebus", "tukar", "tentu", "biola", "batuk", "megah", "jumpa", "buang", "modem", "zakar", "jelas", "turut", "layan", "bekal", "katil", "topik", "gerak", "tujuh", "bibir", "telur", "halal", "hidup", "bebal", "basah", "darat", "minit", "kilat", "lipat", "wangi", "logik", "gadis", "bosan", "enjin", "dusun", "pulau", "rajin", "pintu", "gigit", "setia", "jalan", "zarah", "keris", "sihir", "kolej", "hanya", "empat", "tupai", "bukti", "tegap", "buruk", "bulat", "skema", "fosil", "teruk", "hantu", "dungu", "zalim", "cekik", "tidak", "lapan", "gitar", "sayur", "upaya", "makan", "sibuk", "iklan", "katak", "bomoh", "kerja", "taman", "jimat", "utara", "nasib", "getah", "tusuk", "cacat", "belah", "bikin", "patah", "cabar", "arang", "senam", "pasif", "belut", "titik", "cetak", "suatu", "tetap", "bulan", "perlu", "barah", "vokal", "benci", "kebun", "ombak", "timun", "audio", "lulus", "dapat", "emosi", "video", "waras", "tunai", "lebah", "balun", "siput", "pukul", "pusat", "lazat", "tamak", "cicak", "koyak", "lukis", "henti", "berat", "bukit", "garpu", "jaket", "dewan", "busuk", "tuhan", "bawah", "angin", "gajah", "embun", "bijih", "betul", "telah", "tegar", "sedih", "jahat", "tahan", "bunga", "jambu", "gurau", "piala", "ajaib", "singa", "capal", "merah", "tanpa", "malam", "lemak", "ketuk", "sedap", "datuk", "denda", "bazir", "abang", "hutan", "ratus", "darah", "wajib", "sinar", "tahun", "makna", "losen", "hebat", "bekas", "warna", "segar", "takut", "barli", "cepat", "hitam", "arnab", "kelab", "kirim", "waktu", "tegak", "agama", "buruj", "kasut", "bunuh", "casis"]

// Na()
function getDateDifference(e, a) {
  var s = new Date(e)
  , t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.floor(t / 864e5)
}

// Ha
var baseDate = new Date(2021,12,22,0,0,0,0);

// Ga()
function callGetDateDifference(todaysDate) {
  return getDateDifference(baseDate, todaysDate)
}

// Da()
function getWordOfTheDay(today) {
  var a, s = callGetDateDifference(today);
  return a = s % wordlist.length,
    wordlist[a]
}
// e.today
var today = new Date();
today.setDate(today.getDate()+1)
console.log(getWordOfTheDay(today))
