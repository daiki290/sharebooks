<template>
   <div>
    <v-layout>
     <v-flex xs12 sm6 offset-sm6>
       <v-card>
         <v-img
           class="bookCard"
           :src="book.imgurl"
           aspect-ratio="1"
         ></v-img>

         <v-card-title primary-title>
           <div>
             <h3 class="headline mb-0">{{book.title}}</h3>
             <div>{{card_text}}</div>
           </div>
         </v-card-title>

         <v-card-actions>
           <amazonButton :isbn="book.isbn" />
           <v-btn text color="orange">Explore</v-btn>
         </v-card-actions>
       </v-card>
     </v-flex>
    </v-layout>
   </div>
</template>
<script>
import amazonButton from '~/components/amazonLinkButton'
  export default {
    props : {
      book : { title : '', author : '', isbn : '', imgurl : '',pubdate :''}
    },
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    },
    components :{
      amazonButton
    }
  }
</script>
<style>
  .bookCard{
    object-fit: contain;
    height : 100%;
  }
</style>
