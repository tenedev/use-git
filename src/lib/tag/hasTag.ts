import type { Git } from "../../Git"

/**
 * Checks whether a given Git tag exists.
 *
 * This method:
 * - Works for lightweight tags
 * - Works for annotated tags
 * - Works for signed and unsigned tags
 *
 * @returns `true` if the tag exists, otherwise `false`.
 *
 * @example
 * ```ts
 * await hasTag("v0.3.0");
 * // true
 *
 * await hasTag("v9.9.9");
 * // false
 * ```
 *
 * @since 1.0.0
 */
export async function hasTag(
  this: Git,
  /**
   * The tag name to check.
   */
  tagName: string,
): Promise<boolean> {
  try {
    await this.runCmd("rev-parse", [`refs/tags/${tagName}`])
    return true
  } catch {
    return false
  }
}
