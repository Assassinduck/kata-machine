class queueNode<T> {
    public value: T;
    public next?: queueNode<T>;

    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}

export default class Queue<T> {
    public length: number;

    private head?: queueNode<T>;
    public tail?: queueNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        //insert at end of que to maintain fifo
        const node = new queueNode(item);

        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        //remove from front of que, setting up for the next item to be the "next" first
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head;

        this.head = this.head.next;
        if (this.length === 0) {
            this.tail = undefined;
        }
        head.next = undefined;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

const list = new Queue<number>();

list.enqueue(5);
list.enqueue(7);
list.enqueue(9);

console.log(list);
console.log(list.deque());
console.log(list);

list.enqueue(11);

console.log(list);

console.log(list.deque());
console.log(list.deque());
console.log(list.peek());

console.log(list);

console.log(list.deque());
console.log(list.deque());
console.log(list);

console.log(list.length);

console.log(list);

list.enqueue(69);
console.log(list);

console.log(list.peek());

list.enqueue(12);

list.enqueue(1212);


console.log(list);

list.deque()

console.log(list.peek());

