import { Box, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useChampionships } from '../../services/championships'
import Switcher from '../Switcher'

const Brasileirao = () => {

    const championshipService = useChampionships()
    const [tableData, setTableData] = useState([])
    const [idChamp, setIdChamp] = useState<number>(10)

    useEffect(() => {
        async function getTableData() {
            const { data } = await championshipService.getTableByChampionshipId(idChamp)
            setTableData(data)
        }
        getTableData()
    }, [])

    return (
        <Box bgColor='#1f1f1f'>
            <Image
                src='src/assets/banner.jpg'
                w='100%'
            />
            <Heading textAlign='center' color='#a3ba66' my={12}> Brasileirão Série A </Heading>
            <Flex justify='space-evenly' direction={['column', 'column', 'row', 'row']}>
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
                <Switcher championshipId={idChamp} />
            </Flex>
        </Box>
    )
}

export default Brasileirao