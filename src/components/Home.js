import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import cars from '../cars.json'
import { Link } from 'react-router-dom'
import useStyles from '../style/style'

const Home = () => {
    const classes = useStyles()
    return (
        <div className="card-container">
            {cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent color="primary" className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                            <li>Miles_per_Gallon: {car['Miles_per_Gallon']}</li>
                            <li>Cylinders: {car['Cylinders']}</li>
                            <li>Displacement: {car['Displacement']}</li>
                            <li>Horsepower: {car['Horsepower']}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.linkColor}>
                        <Link to={`/car/${car.id}`}>More Info</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home
