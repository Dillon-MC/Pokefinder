(this.webpackJsonppokefinder=this.webpackJsonppokefinder||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),c=n(3),i=n.n(c),s=(n(23),n(11)),d=n(12),l=n(17),h=n(16),p=(n(24),n(5)),b=function(e){var t=e.name,n=void 0===t?"":t,r=e.type,c=void 0===r?"":r,i=e.weight,s=void 0===i?"":i,d=e.hiddenAbility,l=void 0===d?"":d,h=e.baseStats,b=void 0===h?[]:h,u=e.sprite,j=void 0===u?"":u,m=e.Expand,g=void 0!==m&&m,O=e.extendCardCallback,f=Object(o.useState)({}),x=Object(p.a)(f,2),y=x[0],k=x[1],C=Object(o.useState)({}),v=Object(p.a)(C,2),w=v[0],P=v[1],S=Object(o.useState)(null),T=Object(p.a)(S,2),N=T[0],B=T[1],E=["green","blue","darkPurple","darkBlue","purple","yellow"];return Object(o.useEffect)((function(){g?(B(null),k({Card:"Card-Expand",Icon:"pokemonIcon-ShiftLeft"}),P({cardButtonStyle:"extendCardButton",cardButtonText:""}),setTimeout((function(){P({cardButtonStyle:"extendCardButton extendCardButton-Expand",cardButtonText:"Less.."});var e=b.map((function(e,t){return Object(a.jsxs)("h4",{className:E[t],children:[e.stat.name,": ",e.base_stat]},t)}));B(Object(a.jsxs)("div",{className:"infoText-Expand textShadow",children:[Object(a.jsx)("h4",{children:"Type: ".concat(c)}),Object(a.jsx)("h4",{children:"Weight: ".concat(s,"kg")}),Object(a.jsx)("h4",{children:"HA: ".concat(l)}),e]}))}),300)):(B(Object(a.jsxs)("p",{className:"ma1 infoText",children:["Type: ".concat(c),Object(a.jsx)("br",{}),"Weight: ".concat(s,"kg"),Object(a.jsx)("br",{}),"HA: ".concat(l)]})),k({Card:"Card",Icon:"pokemonIcon-ShiftCenter"}),P({cardButtonStyle:"extendCardButton",cardButtonText:"More.."}))}),[g,b]),Object(a.jsx)("div",{className:"tc br ba bw2 br3 dib Enlarge pa3 shadow-5 f4 redwhiteGradient ".concat(y.Card),children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:y.Icon,children:[Object(a.jsx)("h4",{className:"ma0 mb3",children:n}),Object(a.jsx)("img",{className:"pokemonIcon",src:j,alt:"icon"})]}),N,Object(a.jsx)("button",{onClick:O,className:w.cardButtonStyle,children:w.cardButtonText})]})})},u=function(e){var t=e.searchChange,n=e.getPokemon,o=e.text,r=e.currentPokemon;return Object(a.jsxs)("div",{className:"tc searchBox center",children:[Object(a.jsx)("input",{className:"tc bw2 bg-red white b--black br3 w-40 h3 f2 minWidth14 shadow-3 outline-0",type:"search",placeholder:"Pokemon name..",autoComplete:"on",onChange:t}),Object(a.jsx)("button",{className:"w-10 grow f4 pv2 dib red f4 b bg-white-80 ml1 br3 bw2 b--black minWidth5 shadow-3 outline-0",onClick:function(){return n(o.toLowerCase(),r)},children:"Go!"})]})},j=n.p+"static/media/pokeball.c85373b9.png",m=function(){return Object(a.jsxs)("header",{className:"bg-red h4 mt0 tc center",children:[Object(a.jsx)("h2",{className:"white f1 LondrinaOutline",children:"Pokefinder"}),Object(a.jsx)("img",{className:"pt4 pl4",alt:"pokeball",src:j,width:"70",height:"70"})]})},g=function(e){var t=e.error;return Object(a.jsx)("h3",{className:"black center",children:t})},O=n(4),f="CHANGE_SEARCH_BOX",x="TOGGLE_COMPONENT_TRANSITION",y="POKEMON_FETCH_PENDING",k="POKEMON_FETCH_SUCCESS",C="POKEMON_FETCH_FAILED",v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.onSearchChange,o=t.onGetPokemon,r=t.onComponentTransition,c={mainPage:Object(a.jsxs)("div",{id:"App",children:[Object(a.jsx)(m,{}),Object(a.jsx)(u,{searchChange:n,getPokemon:o,text:this.props.searchBox,currentPokemon:this.props.name}),Object(a.jsx)(g,{error:this.props.error})]}),cardComponent:Object(a.jsx)("div",{className:"Cards",children:Object(a.jsx)(b,{name:this.props.name,type:this.props.type,weight:this.props.weight,hiddenAbility:this.props.hiddenAbility,baseStats:this.props.baseStats,sprite:this.props.sprite,Expand:this.props.componentTransition,extendCardCallback:function(){return r(!1===e.props.componentTransition)}})}),footer:Object(a.jsxs)("footer",{className:"center white bg-black mt4 pt100",children:[Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:"https://github.com/Dillon-MC",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(a.jsx)("h4",{children:" | "}),Object(a.jsx)("h4",{children:"twitter"})]})};return""!==this.props.name?Object(a.jsxs)("div",{children:[c.mainPage,c.cardComponent,c.footer]}):Object(a.jsxs)("div",{children:[c.mainPage,c.footer]})}}]),n}(o.Component),w=Object(O.b)((function(e){return{searchBox:e.searchPokemon.searchBox,name:e.getPokemon.name,type:e.getPokemon.type,weight:e.getPokemon.weight,hiddenAbility:e.getPokemon.hiddenAbility,baseStats:e.getPokemon.baseStats,sprite:e.getPokemon.sprite,error:e.getPokemon.error,componentTransition:e.getComponentTransitionState.componentTransition}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:f,payload:n}));var n},onGetPokemon:function(t,n){return e(function(e,t){return function(n){e!==t&&(n({type:y}),fetch(fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json()})).then((function(e){void 0!==e.name?n({type:k,payload:e}):n({type:C,payload:"Invalid pokemon"})})).catch((function(e){console.log("pokemon fetch failed: ",e),n({type:C,payload:"Invalid pokemon"})}))))}}(t,n))},onComponentTransition:function(t){return e(function(e){return{type:x,payload:e}}(t))}}}))(v),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))},S=n(2),T=n(14),N={searchBox:""},B={name:"",type:"",weight:"",hiddenAbility:"",baseStats:[],sprite:"",isPending:!1,error:""},E={componentTransition:!1},_=n(15),A=(n(30),Object(T.createLogger)()),I=Object(S.c)({searchPokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object.assign({},e,{searchBox:t.payload});default:return e}},getPokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case k:var n=t.payload.sprites.other.dream_world.front_default;return null===n&&(n=t.payload.sprites.front_default),Object.assign({},e,{name:t.payload.name,type:t.payload.types[0].type.name,weight:t.payload.weight,hiddenAbility:t.payload.abilities[t.payload.abilities.length-1].ability.name,baseStats:t.payload.stats,sprite:n,error:"",isPending:!1});case C:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},getComponentTransitionState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object.assign({},e,{componentTransition:t.payload});default:return e}}}),G=Object(S.d)(I,Object(S.a)(_.a,A));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O.a,{store:G,children:Object(a.jsx)(w,{})})}),document.getElementById("root")),P()}},[[31,1,2]]]);
//# sourceMappingURL=main.59d74c81.chunk.js.map