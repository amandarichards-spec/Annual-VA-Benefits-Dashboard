
const D=window.SURVEY_DATA;
const $=s=>document.querySelector(s); const el=(t,c,html)=>{const e=document.createElement(t);if(c)e.className=c;if(html!==undefined)e.innerHTML=html;return e};
function pct(v){return Math.max(0,Math.min(100,v))}
function render(){
  $('#resp').textContent=D.responses.toLocaleString();
  $('#retentionScore').textContent=D.metrics.retention.avg+'/5';
  $('#clarityScore').textContent=D.metrics.clarity.avg+'/5';
  $('#topGap').textContent=D.metrics.christmas.avg+'/5';
  const tabs=$('#findingTabs'),card=$('#findingCard');
  function showFinding(f){[...tabs.children].forEach(x=>x.classList.toggle('active',x.dataset.id===f.id));card.innerHTML=`<div><div class="eyebrow">${f.eyebrow}</div><h3>${f.title}</h3><p>${f.body}</p></div><div class="big-stat">${f.stat}</div>`}
  D.findings.forEach((f,i)=>{const b=el('button','finding-tab',f.eyebrow);b.dataset.id=f.id;b.onclick=()=>showFinding(f);tabs.appendChild(b);if(!i)showFinding(f)});
  const mg=$('#metricGrid'); ['addon','referral','anniversary','christmas','hmo','retention'].forEach(k=>{const m=D.metrics[k];mg.appendChild(el('div','metric',`<div class="top"><h4>${m.label}</h4><div class="score">${m.avg}</div></div><div class="bar"><span style="width:${pct(m.avg/5*100)}%"></span></div><small>${m.positive}% positive ratings (4–5)</small>`))});
  const aw=$('#awareness');D.awareness.forEach(a=>aw.appendChild(el('div','rowbar',`<span>${a.label}</span><div class="track"><div class="fill" style="width:${a.pct}%"></div></div><b>${a.pct}%</b>`)));
  const themes=$('#themes');D.themes.slice(0,6).forEach(t=>themes.appendChild(el('div','theme',`<span>${t.label}</span><strong>${t.count} respondents</strong>`)));
  const sel=$('#tenureSelect'); Object.keys(D.tenure).forEach(t=>{const o=document.createElement('option');o.value=t;o.textContent=`${t} (${D.tenure[t].count})`;sel.appendChild(o)});
  function tenureRender(){const x=D.tenure[sel.value]; const wrap=$('#tenureCards');wrap.innerHTML='';[['retention','Retention influence'],['christmas','Christmas bonus'],['hmo','HMO'],['anniversary','Anniversary bonus']].forEach(([k,l])=>wrap.appendChild(el('div','tenure-card',`<span>${l}</span><strong>${x.metrics[k]}/5</strong>`)))} sel.onchange=tenureRender;tenureRender();
  const recs=$('#recs');D.recommendations.forEach(r=>recs.appendChild(el('div','rec',`<div class="num">${r.priority}</div><div><h3>${r.title}</h3><p>${r.detail}</p></div>`)));
}
document.addEventListener('DOMContentLoaded',render);
