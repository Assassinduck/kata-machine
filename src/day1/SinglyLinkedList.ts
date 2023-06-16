class node<T> {
    item: T;
    next: node<T> | null;

    constructor(item: T, next = null) {
        this.item = item;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head: node<T> | null;
    public tail: node<T> | null;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getLength() {
        return this.length;
    }

    prepend(item: T): void {
        const newNode = new node<T>(item);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
            this.length += 1;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return;
    }
    insertAt(item: T, idx: number): void {
        const newNode = new node<T>(item);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        if (idx === 0) {
            let head = this.head;
            this.head = newNode;
            this.head.next = head;
            this.length += 1;
            return;
        }

        if (idx > this.length - 1) {
            console.log(
                "Error: Out of bounds, item put after last item in list",
            );
            let tail = this.tail;
            this.tail = newNode;
            this.tail.next = tail;
            this.length += 1;
            return;
        }

        if (idx < 0) {
            console.log("Out of bounds, item gets put in first slot");
            let head = this.head;
            this.head = newNode;
            this.head.next = head;
            this.length += 1;
            return;
        }

        let currNode = this.head;
        let index = 0;
        while (index < this.length) {
            if (currNode.next === null) {
                currNode.next = newNode;
                this.length += 1;
                return;
            }

            if (index === idx - 1) {
                const oldLeftNode = currNode.next;
                currNode.next = newNode;
                currNode.next.next = oldLeftNode;
                this.length += 1;
                return;
            }

            index += 1;
            currNode = currNode.next;
        }
    }
    append(item: T): void {
        const newNode = new node<T>(item);

        if (this.head === null) {
            this.head = new node<T>(item);
            this.length += 1;
            return;
        }

        let last: node<T> | null = this.head;

        while (last?.next != null) {
            last = last.next;
        }
        last.next = newNode;
        this.length += 1;
        return;
    }
    remove(item: T): T | undefined {
        if (this.head === null) {
            console.log("Cant remove anything from an empty list");
            return;
        }

        let currNode = this.head;
        let nextNode = currNode.next;
        let currentItem = currNode.item;
        let nextItem = currNode.next?.item;
        const rightOfRemoved = currNode.next?.next;

        let index = 0;

        if (this.head.item === item) {
            if (this.head.next === null) {
                this.head = null;
                this.length -= 1;
                return currentItem;
            }
            this.head = this.head.next;
            this.length -= 1;
            return currentItem;
        }

        while (currNode.next && index < this.length - 1) {
            if (currNode.next.item === item) {
                let temp = currNode.next.item;
                console.log("item", item);
                currNode.next = currNode.next.next;
                this.length -= 1;
                return temp;
            }
            index += 1;
            currNode = currNode.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        if (this.head === null) {
            console.log("Cant get anything from an empty list");
            return;
        }

        if (idx > this.length - 1) {
            console.log("Out of bounds");
            return;
        }

        let currNode = this.head;
        let index = 0;
        while (index !== idx && currNode.next) {
            index += 1;
            currNode = currNode.next;
        }
        console.log("get", currNode);

        return currNode.item;
    }
    removeAt(idx: number): T | undefined {
        if (this.head === null) {
            console.log("Cant remove anything from an empty list");
            return;
        }

        if (idx > this.length - 1) {
            console.log("Out of bounds");
            throw new Error("Out of bounds");
            return;
        }

        if (idx === 0) {
            const removedVal = this.head.item;

            if (this.head.next === null) {
                this.head = null;
                this.length -= 1;
                return removedVal;
            }

            this.head = this.head.next;
            this.length -= 1;
            return removedVal;
        }

        let currNode = this.head;
        let index = 0;
        while (index !== idx - 1 && currNode.next) {
            index += 1;
            currNode = currNode.next;
        }

        const removedValue = currNode.next?.item;
        const removedNode = currNode.next;
        const rightOfRemoved = removedNode?.next;

        if (rightOfRemoved !== undefined && rightOfRemoved !== null) {
            currNode.next = rightOfRemoved;
            rightOfRemoved.next = null;
            this.length -= 1;
            return removedValue;
        }

        currNode.next = null;

        this.length -= 1;

        return removedValue;
    }
}

let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();

// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
// list.append(7);
// list.prepend(99);

list.append(5);
list.append(7);
list.append(9);

list.removeAt(1);
console.log(list);
list.append(11);
console.log(list);
list.getLength();

console.log(list.removeAt(1));
console.log(list.remove(9));
console.log(list.removeAt(0));
console.log(list.removeAt(0));
console.log(list.length);

console.log(list);

list.prepend(5);
list.prepend(7);
list.prepend(9);
console.log(list);

console.log(list.length);
console.log(list.get(2));

// console.log(list);
// list.remove(7);
// console.log(list);

// console.log(list.head?.next?.next?.next?.next?.next);
// list.removeAt(5);
// console.log(list);
// console.log(list.head?.next?.next?.next?.next?.next);
// console.log(list);
console.log(list);

list.insertAt(5, 1);
console.log(list);

list.insertAt(1, 2);
console.log(list);

list.insertAt(8, 3);
console.log(list);

list.insertAt(4, 4);
console.log(list);

console.log(list);

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
console.log(list.get(4));
console.log(list.get(5));
console.log(list.get(6));
console.log("list", list.head?.next?.next);

console.log(list.tail);
