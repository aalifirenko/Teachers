<!-- =========================================================================================
  File Name: Profile.vue
  Description: Profile Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="profile-page">
        <!-- VERTICAL LAYOUT -->
        <div class="vx-row">
            <div class="vx-col md:w-1/2 mb-base">
                <vx-card>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" placeholder="Name" v-model="form.name" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" placeholder="Location (city, state, country)" v-model="form.location" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full is-label-placeholder" id="profile-password" icon-pack="feather"  icon="icon-eye" type="password" placeholder="Password" v-model="form.password" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-textarea rows="10" placeholder="About me" v-model="form.about" />
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vs-button class="mr-3 mb-2" @click="formSubmit">Submit</vs-button>
                        </div>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col mb-base">
                <vx-card>
                    <h2>Upload</h2>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../http/axios/index'
export default {
  data () {
    return {
      form: {
          name: '',
          location: '',
          password: '',
          about: '',
      },
      isNavOpen: false,
    }
  },
  computed: {},
  methods: {
        formSubmit() {
            if (this.form.name.length > 0
                && this.form.location.length > 0
                && this.form.password.length > 0
                && this.form.about.length > 0
            ) {
                this.sendRequest();
            } else {

            }
        },
        sendRequest() {
            this.$http.post('/api/update-profile', {
                name: this.form.name,
                location: this.form.location,
                password: this.form.password,
                about: this.form.about,
            })
        },
        addPasswordLisnere() {
            const password = document.getElementById('profile-password');
            const icon = password.parentNode.getElementsByTagName('i')[0];
            if (icon) {
                icon.addEventListener('click', (e) => {
                    password.type = 'text';
                });
            }
        }
  },
  components: {},
  mounted () {
      this.addPasswordLisnere();
  },
}

</script>


<style lang="scss">
@import "@sass/vuexy/pages/profile.scss";
</style>
