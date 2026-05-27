import utils from "../../internal"

export function cwd() {
  return utils.runCmd("rev-parse", ["--show-toplevel"])
}
