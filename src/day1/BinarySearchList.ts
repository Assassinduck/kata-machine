export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length;
    let low = 0;

    do {
        const middle = Math.floor(low + (high - low) / 2);
        console.log(middle);
        const val = haystack[middle];

        if (val === needle) {
            return true;
        } else if (needle < val) {
            high = middle;
        } else {
            low = middle + 1;
        }
    } while (low < high);
    return false;
}

const a = [3, 5, 6, 7, 8, 9, 4, 2, 1];

console.log(bs_list(a.sort(), 5));
