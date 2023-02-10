import { Box, Button, Container, Divider, Flex, Heading, Icon, Image, Text, Spinner } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useChampionships } from '../../services/championships'
import { roundProps } from '../../types/championship'

interface switcherProps {
    championshipId: number,
}

const Switcher = ({ championshipId }: switcherProps) => {
    const [round, setRound] = useState<number>(1)
    const [matches, setMatches] = useState<roundProps>({
        nome: '',
        partidas: [{
            campeonato: {
                campeonato_id: 0
            },
            data_realizacao: '',
            estadio: {
                nome_popular: ''
            },
            hora_realizacao: '',
            partida_id: 0,
            placar_mandante: 0,
            placar_visitante: 0,
            time_mandante: {
                escudo: '',
                nome_popular: '',
                sigla: '',
                time_id: 0
            },
            time_visitante: {
                escudo: '',
                nome_popular: '',
                sigla: '',
                time_id: 0
            }
        }]
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const roundService = useChampionships()

    useEffect(() => {
        async function getRound() {
            setIsLoading(true)
            const response = await roundService.getRoundById(championshipId, round)
            setMatches(response)
            setIsLoading(false)
        }
        getRound()
    }, [round])

    return (
        <Container m='0'>
            <Heading color='#a3ba66' mb='4'>JOGOS</Heading>
            <Divider />
            <Flex align='center' justify='space-between'>
                <Button _hover={{ bgColor: 'inherit' }} backgroundColor={'transparent'} isDisabled={round === 1} onClick={() => round > 1 && setRound(round - 1)}>
                    <Icon color='white' as={ArrowBackIcon} />
                </Button>
                <Text color='white'> {matches.nome} </Text>
                <Button _hover={{ bgColor: 'inherit' }} backgroundColor={'transparent'} isDisabled={round === 38} onClick={() => round < 38 && setRound(round + 1)}>
                    <Icon color='white' as={ArrowForwardIcon} />
                </Button>
            </Flex>


            {isLoading ? (
                <Flex align='center' justify='center'>
                    <Spinner color='white' />
                </Flex>
            ) :
                matches.partidas.map((partida, index: number) => {
                    return (
                        <Box key={index}>
                            <Heading color='white' my='4' textAlign='center' size='xs'>
                                {partida.data_realizacao} - {partida.estadio.nome_popular} - {partida.hora_realizacao}
                            </Heading>
                            <Flex color='white' align='center' justify='space-between' m='1rem auto' w='50%'>
                                <Flex align='center' gap='2'>
                                    <Text fontSize={18}>{partida.time_mandante.sigla}</Text>
                                    <Image src={partida.time_mandante.escudo} boxSize='35px' />
                                </Flex>
                                <Flex align='center' gap='2'>
                                    <Text fontSize={18}>{partida.placar_mandante}</Text>
                                    <Icon as={CloseIcon} w='2' h='2' />
                                    <Text fontSize={18}>{partida.placar_visitante}</Text>
                                </Flex>
                                <Flex align='center' gap='2'>
                                    <Image src={partida.time_visitante.escudo} boxSize='35px' />
                                    <Text fontSize={18}>{partida.time_visitante.sigla}</Text>
                                </Flex>
                            </Flex>
                            <Divider />
                        </Box>
                    )
                })

            }

        </Container>

    )
}

export default Switcher