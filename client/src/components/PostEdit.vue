<template>
  <form class="card" @submit.prevent="$emit('add')">   <!-- emit lets a parent listening handle the event -->
    <div class="card-content">
      <div class="content">
        <div class="field">
          <label class="label">Picture</label>
          <div class="control">
            <input
              class="input"
              type="url"
              placeholder="Enter a URL to a picture"
              v-model="post.src"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Alt</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Some alternate text for picture"
              v-model="post.alt"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Caption</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Some caption text"
              v-model="post.caption"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" v-model="post.isPublic" :value="true"/>
              Public
            </label>
            <label class="radio">
              <input type="radio" name="question" v-model="post.isPublic" :value="false"/>
              Private
            </label>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button class="button is-link card-footer-item" type="Submit">Submit</button>
      <button class="button is-link is-light card-footer-item" type="reset">Cancel</button>
    </footer>
  </form>
</template>

<script>
export default {
    props: {
        newPost: Object
    },
    data(){
        return {
            post: this.newPost
        }
    }
}
</script>

<style>
.card {
  margin-bottom: 10px;
}
</style>