import { useEffect, useRef } from 'react';

export default function Particles() {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let W, H, pts = [], raf;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    function init() {
      pts = [];
      for (let i = 0; i < 50; i++) pts.push({
        x: Math.random()*W, y: Math.random()*H,
        r: Math.random()*1.4+0.3,
        vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25,
        a: Math.random()*0.35+0.08
      });
    }
    function draw() {
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = `rgba(196,163,90,${p.a})`; ctx.fill();
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=W; if(p.x>W)p.x=0;
        if(p.y<0)p.y=H; if(p.y>H)p.y=0;
      });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<140){
          ctx.beginPath();
          ctx.strokeStyle=`rgba(196,163,90,${0.055*(1-d/140)})`;
          ctx.lineWidth=0.5;
          ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    }
    resize(); init(); draw();
    window.addEventListener('resize', ()=>{ resize(); init(); });
    return () => { cancelAnimationFrame(raf); };
  }, []);

  return <canvas ref={ref} id="particles-canvas" />;
}
