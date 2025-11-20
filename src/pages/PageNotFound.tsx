import React from 'react';
import { Title, Text, Button, Container, Group } from '@mantine/core';
import { IconArrowLeft, IconHome } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
    const primaryForeground = 'text-[hsl(var(--foreground))]';
    const mutedForeground = 'text-[hsl(var(--muted-foreground))]';

    return (
        <Container fluid className="bg-[hsl(var(--background))] min-h-screen flex items-center justify-center py-20">
            <Container size="md" className="text-center">

                <Title
                    className={`font-serif ${mutedForeground}`}
                    style={{ fontSize: '7rem', fontWeight: 900 }}
                    mb="md"
                >
                    404
                </Title>

                <Title
                    order={2}
                    className={`text-4xl md:text-5xl font-bold ${primaryForeground}`}
                    mb="lg"
                >
                    ¡Vaya! Página no encontrada.
                </Title>

                <Text size="lg" className={`${mutedForeground} mb-xl`}>
                    Parece que la dirección URL que has introducido no existe o el enlace está roto.
                </Text>

                <Group justify="center" mt="xl">
                    <Button
                        component={Link}
                        to="/"
                        size="lg"
                        radius="md"
                        leftSection={<IconHome size={20} />}
                        className="mantine-focus-auto mantine-active inline-flex items-center rounded-lg px-8 py-2 text-lg font-bold shadow-lg 
                                     bg-[hsl(var(--primary))] !text-[hsl(var(--background))] border-[hsl(var(--primary))]
                                     transition duration-300 transform ease-in-out
                                     animate-pulse-shadow hover:shadow-2xl"
                    >
                        Volver al Inicio
                    </Button>

                    <Button
                        component="a"
                        onClick={() => window.history.back()}
                        variant="subtle"
                        size="lg"
                        radius="md"
                        leftSection={<IconArrowLeft size={20} />}
                        className={`${primaryForeground} hover:bg-[hsl(var(--muted-foreground))]/10`}
                    >
                        Página anterior
                    </Button>
                </Group>

            </Container>
        </Container>
    );
};

export default PageNotFound;