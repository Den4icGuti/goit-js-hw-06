const ulItemRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${ulItemRef.length}`);


ulItemRef.forEach(elements => {
    
    const titleRef = elements.querySelector('h2');

    const getElementLi = elements.querySelectorAll('li');


    
    console.log(`Category: ${titleRef.textContent}`);

    console.log(`Elements: ${getElementLi.length}`)

})