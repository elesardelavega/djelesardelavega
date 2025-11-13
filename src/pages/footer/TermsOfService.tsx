import React from 'react'
import { LegalPage } from '../LegalPage'

export const TermsOfServicePage: React.FC = () => {
    return (
        <LegalPage title="Términos Legales">
            <section className="min-h-screen w-full bg-[hsl(var(--background))] flex justify-center items-start py-16">
                <div
                    className="
                        w-full max-w-[1440px] mx-auto p-10 
                        bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg
                        shadow-none transition-all cursor-pointer
                        hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
                        space-y-6
                    "
                >
                    <h1 className="text-3xl font-bold text-white mb-6">
                        Aviso Legal y Condiciones Generales de Uso
                    </h1>

                    <h2 className="mt-6 text-xl font-semibold text-white">I. Información General</h2>
                    <p>
                        En cumplimiento con la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE),
                        se informa que la titularidad de este sitio web <strong>https://elesardelavega.netlify.app/</strong> corresponde a
                        <strong> Elesar De La Vega</strong>, con correo de contacto <strong>elesarvega@gmail.com</strong>.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">II. Términos y Condiciones Generales de Uso</h2>
                    <p>
                        El objeto de estas condiciones es regular el acceso y la utilización del Sitio Web y sus contenidos. El acceso es libre y gratuito,
                        salvo el coste de conexión a través de la red de telecomunicaciones contratada por el Usuario.
                    </p>
                    <p>
                        El Usuario reconoce y acepta que el Sitio Web puede modificar, interrumpir o cancelar en cualquier momento la presentación y configuración
                        de los contenidos y servicios ofrecidos.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">El Usuario</h2>
                    <p>
                        El acceso, la navegación y uso del Sitio Web confiere la condición de Usuario, lo que implica la aceptación de todas las condiciones aquí establecidas.
                        El Usuario se compromete a realizar un uso adecuado de la información y servicios ofrecidos, respetando la ley, la moral y el orden público.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">III. Exclusión de Garantías y Responsabilidad</h2>
                    <p>
                        <strong>Elesar De La Vega</strong> no garantiza la continuidad, disponibilidad ni utilidad del Sitio Web, ni que esté libre de errores o virus.
                        No se responsabiliza de los daños que puedan derivarse del acceso, uso o mala utilización del sitio.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">IV. Política de Enlaces</h2>
                    <p>
                        El Sitio Web puede poner a disposición del Usuario enlaces a sitios de terceros. <strong>Elesar De La Vega</strong> no se responsabiliza
                        de los contenidos, servicios o daños que puedan derivarse del acceso a dichos sitios externos.
                    </p>
                    <p>
                        No se permite la reproducción total o parcial de los contenidos del Sitio Web sin autorización expresa, ni manifestaciones falsas o inexactas
                        sobre el mismo.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">V. Propiedad Intelectual e Industrial</h2>
                    <p>
                        Todos los contenidos del Sitio Web (textos, imágenes, logotipos, software, diseño, etc.) son propiedad de <strong>Elesar De La Vega</strong>
                        y están protegidos por la legislación española y europea en materia de propiedad intelectual e industrial.
                    </p>
                    <p>
                        El Usuario podrá visualizar, imprimir o almacenar los contenidos únicamente para uso personal, quedando prohibida su reproducción o distribución
                        con fines comerciales sin autorización expresa.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">VI. Legislación Aplicable y Jurisdicción</h2>
                    <p>
                        La relación entre el Usuario y <strong>Elesar De La Vega</strong> se regirá por la normativa vigente en España. En caso de controversia,
                        ambas partes se someterán a los jueces y tribunales competentes conforme a derecho.
                    </p>

                    <p className="mt-6 text-sm text-[hsl(var(--muted-foreground))]">
                        Documento actualizado el 13/11/2025.
                    </p>
                </div>
            </section>
        </LegalPage>
    )
}
