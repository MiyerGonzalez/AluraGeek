//GET
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

const yourUrl =
`https://github.com/MiyerGonzalez/alurageek/db.json`;

const listarProductos = () =>
fetch(corsAnywhere + yourUrl, {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }),
})
    .then(respuesta => respuesta.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
   
    
    

/*const listarProductos = () =>
    fetch('https://github.com/MiyerGonzalez/alurageek/db.json', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })  
        .then(respuesta => respuesta.json())
        .catch((error) => console.log(error));*/
        


const listarUnProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`)
    .then((respuesta) => {
        return respuesta.json();
    });
};

//POST

const creaProductos = (name, imageUrl, price) => {
    return fetch(`http://localhost:3000/producto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            name,
            imageUrl,
            price,
        }),
    }).then((respuesta)  => {
        if(respuesta.ok){
            return respuesta.body;
        }
        throw new Error("no es posible cargar un producto");
    });

};



//PUT/PATCH
const alteraProduto = async(id,name, price, description) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            description,
        }),
    })
    .then((respuesta) => {
        return respuesta.json();
    })
    .catch((error) => console.log(error));
};

//DELETE

const deleteProducto = async(id) => {
    return await fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json",
        },
    });
};


export const productoServices = {
    listarProductos,
    listarUnProducto,
    creaProductos,
    alteraProduto,
    deleteProducto,
};