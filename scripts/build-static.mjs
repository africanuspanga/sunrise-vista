// Static export for cPanel hosting. Route handlers can't be exported, so the /api folder is set
// aside during the build (the chat widget then falls back to WhatsApp) and always restored.
import { execSync } from "node:child_process"
import { existsSync, renameSync } from "node:fs"

const api = "app/api"
const parked = ".api-static-build"
const moved = existsSync(api)
if (moved) renameSync(api, parked)
try {
  execSync("next build", { stdio: "inherit", env: { ...process.env, STATIC_EXPORT: "1" } })
} finally {
  if (moved) renameSync(parked, api)
}
