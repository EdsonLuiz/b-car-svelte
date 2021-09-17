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
    color: "#5f6266"
  }

  const resetData = {...carInputMetadata}

  async function handleSubmit(e) {
    await postData(URL, carInputMetadata)
    carsStore.addCar(carInputMetadata)
    carInputMetadata = {...resetData}
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
