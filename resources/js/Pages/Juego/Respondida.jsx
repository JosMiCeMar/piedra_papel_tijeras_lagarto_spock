import GamesLayout from "@/Layouts/GamesLayout";
import { Head, Link } from "@inertiajs/react";

export default function Creado({ auth, resultado }) {
    const mano1 = "img/whiteHands/" + resultado["mano1"] + ".svg";
    const mano2 = "img/whiteHands/" + resultado["mano2"] + ".svg";
    return (
        <GamesLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl dark:text-gray-200 leading-tight">
                    Partidas Recibidas
                </h2>
            }
        >
            <Head title="Partidas Recibidas" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                    <p className="text-gray-100 text-4xl text-center">
                        {resultado["resultado"]}
                    </p>
                    <div className="grid grid-cols-5 gap-10">
                        <div className="flex flex-col justify-center items-end col-span-2">
                            <img className="w-40 h-40 mb-2" src={mano1} />
                            <p className="semibold text-gray-100 text-xl text-center">
                                {resultado["jug1"]}
                            </p>
                        </div>
                        <div className="flex col-span-1 text-center justify-center items-center">
                            <p className="text-gray-100 text-4xl">VS</p>
                        </div>
                        <div className="flex flex-col justify-center items-start col-span-2">
                            <img className="w-40 h-40 mb-2" src={mano2} />
                            <p className="semibold text-gray-100 text-xl text-center">
                                {resultado["jug2"]}
                            </p>
                        </div>
                    </div>
                    <Link
                        href={route("juego.recibidas")}
                        className="mt-15 underline text-xl text-indigo-400 rounded-md px-5 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                    >
                        Volver a partidas recibidas
                    </Link>
                </div>
            </div>
        </GamesLayout>
    );
}
