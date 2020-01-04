export default function<T, K extends Extract<keyof NonNullable<T>, string> | string | Array<string|number>, L>(obj: T & Record<string, any>, keys: K|string[], val: L): void {
  (keys as string).split &&
    (keys = ((keys as string).split(".")) as string[])
  const l: number = keys.length
  let i: number = 0
  let t = obj
  let x

  for (; i < l; ++i) {
    x = t[keys[i]]
    t = (t[(keys[i] as any)] as unknown) = ((i === l - 1 ? val : (x != null ? x :
                                                                  (((!!~keys[i + 1] as unknown) as string).indexOf(".") || !(+keys[i + 1] > -1)) ? {} : [])) as any)
  }
}
