export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length) {
        const currentItem = q.shift() as BinaryNode<number>;

        if (currentItem.value === needle) {
            return true;
        }

        if (currentItem.left) {
            q.push(currentItem.left);
        }
        if (currentItem.right) {
            q.push(currentItem.right);
        }

        console.log(q);
    }

    return false;
}
