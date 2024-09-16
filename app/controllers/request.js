async function Request(url, config = {}){
    try{
        const response = await fetch(url, config)
        const data = await response.json()
        return data
    }
    catch(error) {
        return error
    }
}