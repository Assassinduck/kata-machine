const walk = (
    currentNode: BinaryNode<number> | null,
    path: number[],
): number[] => {
    if (!currentNode) {
        return path;
    }

    walk(currentNode.left, path);
    walk(currentNode.right, path);
    path.push(currentNode.value);

    return path;
};

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
