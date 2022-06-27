interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {name: "Killamanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310},
]

export function findNameOfTallestMountain(mountains: Mountain[]): string {
//    let height = mountains[0].height;
   let highestMountain: Mountain = mountains[0];

    mountains.forEach((element) => {
        if(element.height > highestMountain.height){
            console.log(element.name);
            highestMountain = element;
        // return element.name;
       
    }
    });
    return highestMountain.name;
}
console.log(findNameOfTallestMountain(mountains));