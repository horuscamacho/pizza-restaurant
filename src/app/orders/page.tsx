export default function OrdersPage() {
    return (
        <div className="p-4 lg:px-20 xl:px-40">
            <table className="w-full border-separate border-spacing-3">
                <thead>
                <tr className="text-left">
                    <th className="hidden md:block">Orden</th>
                    <th>Fecha</th>
                    <th>Precio</th>
                    <th className="hidden md:block">Productos</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr className="text-sm md:text-base bg-red-50">
                    <td className="hidden md:block py-6 px-1">1237861238721</td>
                    <td className="py-6 px-1">19.07.2023</td>
                    <td className="py-6 px-1">89.90</td>
                    <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
                    </td>
                    <td className="py-6 px-1 font-bold text-red-500">En camino (aprox. 10min)...</td>
                </tr>
                <tr className="text-sm md:text-base odd:bg-gray-100">
                    <td className="hidden md:block py-6 px-1">1237861238721</td>
                    <td className="py-6 px-1">19.07.2023</td>
                    <td className="py-6 px-1">89.90</td>
                    <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
                    </td>
                    <td className="py-6 px-1 font-bold text-red-500">En camino (aprox. 10min)...</td>
                </tr>
                <tr className="text-sm md:text-base odd:bg-gray-100">
                    <td className="hidden md:block py-6 px-1">1237861238721</td>
                    <td className="py-6 px-1">19.06.2023</td>
                    <td className="py-6 px-1">89.90</td>
                    <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
                    </td>
                    <td className="py-6 px-1 text-green-900 font-bold">Entregada</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};