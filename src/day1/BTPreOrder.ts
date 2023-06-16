const walk = (
    currentNode: BinaryNode<number> | null,
    path: number[],
): number[] => {
    //first, if there is a left node, it will call itself again with a left node, if the left node is
    //null, it will return out and call it instead with right.
    //if
    if (!currentNode) {
        return path;
    }

    path.push(currentNode.value);

    walk(currentNode.left, path);
    walk(currentNode.right, path);

    return path;
};

export default function pre_order_search(head: BinaryNode<number>): number[] {
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

console.log(pre_order_search(tree));
