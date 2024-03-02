var styles = `
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);@-webkit-keyframes tile {
    0%,12.5%,to {
        opacity: 1
    }

    25%,82.5% {
        opacity: 0
    }
}

@keyframes tile {
    0%,12.5%,to {
        opacity: 1
    }

    25%,82.5% {
        opacity: 0
    }
}

@keyframes animate {
    0% {
        background-position: 0
    }

    to {
        background-position: 400%
    }
}

*,:after,:before,body {
    font-family: 'Montserrat',sans-serif
}

body {
    background-size: cover!important;
    color: #fff;
    background: #282828;
    background: url(https://gspics.org/images/2024/02/25/0eKpL7.png) no-repeat center center fixed;
    background-position: 50%;
    align-items: center;
    background-color: #131313;
    --background-color: conic-gradient (190deg, #363636, #363636, #5b3941, 110%, #9d3f57);
    --text-color: #A1A1AA;
    --card-background-color: rgba(255, 255, 255, .015);
    --card-border-color: rgba(255, 255, 255, 0.1);
    --card-box-shadow-1: rgba(0, 0, 0, 0.05);
    --card-box-shadow-1-y: 3px;
    --card-box-shadow-1-blur: 6px;
    --card-box-shadow-2: rgba(0, 0, 0, 0.1);
    --card-box-shadow-2-y: 8px;
    --card-box-shadow-2-blur: 15px;
    --card-label-color: #FFFFFF;
    --card-icon-color: #D4D4D8;
    --card-icon-background-color: rgba(255, 255, 255, 0.08);
    --card-icon-border-color: rgba(255, 255, 255, 0.12);
    --card-shine-opacity: .1;
    --card-shine-gradient: conic-gradient(from 205deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #6e4254 25deg, rgba(52, 211, 153, 0.18) 295deg, rgba(16, 185, 129, 0) 360deg);
    --card-line-color: #2A2B2C;
    --card-tile-color: #814151b5;
    --card-hover-border-color: rgba(255, 255, 255, 0.2);
    --card-hover-box-shadow-1: rgba(0, 0, 0, 0.04);
    --card-hover-box-shadow-1-y: 5px;
    --card-hover-box-shadow-1-blur: 10px;
    --card-hover-box-shadow-2: rgba(0, 0, 0, 0.3);
    --card-hover-box-shadow-2-y: 15px;
    --card-hover-box-shadow-2-blur: 25px;
    --card-hover-icon-color: #8e6874;
    --card-hover-icon-background-color: #814151;
    --card-hover-icon-border-color: rgb(37, 27, 30);
    --blur-opacity: .01
}

@font-face {
    font-family: FontAwesome;
    font-style: normal;
    font-weight: 400;
    src: url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.eot?v=4.6.3);
    src: url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.eot?#iefix&v=4.6.3) format("embedded-opentype"),url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.woff2?v=4.6.3) format("woff2"),url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.woff?v=4.6.3) format("woff"),url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.ttf?v=4.6.3) format("truetype"),url(/files/stores/frontend/template_3/static/font-awesome/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular) format("svg")
}

*,:after,:before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

b,strong {
    font-weight: 500;
    top: 50px
}

:root,:root[data-theme=red_black] {
    --default-font-family: 'Montserrat', sans-serif
}

:root[data-theme=red_black] {
    --accent-color-800: #814151;
    --accent-color-900: #50373d;
    --font-color-700: #fff;
    --font-color-800: rgba(255, 255, 255, .7);
    --font-color-900: #7b7b7b;
    --bg-color-800: #333333;
    --bg-color-700: #363636;
    --bg-color-900: #1d1b1a;
    --product-items-trans-bg-color: rgba(0, 0, 0, .4)
}

.DesktopCopyright-module__wrapper {
    border-radius: 10px
}

.boxBody,.boxFooter,.boxHeader {
    background: #28282800
}

.Header-module__wrapper {
    background-color: #ffffff00;
    margin-bottom: 20px;
    padding: 0 15px;
    min-height: 50px;
    font-weight: 500;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap
}

.HeaderNav-module__wrapper {
    text-transform: uppercase;
    white-space: nowrap;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    padding: 0;
    line-height: 100%;
    cursor: pointer;
    transition: color ease .2s;
    margin-left: 65px;
}

.PlayerMenu-module__loginLink,.PlayerMenu-module__profileLink {
    position: relative;
    text-align: center;
    line-height: 25px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    box-sizing: border-box;
    background: linear-gradient(90deg,#9d3f57,#48373c,#6a3f4a,#743f4c,#9d3f57);
    background-size: 400%;
    border-radius: 10px;
    z-index: 1
}

.PlayerMenu-module__loginLink:hover,.PlayerMenu-module__profileLink:hover {
    animation: animate 8s linear infinite
}

.PlayerMenu-module__loginLink:before,.PlayerMenu-module__profileLink:before {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
    background: linear-gradient(90deg,#9d3f57,#48373c,#6a3f4a,#743f4c,#9d3f57);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: .5s
}

.PlayerMenu-module__loginLink:hover:before,.PlayerMenu-module__profileLink:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite
}

.PlayerMenu-module__loginLink {
    border-radius: 15px
}

.PlayerBalance-module__btn {
    background: #28282800
}

.LangSwitcher-module__list.LangSwitcher-module__active,.NavServerDropDown-module__list.NavServerDropDown-module__active {
    position: absolute;
    right: -1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: .75rem;
    border-radius: .375rem;
    border: .0625rem solid rgba(255,255,255,.1)
}

.LangSwitcher-module__list.LangSwitcher-module__active {
    top: calc(100% + 1rem);
    width: 10rem;
    background: #3a303273 gap: 0.50rem
}

.NavServerDropDown-module__list.NavServerDropDown-module__active {
    width: 15rem;
    background: #3a303273 gap: 0.50rem /* Конец */
}

.card .icon,.card .icon svg,.grid {
    position: relative;
    z-index: 1
}

.grid {
    grid-template-columns: repeat(2,240px);
    grid-gap: 32px;
    margin-top: 30px
}

.card {
    background-color: var(--background-color);
    box-shadow: 0 var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1),0 var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2),0 0 0 1px var(--card-border-color);
    padding: 10px 10px 10px 20px;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    margin-bottom: 30px;
    transition: box-shadow .25s
}

.card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 15px;
    background-color: #5b39411a
}

.card .icon {
    z-index: 2;
    display: table;
    padding: 8px
}

.card .icon::after {
    content: "";
    position: absolute;
    inset: 1.5px;
    border-radius: 10px;
    background-color: var(--card-icon-background-color);
    border: 1px solid var(--card-icon-border-color);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    transition: background-color .25s,border-color .25s
}

.card .icon svg {
    display: block;
    width: 24px;
    height: 24px;
    transform: translateZ(0);
    color: var(--card-icon-color);
    transition: color .25s
}

.card h4,.card p {
    z-index: 2;
    position: relative;
    font-size: 14px
}

.card h4 {
    margin: 12px 0 4px;
    font-family: inherit;
    font-weight: 600;
    line-height: 2;
    color: #fff
}

.card p {
    margin: 0;
    line-height: 1.7;
    color: #a1a1aa
}

.card .background,.card .shine {
    border-radius: inherit;
    position: absolute;
    inset: 0;
    overflow: hidden
}

.card .shine {
    z-index: 1;
    opacity: 0;
    transition: opacity .5s
}

.card .shine:before {
    content: "";
    width: 150%;
    padding-bottom: 150%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 55%;
    filter: blur(35px);
    opacity: var(--card-shine-opacity);
    transform: translateX(-50%);
    background-image: var(--card-shine-gradient)
}

.card .background {
    -webkit-mask-image: radial-gradient(circle at 60% 5%,#000 0,#000 15%,transparent 60%);
    mask-image: radial-gradient(circle at 60% 5%,#000 0,#000 15%,transparent 60%)
}

.card .background .tiles {
    opacity: 0;
    transition: opacity .25s
}

.card .background .tiles .tile {
    position: absolute;
    background-color: var(--card-tile-color);
    -webkit-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    opacity: 0
}

.card .background .tiles .tile.tile-10,.card .background .tiles .tile.tile-4,.card .background .tiles .tile.tile-6 {
    -webkit-animation-delay: -2s;
    animation-delay: -2s
}

.card .background .tiles .tile.tile-3,.card .background .tiles .tile.tile-5,.card .background .tiles .tile.tile-8 {
    -webkit-animation-delay: -4s;
    animation-delay: -4s
}

.card .background .tiles .tile.tile-2,.card .background .tiles .tile.tile-9 {
    -webkit-animation-delay: -6s;
    animation-delay: -6s
}

.card .background .tiles .tile.tile-1 {
    top: 0;
    left: 0;
    height: 10%;
    width: 22.5%
}

.card .background .tiles .tile.tile-2 {
    top: 0;
    left: 22.5%;
    height: 10%;
    width: 27.5%
}

.card .background .tiles .tile.tile-3 {
    top: 0;
    left: 50%;
    height: 10%;
    width: 27.5%
}

.card .background .tiles .tile.tile-4 {
    top: 0;
    left: 77.5%;
    height: 10%;
    width: 22.5%
}

.card .background .tiles .tile.tile-5 {
    top: 10%;
    left: 0;
    height: 22.5%;
    width: 22.5%
}

.card .background .tiles .tile.tile-6 {
    top: 10%;
    left: 22.5%;
    height: 22.5%;
    width: 27.5%
}

.card .background .tiles .tile.tile-7 {
    top: 10%;
    left: 50%;
    height: 22.5%;
    width: 27.5%
}

.card .background .tiles .tile.tile-8 {
    top: 10%;
    left: 77.5%;
    height: 22.5%;
    width: 22.5%
}

.card .background .tiles .tile.tile-9 {
    top: 32.5%;
    left: 50%;
    height: 22.5%;
    width: 27.5%
}

.card .background .tiles .tile.tile-10 {
    top: 32.5%;
    left: 77.5%;
    height: 22.5%;
    width: 22.5%
}

.card .background .line {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity .35s
}

.card .background .line:after,.card .background .line:before {
    content: "";
    position: absolute;
    background-color: var(--card-line-color);
    transition: transform .35s
}

.card .background .line:before {
    left: 0;
    right: 0;
    height: 1px;
    transform-origin: 0 50%;
    transform: scaleX(0)
}

.card .background .line:after {
    top: 0;
    bottom: 0;
    width: 1px;
    transform-origin: 50% 0;
    transform: scaleY(0)
}

.card .background .line.line-1:before {
    top: 10%
}

.card .background .line.line-1:after {
    left: 22.5%
}

.card .background .line.line-1:after,.card .background .line.line-1:before {
    transition-delay: .3s
}

.card .background .line.line-2:before {
    top: 32.5%
}

.card .background .line.line-2:after {
    left: 50%
}

.card .background .line.line-2:after,.card .background .line.line-2:before {
    transition-delay: .15s
}

.card .background .line.line-3:before {
    top: 55%
}

.card .background .line.line-3:after {
    right: 22.5%
}

.card:hover {
    box-shadow: 0 3px 6px var(--card-hover-box-shadow-1),0 var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2),0 0 0 1px var(--card-hover-border-color)
}

.card:hover .icon::after {
    background-color: var(--card-hover-icon-background-color)
}

.card:hover .icon svg {
    color: var(--card-hover-icon-color)
}

.card:hover .shine {
    opacity: 1;
    transition-duration: .5s
}

.card:hover .background .tiles {
    opacity: 1;
    transition-delay: .25s
}

.card:hover .background .tiles .tile {
    -webkit-animation-name: tile;
    animation-name: tile
}

.card:hover .background .line {
    opacity: 1;
    transition-duration: .15s
}

.card:hover .background .line:before {
    transform: scaleX(1)
}

.card:hover .background .line:after {
    transform: scaleY(1)
}

.card:hover .background .line.line-1:after,.card:hover .background .line.line-1:before,.card:hover .shine {
    transition-delay: 0s
}

.card:hover .background .line.line-2:after,.card:hover .background .line.line-2:before {
    transition-delay: .15s
}

.card:hover .background .line.line-3:after,.card:hover .background .line.line-3:before {
    transition-delay: .3s
}

.MonitoringWidget-module__header {
    text-align: center
}

.MonitoringServer-module__wrapper {
    border-radius: .75rem;
    background: linear-gradient(190deg,#363636,#363636,#5b3941,110%,#9d3f57);
    padding: 1.25rem;
    box-shadow: 0 6px 10px 0 rgba(0 0 0/20%)
}

.MonitoringServer-module__progressBar {
    animation: animate 8s linear infinite;
    z-index: 1
}

.Button-module__btn.Button-module__accent,.Button-module__btn.Button-module__accent:before,.MonitoringServer-module__progressBar {
    background: linear-gradient(90deg,#9d3f57,#48373c,#6a3f4a,#743f4c,#9d3f57);
    background-size: 400%
}

.Button-module__btn.Button-module__accent {
    position: relative;
    text-align: center;
    line-height: 25px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    box-sizing: border-box;
    border-radius: 10px;
    z-index: 0;
    border-color: #ffffff00
}

.Button-module__btn.Button-module__accent:hover {
    animation: animate 8s linear infinite
}

.Button-module__btn.Button-module__accent:before {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
    border-radius: 40px;
    opacity: 0;
    transition: .5s
}

.Button-module__btn.Button-module__accent:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite
}

.MonitoringWidget-module__updatingLoaderWrapper {
    background-color: rgb(0 0 0/0%);
    box-shadow: 0 0 10px 0 rgb(0 0 0/10%)
}

.Search-module__wrapper {
    border-radius: 10px;
    height: 40px
}

.Search-module__input {
    background: linear-gradient(90deg,#363636,#393939,#414141,#393939,#363636);
    background-size: 400%;
    animation: animate 8s linear infinite
}

.Shop-module__header {
    width: 0%;
    font-size: 0
}

@media (min-width: 768px) {
    .Categories-module__categories {
        text-align:center;
        display: flex;
        width: auto;
        align-content: center;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        position: absolute;
        transform: translateX(845px) rotate(360deg) translateY(0);
        background: linear-gradient(190deg,#363636,#363636,#363636,#5b3941,125%,#9d3f57);
        padding: 10px;
        border-radius: 5px;
        flex-wrap: wrap;
        top: 140px;
        box-shadow: 0 6px 10px 0 rgba(0 0 0/20%)
    }

    .Categories-module__category {
        margin-bottom: 0;
        background: #414141;
        box-shadow: 0 0 10px 0 rgb(0 0 0/10%);
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 7px 13px;
        font-size: 14px;
        height: 34px
    }

    .Categories-module__category.Categories-module__active,.Categories-module__category:hover {
        background: #3a3032;
        color: var(--font-color-700)
    }

    .Categories-module__category:hover {
        background-color: var(--accent-color-800)
    }

    [data-categoryid="430181"] {
        color: #fff;
        background: linear-gradient(90deg,#9d3f57,#48373c,#6a3f4a,#743f4c,#9d3f57);
        background-size: 400%;
        opacity: 1;
        animation: animate 8s linear infinite
    }
    [data-categoryid="431899"] {
        color: #fff;
        background: linear-gradient(90deg,#9d3f57,#48373c,#6a3f4a,#743f4c,#9d3f57);
        background-size: 400%;
        opacity: 1;
        animation: animate 8s linear infinite
    }

    .Categories-module__categories {
        margin: 0
    }

    .Product-module__wrapper {
        background: linear-gradient(190deg,#363636,#363636,#363636,#5b3941,110%,#9d3f57);
        border-radius: 10px;
        transition: 1s;
        box-shadow: 0 6px 10px 0 rgba(0 0 0/20%)
    }

    .Product-module__wrapper:hover {
        transform: scale(1.1)
    }

    .Product-module__discount,.Product-module__price {
        border-radius: 10px 0 10px 0;
        background: linear-gradient(90deg,#9d3f57,#48373c,#6a3f4a,#743f4c,#9d3f57);
        background-size: 400%;
        animation: animate 8s linear infinite;
        z-index: 1
    }

    .Product-module__discount {
        border-radius: 0 10px 0 10px
    }

    .Product-module__name {
        text-align: center
    }

    .ProductModal-module__dropdown {
        background: #363636;
        border-radius: 10px
    }

    .productModalDescription {
        background-color: #36363600
    }

    .ProductModal-module__header {
        text-align: center;
        align-items: center;
        display: block;
        font-weight: 600
    }

    .TotalSum-module__input {
        background: #16161670;
        border-radius: 0 10px 10px 0
    }

    .TotalSum-module__currency {
        border-radius: 10px 0 0 10px
    }

    .CountSelector-module__input {
        background: #16161670;
        border-radius: 5px
    }

    .CountSelector-module__changeCountBtn {
        background: #814151;
        border-radius: 5px
    }

    .dropDownCurrentItem {
        background: #16161670
    }

    .Selector-module__dropDownCurrentItem {
        background: linear-gradient(90deg,#363636,#393939,#414141,#393939,#363636);
        background-size: 400%;
        animation: animate 8s linear infinite;
        border-radius: 10px
    }

    .Selector-module__dropDownList.Selector-module__openOnBottom,.Selector-module__dropDownList.Selector-module__openOnTop,.dropDownList.dropDownListOpenOnTop {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: .75rem;
        border-radius: .375rem;
        border: .0625rem solid rgba(255,255,255,.1);
        background: #3a303273 gap: 0.50rem
    }

    .ModalLayout-module__modal {
        margin-top: 20px;
        margin-bottom: 20px;
        box-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);
        background: #282828;
        padding: 20px;
        border-radius: 35px;
        box-shadow: 0 0 0 0 rgb(44 217 170)
    }

    .dropDownCurrentItem {
        background: linear-gradient(90deg,#363636,#393939,#414141,#393939,#363636);
        background-size: 400%;
        animation: animate 8s linear infinite;
        border-radius: 10px
    }

    .CountSelector-module__inputWrapper,.TotalSum-module__inputWrapper {
        background: #16161670;
        border-radius: 10px
    }

    .desc-main {
        border-radius: 15px;
        padding: 10px;
        background: #3e3e3e;
        box-shadow: 0 0 10px 0 rgb(0 0 0/20%)
    }

    .desc_title {
        font-weight: 400;
        font-size: 12px;
        color: #b9b9b9;
        text-align: left
    }

    .desc-service {
        padding: 2% 4%;
        border-radius: 10px;
        background: #333;
        justify-content: space-between;
        margin-top: 4px;
        flex-wrap: wrap
    }

    .desc-service,.desc-text-main {
        display: flex;
        align-items: center;
        width: 100%
    }

    .desc-text-info {
        font-weight: 300;
        font-size: 11px;
        color: #747474;
        text-align: left
    }

    .text-container {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-evenly;
        overflow: hidden;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1
    }

    .service__description {
        margin: 0;
        border-radius: 10px;
        background-color: #33333300;
        border: 0 dashed #696969;
        text-align: center;
        font-size: 13px;
        padding: 8px 0
    }

    .pd-additional-info {
        align-items: center;
        display: flex;
        width: auto;
        height: 20px;
        padding: 0 10px;
        cursor: pointer;
        transform: scale(1);
        transition: transform 400ms cubic-bezier(.68,-.55,.27,1.55)
    }

    .pd-additional,.pd-additional-info {
        box-shadow: 0 0 5px rgb(0 0 0/30%);
        transform: translate3d(0,0,0);
        margin-left: 9px;
        font-size: 13px;
        color: rgba(255,255,255,.9)!important
    }

    .pd-additional {
        align-items: center;
        display: flex;
        background: linear-gradient(90deg,#50373d,#50373d);
        background-size: 400% 400%;
        animation: gradient 5s ease infinite;
        width: auto;
        height: 20px;
        padding: 0 10px;
        border-radius: 7px;
        transform: scale(1);
        transition: transform 400ms cubic-bezier(.68,-.55,.27,1.55)
    }

    .pd-additional-info {
        background: linear-gradient(90deg,#9d3f57,#48373c,#6a3f4a,#743f4c,#9d3f57);
        background-size: 400%;
        border-radius: 15px;
        animation: animate 8s linear infinite
    }

    .desc-service-main {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap
    }

    .ProfileNav-module__logOut {
        text-align: center;
        display: block;
        border-radius: 10px;
        width: 100%;
        padding: 7px;
        color: var(--font-color-800);
        background: var(--accent-color-800)
    }

    .productModalImg {
        margin-bottom: 0 ;
        border-radius: 10px;
        /*ckground: #232323;
        background-size: 200px 150px;*/
  }
    .Product-module__img {
        border-radius: 10px
  }

    .BasketContent-module__header,.HistoryContent-module__header {
        display: flex;
        justify-content: space-around;
        font-size: 17px;
        margin-bottom: 20px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 15px
    }

    .BasketSearch-module__wrapper,.HistorySearch-module__wrapper {
        border-radius: 15px
    }

    .ProfileNav-module__wrapper {
        min-width: 250px
    }

    .ProfileNav-module__navItem {
        cursor: pointer;
        background: var(--bg-color-700);
        border-radius: 10px;
        font-weight: 600;
        padding: 10px 15px;
        color: var(--font-color-900);
        transition: all .15s ease;
        margin-bottom: 2px;
        text-align: center
    }

    .ProfileNav-module__header {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 15px;
        margin-bottom: 5px
    }

    .ProfileNav-module__name {
        font-size: 14px;
        text-align: center;
        width: 100%;
        vertical-align: middle;
        display: flex;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-weight: 600;
        margin-top: 15px;
        background: #363636;
        padding: 5px 7px
    }

    .ProfileNav-module__img {
        margin-bottom: 0;
        border-radius: 10px;
        width: 200px;
        height: 200px
    }

    .ProfileContent-module__input {
        background: linear-gradient(90deg,#363636,#393939,#414141,#393939,#363636);
        background-size: 400%;
        animation: animate 8s linear infinite;
        border-radius: 10px
    }

    .Selector-module__dropDownList.Selector-module__openOnBottom {
        top: calc(100% + 1rem)
    }

    .Selector-module__dropDownCurrentItem:focus,.Selector-module__dropDownCurrentItem:hover {
        outline: 1px solid #3e3e3e
    }

    .BasketTable-module__tableHeader,.HistoryTable-module__tableHeader,.ProfileContent-module__infoWrapper {
        border-radius: 10px
    }

    .ProfileContent-module__infoLine+.ProfileContent-module__infoLine {
        border-top: 1px solid #33333300
    }

    .HistoryTable-module__tableTitle:last-child {
        text-align: center
    }

    .HistoryTable-module__tableTitle:first-child {
        text-align: center
    }

    .BasketTable-module__tableLine:nth-child(2n-1),.HistoryTable-module__tableLine:nth-child(2n-1) {
        border-radius: 10px
    }

    .BasketSearch-module__input,.HistorySearch-module__input {
        background: linear-gradient(90deg,#363636,#393939,#414141,#393939,#363636);
        background-size: 400%;
        animation: animate 8s linear infinite
    }

    .RouletteContent-module__rouletteItemInfo {
        font-size: 0
    }

    .RouletteContent-module__rouletteItem {
        background: linear-gradient(90deg,#363636,#393939,#414141,#393939,#363636);
        background-size: 400%;
        animation: animate 8s linear infinite;
        border-radius: 10px;
        transform: translate3d(0,0,0);
        box-shadow: 0 6px 10px 0 rgb(0 0 0/15%)
    }

    .RouletteContent-module__lineWrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        background: #33333300;
        display: flex;
        align-items: center;
        -webkit-mask-image: linear-gradient(to right,rgba(255,255,255,0) 5%,#000 25%,#000 75%,rgba(255,255,255,0) 95%)
    }

    .RouletteContent-module__rouletteItemImg {
        width: 200px;
        height: 200px;
        object-fit: contain;
        padding: 20px
    }

    .productModalContainsItem {
        border-radius: 10px
    }

    .productModalContainsTitle {
        width: 100%;
        display: block;
        font-weight: 500;
        margin-bottom: 6px;
        margin-top: 15px;
        text-align: center
    }

    .Button-module__btn.Button-module__gray {
        border-color: #1d1b1a00;
        border-radius: 10px
    }
/* Ета киты йоу синие йоу */
@media (min-width: 768px){
.modal-lg {
    width: 600px;
    margin: 30px auto;
}}
.modal-sm {
    width: 350px;
}
.modal-body {
    margin: 0px 10px;
}
.modal-backdrop.show {
  opacity: .25;
}
@media (min-width: 768px){
.modal.show .modal-dialog {
  -webkit-transform: translate(0);
  transform: translate(0);
  width: 620px;
}}
@media (max-width: 768px){
.modal.show .modal-dialog {
  -webkit-transform: translate(0);
  transform: translate(0);
  width: 340px;
}}
.modal .modal-footer {
    background: #363636;
    border-top: 0px solid #292929;
    padding: 10px 5px;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    margin-top: 15px
}
.modal .modal-header {
    background: #28282800;
    border-bottom: 0px solid #292929;
    text-align: center;
}
.modal .modal-content {
    background: linear-gradient(225deg,#363636,#363636,#5b3941,140%,#9d3f57);
    padding: 25px;
  	border-radius: 35px;
  	box-shadow: 0 6px 10px 0 rgba(0 0 0/20%)
}
.modal .modal-header h4 {
    font-size: 16px;
    font-weight: 600;
}
.modal-content {
  opacity: 1;
  transition: opacity .2s linear;
}
.serverheader {
    border-radius: 15px;
    margin-bottom: 10px;
    font-size: 20px;
    margin-top: 20px;
}
.kit-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    align-items: center
}
.kit-item {
    margin: 4px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    background: linear-gradient(90deg,#363636,#393939,#414141,#393939,#363636);
    background-size: 400%;
    animation: animate 8s linear infinite;
    box-shadow: 0 6px 10px 0 rgba(0 0 0/25%);
    width: 80px;
    height: 80px;
}
.animated {
    animation-duration: 1s;
    animation-fill-mode: unset;
}
.kit-item:hover {
    transition: transform 200ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: scale(1.1);
}
.kit-item__image {
    width: 100%;
    transform: scale(0.7);
}
.kit-item__quantity {
    top: -20px;
    position: relative;
    border-radius: 0px 0px 15px 15px;
  	font-size: 12px;
}
.serverheader span {
    padding: 2px 12px 2px 12px;
    border-radius: 7px;
    text-transform: uppercase;
    font-size: 15px;
    background: linear-gradient(90deg,#9d3f57,#48373c,#6a3f4a,#743f4c,#9d3f57);
    background-size: 400%;
    animation: animate 8s linear infinite;
    transform: translate3d(0, 0, 0)
}
.Cookie-module__wrapper {
    border-radius: 10px
}
.ShopFooter-module__link {
    background: linear-gradient(190deg,#363636,#363636,#5b3941,150%,#9d3f57);
    box-shadow: 0 6px 10px 0 rgba(0 0 0/20%);
    padding: 0.5rem;
    border-radius: 10px
}
.DesktopCopyright-module__wrapper {
    border-radius: 10px
}
/* канец */

.Toast-module__toast.Toast-module__error .Toast-module__title {
    color: #814151
}
.Toast-module__icon {
    fill: #814151
}
.Toast-module__toast.Toast-module__success .Toast-module__title {
    color: #814151
}
.Header-module__logo {
    font-size: 23px;
    margin-left: 35px  
}
.Header-module__logo:hover {
    color: #814151;
}
.Banner-module__img {
    margin: 7px;
    max-width: 0%;
}
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.clever = factory());
})(this, (function () {
    'use strict';
    var clever = {};

    clever.e = function(tag, parameters={}) {
        return Object.assign(document.createElement(tag), parameters);
    };

    return clever;
}));

function Open(Page, usefade = true) {
  closepage();
  var div1 = document.createElement("div");
  div1.style = '';
  div1.id = 'ExtModal';
  var div2 = document.createElement("div");
  div2.className = 'modal fade show';
  if(!usefade) div2.classList.add("show");
  div2.style = '';
  div2.id = 'quit';
  var div3 = document.createElement("div");
  div3.className = "modal-dialog modal-lg";
  var div4 = document.createElement("div");
  div4.className = "modal-content";
  var div5 = document.createElement("div");
  div5.className = "modal-header";
  div5.innerHTML = '<h4 class="modal-title">'+PageCode[Page].title+'</h4>';
  var div6 = document.createElement("div");
  div6.className = "modal-body";
  div6.innerHTML = PageCode[Page].content;
  var div7 = document.createElement("div");
  div7.className = "modal-footer";
  div7.innerHTML = '<center><button class="btn btn-danger" id="quit"onclick="closepage();">Закрыть</button><center>';
  div7.style = 'background: #232323';  
  var div8 = document.createElement("div");
  div8.className = "modal-backdrop fade show";
	
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div4.appendChild(div7);
  div1.appendChild(div8);
  if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
	
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(div1);
  body.className = "modal-open";
	
  if(PageCode[Page].func != null) {
	PageCode[Page].func();
  }
}

function closepage() {
  var Modal = document.getElementById('ExtModal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}


var PageCode = new Array();

PageCode["kit-tsunami"] = {
	title: 'Привилегия "Tsunami"',
	content: '<div class="info_item_kits">\
  <div class="xbox_custom_kits" ><div class="serverheader">Кит "Tsunami" Оружие - <span>Откат 12ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/rifle.ak.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/rifle.lr300.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rifle.l96.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/weapon.mod.8x.scope.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/weapon.mod.holosight.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/weapon.mod.lasersight.png">\
    <div class="kit-item__quantity">x3</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/ammo.rifle.png">\
    <div class="kit-item__quantity">x400</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/syringe.medical.png">\
    <div class="kit-item__quantity">32</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/bandage.png">\
    <div class="kit-item__quantity">16</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/largemedkit.png">\
    <div class="kit-item__quantity">x12</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.plate.torso.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.kilt.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/tactical.gloves.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/hoodie.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/pants.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/shoes.boots.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>\
    <div class="xbox_custom_kits" ><div class="serverheader">Кит "Tsunami" Ресурсы - <span>Откат 24ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/wood.png">\
    <div class="kit-item__quantity">x40000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/stones.png">\
    <div class="kit-item__quantity">x40000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.fragments.png">\
    <div class="kit-item__quantity">x30000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/metal.refined.png">\
    <div class="kit-item__quantity">x900</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/charcoal.png">\
    <div class="kit-item__quantity">x30000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/gunpowder.png">\
    <div class="kit-item__quantity">x11000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/lowgradefuel.png">\
    <div class="kit-item__quantity">x1700</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/cloth.png">\
    <div class="kit-item__quantity">x1700</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/leather.png">\
    <div class="kit-item__quantity">x1700</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/scrap.png">\
    <div class="kit-item__quantity">x1250</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/sulfur.png">\
    <div class="kit-item__quantity">x15000</div></div></div>\
    </div></div></div>\
        <div class="xbox_custom_kits" ><div class="serverheader">Кит "Tsunami" Компоненты <span>Откат 24ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/tarp.png">\
    <div class="kit-item__quantity">x60</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/rope.png">\
    <div class="kit-item__quantity">x65</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/roadsigns.png">\
    <div class="kit-item__quantity">x55</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/riflebody.png">\
    <div class="kit-item__quantity">x25</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/smgbody.png">\
    <div class="kit-item__quantity">x25</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/semibody.png">\
    <div class="kit-item__quantity">x35</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/sheetmetal.png">\
    <div class="kit-item__quantity">x45</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/metalspring.png">\
    <div class="kit-item__quantity">x45</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/metalpipe.png">\
    <div class="kit-item__quantity">x55</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/metalblade.png">\
    <div class="kit-item__quantity">x45</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/sewingkit.png">\
    <div class="kit-item__quantity">x65</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/propanetank.png">\
    <div class="kit-item__quantity">x55</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/techparts.png">\
    <div class="kit-item__quantity">x45</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/gears.png">\
    <div class="kit-item__quantity">x55</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/door.hinged.toptier.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/door.double.hinged.toptier.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/lock.code.png">\
    <div class="kit-item__quantity">x4</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/workbench3.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/furnace.large.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/small.oil.refinery.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://rustlabs.com/img/items180/skull_fire_pit.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>'
};

PageCode["kit-hurricane"] = {
	title: 'Привилегия "Hurricane"',
	content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Hurricane" Оружие - <span>Откат 12ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rifle.ak.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rifle.bolt.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/ammo.rifle.png">\
    <div class="kit-item__quantity">x128</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/syringe.medical.png">\
    <div class="kit-item__quantity">x10</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/largemedkit.png">\
    <div class="kit-item__quantity">x6</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/explosive.timed.png">\
    <div class="kit-item__quantity">x3</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rocket.launcher.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/ammo.rocket.basic.png">\
    <div class="kit-item__quantity">x3</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.plate.torso.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.kilt.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/tactical.gloves.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/hoodie.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/pants.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/shoes.boots.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>\
    <div class="xbox_custom_kits" ><div class="serverheader">Кит "Hurricane" Ресурсы - <span>Откат 24ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/wood.png">\
    <div class="kit-item__quantity">x30000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/stones.png">\
    <div class="kit-item__quantity">x40000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.fragments.png">\
    <div class="kit-item__quantity">x40000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/gunpowder.png">\
    <div class="kit-item__quantity">x6000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/charcoal.png">\
    <div class="kit-item__quantity">x25000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/cloth.png">\
    <div class="kit-item__quantity">x2500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/leather.png">\
    <div class="kit-item__quantity">x2500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.refined.png">\
    <div class="kit-item__quantity">x1000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/scrap.png">\
    <div class="kit-item__quantity">x1500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sulfur.png">\
    <div class="kit-item__quantity">x20000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/lowgradefuel.png">\
    <div class="kit-item__quantity">x1500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/easter.goldegg.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/halloween.lootbag.large.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/gears.png">\
    <div class="kit-item__quantity">x45</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
    <div class="kit-item__quantity">x60</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metalpipe.png">\
    <div class="kit-item__quantity">x60</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metalspring.png">\
    <div class="kit-item__quantity">x60</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
    <div class="kit-item__quantity">x30</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsigns.png">\
    <div class="kit-item__quantity">x60</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/tarp.png">\
    <div class="kit-item__quantity">x60</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/riflebody.png">\
    <div class="kit-item__quantity">x15</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/smgbody.png">\
    <div class="kit-item__quantity">x20</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/semibody.png">\
    <div class="kit-item__quantity">x35</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/techparts.png">\
    <div class="kit-item__quantity">x25</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/supply.signal.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    </div></div></div>\
        <div class="xbox_custom_kits" ><div class="serverheader">Кит "Hurricane" Дом <span>Откат 24ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/mixingtable.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/snowman.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/research.table.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/gates.external.high.stone.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/wall.external.high.stone.png">\
    <div class="kit-item__quantity">x20</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/arcade.machine.chippy.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/furnace.large.png">\
    <div class="kit-item__quantity">x5</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/door.double.hinged.toptier.png">\
    <div class="kit-item__quantity">x3</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/door.hinged.toptier.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/lock.code.png">\
    <div class="kit-item__quantity">x5</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/workbench1.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/workbench2.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/workbench3.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>'
};

PageCode["kit-lighting"] = {
	title: 'Привилегия "Lighting"',
	content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Lighting" Оружие - <span>Откат 12ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/smg.mp5.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/ammo.pistol.png">\
    <div class="kit-item__quantity">x200</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/ammo.pistol.fire.png">\
    <div class="kit-item__quantity">x200</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/syringe.medical.png">\
    <div class="kit-item__quantity">x8</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/largemedkit.png">\
    <div class="kit-item__quantity">x3</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/jackhammer.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/chainsaw.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/explosive.timed.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/coffeecan.helmet.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.jacket.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.kilt.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/tactical.gloves.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/hoodie.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/pants.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/shoes.boots.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>\
    <div class="xbox_custom_kits" ><div class="serverheader">Кит "Lighting" Ресурсы - <span>Откат 24ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/wood.png">\
    <div class="kit-item__quantity">x15000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/stones.png">\
    <div class="kit-item__quantity">x25000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.fragments.png">\
    <div class="kit-item__quantity">x20000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/gunpowder.png">\
    <div class="kit-item__quantity">x4500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/charcoal.png">\
    <div class="kit-item__quantity">x10000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/cloth.png">\
    <div class="kit-item__quantity">x1500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/leather.png">\
    <div class="kit-item__quantity">x1500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/lowgradefuel.png">\
    <div class="kit-item__quantity">x600</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/scrap.png">\
    <div class="kit-item__quantity">x600</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sulfur.png">\
    <div class="kit-item__quantity">x8000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.refined.png">\
    <div class="kit-item__quantity">x300</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/easter.silveregg.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/halloween.lootbag.large.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/gears.png">\
    <div class="kit-item__quantity">x45</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
    <div class="kit-item__quantity">x40</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metalpipe.png">\
    <div class="kit-item__quantity">x40</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metalspring.png">\
    <div class="kit-item__quantity">x40</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
    <div class="kit-item__quantity">x20</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsigns.png">\
    <div class="kit-item__quantity">x40</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/tarp.png">\
    <div class="kit-item__quantity">x40</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/riflebody.png">\
    <div class="kit-item__quantity">x10</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/smgbody.png">\
    <div class="kit-item__quantity">x15</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/semibody.png">\
    <div class="kit-item__quantity">x20</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/techparts.png">\
    <div class="kit-item__quantity">x10</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/supply.signal.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>\
        <div class="xbox_custom_kits" ><div class="serverheader">Кит "Lighting" Дом <span>Откат 24ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/mixingtable.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/snowman.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/chineselantern.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/arcade.machine.chippy.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/furnace.large.png">\
    <div class="kit-item__quantity">x3</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/door.hinged.toptier.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/door.double.hinged.toptier.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/wall.frame.garagedoor.png">\
    <div class="kit-item__quantity">x3</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/lock.code.png">\
    <div class="kit-item__quantity">x5</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/workbench3.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>'
};
PageCode["kit-cloud"] = {
	title: 'Привилегя "Cloud"',
	content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Cloud" Оружие - <span>Откат 12ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rifle.semiauto.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/ammo.rifle.png">\
    <div class="kit-item__quantity">x200</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/syringe.medical.png">\
    <div class="kit-item__quantity">x6</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/largemedkit.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/icepick.salvaged.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/riot.helmet.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.jacket.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.kilt.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.gloves.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/hoodie.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/pants.png">\
    <div class="kit-item__quantity">x75</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/shoes.boots.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>\
    <div class="xbox_custom_kits" ><div class="serverheader">Кит "Cloud" Ресурсы - <span>Откат 24ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/wood.png">\
    <div class="kit-item__quantity">x8000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/stones.png">\
    <div class="kit-item__quantity">x20000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.fragments.png">\
    <div class="kit-item__quantity">x15000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/gunpowder.png">\
    <div class="kit-item__quantity">x3500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/charcoal.png">\
    <div class="kit-item__quantity">x5000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/cloth.png">\
    <div class="kit-item__quantity">x1000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/lowgradefuel.png">\
    <div class="kit-item__quantity">x500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/leather.png">\
    <div class="kit-item__quantity">x500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/scrap.png">\
    <div class="kit-item__quantity">x350</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sulfur.png">\
    <div class="kit-item__quantity">x8000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.refined.png">\
    <div class="kit-item__quantity">x300</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/gears.png">\
    <div class="kit-item__quantity">x15</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
    <div class="kit-item__quantity">x30</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metalpipe.png">\
    <div class="kit-item__quantity">x30</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metalspring.png">\
    <div class="kit-item__quantity">x30</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
    <div class="kit-item__quantity">x10</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/tarp.png">\
    <div class="kit-item__quantity">x20</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsigns.png">\
    <div class="kit-item__quantity">x30</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/riflebody.png">\
    <div class="kit-item__quantity">x5</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/smgbody.png">\
    <div class="kit-item__quantity">x8</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/semibody.png">\
    <div class="kit-item__quantity">x10</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/techparts.png">\
    <div class="kit-item__quantity">x6</div></div></div>\
    </div></div></div>\
        <div class="xbox_custom_kits" ><div class="serverheader">Кит "Cloud" Дом <span>Откат 24ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/bed.png">\
    <div class="kit-item__quantity">x4</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/wall.frame.garagedoor.png">\
    <div class="kit-item__quantity">x5</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/lock.code.png">\
    <div class="kit-item__quantity">x5</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/workbench2.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/arcade.machine.chippy.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/furnace.large.png">\
    <div class="kit-item__quantity">x2</div></div></div>\
    </div></div></div>'
};

function Open(Page, usefade = true) {
  closepage();
  
  var overlay = clever.e('div', {
    	id: 'KitsModal',
		style: 'position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, .3); backdrop-filter: blur(1rem);'
  });
 
  
  var div1 = document.createElement("div");
  div1.style = '';
  div1.id = 'ExtModal';
  var div2 = document.createElement("div");
  div2.className = 'modal fade show';
  if(!usefade) div2.classList.add("show");
  div2.style = '';
  div2.id = 'quit';
  var div3 = document.createElement("div");
  div3.className = "modal-dialog modal-lg";
  var div4 = document.createElement("div");
  div4.className = "modal-content";
  var div5 = document.createElement("div");
  div5.className = "modal-header";
  div5.innerHTML = '<h4 class="modal-title">'+PageCode[Page].title+'</h4>';
  var div6 = document.createElement("div");
  div6.className = "modal-body";
  div6.innerHTML = PageCode[Page].content;
  //div6.style = 'overflow: auto;';
  var div7 = document.createElement("div");
  div7.className = "modal-footer";
  div7.innerHTML = '<center><button class="btn btn-danger" id="quit"onclick="closepage();">Закрыть</button><center>';
  var div8 = document.createElement("div");
  div8.className = "modal-backdrop fade show";
	
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div4.appendChild(div7);
  div1.appendChild(div8);
  if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
	overlay.addEventListener("click", function(e) {
   closepage();
  });
  
  overlay.appendChild(div1);
  
  overlay.style.overflow = 'auto';
  
  var body = document.querySelector('.ModalLayout-module__modal');
  body.appendChild(overlay);
	
  if(PageCode[Page].func != null) {
	PageCode[Page].func();
  }
}

function nocopy(event) {
  var event = event || window.event;
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = true; }
  return true;
}
function closepage() {
  var Modal = document.getElementById('KitsModal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}

var currentUrl = window.location.href;

if (currentUrl.startsWith("https://storm-dev.ru/") || 
    currentUrl.startsWith("https://423443434.gamestores.app/") || 
    currentUrl.startsWith("https://storm-dev.ru/")) {

    if (window.isAppReady) {
      if (typeof shopHeader === 'function') {
        shopHeader();
      }
      shopMainPage();
      shopProfilePage();
    } else {
      window.addEventListener('appReady', () => {
        if (typeof shopHeader === 'function') {
          shopHeader();
        }
        shopMainPage();
        shopProfilePage();
      });
    }
  
} else {
      alert("ERROR: ХУЛИ ТЫ ПИЗДИШЬ МОЙ КОД БЛЯДИНА!");
      location.reload();
}

function nocopy(_0x596e16) {
  var _0x596e16 = _0x596e16 || window.event;
  if (_0x596e16.preventDefault) {
    _0x596e16.preventDefault();
  } else {
    _0x596e16.returnValue = true;
  }
  return true;
}
document.onmouseup = nocopy;
document.onmousemove = nocopy;
document.ondragstart = nocopy;
document.onselectstart = nocopy;
document.ontextmenu = nocopy;
document.oncopy = nocopy;
document.oncontextmenu = nocopy;
document.onkeydown = function (_0x10bf31) {
  if (event.keyCode == 0x7b) {
    return false;
  }
  if (_0x10bf31.ctrlKey && _0x10bf31.shiftKey && _0x10bf31.keyCode == 'I'.charCodeAt(0x0) || _0x10bf31.ctrlKey && _0x10bf31.shiftKey && _0x10bf31.keyCode == 'J'.charCodeAt(0x0)) {
    return false;
  }
  if (_0x10bf31.ctrlKey && _0x10bf31.keyCode == 'U'.charCodeAt(0x0) || _0x10bf31.ctrlKey && _0x10bf31.keyCode == 'S'.charCodeAt(0x0) || _0x10bf31.ctrlKey && _0x10bf31.keyCode == 'D'.charCodeAt(0x0)) {
    return false;
  }
};
if (window.isAppReady) {
  main();
} else {
  window.addEventListener('appReady', main);
}
