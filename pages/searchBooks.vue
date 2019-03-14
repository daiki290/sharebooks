<template>
  <div class="container">
    <template v-if="!$store.state.noAccount">
     <div>
      <v-app>
      <v-form>
      <v-container>
        <p>書籍検索するためにISBNコード(ハイフンなし)を入力してください。</p>
        <button @click="signOut">ログアウトする。</button>
        <p>Info:{{$store.state.userEmail}}</p>
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field
              v-model="isbnCode"
              :counter="13"
              label="ISBNコード"
              required
            ></v-text-field>
            <v-btn depressed small color="primary" @click="searchFromISBN()">検索</v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <bookCard v-if="searchFlag" :book="book" />
        </v-layout>
      </v-container>
      </v-form>
      </v-app>
     </div>
    </template>
    <template v-else>
      <div>
        <p>ログインをまだしていません！</p>
        <p>{{$store.state.userEmail}}</p>
        <button @click="signIn">Google アカウントでログイン</button>
      </div>
    </template>
  </div>
</template>
<script>
  import bookapi from '@/api/searchBooks';
  import axios from 'axios';
  import bookCard from '~/components/bookCard';

  export default {
    data(){
      return {
        book : { title : '', author : '', isbn : '', imgurl : '',pubdate :'', price: ''},
        isbnCode : '',
        searchFlag : false
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('googleAuthStateChanged');
    },
    components : {
      bookCard
    },
    methods: {
      async searchFromISBN(){
        let data= await axios.get('https://api.openbd.jp/v1/get?isbn='+this.isbnCode).then(json => {
            return json.data[0];
          })
        .catch(e => ({ error: e }));
        this.book.title = data.summary.title;
        this.book.author = data.summary.author;
        this.book.isbn = data.summary.isbn;
        this.book.pubdate = data.summary.pubdate;
        this.book.imgurl = data.summary.cover;
        this.book.price = data.summary.PriceAmount;
        this.searchFlag = true;
      },
      signIn () {
        this.$store.dispatch('googleSignIn')
      },
      signOut () {
        this.$store.dispatch('googleSignOut')
      }
    }
  }
</script>
