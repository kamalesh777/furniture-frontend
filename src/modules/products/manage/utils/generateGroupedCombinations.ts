import type { VariantCombination, VariantItem, VariantOptionTypes } from '../types'

/**
 * Generate all possible combinations of variant values
 * @param options Array of options with their values
 * @param groupBy Key to group variants by
 * @returns Array of grouped variants
 */
export const generateGroupedCombinations = (
  options: VariantOptionTypes[],
  groupBy: string,
  existingData?: VariantCombination[],
): VariantCombination[] => {
  const allCombinations: Array<{ label: string; options: Record<string, string> }> = []

  const recurse = (depth = 0, current: string[] = [], optionMap: Record<string, string> = {}): void => {
    if (depth === options.length) {
      allCombinations.push({
        label: current.join(', '),
        options: { ...optionMap },
      })
      return
    }

    const { opName, opValue } = options[depth]
    for (const value of opValue) {
      recurse(depth + 1, [...current, value], {
        ...optionMap,
        [opName]: value,
      })
    }
  }

  recurse()

  // Helpers to recover previous values
  // eslint-disable-next-line consistent-return
  const findExistingChildData = (label: string): Partial<VariantItem> | undefined => {
    for (const group of existingData || []) {
      if (group?.children) {
        const match = group.children.find(child => child.label === label)
        if (match) return match
      }
    }
  }

  const findExistingParentData = (index: number): Partial<VariantCombination> | undefined => {
    return existingData?.at(index)
  }

  // Group combinations by selected option key
  const grouped: Record<string, typeof allCombinations> = {}
  for (const item of allCombinations) {
    const key = item.options[groupBy]
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(item)
  }

  // Final grouping
  const result = Object.entries(grouped).map(([label, children], index) => {
    const existingParent = findExistingParentData(index)

    return {
      ...(existingParent || {}), // keep sellPrice, costPrice, available
      label,
      parent: true,
      key: label,
      children: children.map((item, index) => {
        const existingChild = findExistingChildData(item.label)

        return {
          ...item,
          parent: false,
          ...(existingChild || {}),
          key: `${label}-${index}`, // better than undefined-0
        }
      }),
    }
  })

  return result
}
