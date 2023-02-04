function paperRequirements(book1, book2, book3){
    const bookpage1 = 100;
    const bookpage2 = 200;
    const bookpage3 = 300;

    return (book1 * bookpage1) + (book2 * bookpage2) + (book3 * bookpage3);
}

const result = paperRequirements(1, 1, 1);
console.log(result);