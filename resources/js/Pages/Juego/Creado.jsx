import GamesLayout from "@/Layouts/GamesLayout";
import { Head } from '@inertiajs/react';


export default function Creado({ auth, nombre, mano }) {

    const enlace = "img/whiteHands/"+ mano + ".svg";

    return (
        <GamesLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl dark:text-gray-200 leading-tight">
                    Crear Partida
                </h2>
            }
        >
            <Head title="Crear Partida" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                <p className="font-semibold text-bg text-gray-200">
                    Has desafiado al jugador {nombre} con <img className="w-10 inline m-2" src={enlace} alt="icon" />
                </p>
                <p className="text-gray-200">{"(Tendrás que esperar su respuesta)"}</p>
            </div>
            </div>
        </GamesLayout>
    );
}
