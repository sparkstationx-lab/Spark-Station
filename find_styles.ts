async function findStyles() {
  const res = await fetch('https://spark-station-zt9.caffeine.xyz/assets/index-Bo9Od_90.js');
  const text = await res.text();
  // Find gradient-text
  const matches = text.match(/gradient-text[^{]*\{[^}]*\}/g) || [];
  console.log("Matches:", matches);
  // Also search for style tag injection or css strings
  let idx = text.indexOf('ss-card');
  while (idx !== -1) {
    console.log("ss-card at", idx, text.substring(idx - 50, idx + 200));
    idx = text.indexOf('ss-card', idx + 200);
  }
}
findStyles();
