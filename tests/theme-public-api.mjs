import {
  caseWaveThemeNames,
  caseWaveThemes,
  caseWaveThemeMeta,
  getCaseWaveTheme,
  getCaseWaveThemeMeta,
  getCaseWaveThemesByCategory
} from "../packages/themes/dist/index.js";

if (!Array.isArray(caseWaveThemeNames)) {
  throw new Error("caseWaveThemeNames export missing.");
}

if (!caseWaveThemes || typeof caseWaveThemes !== "object") {
  throw new Error("caseWaveThemes export missing.");
}

if (!Array.isArray(caseWaveThemeMeta)) {
  throw new Error("caseWaveThemeMeta export missing.");
}

if (caseWaveThemeNames.length !== 51) {
  throw new Error(`Expected 51 themes, got ${caseWaveThemeNames.length}`);
}

const dark = getCaseWaveTheme("dark");

if (!dark || dark.name !== "dark") {
  throw new Error("getCaseWaveTheme('dark') failed.");
}

const murderWallMeta = getCaseWaveThemeMeta("murder-wall");

if (!murderWallMeta || murderWallMeta.label !== "Murder Wall") {
  throw new Error("getCaseWaveThemeMeta('murder-wall') failed.");
}

const premium = getCaseWaveThemesByCategory("premium");

if (premium.length === 0) {
  throw new Error("Premium category is empty.");
}

console.log("Theme public API OK.");
console.log("Theme count:", caseWaveThemeNames.length);
console.log("Premium count:", premium.length);
