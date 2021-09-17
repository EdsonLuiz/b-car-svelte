<script>
import { deleteData } from '$lib/http/deleteData';

  import {getData} from '$lib/http/getData'
  import { onMount } from 'svelte';
  import {fly} from 'svelte/transition'
  import {carsStore} from './car_store'

  const URL = 'http://localhost:3333/cars'

  const tableHeaders = [
    'Imagem',
    'Mara/ Modelo',
    'Ano',
    'Placa',
    'Cor',
    'Ação'
  ]
  async function handleDelete(plate) {
    await deleteData(URL, {plate})
    carsStore.removeCar(plate)
  }

  onMount(async() => {
    carsStore.set(await getData(URL))
  })
</script>


<table class="table">
  <thead>
    <tr>
      {#each tableHeaders as header (header) }
        <th scope="col">{header}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each $carsStore as car (car.plate)}
      <tr in:fly={{x: -500, duration: 800}} 
          out:fly={{x: 1500, duration: 1000}}>
        <td>
          <img class="image" src={car.image} alt={car.brandModel}>
        </td>
        <td>{car.brandModel}</td>
        <td>{car.year}</td>
        <td>{car.plate}</td>
        <td style="background-color: {car.color};"></td>
        <td class="cell-delete">
          <button class="btn-delete" type="button" on:click={handleDelete(car.plate)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </td>
      </tr>
    {:else}
      <td colspan="5" class="">Não existem carros</td>
    {/each}
  </tbody>
</table>

<style>
  table {
    height: 100%;
  }
  .image {
    width: 100%;
    height: 50px;
    object-fit: cover;
    display: block;
  }
  .btn-delete {
    display: inline-block;
    border: none;
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
  .bi-trash {
    width: 30%;
    height: auto;
    fill: red;
  }
</style>