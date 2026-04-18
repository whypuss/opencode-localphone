import { reactive, watch } from 'vue'

export interface AppSettings {
  openrouterApiKey: string
  googleApiKey: string
  nvidiaApiKey: string
  aiModel: string
  aiProvider: 'openrouter' | 'huggingface' | 'google' | 'nvidia'
  hfToken: string
}

const STORAGE_KEY = 'openlearn_settings'

function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return {
    openrouterApiKey: '',
    googleApiKey: '',
    nvidiaApiKey: '',
    aiModel: 'moonshotai/kimi-k2.5',
    aiProvider: 'openrouter',
    hfToken: '',
  }
}

export const settings = reactive<AppSettings>(loadSettings())

watch(settings, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}, { deep: true })

export function getSettings() { return settings }
