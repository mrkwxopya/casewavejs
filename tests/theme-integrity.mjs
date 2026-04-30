import {
  caseWaveThemes,
  caseWaveThemeNames,
  caseWaveThemeMeta,
  getCaseWaveTheme,
  getCaseWaveThemeMeta,
  getCaseWaveThemesByCategory
} from "../packages/themes/dist/index.js";

const themeNames = new Set(caseWaveThemeNames);
const metaNames = new Set(caseWaveThemeMeta.map((theme) => theme.name));

if (caseWaveThemeNames.length !== 51) {
  throw new Error(`Expected 51 themes, got ${caseWaveThemeNames.length}`);
}

if (caseWaveThemeMeta.length !== 51) {
  throw new Error(`Expected 51 theme meta entries, got ${caseWaveThemeMeta.length}`);
}

for (const name of caseWaveThemeNames) {
  if (!metaNames.has(name)) {
    throw new Error(`Theme missing meta: ${name}`);
  }

  const theme = getCaseWaveTheme(name);

  if (!theme.name || typeof theme.name !== "string") {
    throw new Error(`Invalid theme name: ${name}`);
  }

  if (!theme.canvasBackground) {
    throw new Error(`Theme missing canvasBackground: ${name}`);
  }

  if (!theme.accent) {
    throw new Error(`Theme missing accent: ${name}`);
  }

  if (!getCaseWaveThemeMeta(name)) {
    throw new Error(`getCaseWaveThemeMeta failed: ${name}`);
  }
}

for (const meta of caseWaveThemeMeta) {
  if (!themeNames.has(meta.name)) {
    throw new Error(`Meta references unknown theme: ${meta.name}`);
  }

  if (!caseWaveThemes[meta.name]) {
    throw new Error(`Theme registry missing: ${meta.name}`);
  }
}

const categories = [
  "base",
  "visual",
  "semantic",
  "behavior",
  "premium",
  "edge",
  "background"
];

for (const category of categories) {
  const items = getCaseWaveThemesByCategory(category);

  if (items.length === 0) {
    throw new Error(`Empty category: ${category}`);
  }
}

console.log("CaseWave theme integrity OK.");
console.log("Themes:", caseWaveThemeNames.length);
console.log("Categories:", categories.join(", "));
