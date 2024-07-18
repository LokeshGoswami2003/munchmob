const fetchLocationData = async (address) => {
    try {
        console.log(address);
        const nullReturn = {
            nothingFound: "nothingFound",
            address,
            location: ["000", "000"],
        };
        console.log("fetchAreaData called");

        if (address.length === 0) {
            console.log("address len 0");
            return nullReturn;
        }

        const apiString =
            "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            address +
            "&key=AIzaSyBSg1SK4SAQdw7_MTs1eQ9pEAdPcdbm-m4";

        console.log("google api string is");
        console.log(apiString);

        const data = await fetch(apiString);
        const json = await data.json();

        if (json.results.length === 0) {
            console.log("location is null");
            return nullReturn;
        }

        const lat = json?.results[0]?.geometry?.location.lat || 0;
        const lng = json?.results[0]?.geometry?.location.lng || 0;
        const formattedAddress = json?.results[0]?.formatted_address;

        console.log("location is", lat, lng, formattedAddress);
        return { address: formattedAddress, location: [lat, lng] };
    } catch (e) {
        console.log(e);
    }
};
export default fetchLocationData;
