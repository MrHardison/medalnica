<template>
  <div class="index">
    <section class="preview">
      <div class="container">
        <div class="logo">
          <img
            class="logo__image"
            src="logo.svg"
            alt="logo">
        </div>
        <div class="content">
          <div class="preview__wrapper">
            <div class="preview__info">
              <h1 class="h1 h1_white">
                <p>Витрина</p>
                твоих
                <img
                  class="title-icon"
                  src="title-icon.svg"
                  alt="title-icon"> беговых достижений
                <img
                  class="title-after-icon"
                  src="title-after-icon.svg"
                  alt="title-after-icon">
              </h1>
              <p class="subtitle subtitle_white">
                Принимай участие в разных забегах. Собирай результаты и медали в одном месте
              </p>
              <div class="preview__items">
                <div class="item">
                  <img src="star.svg" alt="star">
                  <div class="item__description"><p>Получай</p> беговые бейджи</div>
                </div>
                <div class="item">
                  <img src="clock.svg" alt="clock">
                  <div class="item__description"><p>Устанавливай</p> личные рекорды </div>
                </div>
                <div class="item">
                  <img src="cup.svg" alt="cup">
                  <div class="item__description"><p>Собирай</p> медали и кубки</div>
                </div>
              </div>
              <btn class="preview__demo" v-scroll-to="'#subscribe'">Запросить демо-доступ</btn>
            </div>
            <div class="preview__image">
              <img
                class="image"
                src="preview-big.png"
                alt="Preview">
            </div>
          </div>
          <div class="preview__mouse"><img src="mouse.svg" alt="mouse"></div>
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
          <form class="form" id="subscribe">
            <h2 class="form__title">Будь одним из первых!</h2>
            <div class="form__subtitle">Для запуска бета-тестирования осталось собрать 295 заявок </div>
            <div class="form__progress"></div>
            <div class="input-block">
              <vInput />
              <vInput />
              <vInput />
              <vInput />
            </div>
            <btn>Запросить демо-доступ</btn>
            <hr class="hr">
            <div class="form__description">Расскажи друзьям — поддержи проект</div>
            <div class="socials">
              <a class="socials__item" href="/"><img src="social-facebook.svg" alt="facebook"></a>
              <a class="socials__item" href="/"><img src="social-vk.svg" alt="vk"></a>
            </div>
          </form>
        </div>
      </div>
    </section>
    <div class="subscribers">{{ subscribers }}</div>
  </div>
</template>

<script>

import btn from '~/components/btn'
import vInput from '~/components/vInput'

export default {
  components: { btn, vInput },
  data() {
    return {
      subscribers: '0000'
    }
  }
}
</script>

<style lang="sass">
@import '../assets/styles/index.sass'
</style>
