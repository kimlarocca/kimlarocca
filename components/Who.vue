<template>
  <section id="who">
    <div class="dark-gray-bg white diagonal">
      <div class="container py-4 lg:py-8">
        <h2 class="white mb-7">Professional since 1999.</h2>
        <div class="grid">
          <div class="col col-12 lg:col-5 mb-4">
            <figure>
              <img
                src="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/kim_nuoagb.jpg"
                alt="photo of kim playing bass guitar and singing"
              />
              <figcaption>let's rock</figcaption>
            </figure>
          </div>
          <div class="col col-12 lg:col-7 mb-4">
            <p class="mb-4">
              I have been designing websites since my first geocities page back
              in the 1990s! It may or may not have been dedicated to Final
              Fantasy VII... but now I've dated myself.
            </p>
            <p class="mb-4">
              I hold a Computer Science degree from Rutgers University as well
              as a degree in Italian. My first paying client was in 1999, and I
              still do work for her to this day. Since then, I've worked on high
              profile websites for clients such as Intel, Pfizer, NBC, Merck,
              IBM, Bausch + Lomb, Novartis, AstraZeneca, Celgene, Visa,
              Intuitive Surgical, Roche, Toys"R"Us / Babies"R"Us, FAO Schwartz,
              Wharton, WQXR, WNYC, The Gothamist and more.
            </p>
            <p class="mb-4">
              I currently manage the software engineering, design and digital
              operations team for NY Public Radio. In addition to this, I've
              been working hard on 2 startups: Equal Time, where I am CTO &
              Co-Founder, and Cuetip, where I am Director of Technology.
            </p>
            <p class="mb-6">
              When not working, you can find me rocking out with my cover band,
              playing dodgeball, reading crappy fantasy novels, or playing
              minecraft with my kids. Sadly, I have not yet made time to build a
              Final Fantasy XV website.
            </p>
            <div class="text-center lg:text-left">
              <a
                class="button"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kimlarocca/"
              >
                view resume on linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/styles/_variables.scss';

#who {
  background: linear-gradient(125deg, $white calc(50% - 1px), $dark-gray 50%);
  position: relative;

  h2,
  p {
    color: rgb(255, 255, 255);
    mix-blend-mode: difference;
  }

  &:before {
    content: '';
    position: absolute;
    width: 900px;
    height: 473px;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .bs_one {
    padding: 0 50px;
    @media all and (max-width: $breakpoint-mobile) {
      padding: 0;
    }
  }

  figcaption {
    color: rgb(35, 26, 29);
    background-color: rgb(255, 255, 255);
    mix-blend-mode: difference;
    @media all and (max-width: $breakpoint-mobile) {
      color: $white;
      background-color: $dark-gray;
      mix-blend-mode: normal;
      left: 40px;
    }
  }
}
</style>
