import type { Git } from "../../git"

/**
 * Retrieves the latest reachable Git tag.
 *
 * @remarks
 * Uses:
 * `git describe --tags --abbrev=0`
 *
 * If a branch/ref is provided:
 * `git describe <branch> --tags --abbrev=0`
 *
 * @example Get latest tag from current branch
 * ```ts
 * await getLatestTag()
 * // "v1.4.0"
 * ```
 *
 * @example Get latest tag from main branch
 * ```ts
 * await getLatestTag("main")
 * // "v2.0.0"
 * ```
 *
 * @example Get latest tag from a feature branch
 * ```ts
 * await getLatestTag("feature/new-ui")
 * // "v1.8.0"
 * ```
 *
 * @example Get latest tag from a specific commit
 * ```ts
 * await getLatestTag("a1b2c3d")
 * // "v1.3.2"
 * ```
 *
 * @example Handle repositories without tags
 * ```ts
 * const tag = await getLatestTag()
 *
 * if (!tag) {
 *   console.log("No tags found")
 * }
 * ```
 *
 * @returns The latest tag name, or `null` if none exists.
 *
 * @since 1.2.0
 */
export async function getLatestTag(
  this: Git,
  /** Optional branch, commit, or ref */
  branch?: string,
): Promise<string | null> {
  try {
    const tag = await this.runCmd("describe", [branch, "--tags", "--abbrev=0"])
    return tag
  } catch {
    return null
  }
}
