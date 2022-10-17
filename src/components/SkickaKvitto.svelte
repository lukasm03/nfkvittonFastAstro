<script>
    let ValdKategori, Vara, Pris, Datum, Swish, Bild;
    let Typavköp = "Avgift";
    const typer = ["Avgift", "Intäkt"];
    const OlikaKategorier = [
        "Laborationer",
        "Medlemsavgifter",
        "Kök&fester",
        "Försäljning",
        "NF-artiklar",
        "Övrigt",
    ];

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
            Bild = e.target.result;
        };
    };
</script>

<div class="Form">
    <div class="centerKnappar">
        {#each typer as typ}
            <button on:click={() => (Typavköp = typ)}>{typ}</button>
        {/each}
    </div>
    <form class="formStyle">
        <label class="labelStyle" for="kategori">Kategori på {Typavköp}:</label>
        <select name="kategori"class="kategori" bind:value={ValdKategori} required>
            {#each OlikaKategorier as kategori}
                <option value={kategori}>{kategori}</option>
            {/each}
        </select>

        <label class="labelStyle" for="Vara">Vara:</label>
        <input
            type="text"
            name="Vara"
            maxLength="16"
            bind:value={Vara}
            required
        />

        <label class="labelStyle" for="Pris">Pris:</label>
        <input type="number" name="Pris" bind:value={Pris} required />

        <label class="labelStyle" for="Datum">Datum:</label>
        <input type="date" name="Datum" bind:value={Datum} required />

        <label class="labelStyle" for="Bild">Bild:</label>
        <input
            type="file"
            accept="image/*"
            name="Bild"
            style={{ alignSelf: "center" }}
            placeholder="bild på kvitto"
            on:change={(e)=>onFileSelected(e)}
            required
        />

        <label class="labelStyle" for="Swish">Swish-nummer:</label>
        <input
            type="tel"
            name="Swish"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            bind:value={Swish}
            required
        />

        <button class="buttonStyle" type="submit"> Skicka in kvitto </button>
    </form>
</div>

<style>
    .Form {
        width: fit-content;
        justify-self: center;
        align-self: center;
    }

    .formStyle {
        display: flex;
        flex-direction: column;
        max-width: 62vw;
        align-self: center;
    }
    .kategori {
        min-width: 120px;
        max-width: 6vw;
    }

    .labelStyle {
        margin-top: 1vh;
        margin-bottom: 0.5vh;
    }

    .buttonStyle {
        margin-top: 2vh;
        width: fit-content;
    }
    .centerKnappar {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 800px) {
        .container {
            padding-bottom: 30vh;
        }
        .kategori {
            max-width: fit-content;
        }
    }
</style>
