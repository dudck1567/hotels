(this.webpackJsonpairnb=this.webpackJsonpairnb||[]).push([[0],{171:function(e,n,t){"use strict";t.r(n);var i,c,s,r,o,a,d,j,l,p,b,x,h,g,O,m=t(3),u=t.n(m),f=t(33),v=t.n(f),w=(t(89),t(11)),y=t(10),k=t(20),N=t(7),z=t(8),S=t(76),E=t.n(S),L=t(40),C=t(80),I=t(1),P=z.b.div(i||(i=Object(N.a)(["\n    // background:skyblue;\n    // box-shadow:0px 2px 2px #999;\n    padding:15px 0;\n    position:fixed; top:0; left:0; width:100%;  z-index:99;\n    border-bottom:2px solid #da272c;\n    .row {\n\n        display:flex; \n        justify-content:space-between;\n        align-items:center;\n        .logo { width: 150px;}\n        .nav {\n            .depth1 { display:flex; font-weight:bold;\n                // background:#cd272d; border-radius:50px;\n                li { margin:0 20px;  position:relative; padding:10px 15px;\n                    // .depth2 { display:none;\n                    //     position:absolute; top:100%; left:50%; transform:translateX(-50%);\n                    //     width:150px; background:#da272c; \n                    //     padding:20px 30px; border-radius:10px; \n                    //     // margin-top:3px;\n                    //     li { color:#fff; padding:5px 0;}  \n                    }\n                &:hover>.depth2{display:block}\n                }\n            }\n        }\n        .mobileNav {\n\n            position:relative;\n            button { padding:8px 15px; \n                border-radius:50px; \n                font-size:20px; \n                background:#da272c;\n                color:#fff;\n                display:flex; align-items:center;\n                .ham { margin-right:10px }\n        \n            }\n            .mobileNavList {\n                display:none; \n                position:absolute;\n                top:100%; right:0;\n                // border:1px solid #000;\n                width:150px;\n                margin-top:5px;\n                padding:10px 0px;\n                border-radius:10px; background:#cd272d; color:#fff;\n                font-family: 'Noto Sans KR', sans-serif;\n                // letter-spacing:1px;\n                &.opener { display:block }\n                ul {\n                    li { padding:0 20px; line-height:30px;\n                      &:nth-child(3) {\n                          border-top:1px solid #ddd;\n                          padding-top:10px;\n                          margin-top:10px;\n                      }\n                    }\n                }\n            }\n        }\n    }\n"]))),T=function(e){e.onSelect;var n=Object(m.useState)(!1),t=Object(k.a)(n,2),i=t[0],c=t[1],s=Object(m.useState)(0),r=Object(k.a)(s,2),o=r[0],a=r[1],d=function(){a(window.scrollY)};return Object(m.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]),Object(I.jsx)(P,{style:{background:o?"#fff":"transparent",color:"#da272c"},children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)("h1",{className:"logo",children:Object(I.jsx)(w.b,{to:"/",children:Object(I.jsx)("img",{src:"images/800px-Hotels.com_Logo.png",alt:""})})}),Object(I.jsx)("nav",{className:"nav",children:Object(I.jsxs)("ul",{className:"depth1",children:[Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/product",children:"\ud2b9\uac00\uc0c1\ud488"})}),Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/news",children:"\uc774\uc6a9\uc548\ub0b4"})}),Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/community",children:"\uc219\ubc15\uc2dc\uc124 \ub4f1\ub85d"})}),Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/about",children:"\ub9ac\uc6cc\ub4dc"})})]})}),Object(I.jsxs)("div",{className:"mobileNav",children:[Object(I.jsxs)("button",{onClick:function(){c(!i)},children:[Object(I.jsx)(L.a,{className:"ham"}),Object(I.jsx)(C.a,{className:"person"})]}),Object(I.jsx)("div",{className:E()("mobileNavList",{opener:i}),children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/login",children:"\ub85c\uadf8\uc778"})}),Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/join",children:"\ud68c\uc6d0\uac00\uc785"})}),Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/product",children:"\ud2b9\uac00\uc0c1\ud488"})}),Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/news",children:"\uc774\uc6a9\uc548\ub0b4"})}),Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/community",children:"\uc219\ubc15\uc2dc\uc124 \ub4f1\ub85d"})}),Object(I.jsx)("li",{children:Object(I.jsx)(w.b,{to:"/about",children:"\ub9ac\uc6cc\ub4dc"})})]})})]})]})})},H=t(26),K=z.b.div(c||(c=Object(N.a)(["\n   background:#444;\n   width:100%;\n   font-size:12px;\n   color:#aaa;\n   display:flex; align-items:center;\n   .row{\n       padding:25px 0px;\n       width:100%;\n       display:flex; justify-content:center; align-items:center;\n       .footerLeft{\n           width:80%; line-height:1.6;\n           p:nth-child(2),p:nth-child(5){margin-bottom:10px;}\n        }\n       .footerRight{\n           width:20%; text-align:center;\n           .phone{font-size:30px; margin-bottom:3px;}\n           p:nth-of-type(1){font-size:20px; margin-bottom:6px;}\n           p:nth-of-type(2){font-size:14px;}\n    \n    }\n"]))),B=function(){return Object(I.jsx)(K,{children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsxs)("div",{className:"footerLeft",children:[Object(I.jsx)("p",{children:"\xa9 2021 Hotels.com\uc740 Expedia Group \uacc4\uc5f4\uc0ac\uc785\ub2c8\ub2e4. All rights reserved."}),Object(I.jsx)("p",{children:"Hotels.com \ubc0f Hotels.com \ub85c\uace0\ub294 \ubbf8\uad6d \ubc0f/\ub610\ub294 \ub2e4\ub978 \uad6d\uac00\uc5d0\uc11c Hotels.com, LP\uc758 \uc0c1\ud45c \ub610\ub294 \ub4f1\ub85d \uc0c1\ud45c\uc785\ub2c8\ub2e4. \uae30\ud0c0 \ubaa8\ub4e0 \uc0c1\ud45c\ub294 \ud574\ub2f9 \uc18c\uc720\uad8c\uc790\uc758 \uc790\uc0b0\uc785\ub2c8\ub2e4."}),Object(I.jsx)("p",{children:"\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc885\ub85c5\uae38 Tower8 9\uce35, Tel: 02-3480-0145, Mail: CS@koreasupport.hotels.com"}),Object(I.jsx)("p",{children:"\ud2b8\ub798\ube14 \ud30c\ud2b8\ub108 \uc775\uc2a4\uccb4\uc778\uc9c0 \ucf54\ub9ac\uc544 \uc8fc\uc2dd\ud68c\uc0ac | \uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 123-34-01025 | \ub300\ud45c\uc774\uc0ac: \ud64d\uae38\ub3d9"}),Object(I.jsx)("p",{children:"(\uc8fc) \ud638\ud154\uc2a4\ub2f7\ucef4\ucf54\ub9ac\uc544 |\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 717-81-00091\u3163\uc0ac\uc5c5\uc790\uc815\ubcf4\ud655\uc778\u3163\ud1b5\uc2e0\ud310\ub9e4\uc5c5\uc2e0\uace0\ubc88\ud638 : 2015-\uc11c\uc6b8\uc885\ub85c-1067\ud638"}),Object(I.jsx)("p",{children:"\ud638\ud154\uc2a4\ub2f7\ucef4 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ud1b5\ud574 \uad6c\ub9e4\ud560 \uc218 \uc788\ub294 \uac8c\uc7ac \uc0c1\ud488 \ubc0f \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uc815\ubcf4\ub294 \ud310\ub9e4\uc790\uc5d0 \uc758\ud574 \uc81c\uacf5\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud638\ud154\uc2a4\ub2f7\ucef4\uc740 \uc774\uc640 \uad00\ub828\ub41c \uc815\ubcf4\uc758 \uc815\ud655\uc131\uacfc \uc644\uc804\uc131 \uc5ec\ubd80\uc5d0 \ub300\ud574 \ucc45\uc784\uc744 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]}),Object(I.jsxs)("div",{className:"footerRight",children:[Object(I.jsx)(H.c,{className:"phone"}),Object(I.jsx)("p",{children:"02-3480-0145"}),Object(I.jsx)("p",{children:"\ud638\ud154\uc2a4\ub2f7\ucef4 \uace0\uac1d\uc13c\ud130"})]})]})})},R=t(38),A=(t(96),t(81)),J=t.n(A),M=(t(112),t(62)),G=t.n(M),U=(t(113),z.b.div(s||(s=Object(N.a)(["\n    position:relative;\n    width:100%; height:100%;\n    .reserve{ \n        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);\n        z-index:1;\n        display:flex;\n        align-items:center;\n        position:absolute;\n        top:50%; left:50%;\n        transform:translate(-50%,-50%);\n        background:#fff;\n        margin:0 auto;\n        width:100%; height:280px;\n        border-radius:150px;\n        .reserveAll{\n            margin-left:80px;\n            p{ \n                color: #cd272d;\n                font-size: 32px;\n                font-weight:bold;\n                margin-bottom:30px;\n            }\n\n            .reserveBox{\n                display:flex; \n                width:1000px;\n                .locate{\n                    display:inline-block;\n                    padding-right:10px;\n                    border:1px solid rgb(118,118,118);\n                    border-radius:2px;\n                    margin-right:5px;\n                    height:50px;\n                    font-size:20px;\n                   \n                    #locate{\n                        border:none;\n                        font-size:20px;\n                        width:150px;\n                          height:48px;\n                          padding-left: 20px;\n                          ImLocation{top:}\n                    }\n    \n                } \n                #people{        \n                    height:50px; padding-left: 20px; font-size:20px;\n                    margin-right:5px;\n                    width:150px;\n                    padding-right:10px;\n                 \n                }\n                #submit{\n                    width:100px; height:50px; background:#cd272d; color:#fff; \n                    border-radius:3px; font-size:16px;\n                }\n                .react-datepicker-wrapper{\n                    margin-right:5px;\n                    input{width:100%; height:50px; font-size:20px; padding-left: 20px; color:rgb(133,133,133)}\n                }\n\n            }\n            \n          \n        }\n    }\n    .slide{ position:relative;\n        height:100vh !important;\n        background-size:cover;\n        background-repeat:no-repeat;\n        background-position:center;\n        filter: grayscale(0.4);\n\n        &.slide1{background-image:url('images/slide2.jpg')};\n        &.slide2{background-image:url('images/slide1.jpg')};\n        &.slide3{background-image:url('images/slide4.jpg')};\n        .text{\n            position:absolute; top:50%; left:50%;\n            transform:translate(-50%,-50%);\n            color:#fff; font-size:30px;\n            button{padding:10px; border:none; background:#fff; border-radius:10px;}\n        }\n    }\n    .slick-dots { position:absolute; bottom:30px; left:50%; transform:translate(-50%);\n        li{display:inline-block; padding:0 5px;\n            button{width:30px; height:30px; border-radius:50%; background:#fff;\n                text-indent:-99999px; overflow:hidden;\n            }\n            &.slick-active{ button{background:red;}}\n        }\n    };\n\n    \n\n\n"])))),_=function(){var e=Object(m.useState)(new Date),n=Object(k.a)(e,2),t=n[0],i=n[1],c=Object(m.useState)(new Date),s=Object(k.a)(c,2),r=s[0],o=s[1];return Object(I.jsxs)("div",{className:"homeWrap",children:[Object(I.jsxs)(U,{className:"article1",children:[Object(I.jsx)("div",{className:"reserve row",children:Object(I.jsxs)("div",{className:"reserveAll",children:[Object(I.jsx)("p",{children:"\ub2e4\uc591\ud55c \ud638\ud154\uc744 \ucd5c\uc801\uc758 \uc694\uae08\uc73c\ub85c \uc608\uc57d\ud574\ubcf4\uc138\uc694"}),Object(I.jsxs)("div",{className:"reserveBox",children:[Object(I.jsxs)("div",{className:"locate",children:[Object(I.jsx)("input",{type:"text",id:"locate",name:"locate",placeholder:"\ub3c4\uc2dc\uba85"}),Object(I.jsx)(H.b,{})]}),Object(I.jsx)(G.a,{class:"kim",selected:t,onChange:function(e){return i(e)}}),Object(I.jsx)(G.a,{class:"kim",selected:r,onChange:function(e){return o(e)}}),Object(I.jsx)("input",{type:"number",id:"people",name:"people",placeholder:"\uc778\uc6d0",min:"0"}),Object(I.jsx)("button",{type:"submit",id:"submit",children:"\uac80\uc0c9"})]})]})}),Object(I.jsxs)(J.a,Object(R.a)(Object(R.a)({},{dots:!1,infinite:!0,speed:3e3,autoplay:!0,autoplaySpeed:8e3,slidesToShow:1,slidesToScroll:1,arrows:!1}),{},{children:[Object(I.jsx)("div",{className:"slide slide1"}),Object(I.jsx)("div",{className:"slide slide2"}),Object(I.jsx)("div",{className:"slide slide3"})]}))]}),Object(I.jsx)("div",{className:"article2",children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)("h2",{children:"\uc5b4\ub514\uc5d0\uc11c\ub098, \uc5ec\ud589\uc740 \uc0b4\uc544\ubcf4\ub294\uac70\uc57c!"}),Object(I.jsxs)("ul",{className:"local",children:[Object(I.jsx)("li",{children:Object(I.jsxs)("a",{href:"#",children:[Object(I.jsx)("img",{src:"images/hotel1.jpg",alt:""}),Object(I.jsx)("div",{children:Object(I.jsx)("strong",{children:"\ub9ac\uc870\ud2b8"})})]})}),Object(I.jsx)("li",{children:Object(I.jsxs)("a",{href:"#",children:[Object(I.jsx)("img",{src:"images/hotel1.jpg",alt:""}),Object(I.jsx)("div",{children:Object(I.jsx)("strong",{children:"\uc544\ud30c\ud2b8"})})]})}),Object(I.jsx)("li",{children:Object(I.jsxs)("a",{href:"#",children:[Object(I.jsx)("img",{src:"images/hotel1.jpg",alt:""}),Object(I.jsx)("div",{children:Object(I.jsx)("strong",{children:"\ud638\ud154"})})]})}),Object(I.jsx)("li",{children:Object(I.jsxs)("a",{href:"#",children:[Object(I.jsx)("img",{src:"images/hotel1.jpg",alt:""}),Object(I.jsx)("div",{children:Object(I.jsx)("strong",{children:"\uac8c\uc2a4\ud2b8\ud558\uc6b0\uc2a4"})})]})}),Object(I.jsx)("li",{children:Object(I.jsxs)("a",{href:"#",children:[Object(I.jsx)("img",{src:"images/hotel1.jpg",alt:""}),Object(I.jsx)("div",{children:Object(I.jsx)("strong",{children:"\ud638\uc2a4\ud154"})})]})}),Object(I.jsx)("li",{children:Object(I.jsxs)("a",{href:"#",children:[Object(I.jsx)("img",{src:"images/hotel1.jpg",alt:""}),Object(I.jsx)("div",{children:Object(I.jsx)("strong",{children:"\ub8cc\uce78"})})]})})]})]})}),Object(I.jsxs)("div",{className:"article3",children:[Object(I.jsx)("h2",{children:"\ub2f5\ub2f5\ud560 \ub54c \ub5a0\ub098\ub294 \uad6d\ub0b4 \uc5ec\ud589\uc9c0 TOP4"}),Object(I.jsxs)("div",{className:"row",children:[Object(I.jsxs)("div",{className:"left",children:[Object(I.jsx)("img",{src:"images/seoul2.jpg",alt:""}),Object(I.jsx)("p",{children:"\uc11c\uc6b8 SEOUL"})]}),Object(I.jsxs)("div",{className:"right",children:[Object(I.jsxs)("div",{className:"rightRow1",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:"images/gang.jpg",alt:""}),Object(I.jsx)("p",{children:"\uac15\ub989 GANGNEUNG"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:"images/busan1.jpg",alt:""}),Object(I.jsx)("p",{children:"\ubd80\uc0b0 BUSAN"})]})]}),Object(I.jsxs)("div",{className:"rightRow2",children:[Object(I.jsx)("img",{src:"images/jeju.jpg",alt:""}),Object(I.jsx)("p",{children:"\uc81c\uc8fc JEJU"})]})]})]})]})]})},D=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(T,{}),Object(I.jsx)(_,{}),Object(I.jsx)(B,{})]})},W=z.b.div(r||(r=Object(N.a)(["\n    border-top:74px solid fff;\n    \n    .row{\n        height:100vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        h2{font-size: 30px; text-align:center}\n    }\n"]))),F=function(e){var n=e.children;return Object(I.jsxs)("div",{children:[Object(I.jsx)(T,{}),Object(I.jsx)(W,{children:Object(I.jsx)("div",{className:"row",children:Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"MEMBERSHIP"}),n]})})}),Object(I.jsx)(B,{})]})},V=z.b.button(o||(o=Object(N.a)(["\n    width:100%;\n    padding:15px 10px;\n    color:#fff;\n    background:#333;\n    border-radius:10px;\n    border:none;\n    margin-top: 20px;\n    &:hover{background:#999;}\n   \n"]))),X=function(e){return Object(I.jsx)(V,Object(R.a)({},e))},Y=z.b.div(a||(a=Object(N.a)(["\n    max-width:500px; margin-left:auto; margin-right:auto;\n    h3{font-size:40px; text-align:center; margin:30px 0;}\n"]))),q=z.b.input(d||(d=Object(N.a)(["\n    width:100%; padding:15px 10px; border-radius:10px;\n    border:1px solid #555; margin-bottom:20px;\n"]))),Q=z.b.div(j||(j=Object(N.a)(["\n    text-align:right;\n    margin-top:20px;\n    a{color:#da272c; \n    // text-decoration:underline;\n    }\n"]))),Z={login:"\ub85c\uadf8\uc778",join:"\ud68c\uc6d0\uac00\uc785"},$=function(e){var n=e.type,t=Z[n];return Object(I.jsxs)(Y,{children:[Object(I.jsx)("h3",{children:t}),Object(I.jsxs)("form",{children:["join"===n&&Object(I.jsx)(q,{type:"text",placeholder:"\uc774\ub984",name:"username"}),Object(I.jsx)(q,{type:"text",placeholder:"\uc544\uc774\ub514",name:"userid"}),Object(I.jsx)(q,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",name:"password"}),"join"===n&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(q,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",name:"passok"}),Object(I.jsx)("label",{children:"\uc131\ubcc4 : "})," \ub0a8 ",Object(I.jsx)("input",{type:"radio",name:"gender",value:"M"})," \uc5ec ",Object(I.jsx)("input",{type:"radio",name:"gender",value:"W"})]}),Object(I.jsx)(X,{type:"submit",children:t})]}),Object(I.jsx)(Q,{children:"login"===n?Object(I.jsx)(w.b,{to:"/join",children:"\ud68c\uc6d0\uac00\uc785"}):Object(I.jsx)(w.b,{to:"/login",children:"\ub85c\uadf8\uc778"})})]})},ee=function(){return Object(I.jsx)("div",{children:Object(I.jsx)(F,{children:Object(I.jsx)($,{type:"login"})})})},ne=function(){return Object(I.jsx)("div",{children:Object(I.jsx)("div",{children:Object(I.jsx)(F,{children:Object(I.jsx)($,{type:"join"})})})})},te=t(48),ie=z.b.div(l||(l=Object(N.a)(["\n   width:100%;\n   border-top:74px solid #fff;\n   border-bottom:1px solid #ddd;\n   font-family: 'Noto Sans KR', sans-serif;\n   width:100%;\n   display:flex;\n   padding-bottom:30px;\n   margin-bottom:30px; align-items:center;\n   img{width:25%; padding-left:20px;}\n   div:nth-of-type(1){\n       width:60%;\n       padding:0 30px;\n       p:nth-child(1){font-size:28px;}\n       p:nth-child(2){font-size:14px; margin:3px 0 30px; color:#888;}\n       p:nth-child(3){\n           font-size:12px; \n           display:inline-block;\n           margin:5px 0; padding:4px 6px;  \n           color:#fff; background:#218241; border-radius:4px;\n        }\n        p:nth-child(4){font-size:14px;}\n   }\n   div:nth-of-type(2){\n       width:40%;\n       text-align:right;\n       padding-right:20px;\n     button{ \n         background:#da272c; color:#fff; padding: 16px 30px; font-size:18px; border-radius:50px;\n        \n        }\n   }\n"]))),ce=function(e){var n=e.name,t=e.depart,i=e.score,c=e.about,s=e.photo;return Object(I.jsxs)(ie,{children:[Object(I.jsx)("img",{src:s,alt:c}),Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{children:n}),Object(I.jsx)("p",{children:t}),Object(I.jsx)("p",{children:i}),Object(I.jsx)("p",{children:c})]}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{children:"\uc9c0\uae08 \uc608\uc57d"})})]})},se=z.b.div(p||(p=Object(N.a)(["\n    border-top:74px solid #fff;\n    .tabs{display:flex; justify-content:center;}\n    .content{display:flex; flex-wrap:wrap}\n"]))),re=[{id:0,title:"\uc11c\uc6b8",part:te.part1},{id:1,title:"\uc18d\ucd08",part:te.part2},{id:2,title:"\ubd80\uc0b0",part:te.part3}],oe=z.b.div(b||(b=Object(N.a)(["\n    padding:8px 20px; border-radius:10px;\n    cursor:pointer; margin :50px 20px;\n    ","\n"])),(function(e){return e.active&&Object(z.a)(x||(x=Object(N.a)(["background:#333; color:#fff;"])))})),ae=function(e){var n=e.onSelect,t=e.activeTab;return Object(I.jsx)(se,{children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)("div",{className:"tabs",children:re.map((function(e){return Object(I.jsx)(oe,{active:t===e.id,onClick:function(){return n(e.id)},children:e.title},e.id)}))}),Object(I.jsx)("div",{className:"content",children:re[t].part.map((function(e,n){return Object(I.jsx)(ce,{name:e.name,depart:e.depart,score:e.score,about:e.about,photo:e.photo},n)}))})]})})},de=function(){var e=Object(m.useState)(0),n=Object(k.a)(e,2),t=n[0],i=n[1],c=Object(m.useCallback)((function(e){i(e)}),[]);return Object(I.jsxs)("div",{children:[Object(I.jsx)(T,{onSelect:c}),Object(I.jsx)(ae,{onSelect:c,activeTab:t}),Object(I.jsx)(B,{})]})},je=z.b.div(h||(h=Object(N.a)(["\n    border-top:74px solid #fff;\n    height:100vh;\n    text-align:center;\n    display:flex; justify-content:center; align-items:center; \n    img{\n       width:500px; margin-bottom:20px;\n    }\n    h2{font-size:30px; font-weight:bold; color:#cd272d; margin-bottom:15px;}\n    p{line-height:1.6; color:#888;}\n"]))),le=function(){return Object(I.jsx)(je,{children:Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:"images/800px-Hotels.com_Logo.png",alt:""}),Object(I.jsx)("h2",{children:"\ud398\uc774\uc9c0 \uc11c\ube44\uc2a4 \uc900\ube44\uc911\uc785\ub2c8\ub2e4."}),Object(I.jsxs)("p",{children:["\ubcf4\ub2e4 \ub098\uc740 \uc11c\ube44\uc2a4 \uc81c\uacf5\uc744 \uc704\ud558\uc5ec \ud398\uc774\uc9c0 \uc900\ube44\uc911\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.",Object(I.jsx)("br",{}),"\ube60\ub978 \uc2dc\uc77c\ub0b4\uc5d0 \uc900\ube44\ud558\uc5ec \ucc3e\uc544\ubd59\uaca0\uc2b5\ub2c8\ub2e4."]})]})})},pe=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(T,{}),Object(I.jsx)(le,{}),Object(I.jsx)(B,{})]})},be=z.b.div(g||(g=Object(N.a)(["\n    border-top:74px solid #fff;\n    height:100vh;\n    text-align:center;\n    display:flex; justify-content:center; align-items:center; \n    img{\n       width:500px; margin-bottom:20px;\n    }\n    h2{font-size:30px; font-weight:bold; color:#cd272d; margin-bottom:15px;}\n    p{line-height:1.6; color:#888;}\n"]))),xe=function(){return Object(I.jsx)(be,{children:Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:"images/800px-Hotels.com_Logo.png",alt:""}),Object(I.jsx)("h2",{children:"\ud398\uc774\uc9c0 \uc11c\ube44\uc2a4 \uc900\ube44\uc911\uc785\ub2c8\ub2e4."}),Object(I.jsxs)("p",{children:["\ubcf4\ub2e4 \ub098\uc740 \uc11c\ube44\uc2a4 \uc81c\uacf5\uc744 \uc704\ud558\uc5ec \ud398\uc774\uc9c0 \uc900\ube44\uc911\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.",Object(I.jsx)("br",{}),"\ube60\ub978 \uc2dc\uc77c\ub0b4\uc5d0 \uc900\ube44\ud558\uc5ec \ucc3e\uc544\ubd59\uaca0\uc2b5\ub2c8\ub2e4."]})]})})},he=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(T,{}),Object(I.jsx)(xe,{}),Object(I.jsx)(B,{})]})},ge=t(84),Oe=z.b.div(O||(O=Object(N.a)(["\n    border-top:74px solid #fff;\n    height:100vh;\n    display:flex; align-items:center;\n    .row{\n        text-align:center; \n        .rewardTitle{\n            h1{font-size:30px; margin-bottom:5px;}\n            p{color:#777}\n        }\n        .rewardExplain{\n            ul{\n                margin:50px 0;\n                display:flex;\n\n                li{\n                    flex:1; margin: 40px 100px 40px 0; padding:0 8px;\n                    h3{font-size: 18px; margin-bottom:10px;}\n                    div{\n                        margin:0px auto 30px;\n                        display:flex; justify-content:center; align-items:center; \n                        width:200px; height:200px; \n                        font-size:90px; \n                        background:#e6ffff; border-radius:50%; color:#81b9bf;\n                        \n                    }\n                    p{color:#777}\n                    &:nth-child(3){margin-right:0;}\n                }\n            }\n        }\n        .rewardBtn{\n            font-size:18px; font-weight:bold; color:#156bc1;\n            button{\n                font-size:18px; font-weight:bold;\n                &:nth-of-type(1){\n                    margin-right:30px; padding: 10px 20px; border-radius:50px;\n                    background:#156bc1; color:#fff;\n                    &:hover{background:#125ca5;}\n                } \n            }\n        }   \n\n\n    }\n"]))),me=function(){return Object(I.jsx)(Oe,{children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsxs)("div",{className:"rewardTitle",children:[Object(I.jsx)("h1",{children:"\uc989\uc2dc \ud560\uc778, \ub9ac\uc6cc\ub4dc* \uc219\ubc15 \ub4f1 \ub2e4\uc591\ud55c \ud61c\ud0dd\uc744 \ub204\ub9ac\uc138\uc694!"}),Object(I.jsx)("p",{children:"\ub9ac\uc6cc\ub4dc \ud504\ub85c\uadf8\ub7a8\uc744 \ucd5c\ub300\ud55c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc138\uc694."})]}),Object(I.jsx)("div",{className:"rewardExplain",children:Object(I.jsxs)("ul",{children:[Object(I.jsxs)("li",{children:[Object(I.jsx)("div",{children:Object(I.jsx)(L.b,{})}),Object(I.jsx)("h3",{children:"\uc989\uc2dc \ud560\uc778"}),Object(I.jsx)("p",{children:"\uc5c4\uc120\ub41c \uc219\ubc15 \uc2dc\uc124\uc744 \ube44\ubc00 \uac00\uaca9\uc73c\ub85c \ub354 \uc800\ub834\ud558\uac8c \uc608\uc57d\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),Object(I.jsxs)("li",{children:[Object(I.jsx)("div",{children:Object(I.jsx)(H.a,{})}),Object(I.jsx)("h3",{children:"\ub9ac\uc6cc\ub4dc* 1\ubc15 \ud61c\ud0dd"}),Object(I.jsx)("p",{children:"10\ubc15\uc744 \uc219\ubc15\ud560 \ub54c\ub9c8\ub2e4 \ub4dc\ub9bd\ub2c8\ub2e4."})]}),Object(I.jsxs)("li",{children:[Object(I.jsx)("div",{children:Object(I.jsx)(ge.a,{})}),Object(I.jsx)("h3",{children:"\ub2e4\uc591\ud55c VIP Access \ud61c\ud0dd"}),Object(I.jsx)("p",{children:"Silver \ud68c\uc6d0\uc774 \ub418\uba74 \ub354 \ub9ce\uc740 \ud61c\ud0dd\uc744 \ubc1b\uc73c\uc2e4 \uc218 \uc788\uc5b4\uc694."})]})]})}),Object(I.jsxs)("div",{className:"rewardBtn",children:[Object(I.jsx)("button",{children:"\uc9c0\uae08 \uac00\uc785"}),Object(I.jsx)(w.b,{to:"/Login",children:"\ub85c\uadf8\uc778"})]})]})})},ue=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(T,{}),Object(I.jsx)(me,{}),Object(I.jsx)(B,{})]})},fe=function(){return Object(m.useEffect)((function(){window.onbeforeunload=function(){window.scrollTo(0,0)}}),[]),Object(I.jsxs)(w.a,{children:[Object(I.jsx)(y.a,{path:"/",component:D,exact:!0}),Object(I.jsx)(y.a,{path:"/login",component:ee}),Object(I.jsx)(y.a,{path:"/join",component:ne}),Object(I.jsx)(y.a,{path:"/product",component:de}),Object(I.jsx)(y.a,{path:"/news",component:pe}),Object(I.jsx)(y.a,{path:"/community",component:he}),Object(I.jsx)(y.a,{path:"/about",component:ue})]})};v.a.render(Object(I.jsx)(u.a.StrictMode,{children:Object(I.jsx)(fe,{})}),document.getElementById("root"))},48:function(e){e.exports=JSON.parse('{"part1":[{"name":"\ubca0\uc2a4\ud2b8 \uc6e8\uc2a4\ud134 \ud504\ub9ac\ubbf8\uc5b4 \uac15\ub0a8","depart":"\uac15\ub0a8\uad6c \ubd09\uc740\uc0ac\ub85c 139, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, 135-010, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, \ub300\ud55c\ubbfc\uad6d","score":"\ud6cc\ub96d\ud568","about":"\ubb34\ub8cc \uc8fc\ucc28, \uacf5\ud56d \uad50\ud1b5\ud3b8, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791, \ubc14, \uc778\ud130\ub137","photo":"images/hotel2.jpg"},{"name":"\ud3ec \ud3ec\uc778\uce20 \ubc14\uc774 \uc250\ub77c\ud1a4 \uc11c\uc6b8, \uba85\ub3d9","depart":"\uc911\uad6c \uc800\ub3d92\uac00 81, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, 100-032, \ub300\ud55c\ubbfc\uad6d","score":"\ucd5c\uace0 \uc88b\uc74c","about":"\uace0\uac1d\'s PICK, \uc8fc\ucc28 \uac00\ub2a5, \ub808\uc2a4\ud1a0\ub791, \ubc14, \uc778\ud130\ub137","photo":"images/hotel5.jpg"},{"name":"\ube44\uc2a4\ud0c0 \uc6cc\ucee4\ud790 \uc11c\uc6b8","depart":"\uad11\uc9c4\uad6c \uc6cc\ucee4\ud790\ub85c 177, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, 04963, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \ud6cc\ub96d\ud568","about":"\uace0\uac1d\'s PICK, \uc218\uc601\uc7a5, \uc8fc\ucc28 \uac00\ub2a5, \uc2a4\ud30c, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791, \ubc14","photo":"images/hotel4.jpg"},{"name":"\ub86f\ub370\uc2dc\ud2f0\ud638\ud154 \uba85\ub3d9","depart":"\uc911\uad6c \uc0bc\uc77c\ub300\ub85c 362, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, 100-220, \ub300\ud55c\ubbfc\uad6d","score":"\ud6cc\ub96d\ud568","about":"\ubb34\ub8cc \uc8fc\ucc28, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791, \uc778\ud130\ub137","photo":"images/hotel3.jpg"},{"name":"\ub86f\ub370\uc2dc\ud2f0\ud638\ud154 \uae40\ud3ec\uacf5\ud56d","depart":"\uac15\uc11c\uad6c \ud558\ub298\uae38 38, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, 157-221, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, \ub300\ud55c\ubbfc\uad6d","score":"\ud6cc\ub96d\ud568","about":"\uace0\uac1d\'s PICK, \uc8fc\ucc28 \uac00\ub2a5, \ub808\uc2a4\ud1a0\ub791, \ubc14, \uc778\ud130\ub137","photo":"images/hotel6.jpg"},{"name":"\uba54\ub9ac\uc5b4\ud2b8 \uc774\uadf8\uc81c\ud050\ud2f0\ube0c \uc544\ud30c\ud2b8\uba3c\ud2b8 \uc11c\uc6b8","depart":"\uc601\ub4f1\ud3ec\uad6c \uc5ec\uc758\ub300\ub85c 8, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, 150 881, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \ud6cc\ub96d\ud568","about":"\uace0\uac1d\'s PICK, \uc8fc\ucc28 \uac00\ub2a5, \ub808\uc2a4\ud1a0\ub791, \ubc14, \uc778\ud130\ub137","photo":"images/hotel7.jpg"}],"part2":[{"name":"\ub86f\ub370\ub9ac\uc870\ud2b8\uc18d\ucd08","depart":"\ub300\ud3ec\ud56d\uae38 186, \uc18d\ucd08\uc2dc, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \ud6cc\ub96d\ud568","about":"\uace0\uac1d\'s PICK, \ubb34\ub8cc \uc8fc\ucc28, \uc2a4\ud30c, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791, \ubc14","photo":"images/sok1.jpg"},{"name":"\ub378\ud53c\ub178","depart":"\ubbf8\uc2dc\ub839\uc61b\uae38 1153, \uace0\uc131\uad70, \uac15\uc6d0\ub3c4, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \uc88b\uc74c","about":"\uc218\uc601\uc7a5, \ubb34\ub8cc \uc8fc\ucc28, \uc2a4\ud30c, \ub808\uc2a4\ud1a0\ub791, \uc695\uc870, \uc778\ud130\ub137","photo":"images/sok2.jpg"},{"name":"\uc18d\ucd08 \ub9c8\ub9ac\ub098\ubca0\uc774 \ud638\ud154","depart":"\uccad\ucd08\ud638\ubc18\ub85c 24, \uc18d\ucd08\uc2dc, 24885, \uac15\uc6d0\ub3c4, \ub300\ud55c\ubbfc\uad6d","score":"\uc88b\uc74c","about":"\uc218\uc601\uc7a5, \ubb34\ub8cc \uc8fc\ucc28, \ubc14","photo":"images/sok3.jpg"},{"name":"\ub099\uc0b0 \ube44\uce58 \ud638\ud154","depart":"\uac15\ud604\uba74 \ub099\uc0b0\uc0ac\ub85c 73, \uc591\uc591\uad70, 25008, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \uc88b\uc74c","about":"\ubb34\ub8cc \uc8fc\ucc28, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791","photo":"images/sok4.jpg"},{"name":"\uc18d\ucd08 \ub77c\ub9c8\ub2e4\ud638\ud154","depart":"\ub300\ud3ec\ud56d\ud76c\ub9dd\uae38 106, \uc18d\ucd08\uc2dc, 24901, \uac15\uc6d0\ub3c4, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \uc88b\uc74c","about":"\uc218\uc601\uc7a5, \ubb34\ub8cc \uc8fc\ucc28, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791","photo":"images/sok5.jpg"},{"name":"\uc36c\ub77c\uc774\uc988 \ud638\ud154","depart":"\uccad\ucd08\ud638\ubc18\ub85c 291, \uc18d\ucd08\uc2dc, 24837, \uac15\uc6d0\ub3c4, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \uc88b\uc74c","about":"\ubb34\ub8cc \uc8fc\ucc28","photo":"images/sok6.jpg"}],"part3":[{"name":"\uace8\ub4e0\ud2a4\ub9bd \ud574\uc6b4\ub300 \ud638\ud154&\uc2a4\uc704\ud2b8","depart":"\ud574\uc6b4\ub300\uad6c \ud574\uc6b4\ub300\ud574\ubcc0\ub85c 322, \ubd80\uc0b0\uad11\uc5ed\uc2dc, 48099, \ub300\ud55c\ubbfc\uad6d","score":"\ud6cc\ub96d\ud568","about":"\ubb34\ub8cc \uc8fc\ucc28, \uc2a4\ud30c, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791, \ubc14","photo":"images/busan9.jpg"},{"name":"\ub77c\ubc1c\uc2a4\ud638\ud154","depart":"\ubd09\ub798\ub098\ub8e8\ub85c 82, \ubd80\uc0b0\uad11\uc5ed\uc2dc, 49033, \ub300\ud55c\ubbfc\uad6d","score":"\ucd5c\uace0 \uc88b\uc74c","about":"\uace0\uac1d\'s PICK, \uc8fc\ucc28 \uac00\ub2a5, \ub808\uc2a4\ud1a0\ub791, \ubc14, \uc778\ud130\ub137","photo":"images/busan2.jpg"},{"name":"\ud30c\ub77c\ub2e4\uc774\uc2a4 \ud638\ud154 \ubd80\uc0b0","depart":"\ud574\uc6b4\ub300\uad6c \ud574\uc6b4\ub300\ud574\ubcc0\ub85c 296, \ubd80\uc0b0\uad11\uc5ed\uc2dc, 612-010, \ubd80\uc0b0\uad11\uc5ed\uc2dc, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \ud6cc\ub96d\ud568","about":"\uc218\uc601\uc7a5, \uc8fc\ucc28 \uac00\ub2a5, \uacf5\ud56d \uad50\ud1b5\ud3b8, \uc2a4\ud30c, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791","photo":"images/busan3.jpg"},{"name":"\ub86f\ub370 \ud638\ud154 \ubd80\uc0b0","depart":"\ubd80\uc0b0\uc9c4\uad6c \uac00\uc57c\ub300\ub85c 772, \ubd80\uc0b0\uad11\uc5ed\uc2dc, 614-030, \ubd80\uc0b0\uad11\uc5ed\uc2dc, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \ud6cc\ub96d\ud568","about":"\uc218\uc601\uc7a5, \uc8fc\ucc28 \uac00\ub2a5, \uacf5\ud56d \uad50\ud1b5\ud3b8, \uc2a4\ud30c, \ud53c\ud2b8\ub2c8\uc2a4, \ub808\uc2a4\ud1a0\ub791","photo":"images/busan4.jpg"},{"name":"\ucf54\uc624\ub871 \uc528\ud074\ub77c\uc6b0\ub4dc \ud638\ud154","depart":"\ud574\uc6b4\ub300\uad6c \ud574\uc6b4\ub300\ud574\ubcc0\ub85c 287, \ubd80\uc0b0\uad11\uc5ed\uc2dc, 48095, \ub300\ud55c\ubbfc\uad6d","score":"\uc88b\uc74c","about":"\uc218\uc601\uc7a5, \uc8fc\ucc28 \uac00\ub2a5, \ub808\uc2a4\ud1a0\ub791","photo":"images/busan5.jpg"},{"name":"\ubca0\uc2a4\ud2b8\ub8e8\uc774\uc2a4\ud574\ubc00\ud134\ud638\ud154 \ud574\uc6b4\ub300","depart":"\ud574\uc6b4\ub300\ud574\ubcc0\ub85c209\ubc88\uac00\uae38 8, \ubd80\uc0b0\uad11\uc5ed\uc2dc, 612-821, \ubd80\uc0b0\uad11\uc5ed\uc2dc, \ub300\ud55c\ubbfc\uad6d","score":"\ub9e4\uc6b0 \uc88b\uc74c","about":"\uc8fc\ucc28 \uac00\ub2a5, \uc778\ud130\ub137","photo":"images/busan6.jpg"}]}')},89:function(e,n,t){},96:function(e,n,t){}},[[171,1,2]]]);
//# sourceMappingURL=main.0f479500.chunk.js.map