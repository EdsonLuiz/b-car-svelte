import {writable} from 'svelte/store'

const {subscribe, update, set} = writable([])

export const carsStore = {
  subscribe,
  set,
  addCar: car => update(actualState => [car, ...actualState]),
  removeCar: plate => update(actualState => {
    return actualState.filter(car => car.plate !== plate)
  })
}
