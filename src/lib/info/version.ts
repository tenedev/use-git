import type { Git } from "../../git"
import { versionCache } from "../cache/versionCache"

/**
 * @example "2.51.2.windows.1"
 *
 * @since 0.1.0
 */
export async function version(this: Git): Promise<string> {
  const version: string = versionCache.version?.raw ?? (await this.rawVersion())
  const match = version.match(/git version\s+(.+)/)
  if (!match) throw new Error(`Unable to parse git version: ${version}`)

  versionCache.version = {
    platform: match[1].split(".")[3],
    ...versionCache.version,
  }

  return match[1]
}
