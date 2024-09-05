<template>
  <section id="home">
    <div id="hero"></div>
    <div class="container tagline">
      <h2 class="banner">software engineering manager at ny public radio</h2>
      <h2 class="banner">co-founder at equal time</h2>
    </div>
    <a
      href="#what"
      tabindex="0"
      class="scroll-down"
      aria-label="scroll down past hero image"
    />
    <div id="smoke"></div>
  </section>
</template>

<script>
/* eslint-disable */
import * as THREE from 'three'

export default {
  mounted () {
    var camera,
      scene,
      renderer,
      geometry,
      material,
      mesh,
      clock,
      cubeSineDriver,
      smokeTexture,
      smokeMaterial,
      smokeGeo,
      smokeParticles,
      p,
      delta

    init()
    animate()

    async function init () {
      clock = new THREE.Clock()

      renderer = new THREE.WebGLRenderer( { alpha: true } )
      renderer.setClearColor( 0x000000, 0.1 )
      renderer.setSize( window.innerWidth, window.innerHeight )

      scene = new THREE.Scene()

      var ambientLight = new THREE.AmbientLight( 0xffffff )
      scene.add( ambientLight )

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      )
      camera.position.z = 1000
      scene.add( camera )

      geometry = new THREE.CubeGeometry( 200, 200, 200 )
      material = new THREE.MeshLambertMaterial( {
        color: 0xf8cb8a,
        wireframe: false,
      } )
      mesh = new THREE.Mesh( geometry, material )
      //scene.add( mesh );
      cubeSineDriver = 0
      smokeTexture = THREE.ImageUtils.loadTexture( 'images/smoke.png' )
      smokeMaterial = new THREE.MeshLambertMaterial( {
        color: 0xf8cb8a,
        opacity: 0.15,
        map: smokeTexture,
        transparent: true,
      } )
      smokeGeo = new THREE.PlaneGeometry( 300, 300 )
      smokeParticles = []

      for ( p = 0; p < 150; p++ ) {
        var particle = new THREE.Mesh( smokeGeo, smokeMaterial )
        particle.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100
        )
        particle.rotation.z = Math.random() * 360
        scene.add( particle )
        smokeParticles.push( particle )
      }

      document.getElementById( 'smoke' ).appendChild( renderer.domElement )
    }

    function animate () {
      delta = clock.getDelta()
      requestAnimationFrame( animate )
      evolveSmoke()
      render()
    }

    function evolveSmoke () {
      var sp = smokeParticles.length
      while ( sp-- ) {
        smokeParticles[ sp ].rotation.z += delta * 0.2
      }
    }

    function render () {
      mesh.rotation.x += 0.005
      mesh.rotation.y += 0.01
      cubeSineDriver += 0.01
      mesh.position.z = 100 + Math.sin( cubeSineDriver ) * 500
      renderer.render( scene, camera )
    }
  },
}
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';

#home {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media all and (max-width: $breakpoint-mobile) {
    height: 480px;
  }

  #hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805637/kimlarocca/portfolio/hero.jpg')
      center center;
    background-size: cover;
    z-index: 10;
    @media all and (max-width: $breakpoint-tablet) {
      background: url('https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805637/kimlarocca/portfolio/hero-tablet_aaajkz.jpg')
        center center;
      background-size: cover;
    }
    @media all and (max-width: $breakpoint-mobile) {
      background: url('https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805637/kimlarocca/portfolio/hero-mobile_oykx3r.jpg')
        center center;
      background-size: cover;
    }
  }

  #smoke {
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media all and (max-width: $breakpoint-mobile) {
      display: none;
    }
  }

  .tagline {
    z-index: 30;
    position: absolute;
    bottom: 7.5%;

    h1,
    h2 {
      float: left;
      clear: left;

      &:nth-of-type(2) {
        margin-left: 3rem;
      }
    }

    p {
      display: inline-block;
      float: left;
      clear: left;
      margin-top: 20px;
      color: $white;
      font-size: 1rem;
      max-width: 50%;
      font-weight: 600;
      @media all and (max-width: $breakpoint-mobile) {
        max-width: 100%;
      }
    }

    @media all and (max-width: $breakpoint-mobile) {
      left: 20px;
      right: 20px;
      bottom: 60px;
    }
  }
}

//scroll down indicator
.scroll-down {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 3s;
  transition: all 0.5s ease-in 3s;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -25px;
  display: block;
  width: 50px;
  height: 50px;
  background-size: 14px auto;
  z-index: 30;
  //-webkit-animation: bounce 2s infinite 2s;
  //animation: bounce 2s infinite 2s;
  //-webkit-transition: all .2s ease-in;
  //transition: all .2s ease-in;
  transform: scale(0.6);

  &:focus {
    border: solid 1px $white;
  }

  @media all and (max-width: $breakpoint-mobile) {
    bottom: 10px;
  }

  &:before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    display: block;
    width: 25px;
    height: 25px;
    content: '';
    border: 2px solid $white;
    border-width: 0px 0 2px 2px;
  }
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
</style>
