import { Card, Title, Text, Stack, Group } from "@mantine/core"
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react"
import { useNavigation } from "../../hooks/useNavigation"
import { useContactInfo } from "../../hooks/useContactInfo"

const cardBaseClasses = `
  max-h-[400px]
  bg-[hsl(var(--card))] border-[hsl(var(--border))]
  shadow-none transition-all duration-500
  hover:shadow-md hover:shadow-[hsl(var(--muted-foreground))]
  opacity-0 animate-fade-in-up
`

export const ContactInfoCard = () => {
    const { socialLinks } = useNavigation()
    const { email, phone, address } = useContactInfo()

    return (
        <Card shadow="md" radius="md" withBorder className={cardBaseClasses} p="xl">
            <Title order={3} className="text-white mb-10">
                Información
            </Title>

            <Stack className="space-y-4 text-white text-base">
                <Group align="flex-start">
                    <IconMail size={24} />
                    <div>
                        <Text className="text-sm font-semibold">Email</Text>
                        <Text className="text-base">{email}</Text>
                    </div>
                </Group>

                <Group align="flex-start">
                    <IconPhone size={24} />
                    <div>
                        <Text className="text-sm font-semibold">Teléfono</Text>
                        <Text className="text-base">{phone}</Text>
                    </div>
                </Group>

                <Group align="flex-start">
                    <IconMapPin size={24} />
                    <div>
                        <Text className="text-sm font-semibold">Dirección</Text>
                        <Text className="text-base">{address}</Text>
                    </div>
                </Group>
            </Stack>

            {/* Redes sociales */}
            <div className="mt-12 flex space-x-6">
                {socialLinks.map((item) => {
                    const IconComponent = item.icon as React.FC<{ className: string }>
                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition duration-300"
                            aria-label={`Enlace a ${item.label}`}
                        >
                            <IconComponent className="h-6 w-6" />
                        </a>
                    )
                })}
            </div>
        </Card>
    )
}
