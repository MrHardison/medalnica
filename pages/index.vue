<template>
  <div class="index">
    <section class="preview">
      <transition name="fade">
        <div
          v-if="preview"
          class="preview__hide"
          @click="preview = false" />
      </transition>
      <div class="container">
        <a
          class="logo"
          href="/">
          <img
            class="logo__image"
            src="logo.png"
            alt="logo">
        </a>
        <div class="content">
          <div class="preview__wrapper">
            <div
              :class="{hidden: preview}"
              class="preview__info">
              <h1 class="h1 h1_white">
                <p>Витрина</p>
                твоих
                <img
                  class="title-icon"
                  src="title-icon.svg"
                  alt="title-icon"> беговых достижений
                <img
                  class="title-after-icon"
                  src="title-after-icon.png"
                  alt="title-after-icon">
              </h1>
              <p class="subtitle subtitle_white">
                Принимай участие в разных забегах. Собирай результаты и медали в одном месте
              </p>
              <div class="preview__items">
                <div class="item">
                  <img src="star.svg" alt="star">
                  <div class="item__description"><p>Получай </p> беговые бейджи</div>
                </div>
                <div class="item">
                  <img src="clock.svg" alt="clock">
                  <div class="item__description"><p>Устанавливай </p> личные рекорды </div>
                </div>
                <div class="item">
                  <img src="cup.svg" alt="cup">
                  <div class="item__description"><p>Собирай </p> медали и кубки</div>
                </div>
              </div>
              <btn class="preview__demo btn_dark-shadow" v-scroll-to="'#subscribe'">Запросить демо-доступ</btn>
              <div class="preview__mouse"><img src="mouse.svg" alt="mouse"></div>
            </div>
            <div
              :class="{hidden: preview}"
              class="preview__image">
              <img
                :class="{open: preview}"
                class="image-animated"
                src="preview-desktop.png"
                alt="preview-big"
                @click="togglePreview">
              <div :class="{open: preview}" class="preview-sm-wrapper">
                <img
                  :class="{open: preview}"
                  class="image-animated-sm"
                    src="preview-sm.png"
                    alt="preview-sm"
                    @click="togglePreview">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="content">
          <div class="line line_top" />
          <div class="about__wrapper">
            <div class="item item_title">
              <h2 class="h2 h2_white">В нашей базе сотни российских <br>и международных забегов</h2>
            </div>
            <div class="item item_image">
              <div class="about__image"><img src="human.svg" alt="human"></div>
            </div>
            <div class="item item_description">
              <div class="description">
                <h5 class="title">Просто создать</h5>
                <p class="text">Все результаты добавляются автоматически</p>
              </div>
              <div class="description">
                <h5 class="title">Удобно управлять</h5>
                <p class="text">Сортируйте по группам и выделяйте лучшие результаты</p>
              </div>
              <div class="description">
                <h5 class="title">Легко поделиться</h5>
                <p class="text">Получаете персональную страничку с вашими результатами</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="subscribe">
      <div class="container">
        <div class="content">
          <div class="line line_subscribe" />
          <form
            :class="{subscribed: subscribed}"
            class="form"
            id="subscribe"
            @submit.prevent="sendData">
            <template v-if="!subscribed">
              <h2 class="form__title">Будь одним из первых!</h2>
              <div class="form__subtitle">Для запуска бета-тестирования осталось собрать {{ subscribersLeft }} заявок </div>
              <progressBar
                :current="currentSubscribers"
                :target="targetSubscribers"/>
              <div class="input-block">
                <vInput
                  :name="'name'"
                  :placeholder="'Имя'"
                  @update="name = $event" />
                <vInput
                  :name="'email'"
                  :placeholder="'Email'"
                  :errorText="'E-mail введен неверно!'"
                  @update="email = $event"
                  @error="error = $event" />
                <vInput
                  :name="'surname'"
                  :placeholder="'Фамилия'"
                  @update="surname = $event" />
                <vInput
                  :description="'Необходим для поиска результатов'"
                  :name="'year'"
                  :placeholder="'Год рождения (дд.мм.гг)'"
                  :errorText="'Год рождения введен неверно!'"
                  @update="year = $event"
                  @error="error = $event" />
              </div>
              <btn
                type="submit"
                class="btn_light-shadow"
                :class="{disabled: error}">Запросить демо-доступ</btn>
              <hr class="hr">
              <div class="form__description">Расскажи друзьям — поддержи проект</div>
              <div class="socials">
                <div
                  class="socials__item"
                    @click="shareFB">
                  <img src="social-facebook.svg" alt="fb">
                </div>
                <div
                  class="socials__item"
                  @click="shareVK">
                  <img src="social-vk.svg" alt="vk">
                </div>
              </div>
            </template>
            <template v-else-if="subscribed">
              <h2 class="form__title">Спасибо!</h2>
              <div class="form__subtitle">Мы сообщим вам о начале <br>бета-тестирования</div>
            </template>
          </form>
        </div>
      </div>
    </section>
    <div class="subscribers">{{ subscribersLeft }}</div>
    <div class="copy">© 2019 «Медальница»</div>
    <script type="text/javascript">
      !function(){const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?162",t.onload=function(){VK.Retargeting.Init("VK-RTRG-389454-48afS"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
    </script>
    <noscript>
      <img src="https://vk.com/rtrg?p=VK-RTRG-389454-48afS" style="position:fixed; left:-999px;"/>
    </noscript>
  </div>
</template>

<script>

import btn from '~/components/btn'
import vInput from '~/components/vInput'
import progressBar from '~/components/progressBar'
const contentful = require('contentful-management')
const chalk = require('chalk')
const SPACE_ID = 'bkd7o9g76153'
const ACCESS_TOKEN = 'CFPAT-hTwIZYqXRO3sH0fHjspq-BNG7EFaYXpcNPNLRUmaLc4'
const CONTENT_TYPE_ID = 'betaTesters'
const client = contentful.createClient({
  accessToken: ACCESS_TOKEN
})

export default {
  components: { btn, vInput, progressBar },
  data() {
    return {
      error: false,
      subscribed: false,
      targetSubscribers: 1000,
      currentSubscribers: 0,
      subscribersLeft: 0,
      name: '',
      email: '',
      surname: '',
      year: '',
      preview: false,
      loading: false,
      shareImage: 'https://mymedals.ru/share.png'
    }
  },
  mounted() {
    this.subscribed = localStorage.getItem('subscribed') ? true : false
    this.getTotalBetaTester()
  },
  methods: {
    togglePreview() {
      this.preview = !this.preview
    },
    sendData() {
      if (!this.error && !this.loading) {
        this.loading = true
        this.createEntryBetaTester()
          .then(this.getTotalBetaTester())
          .then(() => {
            this.subscribed = true
            localStorage.setItem('subscribed', this.subscribed)
            this.loading = false
          })
          .catch(error => {
            console.log(chalk.red('\nError occurred:'))
            if (error.stack) {
              console.error(error.stack)
              return
            }
            console.error(error)
          })
      }
    },
    shareVK() {
      window.open(`https://vk.com/share.php?url=https://mymedals.ru&title=Витрина твоих беговых достижений. Принимай участие в разных забегах. Собирай результаты и медали в одном месте.&image=${this.shareImage}`, 'newwindow', 'width=300,height=250')
      return false
    },
    shareFB() {
      window.open('https://www.facebook.com/sharer/sharer.php?u=https://mymedals.ru',
        'facebook-share-dialog',
        'width=800,height=600'
      )
      return false
    },
    hidePreview() {
      this.preview = false
    },
    createEntryBetaTester() {
      return client.getSpace(SPACE_ID)
        .then(space => space.createEntry(CONTENT_TYPE_ID, {
        fields: {
          name: {
            'en-US': this.name
          },
          surname: {
            'en-US': this.surname
          },
          email: {
            'en-US': this.email
          },
          dateOfBirth: {
            'en-US': new Date(this.year)
          }
        }
      }))
      .then((entry) => entry.publish())
      .then((entry) => console.log(entry))
      .catch(console.error)
    },
    getTotalBetaTester () {
      return client.getSpace(SPACE_ID)
        .then(space => space.getEntries())
        .then(res => {
          this.currentSubscribers = res.total
          this.subscribersLeft = this.targetSubscribers - res.total
        })
        .catch(err => {
          return console.error
        })
    }
  }
}
</script>

<style lang="sass">
@import '../assets/styles/index.sass'
</style>
