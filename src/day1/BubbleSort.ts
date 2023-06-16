const bsSwap = (arr: number[], first: number) => {
    const tempContainer = arr[first];
    arr[first] = arr[first + 1];
    arr[first + 1] = tempContainer;
    return arr;
};

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        // så mange ganger den ytre loopen kommer til å kjøre den indre loopen
        console.log("wdad", arr.length - 1 - i);
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            //Denner teller ned 1 - 2 - 3 - 4 - 5 - 6 etc.. på ombråde av arrayen vi sjekker fordi vi ikke trenger å sjekke arr[6] og arr[7] mer enn 1 gang, men vi trenger fortsatt å sjekke arr[5] og arr[6].
            // det vill si inklusiv bunn, eksklusiv topp e.i sjekk 1-2 2-3 4-5 5-6 6-7, og så 1-2 2-3 3-4 4-5 5-6. etc..
            // så mange ganger den indre loopen, kjører hver gang den ytr loopen kjører den
            if (arr[j] > arr[j + 1]) {
                bsSwap(arr, j);
            }
        }
    }
}

console.log(bubble_sort([1, 3, 7, 5, 3, 8, 9]));
