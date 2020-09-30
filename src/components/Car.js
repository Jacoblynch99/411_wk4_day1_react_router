import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import { Container, Paper, Chip, Typography } from '@material-ui/core'
import useStyles from '../style/style'

const Car = (props) => {
    const classes = useStyles()
    const id = parseInt(props.match.params.id)
    const foundCar = cars.find((car) => car.id === id)
    return (
        <Container maxWidth="sm">
            <Paper className={classes.carPaper}>
                <Container maxWidth="xs">
                    <Typography className={classes.carName}>
                        {foundCar.Name}
                    </Typography>
                    <Chip label={`id: ${foundCar.id}`} />
                    <Chip label={`Name: ${foundCar.Name}`} />
                    <Chip
                        label={`Miles_per_Gallon: ${foundCar.Miles_per_Gallon}`}
                    />
                    <Chip label={`Cylinders: ${foundCar.Cylinders}`} />
                    <Chip label={`Displacement: ${foundCar.Displacement}`} />
                    <Chip label={`Horsepower: ${foundCar.Horsepower}`} />
                    <Chip label={`Weight_in_lbs: ${foundCar.Weight_in_lbs}`} />
                    <Chip label={`Acceleration: ${foundCar.Acceleration}`} />
                    <Chip label={`Year: ${foundCar.Year}`} />
                    <Chip label={`Origin: ${foundCar.Origin}`} />
                </Container>
            </Paper>
        </Container>
    )
}

export default Car
