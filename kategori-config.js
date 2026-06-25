/**
 * ============================================================================
 *  ⚠️  AMARAN PENYELARASAN (MUST-HAVE) — BACA SEBELUM EDIT DATA KELAS BERAT
 *  ────────────────────────────────────────────────────────────────────────
 *  Data KATEGORI di bawah WAJIB SAMA dengan salinan dalam `Code.gs` (backend).
 *  Jika anda tukar mana-mana kelas berat / julat umur DI SINI, anda MESTI
 *  buat perubahan yang SAMA dalam `Code.gs` → const KATEGORI, kemudian
 *  DEPLOY SEMULA Web App. Jika tidak, frontend & server akan tidak segerak
 *  (pesilat boleh nampak satu kelas, tetapi server simpan kelas berbeza).
 *  ============================================================================
 */

/**
 * ============================================================================
 *  KEJOHANAN SILAT MADANI KUALA LANGAT TERTUTUP 2026
 *  Data Model — Matrix Kategori & Kelas Berat  (SUMBER KEBENARAN TUNGGAL)
 * ----------------------------------------------------------------------------
 *  Fail ini dimuat oleh borang-pendaftaran.html melalui:
 *      <script src="kategori-config.js"></script>
 *  Pastikan kedua-dua fail berada dalam folder/repo yang SAMA.
 *
 *  KONVENSYEN BERAT:
 *    - Kelas dipadan jika:  min <= berat < max
 *    - Kelas dengan cap:true  → max adalah INKLUSIF (kelas teratas)
 *
 *  DATA QUIRKS (disahkan organizer — kekal seperti handout):
 *    - Remaja gap 74-80 | Pra Remaja 53-58 | Dini 42-50 | Pra Dini 34-40
 *    - Tunas relabel: A-(<16), A, B, C, D  | Tunas & Pra Tunas tiada Bebas
 *
 *  NOTA: Backend Google Apps Script (Code.gs) menyimpan SALINAN data ini
 *        secara berasingan untuk validasi sisi-pelayan (sengaja, demi keselamatan).
 * ============================================================================
 */

// ⚠️ MIRROR: sebarang perubahan di sini WAJIB disalin ke Code.gs (backend).
const KATEGORI = [
  { id:"terbuka",   nama:"Terbuka",    umurMin:17, umurMax:21, pusingan:3, yuran:65, kelas:[
    {kod:"U45",label:"U45 (<45 Kg)",min:0,max:45},{kod:"A",label:"A (45-50 Kg)",min:45,max:50},
    {kod:"B",label:"B (50-55 Kg)",min:50,max:55},{kod:"C",label:"C (55-60 Kg)",min:55,max:60},
    {kod:"D",label:"D (60-65 Kg)",min:60,max:65},{kod:"E",label:"E (65-70 Kg)",min:65,max:70},
    {kod:"F",label:"F (70-75 Kg)",min:70,max:75},{kod:"G",label:"G (75-80 Kg)",min:75,max:80},
    {kod:"BEBAS",label:"Bebas (80-90 Kg)",min:80,max:90,cap:true} ]},
  { id:"remaja",    nama:"Remaja",     umurMin:15, umurMax:16, pusingan:3, yuran:65, kelas:[
    {kod:"U39",label:"U39 (<39 Kg)",min:0,max:39},{kod:"A",label:"A (39-44 Kg)",min:39,max:44},
    {kod:"B",label:"B (44-49 Kg)",min:44,max:49},{kod:"C",label:"C (49-54 Kg)",min:49,max:54},
    {kod:"D",label:"D (54-59 Kg)",min:54,max:59},{kod:"E",label:"E (59-64 Kg)",min:59,max:64},
    {kod:"F",label:"F (64-69 Kg)",min:64,max:69},{kod:"G",label:"G (69-74 Kg)",min:69,max:74},
    {kod:"BEBAS",label:"Bebas (80-90 Kg)",min:80,max:90,cap:true} ]},
  { id:"praremaja", nama:"Pra Remaja", umurMin:13, umurMax:14, pusingan:3, yuran:65, kelas:[
    {kod:"A",label:"A (30-33 Kg)",min:30,max:33},{kod:"B",label:"B (33-36 Kg)",min:33,max:36},
    {kod:"C",label:"C (36-39 Kg)",min:36,max:39},{kod:"D",label:"D (39-43 Kg)",min:39,max:43},
    {kod:"E",label:"E (43-46 Kg)",min:43,max:46},{kod:"F",label:"F (46-49 Kg)",min:46,max:49},
    {kod:"G",label:"G (49-53 Kg)",min:49,max:53},{kod:"BEBAS",label:"Bebas (58-65 Kg)",min:58,max:65,cap:true} ]},
  { id:"dini",      nama:"Dini",       umurMin:11, umurMax:12, pusingan:2, yuran:65, kelas:[
    {kod:"A",label:"A (28-30 Kg)",min:28,max:30},{kod:"B",label:"B (30-32 Kg)",min:30,max:32},
    {kod:"C",label:"C (32-34 Kg)",min:32,max:34},{kod:"D",label:"D (34-36 Kg)",min:34,max:36},
    {kod:"E",label:"E (36-38 Kg)",min:36,max:38},{kod:"F",label:"F (38-40 Kg)",min:38,max:40},
    {kod:"G",label:"G (40-42 Kg)",min:40,max:42},{kod:"BEBAS",label:"Bebas (50-55 Kg)",min:50,max:55,cap:true} ]},
  { id:"pradini",   nama:"Pra Dini",   umurMin:9,  umurMax:10, pusingan:2, yuran:65, kelas:[
    {kod:"A",label:"A (20-22 Kg)",min:20,max:22},{kod:"B",label:"B (22-24 Kg)",min:22,max:24},
    {kod:"C",label:"C (24-26 Kg)",min:24,max:26},{kod:"D",label:"D (26-28 Kg)",min:26,max:28},
    {kod:"E",label:"E (28-30 Kg)",min:28,max:30},{kod:"F",label:"F (30-32 Kg)",min:30,max:32},
    {kod:"G",label:"G (32-34 Kg)",min:32,max:34},{kod:"BEBAS",label:"Bebas (40-45 Kg)",min:40,max:45,cap:true} ]},
  { id:"tunas",     nama:"Tunas",      umurMin:7,  umurMax:8,  pusingan:2, yuran:65, kelas:[
    {kod:"A-",label:"A- (<16 Kg)",min:0,max:16},{kod:"A",label:"A (17-19 Kg)",min:17,max:19},
    {kod:"B",label:"B (20-22 Kg)",min:20,max:22},{kod:"C",label:"C (23-25 Kg)",min:23,max:25},
    {kod:"D",label:"D (26-28 Kg)",min:26,max:28,cap:true} ]},
  { id:"pratunas",  nama:"Pra Tunas",  umurMin:5,  umurMax:6,  pusingan:2, yuran:65, kelas:[
    {kod:"A",label:"A (12-14 Kg)",min:12,max:14},{kod:"B",label:"B (15-17 Kg)",min:15,max:17},
    {kod:"C",label:"C (18-20 Kg)",min:18,max:20},{kod:"D",label:"D (21-23 Kg)",min:21,max:23,cap:true} ]},
];

const JANTINA = [
  { id:"putra", label:"Putra" },
  { id:"putri", label:"Putri" },
];

/* Cari kategori ikut id. */
function getKategori(id){
  return KATEGORI.find(k => k.id === id) || null;
}

/* Cari kategori ikut umur (ikut tahun lahir). */
function cariKategori(umur){
  return KATEGORI.find(k => umur >= k.umurMin && umur <= k.umurMax) || null;
}

/* Tentukan kelas berat dalam sesuatu kategori. Pulang objek kelas atau null. */
function resolveKelas(kat, berat){
  if (!kat) return null;
  return kat.kelas.find(kl => berat >= kl.min && (kl.cap ? berat <= kl.max : berat < kl.max)) || null;
}

/* Sokongan Node (rujukan/ujian sahaja) — diabaikan dalam pelayar. */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { KATEGORI, JANTINA, getKategori, cariKategori, resolveKelas };
}
