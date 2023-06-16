import { tree, tree3 } from "../__tests__/tree";

const find = (node: BinaryNode<number> | null, value: number): boolean => {
    if (!node) {
        return false;
    }

    if (node.value === value) {
        return true;
    }

    if (node.value < value) {
        return find(node.right, value);
    }
    return find(node.left, value);
};

const insert = (
    node: BinaryNode<number> | null,
    value: number,
): BinaryNode<number> => {
    let newNode = { value: value } as BinaryNode<number>;

    if (!node) {
        node = newNode;
        return node;
    }

    if (node?.value < value) {
        if (!node?.right) {
            node.right = newNode;
            return node;
        } else {
            insert(node.right, value);
        }
    } else if (node.value >= value) {
        if (!node.left) {
            node.left = newNode;
            return node;
        } else {
            insert(node.left, value);
        }
    }

    return node;
};

// export default function dfs(head: BinaryNode<number>, needle: number): boolean {
//     console.log(needle);
//     console.log(head);

//     insert(head, needle);

//     // return find(head, needle);
// }

function dfsI(head: BinaryNode<number> | null, needle: number): void {
    let a = insert(head, needle);

    console.log(find(a, 23));

    // return find(head, needle);
}

// dfsI(tree, 110);
// dfsI(tree, 110);
// dfsI(tree, 115);

dfsI(tree3, 23);
