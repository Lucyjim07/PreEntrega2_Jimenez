import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsFillTrash3Fill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import "./CartScreen.css"

export const CartScreen = () => {
    const { carrito, precioTotal, removerItem, vaciarCarrito } =
        useContext(CartContext);

    return (
        <div className="container">
            <h3>Resumen de compras</h3>
            <hr />
            {carrito.map((prod) => (
                <>
                    <div className="listado">
                        <p>Productos: {prod.descripcion}</p>
                        <p>$ {prod.precio}</p>
                        <p>Cantidad: {prod.counter}</p>
                    </div>
                    <Button
                        className="btn btn-primary"
                        onClick={() => removerItem(prod.id)}
                    >
                        <BsFillTrash3Fill />
                    </Button>
                </>
            ))}
            <hr />
            <strong>Precio total: ${precioTotal()}</strong>
            <hr />
            <Button className="btn btn-primary" onClick={vaciarCarrito}>
                Vaciar Carrito
            </Button>
        </div>
    );
};
