import GamesLayout from "@/Layouts/GamesLayout";
import { Head } from "@inertiajs/react";

export default function Finalizadas({ auth, partidas, cantidad }) {
    function icono(nombre) {
        const enlace = `/img/whiteHands/${nombre}.svg`;
        return <img className="w-10 m-3 inline" src={enlace} />;
    }

    function tabla() {
        if (cantidad > 0) {
            return (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-dark-50 text-center">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                >
                                    Atacante
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                >
                                    Mano del atacante
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                >
                                    Defensor
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                >
                                    Mano del defensor
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                >
                                    Resultado
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-dark-50 divide-y divide-gray-200 text-gray-200 text-center">
                            {partidas.map((dato, index) => (
                                <tr key={index}>
                                    <td>{dato["atac"]}</td>
                                    <td>{icono(dato["manoAtac"])}</td>
                                    <td>{dato["def"]}</td>
                                    <td>{icono(dato["manoDef"])}</td>
                                    {ganador(dato["ganador"])}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    function ganador(valor) {
        let color = "";
        valor == "Ganada"
            ? (color = "text-green-500")
            : valor == "Perdida"
            ? (color = "text-red-500")
            : (color = "text-yellow-500");

        return <td className={color}>{valor}</td>;
    }

    return (
        <GamesLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl dark:text-gray-200 leading-tight">
                    Partidas Finalizadas
                </h2>
            }
        >
            <Head title="Partida Finalizadas" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                    <p className="font-semibold text-bg text-gray-200">
                        {auth.user.name}, tienes {cantidad} partidas
                        finalizadas.
                    </p>
                    {tabla()}
                </div>
            </div>
        </GamesLayout>
    );
}
