// PSTTobacco.jsx — © 2026 Erik Postnieks · SAPM Companion Dashboard
// Bloomberg terminal aesthetic: JetBrains Mono + Newsreader, navy/gold/crimson/green
// Drop into: pages/dashboards/PSTTobacco.jsx  OR  app/dashboards/PSTTobacco/page.jsx
// Zero external dependencies beyond React.

import { useState } from 'react';
import SAPMNav from "./SAPMNav";

const META = {
  title: "Tobacco",
  subtitle: "System Welfare Cost of Combustible Nicotine Addiction",
  beta: "6.80",
  ci: "5.54–8.28",
  pi: "$965B",
  psa: "−$4.44T",
  mu: "$0.196",
  kappa: "0.86",
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
        { domain:"Algorithmic Pricing", beta:"5.28", type:"Institutional", pi:"$39.5B", key:"sapm-algorithmic-pricing" },
        { domain:"Arms Exports", beta:"2.54", type:"Institutional", pi:"$293B", key:"sapm-arms-exports" },
        { domain:"Aviation Emissions", beta:"4.91", type:"Institutional", pi:"$1.007T", key:"sapm-aviation-emissions" },
        { domain:"Big Tech Monopoly", beta:"9.60", type:"Institutional", pi:"$158B", key:"sapm-big-tech-platform-monopoly" },
        { domain:"Cement (Calcination Floor)", beta:"6.55", type:"Impossibility", pi:"$330B", key:"sapm-cement-calcination-floor" },
        { domain:"Coal Combustion", beta:"6.96", type:"Institutional", pi:"$990B", key:"sapm-coal" },
        { domain:"CRE Urban Hollowing", beta:"11.0", type:"Institutional", pi:"$13.5B", key:"sapm-cre-urban-hollowing" },
        { domain:"Deep-Sea Mining (Abyssal Floor)", beta:"8.45", type:"Impossibility", pi:"$4.8B", key:"sapm-dsm-abyssal-recovery-floor" },
        { domain:"Global Fisheries", beta:"4.77", type:"Institutional", pi:"$37.6B", key:"sapm-fisheries-no-impossibility" },
        { domain:"Gambling Industry", beta:"7.19", type:"Institutional", pi:"$44.2B", key:"sapm-gambling" },
        { domain:"Gene Drives (Ecological Ratchet)", beta:"42.5", type:"Impossibility", pi:"$2.8B", key:"sapm-gene-drives" },
        { domain:"Gig Economy", beta:"4.56", type:"Institutional", pi:"$62.0B", key:"sapm-gig-economy" },
        { domain:"Oil & Gas Extraction", beta:"6.58", type:"Institutional", pi:"$3.50T", key:"sapm-oil-gas" },
        { domain:"Opioid Industry", beta:"12.5", type:"Institutional", pi:"$24.0B", key:"sapm-opioids" },
        { domain:"Orbital Debris (Kessler Ceiling)", beta:"5,066", type:"Impossibility", pi:"$293B", key:"sapm-orbital-debris" },
        { domain:"Palm Oil Deforestation", beta:"8.86", type:"Institutional", pi:"$67B", key:"sapm-palm-oil" },
        { domain:"Pharmacy Benefit Managers", beta:"35.4", type:"Institutional", pi:"$27.6B", key:"sapm-pbm-rebate" },
        { domain:"POPs Beyond PFAS (Inheritance Floor)", beta:"6.08", type:"Impossibility", pi:"$70B", key:"sapm-pops-beyond-pfas" },
        { domain:"For-Profit Student Loans", beta:"4.80", type:"Institutional", pi:"$46.8B", key:"sapm-student-loans-forprofit" },
        { domain:"Tobacco Industry", beta:"6.80", type:"Institutional", pi:"$965B", key:"sapm-tobacco" },
        { domain:"Topsoil Erosion (Pedogenesis Floor)", beta:"5.52", type:"Impossibility", pi:"$380B", key:"sapm-topsoil-erosion" },
        { domain:"Ultra-Processed Food", beta:"6.11", type:"Institutional", pi:"$293B", key:"sapm-upf-full" },
        { domain:"Ultra-Processed Food (No Impossibility)", beta:"6.11", type:"Institutional", pi:"$293B", key:"sapm-upf-no-impossibility" },
        { domain:"Water Privatization", beta:"3.16", type:"Institutional", pi:"$246B", key:"sapm-water-privatization" },
        { domain:"WMD/LAWS (Capability Diffusion Ceiling)", beta:"79,512", type:"Impossibility", pi:"$85B", key:"sapm-wmd-capability-diffusion-ceiling" },
];

const HIGHLIGHTS = [
        "βW = 6.5 [4.9–9.7]. Π = ~$965B/yr global tobacco industry revenue. Total system welfare cost: ~$6.3T/yr.",
        "8 million deaths per year at VSL $1.0–1.5M/statistical life — single largest welfare-cost channel, ~70% of total Πᶜ.",
        "1.25 billion adult tobacco users worldwide, 80% in LMICs. 1.2 million additional annual deaths from secondhand smoke.",
        "Cooperative baseline W₀ = $250–300B/yr (harm-minimization nicotine market: vaping, NRT, heated tobacco with full externality internalization).",
        "Governance mode: regulatory capture + information asymmetry + addiction-mediated demand inelasticity. All three documented across >195 countries.",
        "No impossibility theorem: FCTC-implementing nations demonstrate the barriers are political, not structural. Correction pathway fully identified.",
];


const PSF_PARAMS = {pi_c:280.0,pi_p:965.0,w_c:6300.0,kappa:1.4};
const PSF_DATA = [{pi:28.0,w:5106.32},{pi:68.88,w:5462.19},{pi:109.77,w:5755.3},{pi:150.65,w:5985.5},{pi:191.53,w:6152.88},{pi:232.42,w:6257.45},{pi:273.3,w:6299.16},{pi:314.18,w:6278.04},{pi:355.07,w:6194.07},{pi:395.95,w:6047.29},{pi:436.83,w:5837.68},{pi:477.72,w:5565.17},{pi:518.6,w:5229.89},{pi:559.48,w:4831.79},{pi:600.37,w:4370.74},{pi:641.25,w:3846.97},{pi:682.13,w:3260.37},{pi:723.02,w:2610.78},{pi:763.9,w:1898.52},{pi:804.78,w:1123.43},{pi:845.67,w:285.3},{pi:886.55,w:-615.45},{pi:927.43,w:-1579.04},{pi:968.32,w:-2605.7},{pi:1009.2,w:-3694.95},{pi:1050.08,w:-4847.03},{pi:1090.97,w:-6062.24},{pi:1131.85,w:-7339.98},{pi:1172.73,w:-8680.55},{pi:1213.62,w:-10084.29},{pi:1254.5,w:-11550.53}];

const MC_HIST = [{bin:"5.10",lo:5.1017,hi:5.1785,count:37},{bin:"5.18",lo:5.1785,hi:5.2552,count:49},{bin:"5.26",lo:5.2552,hi:5.3319,count:71},{bin:"5.33",lo:5.3319,hi:5.4087,count:91},{bin:"5.41",lo:5.4087,hi:5.4854,count:109},{bin:"5.49",lo:5.4854,hi:5.5621,count:148},{bin:"5.56",lo:5.5621,hi:5.6389,count:164},{bin:"5.64",lo:5.6389,hi:5.7156,count:198},{bin:"5.72",lo:5.7156,hi:5.7923,count:229},{bin:"5.79",lo:5.7923,hi:5.8691,count:250},{bin:"5.87",lo:5.8691,hi:5.9458,count:297},{bin:"5.95",lo:5.9458,hi:6.0226,count:321},{bin:"6.02",lo:6.0226,hi:6.0993,count:294},{bin:"6.10",lo:6.0993,hi:6.1760,count:331},{bin:"6.18",lo:6.1760,hi:6.2528,count:323},{bin:"6.25",lo:6.2528,hi:6.3295,count:333},{bin:"6.33",lo:6.3295,hi:6.4062,count:330},{bin:"6.41",lo:6.4062,hi:6.4830,count:321},{bin:"6.48",lo:6.4830,hi:6.5597,count:344},{bin:"6.56",lo:6.5597,hi:6.6364,count:314},{bin:"6.64",lo:6.6364,hi:6.7132,count:315},{bin:"6.71",lo:6.7132,hi:6.7899,count:314},{bin:"6.79",lo:6.7899,hi:6.8666,count:314},{bin:"6.87",lo:6.8666,hi:6.9434,count:325},{bin:"6.94",lo:6.9434,hi:7.0201,count:307},{bin:"7.02",lo:7.0201,hi:7.0968,count:273},{bin:"7.10",lo:7.0968,hi:7.1736,count:277},{bin:"7.17",lo:7.1736,hi:7.2503,count:278},{bin:"7.25",lo:7.2503,hi:7.3271,count:260},{bin:"7.33",lo:7.3271,hi:7.4038,count:251},{bin:"7.40",lo:7.4038,hi:7.4805,count:225},{bin:"7.48",lo:7.4805,hi:7.5573,count:244},{bin:"7.56",lo:7.5573,hi:7.6340,count:218},{bin:"7.63",lo:7.6340,hi:7.7107,count:187},{bin:"7.71",lo:7.7107,hi:7.7875,count:181},{bin:"7.79",lo:7.7875,hi:7.8642,count:190},{bin:"7.86",lo:7.8642,hi:7.9409,count:153},{bin:"7.94",lo:7.9409,hi:8.0177,count:151},{bin:"8.02",lo:8.0177,hi:8.0944,count:127},{bin:"8.09",lo:8.0944,hi:8.1711,count:155},{bin:"8.17",lo:8.1711,hi:8.2479,count:104},{bin:"8.25",lo:8.2479,hi:8.3246,count:89},{bin:"8.32",lo:8.3246,hi:8.4013,count:84},{bin:"8.40",lo:8.4013,hi:8.4781,count:62},{bin:"8.48",lo:8.4781,hi:8.5548,count:60},{bin:"8.55",lo:8.5548,hi:8.6315,count:64},{bin:"8.63",lo:8.6315,hi:8.7083,count:48},{bin:"8.71",lo:8.7083,hi:8.7850,count:41},{bin:"8.79",lo:8.7850,hi:8.8618,count:29},{bin:"8.86",lo:8.8618,hi:8.9385,count:20}];
const MC_STATS = {mean:6.8001,median:6.7307,ci_lo:5.5372,ci_hi:8.2838,pct_hw:100.0,pct_above_3:100.0,pct_above_5:99.8,min:4.7707,max:9.6349,n_draws:10000,seed:42};
const MC_CHANNELS = [{name:"Premature mortality (VSL)",mean:4788.10,p5:4114.16,p50:4776.88,p95:5481.57,share:0.7305},{name:"Healthcare & morbidity",mean:883.91,p5:687.89,p50:876.69,p95:1094.50,share:0.1349},{name:"Secondhand smoke harm",mean:427.12,p5:326.30,p50:424.95,p95:531.91,share:0.0652},{name:"Youth initiation & addict.",mean:323.77,p5:242.60,p50:317.89,p95:421.96,share:0.0494},{name:"Environmental degradation",mean:80.45,p5:43.94,p50:80.83,p95:116.40,share:0.0123},{name:"Governance capture",mean:51.15,p5:32.94,p50:50.66,p95:70.89,share:0.0078}];
const MC_WELFARE = {mean:6554.49,ci_lo:5847.37,ci_hi:7285.49};

const THRESHOLDS = [{domain:"Global adult smoking prevalence below 20%",year:2030,confidence:"Medium",status:"Currently ~22%; WHO target is 30% reduction; FCTC implementation uneven",crossed:false},{domain:"Plain packaging in >50 countries",year:2028,confidence:"Medium",status:"Currently ~25 countries; Australia 2012, UK 2016, France 2017, Canada 2019",crossed:false},{domain:"U.S. menthol cigarette ban",year:2026,confidence:"Low",status:"FDA proposal stalled; political opposition from tobacco-state legislators",crossed:false},{domain:"First WHO FCTC Article 6 fiscal measures (major tobacco markets)",year:2024,confidence:"High",status:"Philippines, Bangladesh, Philippines have implemented >75% tax share; U.S. at 44%",crossed:true},{domain:"Philip Morris v. Uruguay (plain packaging precedent)",year:2016,confidence:"High",status:"ICSID upheld Uruguay\'s plain packaging 2016 — established legal feasibility",crossed:true}];

const AXIOMS = {type:"institutional",items:[{id:"I1",name:"Manufactured scientific uncertainty",description:"Tobacco companies spent decades funding product-defense science to manufacture doubt about smoking-cancer causation — a documented historical strategy that delayed regulation by 20-30 years and is the paradigm for all subsequent doubt-manufacturing campaigns."},{id:"I2",name:"Nicotine dependency architecture",description:"Tobacco products are designed to maximize nicotine delivery and maintain dependency; companies manipulated nicotine delivery, pH, and additives specifically to prevent cessation, externalizing the cost of dependency onto users and health systems."},{id:"I3",name:"Regulatory preemption through litigation",description:"Tobacco companies routinely file trade arbitration claims against countries implementing FCTC measures (Philip Morris v. Uruguay, Philip Morris v. Australia), threatening regulatory chill in lower-income countries unable to bear litigation costs."}]};

const METHODS_DATA = {
  welfare_function: "W computed via VSL-weighted premature mortality (8M deaths/year at WHO global average VSL), direct healthcare costs (WHO estimates), secondhand smoke harm (global burden of disease), youth initiation lifetime harm, and environmental costs (cigarette butts, agricultural land use).",
  cooperative_baseline: "Nicotine market limited to harm-minimization products (NRT, approved e-cigarettes) with zero youth initiation and registered adult-only access, generating $280B in legitimate nicotine delivery value at fraction of current harm.",
  falsification: ["F1: Demonstrate that Uruguay\'s comprehensive FCTC MPOWER implementation failed to reduce adult smoking prevalence, contradicting WHO and PAHO monitoring data.","F2: Show that tobacco companies did not manipulate nicotine delivery and pH to maximize dependency, contradicting the 2006 U.S. v. Philip Morris trial findings.","F3: Demonstrate that the tobacco-cancer causal relationship was not known within the industry prior to 1964, contradicting the tobacco company internal document archive."],
  key_sources: ["WHO, Report on the Global Tobacco Epidemic (2023)","GBD 2019 Tobacco Collaborators, Lancet (2021)","Proctor, Golden Holocaust (2012)","ICSID, Philip Morris v. Uruguay Award (2016)"]
};

const C = {
  bg:'#0D0D0D', panel:'#1A1A1A', border:'rgba(255,255,255,0.08)',
  gold:'#F59E0B', crimson:'#EF4444', green:'#22C55E',
  text:'#F5F0E8', muted:'rgba(255,255,255,0.4)', thead:'#141414',
  mono:"'JetBrains Mono','Fira Code',monospace",
  serif:"'Newsreader','Georgia',serif",
};

function Metric({ label, value, sub, color }) {
  return (
    <div style={{flex:1,minWidth:140,background:C.panel,border:`1px solid ${C.border}`,borderRadius:3,padding:'12px 16px'}}>
      <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,letterSpacing:1,marginBottom:4}}>{label}</div>
      <div style={{fontFamily:C.mono,fontSize:28,fontWeight:700,color:color||C.gold,lineHeight:1}}>{value}</div>
      {sub && <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,marginTop:4}}>{sub}</div>}
    </div>
  );
}
function SectionTitle({ children }) {
  return <div style={{fontFamily:C.mono,fontSize:12,color:C.muted,letterSpacing:2,borderBottom:`1px solid ${C.border}`,paddingBottom:6,marginBottom:12,marginTop:20,textTransform:'uppercase'}}>{children}</div>;
}
function BetaBar({ beta, max }) {
  const pct = Math.min(100,(parseFloat(beta)||0)/(max||15)*100);
  const color = pct>80?C.crimson:pct>50?'#D97706':C.gold;
  return <div style={{background:'rgba(255,255,255,0.04)',borderRadius:2,height:8,flex:1,margin:'0 8px'}}><div style={{width:`${pct}%`,height:'100%',background:color,borderRadius:2,transition:'width 0.4s'}}/></div>;
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
          <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,letterSpacing:2,marginBottom:4}}>ERIK POSTNIEKS · SAPM</div>
          <div style={{fontFamily:C.serif,fontSize:24,fontWeight:700,color:C.text}}>{META.title}</div>
          {META.subtitle && <div style={{fontFamily:C.serif,fontSize:15,color:C.muted,marginTop:2,fontStyle:'italic'}}>{META.subtitle}</div>}
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,letterSpacing:1}}>SYSTEM BETA</div>
          <div style={{fontFamily:C.mono,fontSize:36,fontWeight:700,color:C.gold,lineHeight:1}}>β<sub>W</sub> = {META.beta}</div>
          {META.ci && <div style={{fontFamily:C.mono,fontSize:11,color:C.muted}}>90% CI [{META.ci}]</div>}
        </div>
      </div>

      <div style={{background:'rgba(245,158,11,0.06)',padding:'8px 24px',display:'flex',gap:10,alignItems:'center',borderBottom:`1px solid ${C.border}`}}>
        <span style={{background:'rgba(34,197,94,0.15)',color:'#22C55E',fontSize:12,padding:'4px 10px',borderRadius:2,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>INSTITUTIONAL PST</span>
        <span style={{fontFamily:C.mono,fontSize:12,color:C.muted}}>{META.type}</span>
        {META.companion && <a href={META.companion} target="_blank" rel="noreferrer" style={{marginLeft:'auto',fontFamily:C.mono,fontSize:11,color:C.gold,textDecoration:'none'}}>↗ Companion</a>}
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
              <Metric label={<>β<sub>W</sub>  (System Beta)</>} value={META.beta} sub={META.ci?`90% CI [${META.ci}]`:'Headline estimate'} color={C.gold}/>
              {META.pi && <Metric label="Private Payoff Π" value={META.pi+'/yr'} sub="Private sector capture" color={C.text}/>}
              {META.psa && <Metric label="System-Adj. Payoff" value={META.psa} sub="Net welfare: Π − βW·W" color={C.crimson}/>}
              {META.mu && <Metric label="Break-Even μ*" value={META.mu} sub="Welfare neutrality threshold" color='#22C55E'/>}
              {META.kappa && <Metric label="PSF Curvature κ" value={META.kappa} sub="Pareto shortfall index" color={C.muted}/>}
            </div>
            
            {CHANNELS.length>0 && (
              <div>
                <SectionTitle>Channel Decomposition — Welfare Cost Waterfall</SectionTitle>
                {CHANNELS.map((ch,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',marginBottom:8,gap:8}}>
                    <div style={{fontFamily:C.mono,fontSize:12,color:C.muted,width:22,textAlign:'right'}}>{ch.id}</div>
                    <div style={{fontFamily:C.serif,fontSize:15,color:C.text,width:300,flexShrink:0}}>{ch.name}</div>
                    <BetaBar beta={ch.beta} max={parseFloat(META.beta)||15}/>
                    <div style={{fontFamily:C.mono,fontSize:13,color:C.gold,width:55,textAlign:'right'}}>{ch.beta}</div>
                    <div style={{fontFamily:C.mono,fontSize:13,color:C.text,width:110,textAlign:'right'}}>{ch.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab==='channels' && (
          <div>
            <SectionTitle>Channel-by-Channel Breakdown</SectionTitle>
            <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:13}}>
              <thead>
                <tr style={{background:C.thead}}>
                  {['#','Channel','βW(i)','δᵢ ($/yr)','Weight'].map(h=>(
                    <th key={h} style={{padding:'8px 12px',textAlign:h==='Channel'?'left':'right',color:C.gold,borderBottom:`1px solid ${C.border}`}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CHANNELS.map((ch,i)=>(
                  <tr key={i} style={{background:i%2===0?C.panel:C.bg}}>
                    <td style={{padding:'8px 12px',color:C.muted,borderBottom:`1px solid ${C.border}`}}>{ch.id}</td>
                    <td style={{padding:'8px 12px',color:C.text,fontFamily:C.serif,fontSize:14,borderBottom:`1px solid ${C.border}`}}>{ch.name}</td>
                    <td style={{padding:'8px 12px',color:C.gold,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.beta}</td>
                    <td style={{padding:'8px 12px',color:C.text,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.value}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.weight}</td>
                  </tr>
                ))}
                <tr style={{background:C.thead}}>
                  <td colSpan={2} style={{padding:'10px 12px',color:C.gold,fontWeight:700}}>AGGREGATE β<sub>W</sub></td>
                  <td colSpan={3} style={{padding:'10px 12px',color:C.gold,fontWeight:700,fontSize:16,textAlign:'right'}}>{META.beta}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {tab==='cross-domain' && (
          <div>
            <SectionTitle>Cross-Domain SAPM Registry</SectionTitle>
            <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:13}}>
              <thead>
                <tr style={{background:C.thead}}>
                  {['Domain','βW','PST Type','Π ($/yr)'].map(h=>(
                    <th key={h} style={{padding:'8px 12px',textAlign:h==='Domain'||h==='PST Type'?'left':'right',color:C.gold,borderBottom:`1px solid ${C.border}`}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...CROSS_DOMAIN].sort((a,b)=>(parseFloat(b.beta)||0)-(parseFloat(a.beta)||0)).map((d,i)=>(
                  <tr key={i} style={{background:d.key==='sapm-tobacco'?'rgba(34,197,94,0.08)':i%2===0?C.panel:C.bg}}>
                    <td style={{padding:'8px 12px',color:d.key==='sapm-tobacco'?'#22C55E':C.text,fontFamily:C.serif,fontSize:14,borderBottom:`1px solid ${C.border}`}}>{d.key==='sapm-tobacco'?'▶ ':''}{d.domain}</td>
                    <td style={{padding:'8px 12px',color:parseFloat(d.beta)>10?C.crimson:C.gold,textAlign:'right',fontWeight:700,borderBottom:`1px solid ${C.border}`}}>{d.beta}</td>
                    <td style={{padding:'8px 12px',color:C.muted,borderBottom:`1px solid ${C.border}`}}>{d.type}</td>
                    <td style={{padding:'8px 12px',color:C.text,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{d.pi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}


        {/* PSF TAB */}
        {tab === 'psf' && (
          <div>
            <SectionTitle>Private-Systemic Frontier</SectionTitle>
            <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,padding:16,marginBottom:16}}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={PSF_DATA} margin={{top:10,right:30,left:20,bottom:10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="pi" stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} label={{value:"Π (Private Payoff)",position:"bottom",fill:C.muted,fontFamily:C.mono,fontSize:11}} />
                  <YAxis stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} label={{value:"W (System Welfare)",angle:-90,position:"insideLeft",fill:C.muted,fontFamily:C.mono,fontSize:11}} />
                  <Tooltip contentStyle={{background:C.panel,border:`1px solid ${C.border}`,fontFamily:C.mono,fontSize:12,color:C.text}} />
                  <Area type="monotone" dataKey="w" stroke={C.gold} fill="rgba(245,158,11,0.15)" strokeWidth={2} />
                  <ReferenceLine x={PSF_PARAMS.pi_c} stroke={C.green} strokeDasharray="5 5" label={{value:"Πᶜ",fill:C.green,fontFamily:C.mono,fontSize:11}} />
                  <ReferenceLine x={PSF_PARAMS.pi_p} stroke={C.crimson} strokeDasharray="5 5" label={{value:"Current",fill:C.crimson,fontFamily:C.mono,fontSize:11}} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Metric label={<>COOPERATIVE PAYOFF Π<sub>C</sub></>} value={'$'+PSF_PARAMS.pi_c+'B'} sub="Welfare-maximizing extraction" color={C.green} />
              <Metric label={<>CURRENT PAYOFF Π<sub>P</sub></>} value={'$'+PSF_PARAMS.pi_p+'B'} sub="Actual private extraction" color={C.crimson} />
              <Metric label="OVER-EXTRACTION" value={'$'+(PSF_PARAMS.pi_p - PSF_PARAMS.pi_c)+'B'} sub="Gap driving welfare loss" color={C.gold} />
            </div>
            <div style={{marginTop:16,padding:16,background:C.panel,border:`1px solid ${C.border}`,borderRadius:4}}>
              <div style={{fontFamily:C.mono,fontSize:12,color:C.gold,marginBottom:8}}>SAPM ↔ CAPM CORRESPONDENCE</div>
              <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:13}}>
                <thead><tr style={{borderBottom:`1px solid ${C.border}`}}>
                  <th style={{padding:'8px 12px',textAlign:'left',color:C.gold}}>SAPM CONSTRUCT</th>
                  <th style={{padding:'8px 12px',textAlign:'left',color:C.gold}}>CAPM ANALOGUE</th>
                </tr></thead>
                <tbody>
                  {[[<>β<sub>W</sub> (System Beta)</>,<>β (Market Beta)</>],['PSF (Private-Systemic Frontier)','SML (Security Market Line)'],[<>μ* (Shadow Price)</>,<>r<sub>f</sub> (Risk-Free Rate)</>],['Πˢᵃ (System-Adjusted Payoff)','α (Jensen\'s Alpha)'],['W (System Welfare)','No equivalent — structurally invisible'],[<>𝒮<sub>W</sub> (Welfare Efficiency)</>,<>Sharpe Ratio</>]].map(([s,c],i) => (
                    <tr key={i} style={{borderBottom:`1px solid rgba(255,255,255,0.04)`}}>
                      <td style={{padding:'8px 12px',color:C.text}}>{s}</td>
                      <td style={{padding:'8px 12px',color:C.muted,fontFamily:C.serif}}>{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MONTE CARLO TAB */}

        {/* MONTE CARLO TAB */}
        {tab === 'monte-carlo' && (
          <div>
            <SectionTitle>Monte Carlo Simulation — {MC_STATS.n_draws.toLocaleString()} Draws (seed={MC_STATS.seed})</SectionTitle>
            <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,padding:16,marginBottom:16}}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={MC_HIST} margin={{top:10,right:30,left:20,bottom:30}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="bin" stroke={C.muted} tick={{fontFamily:C.mono,fontSize:9}} angle={-45} textAnchor="end" interval={4} />
                  <YAxis stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} />
                  <Tooltip contentStyle={{background:C.panel,border:`1px solid ${C.border}`,fontFamily:C.mono,fontSize:12,color:C.text}} formatter={(v)=>[v,'Draws']} />
                  <Bar dataKey="count" fill={C.gold} />
                  <ReferenceLine x={MC_STATS.mean.toFixed(2)} stroke={C.crimson} strokeWidth={2} strokeDasharray="5 5" label={{value:'μ='+MC_STATS.mean.toFixed(2),fill:C.crimson,fontFamily:C.mono,fontSize:11,position:'top'}} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:16}}>
              <Metric label={<>MEAN β<sub>W</sub></>} value={MC_STATS.mean.toFixed(2)} sub={'Median: '+MC_STATS.median.toFixed(2)} color={C.gold} />
              <Metric label="90% CI" value={'['+MC_STATS.ci_lo.toFixed(2)+', '+MC_STATS.ci_hi.toFixed(2)+']'} sub={'Range: '+MC_STATS.min.toFixed(2)+'–'+MC_STATS.max.toFixed(2)} color={C.muted} />
              <Metric label="% HOLLOW WIN" value={MC_STATS.pct_hw.toFixed(1)+'%'} sub={<>β<sub>W</sub> &gt; 1 in all draws</>} color={MC_STATS.pct_hw > 95 ? C.crimson : C.gold} />
              <Metric label={<>% β<sub>W</sub> &gt; 3</>} value={MC_STATS.pct_above_3.toFixed(1)+'%'} color={MC_STATS.pct_above_3 > 90 ? C.crimson : C.gold} />
              <Metric label={<>% β<sub>W</sub> &gt; 5</>} value={MC_STATS.pct_above_5.toFixed(1)+'%'} color={MC_STATS.pct_above_5 > 50 ? '#D97706' : C.gold} />
            </div>
            <SectionTitle>Channel Welfare Contributions</SectionTitle>
            <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:13}}>
              <thead><tr style={{borderBottom:`1px solid ${C.border}`}}>
                <th style={{padding:'8px 12px',textAlign:'left',color:C.gold}}>CHANNEL</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>MEAN $B</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>P5</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>P50</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>P95</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>SHARE</th>
              </tr></thead>
              <tbody>
                {MC_CHANNELS.map((ch,i) => (
                  <tr key={i} style={{borderBottom:`1px solid rgba(255,255,255,0.04)`,background:i%2===0?C.panel:C.bg}}>
                    <td style={{padding:'8px 12px',color:C.text,fontFamily:C.serif,fontSize:14}}>{ch.name}</td>
                    <td style={{padding:'8px 12px',color:C.gold,textAlign:'right',fontWeight:600}}>{ch.mean.toFixed(1)}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right'}}>{ch.p5.toFixed(1)}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right'}}>{ch.p50.toFixed(1)}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right'}}>{ch.p95.toFixed(1)}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right'}}>{(ch.share*100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{marginTop:16,padding:12,background:'rgba(245,158,11,0.06)',border:`1px solid rgba(245,158,11,0.15)`,borderRadius:4}}>
              <div style={{fontFamily:C.mono,fontSize:11,color:C.muted}}>Total welfare cost: <span style={{color:C.gold}}>${MC_WELFARE.mean.toFixed(1)}B</span> (90% CI: ${MC_WELFARE.ci_lo.toFixed(1)}B – ${MC_WELFARE.ci_hi.toFixed(1)}B) · Source: sapm_monte_carlo.py (seed=42)</div>
            </div>
          </div>
        )}
        {/* THRESHOLDS TAB */}
        {tab === 'thresholds' && (
          <div>
            <SectionTitle>Critical Thresholds & Predicted Crossover</SectionTitle>
            <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,padding:16,marginBottom:16}}>
              <ResponsiveContainer width="100%" height={Math.max(200, THRESHOLDS.length * 44)}>
                <BarChart data={THRESHOLDS.map(t=>({...t,yearsFromNow:t.year-2026}))} layout="vertical" margin={{top:10,right:30,left:180,bottom:10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis type="number" stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} label={{value:"Years from 2026",position:"bottom",fill:C.muted,fontFamily:C.mono,fontSize:11}} />
                  <YAxis type="category" dataKey="domain" stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} width={170} />
                  <Tooltip contentStyle={{background:C.panel,border:`1px solid ${C.border}`,fontFamily:C.mono,fontSize:12,color:C.text}} />
                  <ReferenceLine x={0} stroke={C.crimson} strokeDasharray="3 3" label={{value:"NOW",fill:C.crimson,fontFamily:C.mono,fontSize:11}} />
                  <Bar dataKey="yearsFromNow" fill={C.gold} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:'grid',gap:12}}>
              {THRESHOLDS.map((t,i) => (
                <div key={i} style={{display:'flex',alignItems:'center',gap:16,padding:'12px 16px',background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,borderLeft:`3px solid ${t.crossed ? C.crimson : C.gold}`}}>
                  <div style={{fontFamily:C.mono,fontSize:14,color:t.crossed ? C.crimson : C.gold,fontWeight:700,minWidth:50}}>{t.year}</div>
                  <div style={{flex:1}}>
                    <div style={{fontFamily:C.mono,fontSize:13,color:C.text}}>{t.domain}</div>
                    <div style={{fontFamily:C.serif,fontSize:13,color:C.muted,marginTop:2}}>{t.status}</div>
                  </div>
                  <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,padding:'2px 8px',border:`1px solid ${C.border}`,borderRadius:2}}>{t.confidence}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* METHODS TAB */}
        {tab === 'methods' && (
          <div>
            <SectionTitle>{AXIOMS.type === 'impossibility' ? 'Impossibility Axioms' : 'Institutional Failure Mechanisms'}</SectionTitle>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:12,marginBottom:20}}>
              {AXIOMS.items.map((a,i) => (
                <div key={i} style={{padding:16,background:C.panel,border:`1px solid ${AXIOMS.type === 'impossibility' ? 'rgba(239,68,68,0.2)' : C.border}`,borderRadius:4}}>
                  <div style={{fontFamily:C.mono,fontSize:12,color:AXIOMS.type === 'impossibility' ? C.crimson : C.gold,letterSpacing:1,marginBottom:6}}>{a.id}</div>
                  <div style={{fontFamily:C.serif,fontSize:15,color:C.text,fontWeight:600,marginBottom:6}}>{a.name}</div>
                  <div style={{fontFamily:C.serif,fontSize:14,color:C.muted,lineHeight:1.6}}>{a.description}</div>
                </div>
              ))}
            </div>

            <SectionTitle>System Welfare Function</SectionTitle>
            <div style={{padding:16,background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,marginBottom:20}}>
              <div style={{fontFamily:C.serif,fontSize:15,color:C.text,lineHeight:1.7}}>{METHODS_DATA.welfare_function}</div>
            </div>

            <SectionTitle>Cooperative Baseline</SectionTitle>
            <div style={{padding:16,background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,marginBottom:20}}>
              <div style={{fontFamily:C.serif,fontSize:15,color:C.text,lineHeight:1.7}}>{METHODS_DATA.cooperative_baseline}</div>
            </div>

            <SectionTitle>Falsification Criteria</SectionTitle>
            <div style={{display:'grid',gap:8,marginBottom:20}}>
              {METHODS_DATA.falsification.map((f,i) => (
                <div key={i} style={{padding:'10px 16px',background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,fontFamily:C.serif,fontSize:14,color:C.text,lineHeight:1.6}}>{f}</div>
              ))}
            </div>

            <SectionTitle>Key Sources</SectionTitle>
            <div style={{padding:16,background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,marginBottom:20}}>
              {METHODS_DATA.key_sources.map((s,i) => (
                <div key={i} style={{fontFamily:C.mono,fontSize:12,color:C.muted,padding:'4px 0',borderBottom:`1px solid rgba(255,255,255,0.04)`}}>{s}</div>
              ))}
            </div>

            <div style={{padding:16,background:'rgba(245,158,11,0.06)',border:`1px solid rgba(245,158,11,0.15)`,borderRadius:4}}>
              <div style={{fontFamily:C.mono,fontSize:12,color:C.gold,marginBottom:8}}>CITATION</div>
              <div style={{fontFamily:C.serif,fontSize:14,color:C.text,lineHeight:1.6}}>
                Postnieks, E. (2026). System Asset Pricing Model: {META.title}. SAPM Working Paper.
              </div>
            </div>
          </div>
        )}

        {tab==='highlights' && (
          <div>
            <SectionTitle>Key Findings</SectionTitle>
            {HIGHLIGHTS.map((h,i)=>(
              <div key={i} style={{display:'flex',gap:12,marginBottom:12,background:C.panel,border:`1px solid ${C.border}`,borderRadius:3,padding:'12px 16px'}}>
                <div style={{fontFamily:C.mono,fontSize:16,color:C.gold,flexShrink:0}}>▸</div>
                <div style={{fontFamily:C.serif,fontSize:15,color:C.text,lineHeight:1.7}}>{h}</div>
              </div>
            ))}
          </div>
        )}

      </div>

      
      {/* 𝒮W WELFARE EFFICIENCY RATIO */}
      <div style={{padding:"24px",background:C.panel,border:"2px solid #D9770640",borderRadius:4,margin:"24px 0"}}>
        <div style={{fontFamily:C.mono,fontSize:12,color:"#D97706",letterSpacing:2,marginBottom:16}}>WELFARE EFFICIENCY RATIO</div>
        <div style={{display:"flex",alignItems:"baseline",gap:12,marginBottom:12}}>
          <span style={{fontFamily:C.mono,fontSize:42,fontWeight:700,color:"#D97706"}}>𝒮<sub>W</sub> = 0.15</span>
        </div>
        <div style={{fontFamily:C.mono,fontSize:13,color:C.muted,marginBottom:16}}>
          S&P 500 long-run Sharpe ≈ 0.40 &nbsp;|&nbsp; Acceptable ≥ 0.30 &nbsp;|&nbsp; Poor &lt; 0.10
        </div>
        <div style={{fontFamily:C.serif,fontSize:16,color:"#D97706",lineHeight:1.7,fontStyle:"italic"}}>
          A Sharpe ratio this low would cause any fund manager to liquidate the position immediately.
        </div>
      </div>

      {/* GREEK SYMBOL GLOSSARY */}
      <details style={{margin:"24px 0"}}>
        <summary style={{fontFamily:C.mono,fontSize:13,color:C.gold,cursor:"pointer",padding:"12px 16px",background:C.panel,border:"1px solid rgba(245,158,11,0.15)",borderRadius:4,letterSpacing:1,listStyle:"none",display:"flex",alignItems:"center",gap:8}}>
          <span style={{color:C.gold,fontSize:14}}>▸</span> WHAT THESE SYMBOLS MEAN — AND WHY THEY MATTER
        </summary>
        <div style={{background:C.panel,border:"1px solid rgba(245,158,11,0.15)",borderTop:"none",borderRadius:"0 0 4px 4px",padding:"16px",overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:C.mono,fontSize:13}}>
            <thead>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.1)"}}>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>SYMBOL</th>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>PRONOUNCED</th>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>WHAT IT MEASURES</th>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>CAPM EQUIVALENT</th>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>WHY IT MATTERS</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>β<sub>W</sub></td>
                <td style={{padding:"10px",color:C.text}}>beta-W</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>How much social welfare this sector destroys per dollar of private gain. β<sub>W</sub> = 5.0 means $5 of welfare destroyed per $1 earned.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>β (market beta) — measures how much an asset moves with the market</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>In CAPM, high beta means high financial risk. In SAPM, high β<sub>W</sub> means high welfare destruction per dollar of revenue.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>𝒮<sub>W</sub></td>
                <td style={{padding:"10px",color:C.text}}>S-W</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Private gain per dollar of system welfare cost. Higher is better — but in PST domains it is always low.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Sharpe Ratio — return per unit of risk</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>S&P 500 long-run Sharpe ≈ 0.40. A Sharpe of 0.10 is poor. VW Dieselgate: 𝒮<sub>W</sub> = 0.12. LIBOR: 𝒮<sub>W</sub> ≈ 0. ERCOT: 𝒮<sub>W</sub> = 0.0005. These are welfare efficiency ratios of industries that GDP calls productive.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>T*</td>
                <td style={{padding:"10px",color:C.text}}>T-star</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The predicted time until a Hollow Win collapses into outright failure.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Closest to duration or time-to-default in credit analysis</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>VW: T* = 6.1 years predicted, ~6 years observed. LIBOR: T* ≤ 0 — the system was failing from day one. Seven years of concealment, not surplus.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>μ*</td>
                <td style={{padding:"10px",color:C.text}}>mu-star</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The efficient price of system welfare — what it would cost to make the deal system-preserving. μ* = 1/β<sub>W</sub>. Derived from frontier geometry, not assigned by an analyst.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Closest to the risk-free rate as a floor price for risk</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>β<sub>W</sub> = 7.4 → μ* ≈ 0.135. β<sub>W</sub> = 35.2 → μ* ≈ 0.028. Lower μ* means cheaper welfare preservation in theory — PST means it never happens without intervention.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>Πˢᵃ</td>
                <td style={{padding:"10px",color:C.text}}>pi-SA</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The deal's true value after subtracting welfare cost. Πˢᵃ = Π − μ* · ΔW. If negative, the deal destroys more welfare than it creates.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Jensen's alpha — return above what risk justifies</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>A deal that looks like +$2.3M joint gain may be −$2.4M system-adjusted. Every GDSS deployed today shows only the first number.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>W</td>
                <td style={{padding:"10px",color:C.text}}>W</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The health of the shared system both parties are embedded in. Not A's welfare. Not B's welfare. The system's.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>No CAPM equivalent — this is the variable CAPM cannot see</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The Private Pareto Theorem proves W cannot be computed from bilateral payoffs. It is structurally outside the payoff space. This is the impossibility.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>δ</td>
                <td style={{padding:"10px",color:C.text}}>delta</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Total accumulated welfare cost at crossover — the damage done before the Hollow Win collapses.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>No direct equivalent</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>VW: δ ≈ $3.7 billion in accumulated emissions damage before EPA notice of violation.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>η</td>
                <td style={{padding:"10px",color:C.text}}>eta</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>How quickly system damage feeds back into private costs. Low η means the Hollow Win persists longer before collapsing.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Closest to mean reversion speed in financial models</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>VW: η ≈ 0.3. ERCOT: η ≈ 0 — no feedback until catastrophic failure.</td>
              </tr>
              <tr>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>λ</td>
                <td style={{padding:"10px",color:C.text}}>lambda</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Rate of welfare cost accumulation per unit of private gain. Combined with η and δ determines T*.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>No direct equivalent</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Higher λ means faster damage accumulation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      {/* Footer */}
      <div style={{background:C.panel,borderTop:`1px solid ${C.border}`,padding:'10px 24px',display:'flex',justifyContent:'space-between',marginTop:40}}>
        <div style={{fontFamily:C.mono,fontSize:11,color:C.muted}}>Erik Postnieks · © 2026 Erik Postnieks · © 2026 Erik Postnieks</div>
        <div style={{fontFamily:C.mono,fontSize:11,color:C.muted}}>SAPM Working Paper · 2026</div>
      </div>
    <SAPMNav />
      </div>
  );
}
