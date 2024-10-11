import { describe, expect, it } from "vitest";
import { bruteForce, smarter } from "./main";

describe("bruteForce", () => {
  /**
   * Input: nums1 = [1,3], nums2 = [2]
   * Output: 2.00000
   * Explanation: merged array = [1,2,3] and median is 2.
   */
  describe("GIVEN nums1 = [1,3], nums2 = [2]", () => {
    it("SHOULD return 2.00000", () => {
      expect(bruteForce([1, 3], [2])).toBe(2.00000);
    });
  });

  /**
   * Input: nums1 = [1,2], nums2 = [3,4]
   * Output: 2.50000
   * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
   */
  describe("GIVEN nums1 = [1,2], nums2 = [3,4]", () => {
    it("SHOULD return 2.50000", () => {
      expect(bruteForce([1, 2], [3, 4])).toBe(2.50000);
    });
  });

  describe("case 3", () => {
    it("SHOULD return 9", () => {
      expect(bruteForce([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17])).toBe(9);
    });
  });
});

describe("smarter", () => {
  /**
   * Input: nums1 = [1,3], nums2 = [2]
   * Output: 2.00000
   * Explanation: merged array = [1,2,3] and median is 2.
   */
  describe("GIVEN nums1 = [1,3], nums2 = [2]", () => {
    it("SHOULD return 2.00000", () => {
      expect(smarter([1, 3], [2])).toBe(2.00000);
    });
  });

  /**
   * Input: nums1 = [1,2], nums2 = [3,4]
   * Output: 2.50000
   * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
   */
  describe("GIVEN nums1 = [1,2], nums2 = [3,4]", () => {
    it("SHOULD return 2.50000", () => {
      expect(smarter([1, 2], [3, 4])).toBe(2.50000);
    });
  });

  describe("case 3", () => {
    it("SHOULD return 9", () => {
      expect(smarter([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17])).toBe(9);
    });
  });

  describe("case 4", () => {
    it("SHOULD return 9", () => {
      expect(smarter([0,0], [0,0])).toBe(0);
    });
  });
});
