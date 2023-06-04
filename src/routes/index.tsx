import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {

  const pokemonId = useSignal(1); //pimitivos, booleans, strings, numbers

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}
        alt="Pokemon Sprite"
        style={{ width: '200px' }} />

      <div class="mt-2">
        <button onClick$={() => pokemonId.value--} class="btn btn-primary mr-2">Anterior</button>
        <button onClick$={() => pokemonId.value++} class="btn btn-primary">Siguientes</button>
      </div>

    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQuik',
  meta: [
    {
      name: 'description',
      content: 'Esta es mi primera applicacion de Qwik',
    },
  ],
};
