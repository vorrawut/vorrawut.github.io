(self.webpackChunkvorrawut_portfolio=self.webpackChunkvorrawut_portfolio||[]).push([[42],{3267:(e,t,r)=>{var a,s=Object.create,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of n(t))p.call(e,s)||s===r||l(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>P}),e.exports=(a=u,h(l({},"__esModule",{value:!0}),a));var y=((e,t,r)=>(r=null!=e?s(i(e)):{},h(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),c=r(2206),m=r(1520);class P extends y.Component{constructor(){super(...arguments),d(this,"callPlayer",c.callPlayer),d(this,"playerID",this.props.config.playerId||`twitch-player-${(0,c.randomString)()}`),d(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),d(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:r,onError:a,config:s,controls:l}=this.props,o=m.MATCH_URL_TWITCH_CHANNEL.test(e),n=o?e.match(m.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(m.MATCH_URL_TWITCH_VIDEO)[1];t?o?this.player.setChannel(n):this.player.setVideo("v"+n):(0,c.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:o?"":n,channel:o?n:"",height:"100%",width:"100%",playsinline:r,autoplay:this.props.playing,muted:this.props.muted,controls:!!o||l,time:(0,c.parseStartTime)(e),...s.options});const{READY:a,PLAYING:i,PAUSE:p,ENDED:h,ONLINE:d,OFFLINE:u,SEEK:y}=t.Player;this.player.addEventListener(a,this.props.onReady),this.player.addEventListener(i,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(y,this.props.onSeek),this.player.addEventListener(d,this.props.onLoaded),this.player.addEventListener(u,this.props.onLoaded)}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return y.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}d(P,"displayName","Twitch"),d(P,"canPlay",m.canPlay.twitch),d(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.b584076a.chunk.js.map