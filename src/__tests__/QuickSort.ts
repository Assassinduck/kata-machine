import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    // const arr = [3, 9, 7, 4, 69, 420, 42];
    // const arr = [3, 4, 7, 9, 69, 420, 42];
    // const arr = [3, 4, 7, 9, 42, 420, 69];
    // const arr = [3, 4, 7, 9, 42, 69, 420];

    debugger;
    quick_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
