export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;

    const q: number[] = [source];

    do {
        const current = q.shift() as number;

        if (current === needle) {
            break;
        }

        const adjs = graph[current];

        for (let index = 0; index < adjs.length; index++) {

            if (adjs[index] === 0) {
                continue;
            }
            if (seen[index]) {
                continue;
            }

            seen[index] = true;
            prev[index] = current;

            q.push(index);
        }
    } while (q.length);

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        console.log("Prev node", prev[curr]);
        
        out.push(curr);
        curr = prev[curr];
        console.log("new curr",curr);
        
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }
    return null;
}
