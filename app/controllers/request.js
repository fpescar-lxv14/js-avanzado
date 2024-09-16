export default async function Request(url, config = {}){
    try{
        let data;
        const response = await fetch(url, config)
        const contentType = response.headers.get('Content-Type')
        if(/application\/text/.test(contentType)){
            data = await response.text()
        }
        else if (/image|video|audio/.test(contentType)){
            data = await response.blob()
            data = URL.createObjectURL(data)
        }
        else {
            data = await response.json()
        }
        return data
    }
    catch(error) {
        return error
    }
}