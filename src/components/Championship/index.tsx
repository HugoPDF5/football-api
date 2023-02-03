import { Flex, Heading, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Header from '../Header'
import { useChampionships } from '../../services/championships'
const Championship = () => {

    const championshipService = useChampionships()
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        async function getTableData() {
            const { data } = await championshipService.getTableByChampionshipId('2')
            setTableData(data)
        }
        getTableData()
    }, [])

    return (
        <>
            <Header/>
            <Image
                src='src/assets/banner.jpg'
                w='100%'
            />

            <Heading textAlign='center' color='#50f000' my={12}> Tabela Brasileirão Série A </Heading>
            <TableContainer>
                <Table w='90%' variant='simple' size='md' margin='0 auto' mb='10'>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Time</Th>
                            <Th>Pontos</Th>
                            <Th>Jogos</Th>
                            <Th>Vitórias</Th>
                            <Th>Empates</Th>
                            <Th>Derrotas</Th>
                            <Th>GP</Th>
                            <Th>GC</Th>
                            <Th>Saldo</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData.map((item: any, index) => {
                            return (
                                <Tr>
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


        </>


    )
}

export default Championship