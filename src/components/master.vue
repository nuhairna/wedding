<template>
    <div class="undangan-wrapper">
        <div class="cover">
            <div class="banner-akanikah">
              <!-- <center class="_18reg">Kepada: {{undangan}}</center> -->
                <!-- <img src="https://akanikah.com/front/tema-preview/classic-1/images/logo_akanikah.png" loading="lazy"
                    width="110" alt=""> -->
            </div>
            <div class="wrapper-cover">
                <img src="../assets/images/dashboard1.png" loading="lazy" alt=""
                    class="image-cover">
                <!-- <img src="https://akanikah.com/front/tema-preview/classic-1/images/galeri7.jpg" loading="lazy" alt=""
                    class="image-cover"> -->
            </div>
        </div>

        <div class="opening">
            <div class="nama-pasangan">
                <div class="_16dark bottom20">Undangan Pernikahan</div>
                <div class="_16dark bottom20 tgl">11- 12 -2021</div>
                <div class="detail">
                    <div class="nama top10">Irna Roudlotul Choiroh</div>
                </div>
                <center class="_16dark"><i>Putri Bapak <b>Besut Hariyanto (Alm)</b> & <br> <b>Ibu Nur Achmi</b></i></center>
                <div class="nama">&amp;</div>
                <div class="detail">
                    <div class="nama bottom10">Muhammad Ulin Nuha</div>
                </div>
                <center class="_16dark"><i>Putra Bapak <b>Mathori</b> & <br>Ibu <b>Umi Abidah</b></i></center>
            </div>
        </div>
        <div class="undangan">
            <div class="_18reg">Assalamualaikum Warahmatullahi Wabarakatuh</div>
            <div class="_16dark top20 bottom20">Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
                Bapak/Ibu/Saudara/i untuk menghadiri pernikahan Putra-Putri kami yang insya Allah akan dilaksanakan pada
                :</div>
            <div class="akad">
                <div class="title">AKAD NIKAH</div>
                <div class="detail">
                    <div class="wrapper_datetime with_border">
                        <div class="waktutgl">
                            <div class="harinya">Sabtu</div>
                            <div class="tanggalnya">11 Desember 2021</div>
                        </div>
                        <i class="fa fa-calendar fa-2x" style="color:black"></i> &nbsp;
                    </div>
                    <div class="wrapper_datetime"> 
                        &nbsp;<i class="fa fa-clock fa-2x" style="color:black"></i>
                        <div class="waktutgl">
                            <div class="harinya">08:00 WIB</div>
                            <div class="tanggalnya">Sampai selesai</div>
                        </div>
                    </div>
                </div>
                <div class="_16dark top20 notop">Jl.Undar RT/RW 09/02 Ds.Menganto Mojowarno Jombang <br>(Utara musolla Baitussalam)</div>
            </div>
            <div class="akad top40">
                <div class="title">resepsi</div>
                <div class="detail">
                    <div class="wrapper_datetime with_border">
                        <div class="waktutgl">
                            <div class="harinya">Sabtu</div>
                            <div class="tanggalnya">11 Desember 2021</div>
                        </div>
                        <i class="fa fa-calendar fa-2x" style="color:black"></i> &nbsp;
                    </div>
                    <div class="wrapper_datetime"> 
                        &nbsp;<i class="fa fa-clock fa-2x" style="color:black"></i>
                        <div class="waktutgl">
                            <div class="harinya">Rilex</div>
                            <div class="tanggalnya">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        </div>
                    </div>
                </div>
                <div class="_16dark top20 notop">Jl.Undar RT/RW 09/02 Ds.Menganto Mojowarno Jombang <br>(Utara musolla Baitussalam)</div>
            </div>
        </div>
        <div class="himbauan">
            <div class="himbauan-text">Dimohon untuk para tamu undangan agar tetap mematuhi protokol kesehatan yang
                berlaku.</div>
        </div>
        <div class="peta">
            <div class="title">Peta Lokasi</div>
            <div class="petanya">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.7251668449885!2d112.29656831477688!3d-7.604857994516333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zN8KwMzYnMTcuNSJTIDExMsKwMTcnNTUuNSJF!5e0!3m2!1sen!2sid!4v1635672842515!5m2!1sen!2sid" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" width="100%" height="300"></iframe>
            </div>
        </div>
        <div class="comment">
            <h3 class="h3 m24 ldark">BERIKAN UCAPAN</h3>
            <div class="wrapper-ucapan">
                <div class="form-block w-form">
                    <!-- <form id="email-form" name="email-form" data-name="Email Form" class="form-ucapan"> -->
                        <label for="name" class="label">Nama</label>
                        <input type="text" class="text-field-2 w-input" maxlength="256" name="name" data-name="Name"
                            placeholder="Masukkan nama kamu" id="name" required=""
                            v-model="name"
                            @keyUp.enter.prevent="addItem">
                        <label for="ucapan" class="label">Masukkan ucapanmu</label>
                        <textarea name="pesan" placeholder="Berikan ucapan terbaikmu untuk calon mempelai" id=""
                            cols="30" rows="" class="text-field-2 w-input"
                            v-model="ucapan"
                            @keyUp.enter.prevent="addItem"></textarea>
                        <input type="submit" value="Kirim Ucapan" data-wait="Please wait..."
                            class="submit-button w-button" @click.prevent="addItem">
                    <!-- </form> -->
                    <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
            <div class="wrapper-comment">
                <div class="item-comment" 
                  v-for="data in datas"
                  :key="data.id">
                    <div class="comentator">@{{ data.name }}</div>
                    <p class="p-comment">{{ data.ucapan }}</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-text top20">
                Terima Kasih Untuk Semuanya 
            </div>
        </div>
        <audio controls id="myVideo" autoplay loop  hidden>

            <source src="../assets/audio/you_are_the_one.mp3" type="audio/wav">
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
let uri = window.location.search.substring(1); 
let params = new URLSearchParams(uri);
import { db } from "../firebase/db";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return  {
      undangan: params.get("undangan"),
      datas: [],
      name: '',
      ucapan:'',
    }
  },
  methods: {
      deleteToDo(id) {
      db.collection("testing")
          .doc(id)
          .delete();
      },
      async addItem() {

          console.log(this.name);
          if (this.name && this.ucapan) {
              await db.collection("testing").add({ name: this.name, ucapan:this.ucapan });
              this.name = "";
              this.ucapan = "";
          }
      },
  },
  firestore: {
      datas: db.collection("testing")
  }
}
</script>