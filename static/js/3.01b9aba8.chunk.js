(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{373:function(e,t,a){e.exports={userPhoto:"Users_userPhoto__3RHY6",currentPage:"Users_currentPage__2d4pn",page:"Users_page__3HgJC",pagination:"Users_pagination__1NIZC",active:"Users_active__1yaYg",wrapper:"Users_wrapper__14qR-",container:"Users_container__3qfIc"}},374:function(e,t,a){e.exports=a.p+"static/media/cover_1.8b958cff.jpg"},375:function(e,t,a){e.exports=a.p+"static/media/cover_2.83ceb11f.jpg"},376:function(e,t,a){e.exports=a.p+"static/media/cover_3.d700f57f.jpg"},377:function(e,t,a){e.exports=a.p+"static/media/cover_4.9ddd5e8f.jpg"},378:function(e,t,a){e.exports=a.p+"static/media/cover_5.a60109e6.jpg"},379:function(e,t,a){e.exports=a.p+"static/media/cover_6.108f1fa3.jpg"},380:function(e,t,a){e.exports=a.p+"static/media/cover_7.1eb0268d.jpg"},381:function(e,t,a){e.exports=a.p+"static/media/cover_8.0f836f3a.jpg"},382:function(e,t,a){e.exports={widget_author:"UserCard_widget_author__1FTf-",widget_heading:"UserCard_widget_heading__3Zz_l",btns:"UserCard_btns__3PrJa",btn_primary:"UserCard_btn_primary__3Qr1b",btn_secondary:"UserCard_btn_secondary__3pdMV",widget_main:"UserCard_widget_main__1n5-h",widget_main_name:"UserCard_widget_main_name__36GZh",widget_main_status:"UserCard_widget_main_status__NKZkC"}},383:function(e,t,a){e.exports={wrapper:"Paginator_wrapper__9vbNB"}},386:function(e,t,a){"use strict";a.r(t);var o=a(13),n=a(160),r=a(50),i=a(51),s=a(54),c=a(53),l=a(1),d=a.n(l),p=a(373),u=a.n(p),m=a(22),g=a(94),b=a.n(g),f=a(374),h=a.n(f),v=a(375),_=a.n(v),y=a(376),O=a.n(y),j=a(377),w=a.n(j),C=a(378),x=a.n(C),P=a(379),N=a.n(P),k=a(380),U=a.n(k),E=a(381),z=a.n(E),$=a(382),S=a.n($),B=d.a.memo((function(e){var t={backgroundImage:"url("+function(){var e=[h.a,_.a,O.a,w.a,x.a,N.a,U.a,z.a];return e[Math.floor(Math.random()*e.length)]}()+")"};return d.a.createElement("div",{className:S.a.widget_author},d.a.createElement("div",{className:S.a.widget_heading,style:t},d.a.createElement(m.b,{to:"/profile/"+e.user.id},d.a.createElement("img",{src:void 0==e.user.photos.small?b.a:e.user.photos.small,alt:"Photo of user",className:S.a.userPhoto})),d.a.createElement("div",{className:S.a.btns},e.user.followed?d.a.createElement("button",{className:S.a.btn_primary,disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollowUser(e.user.id)}},"Following"):d.a.createElement("button",{className:S.a.btn_secondary,disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.followUser(e.user.id)}},"Follow"))),d.a.createElement("div",{className:S.a.widget_main},d.a.createElement("h4",{className:S.a.widget_main_name},e.user.name),d.a.createElement("div",{className:S.a.widget_main_status},e.user.status?"@".concat(e.user.status):"No status")))})),M=a(2),I=a(367),L=a(97);var R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(I.a)(e,Object(M.a)({defaultTheme:L.a},t))},F=a(9),V=(a(4),a(19)),T=a(27),A=a(64),J=a(98);function W(e){var t=e.controlled,a=e.default,o=(e.name,e.state,l.useRef(void 0!==t).current),n=l.useState(a),r=n[0],i=n[1];return[o?t:r,l.useCallback((function(e){o||i(e)}),[])]}var Z=a(41),q=a(183),G=a(370),H=a(372),Y=Object(H.a)(l.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),D=Object(H.a)(l.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),K=Object(H.a)(l.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),Q=Object(H.a)(l.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),X=a(45),ee=l.forwardRef((function(e,t){var a=e.classes,o=e.className,n=e.color,r=void 0===n?"standard":n,i=e.component,s=e.disabled,c=void 0!==s&&s,d=e.page,p=e.selected,u=void 0!==p&&p,m=e.shape,g=void 0===m?"round":m,b=e.size,f=void 0===b?"medium":b,h=e.type,v=void 0===h?"page":h,_=e.variant,y=void 0===_?"text":_,O=Object(F.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),j=("rtl"===Object(q.a)().direction?{previous:Q,next:K,last:Y,first:D}:{previous:K,next:Q,first:Y,last:D})[v];return"start-ellipsis"===v||"end-ellipsis"===v?l.createElement("div",{ref:t,className:Object(V.a)(a.root,a.ellipsis,c&&a.disabled,"medium"!==f&&a["size".concat(Object(X.a)(f))])},"\u2026"):l.createElement(G.a,Object(M.a)({ref:t,component:i,disabled:c,focusVisibleClassName:a.focusVisible,className:Object(V.a)(a.root,a.page,a[y],a[g],o,"standard"!==r&&a["".concat(y).concat(Object(X.a)(r))],c&&a.disabled,u&&a.selected,"medium"!==f&&a["size".concat(Object(X.a)(f))])},O),"page"===v&&d,j?l.createElement(j,{className:a.icon}):null)})),te=Object(T.a)((function(e){return{root:Object(M.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(Z.c)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(Z.c)(e.palette.primary.main,.5)),backgroundColor:Object(Z.c)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(Z.c)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(Z.c)(e.palette.secondary.main,.5)),backgroundColor:Object(Z.c)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(Z.c)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(ee);function ae(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var oe=l.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,o=e.className,n=e.color,r=void 0===n?"standard":n,i=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),s=void 0===i?ae:i,c=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),d=void 0===c?function(e){return l.createElement(te,e)}:c,p=e.shape,u=void 0===p?"round":p,m=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),g=void 0===m?"medium":m,b=e.variant,f=void 0===b?"text":b,h=Object(F.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,r=e.count,i=void 0===r?1:r,s=e.defaultPage,c=void 0===s?1:s,l=e.disabled,d=void 0!==l&&l,p=e.hideNextButton,u=void 0!==p&&p,m=e.hidePrevButton,g=void 0!==m&&m,b=e.onChange,f=e.page,h=e.showFirstButton,v=void 0!==h&&h,_=e.showLastButton,y=void 0!==_&&_,O=e.siblingCount,j=void 0===O?1:O,w=Object(F.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),C=W({controlled:f,default:c,name:n,state:"page"}),x=Object(J.a)(C,2),P=x[0],N=x[1],k=function(e,t){f||N(t),b&&b(e,t)},U=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},E=U(1,Math.min(a,i)),z=U(Math.max(i-a+1,a+1),i),$=Math.max(Math.min(P-j,i-a-2*j-1),a+2),S=Math.min(Math.max(P+j,a+2*j+2),z[0]-2),B=[].concat(Object(A.a)(v?["first"]:[]),Object(A.a)(g?[]:["previous"]),Object(A.a)(E),Object(A.a)($>a+2?["start-ellipsis"]:a+1<i-a?[a+1]:[]),Object(A.a)(U($,S)),Object(A.a)(S<i-a-1?["end-ellipsis"]:i-a>a?[i-a]:[]),Object(A.a)(z),Object(A.a)(u?[]:["next"]),Object(A.a)(y?["last"]:[])),I=function(e){switch(e){case"first":return 1;case"previous":return P-1;case"next":return P+1;case"last":return i;default:return null}},L=B.map((function(e){return"number"===typeof e?{onClick:function(t){k(t,e)},type:"page",page:e,selected:e===P,disabled:d,"aria-current":e===P?"true":void 0}:{onClick:function(t){k(t,I(e))},type:e,page:I(e),selected:!1,disabled:d||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?P>=i:P<=1)}}));return Object(M.a)({items:L},w)}(Object(M.a)({},e,{componentName:"Pagination"})).items;return l.createElement("nav",Object(M.a)({"aria-label":"pagination navigation",className:Object(V.a)(a.root,o),ref:t},h),l.createElement("ul",{className:a.ul},v.map((function(e,t){return l.createElement("li",{key:t},d(Object(M.a)({},e,{color:r,"aria-label":s(e.type,e.page,e.selected),shape:u,size:g,variant:f})))}))))})),ne=Object(T.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(oe),re=a(383),ie=a.n(re),se=R((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}})),ce=d.a.memo((function(e){for(var t=e.totalCount,a=e.pageSize,o=e.currentPage,n=e.onSetNewCurrentPage,r=Math.ceil(t/a),i=[],s=1;s<=r;s++)i.push(s);var c=se(),p=Object(l.useCallback)((function(e,t){n(t)}),[t,a,o]);return d.a.createElement("div",{className:"".concat(c.root," ").concat(ie.a.wrapper)},d.a.createElement(ne,{count:r,page:o,onChange:p,color:"primary"}))})),le=d.a.memo((function(e){return d.a.createElement("div",{className:u.a.wrapper},d.a.createElement(ce,e),d.a.createElement("div",{className:u.a.container},e.users.map((function(t,a){return d.a.createElement(B,{user:t,key:a,followingInProgress:e.followingInProgress,followUser:e.followUser,unfollowUser:e.unfollowUser})}))))})),de=a(52),pe=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onSetNewCurrentPage=function(t){e.props.setUpCurrentPage(e.props.pageSize,e.props.currentPage,t)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.setUpAllUsers(this.props.pageSize,this.props.currentPage)}},{key:"shouldComponentUpdate",value:function(e,t,a){return this.props!=e}},{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,this.props.isFetching?d.a.createElement(de.a,null):d.a.createElement(le,{users:this.props.users,currentPage:this.props.currentPage,onSetNewCurrentPage:this.onSetNewCurrentPage,pageSize:this.props.pageSize,totalCount:this.props.totalCount,unfollowUser:this.props.unfollowUser,followUser:this.props.followUser,followingInProgress:this.props.followingInProgress}))}}]),a}(d.a.PureComponent),ue=a(11),me=a(95),ge=a(14),be=Object(ue.d)(me.a,Object(o.b)((function(e){return{users:Object(ge.s)(e),totalCount:Object(ge.q)(e),pageSize:Object(ge.j)(e),currentPage:Object(ge.c)(e),isFetching:Object(ge.h)(e),followingInProgress:Object(ge.e)(e)}}),{toggle_isFetching:n.e,toggle_followingInProgress:n.d,setUpAllUsers:n.b,setUpCurrentPage:n.c,followUser:n.a,unfollowUser:n.f}))(pe);t.default=be}}]);
//# sourceMappingURL=3.01b9aba8.chunk.js.map