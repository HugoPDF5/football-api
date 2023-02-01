import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Image, Button, Text, Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { reqs } from '../../services/reqs'

export const Home = () => {
    const service = reqs()

    useEffect(() => {
        async function getChamp() {
            const data = await service.getChampionship()
        }
        getChamp()
    }, [])

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            w='20%'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='src/assets/foot1.jpg'
                alt='Ball'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>The perfect latte</Heading>

                    <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy Latte
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}
