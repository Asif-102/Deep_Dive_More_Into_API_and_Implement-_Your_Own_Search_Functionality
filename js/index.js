const allMenus = [];

const loadProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

const setMenus = async () => {
    const allProducts = await loadProducts();
    // console.log(allProducts);
    const menus = document.getElementById("all-menus");

    // console.log(menus.children)

    for(const product of allProducts)
    {
        // console.log(product.category)
        // console.log(allMenus.indexOf(product.category))
        if(allMenus.indexOf(product.category) === -1)
        {
            allMenus.push(product.category);

            const li = document.createElement("li");
            li.innerHTML = `<a>${product.category}</a>`;
            
            menus.appendChild(li);
        }
    }
}

setMenus();