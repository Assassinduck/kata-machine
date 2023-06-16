class dNode<T> {
    value: T;
    prev?: dNode<T>;
    next?: dNode<T>;
    constructor(item: T) {
        this.value = item;
        this.next = undefined;
        this.prev = undefined;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: dNode<T>;
    public tail?: dNode<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    printList() {
        let i = 0;
        let arr = [];
        let currentNode = this.head;
        while (i < this.length) {
            arr.push(currentNode?.value);
            currentNode = currentNode?.next;
            i++;
        }
        return arr.join(",");
    }

    prepend(item: T): void {
        const newNode = new dNode(item);
        this.length++;
        if (this.head === undefined) {
            this.head = this.tail = newNode;
            return;
        }
        const oldHead = this.head;

        newNode.next = this.head;
        oldHead.prev = newNode;
        this.head = newNode;
        return;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) throw new Error("oh no");
        else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }
        this.length++;

        let newNode = new dNode(item);
        let currentNode = this.getAt(idx);

        newNode.next = currentNode;
        newNode.prev = currentNode?.prev;
        let prevItem = currentNode?.prev;

        prevItem = newNode;

        if (currentNode?.prev) {
            currentNode.prev.next = newNode;
        }
    }
    append(item: T): any {
        const newNode = new dNode(item);
        this.length++;

        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        return;
    }
    remove(item: T): T | undefined {
        let currentNode = this.head;

        if (!this.head) {
            console.log("you cant remove anything from an empty list");
            return;
        }

        let currentTail = this.tail;

        for (let i = 0; currentNode && i < this.length; i++) {
            if (currentNode.value === item) {
                break;
            }
            currentNode = currentNode.next;
        }
        if (!currentNode) {
            return undefined;
        }

        return this.removeNode(currentNode);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const currentNode = this.getAt(idx);
        

        if (!currentNode) {
            return undefined;
        }
        
        return this.removeNode(currentNode);
    }
    private getAt(idx: number): dNode<T> | undefined {
        let currentNode = this.head;
        for (let i = 0; currentNode && i < idx; ++i) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    private removeNode(node: dNode<T>): T | undefined {
                this.length--;

        if (this.length === 0) {
            const oldVal = this.head?.value;
            this.head = this.tail = undefined;
            return oldVal;
        }
        
        if (node.prev) {
            node.prev.next = node.next;
        }
        

        if (node.next) {
            node.next.prev = node.prev;
        }
        
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }
}

const l = new DoublyLinkedList();

l.append(5);
l.append(7);
l.append(9);

console.log(l.get(2));
console.log(l);

console.log(l.removeAt(1));
console.log(l);

