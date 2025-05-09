import Logo from "@/Components/Logo";
import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Ranking({ auth, ganadores, atacantes, defensores}) {
    return (
        <>
            <Head title="Ranking" />
            <div className="bg-gray-50 text-black/50 min-h-screen dark:bg-[#111827] dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className=" flex lg:justify-center lg:col-start-2">
                                <Link href="/">
                                    <Logo className="w-20 h-auto mx-10" />
                                </Link>
                            </div>
                            <nav className="-mx-3 flex flex-1 flex-wrap justify-end">
                                {auth.user ? (
                                    <>
                                        <Link
                                            href={route("juego.crear")}
                                            className="rounded-md px-5 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            ¡Vamos a jugar!
                                        </Link>
                                        <Link
                                            href={route("ranking")}
                                            className="rounded-md underline px-5 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            
                                        >
                                            Ranking
                                        </Link>
                                        <Link
                                            href={route("dashboard")}
                                            className="rounded-md px-5 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Tu perfil
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route("ranking")}
                                            className="rounded-md px-5 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Ranking
                                        </Link>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Identifícate
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Regístrate
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                        <main className="mt-6 w-100 text-center flex gap-6 flex-wrap items-center justify-center">
                            <div className="mt-10">
                            <h2 className="text-xl text-gray-200 uppercase text-center flex items-baseline justify-center w-100">
                                <img src="/img/rankingIcon.svg" className="w-10 inline mx-3"/>
                                Ranking de atacantes
                                <img src="/img/rankingIcon.svg" className="w-10 inline mx-3"/>
                            </h2>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-dark-50 text-center">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Posición
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Jugador
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Partidas como Atacante
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-dark-50 divide-y divide-gray-200 text-gray-200 text-center">
                                    {atacantes.map((element, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{element.name}</td>
                                            <td>{element.partidas_atacante}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            <div className="mt-10">
                            <h2 className="text-xl text-gray-200 uppercase text-center flex items-baseline justify-center w-100">
                                <img src="/img/rankingIcon.svg" className="w-10 inline mx-3"/>
                                Ranking de Defensores
                                <img src="/img/rankingIcon.svg" className="w-10 inline mx-3"/>
                            </h2>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-dark-50 text-center">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Posición
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Jugador
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Partidas como Defensor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-dark-50 divide-y divide-gray-200 text-gray-200 text-center">
                                    {defensores.map((element, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{element.name}</td>
                                            <td>{element.partidas_atacante}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            <div className="mt-10">
                            <h2 className="text-xl text-gray-200 uppercase text-center flex items-baseline justify-center w-100">
                                <img src="/img/rankingIcon.svg" className="w-10 inline mx-3"/>
                                Ranking de partidas ganadas
                                <img src="/img/rankingIcon.svg" className="w-10 inline mx-3"/>
                            </h2>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-dark-50 text-center">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Posición
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Jugador
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                                        >
                                            Partidas Ganadas
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-dark-50 divide-y divide-gray-200 text-gray-200 text-center">
                                    {ganadores.map((element, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{element.name}</td>
                                            <td>{element.partidas_ganadas}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
