<script>
    import EttKvitto from "./EttKvitto.svelte";

    let VilkaKvittonAttVisa = "alla"
    export let data;;
</script>

<div>
    <span class="FlexAndCenter">
        <button class="FlexAndCenter"> exportera till excel </button>
    </span>
    <div class="centerKnappar">
        <button
            name="visaalla"
            value="alla"
            on:click={() => (VilkaKvittonAttVisa = "alla")}
            >visa alla
        </button>
        <button
            name="visaintefixade"
            value="intefixade"
            on:click={() => (VilkaKvittonAttVisa = "intefixade")}
            >visa inte fixade
        </button>
        <button
            name="visaintäkter"
            value="visaintäkter"
            on:click={() => (VilkaKvittonAttVisa = "Intäkt")}
            >visa intäkter
        </button>
        <button
            name="visautgifter"
            value="visautgifter"
            on:click={() => (VilkaKvittonAttVisa = "Avgift")}
            >visa avgifter
        </button>
    </div>

    {#if VilkaKvittonAttVisa == "alla"}
        {#each data as { Vara, Pris, Kategori, Swish, Bild, Datum, Typavköp }}
            <EttKvitto
                {Vara}
                {Pris}
                {Kategori}
                {Swish}
                {Bild}
                {Datum}
                {Typavköp}
            />
        {/each}
    {:else if VilkaKvittonAttVisa == "Intäkt"}
        {#each data as { Vara, Pris, Kategori, Swish, Bild, Datum, Typavköp }}
            {#if Typavköp == "intäkt"}
                <EttKvitto
                    {Vara}
                    {Pris}
                    {Kategori}
                    {Swish}
                    {Bild}
                    {Datum}
                    {Typavköp}
                />
            {/if}
        {/each}
    {:else if VilkaKvittonAttVisa == "intefixade"}
        {#each data as { Vara, Pris, Kategori, Swish, Bild, Datum, Typavköp, Fixad }}
            {#if Fixad == false}
                <EttKvitto
                    {Vara}
                    {Pris}
                    {Kategori}
                    {Swish}
                    {Bild}
                    {Datum}
                    {Typavköp}
                />
            {/if}
        {/each}
    {:else if VilkaKvittonAttVisa == "Avgift"}
        {#each data as { Vara, Pris, Kategori, Swish, Bild, Datum, Typavköp }}
            {#if Typavköp == "avgift"}
                <EttKvitto
                    {Vara}
                    {Pris}
                    {Kategori}
                    {Swish}
                    {Bild}
                    {Datum}
                    {Typavköp}
                />
            {/if}
        {/each}
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .Header {
        justify-self: center;
        align-self: center;
        width: 70vw;
        margin-top: 2vh;
        max-width: 400px;
    }

    .centerKnappar {
        margin-top: 0.5vh;
        display: flex;
        justify-content: center;
    }

    .FlexAndCenter {
        display: flex;
        justify-content: center;
    }

    .Padding1REM {
        display: grid;
        align-self: center;
        justify-self: center;
    }

    .parent {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        width: fit-content;
        padding-bottom: 1rem;
        padding-top: 0.5rem;
    }

    .div1 {
        grid-area: 1 / 2 / 2 / 3;
        align-self: center;
        justify-content: center;
    }
    .div2 {
        grid-area: 2 / 2 / 3 / 3;
        align-self: center;
        justify-content: center;
    }
    .div3 {
        grid-area: 3 / 2 / 4 / 3;
        align-self: center;
        justify-content: center;
    }
    .div4 {
        grid-area: 4 / 2 / 5 / 3;
        align-self: center;
        justify-content: center;
    }
    .div5 {
        grid-area: 5 / 2 / 6 / 3;
        align-self: center;
        justify-content: center;
    }
    .div6 {
        grid-area: 1 / 1 / 6 / 2;
        align-self: center;
        margin-right: 1rem;
        justify-content: center;
        width: 80px;
        height: 80px;
    }

    .fitText {
        height: fit-content;
    }

    @media screen and (max-height: 900px) {
        .container {
            padding-bottom: 5vh;
        }
        .fitText {
            height: fit-content;
            margin: 0;
        }
    }
</style>
