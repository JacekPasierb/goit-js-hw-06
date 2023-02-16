const numOfCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", numOfCategories.length);

for (const category of numOfCategories) {
    const headTittle = category.querySelector("h2");
    const numElements = category.querySelectorAll("li");
    console.log("Category:", headTittle.textContent);
    console.log("Elements:",numElements.length);
}