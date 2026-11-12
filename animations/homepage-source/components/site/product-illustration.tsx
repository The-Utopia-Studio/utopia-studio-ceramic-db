/** Decorative product diagrams, intentionally independent of product UI screenshots. */
export function ProductIllustration({ name }: { name: string }) {
  return <svg viewBox="0 0 240 180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'Utopia OS' && <>
      <rect x="24" y="26" width="192" height="132" rx="12" />
      <path d="M24 54h192M78 54v104M38 40h2m10 0h2m10 0h2M38 76h24m-24 18h18m-18 18h24" opacity=".4" />
      <rect x="94" y="72" width="46" height="32" rx="6" /><rect x="154" y="72" width="46" height="62" rx="6" />
      <path d="m104 121 7 7 15-17M164 88h20m-20 14h12" />
    </>}
    {name === 'Atliq' && <>
      <path d="m120 20 46 25-46 25-46-25 46-25Zm-46 25v50l46 25 46-25V45M120 70v50" />
      <path d="m72 91-40 22 44 25 44-25m-88 0v30l44 25 44-25m-44-5v30M168 91l40 22-44 25-44-25m88 0v30l-44 25-44-25m44-5v30" opacity=".45" />
    </>}
    {name === 'Ceramic' && <>
      <rect x="30" y="24" width="76" height="76" rx="18" /><circle cx="165" cy="62" r="38" />
      <rect x="30" y="118" width="76" height="38" rx="19" /><path d="M128 156v-38h76v38h-76Zm19-38v38m19-38v38m19-38v38" opacity=".45" />
      <path d="m53 78 15-33 15 33m-24-11h18" />
    </>}
    {name === 'Cloud' && <>
      {[32, 76, 120].map(y => <g key={y}><rect x="52" y={y} width="136" height="30" rx="8" /><circle cx="70" cy={y + 15} r="3" fill="currentColor" /><path d={`M88 ${y+15}h38m28 0h16`} opacity=".5" /></g>)}
      <path d="M32 47H20v88h12m176-88h12v88h-12M120 18v14m0 118v14" opacity=".45" />
    </>}
    {name === 'Skills' && <>
      <path d="M62 46h50v88h66M112 90h66" opacity=".5" />
      <rect x="24" y="28" width="38" height="38" rx="10" /><rect x="178" y="70" width="38" height="38" rx="10" /><rect x="178" y="116" width="38" height="38" rx="10" />
      <circle cx="112" cy="46" r="8" fill="currentColor" /><path d="m36 46 5 5 10-12m137 50 6 6 12-13m-14 52h10m-5-5v10" />
      <path d="m104 84 8 6-8 6m62-12 7 6-7 6m0 38 7 6-7 6" />
    </>}
  </svg>
}
