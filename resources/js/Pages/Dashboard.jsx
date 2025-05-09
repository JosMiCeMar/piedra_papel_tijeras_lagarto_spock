import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({
    auth,
    creadas,
    recibidas,
    finalizadas,
    ganadas,
    perdidas,
    empatadas,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Panel de Usuario
                </h2>
            }
        >
            <Head title="Tu perfil" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <p className="text-lg font-semibold mb-4">
                                Datos de tus partidas:
                            </p>
                            <div className="divide-y divide-gray-200">
                                <div className="py-4">
                                    <h2 className="text-lg font-semibold mb-2">
                                        Información de partidas
                                    </h2>
                                    <ul className="list-disc ml-6">
                                        <li>
                                            Total de partidas creadas: {creadas}
                                        </li>
                                        <li>
                                            Total de partidas recibidas:{" "}
                                            {recibidas}
                                        </li>
                                        <li>
                                            Total de partidas finalizadas:{" "}
                                            {finalizadas}
                                        </li>
                                    </ul>
                                </div>

                                <div className="py-4">
                                    <h2 className="text-lg font-semibold mb-2">
                                        Estadísticas de partidas
                                    </h2>
                                    <ul className="list-disc ml-6">
                                        <li>Partidas ganadas:{" "}{ganadas}</li>
                                        <li>Partidas perdidas:{" "}{perdidas}</li>
                                        <li>Partidas empatadas:{" "}{empatadas}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
