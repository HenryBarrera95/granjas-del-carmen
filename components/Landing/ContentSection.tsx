import Link from "next/link";

const ContentSection = () => {
  return (
    <div className="bg-black h-96">
      <div className="flex flex-col">
        <main className="flex-1">
          <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-mainbg">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary">
                    Bienvenido a Granjas del Carmen
                  </h1>
                  <p className="mx-auto max-w-[700px] text-[#5c5c5c] md:text-xl mt-4">
                    Descubre la alegría de criar a nuestros adorables conejos.
                    Explora nuestra granja y aprende sobre nuestras prácticas
                    sostenibles.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <img
                    alt="Rabbit"
                    className="rounded-xl"
                    height="400"
                    src="/rabbitsMain.jpg"
                    style={{
                      aspectRatio: "500/400",
                      objectFit: "cover",
                    }}
                    width="500"
                  />
                  <div className="space-x-4">
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primaryBg shadow transition-colors hover:bg-[#8c6239]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8c6239] disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Comprar Conejos
                    </Link>
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md border border-[#8c6239] bg-mainbg px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-emptybg/90 hover:text-[#8c6239] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8c6239] disabled:pointer-events-none disabled:opacity-50]"
                      href="#"
                    >
                      Aprender más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-emptybg text-primary">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primaryBg px-3 py-1 text-sm">
                    Nuestros conejos
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Descubre nuestros adorables conejos
                  </h2>
                  <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nuestra granja es hogar de una variedad de razas de conejos,
                    cada una con sus propias personalidades y características
                    únicas. Ven a explorar nuestros conejos y encuentra tu
                    compañero perfecto.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1">
                  <img
                    alt="Conejo 1"
                    className="rounded-xl"
                    height="300"
                    src="/giantFlemish.jpg"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-lg font-bold text-[#8c6239]">
                    Gigante Flamenco
                  </h3>
                  <p className="text-sm text-[#5c5c5c]">
                    Un gigante gentil con un temperamento tranquilo y amigable.
                  </p>
                </div>
                <div className="grid gap-1">
                  <img
                    alt="Conejo 2"
                    className="rounded-xl"
                    height="300"
                    src="/miniRex.jpg"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-lg font-bold text-[#8c6239]">Mini Rex</h3>
                  <p className="text-sm text-[#5c5c5c]">
                    Una raza compacta y cariñosa con un pelaje suave y
                    aterciopelado.
                  </p>
                </div>
                <div className="grid gap-1">
                  <img
                    alt="Conejo 3"
                    className="rounded-xl"
                    height="300"
                    src="/dutchRabbit.jpg"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-lg font-bold text-[#8c6239]">Holandés</h3>
                  <p className="text-sm text-[#5c5c5c]">
                    Una raza compacta y enérgica con un patrón de color
                    distintivo.
                  </p>
                </div>
              </div>

              <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#8c6239] px-8 text-sm font-medium text-emptybg shadow transition-colors hover:bg-[#8c6239]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8c6239] disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Comprar Conejos
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#8c6239] border-[#8c6239] bg-emptybg px-8 text-sm font-medium shadow-sm transition-colors hover:bg-emptybg/90 hover:text-[#8c6239] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8c6239] disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Aprender Más
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e0d1c1]">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#8c6239]">
                  Experimenta la Alegría de Criar Conejos
                </h2>
                <p className="mx-auto max-w-[600px] text-[#5c5c5c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra granja ofrece una oportunidad única para conectarte
                  con la naturaleza y disfrutar de la compañía de nuestros
                  adorables conejos. Únete a nosotros y descubre la alegría de
                  ser dueño de conejos.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  {/* <input type="text" /> */}
                  <input
                    className="max-w-lg flex-1 bg-emptybg text-[#5c5c5c]"
                    placeholder="Ingresa tu correo"
                    type="email"
                  />
                  {/* <input
                    className="bg-[#8c6239] text-emptybg hover:bg-[#8c6239]/90 dark:bg-emptybg dark:text-[#8c6239] dark:hover:bg-emptybg/90"
                    type="submit"
                    placeholder="Enviar"
                  /> */}
                  <button
                    type="submit"
                    className="bg-[#8c6239] text-primaryBg hover:bg-[#8c6239]/90 px-2"
                  >
                    Enviar
                  </button>
                </form>
                <p className="text-xs text-[#5c5c5c]">
                  Regístrese para recibir una notificación cuando lancemos.
                  <Link
                    className="underline underline-offset-2 text-[#8c6239]"
                    href="#"
                  >
                    Terminos y condiciones
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-emptybg">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#e0d1c1] px-3 py-1 text-sm">
                    Nuestra Granja
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#8c6239]">
                    Prácticas Agrícolas Sostenibles
                  </h2>
                  <p className="max-w-[900px] text-[#5c5c5c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    En nuestra granja, estamos comprometidos con prácticas
                    sostenibles y éticas. Nos esforzamos por brindar el mejor
                    cuidado para nuestros conejos y para el medio ambiente.
                  </p>
                </div>
              </div>
              <div className="items-center py-12 lg:grid-cols-2 ">
                <img
                  alt="Farm"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/Farm.jpg"
                  width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1 pt-4">
                        <h3 className="text-xl font-bold text-[#8c6239]">
                          Prácticas Éticas
                        </h3>
                        <p className="text-[#5c5c5c]">
                          Priorizamos el bienestar de nuestros conejos y nos
                          aseguramos de que sean tratados con el máximo cuidado
                          y respeto.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ContentSection;
