<template>
  <section id="what">
    <div class="container pt-4 pb-6 lg:py-8">
      <h2 class="mb-6">I build creative websites from top to bottom.</h2>
      <div class="grid">
        <div class="col col col-12 lg:col-6 mb-6">
          <card
            class="lg:pr-3"
            image="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/design_lkttxc.jpg"
            title="design"
            description="I like to think of myself as an 'ultra stack' developer (yes, I made that up). I design award winning, tech driven websites with modern trends in mind."
          />
        </div>
        <div class="col col-12 lg:col-6 mb-6">
          <card
            class="lg:pl-3"
            image="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/develop_nzzwpu.jpg"
            title="develop"
            description="Until 'ultra stack' becomes a thing, I'm just an artsy full stack developer who likes to create beautiful responsive websites and is comfortable working on both the frontend and the backend."
          />
        </div>
        <div class="col col-12 lg:col-6 mb-6">
          <card
            class="lg:pr-3"
            image="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/test_wvh7wq.jpg"
            title="test"
            description="Between end-to-end testing, unit testing, automation, and good old-fashioned eyeballs on real devices, my websites are about as close to perfect as you can get."
          />
        </div>
        <div class="col col-12 lg:col-6 mb-6">
          <card
            class="lg:pl-3"
            image="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/deploy_pfrsq9.jpg"
            title="deploy"
            description="Need DevOps? Whether it's building servers or setting up continuous integration, I'll create and maintain your application environments wherever they may be."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/styles/_variables.scss';
#what {
  background: linear-gradient(125deg, $white calc(50% - 1px), $dark-gray 50%);
  h2,
  p {
    color: rgb(255, 255, 255);
    mix-blend-mode: difference;
  }
  h2 {
    width: 75%;
    max-width: 100%;
    @media all and (max-width: $breakpoint-mobile) {
      width: 100%;
    }
  }
}
</style>
