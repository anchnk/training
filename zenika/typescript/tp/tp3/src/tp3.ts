enum NumberToString { 
  un = 1,
  deux = 2,
  trois = 3,
  quatre = 4,
  cinq = 5,
  six = 6,
  sept = 7,
  huit = 8,
  neuf = 9
};

export function returnPeopleAndLength(people: string[] = ['Miles', 'Mick']): [string, number][] {
  // let result: [string, number][] = [];
  // peoples.forEach(name => {
  //  const tuple : [string, number] = [name, name.length];
  //  result.push(tuple);
  // });
  // return result;
  return people.map((name: string): [string, number] => [name, name.length]);
}

export function displayPeopleAndLength(people?: string[], literal?: boolean): void {
  returnPeopleAndLength(people).forEach(tuple => {
    const [nom, charNumber] = tuple;
    if(literal && charNumber <= 9) {
      console.log(`${nom} contient ${NumberToString[charNumber]} caractères`);
    }
    // v1: console.log(`${tuple[0]} contient ${tuple[1]} caractères`);
    console.log(`${nom} contient ${charNumber} caractères`);
  });
}