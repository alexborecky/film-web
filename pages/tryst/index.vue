<template>
    <div class="hero">
        <div class="container flex middle">
            <div class="section full-width flex column middle">
                <div class="logo">
                    <img src="../../assets/images/t1.svg" alt="">
                    <img src="../../assets/images/r.svg" alt="">
                    <img src="../../assets/images/y.svg" alt="">
                    <img src="../../assets/images/s.svg" alt="">
                    <img src="../../assets/images/t2.svg" alt="">
                </div>
                <div class="subtitle">
                    <img src="../../assets/images/short.svg" alt="">
                </div>
                <div class="date">
                    <img src="../../assets/images/date.svg" alt="">
                </div>
                <div class="links flex">
                    <ul class="flex">
                        <li><a href="https://pro.imdb.com/title/tt15158082/?ref_=nm_filmo_projindev_3">IMDB</a></li>
                        <li><a href="">Contribute</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'trystpage'
    }
</script>

<style lang="scss" scoped>

.hero {
    background-color: #160000;
    .section {
        text-align: center;
        @media (max-width: 1024px) {
            height: 100vh;
        }
    }
    .logo {
        display: flex;
        justify-content: space-between;
        width: 600px;
        @media (max-width: 420px) {
                width: 100%;
            }
        img {
            width: auto;
            height: 80px;
            animation-duration: 3s;
            opacity: 0;
            animation-fill-mode: forwards !important;
            &:nth-child(1)
            {
                animation-name: enterT;
                animation-delay: 1s;
            }
            &:nth-child(2)
            {
                animation-name: enterR;
            }
            &:nth-child(3)
            {
                animation-name: enterY;
            }
            &:nth-child(4)
            {
                animation-name: enterS;
            }
            &:nth-child(5)
            {
                animation-name: enterT2;
                animation-delay: 1s;
            }
            @media (max-width: 640px) {
                height: 40px;
            }
        }
    }
    .date {
        margin-top: 80px;
        img {
            height: 24px;
            animation-name: enterY;
            animation-duration: 1s;
            animation-delay: 5s;
            opacity: 0;
            animation-fill-mode: forwards;
            @media (max-width: 640px) {
                height: 16px;
            }
        }
    }
    .subtitle {
        img {
            animation-name: enterText;
            animation-duration: 2s;
            animation-delay: 3s;
            opacity: 0;
            animation-fill-mode: forwards;
            @media (max-width: 640px) {
                height: auto;
                width: 80%;
            }
        }
        margin-top: 24px;
    }
    .links {
        margin-top: 40px;
        animation-name: opacity;
        animation-duration: 1s;
        animation-delay: 6.5s;
        animation-fill-mode: forwards;
        opacity: 0;
        ul {
            li {
                margin: 0 16px;
                a {
                    color: white;
                    transition: .3s ease-in;
                    opacity: .64;
                    background: -webkit-linear-gradient(-90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    &:hover {
                        opacity: 1;
                        background: -webkit-linear-gradient(45deg, rgba(248, 172, 118, 1), rgba(248, 172, 118, .4));
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                &:nth-child(2) {
                    pointer-events: none;
                    opacity: .4;
                }
            }
        }
    }
}

@keyframes enterT {
    0% {transform: translateX(-30px); opacity: 0;}
    100% {transform: translateX(0px); opacity: 1;}
}
@keyframes enterR {
    0% {transform: translateY(-30px); opacity: 0;}
    100% {transform: translateY(0px); opacity: 1;}
}
@keyframes enterY {
    0% {transform: scale(.8); opacity: 0;}
    100% {transform: scale(1); opacity: 1;}
}
@keyframes enterS {
    0% {transform: translateY(30px); opacity: 0;}
    100% {transform: translateY(0px); opacity: 1;}
}
@keyframes enterT2 {
    0% {transform: translateX(30px); opacity: 0;}
    100% {transform: translateX(0px); opacity: 1;}
}

@keyframes enterText {
    0% {opacity: 0; transform: translateY(10px);}
    100% {opacity: 1; transform: translateY(0px);}
}

@keyframes opacity {
    0% {opacity: 0;}
    100% {opacity: 1;}
}

</style>