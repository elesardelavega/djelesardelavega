import React from 'react'
import { Title, Text, Card, Group, Button } from '@mantine/core'
import { rem } from '@mantine/core'
import { IconHeadset, IconTools, IconDisc } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { IconPhone } from '@tabler/icons-react'
import { useNavigation } from '../../hooks/useNavigation'

import setupPhoto from '../../assets/rider/rx2.png'

export const SetupGear: React.FC = () => {
    const primaryForeground = 'text-[hsl(var(--foreground))]'
    const mutedForeground = 'text-[hsl(var(--muted-foreground))]'
    const primaryColor = 'bg-[hsl(var(--primary))]'
    const primaryBorder = 'border-[hsl(var(--primary))]'
    const { contactLink } = useNavigation()

    return (
        <section className="w-full pb-20 bg-[hsl(var(--background))]" id="setup-rider">
            <div className="mx-auto max-w-[1440px] px-8">

                {/* TÍTULO */}
                <Title
                    order={2}
                    ta="center"
                    mb="xl"
                    className={`text-4xl font-serif ${primaryForeground}`}
                >
                    Rider Técnico ⚙️
                </Title>

                {/* Card */}
                <Card
                    shadow="xl"
                    padding="xl"
                    radius="lg"
                    withBorder
                    className={`
                        group w-full bg-[hsl(var(--card))] border-[hsl(var(--border))] 
                        shadow-none transition-all duration-500 cursor-pointer 
                        hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))] 
                        opacity-0 animate-fade-in-up
                    `}
                    style={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                    }}
                >
                    <div className="flex flex-col desk:flex-row items-center justify-between gap-0">

                        {/* Descripcion */}
                        <div className="desk:w-7/12 flex flex-col space-y-4 text-center desk:text-left">

                            <Title order={3} className={`text-2xl font-bold ${primaryForeground}`}>
                                Setup y Rider Técnico
                            </Title>

                            <Text size="md" className={`${mutedForeground} font-sans pt-2 pb-4`}>
                                Configuración profesional adaptable a cualquier entorno, garantizando calidad y fiabilidad en cada actuación.
                            </Text>

                            {/* Detalle */}
                            <ul className="space-y-6 text-left list-none pl-0">
                                <li className={`${primaryForeground}`}>
                                    <Group gap="xs" align="center">
                                        <IconDisc style={{ width: rem(20), height: rem(20) }} className={primaryForeground} />
                                        <Text fw={700} fz="xl">Reproductores:</Text>
                                        <Text fz="md" className={mutedForeground}>
                                            Habitualmente usa Pioneer XDJ-RX2. <br></br>
                                            En caso de disponer de equipo en sala, son compatibles CDJ Pioneer (serie 2000 o superior).
                                        </Text>
                                    </Group>
                                </li>
                                <li className={`${primaryForeground}`}>
                                    <Group gap="xs" align="center">
                                        <IconTools style={{ width: rem(20), height: rem(20) }} className={primaryForeground} />
                                        <Text fw={700} fz="xl">Mesa de Mezclas:</Text>
                                        <Text fz="md" className={mutedForeground}>
                                            La mesa de mezclas será cualquiera en buen estado y correctamente configurada.
                                        </Text>
                                    </Group>
                                </li>
                                <li className={`${primaryForeground}`}>
                                    <Group gap="xs" align="center">
                                        <IconHeadset style={{ width: rem(20), height: rem(20) }} className={primaryForeground} />
                                        <Text fw={700} fz="xl">Monitoreo:</Text>
                                        <Text fz="md" className={mutedForeground}>
                                            Se recomienda disponer de monitores de cabina orientados al DJ para una óptima monitorización.                                         </Text>
                                    </Group>
                                </li>
                            </ul>

                            {/* CTA */}
                            <Group className="justify-center desk:justify-start pt-6">
                                <Button
                                    component={Link}
                                    to={contactLink.href}
                                    className={`inline-flex items-center rounded-lg px-8 py-2 text-lg font-bold shadow-lg 
                                        ${primaryColor} ${primaryForeground} ${primaryBorder}
                                        transition duration-300 transform ease-in-out
                                        animate-pulse-shadow hover:shadow-2xl`}
                                    variant="filled"
                                    radius="md"
                                    rightSection={<IconPhone className="h-5 w-5" />}
                                    classNames={{
                                        inner: 'flex items-center gap-[10px] !w-auto',
                                    }}
                                >
                                    Contácta para más detalles
                                </Button>
                            </Group>
                        </div>

                        {/* Imagen */}
                        <div className="desk:w-5/12 flex justify-center pt-8 desk:pt-0 shadow-none">
                            <img
                                src={setupPhoto}
                                alt="Fotografía del equipo de DJing y setup técnico"
                                className="transition-transform duration-700 ease-out group-hover:scale-95 sm:!max-w-none py-8"
                                style={{
                                    width: '100%',
                                    maxWidth: rem(500),
                                    height: 'auto',
                                    borderRadius: rem(10),
                                    boxShadow: 'none',
                                }}
                            />
                        </div>

                    </div>
                </Card>
            </div>
        </section>
    )
}

export default SetupGear