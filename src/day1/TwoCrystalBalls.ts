export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}


const a = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
];

console.log(two_crystal_balls(a));

// så den hopper frem en SQRT av lengden, til den finner EN true, så hopper vi tilbake like langt en gang, for å finne sist gang den definitivt var false, og så går vi frem til vi finner den første FALSE fra det stedet
// derfor er det trenger man definitivt bare å gå sqrt(n()


