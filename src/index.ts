export default function<T, K extends Extract<keyof NonNullable<T>, string>, L>(obj: T, keys: K, val: L) {
  keys.split && (keys=keys.split("."))
  const l: number = keys.length
  let i = 0
  let t = obj
  let x
  for (; i < l; ++i) {
    x = t[keys[i]]
    t = t[keys[i]] = (i === l - 1 ? val : (x != null ? x : (!!~keys[i+1].indexOf('.') || !(+keys[i+1] > -1)) ? {} : []))
  }
}
