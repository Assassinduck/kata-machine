export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }
        const deletedNode = this.data[this.length]; 
        this.data[0] = deletedNode
        this.data[this.length] = 0
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        const lIndex = this.leftChild(idx);
        const rIndex = this.rightChild(idx);
        if (idx >= this.length || lIndex >= this.length) {
            return;
        }
        const lV = this.data[lIndex];
        const rV = this.data[rIndex];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.data[idx] = rV;
            this.data[rIndex] = v;
            this.heapifyDown(rIndex);
        } else if (rV > lV && v > lV) {
            this.data[idx] = lV;
            this.data[lIndex] = v;
            this.heapifyDown(lIndex);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parentNode = this.parent(idx);
        const parentVal = this.data[parentNode];
        const currentVal = this.data[idx];

        if (parentVal > currentVal) {
            this.data[idx] = parentVal;
            this.data[parentNode] = currentVal;
            this.heapifyUp(parentNode);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}

// export default class MinHeap {
//     public length: number;
//     private data: number[];

//     constructor() {
//         this.data = [];
//         this.length = 0;
//     }

//     insert(value: number): void {
//         this.data[this.length] = value;
//         this.heapifyUp(this.length);
//         this.length++;
//     }

//     delete(): number {
//         if (this.length === 0) {
//             return -1;
//         }

//         const out = this.data[0];
//         this.length--;

//         if (this.length === 0) {
//             this.data = [];
//             return out;
//         }

//         this.data[0] = this.data[this.length];
//         this.heapifyDown(0);
//         return out;
//     }

//     private heapifyDown(idx: number): void {
//         const Lidx = this.leftChild(idx);
//         const Ridx = this.rightChild(idx);

//         if (idx >= this.length || Lidx >= this.length) {
//             return;
//         }

//         const lV = this.data[Lidx];
//         const rV = this.data[Ridx];
//         const v = this.data[idx];

//         if (lV > rV && v > rV) {
//             this.data[idx] = rV;
//             this.data[Ridx] = v;
//             this.heapifyDown(Ridx);
//         } else if (rV > lV && v > lV) {
//             this.data[idx] = lV;
//             this.data[Lidx] = v;
//             this.heapifyDown(Lidx);
//         }
//     }

//     private heapifyUp(idx: number): void {
//         if (idx === 0) {
//             return;
//         }

//         const p = this.parent(idx);
//         const parentV = this.data[p];
//         const v = this.data[idx];

//         if (parentV > v) {
//             this.data[idx] = parentV;
//             this.data[p] = v;
//             this.heapifyUp(p);
//         }
//     }

//     private parent(idx: number): number {
//         return Math.floor((idx - 1) / 2);
//     }

//     private leftChild(idx: number): number {
//         return idx * 2 + 1;
//     }

//     private rightChild(idx: number): number {
//         return idx * 2 + 2;
//     }
// }

let heap = new MinHeap();

// console.log(heap.length);
heap.insert(5);
heap.insert(3);
heap.insert(69);
heap.insert(420);
heap.insert(4);
heap.insert(1);
heap.insert(8);
heap.insert(7);
// console.log(heap);
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());

console.log(heap.length);
console.log("dwddw", heap);

// //expect(heap.length).toEqual(8);
// console.log(heap.delete());

// //  expect(heap.delete()).toEqual(1);
// console.log("heap", heap.delete());
// //  expect(heap.delete()).toEqual(3);
// console.log(heap.delete());
// //  expect(heap.delete()).toEqual(4);
// console.log(heap.delete());
// console.log(heap.delete());
// console.log(heap.delete());
// console.log(heap.delete());
// console.log(heap.delete());

// console.log(heap);

//  expect(heap.delete()).toEqual(5);
//  expect(heap.length).toEqual(4);
//  expect(heap.delete()).toEqual(7);
//  expect(heap.delete()).toEqual(8);
//  expect(heap.delete()).toEqual(69);
//  expect(heap.delete()).toEqual(420);
//  expect(heap.length).toEqual(0);
