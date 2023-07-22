<template>
  <footer>
    <div class="container">
      <h2 class="mb-4">Contact Me</h2>
      <div class="icon">
        <a href="mailto:kim@kimlarocca.com" aria-label="email link">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>email</title>
            <path
              d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"
            ></path>
          </svg>
        </a>
      </div>
      <div class="icon">
        <a
          href="https://www.linkedin.com/in/kimlarocca/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="linkedin link"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>linkedin</title>
            <path
              d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"
            ></path>
          </svg>
        </a>
      </div>
      <div class="icon">
        <a
          href="https://github.com/kimlarocca"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="github link"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>github</title>
            <path
              d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <canvas id="canvas"></canvas>
  </footer>
</template>

<script>
export default {
  mounted() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var particles = []
    var numParticles = 30

    // start with random starting position
    var Particle = function () {
      this.x = canvas.width * Math.random()
      this.y = canvas.height * Math.random()
      this.vx = -1
      this.vy = Math.random()
    }
    // Adding two methods
    Particle.prototype.Draw = function (ctx) {
      ctx.beginPath()
      ctx.fillStyle = 'rgba(255,255,255,0.15)'
      ctx.arc(this.x, this.y, 3, 0, 3 * Math.PI)
      ctx.fill()
    }

    Particle.prototype.Update = function () {
      // set the starting x/y to have velocity
      this.x += this.vx
      this.y += this.vy

      if (this.x < 0) {
        this.x = canvas.width // resets back to beginning
      }
      if (this.y < 0 || this.y > canvas.height) {
        // when it hits the top or bottom bounce
        this.vy = -this.vy
      }
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (var i = 0; i < numParticles; i++) {
        particles[i].Update()
        particles[i].Draw(ctx)
      }
      requestAnimationFrame(loop)
    }

    // Create particles
    for (var i = 0; i < numParticles; i++) {
      particles.push(new Particle())
    }
    loop()
  },
}
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';

footer {
  width: 100%;
  padding: 150px 0;
  text-align: right;
  background: url('https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805870/kimlarocca/portfolio/contact-background_cdflhu.jpg')
    center center no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  @media all and (max-width: $breakpoint-tablet) {
    background: url('https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805870/kimlarocca/portfolio/contact-background-tablet_gwxzor.jpg')
      center bottom no-repeat;
    background-size: cover;
    text-align: center;
  }
  @media all and (max-width: $breakpoint-mobile) {
    background: url('https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805870/kimlarocca/portfolio/contact-background-mobile_ppbsd5.jpg')
      center bottom no-repeat;
    background-size: cover;
  }
  a,
  a:visited,
  a:active {
    color: $white;
    text-decoration: underline;
    opacity: 1;
    &:hover,
    &:focus {
      outline: none;
      color: $white;
      text-decoration: underline;
      opacity: 0.8;
    }
  }
  h2,
  p {
    color: $white;
  }
  .icon {
    display: inline-block;
    margin-right: 20px;
    z-index: 10;
    &:last-of-type {
      margin-right: 0;
    }
    @media all and (max-width: $breakpoint-mobile) {
      margin: 0 10px;
      &:last-of-type {
        margin-right: 10px;
      }
    }
    svg {
      stroke-width: 0;
      fill: $white;
      width: 2rem;
      height: 2rem;
      opacity: 1;
      transition: $transition;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
