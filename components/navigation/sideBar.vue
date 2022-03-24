<template>
    <div class="burger-nav flex center">
        <div class="open">
            <div class="flex middle" @click="isActive = !isActive" >
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="38" height="6" stroke="white" stroke-width="2"/>
                <rect x="1" y="13" width="38" height="6" stroke="white" stroke-width="2"/>
                <rect x="1" y="25" width="38" height="6" stroke="white" stroke-width="2"/>
                </svg>
            </div> 
        </div>
      <transition name="fade">
        <div class="nav-container flex center-column-top" :class="{ passive: isActive }">
            <div class="container flex center-column-right">
              <div class="top-bar flex full-width">
                <div class="logo flex center" @click="isActive = !isActive">
                  <nuxt-link to="/">AB.</nuxt-link>
                </div>
                <div class="close flex">
                    <div class="flex middle" @click="isActive = !isActive" >
                        <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.41421" y="29" width="38" height="6" transform="rotate(-45 4.41421 29)" fill="white" stroke="white" stroke-width="2"/>
                        <rect x="-1.41421" width="38" height="6" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 34.5272 28)" fill="white" stroke="white" stroke-width="2"/>
                        </svg>
                    </div> 
                </div>
              </div>
              <div class="mobile-links flex center-column-top">
                  <ul>
                      <li @click="isActive = !isActive"><nuxt-link to="/#bio">Bio</nuxt-link></li>
                      <li @click="isActive = !isActive"><nuxt-link to="/#projects">Project</nuxt-link></li>
                      <li @click="isActive = !isActive"><nuxt-link to="/#contact">Contact</nuxt-link></li>
                  </ul>
              </div>
            </div>
        </div> 
      </transition>
    </div>
</template>

<script>


export default {
    name: 'sideBar',
    data () {
      return {
        isActive: true
      }
    },
    methods: {
    }
}
</script>



<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}

.passive {
  opacity: 0;
  z-index: -1000;
  height: 0vh;
  transform: translateX(100%) !important;
  position: absolute;
}

.open {
    width: 100%;
    height: 100%;
    float: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      transition: .3s ease-in-out;
      rect {
        transition: .3s ease-in-out;
        fill: rgba($color: $main-orange, $alpha: 0);
      }
    }
    &:hover {
      cursor: pointer;
      svg {
        rect {
          fill: rgba($color: $main-orange, $alpha: .4);
          stroke: $main-orange;
          &:nth-child(1) {
            width: 32px;
          }
          &:nth-child(2) {
            width: 32px;
            transform: translateX(6px);
          }
          &:nth-child(3) {
            width: 24px;
          }
        }
      }
    }
    @media (max-width:680px) {
      svg {
        width: 32px;
      }
    }
}


.burger-nav {
  z-index: 100;
  width: auto;
  .nav-container {
    position: fixed;
    height: 100vh;
    top: 0 !important;
    left: 100%;
    width: 100% !important;
    background-color: $main-orange;
    z-index: 100;
    transition: .4s ease-in;
    transform: translateX(-100%);
    .container {
      .top-bar {
        height: 80px;
        margin-top: 36px;
        justify-content: space-between;
        a {
          font-size: 24px;
          color: $main-blue;
          &:hover {
            opacity: 0.4 !important;
            color: $main-blue !important;
          }
        }
      }
      .close {
        z-index: 1005;
        background-color: $main-orange;
        height: 56px;
        width: 40px;
        justify-content: flex-end;
        align-items: center;
        svg {
          transition: .3s ease-in-out;
          rect {
            transition: .3s ease-in-out;
          }
        }
        &:hover {
          cursor: pointer;
          svg {
            rect {
              fill: rgba($color: $main-orange, $alpha: 1);
              stroke: $main-blue;
            }
          }
        }
      }
    }
  }
}


.mobile-links {
  display: flex; 
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0;
  text-align: center;
  margin-top: 40px;
  width: 100%;
  .logo {
      img {
          max-width: 280px;
          @media only screen and (max-width: 560px) {
            height: 24px;
          }
        }
    }
    ul {
        margin-top: 32px;
        padding-left: 0;
        list-style-type: none;
    a {
      color: white;
      margin: 20px 0;
      display: flex;
      justify-content: center;
      text-decoration: none;
      font-size: 64px;
      @media (max-width: 680px) {
        font-size: 48px;
      }
      &:hover {
        color: $main-blue !important;
      }
    }
  }
}


.nuxt-link-exact-active {
  color: white ;
}


// @media only screen and (max-width: 960px) {
//     .burger-nav {
//         display: none;
//     }
// }

</style>
