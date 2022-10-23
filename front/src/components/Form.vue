<template>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md"
    >
    <q-input
      filled
      v-model="yourName"
      label="名前"
      stack-label :dense="dense"
    ></q-input>

    <q-input
      filled
      v-model="email"
      label="メールアドレス"
      stack-label :dense="dense"
    ></q-input>

    <q-input
      filled
      v-model="message"
      label="内容"
      stack-label :dense="dense"
    ></q-input>
    <div>
      <q-btn label="Submit" type="submit" color="primary"></q-btn>
    </div>
  </q-form>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'Form',

  setup() {
    const dense = ref(false)
    const yourName = ref('山田')
    const email = ref('test@example.com')
    const message = ref('テストメール')
    const onSubmit = async () => {
      try {
        const formData = new FormData()
        formData.set('yourName', yourName.value)
        formData.set('email', email.value)
        formData.set('message', message.value)
        const {data} = await axios.post('wp-json/contact-form-7/v1/contact-forms/9/feedback', formData)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }

    return {
      yourName,
      message,
      email,
      dense,
      onSubmit
    }
  }
}

</script>