let partitionCallCount = 0;
let qsCallCount = 0;

const qs = (array: number[], lo: number, hi: number) => {
    console.log("new lo hi", lo, hi);

    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(array, lo, hi);
    console.log("pivI", pivotIdx);

    qs(array, lo, pivotIdx - 1);
    console.log(lo, hi);

    qs(array, pivotIdx + 1, hi);
};

const partition = (arr: number[], lo: number, hi: number): number => {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;

            const temp = arr[i];

            arr[i] = arr[idx];

            arr[idx] = temp;
        }
    }

    idx++;
    arr[hi] = arr[idx];

    arr[idx] = pivot;
    console.log(`rec ${++partitionCallCount} idx: `, idx);

    return idx;
};

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
