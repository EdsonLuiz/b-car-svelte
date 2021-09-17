<script>
  import Input from '$lib/generic/Input.svelte'
  import { postData } from '$lib/http/postData';
  import {carsStore} from './car_store'

  const URL = 'http://localhost:3333/cars'

  let carInputMetadata = {
    image: "",
    brandModel: "",
    year: 0,
    plate: "",
    color: ""
  }

  async function handleSubmit(e) {
    await postData(URL, carInputMetadata)
    carsStore.addCar(carInputMetadata)
    /**
     * this reset fires the error:
     * The specified value "" does not conform to the required format.  
     * The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
     * */ 

    /**
     * possible solution: clear all fields manually
    */
    e.target.reset()
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="row">
    <Input bind:value={carInputMetadata.image} placeholder="Imagem" />
    <Input bind:value={carInputMetadata.brandModel} placeholder="Marca/ Modelo" />
  </div>
  <div class="row">
    <Input bind:value={carInputMetadata.year} type="number" placeholder="Ano" />
    <Input bind:value={carInputMetadata.plate} placeholder="Placa" />
    <Input bind:value={carInputMetadata.color} type="color" placeholder="Cor" />
  </div>
  <button type="submit" class="btn btn-primary col-2">Enviar</button>
</form>
