const hasUnvisited = (
    seen: boolean[],
    dists: number[],
): boolean => {
    return seen.some((state, i) => !state && dists[i] < Infinity)
};

const getLowestUnvisited = (
    seen: boolean[],
    dists: number[],
): number => {
    let idx = -1
    let lowestDistance = Infinity

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue
        }
        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i]
            idx = i
        }
        
    }
    return idx

};

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false);
    const dist = new Array(arr.length).fill(Infinity);
    const prev = new Array(arr.length).fill(-1)
    dist[source] = 0;

    while (hasUnvisited(seen, dist)) {
        const lowest = getLowestUnvisited(seen, dist);
        seen[lowest] = true
        
        const adjs = arr[lowest]

        for (let i = 0; i < adjs.length; i++) {
            let edge = adjs[i];
            if (seen[edge.to]) {
                continue
            }

            let distAdjs = dist[lowest] + edge.weight
            
            if (distAdjs < dist[edge.to]) {
                dist[edge.to] = distAdjs
                prev[edge.to] = lowest
            }

        }
    }
    const out: number[] = []
    let current = sink

    while (prev[current] != -1) {
        out.push(current)

        current = prev[current]
    }
    out.push(source)
    return out.reverse()
}
