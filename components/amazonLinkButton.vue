<template>
  <div>
      <v-btn text color="orange" @click="linkAmazon()">Amazonで購入する</v-btn>
  </div>
</template>
<script>
  export default {
    props: {
      isbn : String,
    },
    methods : {
      linkAmazon(){
        let base_url = "http://www.amazon.co.jp/dp/";
        if(this.isbn.length == 13){
          this.convertISBN();
          window.open(base_url + this.isbn, '_blank');
        }else if(this.isbn.length == 10){
          window.open(base_url + this.isbn, '_blank');
        }
      },
      convertISBN(){
        // ISBN13をISBN10に変換するメソッド
        var id = this.isbn.slice(3,-1);
        var a;
        a = 0;
        for (var i = 0; i < 9; i = i + 1) {
          a += Number(id.charAt(i))* (10-i);
        }
        console.log(a + id);
        a = a%11;
        console.log(a);
        a = 11 - a ;
        console.log(a);
        if(a == 11){
          this.isbn = id + '0';
        }else if (a == 10 ){
          this.isbn = id + 'X'
        }else{
          this.isbn = id + a;
        }
        console.log(this.isbn);
      }
    }
  }
</script>
