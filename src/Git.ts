import { spawn } from "node:child_process"
import * as commands from "./lib"
import logger from "./logger"
import type { Category } from "./types/category"

/**
 * Options for the Git instance.
 */
export interface GitOptions {
  /**
   * Current working directory for git commands.
   * Defaults to process.cwd().
   */
  cwd?: string
}

/**
 * The bound Git instance type, combining the core executor with all modular commands.
 */
export type Git = GitCore & typeof commands

/**
 * Core executor for Git commands.
 */
class GitCore {
  /**
   * The current working directory for this instance.
   */
  public readonly cwd: string

  constructor(opts: GitOptions = {}) {
    this.cwd = opts.cwd || process.cwd()
  }

  /**
   * Execute a git command and return the stdout as a string.
   */
  public runCmd(
    category: Category | "",
    args: ReadonlyArray<string | boolean | undefined> = [],
  ): Promise<string> {
    const cmd = [category, ...args].filter(Boolean) as string[]

    logger.debug(`running: ${logger.highlight(`git ${cmd.join(" ")}`)}`)

    return new Promise((resolve, reject) => {
      const child = spawn("git", cmd, {
        cwd: this.cwd,
      })

      let stdout = ""
      let stderr = ""

      child.stdout.on("data", (data) => {
        stdout += data.toString()
      })

      child.stderr.on("data", (data) => {
        stderr += data.toString()
      })

      child.on("error", (err) => {
        reject(
          new Error(
            `Error executing command git ${cmd.join(" ")}: ${err.message}`,
          ),
        )
      })

      child.on("close", (code) => {
        if (code !== 0) {
          return reject(
            new Error(
              `Git command failed (exit ${code}):\n${cmd.join(" ")}\n${stderr.trim()}`,
            ),
          )
        }

        resolve(stdout.trim())
      })
    })
  }

  /**
   * Execute a git command and return success state.
   */
  public runCmdSafe(
    category: Category | "",
    args: ReadonlyArray<string | boolean | undefined> = [],
  ): Promise<boolean> {
    const cmd = [category, ...args].filter(Boolean) as string[]

    logger.debug(`running: ${logger.highlight(`git ${cmd.join(" ")}`)}`)

    return new Promise((resolve) => {
      const child = spawn("git", cmd, { cwd: this.cwd })

      child.on("error", () => {
        resolve(false)
      })

      child.on("close", (code) => {
        resolve(code === 0)
      })
    })
  }
}

/**
 * Git class factory that binds modular commands to a GitCore instance.
 */
export const Git = function (this: any, opts: GitOptions = {}) {
  const instance = new GitCore(opts)

  // Dynamically bind all modular commands to the instance
  for (const [key, val] of Object.entries(commands)) {
    if (typeof val === "function") {
      ;(instance as any)[key] = val.bind(instance)
    }
  }

  return instance
} as unknown as {
  new (opts?: GitOptions): Git
}
