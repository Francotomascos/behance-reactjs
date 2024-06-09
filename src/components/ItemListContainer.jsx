import { Row } from 'react-bootstrap'
import Card from './Card'

export default function ItemListContainer ({data}) {
  return (
    <Row>
        {data.map(product => (
            <Card key={product.id} product={product} />
        ))}
    </Row>
  )
}