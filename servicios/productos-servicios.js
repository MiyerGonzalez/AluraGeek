//GET
const listarProductos = () =>
    fetch(`https://644b05cd4bdbc0cc3a89ccb1.mockapi.io/api/producto`, {
        method: "GET",
        
        headers: {"Content-type": "application/json;charset=UTF-8"
        }
      })  
        .then(respuesta => respuesta.json())
        .catch((error) => console.log(error));
        


const listarUnProducto = (id) => {
    return fetch(`https://644b05cd4bdbc0cc3a89ccb1.mockapi.io/api/producto/${id}`, {
        method: "GET",
        
        headers: {"Content-type": "application/json;charset=UTF-8"
        }
      })
    .then((respuesta) => {
        return respuesta.json();
    });
};

//POST

const creaProductos = (name, imageUrl, price) => {
    return fetch(`https://644b05cd4bdbc0cc3a89ccb1.mockapi.io/api/producto`, {
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
    return fetch(`https://644b05cd4bdbc0cc3a89ccb1.mockapi.io/api/producto/${id}`, {
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
    return await fetch(`https://644b05cd4bdbc0cc3a89ccb1.mockapi.io/api/producto/${id}`, {
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