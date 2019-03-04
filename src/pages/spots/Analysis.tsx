import React, { useEffect, useState, FC } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import pose, { PoseGroup } from 'react-pose'

import { databaseRef } from '../../firebase'
import Paginate from '../../components/Paginate'
import { Container as Containerable } from '../../components/Container'
import { Button as Buttonable } from '../../components/Button'
import { Modal } from '../../components/Modal'

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  tr {
    padding: 20px 0;
    height: 55px;
  }

  td {
    color: #8f9498;
    border-bottom: 1px solid #ddd;
  }
`

const Container = styled.div`
  ${Containerable}
`

const Button = styled(Buttonable)`
  margin: 0 auto;
`

type Props = {
  perPage: number
}

type Spot = {
  data: {
    hasFree: boolean
    images: string[]
    modalities: {
      longboard: boolean
      street: boolean
    }
    name: string
  }
  location: {
    latitude: number
    longitude: number
  }
  type: string
  uid: string
}

export const Analysis: FC<Props> = ({ perPage = 10 }: Props) => {
  const [spots, setSpots] = useState<Spot[]>([])
  const [analysis, setAnalysis] = useState<Spot[]>([])
  const [pageCount, setPageCount] = useState(0)
  const [offset, setOffset] = useState(0)
  const [seeing, setSeeing] = useState<{
    isSeeing: boolean
    spot?: Spot
  }>({
    isSeeing: false
  })

  const fetchSpots = () => {
    const spots = databaseRef.ref('analyze')

    const whenFetched = snapshot => {
      const values = snapshot.val()

      const spots = Object.keys(values).map(spot => values[spot])

      setSpots(spots)
      setAnalysis(spots)
      setPageCount(Math.ceil(spots.length / perPage))
    }

    spots.once('value').then(whenFetched)
  }

  const getPaginatedAnalysis = analysis => {
    return analysis.slice(offset, offset + perPage)
  }

  const whenPageChange = ({ selected }) => {
    setOffset(Math.ceil(selected * perPage))
    setAnalysis(getPaginatedAnalysis(spots))
  }

  useEffect(() => {
    fetchSpots()
  }, [])

  return (
    <>
      {seeing.isSeeing && (
        <Modal buttonWasClicked={() => setSeeing({ isSeeing: false })}>
          <h1>{seeing.spot.data.name}</h1>
        </Modal>
      )}

      <Container>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Street</th>
              <th>Longboard</th>
              <th>Gratuito</th>
              <th>Mais detalhes</th>
            </tr>
          </thead>
          <tbody>
            {spots &&
              getPaginatedAnalysis(spots).map((spot: Spot) => (
                <tr key={uuid()}>
                  <td>{spot.data.name}</td>
                  <td>{spot.data.modalities.street ? '👍🏼' : '👎🏼'}</td>
                  <td>{spot.data.modalities.longboard ? '👍🏼' : '👎🏼'}</td>
                  <td>{spot.data.hasFree ? '👍🏼' : '👎🏼'}</td>
                  <td>
                    <Button
                      onClick={() =>
                        setSeeing({
                          isSeeing: true,
                          spot
                        })
                      }
                      color="primary"
                      size="small"
                    >
                      Mais detalhes
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <Paginate
          breakLabel={<a href="">...</a>}
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={whenPageChange}
          activeClassName="active"
        />
      </Container>
    </>
  )
}
