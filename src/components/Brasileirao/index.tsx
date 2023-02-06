import { Box, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useChampionships } from '../../services/championships'
import Header from '../Header'
import Switcher from '../Switcher'

const Brasileirao = () => {

    const championshipService = useChampionships()
    const [tableData, setTableData] = useState([])
    const [strikersTableData, setStrikersTableData] = useState([])

    useEffect(() => {
        async function getTableData() {
            const { data } = await championshipService.getTableByChampionshipId('2')
            setTableData(data)
        }
        getTableData()
    }, [])

    useEffect(() => {
        async function getStrikersTableData() {
            const data = await championshipService.getStrikersByChampionshipId('2')
            setStrikersTableData(data)
        }
        getStrikersTableData()
    }, [])



    return (
        <Box bgColor='#1f1f1f'>
            <Header />
            <Image
                src='src/assets/banner.jpg'
                w='100%'
            />
            <Heading textAlign='center' color='#a3ba66' my={12}> Brasileirão Série A </Heading>
            <Flex justify='space-evenly'>
                <TableContainer>
                    <Table variant='simple' size='md' mb='10'>
                        <Thead>
                            <Tr bgColor='#a3ba66'>
                                <Th></Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>Time</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>P</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>J</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>V</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>E</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>D</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>GP</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>GC</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold' color='#1f1f1f'>SG</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tableData.map((item: any, index) => {
                                return (
                                    <Tr color='white' key={index} fontFamily='Open Sans, sans-serif'>
                                        <Td>{index + 1}</Td>
                                        <Td> <Flex gap={6} align='center'> <Image boxSize='30px' src={item.time.escudo} /> {item.time.nome_popular}</Flex></Td>
                                        <Td>{item.pontos}</Td>
                                        <Td>{item.jogos}</Td>
                                        <Td>{item.vitorias}</Td>
                                        <Td>{item.empates}</Td>
                                        <Td>{item.derrotas}</Td>
                                        <Td>{item.gols_pro}</Td>
                                        <Td>{item.gols_contra}</Td>
                                        <Td>{item.saldo_gols}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Switcher championshipId={2} />
            </Flex>

            <Box>
                <Heading textAlign='center' color='#a3ba66' my={12}> Artilharia </Heading>
                <TableContainer >
                    <Table w='90%' variant='simple' size='md' margin='0 auto' mb='10'>
                        <Thead>
                            <Tr bgColor='#a3ba66'>
                                <Th></Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold'>Nome</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold'>Posição</Th>
                                <Th fontFamily='Open Sans, sans-serif' fontWeight='extrabold'>Gols</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {strikersTableData.map((player: any, index) => {
                                return (
                                    <Tr color='white' key={index} fontFamily='Open Sans, sans-serif'>
                                        <Td>{index + 1}</Td>
                                        <Td> <Flex gap={6} align='center'> <Image boxSize='30px' src={player.time.escudo} /> {player.atleta.nome_popular}</Flex></Td>
                                        <Td>{player.atleta.posicao.sigla}</Td>
                                        <Td>{player.gols}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>


    )
}

export default Brasileirao