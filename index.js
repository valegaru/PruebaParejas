const arrayObjects = [
	{
		name: 'Arroz',
		precio: 12,
	},
	{
		name: 'Tomate',
		precio: 53,
	},
	{
		name: 'Cebolla',
		precio: 49,
	},
];

const filtrarPrecio = (productos) => {
	const filtrados = productos.filter((producto) => producto.precio > 50);
	return filtrados;
};

const filtrados = filtrarPrecio(arrayObjects);
console.log(filtrados);
