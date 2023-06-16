class Node<T> {
    value: T;
    left?: Node<T>;
    right?: Node<T>;

    constructor(value: T) {
        this.value = value;
    }
}

export default class Trie<T> {
    height: number;
    root?: Node<T>;

    constructor() {
        this.root = undefined;
    }

    insert(item: T): void {}
    delete(item: string): void {}
    find(partial: string): string[] {}
}

let t = new Trie<number>();

