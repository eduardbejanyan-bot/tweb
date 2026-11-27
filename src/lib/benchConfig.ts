export interface BenchGramConfig {
  ghostMode: boolean;
  hideTyping: boolean;
  hideOnline: boolean;
  antiDelete: boolean;
  ghostStories: boolean;
  unlimitedDownload: boolean;
}

const STORAGE_KEY = 'benchgram_config';

const defaultConfig: BenchGramConfig = {
  ghostMode: true,
  hideTyping: true,
  hideOnline: true,
  antiDelete: true,
  ghostStories: true,
  unlimitedDownload: true
};

export function getBenchConfig(): BenchGramConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConfig;
    return {...defaultConfig, ...JSON.parse(raw)};
  } catch {
    return defaultConfig;
  }
}

export function setBenchConfig(patch: Partial<BenchGramConfig>) {
  try {
    const curr = getBenchConfig();
    const updated = {...curr, ...patch};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}
}