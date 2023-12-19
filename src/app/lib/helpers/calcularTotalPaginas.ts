export const calcularTotalPaginas = (totalItems: number) => {
    if (totalItems <= 0) {
        return 0; // No hay elementos, por lo tanto, 0 páginas
    }

    return Math.ceil(totalItems / 10);
};