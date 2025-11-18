import React from 'react'
import { Modal, Button, Text, rem } from '@mantine/core'
import { IconX } from '@tabler/icons-react'

interface ImageLightboxProps {
    opened: boolean
    onClose: () => void
    selectedImage: { src: string; alt: string; location?: string } | null
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ opened, onClose, selectedImage }) => {
    return (
        <Modal
            opened={opened}
            withCloseButton={false}
            onClose={onClose}
            size="80%"
            centered
            overlayProps={{
                backgroundOpacity: 0.75,
                blur: 1,
            }}
            classNames={{
                content: 'bg-[hsl(var(--background))]',
            }}
        >
            {selectedImage && (
                <>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '80vh',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                    <Button
                        onClick={onClose}
                        variant="subtle"
                        color="gray"
                        style={{
                            position: 'absolute',
                            top: rem(10),
                            right: rem(10),
                            zIndex: 10
                        }}
                    >
                        <IconX size="1.5rem" />
                    </Button>
                    <Text size="lg" ta="center" mt="sm" className="text-[hsl(var(--foreground))]">
                        {selectedImage.alt} {selectedImage.location ? ` - ${selectedImage.location}` : ''}
                    </Text>
                </>
            )}
        </Modal>
    )
}

export default ImageLightbox