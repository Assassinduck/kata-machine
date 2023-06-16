class sNode<T> {
    public value?: T;
    public prev?: sNode<T>;

    constructor(item?: T) {
        this.value = item;
        this.prev = undefined;
    }
}

export default class Stack<T> {
    public length: number;

    private head?: sNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const newNode = new sNode(item);
        if (this.head === undefined) {
            this.head = newNode;
            this.length++;
            return;
        }
        this.length++;

        const head = this.head;

        newNode.prev = head;
        this.head = newNode;
        return;
    }
    pop(): T | undefined {
        const oldHead = this.head;
        const newHead = this.head?.prev;
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            this.head = undefined;
            return oldHead?.value;
        }
        this.head = newHead
        return oldHead?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

const list = new Stack();

list.push(5);
list.push(7);
list.push(9);

console.log(list);

console.log(list.pop());

console.log(list.length);
console.log(list.pop());
console.log(list.pop());
console.log(list.length);
