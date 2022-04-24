const FetchData = async (country) => {
    let url = "https://covid19.mathdro.id/api"

    if (country !== "Global") {
        url = `https://covid19.mathdro.id/api/countries/${country}`
    }

    let res = await fetch(url)
    let {
        confirmed: { value: confirmed },
        deaths: { value: deaths },
        recovered: { value: recovered }
    } = await res.json()

    console.log("Fetched Data", { confirmed, deaths, recovered });
    return { confirmed, deaths, recovered };
}

export default FetchData