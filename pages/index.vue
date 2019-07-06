<template>
  <div>
    <section class="preview">
      <div class="container">
        <div class="logo">
          <img
            class="logo__image"
            src="logo.svg"
            alt="logo">
        </div>
        <div class="preview__content">
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
              <btn class="preview__demo">Запросить демо-доступ</btn>
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
        <!-- <a href="/" class="link">qweqeqeweq weqee</a>
        <h1>qweqwe</h1>
        <h2 class="h2">qwqrqgeg</h2>
        <h3 class="h3">wgfdtrjruyr ggeree</h3>
        <h4 class="h4">dlkvndanv ei</h4>
        <h5 class="h5">rwq rqwrw q</h5>
        <h6 class="h6">ewgwbwe egwgewtw twtw</h6>
        <p class="subtitle">Принимай участие в разных забегах. Собирай результаты и медали в одном месте</p>
        <p class="small">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p> -->
        <!-- <vInput /> -->
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__wrapper">
          <div class="item">
            <h2 class="h2 h2_white">В нашей базе сотни российских и международных забегов</h2>
          </div>
          <div class="item">
            <div class="about__image"></div>
          </div>
          <div class="item">
            <div class="description">
              <span class="title">Просто создать</span>
              <p class="text">Все результаты добавляются автоматически</p>
            </div>
            <div class="description">
              <span class="title">Удобно управлять</span>
              <p class="text">Сортируйте по группам и выделяйте лучшие результаты</p>
            </div>
            <div class="description">
              <span class="title">Легко поделиться</span>
              <p class="text">Получаете персональную страничку с вашими результатами</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import btn from '~/components/btn'
import vInput from '~/components/vInput'

export default {
  components: { btn, vInput },
  data() {
    return {}
  }
}
</script>

<style lang="sass">
@import '../assets/styles/index.sass'
</style>
