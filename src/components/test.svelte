<script>
    let a = 1;
    let b = 2;
</script>

<div class="Form">
    <div class="centerKnappar">
        <button name="typavkop" value="avgift">Avgifter
        </button>
        <button name="typavkop" value="intäkt">Intäkter
        </button>
    </div>
    <form class="formStyle">
        <label class="labelStyle" for="kategori">Kategori på köp:</label>
        <select class="kategori" name="kategori" id="kategori" required>
            <option value="Laborationer" name="Laborationer">Laborationer
            </option>
            <option value="Medlemsavgifter" name="Medlemsavgifter">Medlemsavgifter
            </option>
            <option value="Kök&fester">Kök & fester</option>
            <option value="Försäljning">Försäljning</option>
            <option value="NF-artiklar">NF-artiklar</option>
            <option value="Övrigt">Övrigt</option>
        </select>
        <label class="labelStyle" for="Vara">Vara:</label>
        <input type="text" name="Vara" maxLength=16 required/>
        <label class="labelStyle" for="Pris">Pris:</label>
        <input type="number" name="Pris" required/>
        <label class="labelStyle" for="Datum">Datum:</label>
        <input type="date" name="Datum" required/>
        <label class="labelStyle" for="Swish">Swish-nummer:</label>
        <input type="tel" name="Swish" required/>
        <button class="buttonStyle" type="submit">
            Skicka in kvitto
        </button>
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
