// PSTTobacco.jsx — Postnieks Impossibility Program · SAPM Companion Dashboard
// Bloomberg terminal aesthetic: JetBrains Mono + Newsreader, navy/gold/crimson/green
// Drop into: pages/dashboards/PSTTobacco.jsx  OR  app/dashboards/PSTTobacco/page.jsx
// Zero external dependencies beyond React.

import { useState } from 'react';

const META = {
  title: "Tobacco",
  subtitle: "System Welfare Cost of Combustible Nicotine Addiction",
  beta: "6.5",
  ci: "4.9–9.7",
  pi: "$965B",
  psa: "",
  mu: "",
  kappa: "",
  type: "Institutional PST — No Impossibility Theorem | Addiction-mediated demand inelasticity",
  companion: "",
};

const CHANNELS = [
        { id:1, name:"VSL-adjusted mortality (8M deaths/yr)", beta:"~4.5", value:"~70% of total", weight:"~70%" },
        { id:2, name:"Direct healthcare costs", beta:"~0.4", value:"$422B/yr", weight:"~7%" },
        { id:3, name:"Lost productivity", beta:"~0.6", value:"significant", weight:"~10%" },
        { id:4, name:"Secondhand smoke burden (1.2M deaths/yr)", beta:"~0.7", value:"significant", weight:"~10%" },
        { id:5, name:"Environmental externalities", beta:"~0.2", value:"significant", weight:"~3%" },
];

const CROSS_DOMAIN = [
        { domain:"ERCOT (Texas Grid)", beta:"2,053", type:"Institutional", pi:"$2.3B" },
        { domain:"Orbital Debris (LEO)", beta:"2,053", type:"Impossibility", pi:"$293B" },
        { domain:"PFAS (Forever Chemicals)", beta:"35.2", type:"Impossibility", pi:"$4.1B" },
        { domain:"Gene Drives", beta:"12.4", type:"Impossibility", pi:"" },
        { domain:"Opioid Ecosystem", beta:"10.2", type:"Institutional", pi:"~$35B" },
        { domain:"Commercial Real Estate", beta:"8.4", type:"Institutional", pi:"$12-15B" },
        { domain:"Persistent Org. Pollutants", beta:"8.4", type:"Institutional", pi:"" },
        { domain:"Monoculture Agriculture", beta:"8.6", type:"Impossibility", pi:"$52B" },
        { domain:"Big Tech / Platform", beta:"7.4", type:"Institutional", pi:"$158B" },
        { domain:"Frontier AI", beta:"7.4", type:"Impossibility", pi:"" },
        { domain:"Tobacco", beta:"6.5", type:"Institutional", pi:"$965B" },
        { domain:"Student Loans / For-Profit Ed.", beta:"6.3", type:"Institutional", pi:"$46.8B" },
        { domain:"PBM Rebate System", beta:"6.3", type:"Institutional", pi:"$27.6B" },
        { domain:"Gambling (Commercial)", beta:"6.3", type:"Institutional", pi:"$44.2B" },
        { domain:"Coal Combustion", beta:"6.1", type:"Institutional", pi:"" },
        { domain:"Oil & Gas Extraction", beta:"6.2", type:"Institutional", pi:"$3.5T" },
        { domain:"Palm Oil", beta:"6.2", type:"Institutional", pi:"$67B" },
        { domain:"UPF / Ultra-Processed Food", beta:"6.2", type:"Institutional", pi:"" },
        { domain:"Aviation Emissions", beta:"4.6", type:"Institutional", pi:"$1.007T" },
        { domain:"Deep-Sea Mining", beta:"4.7", type:"Impossibility", pi:"" },
        { domain:"Global Fisheries", beta:"4.72", type:"Institutional", pi:"" },
        { domain:"Topsoil Erosion", beta:"4.3", type:"Impossibility", pi:"" },
        { domain:"Algorithmic Pricing", beta:"4.2", type:"Institutional", pi:"$39.5B" },
        { domain:"Gig Economy Platforms", beta:"4.2", type:"Institutional", pi:"" },
        { domain:"Water Privatization / Aquifer", beta:"4.2", type:"Institutional", pi:"$246B" },
        { domain:"Arms Exports", beta:"2.4", type:"Institutional", pi:"$293B" },
        { domain:"Antimicrobial Resistance", beta:"2.1", type:"Impossibility", pi:"" },
        { domain:"Nuclear Energy", beta:"0.7", type:"Impossibility", pi:"" },
        { domain:"WMD Capability Diffusion", beta:"—", type:"Impossibility", pi:"" },
        { domain:"Bitcoin (PoW)", beta:"5.0", type:"Impossibility", pi:"" },
];

const HIGHLIGHTS = [
        "β_W = 6.5 [4.9–9.7]. Π = ~$965B/yr global tobacco industry revenue. Total system welfare cost: ~$6.3T/yr.",
        "8 million deaths per year at VSL $1.0–1.5M/statistical life — single largest welfare-cost channel, ~70% of total Π_C.",
        "1.25 billion adult tobacco users worldwide, 80% in LMICs. 1.2 million additional annual deaths from secondhand smoke.",
        "Cooperative baseline W₀ = $250–300B/yr (harm-minimization nicotine market: vaping, NRT, heated tobacco with full externality internalization).",
        "Governance mode: regulatory capture + information asymmetry + addiction-mediated demand inelasticity. All three documented across >195 countries.",
        "No impossibility theorem: FCTC-implementing nations demonstrate the barriers are political, not structural. Correction pathway fully identified.",
];

const C = {
  bg:'#0a1628', panel:'#0d1f3c', border:'#1e3a5f',
  gold:'#c9a84c', crimson:'#a52a2a', green:'#2a7a3a',
  text:'#e0e8f0', muted:'#7a9ab8', thead:'#111f38',
  mono:"'JetBrains Mono','Fira Code',monospace",
  serif:"'Newsreader','Georgia',serif",
};

function Metric({ label, value, sub, color }) {
  return (
    <div style={{flex:1,minWidth:140,background:C.panel,border:`1px solid ${C.border}`,borderRadius:3,padding:'12px 16px'}}>
      <div style={{fontFamily:C.mono,fontSize:9,color:C.muted,letterSpacing:1,marginBottom:4}}>{label}</div>
      <div style={{fontFamily:C.mono,fontSize:22,fontWeight:700,color:color||C.gold,lineHeight:1}}>{value}</div>
      {sub && <div style={{fontFamily:C.mono,fontSize:9,color:C.muted,marginTop:4}}>{sub}</div>}
    </div>
  );
}
function SectionTitle({ children }) {
  return <div style={{fontFamily:C.mono,fontSize:10,color:C.muted,letterSpacing:2,borderBottom:`1px solid ${C.border}`,paddingBottom:6,marginBottom:12,marginTop:20,textTransform:'uppercase'}}>{children}</div>;
}
function BetaBar({ beta, max }) {
  const pct = Math.min(100,(parseFloat(beta)||0)/(max||15)*100);
  const color = pct>80?C.crimson:pct>50?'#b8860b':C.gold;
  return <div style={{background:'#071020',borderRadius:2,height:8,flex:1,margin:'0 8px'}}><div style={{width:`${pct}%`,height:'100%',background:color,borderRadius:2,transition:'width 0.4s'}}/></div>;
}
function Tab({ label, active, onClick }) {
  return <button onClick={onClick} style={{fontFamily:C.mono,fontSize:10,letterSpacing:1,padding:'6px 14px',border:'none',cursor:'pointer',background:active?C.gold:'transparent',color:active?'#000':C.muted,borderBottom:active?`2px solid ${C.gold}`:'2px solid transparent',textTransform:'uppercase'}}>{label}</button>;
}

export default function PSTTobaccoDashboard() {
  const [tab, setTab] = useState('overview');
  const maxBeta = Math.max(...CROSS_DOMAIN.map(d=>parseFloat(d.beta)||0),parseFloat(META.beta)||0,10);

  return (
    <div style={{background:C.bg,minHeight:'100vh',fontFamily:C.mono,color:C.text}}>

      <div style={{background:C.panel,borderBottom:`2px solid ${C.gold}`,padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{fontFamily:C.mono,fontSize:9,color:C.muted,letterSpacing:2,marginBottom:4}}>POSTNIEKS IMPOSSIBILITY PROGRAM · SAPM</div>
          <div style={{fontFamily:C.serif,fontSize:20,fontWeight:700,color:C.text}}>{META.title}</div>
          {META.subtitle && <div style={{fontFamily:C.serif,fontSize:13,color:C.muted,marginTop:2,fontStyle:'italic'}}>{META.subtitle}</div>}
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontFamily:C.mono,fontSize:9,color:C.muted,letterSpacing:1}}>SYSTEM BETA</div>
          <div style={{fontFamily:C.mono,fontSize:32,fontWeight:700,color:C.gold,lineHeight:1}}>β_W = {META.beta}</div>
          {META.ci && <div style={{fontFamily:C.mono,fontSize:9,color:C.muted}}>90% CI [{META.ci}]</div>}
        </div>
      </div>

      <div style={{background:'#070e1a',padding:'8px 24px',display:'flex',gap:10,alignItems:'center',borderBottom:`1px solid ${C.border}`}}>
        <span style={{background:'#1a3a1a',color:'#aaffaa',fontSize:10,padding:'3px 8px',borderRadius:2,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>INSTITUTIONAL PST</span>
        <span style={{fontFamily:C.mono,fontSize:10,color:C.muted}}>{META.type}</span>
        {META.companion && <a href={META.companion} target="_blank" rel="noreferrer" style={{marginLeft:'auto',fontFamily:C.mono,fontSize:9,color:C.gold,textDecoration:'none'}}>↗ Companion</a>}
      </div>

      <div style={{background:C.panel,borderBottom:`1px solid ${C.border}`,padding:'0 24px',display:'flex',gap:4}}>
        {['overview','channels','cross-domain','highlights'].map(t=>(
          <Tab key={t} label={t} active={tab===t} onClick={()=>setTab(t)}/>
        ))}
      </div>

      <div style={{padding:'20px 24px',maxWidth:1100}}>

        {tab==='overview' && (
          <div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:16}}>
              <Metric label="β_W  (System Beta)" value={META.beta} sub={META.ci?`90% CI [${META.ci}]`:'Headline estimate'} color={C.gold}/>
              {META.pi && <Metric label="Private Payoff Π" value={META.pi+'/yr'} sub="Private sector capture" color={C.text}/>}
              {META.psa && <Metric label="System-Adj. Payoff" value={META.psa} sub="Net welfare: Π − β_W·W" color={C.crimson}/>}
              {META.mu && <Metric label="Break-Even μ*" value={META.mu} sub="Welfare neutrality threshold" color='#5a9a5a'/>}
              {META.kappa && <Metric label="PSF Curvature κ" value={META.kappa} sub="Pareto shortfall index" color={C.muted}/>}
            </div>
            
            {CHANNELS.length>0 && (
              <div>
                <SectionTitle>Channel Decomposition — Welfare Cost Waterfall</SectionTitle>
                {CHANNELS.map((ch,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',marginBottom:8,gap:8}}>
                    <div style={{fontFamily:C.mono,fontSize:10,color:C.muted,width:18,textAlign:'right'}}>{ch.id}</div>
                    <div style={{fontFamily:C.serif,fontSize:13,color:C.text,width:280,flexShrink:0}}>{ch.name}</div>
                    <BetaBar beta={ch.beta} max={parseFloat(META.beta)||15}/>
                    <div style={{fontFamily:C.mono,fontSize:11,color:C.gold,width:50,textAlign:'right'}}>{ch.beta}</div>
                    <div style={{fontFamily:C.mono,fontSize:10,color:C.muted,width:100,textAlign:'right'}}>{ch.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab==='channels' && (
          <div>
            <SectionTitle>Channel-by-Channel Breakdown</SectionTitle>
            <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:11}}>
              <thead>
                <tr style={{background:C.thead}}>
                  {['#','Channel','β_W(i)','δ_i ($/yr)','Weight'].map(h=>(
                    <th key={h} style={{padding:'8px 12px',textAlign:h==='Channel'?'left':'right',color:C.gold,borderBottom:`1px solid ${C.border}`}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CHANNELS.map((ch,i)=>(
                  <tr key={i} style={{background:i%2===0?C.panel:C.bg}}>
                    <td style={{padding:'8px 12px',color:C.muted,borderBottom:`1px solid ${C.border}`}}>{ch.id}</td>
                    <td style={{padding:'8px 12px',color:C.text,fontFamily:C.serif,fontSize:12,borderBottom:`1px solid ${C.border}`}}>{ch.name}</td>
                    <td style={{padding:'8px 12px',color:C.gold,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.beta}</td>
                    <td style={{padding:'8px 12px',color:C.text,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.value}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.weight}</td>
                  </tr>
                ))}
                <tr style={{background:C.thead}}>
                  <td colSpan={2} style={{padding:'10px 12px',color:C.gold,fontWeight:700}}>AGGREGATE β_W</td>
                  <td colSpan={3} style={{padding:'10px 12px',color:C.gold,fontWeight:700,fontSize:14,textAlign:'right'}}>{META.beta}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {tab==='cross-domain' && (
          <div>
            <SectionTitle>Cross-Domain SAPM Registry</SectionTitle>
            <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:11}}>
              <thead>
                <tr style={{background:C.thead}}>
                  {['Domain','β_W','PST Type','Π ($/yr)'].map(h=>(
                    <th key={h} style={{padding:'8px 12px',textAlign:h==='Domain'||h==='PST Type'?'left':'right',color:C.gold,borderBottom:`1px solid ${C.border}`}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...CROSS_DOMAIN].sort((a,b)=>(parseFloat(b.beta)||0)-(parseFloat(a.beta)||0)).map((d,i)=>(
                  <tr key={i} style={{background:d.domain===META.title?'#0d2a10':i%2===0?C.panel:C.bg}}>
                    <td style={{padding:'8px 12px',color:d.domain===META.title?'#80ff80':C.text,fontFamily:C.serif,fontSize:12,borderBottom:`1px solid ${C.border}`}}>{d.domain===META.title?'▶ ':''}{d.domain}</td>
                    <td style={{padding:'8px 12px',color:parseFloat(d.beta)>10?C.crimson:C.gold,textAlign:'right',fontWeight:700,borderBottom:`1px solid ${C.border}`}}>{d.beta}</td>
                    <td style={{padding:'8px 12px',color:C.muted,borderBottom:`1px solid ${C.border}`}}>{d.type}</td>
                    <td style={{padding:'8px 12px',color:C.text,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{d.pi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab==='highlights' && (
          <div>
            <SectionTitle>Key Findings</SectionTitle>
            {HIGHLIGHTS.map((h,i)=>(
              <div key={i} style={{display:'flex',gap:12,marginBottom:12,background:C.panel,border:`1px solid ${C.border}`,borderRadius:3,padding:'12px 16px'}}>
                <div style={{fontFamily:C.mono,fontSize:16,color:C.gold,flexShrink:0}}>▸</div>
                <div style={{fontFamily:C.serif,fontSize:14,color:C.text,lineHeight:1.6}}>{h}</div>
              </div>
            ))}
          </div>
        )}

      </div>

      <div style={{background:C.panel,borderTop:`1px solid ${C.border}`,padding:'10px 24px',display:'flex',justifyContent:'space-between',marginTop:40}}>
        <div style={{fontFamily:C.mono,fontSize:9,color:C.muted}}>Erik Postnieks · Wooster LLC · Postnieks Impossibility Program</div>
        <div style={{fontFamily:C.mono,fontSize:9,color:C.muted}}>SAPM Working Paper · 2026</div>
      </div>
    </div>
  );
}
