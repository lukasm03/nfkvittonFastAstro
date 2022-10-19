<script>

export let Kategori, Vara, Pris, Datum, Swish, Bild, Typavköp;

</script>


<div class="parent">
        <div class="div6">
            <img src={Bild} alt={"bild på kvittot"} height={80} width={80} />
        </div>
        <div class="div1"><p class="fitText">namn
            på {Typavköp}: {Vara} </p>
        </div>
        <div class="div2"><p class="fitText">pris
            på {Typavköp}: {Pris} kr</p>
        </div>
        <div class="div3"><p class="fitText">kategori
            på {Typavköp}: {Kategori}</p>
        </div>
        <div class="div4"><p class="fitText">datum {Typavköp}en
            skedde: {Datum}</p>
        </div>
        <div class="div5"><p class="fitText">swishnummer: {Swish}</p>
        </div>
</div>

<style>
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
