(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{249:function(e,t,n){},250:function(e,t){},251:function(e,t){},276:function(e,t){},277:function(e,t){},301:function(e,t,n){},393:function(e,t,n){"use strict";n.r(t);var r,a,i,o,c,s,u,l,d,b,p,f,g,m,x,h=n(4),v=n.n(h),j=n(55),O=n.n(j),y=(n(249),n(235)),k=n(430),w=n(441),S=n(433),M=n(26),T=n(22),P=n(435),A=n(436),E=n(437),K=n(427),R=n(428),I=n(429),B=n(438),C=n(439),N=n(440),D=n(142),_=(n(301),n(88)),L=n(9),W=n(1),F=n.n(W),Y=n(3),U=n(11),G=n(50),z=n(39),V=n(223),H=n(222),q=n(89),J=n(175),Z=n(423),Q=n(442),X=n(424),$=n(431),ee=n(432),te=n(57),ne=n(421),re=n(422),ae=n(21),ie=Object(z.default)(ne.a)(r||(r=Object(G.a)(["\n  display: block !important;\n  margin: 0 auto !important;\n  background-color: var(--title-text-color) !important;\n  min-width: 120px !important;\n  font-size: 1em !important;\n"]))),oe=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=e.isEnded,i=e.isActive,o=e.isSoldOut,c=Object(q.useGateway)(),s=c.requestGatewayToken,u=c.gatewayStatus,l=Object(h.useState)(!1),d=Object(U.a)(l,2),b=d[0],p=d[1],f=Object(h.useState)(!1),g=Object(U.a)(f,2),m=g[0],x=g[1];return Object(h.useEffect)((function(){x(!1),u===q.GatewayStatus.COLLECTING_USER_INFORMATION&&b?x(!0):u===q.GatewayStatus.ACTIVE&&b&&(console.log("Verified human, now minting..."),t(),p(!1))}),[u,b,p,t]),Object(ae.jsx)(ie,{disabled:b||(null===n||void 0===n?void 0:n.state.isSoldOut)||o||r||a||!i||m,onClick:Object(Y.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i||!(null===n||void 0===n?void 0:n.state.gatekeeper)||u===q.GatewayStatus.ACTIVE){e.next=7;break}return console.log("Requesting gateway token"),p(!0),e.next=5,s();case 5:e.next=10;break;case 7:return console.log("Minting..."),e.next=10,t();case 10:case"end":return e.stop()}}),e)}))),variant:"contained",children:n?(null===n||void 0===n?void 0:n.state.isSoldOut)||o?"SOLD OUT":i?m?"VERIFYING...":r||b?Object(ae.jsx)(re.a,{}):"MINT":a?"ENDED":(null===n||void 0===n?void 0:n.state.goLiveDate)?"SOON":"UNAVAILABLE":"CONNECTING..."})},ce=n(84),se="devnet".toString(),ue="TOKEN",le=z.default.div(a||(a=Object(G.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: right;\n"]))),de=z.default.div(i||(i=Object(G.a)(["\n  color: black;\n  width: auto;\n  padding: 5px 5px 5px 16px;\n  min-width: 48px;\n  min-height: auto;\n  border-radius: 22px;\n  background-color: var(--main-text-color);\n  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\n  box-sizing: border-box;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  font-weight: 500;\n  line-height: 1.75;\n  text-transform: uppercase;\n  border: 0;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  justify-content: flex-start;\n  gap: 10px;\n"]))),be=z.default.ul(o||(o=Object(G.a)(["\n  flex: 0 0 auto;\n  margin: 0;\n  padding: 0;\n"]))),pe=Object(z.default)(D.b)(c||(c=Object(G.a)(["\n  border-radius: 18px !important;\n  padding: 6px 16px;\n  background-color: #4E44CE;\n  margin: 0 auto;\n"]))),fe=Object(z.default)(Z.a)(s||(s=Object(G.a)(["\n  min-width: 500px;\n  margin: 0 auto;\n  padding: 5px 20px 20px 20px;\n  flex: 1 1 auto;\n  background-color: var(--card-background-color) !important;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;\n"]))),ge=Object(z.default)(Z.a)(u||(u=Object(G.a)(["\n  display: inline-block;\n  background-color: var(--countdown-background-color) !important;\n  margin: 5px;\n  min-width: 40px;\n  padding: 24px;\n\n  h1 {\n    margin: 0px;\n  }\n"]))),me=z.default.div(l||(l=Object(G.a)(["\n  button.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {\n    color: #464646;\n  }\n\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {\n    -webkit-animation: pulse 1s;\n    animation: pulse 1s;\n    box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);\n  }\n\n  @-webkit-keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #ef8f6e;\n    }\n  }\n\n  @keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #ef8f6e;\n    }\n  }\n"]))),xe=z.default.a(d||(d=Object(G.a)(["\n  color: var(--title-text-color);\n  border-bottom: 1px solid var(--title-text-color);\n  font-weight: bold;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  outline: none;\n  text-decoration: none;\n  text-size-adjust: 100%;\n\n  :hover {\n    border-bottom: 2px solid var(--title-text-color);\n  }\n"]))),he=z.default.div(b||(b=Object(G.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-right: 4%;\n  margin-left: 4%;\n  text-align: center;\n  justify-content: center;\n"]))),ve=z.default.div(p||(p=Object(G.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),je=z.default.div(f||(f=Object(G.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  gap: 20px;\n"]))),Oe=Object(z.default)(Q.a)(g||(g=Object(G.a)(["\n  position: absolute;\n  margin: 5px;\n  font-weight: bold;\n  font-size: 1.2em !important;\n  font-family: 'Patrick Hand', cursive !important;\n"]))),ye=z.default.img(m||(m=Object(G.a)(["\n  height: 400px;\n  width: auto;\n  border-radius: 7px;\n  box-shadow: 5px 5px 40px 5px rgba(0, 0, 0, 0.5);\n"]))),ke=Object(z.default)(X.a)(x||(x=Object(G.a)(["\n  margin: 20px;\n  height: 10px !important;\n  border-radius: 30px;\n  border: 2px solid white;\n  box-shadow: 5px 5px 40px 5px rgba(0, 0, 0, 0.5);\n  background-color: var(--main-text-color) !important;\n\n  > div.MuiLinearProgress-barColorPrimary {\n    background-color: var(--title-text-color) !important;\n  }\n\n  > div.MuiLinearProgress-bar1Determinate {\n    border-radius: 30px !important;\n    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.5));\n  }\n"]))),we=function(e){var t,n,r,a,i=Object(h.useState)(),o=Object(U.a)(i,2),c=o[0],s=o[1],u=Object(h.useState)(!1),l=Object(U.a)(u,2),d=l[0],b=l[1],p=Object(h.useState)(!1),f=Object(U.a)(p,2),g=f[0],m=f[1],x=Object(h.useState)(""),v=Object(U.a)(x,2),j=v[0],O=v[1],y=Object(h.useState)(0),k=Object(U.a)(y,2),w=k[0],S=k[1],P=Object(h.useState)(0),A=Object(U.a)(P,2),E=A[0],K=A[1],R=Object(h.useState)(0),I=Object(U.a)(R,2),B=I[0],C=I[1],N=Object(h.useState)(!1),D=Object(U.a)(N,2),_=D[0],W=D[1],G=Object(h.useState)(!1),z=Object(U.a)(G,2),Z=z[0],Q=z[1],X=Object(h.useState)(0),ne=Object(U.a)(X,2),re=ne[0],ie=ne[1],we=Object(h.useState)("SOL"),Se=Object(U.a)(we,2),Me=Se[0],Te=Se[1],Pe=Object(h.useState)(0),Ae=Object(U.a)(Pe,2),Ee=Ae[0],Ke=Ae[1],Re=Object(h.useState)(!1),Ie=Object(U.a)(Re,2),Be=Ie[0],Ce=Ie[1],Ne=Object(h.useState)(!1),De=Object(U.a)(Ne,2),_e=De[0],Le=De[1],We=Object(h.useState)(0),Fe=Object(U.a)(We,2),Ye=Fe[0],Ue=Fe[1],Ge=Object(h.useState)(!1),ze=Object(U.a)(Ge,2),Ve=ze[0],He=ze[1],qe=Object(h.useState)(),Je=Object(U.a)(qe,2),Ze=Je[0],Qe=Je[1],Xe=Object(h.useState)(!1),$e=Object(U.a)(Xe,2),et=$e[0],tt=$e[1],nt=Object(h.useState)(!1),rt=Object(U.a)(nt,2),at=rt[0],it=rt[1],ot=Object(h.useState)({open:!1,message:"",severity:void 0}),ct=Object(U.a)(ot,2),st=ct[0],ut=ct[1],lt=Object(h.useState)(!0),dt=Object(U.a)(lt,2),bt=dt[0],pt=dt[1],ft=Object(h.useState)(),gt=Object(U.a)(ft,2),mt=gt[0],xt=gt[1],ht=Object(H.b)(),vt=Object(h.useState)(),jt=Object(U.a)(vt,2),Ot=jt[0],yt=jt[1],kt=e.rpcHost,wt=Object(h.useMemo)((function(){if(ht&&ht.publicKey&&ht.signAllTransactions&&ht.signTransaction)return{publicKey:ht.publicKey,signAllTransactions:ht.signAllTransactions,signTransaction:ht.signTransaction}}),[ht]),St=Object(h.useCallback)(Object(Y.a)(F.a.mark((function t(){var n,r,a,i,o,c,s,u,l,d,b,p,f,g,x,h,v,j,O,y,k=arguments;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=k.length>0&&void 0!==k[0]?k[0]:"confirmed",wt){t.next=3;break}return t.abrupt("return");case 3:if(r=new T.a(e.rpcHost,n),!e.candyMachineId){t.next=64;break}return t.prev=5,t.next=8,Object(ce.d)(wt,e.candyMachineId,r);case 8:if(u=t.sent,yt(u),S(u.state.itemsAvailable),C(u.state.itemsRemaining),K(u.state.itemsRedeemed),l=1,l=+("1"+new Array(9).join("0").slice()+"0"),u.state.tokenMint?(Q(!0),Te(ue),ie(u.state.price.toNumber()/l),Ke(u.state.price.toNumber()/l)):(ie(u.state.price.toNumber()/T.b),Ke(u.state.price.toNumber()/T.b)),!u.state.whitelistMintSettings){t.next=42;break}return Ce(!0),Le(u.state.whitelistMintSettings.mode.burnEveryTime),tt(u.state.whitelistMintSettings.presale),it(!et&&null===u.state.whitelistMintSettings.discountPrice),null!==u.state.whitelistMintSettings.discountPrice&&u.state.whitelistMintSettings.discountPrice!==u.state.price&&(u.state.tokenMint?Ke((null===(d=u.state.whitelistMintSettings.discountPrice)||void 0===d?void 0:d.toNumber())/l):Ke((null===(b=u.state.whitelistMintSettings.discountPrice)||void 0===b?void 0:b.toNumber())/T.b)),p=0,t.prev=23,t.t0=e.connection,t.next=27,Object(te.c)(u.state.whitelistMintSettings.mint,wt.publicKey);case 27:return t.t1=t.sent[0],t.next=30,t.t0.getTokenAccountBalance.call(t.t0,t.t1);case 30:g=t.sent,p=(null===g||void 0===g||null===(f=g.value)||void 0===f?void 0:f.uiAmount)||0,t.next=38;break;case 34:t.prev=34,t.t2=t.catch(23),console.error(t.t2),p=0;case 38:"processed"!==n&&Ue(p),m(et&&!Ve&&p>0),t.next=43;break;case 42:Ce(!1);case 43:return(null===u||void 0===u||null===(a=u.state.endSettings)||void 0===a?void 0:a.endSettingType.date)&&(Qe(Object(te.f)(u.state.endSettings.number)),u.state.endSettings.number.toNumber()<(new Date).getTime()/1e3&&(He(!0),m(!1))),(null===u||void 0===u||null===(i=u.state.endSettings)||void 0===i?void 0:i.endSettingType.amount)?(x=Math.min(u.state.endSettings.number.toNumber(),u.state.itemsAvailable),S(x),u.state.itemsRedeemed<x?C(x-u.state.itemsRedeemed):(C(0),u.state.isSoldOut=!0,He(!0))):C(u.state.itemsRemaining),u.state.isSoldOut&&m(!1),t.next=48,Object(ce.e)(e.candyMachineId);case 48:return h=t.sent,v=Object(U.a)(h,1),j=v[0],t.next=53,r.getAccountInfo(j);case 53:O=t.sent,y=892+(O&&u.state.retainAuthority?182:0)+(u.state.tokenMint?66:0)+(u.state.whitelistMintSettings?34:0)+((null===(o=u.state.whitelistMintSettings)||void 0===o||null===(c=o.mode)||void 0===c?void 0:c.burnEveryTime)?34:0)+(u.state.gatekeeper?33:0)+((null===(s=u.state.gatekeeper)||void 0===s?void 0:s.expireOnUse)?66:0),pt(y>1230),t.next=62;break;case 58:t.prev=58,t.t3=t.catch(5),t.t3 instanceof Error?t.t3.message==="Account does not exist ".concat(e.candyMachineId)?ut({open:!0,message:"Couldn't fetch candy machine state from candy machine with address: ".concat(e.candyMachineId,", using rpc: ").concat(e.rpcHost,"! You probably typed the REACT_APP_CANDY_MACHINE_ID value in wrong in your .env file, or you are using the wrong RPC!"),severity:"error",hideDuration:null}):t.t3.message.startsWith("failed to get info about account")&&ut({open:!0,message:"Couldn't fetch candy machine state with rpc: ".concat(e.rpcHost,"! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!"),severity:"error",hideDuration:null}):ut({open:!0,message:"".concat(t.t3),severity:"error",hideDuration:null}),console.log(t.t3);case 62:t.next=65;break;case 64:ut({open:!0,message:"Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!",severity:"error",hideDuration:null});case 65:case"end":return t.stop()}}),t,null,[[5,58],[23,34]])}))),[wt,e.candyMachineId,e.rpcHost,Ve,et,e.connection]);function Mt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=B-t;if(C(n),W(0===n),_e&&Ye&&Ye>0){var r=Ye-t;Ue(r),m(et&&!Ve&&r>0)}xt(void 0),K(E+t),!Z&&c&&c>0&&s(c-(Be?Ee:re)*t-.012),O("devnet"===se||"testnet"===se?"https://solscan.io/token/"+e+"?cluster="+se:"https://solscan.io/token/"+e),b(!1),Tt()}function Tt(){Object(V.a)({particleCount:400,spread:70,origin:{y:.6}})}var Pt=function(){var t=Object(Y.a)(F.a.mark((function t(){var n,r,a,i,o,c,s,u,l,d,p,f,g=arguments;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=g.length>0&&void 0!==g[0]?g[0]:[],r=g.length>1&&void 0!==g[1]?g[1]:[],t.prev=2,!(ht.connected&&(null===Ot||void 0===Ot?void 0:Ot.program)&&ht.publicKey)){t.next=38;break}if(b(!0),!bt||void 0!==mt){t.next=22;break}return ut({open:!0,message:"Please validate account setup transaction",severity:"info"}),t.next=9,Object(ce.c)(Ot,ht.publicKey);case 9:if(o=t.sent,c={err:!0},!o.transaction){t.next=15;break}return t.next=14,Object(ce.b)(o.transaction,e.txTimeout,e.connection,!0);case 14:c=t.sent;case 15:if(!c||c.err){t.next=20;break}xt(o),ut({open:!0,message:"Setup transaction succeeded! You can now validate mint transaction",severity:"info"}),t.next=22;break;case 20:return ut({open:!0,message:"Mint failed! Please try again!",severity:"error"}),t.abrupt("return");case 22:return s=null!==(a=o)&&void 0!==a?a:mt,u=null!==(i=null===s||void 0===s?void 0:s.mint)&&void 0!==i?i:M.d.Keypair.generate(),t.next=26,Object(ce.f)(Ot,ht.publicKey,u,n,r,s);case 26:if(l=t.sent,d={err:!0},p=null,!l){t.next=37;break}return t.next=32,Object(ce.b)(l.mintTxId,e.txTimeout,e.connection,!0);case 32:return d=t.sent,t.next=35,Ot.program.provider.connection.getAccountInfo(l.metadataKey,"processed");case 35:p=t.sent,console.log("Metadata status: ",!!p);case 37:d&&!d.err&&p?(ut({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),Mt(u.publicKey),St("processed")):d&&!d.err?(ut({open:!0,message:"Mint likely failed! Anti-bot SOL 0.01 fee potentially charged! Check the explorer to confirm the mint failed and if so, make sure you are eligible to mint before trying again.",severity:"error",hideDuration:8e3}),St()):(ut({open:!0,message:"Mint failed! Please try again!",severity:"error"}),St());case 38:t.next=45;break;case 40:t.prev=40,t.t0=t.catch(2),f=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?f="SOLD OUT!":312===t.t0.code&&(f="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?f="SOLD OUT!":t.t0.message.indexOf("0x135")&&(f="Insufficient funds to mint. Please fund your wallet.")):f="Transaction Timeout! Please try again.",ut({open:!0,message:f,severity:"error"});case 45:return t.prev=45,b(!1),t.finish(45);case 48:case"end":return t.stop()}}),t,null,[[2,40,45,48]])})));return function(){return t.apply(this,arguments)}}();return Object(h.useEffect)((function(){Object(Y.a)(F.a.mark((function t(){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!wt){t.next=5;break}return t.next=3,e.connection.getBalance(wt.publicKey);case 3:n=t.sent,s(n/T.b);case 5:case"end":return t.stop()}}),t)})))()}),[wt,e.connection]),Object(h.useEffect)((function(){St()}),[wt,e.candyMachineId,e.connection,Ve,et,St]),Object(ae.jsxs)("main",{children:[Object(ae.jsxs)(he,{children:[Object(ae.jsx)(le,{children:Object(ae.jsx)(be,{children:ht?Object(ae.jsxs)(de,{children:[(c||0).toLocaleString()," SOL",Object(ae.jsx)(pe,{})]}):Object(ae.jsx)(pe,{children:"Connect Wallet"})})}),Object(ae.jsx)("br",{}),Object(ae.jsx)(ve,{children:Object(ae.jsx)(je,{children:Object(ae.jsxs)(fe,{elevation:3,children:[Object(ae.jsx)("h2",{children:"My NFT"}),Object(ae.jsx)("br",{}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)(Oe,{label:g&&Be&&Ye>0?Ee+" "+Me:re+" "+Me}),Object(ae.jsx)(ye,{src:"cool-cats.gif",alt:"NFT To Mint"})]}),Object(ae.jsx)("br",{}),ht&&g&&Be&&Ye>0&&_e&&Object(ae.jsxs)("h3",{children:["You own ",Ye," WL mint ",Ye>1?"tokens":"token","."]}),ht&&g&&Be&&Ye>0&&!_e&&Object(ae.jsx)("h3",{children:"You are whitelisted and allowed to mint."}),ht&&g&&Ze&&Date.now()<Ze.getTime()&&Object(ae.jsx)(J.a,{date:Object(te.f)(null===Ot||void 0===Ot||null===(t=Ot.state)||void 0===t||null===(n=t.endSettings)||void 0===n?void 0:n.number),onMount:function(e){return e.completed&&He(!0)},onComplete:function(){He(!0)},renderer:function(e){var t=e.days,n=e.hours,r="";return t>0&&(r+=t+" days "),n>0&&(r+=n+" hours "),r+=e.minutes+1+" minutes left to MINT.",Object(ae.jsx)("div",{children:Object(ae.jsx)("h3",{children:r})})}}),ht&&g&&Object(ae.jsxs)("h3",{children:["TOTAL MINTED : ",E," / ",w]}),ht&&g&&Object(ae.jsx)(ke,{variant:"determinate",value:100-100*B/w}),Object(ae.jsx)("br",{}),Object(ae.jsx)(me,{children:g||Ve||!(null===Ot||void 0===Ot?void 0:Ot.state.goLiveDate)||at&&!(Ye>0)?ht?!at||Ye>0?(null===Ot||void 0===Ot?void 0:Ot.state.gatekeeper)&&ht.publicKey&&ht.signTransaction?Object(ae.jsx)(q.GatewayProvider,{wallet:{publicKey:ht.publicKey||new T.c(ce.a),signTransaction:ht.signTransaction},gatekeeperNetwork:null===Ot||void 0===Ot||null===(r=Ot.state)||void 0===r||null===(a=r.gatekeeper)||void 0===a?void 0:a.gatekeeperNetwork,clusterUrl:kt,cluster:se,options:{autoShowModal:!1},children:Object(ae.jsx)(oe,{candyMachine:Ot,isMinting:d,isActive:g,isEnded:Ve,isSoldOut:_,onMint:Pt})}):Object(ae.jsx)(oe,{candyMachine:Ot,isMinting:d,isActive:g,isEnded:Ve,isSoldOut:_,onMint:Pt}):Object(ae.jsx)("h1",{children:"Mint is private."}):Object(ae.jsx)(pe,{children:"Connect Wallet"}):Object(ae.jsx)(J.a,{date:Object(te.f)(null===Ot||void 0===Ot?void 0:Ot.state.goLiveDate),onMount:function(e){return e.completed&&m(!Ve)},onComplete:function(){m(!Ve)},renderer:function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;return Object(ae.jsxs)("div",{children:[Object(ae.jsxs)(ge,{elevation:1,children:[Object(ae.jsx)("h1",{children:t}),"Days"]}),Object(ae.jsxs)(ge,{elevation:1,children:[Object(ae.jsx)("h1",{children:n}),"Hours"]}),Object(ae.jsxs)(ge,{elevation:1,children:[Object(ae.jsx)("h1",{children:r}),"Mins"]}),Object(ae.jsxs)(ge,{elevation:1,children:[Object(ae.jsx)("h1",{children:a}),"Secs"]})]})}})}),Object(ae.jsx)("br",{}),ht&&g&&j&&Object(ae.jsx)(xe,{href:j,target:"_blank",children:"View on Solscan"})]})})})]}),Object(ae.jsx)($.a,{open:st.open,autoHideDuration:6e3,onClose:function(){return ut(Object(L.a)(Object(L.a)({},st),{},{open:!1}))},children:Object(ae.jsx)(ee.a,{onClose:function(){return ut(Object(L.a)(Object(L.a)({},st),{},{open:!1}))},severity:st.severity,children:st.message})})]})};n(362);var Se=function(){try{return new M.d.PublicKey("9yFn7N9ZNrb3A65fvEeZwarTTxbom9EV9oQSWVRGETQz")}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),Me="devnet",Te="https://api.devnet.solana.com",Pe=new M.d.Connection(Te),Ae=Object(y.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Ee=function(){var e=Object(h.useMemo)((function(){return Object(T.i)(Me)}),[]),t=Object(h.useMemo)((function(){return[Object(P.a)(),Object(A.a)(),Object(E.a)(),Object(K.a)(),Object(R.a)({network:Me}),Object(I.a)({network:Me}),Object(B.a)(),Object(C.a)(),Object(N.a)()]}),[]);return Object(ae.jsx)(k.a,{theme:Ae,children:Object(ae.jsx)(w.a,{endpoint:e,children:Object(ae.jsx)(S.a,{wallets:t,autoConnect:!0,children:Object(ae.jsx)(D.a,{children:Object(ae.jsx)(we,{candyMachineId:Se,connection:Pe,txTimeout:_.a,rpcHost:Te,network:Me})})})})})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,443)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};O.a.render(Object(ae.jsx)(v.a.StrictMode,{children:Object(ae.jsx)(Ee,{})}),document.getElementById("root")),Ke()},57:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(1),a=n.n(r),i=n(3),o=n(26),c=n(37),s=(n(22),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new o.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new o.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),d=function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),c.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(5).Buffer)},84:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return y})),n.d(t,"f",(function(){return k}));var r=n(11),a=n(1),i=n.n(a),o=n(3),c=n(26),s=n(37),u=n(22),l=n(88),d=n(57),b=new c.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new c.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(o.a)(i.a.mark((function e(t,n,r){var a,c,s,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>3&&void 0!==u[3]&&u[3],c=!1,s={slot:0,confirmations:0,err:null},0,e.next=6,new Promise(function(){var e=Object(o.a)(i.a.mark((function e(u,l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){c||(c=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(c||!a){e.next=7;break}return Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,s=n&&n.value[0],c||(s?s.err?(console.log("REST error for",t,s),c=!0,l(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),c=!0,u(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,w(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return s=e.sent,c=!0,console.log("Returning status",s),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:c.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:c.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new c.d.TransactionInstruction({keys:i,programId:d.b,data:e.from([])})},m=function(){var e=Object(o.a)(i.a.mark((function e(t,n,r){var a,o,s,u,l,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new c.b(r,t,{preflightCommitment:"processed"}),e.next=3,c.a.fetchIdl(b,a);case 3:return o=e.sent,s=new c.a(o,b,a),e.next=7,s.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),p=l-d,e.abrupt("return",{id:n,program:s,state:{authority:u.authority,itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,isSoldOut:0===p,isActive:!1,isPresale:!1,isWhitelistOnly:!1,goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price,retainAuthority:u.data.retainAuthority}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("collection"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("collection_authority"),r.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var r,a,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.d.Keypair.generate(),e.next=3,Object(d.c)(r.publicKey,n);case 3:return a=e.sent[0],o=[r],e.t0=c.d.SystemProgram,e.t1=n,e.t2=r.publicKey,e.t3=s.a.span,e.next=11,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 11:return e.t4=e.sent,e.t5=s.b,e.t6={fromPubkey:e.t1,newAccountPubkey:e.t2,space:e.t3,lamports:e.t4,programId:e.t5},e.t7=e.t0.createAccount.call(e.t0,e.t6),e.t8=s.c.createInitMintInstruction(s.b,r.publicKey,0,n,n),e.t9=g(a,n,n,r.publicKey),e.t10=s.c.createMintToInstruction(s.b,r.publicKey,a,n,[],1),u=[e.t7,e.t8,e.t9,e.t10],e.t11=r,e.t12=a,e.next=23,Object(l.c)(t.program.provider.connection,t.program.provider.wallet,[u],[o],l.b.StopOnFailure,"singleGossip",(function(){}),(function(){return!1}),void 0,[],[]);case 23:return e.t13=e.sent.txs[0].txid,e.abrupt("return",{mint:e.t11,userTokenAccount:e.t12,transaction:e.t13});case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var o,b,f,m,y,k,w,S,M,T,P,A,E,K,R,I,B,C,N,D,_,L,W,F,Y,U,G,z,V,H=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=H.length>3&&void 0!==H[3]?H[3]:[],b=H.length>4&&void 0!==H[4]?H[4]:[],f=H.length>5?H[5]:void 0,e.next=5,Object(d.c)(a.publicKey,n);case 5:if(m=e.sent[0],!t.state.tokenMint){e.next=12;break}return e.next=9,Object(d.c)(t.state.tokenMint,n);case 9:e.t0=e.sent[0],e.next=13;break;case 12:e.t0=n;case 13:if(y=e.t0,k=t.id,w=[],S=[],M=[],console.log("SetupState: ",f),f){e.next=38;break}return M.push(a),e.t1=S.push,e.t2=S,e.t3=c.d.SystemProgram,e.t4=n,e.t5=a.publicKey,e.t6=s.a.span,e.next=29,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 29:e.t7=e.sent,e.t8=s.b,e.t9={fromPubkey:e.t4,newAccountPubkey:e.t5,space:e.t6,lamports:e.t7,programId:e.t8},e.t10=e.t3.createAccount.call(e.t3,e.t9),e.t11=s.c.createInitMintInstruction(s.b,a.publicKey,0,n,n),e.t12=g(m,n,n,a.publicKey),e.t13=s.c.createMintToInstruction(s.b,a.publicKey,m,n,[],1),e.t14=[e.t10,e.t11,e.t12,e.t13],e.t1.apply.call(e.t1,e.t2,e.t14);case 38:if(!t.state.gatekeeper){e.next=53;break}return e.t15=w,e.next=42,Object(d.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 42:if(e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!0,isSigner:!1},e.t15.push.call(e.t15,e.t17),!t.state.gatekeeper.expireOnUse){e.next=53;break}return w.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t18=w,e.next=50,Object(d.d)(t.state.gatekeeper.gatekeeperNetwork);case 50:e.t19=e.sent[0],e.t20={pubkey:e.t19,isWritable:!1,isSigner:!1},e.t18.push.call(e.t18,e.t20);case 53:if(!t.state.whitelistMintSettings){e.next=60;break}return T=new c.d.PublicKey(t.state.whitelistMintSettings.mint),e.next=57,Object(d.c)(T,n);case 57:P=e.sent[0],w.push({pubkey:P,isWritable:!0,isSigner:!1}),t.state.whitelistMintSettings.mode.burnEveryTime&&(w.push({pubkey:T,isWritable:!0,isSigner:!1}),w.push({pubkey:n,isWritable:!1,isSigner:!0}));case 60:return t.state.tokenMint&&(w.push({pubkey:y,isWritable:!0,isSigner:!1}),w.push({pubkey:n,isWritable:!1,isSigner:!0})),e.next=63,h(a.publicKey);case 63:return A=e.sent,e.next=66,x(a.publicKey);case 66:return E=e.sent,e.next=69,v(k);case 69:return K=e.sent,R=Object(r.a)(K,2),I=R[0],B=R[1],console.log(w.map((function(e){return e.pubkey.toBase58()}))),e.t21=S,e.next=77,t.program.instruction.mintNft(B,{accounts:{candyMachine:k,candyMachineCreator:I,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:A,masterEdition:E,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:s.b,systemProgram:u.f.programId,rent:c.d.SYSVAR_RENT_PUBKEY,clock:c.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:u.e,instructionSysvarAccount:c.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:w.length>0?w:void 0});case 77:return e.t22=e.sent,e.t21.push.call(e.t21,e.t22),e.next=81,j(k);case 81:return C=e.sent,N=Object(r.a)(C,1),D=N[0],e.next=86,t.program.provider.connection.getAccountInfo(D);case 86:if(!e.sent||!t.state.retainAuthority){e.next=117;break}return e.prev=88,e.next=91,t.program.account.collectionPda.fetch(D);case 91:return _=e.sent,console.log(_),L=_.mint,e.next=96,O(L,D);case 96:if(W=e.sent,console.log(L),!L){e.next=112;break}return e.next=101,h(L);case 101:return F=e.sent,e.next=104,x(L);case 104:return Y=e.sent,console.log("Collection PDA: ",D.toBase58()),console.log("Authority: ",t.state.authority.toBase58()),e.t23=S,e.next=110,t.program.instruction.setCollectionDuringMint({accounts:{candyMachine:k,metadata:A,payer:n,collectionPda:D,tokenMetadataProgram:p,instructions:c.d.SYSVAR_INSTRUCTIONS_PUBKEY,collectionMint:L,collectionMetadata:F,collectionMasterEdition:Y,authority:t.state.authority,collectionAuthorityRecord:W}});case 110:e.t24=e.sent,e.t23.push.call(e.t23,e.t24);case 112:e.next=117;break;case 114:e.prev=114,e.t25=e.catch(88),console.error(e.t25);case 117:return U=[S],G=[M],e.prev=119,e.next=122,Object(l.c)(t.program.provider.connection,t.program.provider.wallet,U,G,l.b.StopOnFailure,"singleGossip",(function(){}),(function(){return!1}),void 0,o,b);case 122:return z=e.sent.txs.map((function(e){return e.txid})),V=z[0],e.abrupt("return",{mintTxId:V,metadataKey:A});case 127:e.prev=127,e.t26=e.catch(119),console.log(e.t26);case 130:return e.abrupt("return",null);case 131:case"end":return e.stop()}}),e,null,[[88,114],[119,127]])})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return d}));var r,a=n(10),i=n(1),o=n.n(i),c=n(3),s=n(22),u=n(99),l=6e4;!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var d=function(){var e=Object(c.a)(o.a.mark((function e(t,n,i,c){var l,d,b,f,g,m,x,h,v,j,O,y,k,w,S,M,T,P,A=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=A.length>4&&void 0!==A[4]?A[4]:r.Parallel,d=A.length>5&&void 0!==A[5]?A[5]:"singleGossip",b=A.length>6&&void 0!==A[6]?A[6]:function(e,t){},f=A.length>7&&void 0!==A[7]?A[7]:function(e,t){return!1},g=A.length>8?A[8]:void 0,m=A.length>9&&void 0!==A[9]?A[9]:[],x=A.length>10&&void 0!==A[10]?A[10]:[],n.publicKey){e.next=9;break}throw new u.f;case 9:if(h=m,g){e.next=14;break}return e.next=13,t.getRecentBlockhash(d);case 13:g=e.sent;case 14:v=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var o=new s.g;t.forEach((function(e){return o.add(e)})),o.recentBlockhash=g.blockhash,o.setSigners.apply(o,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&o.partialSign.apply(o,Object(a.a)(r)),h.push(o)},j=0;case 16:if(!(j<i.length)){e.next=23;break}if("continue"!==v(j)){e.next=20;break}return e.abrupt("continue",20);case 20:j++,e.next=16;break;case 23:return h.push.apply(h,Object(a.a)(x)),O=h.filter((function(e){return e.signatures.find((function(e){return e.publicKey.equals(n.publicKey)}))})),y=h.filter((function(e){return!e.signatures.find((function(e){return e.publicKey.equals(n.publicKey)}))})),e.next=28,n.signAllTransactions(O);case 28:k=e.sent,k=y.concat(k),w=[],console.log("Signed txns length",k.length,"vs handed in length",i.length),S=o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=p({connection:t,signedTransaction:k[n]}),l===r.Parallel){e.next=22;break}return e.prev=2,e.next=5,a.then((function(e){var t=e.txid;e.slot;return b(t,n)}));case 5:w.push(a),e.next=20;break;case 8:if(e.prev=8,e.t0=e.catch(2),console.log("Failed at txn index:",n),console.log("Caught failure:",e.t0),f(k[n],n),l!==r.StopOnFailure){e.next=20;break}return e.t1=n,e.next=17,Promise.all(w);case 17:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 20:e.next=23;break;case 22:w.push(a);case 23:case"end":return e.stop()}}),e,null,[[2,8]])})),M=0;case 34:if(!(M<k.length)){e.next=42;break}return e.delegateYield(S(M),"t0",36);case 36:if("object"!==typeof(T=e.t0)){e.next=39;break}return e.abrupt("return",T.v);case 39:M++,e.next=34;break;case 42:if(l===r.Parallel){e.next=47;break}return e.next=45,Promise.all(w);case 45:return P=e.sent,e.abrupt("return",{number:k.length,txs:P});case 47:return e.t1=k.length,e.next=50,Promise.all(w);case 50:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 52:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),b=function(){return(new Date).getTime()/1e3};function p(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(o.a.mark((function e(t){var n,r,a,i,s,u,d,p,f,m,h,j,O;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,i=void 0===a?l:a,s=n.serialize(),u=b(),d=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(b()-u<i)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,v(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,x(p,i,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:d=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return h=null,e.prev=28,e.next=31,g(r,n,"single");case 31:h=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!h||!h.err){e.next=47;break}if(!h.logs){e.next=46;break}j=h.logs.length-1;case 39:if(!(j>=0)){e.next=46;break}if(!(O=h.logs[j]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+O.slice("Program log: ".length));case 43:--j,e.next=39;break;case 46:throw new Error(JSON.stringify(h.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,b()-u),e.abrupt("return",{txid:p,slot:d});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(o.a.mark((function e(t,n,r){var a,i,c,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),s=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(o.a.mark((function e(t,n,r){var a,i,s,u,l,d=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",i=d.length>4&&void 0!==d[4]&&d[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(o.a.mark((function e(d,b){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(p){s=!0,console.error("WS error in setup",t,p)}case 2:if(s||!i){e.next=8;break}return Object(c.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:u=e.sent;try{r.removeSignatureListener(l)}catch(b){}return s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return new Promise((function(t){return setTimeout(t,e)}))}}},[[393,1,2]]]);
//# sourceMappingURL=main.cfc2102a.chunk.js.map