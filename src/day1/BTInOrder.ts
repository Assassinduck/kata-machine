const walk = (
    currentNode: BinaryNode<number> | null,
    path: number[],
): number[] => {
    if (!currentNode) {
        return path;
    }

    walk(currentNode.left, path);
    path.push(currentNode.value);
    walk(currentNode.right, path);

    return path;
};

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}


export const tree: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 100,
            right: null,
            left: null,
        },
        left: {
            value: 30,
            right: {
                value: 45,
                right: null,
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: null,
            },
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        },
    },
};

console.log(in_order_search(tree));
