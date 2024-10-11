/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const bruteForce = (nums1: number[], nums2: number[]): number => {
  const merged = [...nums1, ...nums2].sort(
    (a, b) => a - b,
  );
  // size of 4 -> average of size /2  and size /2 + 1
  // size of 5 -> take cealing of size / 2
  if (merged.length % 2 === 1) return merged[Math.ceil(merged.length / 2) - 1]!;

  const left = merged[merged.length / 2 - 1]!;
  const right = merged[merged.length / 2 + 1 - 1]!;
  return (left + right) / 2;
};

export const smarter = (nums1: number[], nums2: number[]): number => {
  let cursor = 0;
  let targetPosition: [number, number];
  const targetValue: [number | undefined, number | undefined] = [undefined, undefined];
  const totalLength = nums1.length + nums2.length;
  if (totalLength % 2 === 1) targetPosition = [Math.ceil(totalLength / 2) - 1, Math.ceil(totalLength / 2) - 1];
  else targetPosition = [totalLength / 2 - 1, totalLength / 2 + 1 - 1];


  for (let i = 0, j = 0; i < nums1.length || j < nums2.length;) {
    const v1 = nums1[i]!;
    const v2 = nums2[j]!;
    if (v2 === undefined || v1 < v2) {
      if (targetValue[0] === undefined && targetPosition[0] === cursor) {
        targetValue[0] = v1;
      }
      if (targetValue[1] === undefined && targetPosition[1] === cursor) {
        targetValue[1] = v1;
      }
      cursor++;
      i++;
    } else {
      if (targetValue[0] === undefined && targetPosition[0] === cursor) {
        targetValue[0] = v2;
      }
      if (targetValue[1] === undefined && targetPosition[1] === cursor) {
        targetValue[1] = v2;
      }
      cursor++;
      j++;
    }
    if (targetValue[0] !== undefined && targetValue[1] !== undefined) break;
  }

  return (targetValue[0]! + targetValue[1]!) / 2;
};
