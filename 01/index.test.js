const merge = require("./index");

describe("01-merge", () => {
  test("merge([1,2,3,0,0,0], 3, [2,5,6], 3) ➞ [1,2,2,3,5,6]", () => {
    nums1 = [1, 2, 3, 0, 0, 0];
    m = 3;
    nums2 = [2, 5, 6];
    n = 3;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test("merge([1], 1, [], 0) ➞ [1]", () => {
    nums1 = [1];
    m = 1;
    nums2 = [];
    n = 0;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1]);
  });

  test("merge([0], 0, [1], 1) ➞ [1]", () => {
    nums1 = [0];
    m = 0;
    nums2 = [1];
    n = 1;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1]);
  });

  test("merge([1,2,4,5,6,0], 5, [3], 1) ➞ [1,2,3,4,5,6]", () => {
    nums1 = [1, 2, 4, 5, 6, 0];
    m = 5;
    nums2 = [3];
    n = 1;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
