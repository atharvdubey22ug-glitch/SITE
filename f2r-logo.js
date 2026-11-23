/* F²R logo: the two white strips are flexure blades.
   The F and R are the fixed frame, the 2 is the moving platform. Scrolling
   moves the "frame", so the 2 lags behind, rings when you stop, and takes a
   hard knock when a fast scroll hits the top or bottom of the page. */
(function(){
var D={"W":321,"H":148,"tiles":["<rect x=\"-6\" y=\"-6\" width=\"228\" height=\"82\" fill=\"#A1AEC3\"/>","<path fill=\"#ED1C24\" d=\"M139 -6L139 7.44L140.74 7.42L142.04 7.45L144.66 7.64L146.83 7.94L148.99 8.37L149.85 8.58L151.13 8.94L152.40 9.35L154.07 9.97L155.30 10.50L156.92 11.28L157.71 11.71L158.49 12.16L160.01 13.13L161.83 14.47L163.21 15.64L164.20 16.58L164.83 17.22L166.03 18.58L166.88 19.65L167.67 20.76L168.86 22.68L169.71 24.28L170.09 25.10L170.79 26.76L171.25 28.03L172.01 30.62L172.48 32.80L172.86 35.44L173.05 38.09L173.08 39.42L173.05 41.18L172.88 43.81L172.56 46.43L172.02 49.46L171.32 52.47L170.85 54.20L170.19 56.35L169.29 58.95L168.79 60.25L168.08 61.99L167.30 63.75L166.45 65.50L165.02 68.13L165.02 68.50L160 76L222 76L222 -6Z\"/>","<rect x=\"-6\" y=\"76\" width=\"228\" height=\"81\" fill=\"#00A2E8\"/>","<path fill=\"#EE8AF8\" d=\"M161.35 76L222 76L222 157L101.72 157L101.72 140Z\"/>","<rect x=\"221\" y=\"-6\" width=\"106\" height=\"163\" fill=\"#FF7F27\"/>","<path d=\"M240 16L259.85 16.02L261.85 16.09L264.25 16.26L265.93 16.44L268.30 16.80L270.29 17.21L272.64 17.84L273.97 18.27L275.26 18.75L276.89 19.46L278.43 20.25L280.23 21.34L281.89 22.55L282.66 23.20L283.54 24.02L284.36 24.87L285.13 25.77L286.18 27.19L287.19 28.87L287.64 29.75L288.20 31.04L288.55 31.99L288.97 33.38L289.43 35.50L289.68 37.33L289.81 39.09L289.85 40.53L289.81 43.91L289.60 46.38L289.22 48.58L288.97 49.62L288.55 51.01L288.20 51.96L287.64 53.25L287.10 54.30L286.50 55.32L285.73 56.45L285.25 57.08L284.36 58.13L283.82 58.70L282.51 59.93L281.57 60.70L280.74 61.31L279.17 62.33L276.89 63.54L275.26 64.25L273.97 64.73L272.64 65.16L270.29 65.79L268.30 66.20L265.93 66.56L264.25 66.74L261.85 66.91L259.85 66.98L240 67Z\" fill=\"#22B14C\" stroke=\"#22B14C\" stroke-width=\"2.5\"/>","<path fill=\"#99D9EA\" d=\"M232 79L282.43 79L313.54 157L232 157Z\"/>"],"F":["M-6 -6L19 -6L19 154L-6 154Z","M-6 -6L75 -6L75 17L-6 17Z","M-6 67L73 67L73 83L-6 83Z"],"two":["M103 13.06L103.45 13.06L106.19 11.24L109.18 9.41L112.77 7.42L115.92 5.85L119.34 4.33L122.52 3.09L125.65 2.04L128.53 1.22L131.55 0.52L134.60 -0.02L137.60 -0.38L140.72 -0.57L143.68 -0.57L146.26 -0.42L147.89 -0.25L149.52 -0.02L151.24 0.29L152.58 0.58L155.32 1.32L158.02 2.25L160.39 3.25L161.56 3.81L162.97 4.55L164.61 5.51L165.62 6.16L166.53 6.78L167.98 7.86L170.13 9.68L171.36 10.87L172.27 11.82L173.97 13.82L174.94 15.11L175.68 16.19L176.49 17.47L177.29 18.88L178.37 21.04L179.31 23.26L179.79 24.58L180.34 26.30L181.06 29.11L181.39 30.78L181.61 32.15L181.91 34.81L182.04 37.08L182.06 39.25L181.98 41.51L181.77 44.05L181.41 46.76L181.02 48.97L180.32 52.11L179.44 55.31L178.60 57.93L177.55 60.81L176.61 63.12L175.58 65.42L174.03 68.53L172.88 70.63L171.13 73.53L169.95 75.33L168.95 76.76L166.94 79.42L119.14 131.50L100.14 131.50L147.97 79.66L148.69 78.85L149.45 77.91L150.69 76.17L151.94 74.22L154.19 70.50L157.55 65.26L158.65 63.39L159.34 62.05L159.92 60.79L160.73 58.74L161.19 57.41L161.98 54.81L162.74 51.85L163.36 48.81L163.78 46.04L164 43.85L164.11 41.52L164.07 39.05L163.85 36.58L163.61 35.03L163.25 33.35L162.78 31.69L162.28 30.26L161.69 28.86L160.83 27.18L160.27 26.24L159.28 24.80L158.12 23.39L156.95 22.18L155.97 21.30L154.59 20.22L153.38 19.40L152.25 18.73L150.89 18.03L149.09 17.25L147.17 16.59L144.93 16.02L143.79 15.80L142.51 15.61L140.43 15.42L138.12 15.37L135.67 15.49L134.37 15.62L132.78 15.84L130.75 16.21L128.35 16.77L126.67 17.23L124.89 17.78L122.24 18.71L120.31 19.47L118.49 20.25L115.46 21.69L112.91 23.05L110 24.78L107.24 26.61L103 26.61Z","M100.60 131L189 131L189 154L100.60 154Z"],"R":"M222 -6L273.07 -6L273.07 3L275.18 3.48L279 4.45L282.34 5.42L283.84 5.91L285.24 6.39L287.75 7.36L289.91 8.33L291.78 9.30L293.40 10.27L294.82 11.24L296.66 12.70L298.27 14.15L299.69 15.61L300.94 17.06L302.04 18.52L302.86 19.73L303.87 21.43L304.87 23.37L305.80 25.55L306.47 27.49L307.01 29.43L307.47 31.61L307.80 33.79L308.01 35.98L308.14 39.13L308.12 41.80L308.02 43.74L307.75 46.40L307.43 48.34L306.94 50.53L306.21 52.95L305.56 54.65L304.92 56.10L303.92 58.04L302.89 59.74L302.05 60.95L300.90 62.41L300.05 63.38L298.61 64.83L296.97 66.29L295.75 67.26L294.07 68.47L291.41 70.17L289.71 71.14L287.88 72.11L285.91 73.08L283.27 74.29L280.44 75.50L279.96 75.75L281.84 76.99L282.90 77.74L284.25 78.74L285.82 79.98L287.83 81.73L289.87 83.72L291.88 85.96L293.45 87.96L294.84 89.95L295.48 90.95L296.38 92.44L297.08 93.69L298.13 95.68L299.22 97.92L300.76 101.41L302.07 104.65L304.85 111.88L307.24 117.86L314.03 134.30L320.36 150L301.13 150L297.23 140.05L295.36 135.74L293.51 131.10L291.89 126.78L287.96 115.84L286.10 110.86L284.91 107.88L284.20 106.22L282.50 102.57L281.11 99.92L279.36 96.93L278.06 94.94L276.41 92.62L274.31 89.97L272.87 88.31L271.01 86.32L268.63 84L268.25 83.80L267.74 83.62L266.71 83.40L265.39 83.22L262.53 83.04L260.41 83L240 83L240 154L222 154ZM240 16L259.85 16.02L261.85 16.09L264.25 16.26L265.93 16.44L268.30 16.80L270.29 17.21L272.64 17.84L273.97 18.27L275.26 18.75L276.89 19.46L278.43 20.25L280.23 21.34L281.89 22.55L282.66 23.20L283.54 24.02L284.36 24.87L285.13 25.77L286.18 27.19L287.19 28.87L287.64 29.75L288.20 31.04L288.55 31.99L288.97 33.38L289.43 35.50L289.68 37.33L289.81 39.09L289.85 40.53L289.81 43.91L289.60 46.38L289.22 48.58L288.97 49.62L288.55 51.01L288.20 51.96L287.64 53.25L287.10 54.30L286.50 55.32L285.73 56.45L285.25 57.08L284.36 58.13L283.82 58.70L282.51 59.93L281.57 60.70L280.74 61.31L279.17 62.33L276.89 63.54L275.26 64.25L273.97 64.73L272.64 65.16L270.29 65.79L268.30 66.20L265.93 66.56L264.25 66.74L261.85 66.91L259.85 66.98L240 67Z"};
var NS='http://www.w3.org/2000/svg';
// blade edges (y0,y1), clamps at F and R (x0,x1), where the 2 holds it (a,b)
var BL=[{y0:67,y1:70,x0:73,a:153,b:173,x1:222,end:290},{y0:80.5,y1:83.5,x0:73,a:145,b:164,x1:222,end:240}];
var MAXD=4.5; // past this the 2 would pull away from the top of the frame
function s3(t){return t<=0?0:t>=1?1:t*t*(3-2*t);}
// fixed-guided beam: zero slope at both ends of each free span
function w(B,x,d){if(x<=B.x0||x>=B.x1)return 0;if(x<B.a)return d*s3((x-B.x0)/(B.a-B.x0));if(x<=B.b)return d;return d*s3((B.x1-x)/(B.x1-B.b));}
function edge(B,y,d,from,to,step){var o=[];for(var x=from;x<=to;x+=step)o.push(x.toFixed(1)+' '+(y+w(B,x,d)).toFixed(2));return o;}
function blade(B,d){var t=edge(B,B.y0,d,-6,B.end,2),b=edge(B,B.y1,d,-6,B.end,2).reverse();return 'M'+t.join('L')+'L'+b.join('L')+'Z';}
function band(d){var U=BL[0],L=BL[1];var t=edge(U,(U.y0+U.y1)/2,d,-6,224,2),b=edge(L,(L.y0+L.y1)/2,d,-6,224,2).reverse();return 'M'+t.join('L')+'L'+b.join('L')+'Z';}
var uid=0;
function build(host){
  var id='f2rclip'+(uid++);
  var parts=D.F.map(function(p){return '<path d="'+p+'"/>';}).join('')+'<path fill-rule="evenodd" d="'+D.R+'"/><path class="b0"/><path class="b1"/><g class="two">'+D.two.map(function(p){return '<path d="'+p+'"/>';}).join('')+'</g>';
  var s=document.createElementNS(NS,'svg');
  s.setAttribute('viewBox','0 0 '+D.W+' '+D.H);s.setAttribute('role','img');s.setAttribute('aria-label','F²R — Fiction to Reality');
  s.innerHTML='<defs><clipPath id="'+id+'"><rect width="'+D.W+'" height="'+D.H+'"/></clipPath></defs><g clip-path="url(#'+id+')">'+D.tiles.join('')+
    '<path class="band" fill="#00A2E8"/><g fill="none" stroke="#141414" stroke-width="2" stroke-linejoin="round">'+parts+'</g><g fill="#fff" fill-rule="evenodd">'+parts+'</g>'+
    '<rect width="'+D.W+'" height="'+D.H+'" fill="none" stroke="#000" stroke-width="6"/></g>';
  host.innerHTML='';host.appendChild(s);
  var b0=s.querySelectorAll('.b0'),b1=s.querySelectorAll('.b1'),tw=s.querySelectorAll('.two'),bd=s.querySelector('.band');
  var i;
  return function(d){var p0=blade(BL[0],d),p1=blade(BL[1],d);for(i=0;i<b0.length;i++){b0[i].setAttribute('d',p0);b1[i].setAttribute('d',p1);tw[i].setAttribute('transform','translate(0 '+d.toFixed(3)+')');}bd.setAttribute('d',band(d));};
}
function init(){
  var hosts=document.querySelectorAll('[data-f2r-logo]');if(!hosts.length)return;
  var setters=[];for(var h=0;h<hosts.length;h++)setters.push(build(hosts[h]));
  function draw(d){for(var j=0;j<setters.length;j++)setters[j](d);}
  draw(0);
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  // spring between platform (u) and frame (f); f follows the page as it scrolls
  var K=110,C=3.4,GAIN=0.0105,KNOCK=1.6;
  var f=-window.scrollY*GAIN,u=f,uv=0,fv=0,lastY=window.scrollY,lastT=0,running=false,prevFv=0;
  function maxY(){return Math.max(0,document.documentElement.scrollHeight-window.innerHeight);}
  function soft(x){return MAXD*Math.tanh(x/MAXD);}
  function step(now){
    var dt=lastT?Math.min(0.05,(now-lastT)/1000):0.016;lastT=now;
    var y=window.scrollY,nf=-y*GAIN;            // content moves up on screen as you scroll down
    var nfv=dt>0?(nf-f)/dt:0;
    fv+= (nfv-fv)*0.5;                           // light smoothing of wheel steps
    // hitting the top or bottom: the frame stops dead, the platform keeps going
    var atEnd=(y<=0&&lastY>0)||(y>=maxY()-1&&lastY<maxY()-1);
    if(atEnd&&Math.abs(prevFv)>8){uv+=prevFv*KNOCK;}
    f=nf;lastY=y;prevFv=fv;
    var n=4,h=dt/n;
    for(var k=0;k<n;k++){var d=u-f;uv+=(-K*d-C*(uv-fv))*h;u+=uv*h;}
    var dd=u-f;
    draw(soft(dd));
    if(Math.abs(dd)<0.01&&Math.abs(uv-fv)<0.05&&Math.abs(fv)<0.5){u=f;uv=fv;draw(0);running=false;lastT=0;return;}
    requestAnimationFrame(step);
  }
  function wake(){if(!running){running=true;lastT=0;requestAnimationFrame(step);}}
  window.addEventListener('scroll',wake,{passive:true});
  // a small flick on hover, so it answers the pointer too
  for(var m=0;m<hosts.length;m++)hosts[m].addEventListener('mouseenter',function(){uv+=26;wake();});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
