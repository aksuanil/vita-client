import { axiosRequest } from "../api";

const getUsdaData = async (search: string) => {
    const response = await axiosRequest.get('/food/getUsdaDataByName?usdaSearch=' + search);
    if (response.status === 200) {
        return response.data;
    }
    else {
        return false;
    }
};

export { getUsdaData };