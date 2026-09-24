export function ease(bodyChest, garmentChest){ return +(garmentChest-bodyChest).toFixed(1); }
export function fitFromEase(e){ if(e<0)return {label:'Too tight',tone:'bad'}; if(e<6)return {label:'Close fit',tone:'warn'}; if(e<12)return {label:'Regular fit',tone:'good'}; if(e<18)return {label:'Relaxed fit',tone:'good'}; return {label:'Oversized / very relaxed',tone:'info'}; }
export function levelCompatibility(a,b){ return Math.abs(a-b)<=1; }
