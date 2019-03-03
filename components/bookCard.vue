<template>
  <div>
   <v-layout>
    <v-flex>
        <v-img
          class="bookCard ma-1"
          :src="book.imgurl"
          aspect-ratio="0.7"
          width="20%"
        />
        <div>
          <h3 class="headline mb-0">{{book.title}}</h3>
          <p>著者名: {{book.author}}</p>
          <p>価格: {{book.price}}</p>
          <p>発売日: {{book.pubdate}}</p>
        </div>
        <amazonButton :isbn="book.isbn" />
    </v-flex>
   </v-layout>
  </div>
</template>
<script>
import amazonButton from '~/components/amazonLinkButton'
  export default {
    props : {
      book : { title : '', author : '', isbn : '', imgurl : '',pubdate :'', price : ''}
    },
    components :{
      amazonButton
    }
  }
</script>
