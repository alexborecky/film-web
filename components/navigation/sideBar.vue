<template>
    <div class="burger-nav flex center">
        <div class="open">
            <div class="flex middle" @click="isActive = !isActive" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div> 
        </div>
      <transition name="fade">
        <div class="nav-container flex center-column-top" :class="{ passive: isActive }">
            <div class="container flex center-column-right">
              <div class="top-bar flex full-width">
                <div class="logo flex center">
                  <nuxt-link to="/">AB.</nuxt-link>
                </div>
                <div class="close flex">
                    <div class="flex middle" @click="isActive = !isActive" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> 
                </div>
              </div>
              <div class="mobile-links flex center-column-top">
                  <ul>
                      <li @click="isActive = !isActive"><nuxt-link to="/">Bio</nuxt-link></li>
                      <li @click="isActive = !isActive"><nuxt-link to="/films">Project</nuxt-link></li>
                      <li @click="isActive = !isActive"><nuxt-link to="/about">Contact</nuxt-link></li>
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
    &:hover {
      cursor: pointer;
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
        }
      }
      .close {
        z-index: 1005;
        background-color: $main-orange;
        height: 56px;
        width: 40px;
        justify-content: flex-end;
        align-items: center;
        &:hover {
          cursor: pointer;
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
