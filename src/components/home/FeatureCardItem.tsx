import React, { type FC } from 'react'
import { Link } from 'react-router-dom'
import { Title, Text, Card, Group, CardSection, Image } from '@mantine/core'

interface IconComponentType extends React.FC<{ className: string }> { }

interface FeatureCardItemProps {
    data: {
        icon: IconComponentType
        title: string
        description: string
        color: string
        href: string
        image: string
        imageAlt: string
    }
}

export const FeatureCardItem: FC<FeatureCardItemProps> = ({ data }) => {
    return (
        <Card
            component={Link}
            to={data.href}
            shadow="lg"
            padding={0}
            radius="md"
            withBorder
            className="w-full bg-[hsl(var(--card))] border-[hsl(var(--border))] shadow-none transition-shadow cursor-pointer hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))] opacity-0 animate-fade-in-up delay-[${600 + index * 150}ms]"
        >
            {/* IMAGEN */}
            <CardSection>
                <Image
                    src={data.image}
                    alt={data.imageAlt}
                    className='w-full h-[400px] object-cover'
                    loading='lazy'
                />
            </CardSection>

            {/* 2. CUERPO */}
            <div className="p-4">

                <Group mb="xs" wrap="nowrap" align="center">
                    <data.icon
                        className={`h-6 w-6 text-[hsl(var(--${data.color}))]`}
                        aria-hidden="true"
                    />

                    <Title
                        order={3}
                        className="text-xl font-serif m-0 text-[hsl(var(--card-foreground))]"
                    >
                        {data.title}
                    </Title>
                </Group>

                <Text size="sm" className="text-[hsl(var(--muted-foreground))] font-sans mt-3">
                    {data.description}
                </Text>
            </div>

        </Card>
    )
}