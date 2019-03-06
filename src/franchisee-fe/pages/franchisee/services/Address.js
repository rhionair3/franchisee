export const getProvince = () => {
    return fetch('/api/propinsi', {
        method: 'POST',
        body: JSON.stringify({
            orders : 999
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};

export const getRegency = (province_id) => {
  console.log(province_id);
    return fetch('/api/kota', {
        method: 'POST',
        body: JSON.stringify({
            provinceId : province_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};
export const getDistrict = (regency_id) => {
    return fetch('/api/kecamatan', {
        method: 'POST',
        body: JSON.stringify({
            regencyId : regency_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};

export const getPostal = (district_id) => {
    return fetch('/api/kodepos', {
        method: 'POST',
        body: JSON.stringify({
            districtId : district_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};