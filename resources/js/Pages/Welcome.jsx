import { InicioLog } from "@/Components/InicioLog";
import { InicioNoLog } from "@/Components/InicioNoLog";
import Logo from "@/Components/Logo";
import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Inicio" />
            <div className="bg-gray-50 text-black/50 dark:bg-[#111827] dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <Logo className="w-40 h-auto"/>
                            </div>
                            <nav className="mx-3 flex flex-wrap flex-1 justify-end">
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
                                            className="rounded-md px-5 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
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

                        <main className="mt-6 w-100 text-center flex items-start justify-center">
                            <div className="">
                                {auth.user ? (
                                        <InicioLog user={auth.user}/>
                                ) : (
                                        <InicioNoLog></InicioNoLog>
                                )}
                            </div>
                        </main>

                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}
