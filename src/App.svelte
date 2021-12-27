<script>
    import {pinyin} from 'pinyin-pro';

    let zhValue;
    let pinyinValue = '';

    function onEnter(e) {
        if (e.charCode === 13) {
            pinyinValue = pinyin(zhValue)
        }
    }
</script>

<main>
    <h1>Chinese Characters:</h1>
    <input type="text" bind:value={zhValue} on:keypress={onEnter}/>
    <p>{pinyinValue}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>