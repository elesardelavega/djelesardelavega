import React from 'react'
import { LegalPage } from '../LegalPage'

export const PrivacyPolicyPage: React.FC = () => {
    return (
        <LegalPage title="Política de Privacidad">
            <section className="min-h-screen w-full bg-[hsl(var(--background))] flex justify-center items-start py-10 sm:pl-4 pl-4 pr-4 sm:pr-4">
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
                        Política de Privacidad
                    </h1>

                    <p>
                        Respetando lo establecido en la legislación vigente, <strong>Elesar De La Vega</strong> se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Normativa aplicable</h2>
                    <p>
                        Esta política está adaptada al Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPD-GDD), el Real Decreto 1720/2007 y la Ley 34/2002 de Servicios de la Sociedad de la Información.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Responsable del tratamiento</h2>
                    <p>
                        Responsable: <strong>Elesar De La Vega</strong><br />
                        Email de contacto: <strong>elesarvega@gmail.com</strong>
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Principios aplicables</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Licitud, lealtad y transparencia</li>
                        <li>Limitación de la finalidad</li>
                        <li>Minimización de datos</li>
                        <li>Exactitud y actualización</li>
                        <li>Limitación del plazo de conservación</li>
                        <li>Integridad y confidencialidad</li>
                        <li>Responsabilidad proactiva</li>
                    </ul>

                    <h2 className="mt-6 text-xl font-semibold text-white">Categorías de datos</h2>
                    <p>Se tratan únicamente datos identificativos. No se tratan categorías especiales de datos personales.</p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Base legal</h2>
                    <p>La base legal para el tratamiento es el consentimiento expreso del Usuario, que podrá retirarse en cualquier momento.</p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Finalidad</h2>
                    <p>
                        Los datos se recogen para facilitar la relación con el Usuario, atender consultas, mejorar el servicio y realizar análisis estadísticos o de marketing relacionados con la actividad de <strong>Elesar De La Vega</strong>.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Plazo de conservación</h2>
                    <p>Los datos se conservarán durante el tiempo mínimo necesario para los fines del tratamiento, en todo caso no más de 1 mes salvo solicitud de supresión.</p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Destinatarios</h2>
                    <p>Los datos no se compartirán con terceros, salvo obligación legal o servicios imprescindibles para el funcionamiento del sitio.</p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Menores de edad</h2>
                    <p>Solo los mayores de 14 años pueden otorgar consentimiento. Para menores será necesario el consentimiento de padres o tutores.</p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Seguridad</h2>
                    <p>
                        Se adoptan medidas técnicas y organizativas para garantizar la seguridad y confidencialidad de los datos. No obstante, se informará al Usuario en caso de violación de seguridad que implique riesgo para sus derechos.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Derechos del Usuario</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Acceso</li>
                        <li>Rectificación</li>
                        <li>Supresión (derecho al olvido)</li>
                        <li>Limitación del tratamiento</li>
                        <li>Portabilidad</li>
                        <li>Oposición</li>
                        <li>A no ser objeto de decisiones automatizadas</li>
                    </ul>

                    <h2 className="mt-6 text-xl font-semibold text-white">Ejercicio de derechos</h2>
                    <p>
                        El Usuario podrá ejercitar sus derechos mediante comunicación escrita a <strong>elesarvega@gmail.com</strong>, adjuntando copia de su DNI y especificando la petición.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold text-white">Cambios en la política</h2>
                    <p>
                        <strong>Elesar De La Vega</strong> se reserva el derecho a modificar esta política de privacidad en función de cambios legislativos o criterios de la Agencia Española de Protección de Datos.
                    </p>
                </div>
            </section>
        </LegalPage>
    )
}
